import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Layers,
  Globe,
  Binary,
  Wrench,
  CheckCircle2,
  Search,
  Sparkles,
} from 'lucide-react';
import {
  SiCplusplus,
  SiPython,
  SiC,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiMysql,
  SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

// Map icon strings to components
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'SiCplusplus':
      return <SiCplusplus className="h-5 w-5 text-[#00599C]" />;
    case 'SiPython':
      return <SiPython className="h-5 w-5 text-[#3776AB]" />;
    case 'FaJava':
      return <FaJava className="h-5 w-5 text-[#ED8B00]" />;
    case 'SiC':
      return <SiC className="h-5 w-5 text-[#A8B9CC]" />;
    case 'SiJavascript':
      return <SiJavascript className="h-5 w-5 text-[#F7DF1E]" />;
    case 'SiMysql':
      return <SiMysql className="h-5 w-5 text-[#00758F]" />;
    case 'Binary':
      return <Binary className="h-5 w-5 text-[#ff7a1a]" />;
    case 'Cpu':
      return <Cpu className="h-5 w-5 text-[#53d0ff]" />;
    case 'Layers':
      return <Layers className="h-5 w-5 text-[#10b981]" />;
    case 'Database':
      return <Database className="h-5 w-5 text-[#ffdd00]" />;
    case 'Terminal':
      return <Terminal className="h-5 w-5 text-[#d946ef]" />;
    case 'SiReact':
      return <SiReact className="h-5 w-5 text-[#61DAFB]" />;
    case 'SiTailwindcss':
      return <SiTailwindcss className="h-5 w-5 text-[#38B2AC]" />;
    case 'SiHtml5':
      return <SiHtml5 className="h-5 w-5 text-[#E34F26]" />;
    case 'Globe':
      return <Globe className="h-5 w-5 text-[#53d0ff]" />;
    case 'SiGithub':
      return <SiGithub className="h-5 w-5 text-white" />;
    case 'Code2':
      return <Code2 className="h-5 w-5 text-[#007ACC]" />;
    case 'TerminalSquare':
      return <Terminal className="h-5 w-5 text-[#FCC624]" />;
    case 'Wrench':
      return <Wrench className="h-5 w-5 text-[#ff7a1a]" />;
    default:
      return <Code2 className="h-5 w-5 text-white" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages' },
    { id: 'core_cs', label: 'Core CS' },
    { id: 'web', label: 'Web Tech' },
    { id: 'tools', label: 'Tools & Environments' },
  ];

  const filteredSkills = portfolioData.skills.filter((skill) => {
    const matchesCat = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a1a]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-3 font-antonio text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Skills &amp; Computational Foundations
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-6 text-white/60 sm:text-base">
            Grounded in low-level systems programming, robust data structures, and algorithmic efficiency, complemented by
            modern web development frameworks.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills or concepts..."
            className="w-full rounded-full border border-white/15 bg-white/5 py-2 pl-10 pr-4 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                : 'border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#101216] p-5 transition-all duration-300 hover:border-white/25 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 transition-transform duration-300 group-hover:scale-110">
                  {renderIcon(skill.iconName)}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-[#ffb37f]">
                  {skill.level}
                </span>
              </div>

              <h3 className="mt-4 font-antonio text-xl font-bold tracking-wide text-white group-hover:text-[#ff7a1a] transition-colors">
                {skill.name}
              </h3>

              <p className="mt-2 font-poppins text-xs leading-5 text-white/65">
                {skill.description}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[10px] uppercase tracking-wider text-white/35 font-mono">
              <span>{skill.category.replace('_', ' ')}</span>
              <span className="text-green-400">● Active</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
