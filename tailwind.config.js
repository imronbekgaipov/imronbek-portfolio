/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#05060A',
          secondary: '#0C0E17',
          tertiary: '#131726',
          card: 'rgba(12, 14, 23, 0.7)',
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          DEFAULT: '#6366f1',
        },
        accent: {
          blue: '#38bdf8',
          electric: '#00d2ff',
          purple: '#a855f7',
          violet: '#8b5cf6',
          emerald: '#10b981',
        },
        surface: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(99, 102, 241, 0.4)',
          glow: 'rgba(99, 102, 241, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Cabinet Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.25), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #38bdf8 0deg, #6366f1 180deg, #a855f7 360deg)',
      }
    },
  },
  plugins: [],
}
