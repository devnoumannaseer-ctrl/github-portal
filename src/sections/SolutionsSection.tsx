import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  FileCode,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export const SolutionsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Computer Science', 'Systems & OOP', 'Automation & Python', 'Web Development'];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="solutions" className="mx-auto w-full max-w-[95%] px-4 py-20 sm:px-6 lg:px-8">
      {/* Top Banner Card with GitHance Signature >>> watermark */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10">
        {/* Angled chevrons >>> watermark matching GitHance */}
        <div className="pointer-events-none absolute -right-2 top-2 flex text-[56px] font-bold leading-none text-[#ff7a1a]/15 sm:right-4 sm:top-4 sm:text-[92px] lg:text-[140px] select-none font-antonio">
          <span>&gt;</span>
          <span>&gt;</span>
          <span>&gt;</span>
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff7a1a]/25 bg-[#ff7a1a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            <Sparkles className="h-3 w-3 text-[#ff7a1a]" />
            Solutions Surface
          </span>

          <h2 className="mt-6 font-antonio text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            One focused UI for project architecture, code clarity, and systems impact.
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-white/65 sm:text-base">
            Every project represents practical computing rigor: memory-safe C++ data structures, robust Python
            automation pipelines, and interactive visual algorithms engineered for transparency.
          </p>
        </div>

        {/* 3 Metric Cards matching GitHance proof points */}
        <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="font-antonio text-4xl font-bold leading-none text-[#ff7a1a] sm:text-5xl">4X</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              Algorithmic Problem Speed
            </p>
            <p className="mt-1 text-xs text-white/50 leading-5">
              Optimized asymptotic time complexity across sorting and graph routines.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="font-antonio text-4xl font-bold leading-none text-[#53d0ff] sm:text-5xl">100%</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              Clean OOP &amp; Memory Safety
            </p>
            <p className="mt-1 text-xs text-white/50 leading-5">
              Zero memory leak architectures using RAII and dynamic allocation standards.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="font-antonio text-4xl font-bold leading-none text-[#10b981] sm:text-5xl">15+</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              Core Technologies Mastered
            </p>
            <p className="mt-1 text-xs text-white/50 leading-5">
              Proficient in low-level systems, data pipelines, and modern web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-white/40 font-mono">
          Showing {filteredProjects.length} engineering projects
        </span>
      </div>

      {/* Bento Projects Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#101216] transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Project Image Header */}
            <div className="relative h-56 w-full overflow-hidden bg-black/60 sm:h-64">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.3';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-transparent to-black/30" />

              {/* Category pill */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-mono text-[#ffb37f] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Metric Badge */}
              {project.metrics && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-mono text-green-400 backdrop-blur-md">
                    {project.metrics.value}
                  </span>
                </div>
              )}
            </div>

            {/* Project Info Body */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#ff7a1a] transition-colors sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-[#53d0ff]">{project.subtitle}</p>

                <p className="mt-3 font-poppins text-xs sm:text-sm leading-6 text-white/65">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb37f] hover:text-white transition-colors"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#ff7a1a] px-3.5 py-1.5 text-xs font-bold text-black transition-all hover:bg-[#ff8c3a]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/15 bg-[#101216] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-mono font-bold text-[#ffb37f]">
                {activeModalProject.category}
              </span>

              <h3 className="mt-3 font-antonio text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-mono text-[#53d0ff]">{activeModalProject.subtitle}</p>

              <div className="mt-6 space-y-5 text-sm font-poppins text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-[#ffb37f]">
                    Problem Solved
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-white/70">
                    {activeModalProject.problemSolved}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-[#ffb37f]">
                    Key Technical Capabilities
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/70">
                    {activeModalProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-[#ffb37f]">
                    Architecture &amp; Technologies
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  <span>Inspect Code on GitHub</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-white/90"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
