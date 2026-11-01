import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Sparkles, Terminal, BookOpen, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
            01 / About Me
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-16">
          Architecting interfaces with <br />
          <span className="text-gradient-accent">precision & curiosity.</span>
        </h2>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait / Brand Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border-black/[0.06] dark:border-white/[0.1] shadow-xl dark:shadow-2xl group">
              {/* Image Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/90 dark:from-[#131728] dark:to-[#0A0D17] border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-6 text-center">
                {/* Visual Avatar / Portrait Representation */}
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-purple-500/20 dark:from-indigo-500/30 dark:via-sky-500/20 dark:to-purple-500/30 border border-black/10 dark:border-white/20 flex items-center justify-center mb-6 shadow-md dark:shadow-[0_0_35px_rgba(99,102,241,0.25)] group-hover:scale-105 transition-transform duration-500">
                  <User className="w-16 h-16 text-indigo-600 dark:text-indigo-300 stroke-[1.2]" />
                  <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping opacity-25 pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                    Software Engineering Student
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                    Fergana State Technical University, Uzbekistan
                  </p>
                </div>

                {/* Editable Photo Notice */}
                <div className="mt-6 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  [Portrait Placeholder: Replace with your photo]
                </div>
              </div>

              {/* Status pill overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border-black/[0.08] dark:border-white/[0.12] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">Focus</div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Frontend & Software Systems</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                  <Terminal className="w-4 h-4" />
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
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-5 text-base sm:text-lg leading-relaxed font-light">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1">
                  Academic Pursuit
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Active Software Engineering student at Fergana State Technical University, expanding theoretical foundations and system architecture.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1">
                  Frontend Passion
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Dedicated to crafting responsive, accessible, and performant user interfaces using React and the modern JavaScript ecosystem.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1">
                  Creative Direction
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Focusing on typography, micro-interactions, and visual harmony that elevate software above generic templates.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card glass-card-hover border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1">
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
