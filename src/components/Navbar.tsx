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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#05060A]/80 dark:bg-[#05060A]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xl font-display font-extrabold tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-400 to-indigo-600 flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform">
              ⚡
            </span>
            <span className="text-white group-hover:text-indigo-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-cyan-400/80 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
              dev
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons: Theme Toggle + GitHub + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* GitHub Profile Link */}
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-2 rounded-xl glass-card hover:border-indigo-500/40 transition-all group"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:brightness-110 transition-all"
            >
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#070913]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl glass-card text-xs font-mono text-slate-200 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25"
                >
                  <span>Let's Talk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
