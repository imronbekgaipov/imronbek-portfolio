import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-white/90 dark:bg-[#05060A]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'py-3.5 sm:py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="group flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-display font-extrabold tracking-tight shrink-0"
          >
            {/* Theme-Adaptive IG Monogram Brand Logo (Replaces lightning bolt) */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/favicon-light.svg"
                alt="IG Logo"
                className="w-full h-full object-contain dark:hidden rounded-xl"
              />
              <img
                src="/favicon-dark.svg"
                alt="IG Logo"
                className="w-full h-full object-contain hidden dark:block rounded-xl"
              />
            </div>
            <span className="text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-cyan-700 dark:text-cyan-400/80 px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300/40 dark:border-cyan-800/40">
              dev
            </span>
          </a>

          {/* Desktop Navigation Links (Preserved for md and above) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Theme Toggle + GitHub + Let's Talk + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={(e) => toggleTheme(e)}
              data-theme-toggle="true"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-indigo-500/40 transition-colors cursor-pointer group overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* GitHub Profile Link (Desktop / Tablet) */}
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-2 rounded-xl glass-card hover:border-indigo-500/40 transition-all group"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] dark:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:brightness-105 transition-all"
            >
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle (High-touch target: min 40x40px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleLinkClick}
              className="fixed inset-0 top-[57px] sm:top-[65px] bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-Down Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-50 md:hidden bg-white/95 dark:bg-[#070913]/95 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] px-5 sm:px-6 py-5 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 py-3 px-2 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-400">→</span>
                  </a>
                ))}

                {/* Mobile Drawer Action Buttons */}
                <div className="pt-4 mt-2 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col gap-2.5">
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 active:scale-[0.99] transition-all"
                  >
                    <span>Let's Talk</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl glass-card text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub: @imronbekgaipov</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
