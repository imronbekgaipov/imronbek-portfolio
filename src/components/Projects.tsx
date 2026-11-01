import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'Frontend', 'Web Apps', 'Experiments'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
                03 / Featured Projects
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
              Selected works & <br />
              <span className="text-gradient-accent">creative experiments.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-4 md:mt-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid - Single column on mobile, 2 columns on tablet/desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass-card border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex flex-col hover:border-indigo-500/40 transition-all duration-300 shadow-lg dark:shadow-xl"
              >
                {/* Project Image Box with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-full bg-black/60 text-sky-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-black/60 text-slate-300 border border-white/10 backdrop-blur-md">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Inspect ${project.title} details`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white text-slate-950 font-semibold text-xs shadow-2xl hover:scale-105 transition-transform">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>View Details</span>
                    </span>
                  </button>
                </div>

                {/* Project Card Content */}
                <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1.5 sm:mb-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open ${project.title} information`}
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-2 sm:mb-3 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags and Action CTAs */}
                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-black/[0.06] dark:border-white/[0.05]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-black/[0.06] dark:border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 sm:pt-2 gap-2">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} code on GitHub`}
                            className="min-h-[36px] sm:min-h-[38px] inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-1.5 rounded-xl glass-card hover:border-black/20 dark:hover:border-white/30 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} Live Demo`}
                            className="min-h-[36px] sm:min-h-[38px] inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 hover:border-sky-500/40 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium underline underline-offset-4 cursor-pointer py-1"
                      >
                        Inspect Stack →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Customization Callout */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl glass-card border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Have a new build or prototype to add?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-light">All projects are configured in <code className="text-sky-600 dark:text-sky-300 font-mono">src/data/portfolioData.ts</code> for rapid customization.</p>
            </div>
          </div>
          <a
            href="https://github.com/imronbekgaipov"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center text-xs font-mono px-4 py-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] text-slate-900 dark:text-white border border-black/10 dark:border-white/10 transition-colors whitespace-nowrap"
          >
            Explore GitHub Profile ↗
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
