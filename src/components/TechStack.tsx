import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  FileCode, 
  Atom, 
  FileType, 
  Sparkles, 
  GitBranch, 
  Github, 
  Zap, 
  Layers
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Core & Languages',
    'Frameworks & Libraries',
    'Styling & Motion',
    'Workflow & Tools'
  ];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(item => item.category === activeCategory);

  // Helper to render icon dynamically
  const renderIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case 'code': return <Code {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'file-code': return <FileCode {...props} />;
      case 'atom': return <Atom {...props} />;
      case 'file-type': return <FileType {...props} />;
      case 'sparkles': return <Sparkles {...props} />;
      case 'git-branch': return <GitBranch {...props} />;
      case 'github': return <Github {...props} />;
      case 'zap': return <Zap {...props} />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="skills" className="py-28 relative bg-slate-100/60 dark:bg-[#070912]/50 border-y border-black/[0.05] dark:border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                02 / Technical Stack
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
              Tools & technologies <br />
              <span className="text-gradient-accent">I build with.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mt-4 md:mt-0 font-light">
            Core foundations and developer tooling actively explored throughout my software engineering studies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                  : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredTech.map((tech: TechItem) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl glass-card glass-card-hover p-6 border-black/[0.06] dark:border-white/[0.07] overflow-hidden"
              >
                {/* Ambient hover glow inside card */}
                <div 
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{ backgroundColor: tech.accentColor }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(tech.icon, tech.accentColor)}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    tech.level === 'Proficient'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                      : tech.level === 'Learning & Building'
                      ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30'
                      : 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                  }`}>
                    {tech.level}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-4">
                  {tech.description}
                </p>

                <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{tech.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-sky-600 dark:text-sky-400 transition-opacity font-medium">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note / Disclaimer pill */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 px-4 py-2 rounded-xl glass-card border-black/[0.06] dark:border-white/[0.06] shadow-sm">
            <span>💡 All technologies reflect active academic & personal practice at Fergana State Technical University.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
