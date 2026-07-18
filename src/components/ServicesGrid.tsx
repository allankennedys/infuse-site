import React, { useState } from 'react';
import { SOLUTIONS_DATA, Solution } from '../data/infuseData';
import { MessageSquareCode, ShoppingBag, Workflow, BarChart3, CalendarCheck, Code2, ArrowUpRight, Check, X, Terminal, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesGridProps {
  onOpenContact: (solutionTitle?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCode': return <MessageSquareCode className="w-6 h-6 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-indigo-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-purple-400" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-amber-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-sky-400" />;
      default: return <MessageSquareCode className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-[#020204] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
              SOLUÇÕES & SERVIÇOS INFUSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
              Tecnologia e Automação para <br className="hidden sm:inline" />
              <span className="text-cyan-glow-gradient">Escalar Suas Vendas Digitais.</span>
            </h2>
          </div>

          <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
            Desenvolvemos a infraestrutura inteira do seu negócio: do site ultrarrápido ao atendimento automatizado com Inteligência Artificial no WhatsApp.
          </p>
        </div>

        {/* Bento Grid Layout with Mouse Hover Dynamic Scaling */}
        <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((solution, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            return (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className={`fluid-hover group cursor-pointer rounded-2xl p-6 sm:p-8 border relative flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'bg-[#0a0d14] border-cyan-500/40 hover:border-cyan-300'
                    : 'bg-zinc-900/40 border-white/10 hover:border-white/30 hover:bg-zinc-900/80 hover:shadow-xl'
                }`}
              >
                {/* Visual Background Glow Effect on hover */}
                <div className="fluid-hover absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full group-hover:bg-cyan-500/20 pointer-events-none" />

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="fluid-hover p-3 rounded-xl bg-zinc-950 border border-white/10 group-hover:border-cyan-500/50 group-hover:scale-110">
                      {getIcon(solution.icon)}
                    </div>

                    <div className="fluid-hover p-2 rounded-full bg-white/5 group-hover:bg-cyan-400 group-hover:text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="fluid-hover text-xl font-bold text-white mb-2 group-hover:text-cyan-300">
                    {solution.title}
                  </h3>

                  <p className="text-xs text-cyan-400 font-mono font-medium mb-3">
                    {solution.subtitle}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {solution.description}
                  </p>
                </div>

                {/* Impact Metric Bar */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-mono">
                  <span className="text-zinc-500">Resultado Estimado:</span>
                  <span className="text-emerald-400 font-bold">{solution.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Drawer for Detailed View */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="bg-[#0b0e17] border border-cyan-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-cyan-500/30">
                  {getIcon(selectedSolution.icon)}
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-cyan-400 font-bold">
                    DETALHES DA SOLUÇÃO INFUSE
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedSolution.title}</h3>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {selectedSolution.description}
              </p>

              {/* Highlight Metrics */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-mono text-cyan-400 block font-bold">
                    Resultado Estimado
                  </span>
                  <span className="text-base font-extrabold text-white">{selectedSolution.metrics}</span>
                </div>
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold mb-3">
                  Recursos Inclusos & Funcionalidades:
                </h4>
                <div className="space-y-2.5">
                  {selectedSolution.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedSolution.title;
                    setSelectedSolution(null);
                    onOpenContact(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <span>Solicitar Orçamento para {selectedSolution.title}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
