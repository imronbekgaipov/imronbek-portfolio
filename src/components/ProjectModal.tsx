import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Layers, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05060A]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E17] via-transparent to-black/30" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-indigo-500/80 text-white backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                Status: {project.status}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Architecture Overview */}
            {project.architecture && (
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Architecture & Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Tag className="w-3.5 h-3.5" />
                <span>Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Placeholder Note if applicable */}
            {project.placeholderNote && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-200">
                📌 Note: {project.placeholderNote}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-xs font-mono text-slate-200 hover:text-white hover:border-white/30 transition-all"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 hover:brightness-110 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
