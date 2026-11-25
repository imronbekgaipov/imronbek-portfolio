import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/[0.06] dark:border-white/[0.06] bg-slate-100/80 dark:bg-[#030408] relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {t('footer.devPortfolio')}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
              {t('footer.university')}
            </p>
          </div>

          {/* Copyright & Stack credits */}
          <div className="text-center text-xs text-slate-500 dark:text-slate-400 font-mono max-w-xs sm:max-w-none leading-relaxed">
            <span>{t('footer.copyright', { year: currentYear, name: PERSONAL_INFO.name })}</span>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.githubProfile')}
              className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label={t('footer.backToTop')}
              className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors cursor-pointer group"
              title={t('footer.backToTop')}
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
