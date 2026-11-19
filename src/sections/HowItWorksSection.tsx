import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Code2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { PhilosophyStep } from '../data/portfolioData';

export const HowItWorksSection: React.FC = () => {
  const steps: PhilosophyStep[] = portfolioData.philosophySteps;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="mx-auto mt-20 w-full max-w-7xl px-4 pb-20 sm:mt-24 sm:px-6 lg:mt-32 lg:px-8"
    >
      <div className="flex w-full flex-col">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffb37f]">
          Engineering Methodology
        </p>

        {/* Heading */}
        <h2
          id="how-it-works-heading"
          className="mt-3 font-antonio text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl text-white"
        >
          A structured engineering approach built for algorithmic clarity, systems rigor, and clean execution.
        </h2>

        {/* Right sub-tagline */}
        <div className="mb-8 mt-3 flex justify-end text-sm text-[#ff7a1a] sm:mb-10 sm:text-base font-mono">
          // Disciplined CS Foundations &amp; Architecture
        </div>

        {/* Main Grid: Left Steps Accordion, Right Interactive Preview */}
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left Column: Interactive Steps List with Moving Star Indicator */}
          <div className="relative flex w-full flex-col pl-10 sm:pl-12 lg:max-w-xl lg:pl-10">
            {/* Moving Glowing Star Indicator (GitHance signature element) */}
            <div
              className="absolute left-0 transition-all duration-500 ease-out"
              style={{
                top: `${activeStepIndex * 135 + 20}px`,
              }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff7a1a]/20 border border-[#ff7a1a] shadow-[0_0_20px_#ff7a1a]">
                <Sparkles className="h-3.5 w-3.5 text-[#ff7a1a] animate-spin-slow" />
              </div>
            </div>

            {/* Step buttons */}
            {steps.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  className={`mb-6 flex w-full cursor-pointer flex-col gap-2 p-3 text-left transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'translate-x-3 sm:translate-x-5 text-[#ff7a1a] opacity-100'
                      : 'opacity-40 hover:opacity-80 hover:translate-x-1 text-white'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-antonio text-xl font-bold tracking-wider sm:text-2xl text-[#ffb37f]">
                      {step.number}
                    </span>
                    <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide leading-tight sm:text-3xl text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl font-poppins text-xs sm:text-sm leading-6 text-white/70">
                    {step.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Step Architecture Panel */}
          <div className="w-full flex-1 rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-mono font-bold text-[#ffb37f]">
                      PHASE {activeStep.number}
                    </span>
                    <span className="text-xs text-white/50">// Architectural Specification</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Workflow
                  </span>
                </div>

                {/* Detailed description */}
                <div>
                  <h4 className="font-antonio text-2xl font-bold uppercase text-white">
                    {activeStep.title}
                  </h4>
                  <p className="mt-2.5 font-poppins text-xs sm:text-sm leading-relaxed text-white/75">
                    {activeStep.details}
                  </p>
                </div>

                {/* Code Snippet */}
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-[#53d0ff] overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-white/40 text-[10px]">
                    <span>source_architecture.cpp</span>
                    <span className="text-green-400">g++ -std=c++20</span>
                  </div>
                  <pre className="whitespace-pre leading-relaxed text-white/90">
                    {activeStep.codeSnippet}
                  </pre>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-2">
                    Key Competencies &amp; Artifacts
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-[#ffb37f]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
