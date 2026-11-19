import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Terminal, Code2, ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenAnalyzer?: () => void;
  onOpenReadmeBuilder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAnalyzer, onOpenReadmeBuilder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'how-it-works', 'solutions', 'analyzer', 'readme-builder', 'skills', 'timeline', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Analyzer', href: '#analyzer' },
    { name: 'README Builder', href: '#readme-builder' },
    { name: 'Skills', href: '#skills' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav
          aria-label="Primary"
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 pt-3 sm:gap-4 sm:pt-4 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          {/* GitHance-styled Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="flex min-w-0 items-center gap-3 group focus:outline-none"
          >
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_0_20px_rgba(255,122,26,0.2)] transition-all duration-300 group-hover:border-[#ff7a1a]/50 group-hover:shadow-[0_0_25px_rgba(255,122,26,0.4)]">
              <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#ff7a1a]/20 via-transparent to-[#53d0ff]/20">
                <Terminal className="w-5 h-5 text-[#ff7a1a] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="truncate font-antonio text-xl font-bold tracking-wider text-white sm:text-2xl">
                  NAUMAN NASEER
                </span>
                <span className="hidden sm:inline-block rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#ffb37f]">
                  WORKSPACE
                </span>
              </div>
              <span className="hidden sm:block text-[11px] text-white/50 tracking-wider">
                GitHance-Engineered Portfolio
              </span>
            </div>
          </a>

          {/* Centered Floating Glass Pill Menu (GitHance signature) */}
          <div className="relative hidden items-center gap-6 xl:gap-8 rounded-full border border-white/15 bg-black/60 px-6 py-2.5 text-xs lg:text-sm text-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`relative py-1 font-medium transition-colors hover:text-white ${
                    isActive ? 'text-[#ff7a1a] font-semibold' : 'text-white/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navPillIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#ff7a1a] shadow-[0_0_10px_#ff7a1a]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Analyze Repos Button (Action pill with ember glow) */}
            <button
              onClick={() => {
                if (onOpenAnalyzer) onOpenAnalyzer();
                scrollTo('#analyzer');
              }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black shadow-[0_0_25px_rgba(255,122,26,0.4)] transition-all hover:bg-[#ff8c3a] hover:shadow-[0_0_35px_rgba(255,122,26,0.6)] hover:translate-y-[-1px] active:translate-y-0"
            >
              <Code2 className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Analyze Repos</span>
            </button>

            {/* GitHub Profile Icon Link */}
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/90 transition-all hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff7a1a]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/15 bg-[#0b0d0f]/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#ffb37f] font-semibold">
                  Workspace Navigation
                </span>
                <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-ping" />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-white/10 text-[#ff7a1a] font-semibold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    scrollTo('#analyzer');
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#ff7a1a] py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(255,122,26,0.4)]"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Analyze Repositories</span>
                </button>
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-white/90"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub (@devnoumannaseer-ctrl)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
