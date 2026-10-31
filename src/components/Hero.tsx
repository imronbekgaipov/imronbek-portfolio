import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveCanvas } from './InteractiveCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-noise"
    >
      {/* Background Interactive Canvas */}
      <InteractiveCanvas />

      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-white/[0.08] mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] group hover:border-indigo-400/30 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400 border-l border-white/10 pl-2">
            Uzbekistan
          </span>
        </motion.div>

        {/* Large Expressive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white">
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
          className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Subtitle with Education context */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Software Engineering student at{' '}
          <span className="text-slate-200 font-medium">Fergana State Technical University</span>, focused on modern frontend architecture, React, and clean interface systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4 text-sky-200" />
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl glass-card hover:border-indigo-400/40 text-slate-200 hover:text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Talk</span>
          </a>
        </motion.div>

        {/* Interactive Code / Tech Preview Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="mt-14 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-card border-white/[0.06] text-xs font-mono text-slate-400"
        >
          <Code2 className="w-4 h-4 text-sky-400" />
          <span>const developer = &#123; name: "Imronbek", focus: "React + Frontend" &#125;;</span>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
