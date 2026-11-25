import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Sparkles, Terminal, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/imronbek.jpg';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
            {t('about.sectionTag')}
          </span>
        </div>

        <h2 className="font-display font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-10 sm:mb-16">
          {t('about.heading')}
        </h2>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-2.5 sm:p-3 border-black/[0.06] dark:border-white/[0.1] shadow-xl dark:shadow-2xl group">
              {/* Image Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/90 dark:from-[#131728] dark:to-[#0A0D17] border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-4 sm:p-6 pb-20 sm:pb-24 text-center">
                {/* Professional Portrait */}
                <div className="relative w-32 h-40 min-[360px]:w-36 min-[360px]:h-44 sm:w-44 sm:h-52 md:w-48 md:h-56 rounded-[18px] overflow-hidden border-2 border-indigo-500/20 dark:border-indigo-500/40 shadow-lg dark:shadow-[0_0_35px_rgba(99,102,241,0.25)] mb-3 sm:mb-4 group-hover:scale-[1.03] group-hover:border-indigo-500/60 transition-all duration-500 bg-slate-200 dark:bg-slate-800 shrink-0">
                  <img
                    src={profilePhoto}
                    alt={`${PERSONAL_INFO.name} - ${t('about.role')}`}
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-[16px] ring-1 ring-inset ring-white/20 dark:ring-white/10 pointer-events-none" />
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                    {t('about.role')}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                    {t('about.university')}
                  </p>
                </div>
              </div>

              {/* Status pill overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl glass-card border-black/[0.08] dark:border-white/[0.12] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{t('about.focusLabel')}</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white">{t('about.focusValue')}</div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300 shrink-0">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>

            {/* Editorial Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-3 sm:mb-4">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  {t('about.card1Title')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t('about.card1Desc')}
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  {t('about.card2Title')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t('about.card2Desc')}
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 sm:mb-4">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  {t('about.card3Title')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t('about.card3Desc')}
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  {t('about.card4Title')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t('about.card4Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
