import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,28,0.96),rgba(11,13,15,0.98))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffb37f]">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-antonio text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Straight answers for technical recruiters and collaborators.
          </h2>
          <p className="mt-4 font-poppins text-sm leading-7 text-white/65 sm:text-base">
            These are common questions regarding Nauman's coursework, programming proficiencies, project architecture, and
            availability.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {portfolioData.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article
                key={item.id}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-3 text-left focus:outline-none"
                >
                  <h3 className="font-antonio text-xl font-bold uppercase tracking-wide text-white">
                    {item.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#ff7a1a]/20 border-[#ff7a1a]/50 text-[#ff7a1a]' : 'text-white/60'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 font-poppins text-xs sm:text-sm leading-7 text-white/70 border-t border-white/5 pt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
