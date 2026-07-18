import React, { useState } from 'react';
import { CLIENT_LOGOS, CASE_STUDIES } from '../data/infuseData';
import { Quote, Building2, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SocialProofProps {
  onOpenContact: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onOpenContact }) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const logosRef = useScrollReveal<HTMLDivElement>();
  const caseRef = useScrollReveal<HTMLDivElement>();
  const currentCase = CASE_STUDIES[selectedCaseIndex];

  return (
    <section id="casos" className="py-24 sm:py-36 bg-[#030305] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Client Industries Grid & Infinite Marquee */}
        <div className="mb-20">
          <div ref={headerRef} className="reveal text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
              CONFIANÇA & ESCALA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Empresas de Grande Porte que Confiam na Infuse
            </h2>
          </div>

          <div ref={logosRef} className="reveal-group reveal-group-tight grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="fluid-hover p-4 rounded-xl bg-zinc-900/40 border border-white/10 flex flex-col items-center justify-center text-center hover:border-cyan-500/40 hover:-translate-y-0.5 group"
              >
                <div className="fluid-hover w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-950 mb-2">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="fluid-hover text-xs font-bold text-zinc-200 group-hover:text-white">
                  {logo.name}
                </span>
                <span className="text-[10px] text-cyan-400 font-mono mt-1">
                  {logo.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Studies Deep Dive */}
        <div
          ref={caseRef}
          className="reveal p-6 sm:p-12 rounded-3xl bg-[#080b13] border border-cyan-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                ESTUDO DE CASO EM DESTAQUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {currentCase.client}
              </h3>
            </div>

            {/* Case selector tabs */}
            <div className="flex flex-wrap gap-2 bg-zinc-900 p-1 rounded-xl border border-white/10 shrink-0">
              {CASE_STUDIES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedCaseIndex === idx
                      ? 'bg-cyan-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Caso 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 min-w-0 space-y-6">
              <h4 className="text-xl font-bold text-white leading-snug">
                {currentCase.title}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <span className="text-[11px] uppercase font-mono text-cyan-400 block font-bold mb-1">
                    O Desafio Técnico:
                  </span>
                  <p>{currentCase.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <span className="text-[11px] uppercase font-mono text-cyan-400 block font-bold mb-1">
                    A Solução Infuse:
                  </span>
                  <p>{currentCase.solution}</p>
                </div>
              </div>

              {/* Quantifiable results metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {currentCase.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-center">
                    <span className="text-lg sm:text-2xl font-extrabold text-cyan-300 font-heading block">
                      {res.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial Quote */}
            <div className="liquid-glass lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl">
              <div>
                <Quote className="w-8 h-8 text-cyan-400/40 mb-4" />
                <blockquote className="text-zinc-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{currentCase.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{currentCase.author}</div>
                  <div className="text-xs text-cyan-400 font-mono">{currentCase.role}</div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="p-3 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                  title="Construir caso similar"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
