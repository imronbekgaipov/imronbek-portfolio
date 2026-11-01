import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 dark:text-sky-400" />;
      case 'Milestone': return <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Exploration': return <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />;
      default: return <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="py-16 sm:py-24 lg:py-28 relative bg-slate-100/60 dark:bg-[#070912]/50 border-t border-black/[0.05] dark:border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              04 / Progression
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
            Educational & coding <br />
            <span className="text-gradient-accent">journey.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light">
            Milestones and ongoing growth in software engineering and web technologies.
          </p>
        </div>

        {/* Timeline Flow - Responsive padding & positioning */}
        <div className="relative border-l border-slate-300 dark:border-white/[0.1] ml-3.5 sm:ml-6 md:ml-32 space-y-7 sm:space-y-12">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 md:pl-10 group"
            >
              {/* Timeline Node Orb */}
              <div className="absolute -left-[14px] sm:-left-[17px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#05060A] border border-slate-300 dark:border-white/20 flex items-center justify-center shadow-md dark:shadow-lg group-hover:border-indigo-500 transition-colors">
                {getIcon(item.type)}
              </div>

              {/* Year & Period Tag (Visible to the left on desktop md+) */}
              <div className="hidden md:block absolute -left-32 top-2 w-24 text-right">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold block">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  {item.period}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border-black/[0.06] dark:border-white/[0.08] hover:border-indigo-500/40 transition-all space-y-3 sm:space-y-4 shadow-sm dark:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                  <div className="flex items-center flex-wrap gap-1.5">
                    <span className="md:hidden text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                      {item.period} •
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <span className={`text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full ${
                    item.status === 'Current'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                      : item.status === 'Upcoming'
                      ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30'
                      : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-black/[0.06] dark:border-white/10'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                    <span className="text-indigo-600 dark:text-indigo-300 font-medium">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="pt-2.5 sm:pt-3 border-t border-black/[0.05] dark:border-white/[0.05] space-y-1.5 sm:space-y-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
