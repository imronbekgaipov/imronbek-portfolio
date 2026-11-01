import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Layers, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/65 dark:bg-[#05060A]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col glass-card rounded-2xl sm:rounded-3xl border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close button (Min 40x40px touch target) */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card border-black/10 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer shadow-md"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-y-auto overscroll-contain">
            {/* Project Preview Image */}
            <div className="relative h-48 min-[400px]:h-56 sm:h-72 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 opacity-70" />
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono font-medium px-2.5 sm:px-3 py-1 rounded-full bg-indigo-600 text-white backdrop-blur-md shadow-sm">
                  {project.category}
                </span>
                <span className="text-[9px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-black/70 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  Status: {project.status}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Architecture Overview */}
              {project.architecture && (
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Architecture & Stack</span>
                  </div>
                  <p className="text-xs sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placeholder Note if applicable */}
              {project.placeholderNote && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] sm:text-xs font-mono text-amber-800 dark:text-amber-200">
                  📌 Note: {project.placeholderNote}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-3 sm:pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[42px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 hover:brightness-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
