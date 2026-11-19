import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, CheckCircle2, FileCheck, Layers, GitBranch } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="mx-auto w-full max-w-[95%] px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff7a1a]/25 bg-[#ff7a1a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            Engineering Workflow
          </span>

          <h2 className="mt-6 font-antonio text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            A repeatable loop for software quality, not haphazard trial-and-error.
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-white/65 sm:text-base">
            Every codebase follows a structured pipeline: mathematical problem formulation, algorithmic design, modular
            OOP implementation with leak-free memory safety, and automated GitHub verification.
          </p>

          {/* Workflow step badges */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs text-white/60">
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono">
              01 Problem Formulation
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono">
              02 Algorithmic Design
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono">
              03 Memory Safety &amp; Profiling
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono">
              04 Production Shipping
            </span>
          </div>
        </div>

        {/* 3 Bento Cards: Inputs, Workspace, Outputs matching GitHance */}
        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-[#0b0d0f]/80 p-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
                  01 // Inputs
                </p>
                <Terminal className="h-4 w-4 text-white/40" />
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-6 text-white/70">
                Problem requirements, computational constraints, edge test cases, relational schemas, and input data streams.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-[#0b0d0f]/80 p-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#53d0ff]">
                  02 // Workspace
                </p>
                <Cpu className="h-4 w-4 text-[#53d0ff]" />
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-6 text-white/70">
                G++ compiler with optimization flags (-O3), Valgrind memory leak verification, Python unit testing, and React component state auditing.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-[#0b0d0f]/80 p-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-400">
                  03 // Artifacts
                </p>
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-6 text-white/70">
                Executable binaries, modular packages, verified GitHub documentation, live interactive web prototypes, and reproducible builds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
