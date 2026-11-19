import React, { useState } from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [bannerImgError, setBannerImgError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#07080a] text-white">
      {/* GitHance Signature Banner */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        {!bannerImgError ? (
          <div className="overflow-hidden rounded-2xl border border-white/10 opacity-90 transition-opacity hover:opacity-100">
            <img
              src="https://githance.in/api/render?type=footer&banner_id=banner-2&w=1600&h=240"
              alt="GitHance Footer Banner"
              className="w-full object-cover min-h-[100px]"
              onError={() => setBannerImgError(true)}
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#ff7a1a]/15 via-[#101216] to-[#53d0ff]/15 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-center justify-center gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.3em] text-[#ffb37f]">
                <span className="h-2 w-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                <span>GITHANCE • DEVELOPER WORKSPACE</span>
              </div>
              <h3 className="font-antonio text-2xl sm:text-4xl font-bold uppercase tracking-wider text-white">
                ENGINEERING DISCIPLINE &amp; COMPUTATIONAL RIGOR
              </h3>
              <p className="text-xs text-white/50 max-w-xl font-poppins">
                Public workspace for systems exploration, C++ dynamic memory management, algorithmic simulations, and live GitHub documentation.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Terminal className="h-4 w-4 text-[#ff7a1a]" />
              </div>
              <span className="font-antonio text-2xl font-bold tracking-wider text-white">
                NAUMAN NASEER
              </span>
            </div>
            <p className="mt-2 text-xs text-white/50 max-w-sm">
              Computer Science student building programming foundations in C++, Python, Java, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#analyzer" className="hover:text-[#ff7a1a] transition-colors">GitHub Analyzer</a>
            <a href="#readme-builder" className="hover:text-[#ff7a1a] transition-colors">README Builder</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={portfolioData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff7a1a] text-black shadow-[0_0_15px_rgba(255,122,26,0.4)] hover:bg-[#ff8c3a]"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Nauman Naseer. Engineered in GitHance Developer Aesthetic.</p>
          <div className="mt-2 flex items-center gap-1.5 md:mt-0 font-mono text-[11px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span>Systems Normal • 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
