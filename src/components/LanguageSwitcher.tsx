import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) ||
    LANGUAGES.find((l) => i18n.language.startsWith(l.code)) ||
    LANGUAGES[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Language: ${currentLang.label}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1 h-8 sm:h-9 px-2 sm:px-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-indigo-500/40 transition-colors cursor-pointer select-none"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wide hidden min-[380px]:block">
          {currentLang.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 top-full mt-2 w-40 rounded-2xl glass-card border-black/[0.08] dark:border-white/[0.12] shadow-xl overflow-hidden z-50 py-1"
        >
          {LANGUAGES.map((lang) => {
            const isActive = currentLang.code === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-mono transition-colors cursor-pointer text-left
                  ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="font-semibold uppercase">{lang.code}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal normal-case">{lang.label}</span>
                </div>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
