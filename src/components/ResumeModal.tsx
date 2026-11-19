import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[32px] bg-[#101216] border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0b0d0f] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#ff7a1a]/15 text-[#ff7a1a]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-antonio tracking-wide uppercase">
                  Curriculum Vitae — {portfolioData.personal.fullName}
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified Credential
                  </span>
                </h3>
                <p className="text-xs font-mono text-white/50">
                  Academic Credentials &amp; Technical Profile
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Nauman_Naseer_Resume.png"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff7a1a] text-black text-xs font-bold shadow-[0_0_20px_rgba(255,122,26,0.35)] hover:bg-[#ff8c3a]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Document</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body / Document Preview */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#07080a] flex items-center justify-center">
            <img
              src={portfolioData.personal.resumeUrl}
              alt="Curriculum Vitae of Nauman Naseer"
              className="max-w-full h-auto rounded-xl shadow-2xl border border-white/10 object-contain"
            />
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#0b0d0f] border-t border-white/10 text-xs text-white/50">
            <span className="font-mono">NAUMAN NASEER • CS Undergrad</span>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#ffb37f] hover:underline"
              >
                <span>Open high-res in new tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
