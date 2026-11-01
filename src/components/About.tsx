import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Sparkles, Terminal, BookOpen, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
            01 / About Me
          </span>
        </div>

        <h2 className="font-display font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-10 sm:mb-16">
          Architecting interfaces with <br />
          <span className="text-gradient-accent">precision & curiosity.</span>
        </h2>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Portrait / Brand Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-2.5 sm:p-3 border-black/[0.06] dark:border-white/[0.1] shadow-xl dark:shadow-2xl group">
              {/* Image Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/90 dark:from-[#131728] dark:to-[#0A0D17] border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-5 sm:p-6 text-center">
                {/* Visual Avatar / Portrait Representation */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-purple-500/20 dark:from-indigo-500/30 dark:via-sky-500/20 dark:to-purple-500/30 border border-black/10 dark:border-white/20 flex items-center justify-center mb-4 sm:mb-6 shadow-md dark:shadow-[0_0_35px_rgba(99,102,241,0.25)] group-hover:scale-105 transition-transform duration-500">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 dark:text-indigo-300 stroke-[1.2]" />
                  <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping opacity-25 pointer-events-none" />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                    Software Engineering Student
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                    Fergana State Technical University, Uzbekistan
                  </p>
                </div>

                {/* Editable Photo Notice */}
                <div className="mt-4 sm:mt-6 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  [Portrait Placeholder: Replace with your photo]
                </div>
              </div>

              {/* Status pill overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl glass-card border-black/[0.08] dark:border-white/[0.12] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">Focus</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white">Frontend & Software Systems</div>
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
              <p>
                My journey into software engineering started with a fascination for how clean code can translate into seamless visual experiences. I believe exceptional software requires both deep technical discipline and thoughtful human-centered design.
              </p>
              <p>
                Currently studying <strong className="text-slate-900 dark:text-white font-semibold">Software Engineering</strong> at{' '}
                <span className="text-sky-600 dark:text-sky-300 font-medium">Fergana State Technical University</span>, I focus on understanding computer science fundamentals—data structures, algorithmic thinking, and modern web application patterns.
              </p>
              <p>
                I spend my time exploring modern frontend tools like React, TypeScript, and Tailwind CSS, building responsive interfaces and mastering the developer workflows needed for collaborative engineering.
              </p>
            </div>

            {/* Editorial Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-3 sm:mb-4">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Academic Pursuit
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Active Software Engineering student at Fergana State Technical University, expanding theoretical foundations and system architecture.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Frontend Passion
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Dedicated to crafting responsive, accessible, and performant user interfaces using React and the modern JavaScript ecosystem.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 sm:mb-4">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Creative Direction
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Focusing on typography, micro-interactions, and visual harmony that elevate software above generic templates.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Continuous Growth
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Eager to join high-impact internships, contribute to open source, and engineer production-grade applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
