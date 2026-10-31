import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap className="w-4 h-4 text-sky-400" />;
      case 'Milestone': return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'Exploration': return <Rocket className="w-4 h-4 text-purple-400" />;
      default: return <GraduationCap className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="py-28 relative bg-[#070912]/50 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
              04 / Progression
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Educational & coding <br />
            <span className="text-gradient-accent">journey.</span>
          </h2>
          <p className="text-sm text-slate-400 font-light">
            Milestones and ongoing growth in software engineering and web technologies.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-white/[0.1] ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Node Orb */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#05060A] border border-white/20 flex items-center justify-center shadow-lg group-hover:border-indigo-400 transition-colors">
                {getIcon(item.type)}
              </div>

              {/* Year & Period Tag (Visible to the left on desktop) */}
              <div className="hidden md:block absolute -left-32 top-2 w-24 text-right">
                <span className="text-xs font-mono text-cyan-400 font-semibold block">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block">
                  {item.period}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-card border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="md:hidden text-xs font-mono text-cyan-400 font-semibold mr-2">
                      {item.period} •
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                    item.status === 'Current'
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                      : item.status === 'Upcoming'
                      ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                      : 'bg-white/[0.04] text-slate-400 border border-white/10'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="text-indigo-300 font-medium">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="pt-3 border-t border-white/[0.05] space-y-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
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
