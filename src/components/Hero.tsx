import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveCanvas } from './InteractiveCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-noise"
    >
      {/* Background Interactive Canvas */}
      <InteractiveCanvas />

      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-indigo-500/15 via-sky-500/10 to-purple-500/10 dark:from-indigo-600/20 dark:via-sky-500/15 dark:to-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-sky-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-card border-black/[0.06] dark:border-white/[0.08] mb-6 sm:mb-8 shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.15)] group hover:border-indigo-400/40 transition-colors max-w-full"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-slate-300 truncate">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 border-l border-slate-300 dark:border-white/10 pl-2 shrink-0">
            Uzbekistan
          </span>
        </motion.div>

        {/* Large Expressive Headline - Fluidly responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mb-4 sm:mb-6 w-full"
        >
          <h1 className="font-display font-extrabold text-[2.25rem] min-[360px]:text-4xl min-[414px]:text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] sm:leading-[1.08] text-slate-900 dark:text-white break-words">
            Hi, I'm{' '}
            <span className="text-gradient-accent inline-block drop-shadow-sm">
              {PERSONAL_INFO.name}.
            </span>
          </h1>
        </motion.div>

        {/* Professional Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="text-base min-[360px]:text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-4 px-1"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Subtitle with Education context */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-xs min-[360px]:text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
        >
          Software Engineering student at{' '}
          <span className="text-slate-900 dark:text-slate-200 font-medium">Fergana State Technical University</span>, focused on modern frontend architecture, React, and clean interface systems.
        </motion.p>

        {/* CTA Buttons - Full-width stacked on mobile, row on tablet/desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[50px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.3)] dark:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4 text-sky-200" />
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto min-h-[46px] sm:min-h-[50px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl glass-card hover:border-indigo-400/50 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-medium text-sm active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Let's Talk</span>
          </a>
        </motion.div>

        {/* Interactive Code / Tech Preview Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 sm:mt-14 inline-flex items-center gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl glass-card border-black/[0.06] dark:border-white/[0.06] text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 shadow-sm max-w-full overflow-hidden"
        >
          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500 dark:text-sky-400 shrink-0" />
          <span className="truncate">const dev = &#123; name: "Imronbek", focus: "React" &#125;;</span>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none"
      >
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-slate-300 dark:border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 sm:h-2 rounded-full bg-sky-500 dark:bg-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
