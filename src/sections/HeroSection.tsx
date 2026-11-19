import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight, Github, ExternalLink, Code2, ShieldCheck, Terminal, Award, Cpu, FileCode2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  username: string;
  onUsernameChange: (newUsername: string) => void;
  onAnalyze: (username: string) => void;
  onOpenReadmeBuilder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  username,
  onUsernameChange,
  onAnalyze,
  onOpenReadmeBuilder,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'readme' | 'terminal'>('profile');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onAnalyze(username.trim());
      const el = document.getElementById('analyzer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-6"
    >
      {/* Background ambient glow matching GitHance */}
      <div className="pointer-events-none absolute left-1/4 top-16 -z-10 h-72 w-72 rounded-full bg-[#ff7a1a]/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-32 -z-10 h-64 w-64 rounded-full bg-[#53d0ff]/10 blur-[120px]" />

      {/* Left Column: Eyebrow, Title, Description, and GitHance Signature Form */}
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-[#ffb37f]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#ff7a1a] animate-pulse" />
          <span>Computer Science & Developer Visibility Suite</span>
        </div>

        {/* Main Title */}
        <h1
          id="hero-heading"
          className="mt-6 font-antonio text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-white"
        >
          Engineering core computing,{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            algorithmic rigor, and modern software.
          </span>
        </h1>

        {/* GitHance-styled Subtitle */}
        <p className="mt-5 max-w-2xl font-poppins text-base leading-7 text-white/70 sm:text-lg">
          Explore <strong className="text-white font-medium">Nauman Naseer's</strong> CS systems architecture in C++,
          modular Python automation tools, and interactive visualizers. Analyze any GitHub workspace in real time or generate
          polished profile README markdown.
        </p>

        {/* GitHance Live Interactive Input Form */}
        <form onSubmit={handleSubmit} className="mt-9 max-w-4xl">
          <label
            htmlFor="hero-username"
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.34em] font-poppins text-white/50"
          >
            Start with your GitHub username
          </label>

          <div className="mt-3.5 border-b border-white/20 pb-4 transition-colors duration-300 focus-within:border-[#ff7a1a]">
            <input
              id="hero-username"
              type="text"
              autoComplete="off"
              spellCheck="false"
              required
              value={username}
              onChange={(e) => onUsernameChange(e.target.value)}
              placeholder="your-github-username"
              className="w-full bg-transparent font-antonio text-[clamp(2.4rem,7vw,5.5rem)] font-bold uppercase leading-none tracking-[0.04em] text-white outline-none placeholder:text-white/20"
            />
          </div>

          <p className="mt-3 max-w-3xl font-poppins text-xs sm:text-sm leading-6 text-white/60">
            Pre-loaded with <span className="text-[#ffb37f] font-mono">devnoumannaseer-ctrl</span>. Enter any GitHub username to
            analyze public repositories, language distributions, and profile momentum.
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7a1a] px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,122,26,0.45)] transition-all hover:bg-[#ff8c3a] hover:shadow-[0_0_40px_rgba(255,122,26,0.6)] hover:translate-y-[-1px] active:translate-y-0"
            >
              <Code2 className="w-4 h-4 stroke-[2.5]" />
              <span>Analyze repositories</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onOpenReadmeBuilder();
                scrollTo('readme-builder');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <FileCode2 className="w-4 h-4 text-[#ffb37f]" />
              <span>Open README builder</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('how-it-works')}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-transparent px-5 py-3 text-xs sm:text-sm font-medium text-white/60 transition-all hover:text-white hover:border-white/20"
            >
              <span>See how it works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* Right Column: GitHance Signature Preview Card */}
      <div className="w-full max-w-xl justify-self-end rounded-[32px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6">
        {/* Workflow mode tabs */}
        <div className="flex flex-wrap items-center gap-2.5" role="tablist" aria-label="Workflow modes">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            aria-pressed={activeTab === 'profile'}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === 'profile'
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                : 'border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Profile Showcase
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('readme')}
            aria-pressed={activeTab === 'readme'}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === 'readme'
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                : 'border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            README Matrix
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            aria-pressed={activeTab === 'terminal'}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === 'terminal'
                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                : 'border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Terminal Specs
          </button>
        </div>

        {/* Dynamic Card Content Based on Tab */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-[#0f1115]/90 p-5 backdrop-blur-md">
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffb37f]">
                  Active Profile Surface
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-[10px] font-medium text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Verified Identity
                </span>
              </div>

              {/* Developer Profile Header */}
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.fullName}
                  className="h-16 w-16 rounded-2xl border border-white/20 object-cover shadow-lg"
                  onError={(e) => {
                    // Fallback to initial avatar
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="font-antonio text-2xl font-bold tracking-wide text-white">
                    {portfolioData.personal.fullName}
                  </h3>
                  <p className="text-xs text-[#53d0ff] font-mono">
                    @{username || portfolioData.personal.githubUsername}
                  </p>
                  <p className="mt-1 text-xs text-white/70 line-clamp-1">
                    {portfolioData.personal.primaryRole}
                  </p>
                </div>
              </div>

              {/* Summary quote */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-white/75 font-poppins">
                "Computer Science student passionate about core computing, algorithmic problem-solving, and building practical software solutions."
              </div>

              {/* Stat badges */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Core Stack</p>
                  <p className="mt-1 font-antonio text-base font-bold text-[#ff7a1a]">C++ / Py / Java</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Systems</p>
                  <p className="mt-1 font-antonio text-base font-bold text-[#53d0ff]">Data Structs</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Status</p>
                  <p className="mt-1 font-antonio text-base font-bold text-green-400">Available</p>
                </div>
              </div>

              {/* Quick Action Matrix (GitHance-styled colored buttons) */}
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => {
                    onOpenReadmeBuilder();
                    scrollTo('readme-builder');
                  }}
                  className="flex min-h-11 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/15 px-3 py-2 text-center text-xs font-semibold text-green-400 transition-all hover:scale-[1.02] hover:bg-green-500/25"
                >
                  Build README
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onAnalyze(username);
                    scrollTo('analyzer');
                  }}
                  className="flex min-h-11 items-center justify-center rounded-xl border border-yellow-500/30 bg-yellow-500/15 px-3 py-2 text-center text-xs font-semibold text-yellow-300 transition-all hover:scale-[1.02] hover:bg-yellow-500/25"
                >
                  Analyze Repos
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('solutions')}
                  className="flex min-h-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/15 px-3 py-2 text-center text-xs font-semibold text-blue-400 transition-all hover:scale-[1.02] hover:bg-blue-500/25"
                >
                  Explore Projects
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'readme' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffb37f]">
                  README.md Preview Slice
                </span>
                <span className="font-mono text-[10px] text-white/40">markdown v4.2</span>
              </div>
              <div className="mt-3 font-mono text-xs text-white/80 space-y-2 bg-black/60 p-3.5 rounded-xl border border-white/5">
                <p className="text-white/40"># NAUMAN NASEER</p>
                <p className="text-[#53d0ff]">&gt; Computer Science Undergraduate &amp; Systems Programmer</p>
                <div className="flex flex-wrap gap-1.5 py-1">
                  <span className="rounded bg-[#ff7a1a]/20 px-2 py-0.5 text-[10px] text-[#ffb37f]">C++20</span>
                  <span className="rounded bg-[#53d0ff]/20 px-2 py-0.5 text-[10px] text-[#53d0ff]">Python 3.11</span>
                  <span className="rounded bg-yellow-500/20 px-2 py-0.5 text-[10px] text-yellow-300">Java</span>
                  <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] text-purple-300">Data Structures</span>
                </div>
                <p className="text-white/60">![GitHub Streak](https://streak-stats.demolab.com/?user={username || 'devnoumannaseer-ctrl'})</p>
              </div>
              <button
                onClick={() => {
                  onOpenReadmeBuilder();
                  scrollTo('readme-builder');
                }}
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff7a1a] py-2.5 text-xs font-bold text-black transition-all hover:bg-[#ff8c3a]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Full README Studio</span>
              </button>
            </motion.div>
          )}

          {activeTab === 'terminal' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="font-mono text-xs"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-white/50 text-[11px]">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-white/60">workspace@naumannaseer:~$</span>
              </div>
              <div className="mt-3 space-y-1.5 text-white/70 bg-black/60 p-3.5 rounded-xl border border-white/5">
                <p className="text-[#ffb37f]">$ uname -a</p>
                <p className="text-white/50">Linux nauman-core 6.8.0-x86_64 CS-Rig</p>
                <p className="text-[#ffb37f]">$ g++ -std=c++20 main.cpp -O3 -o runner</p>
                <p className="text-green-400">✓ Binary built: 0 memory leaks (valgrind safe)</p>
                <p className="text-[#ffb37f]">$ python3 -m automation.suite --run</p>
                <p className="text-blue-400">✓ Parsed 25,000 records in 0.84s</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] text-white/50">
                <span>Branch: main [clean]</span>
                <span className="text-[#10b981]">● All tests passing</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
