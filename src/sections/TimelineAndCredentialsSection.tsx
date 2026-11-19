import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Terminal,
  Rocket,
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  FileText,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { TimelineEntry, CertificateItem } from '../data/portfolioData';

interface TimelineProps {
  onOpenResumeModal: () => void;
}

export const TimelineAndCredentialsSection: React.FC<TimelineProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="timeline" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a1a]" />
            <span>Academic &amp; Verified Path</span>
          </div>
          <h2 className="mt-3 font-antonio text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Education &amp; Milestones
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-6 text-white/60 sm:text-base">
            Formal Computer Science undergraduate studies paired with aggressive self-directed project development and
            algorithmic problem solving.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenResumeModal}
          className="inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-6 py-2.5 text-xs font-bold text-black shadow-[0_0_25px_rgba(255,122,26,0.4)] transition-all hover:bg-[#ff8c3a]"
        >
          <FileText className="h-4 w-4" />
          <span>View Curriculum Vitae (CV)</span>
        </button>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Left Column: Academic & Experience Timeline */}
        <div className="space-y-6">
          <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide text-white">
            Academic Track &amp; Milestones
          </h3>

          <div className="relative border-l border-white/15 pl-6 space-y-8">
            {portfolioData.timeline.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff7a1a] shadow-[0_0_12px_#ff7a1a]" />

                <div className="rounded-[24px] border border-white/10 bg-[#101216] p-6 transition-all duration-300 hover:border-white/20">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <span className="font-mono text-xs text-[#ffb37f]">{item.period}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/60 uppercase">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="font-antonio text-xl font-bold uppercase text-white group-hover:text-[#ff7a1a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-[#53d0ff]">{item.institution} • {item.location}</p>

                  <p className="mt-3 font-poppins text-xs sm:text-sm leading-6 text-white/70">
                    {item.description}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs text-white/60">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-400 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Credentials & Services */}
        <div className="space-y-6">
          <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide text-white">
            Verified Credentials &amp; Services
          </h3>

          {/* Credentials Cards */}
          <div className="grid gap-4">
            {portfolioData.certificates.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#101216] p-6 transition-all duration-300 hover:border-white/25"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-[#ff7a1a]" />
                      <span className="font-mono text-xs text-[#53d0ff]">{cert.date}</span>
                    </div>
                    <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-[10px] font-mono text-green-400">
                      Verified
                    </span>
                  </div>

                  <h4 className="mt-3 font-antonio text-xl font-bold uppercase text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-white/50">{cert.issuer}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb37f] hover:text-white"
                  >
                    <span>Inspect Credential Preview</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Services summary card */}
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#101216] to-black/80 p-6">
            <h4 className="font-antonio text-xl font-bold uppercase tracking-wider text-white">
              Areas of Engineering Impact
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
              {portfolioData.services.map((svc) => (
                <div key={svc.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <p className="font-bold text-[#ffb37f] font-mono">{svc.title}</p>
                  <p className="mt-1 text-white/60 line-clamp-2">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
