import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

type ToggleThemeEvent =
  | React.MouseEvent
  | MouseEvent
  | React.TouchEvent
  | TouchEvent
  | { clientX: number; clientY: number }
  | undefined;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: ToggleThemeEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const isTransitioningRef = useRef(false);

  const updateFavicon = (targetTheme: Theme) => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      const href = targetTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';
      favicon.href = href;
      favicon.setAttribute('href', href);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
    updateFavicon(theme);
  }, [theme]);

  const toggleTheme = async (event?: ToggleThemeEvent) => {
    // Avoid double-clicks or rapid triggering while transition is active
    if (isTransitioningRef.current) return;

    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    // Immediately update browser tab favicon
    updateFavicon(nextTheme);

    // Respect prefers-reduced-motion accessibility setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Direct toggle if View Transitions API is not supported or if user prefers reduced motion
    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    isTransitioningRef.current = true;

    // Calculate exact button coordinates
    let x = window.innerWidth - 60;
    let y = 30;

    if (event) {
      if ('clientX' in event && typeof event.clientX === 'number' && event.clientX > 0) {
        x = event.clientX;
        y = event.clientY;
      } else if ('currentTarget' in event && event.currentTarget) {
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    } else {
      const toggleBtn = document.querySelector('[data-theme-toggle]') as HTMLElement | null;
      if (toggleBtn) {
        const rect = toggleBtn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    // Calculate maximum radius to furthest screen corner with safe extra margin
    const endRadius = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
    ) + 16;

    // Set CSS custom properties on root for CSS animations
    document.documentElement.style.setProperty('--theme-toggle-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-toggle-y', `${y}px`);
    document.documentElement.style.setProperty('--theme-toggle-radius', `${endRadius}px`);

    try {
      const transition = document.startViewTransition(() => {
        // Suppress intermediate transitions so the new view is captured crisp and complete
        document.documentElement.classList.add('theme-transitioning');

        flushSync(() => {
          setTheme(nextTheme);
        });

        const root = document.documentElement;
        if (nextTheme === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else {
          root.classList.add('light');
          root.classList.remove('dark');
        }
        localStorage.setItem('portfolio-theme', nextTheme);

        void root.offsetHeight; // Force layout reflow
        root.classList.remove('theme-transitioning');
      });

      await transition.ready;

      // Execute smooth, cinematic 1.8s circular wave reveal on ::view-transition-new(root)
      const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1800,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
          fill: 'forwards',
        }
      );

      await animation.finished;
    } catch {
      // Graceful fallback
      setTheme(nextTheme);
    } finally {
      isTransitioningRef.current = false;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
