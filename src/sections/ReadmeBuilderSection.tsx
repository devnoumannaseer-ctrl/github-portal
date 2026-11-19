import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FileCode2,
  Copy,
  Check,
  Download,
  Sparkles,
  Eye,
  Sliders,
  Layers,
  Palette,
  ExternalLink,
  Github,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ReadmeBuilderSectionProps {
  initialUsername?: string;
}

const AVAILABLE_TECH = [
  { name: 'C++', category: 'Languages', badge: 'C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
  { name: 'Python', category: 'Languages', badge: 'Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'Java', category: 'Languages', badge: 'Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
  { name: 'C', category: 'Languages', badge: 'C-A8B9CC?style=for-the-badge&logo=c&logoColor=black' },
  { name: 'JavaScript', category: 'Languages', badge: 'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
  { name: 'TypeScript', category: 'Languages', badge: 'TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
  { name: 'React', category: 'Web', badge: 'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
  { name: 'Tailwind CSS', category: 'Web', badge: 'Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'HTML5', category: 'Web', badge: 'HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
  { name: 'CSS3', category: 'Web', badge: 'CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  { name: 'SQL', category: 'Data', badge: 'MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' },
  { name: 'Git', category: 'Tools', badge: 'Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'GitHub', category: 'Tools', badge: 'GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
  { name: 'Linux', category: 'Tools', badge: 'Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
  { name: 'VS Code', category: 'Tools', badge: 'VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
];

export const ReadmeBuilderSection: React.FC<ReadmeBuilderSectionProps> = ({
  initialUsername = 'devnoumannaseer-ctrl',
}) => {
  const [username, setUsername] = useState(initialUsername);
  const [headline, setHeadline] = useState('NAUMAN NASEER');
  const [bio, setBio] = useState(
    'Computer Science undergraduate student passionate about core computing, systems programming, algorithmic problem-solving, and building practical software solutions.'
  );

  // Configuration options
  const [bannerStyle, setBannerStyle] = useState<'hands' | 'cyber' | 'minimal'>('hands');
  const [accentTheme, setAccentTheme] = useState<'flame' | 'cyan' | 'emerald' | 'purple'>('flame');
  const [includePulseLines, setIncludePulseLines] = useState(true);
  const [includeProfileDetails, setIncludeProfileDetails] = useState(true);
  const [includeStatsCard, setIncludeStatsCard] = useState(true);
  const [includeLanguageCard, setIncludeLanguageCard] = useState(true);
  const [includeStreakCard, setIncludeStreakCard] = useState(true);
  const [includeSnakeGrid, setIncludeSnakeGrid] = useState(true);
  const [includeSocials, setIncludeSocials] = useState(true);
  const [includeFooter, setIncludeFooter] = useState(true);

  // Selected tech stack
  const [selectedTech, setSelectedTech] = useState<string[]>([
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'SQL',
    'Git',
    'Linux',
  ]);

  const [activeTab, setActiveTab] = useState<'preview' | 'markdown'>('preview');
  const [copied, setCopied] = useState(false);

  // Color mappings
  const themeColors = {
    flame: { hex: '%23ff7a1a', border: '53D0FF', fire: 'FF7A1A', stroke: '#ff7a1a' },
    cyan: { hex: '%2353d0ff', border: '53D0FF', fire: '53D0FF', stroke: '#53d0ff' },
    emerald: { hex: '%2310b981', border: '10B981', fire: '10B981', stroke: '#10b981' },
    purple: { hex: '%23d946ef', border: 'D946EF', fire: 'D946EF', stroke: '#d946ef' },
  }[accentTheme];

  // SVG Pulse Line Component
  const RenderPulseLine = () => (
    <div className="py-2 text-center">
      <svg
        viewBox="0 0 800 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xl mx-auto h-5 opacity-85"
      >
        <defs>
          <linearGradient id={`pulseGrad-${accentTheme}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={themeColors.stroke} stopOpacity="0.1" />
            <stop offset="35%" stopColor={themeColors.stroke} stopOpacity="0.4" />
            <stop offset="50%" stopColor={themeColors.stroke} stopOpacity="1" />
            <stop offset="65%" stopColor="#53d0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#53d0ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0 12 H310 L325 5 L335 19 L345 3 L355 21 L365 12 L375 12 L385 8 L395 16 L405 12 H800"
          stroke={`url(#pulseGrad-${accentTheme})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  // Generate Raw Markdown String
  const generateMarkdown = (): string => {
    const user = username.trim() || 'devnoumannaseer-ctrl';
    const lines: string[] = [];

    lines.push('<div align="center">\n');

    // Header Banner
    if (bannerStyle === 'hands') {
      lines.push('<!-- HERO BANNER — Header Hands Visual -->');
      lines.push(
        `<img src="https://raw.githubusercontent.com/devnoumannaseer-ctrl/devnoumannaseer-ctrl/main/assets/header-hands.svg" width="100%" alt="${headline} — Developer Portfolio" />\n<br><br>\n`
      );
    } else if (bannerStyle === 'cyber') {
      lines.push(`<h1>${headline}</h1>`);
    } else {
      lines.push(`## ⚡ ${headline}`);
    }

    // Bio
    lines.push(`<h5><i>${bio}</i></h5>\n<br>\n`);

    // Social Action Bar
    if (includeSocials) {
      lines.push('<!-- Quick Action Bar -->');
      lines.push('<p align="center">');
      lines.push(
        `  <a href="https://portfolio-nauman-naseer.vercel.app/" target="_blank">\n    <img src="https://img.shields.io/badge/Live_Portfolio-0a0e17?style=for-the-badge&logo=vercel&logoColor=53D0FF" alt="Live Portfolio" />\n  </a>\n  &nbsp;`
      );
      lines.push(
        `  <a href="https://www.linkedin.com/in/nauman-naseer-5469873a7/" target="_blank">\n    <img src="https://img.shields.io/badge/LinkedIn-0a0e17?style=for-the-badge&logo=linkedin&logoColor=0A66C2" alt="LinkedIn" />\n  </a>\n  &nbsp;`
      );
      lines.push(
        `  <a href="https://github.com/${user}" target="_blank">\n    <img src="https://img.shields.io/badge/GitHub-0a0e17?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />\n  </a>\n  &nbsp;`
      );
      lines.push(
        `  <a href="mailto:dev.nouman.naseer@gmail.com">\n    <img src="https://img.shields.io/badge/Email_Me-0a0e17?style=for-the-badge&logo=gmail&logoColor=EA4335" alt="Email" />\n  </a>\n  &nbsp;`
      );
      lines.push(
        `  <a href="https://api.whatsapp.com/send?text=Hi%20Nauman%2C%20I%20saw%20your%20GitHub%20profile%20and%20would%20like%20to%20connect%21" target="_blank">\n    <img src="https://img.shields.io/badge/WhatsApp-0a0e17?style=for-the-badge&logo=whatsapp&logoColor=25D366" alt="WhatsApp" />\n  </a>`
      );
      lines.push('</p>\n</div>\n');
    }

    // Pulse Line
    if (includePulseLines) {
      lines.push('<p align="center">');
      lines.push(
        `  <img src="https://githance.in/api/render?type=decor&variant=pulse-line&v=rect-v4&pc=${themeColors.hex}&sc=%2353D0FF&ac=%23D946EF&t=2&align=center&span=100" alt="Pulse Line" />`
      );
      lines.push('</p>\n');
    }

    // Tech Stack Badges
    if (selectedTech.length > 0) {
      lines.push('### 🛠️ Tech Stack & Systems Tools\n');
      lines.push('<p align="center">');
      selectedTech.forEach((techName) => {
        const item = AVAILABLE_TECH.find((t) => t.name === techName);
        if (item) {
          lines.push(`  <img src="https://img.shields.io/badge/${item.badge}" alt="${item.name}" />`);
        }
      });
      lines.push('</p>\n');
    }

    if (includePulseLines) {
      lines.push('<p align="center">');
      lines.push(
        `  <img src="https://githance.in/api/render?type=decor&variant=pulse-line&v=rect-v4&pc=${themeColors.hex}&sc=%2353D0FF&ac=%23D946EF&t=2&align=center&span=100" alt="Pulse Line" />`
      );
      lines.push('</p>\n');
    }

    // Stats Section
    if (includeProfileDetails || includeStatsCard || includeLanguageCard) {
      lines.push('# 📊 GitHub Stats & Velocity\n');

      if (includeProfileDetails) {
        lines.push('<p align="center">');
        lines.push(
          `  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=53D0FF&chart_color=53D0FF" width="75%" alt="GitHub Profile Details" />`
        );
        lines.push('</p>\n');
      }

      if (includeStatsCard || includeLanguageCard) {
        lines.push('<p align="center">');
        if (includeStatsCard) {
          lines.push(
            `  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${user}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=FFFFFF&chart_color=53D0FF" height="180" alt="GitHub Stats" />`
          );
        }
        if (includeLanguageCard) {
          lines.push(
            `  &nbsp;\n  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${user}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=53D0FF&chart_color=53D0FF" height="180" alt="Most Used Languages" />`
          );
        }
        lines.push('</p>\n');
      }
    }

    // Contribution Streak
    if (includeStreakCard) {
      lines.push('# 🔥 Contribution Streak\n');
      lines.push('<p align="center">');
      lines.push(
        `  <img src="https://streak-stats.demolab.com/?user=${user}&background=050811&border=${themeColors.border}&stroke=53D0FF&ring=53D0FF&fire=${themeColors.fire}&currStreakNum=53D0FF&sideLabels=53D0FF&currStreakLabel=FFFFFF&sideNums=FFFFFF&dates=94A3B8&hide_border=false" alt="GitHub Contribution Streak" />`
      );
      lines.push('</p>\n<br>\n');
    }

    // Snake Grid
    if (includeSnakeGrid) {
      lines.push('<div align="center">');
      lines.push(
        `  <img src="https://raw.githubusercontent.com/${user}/${user}/output/github-contribution-grid-snake-dark.svg" alt="GitHub Contribution Snake" width="100%" />`
      );
      lines.push('</div>\n');
    }

    // Footer Banner
    if (includeFooter) {
      lines.push('<p align="center">');
      lines.push(
        '  <img src="https://githance.in/api/render?type=footer&banner_id=banner-2&w=1600&h=240" alt="GitHance Footer Banner" width="100%" />'
      );
      lines.push('</p>');
    }

    return lines.join('\n');
  };

  const handleCopyMarkdown = () => {
    const text = generateMarkdown();
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff7a1a', '#53d0ff', '#10b981', '#ffffff'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const text = generateMarkdown();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `README-${username || 'dev'}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const toggleTech = (name: string) => {
    if (selectedTech.includes(name)) {
      setSelectedTech(selectedTech.filter((t) => t !== name));
    } else {
      setSelectedTech([...selectedTech, name]);
    }
  };

  return (
    <section id="readme-builder" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Eyebrow & Title */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a1a]" />
            <span>Interactive Markdown Suite</span>
          </div>
          <h2 className="mt-3 font-antonio text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Live GitHub README &amp; Portfolio Builder
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-6 text-white/60 sm:text-base">
            Customize badges, live SVG stats cards, header art, and themes. Preview rendered markdown in real time, copy with
            confetti, or download directly.
          </p>
        </div>

        {/* Global Action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-6 py-2.5 text-xs font-bold text-black shadow-[0_0_25px_rgba(255,122,26,0.4)] transition-all hover:bg-[#ff8c3a] hover:shadow-[0_0_35px_rgba(255,122,26,0.6)]"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadMarkdown}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white/90 transition-all hover:bg-white/10 hover:text-white"
          >
            <Download className="h-4 w-4" />
            <span>Download .md</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid: Left Controls, Right Preview */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Customization Controls */}
        <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-7">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10">
            <Sliders className="h-4 w-4 text-[#ff7a1a]" />
            <span className="font-antonio text-lg font-bold uppercase tracking-wider text-white">
              Studio Configuration
            </span>
          </div>

          {/* GitHub Username Input */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Target GitHub Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. devnoumannaseer-ctrl"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono text-white focus:border-[#ff7a1a] focus:outline-none"
            />
          </div>

          {/* Header Banner Style */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Header Banner Style</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[
                { id: 'hands', label: 'Michelangelo Hands' },
                { id: 'cyber', label: 'Cyber Heading' },
                { id: 'minimal', label: 'Minimalist' },
              ].map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setBannerStyle(style.id as any)}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition-all ${
                    bannerStyle === style.id
                      ? 'border-[#ff7a1a] bg-[#ff7a1a]/15 text-[#ffb37f] font-semibold'
                      : 'border-white/10 bg-white/[0.02] text-white/60 hover:bg-white/5'
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accent Color Palette */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Accent Glow Theme</label>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[
                { id: 'flame', label: 'GitHance Flame', color: '#ff7a1a' },
                { id: 'cyan', label: 'Cyber Cyan', color: '#53d0ff' },
                { id: 'emerald', label: 'Emerald Green', color: '#10b981' },
                { id: 'purple', label: 'Neon Purple', color: '#d946ef' },
              ].map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setAccentTheme(theme.id as any)}
                  className={`flex items-center justify-center gap-1.5 rounded-xl border px-2.5 py-2 text-[11px] font-medium transition-all ${
                    accentTheme === theme.id
                      ? 'border-white/40 bg-white/10 text-white font-semibold'
                      : 'border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/5'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.color }} />
                  <span className="truncate">{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Toggles */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-white/50">Component Toggles</label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-2">
              {[
                { label: 'Pulse Line Dividers', state: includePulseLines, set: setIncludePulseLines },
                { label: 'Profile Details Card', state: includeProfileDetails, set: setIncludeProfileDetails },
                { label: 'GitHub Overall Stats', state: includeStatsCard, set: setIncludeStatsCard },
                { label: 'Language Breakdown', state: includeLanguageCard, set: setIncludeLanguageCard },
                { label: 'Fire Streak Card', state: includeStreakCard, set: setIncludeStreakCard },
                { label: 'Snake Grid Animation', state: includeSnakeGrid, set: setIncludeSnakeGrid },
                { label: 'Social Action Bar', state: includeSocials, set: setIncludeSocials },
                { label: 'GitHance Footer Banner', state: includeFooter, set: setIncludeFooter },
              ].map((toggle) => (
                <button
                  key={toggle.label}
                  type="button"
                  onClick={() => toggle.set(!toggle.state)}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs transition-all ${
                    toggle.state
                      ? 'border-[#ff7a1a]/40 bg-[#ff7a1a]/10 text-white'
                      : 'border-white/10 bg-white/[0.02] text-white/40'
                  }`}
                >
                  <span className="text-[11px]">{toggle.label}</span>
                  <CheckCircle2
                    className={`h-3.5 w-3.5 ${toggle.state ? 'text-[#ff7a1a]' : 'text-transparent'}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Selector */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Tech Stack Badges ({selectedTech.length} selected)
              </label>
              <button
                type="button"
                onClick={() =>
                  setSelectedTech(
                    selectedTech.length === AVAILABLE_TECH.length ? [] : AVAILABLE_TECH.map((t) => t.name)
                  )
                }
                className="text-[10px] text-[#ffb37f] hover:underline"
              >
                {selectedTech.length === AVAILABLE_TECH.length ? 'Clear all' : 'Select all'}
              </button>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {AVAILABLE_TECH.map((tech) => {
                const isSelected = selectedTech.includes(tech.name);
                return (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() => toggleTech(tech.name)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-mono transition-all ${
                      isSelected
                        ? 'border-[#ff7a1a] bg-[#ff7a1a]/20 text-[#ffb37f]'
                        : 'border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/5'
                    }`}
                  >
                    {tech.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Dual-View (Preview & Markdown) */}
        <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-7">
          {/* Header tabs */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex rounded-full border border-white/15 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'preview' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Live Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('markdown')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'markdown' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                <FileCode2 className="h-3.5 w-3.5" />
                <span>Raw Markdown</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-white/40">
              {username || 'devnoumannaseer-ctrl'} / README.md
            </span>
          </div>

          {/* Tab 1: Live Rendered Preview */}
          {activeTab === 'preview' && (
            <div className="mt-6 flex-1 overflow-y-auto max-h-[680px] rounded-2xl border border-white/10 bg-black/60 p-5 space-y-6 text-white text-sm">
              {/* Banner */}
              {bannerStyle === 'hands' ? (
                <div className="text-center">
                  <img
                    src="https://raw.githubusercontent.com/devnoumannaseer-ctrl/devnoumannaseer-ctrl/main/assets/header-hands.svg"
                    alt="Header Hands"
                    className="w-full rounded-xl"
                  />
                </div>
              ) : (
                <div className="text-center py-4 border-b border-white/10">
                  <h1 className="font-antonio text-3xl font-bold tracking-wider text-white">{headline}</h1>
                </div>
              )}

              {/* Bio */}
              <p className="text-center text-xs leading-6 text-white/70 italic">{bio}</p>

              {/* Social links */}
              {includeSocials && (
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <span className="rounded bg-[#0a0e17] px-3 py-1 text-[11px] font-bold text-[#53d0ff] border border-white/10">
                    Live Portfolio
                  </span>
                  <span className="rounded bg-[#0a0e17] px-3 py-1 text-[11px] font-bold text-[#0A66C2] border border-white/10">
                    LinkedIn
                  </span>
                  <span className="rounded bg-[#0a0e17] px-3 py-1 text-[11px] font-bold text-white border border-white/10">
                    GitHub
                  </span>
                  <span className="rounded bg-[#0a0e17] px-3 py-1 text-[11px] font-bold text-[#EA4335] border border-white/10">
                    Email
                  </span>
                  <span className="rounded bg-[#0a0e17] px-3 py-1 text-[11px] font-bold text-[#25D366] border border-white/10">
                    WhatsApp
                  </span>
                </div>
              )}

              {/* Pulse line */}
              {includePulseLines && <RenderPulseLine />}

              {/* Tech Badges */}
              {selectedTech.length > 0 && (
                <div>
                  <h4 className="text-center font-antonio text-lg font-bold text-white mb-2">
                    Tech Stack &amp; Systems Tools
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {selectedTech.map((name) => {
                      const item = AVAILABLE_TECH.find((t) => t.name === name);
                      return item ? (
                        <img
                          key={name}
                          src={`https://img.shields.io/badge/${item.badge}`}
                          alt={name}
                          className="h-6"
                        />
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {/* Pulse line */}
              {includePulseLines && <RenderPulseLine />}

              {/* Stats Cards Preview */}
              {(includeProfileDetails || includeStatsCard || includeLanguageCard) && (
                <div className="space-y-3">
                  <h4 className="text-center font-antonio text-lg font-bold text-white">GitHub Stats</h4>
                  {includeProfileDetails && (
                    <div className="flex justify-center">
                      <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username || 'devnoumannaseer-ctrl'}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=53D0FF&chart_color=53D0FF`}
                        alt="Profile Details"
                        className="w-full max-w-lg rounded-xl border border-white/10"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap justify-center gap-2">
                    {includeStatsCard && (
                      <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username || 'devnoumannaseer-ctrl'}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=FFFFFF&chart_color=53D0FF`}
                        alt="Stats"
                        className="h-36 rounded-xl border border-white/10"
                      />
                    )}
                    {includeLanguageCard && (
                      <img
                        src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username || 'devnoumannaseer-ctrl'}&theme=solarized_dark&title_color=53D0FF&text_color=FFFFFF&bg_color=050811&border_color=${themeColors.border}&icon_color=53D0FF&chart_color=53D0FF`}
                        alt="Languages"
                        className="h-36 rounded-xl border border-white/10"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Streak */}
              {includeStreakCard && (
                <div className="text-center pt-2">
                  <img
                    src={`https://streak-stats.demolab.com/?user=${username || 'devnoumannaseer-ctrl'}&background=050811&border=${themeColors.border}&stroke=53D0FF&ring=53D0FF&fire=${themeColors.fire}&currStreakNum=53D0FF&sideLabels=53D0FF&currStreakLabel=FFFFFF&sideNums=FFFFFF&dates=94A3B8&hide_border=false`}
                    alt="Streak"
                    className="mx-auto rounded-xl border border-white/10"
                  />
                </div>
              )}

              {/* Footer */}
              {includeFooter && (
                <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#ff7a1a]/15 via-black to-[#53d0ff]/15 p-4 text-center">
                  <span className="font-mono text-xs text-[#ffb37f]">
                    ⚡ GITHANCE DEVELOPER WORKSPACE • DOCUMENTATION READY
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Raw Markdown Code */}
          {activeTab === 'markdown' && (
            <div className="mt-6 flex-1 max-h-[680px] overflow-y-auto rounded-2xl border border-white/10 bg-black/80 p-4 font-mono text-xs text-white/90">
              <pre className="whitespace-pre-wrap leading-relaxed select-all">
                {generateMarkdown()}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
