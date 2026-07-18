import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/infuseData';
import { Search, Compass, GitMerge, Activity, ChevronRight, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface MethodologyProps {
  onOpenContact: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>();
  const panelRef = useScrollReveal<HTMLDivElement>();

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search className="w-5 h-5 text-cyan-600" />;
      case 1: return <Compass className="w-5 h-5 text-cyan-600" />;
      case 2: return <GitMerge className="w-5 h-5 text-cyan-600" />;
      case 3: return <Activity className="w-5 h-5 text-cyan-600" />;
      default: return <Search className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section id="metodologia" className="py-24 sm:py-36 bg-[#f5f5f7] relative border-t border-slate-200 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-mono tracking-[0.2em] text-cyan-400 font-bold">
            PROCESSO & JORNADA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mt-3">
            Como Transformamos Ideias em <br />
            <span className="text-cyan-glow-gradient">Software de Classe Mundial.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light">
            Uma abordagem consultiva rigorosa que elimina incertezas, reduz riscos de execução e garante entregas contínuas em alta velocidade.
          </p>
        </div>

        {/* Interactive Step Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Navigation */}
          <div ref={stepsRef} className="reveal-group reveal-group-tight lg:col-span-5 flex flex-col gap-4">
            {METHODOLOGY_STEPS.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={stepItem.step}
                  onClick={() => setActiveStep(idx)}
                  className={`fluid-hover p-6 rounded-2xl text-left border flex items-start gap-4 relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-cyan-500 shadow-lg'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className={`text-2xl font-extrabold font-mono ${isActive ? 'text-cyan-600' : 'text-slate-400'}`}>
                    {stepItem.step}
                  </span>

                  <div className="flex-1">
                    <h3 className={`text-base font-bold ${isActive ? 'text-slate-950' : 'text-slate-700'}`}>
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {stepItem.subtitle}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                    {getStepIcon(idx)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div
            ref={panelRef}
            className="reveal lg:col-span-7 min-w-0 p-6 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative min-h-[400px] flex flex-col justify-between"
          >

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest">
                  ETAPA {METHODOLOGY_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-500">INFUSE METHODOLOGY ENGINE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">
                {METHODOLOGY_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {METHODOLOGY_STEPS[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <span className="text-xs uppercase font-mono text-cyan-400 font-bold block">
                  Entregáveis Principais desta Fase:
                </span>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Relatório detalhado de arquitetura e gargalos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Cronograma de entregas com prazos definidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Estratégia de CI/CD, segurança e monitoramento em nuvem</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <span className="text-xs text-slate-500 font-mono">
                Transparência e Governança Garantidas
              </span>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-extrabold text-xs hover:bg-cyan-600 transition-colors flex items-center gap-2"
              >
                <span>Iniciar Etapa 01</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
