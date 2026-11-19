import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Compose direct mailto link
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name || 'Collaborator'}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:p-8 lg:p-12">
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-[#ff7a1a]/15 blur-[120px]" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column: Direct Connect & Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff7a1a]/25 bg-[#ff7a1a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
                <Sparkles className="h-3 w-3 text-[#ff7a1a]" />
                Get In Touch
              </span>

              <h2 className="mt-4 font-antonio text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let's discuss systems, algorithms, or internships.
              </h2>

              <p className="mt-4 font-poppins text-xs sm:text-sm leading-7 text-white/65">
                Whether you're inquiring about software development internships, academic collaborations, or analyzing a
                codebase, my inbox is open.
              </p>

              {/* Status card */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
                  <span>Available for Internships &amp; Technical Projects</span>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Location: <span className="text-white">{portfolioData.personal.location}</span> • Ready for remote &amp; on-site roles
                </p>
              </div>

              {/* Email direct copy */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#ff7a1a]" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Direct Email</p>
                    <p className="text-xs font-mono text-white/90">{portfolioData.personal.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-xl border border-white/15 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                Direct Channels
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={portfolioData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366]"
                >
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:text-[#E1306C]"
                >
                  <FaInstagram className="h-4 w-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="rounded-[28px] border border-white/10 bg-[#0b0d0f]/80 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide text-white">
              Send a Transmission
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Formulates an instant email message ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Internship Opportunity / Project Inquiry"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Nauman, I saw your GitHance portfolio and would love to connect regarding..."
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#ff7a1a] py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,122,26,0.4)] transition-all hover:bg-[#ff8c3a] hover:shadow-[0_0_40px_rgba(255,122,26,0.6)]"
              >
                <Send className="h-4 w-4 stroke-[2.5]" />
                <span>Transmit Message via Email</span>
              </button>

              {sentSuccess && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-center text-xs text-green-300">
                  Email client opened with pre-filled details! Thanks for reaching out.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
