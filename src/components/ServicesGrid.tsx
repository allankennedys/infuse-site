import React, { useEffect, useState } from 'react';
import { SOLUTIONS_DATA, Solution } from '../data/infuseData';
import { MessageSquareCode, ShoppingBag, Workflow, BarChart3, CalendarCheck, Code2, Plus, Check, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesGridProps {
  onOpenContact: (solutionTitle?: string) => void;
}

const ICONS: Record<string, React.ElementType> = {
  MessageSquareCode,
  ShoppingBag,
  Workflow,
  BarChart3,
  CalendarCheck,
  Code2,
};

const SolutionIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-8 h-8' }) => {
  const Icon = ICONS[name] ?? MessageSquareCode;
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
};

/** Nomes curtos nos cards; o painel e o contato continuam usando o título completo. */
const SHORT_TITLE: Record<string, string> = {
  'whatsapp-ai-chatbot': 'IA no WhatsApp',
  'sites-e-commerce': 'Sites e lojas virtuais',
  'automacao-processos': 'Automação de processos',
  'crm-vendas': 'CRM de vendas',
  'agendamento-inteligente': 'Agendamento inteligente',
  'sistemas-customizados': 'Sistemas sob medida',
};

/** Larguras da grade de 6 colunas no desktop: 2 grandes, 3 médios e 1 faixa larga. */
const SPAN = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-6'];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  // Fecha com Esc e trava a rolagem do fundo enquanto o painel está aberto.
  useEffect(() => {
    if (!selectedSolution) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedSolution(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedSolution]);

  return (
    <section id="solucoes" className="py-28 sm:py-40 bg-black relative">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho */}
        <div ref={headerRef} className="reveal max-w-4xl mb-16 sm:mb-24">
          <p className="text-[17px] font-semibold text-[#2997ff]">Soluções</p>
          <h2 className="mt-3 text-[40px] sm:text-[56px] lg:text-[64px] font-semibold tracking-[-0.03em] leading-[1.06] text-[#f5f5f7]">
            Tudo para vender mais pela internet.{' '}
            <span className="text-[#6e6e73]">Do site ao atendimento no WhatsApp.</span>
          </h2>
        </div>

        {/* Grade */}
        <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {SOLUTIONS_DATA.map((solution, idx) => (
            <button
              key={solution.id}
              type="button"
              onClick={() => setSelectedSolution(solution)}
              aria-label={`Saiba mais sobre ${solution.title}`}
              className={`fluid-hover group relative text-left rounded-[28px] bg-[#161617] hover:bg-[#1d1d1f] p-8 sm:p-10 min-h-[300px] sm:min-h-[340px] flex flex-col overflow-hidden ${
                SPAN[idx] ?? 'lg:col-span-2'
              } ${idx === 5 ? 'md:col-span-2 lg:min-h-[240px]' : ''}`}
            >
              <SolutionIcon name={solution.icon} className="w-9 h-9 text-[#f5f5f7]" />

              <div className="mt-auto pt-14 pr-12 max-w-[34rem]">
                <h3 className="text-[26px] sm:text-[30px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#f5f5f7]">
                  {SHORT_TITLE[solution.id] ?? solution.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.45] text-[#a1a1a6]">{solution.subtitle}</p>
              </div>

              <span
                aria-hidden="true"
                className="fluid-hover absolute right-6 bottom-6 sm:right-8 sm:bottom-8 w-9 h-9 rounded-full bg-[#2c2c2e] text-[#f5f5f7] flex items-center justify-center group-hover:bg-[#f5f5f7] group-hover:text-black"
              >
                <Plus className="w-[18px] h-[18px]" strokeWidth={2} />
              </span>
            </button>
          ))}
        </div>

        {/* Painel de detalhes */}
        {selectedSolution && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-2xl"
            onClick={() => setSelectedSolution(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedSolution.title}
          >
            <div
              className="relative bg-[#1d1d1f] rounded-t-[28px] sm:rounded-[28px] w-full max-w-[640px] max-h-[92vh] overflow-y-auto p-8 sm:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                aria-label="Fechar"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] text-[#a1a1a6] hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-[18px] h-[18px]" strokeWidth={2} />
              </button>

              <SolutionIcon name={selectedSolution.icon} className="w-10 h-10 text-[#f5f5f7]" />
              <h3 className="mt-6 text-[30px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.08] text-[#f5f5f7] pr-10">
                {selectedSolution.title}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.5] text-[#a1a1a6]">{selectedSolution.description}</p>

              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {selectedSolution.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3.5 py-4 text-[16px] leading-[1.45] text-[#d2d2d7]">
                    <Check className="w-[18px] h-[18px] text-[#2997ff] shrink-0 mt-[3px]" strokeWidth={2.4} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => {
                  const title = selectedSolution.title;
                  setSelectedSolution(null);
                  onOpenContact(title);
                }}
                className="mt-9 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1877f2] hover:bg-[#3b8cff] text-white font-medium text-[17px] transition-colors"
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
