import React from 'react';
import { SOLUTIONS_DATA } from '../data/infuseData';
import { MessageSquareCode, ShoppingBag, Workflow, BarChart3, CalendarCheck, Code2, Check, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ScrollHighlightText } from './ScrollHighlightText';

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

/** Nomes curtos nos cards; o contato continua recebendo o título completo. */
const SHORT_TITLE: Record<string, string> = {
  'whatsapp-ai-chatbot': 'IA no WhatsApp',
  'sites-e-commerce': 'Sites e lojas virtuais',
  'automacao-processos': 'Automação de processos',
  'crm-vendas': 'CRM de vendas',
  'agendamento-inteligente': 'Agendamento inteligente',
  'sistemas-customizados': 'Sistemas sob medida',
};

const HEADLINE = 'Tudo para vender mais pela internet. Do site ao atendimento no WhatsApp.';

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  const labelRef = useScrollReveal<HTMLParagraphElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="solucoes" className="py-28 sm:py-40 bg-black relative">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho: o título acende palavra por palavra ao rolar */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p ref={labelRef} className="reveal text-[17px] font-semibold text-[#2997ff]">
            Soluções
          </p>
          <ScrollHighlightText
            text={HEADLINE}
            className="mt-3 text-[40px] sm:text-[56px] lg:text-[64px] font-semibold tracking-[-0.03em] leading-[1.06]"
          />
        </div>

        {/* Cards com tudo à vista, sem precisar clicar */}
        <div ref={gridRef} className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SOLUTIONS_DATA.map((solution) => {
            const Icon = ICONS[solution.icon] ?? MessageSquareCode;
            return (
              <article
                key={solution.id}
                className="fluid-hover group relative flex flex-col rounded-[28px] p-8 sm:p-9 bg-gradient-to-b from-[#232326] to-[#171719] ring-1 ring-white/[0.08] hover:ring-[#2997ff]/50 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-28px_rgba(41,151,255,0.45)]"
              >
                <div className="fluid-hover w-12 h-12 rounded-2xl bg-[#1877f2]/15 text-[#4da3ff] flex items-center justify-center group-hover:bg-[#1877f2] group-hover:text-white">
                  <Icon className="w-6 h-6" strokeWidth={1.6} aria-hidden="true" />
                </div>

                <h3 className="mt-7 text-[22px] md:text-[26px] lg:text-[22px] xl:text-[23px] font-semibold tracking-[-0.025em] leading-[1.12] text-white">
                  {SHORT_TITLE[solution.id] ?? solution.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.45] text-[#d2d2d7] lg:min-h-[4.7rem] xl:min-h-[3.1rem]">{solution.subtitle}</p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {solution.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-[15px] leading-[1.45] text-[#e5e5ea]">
                      <Check className="w-[17px] h-[17px] text-[#4da3ff] shrink-0 mt-[3px]" strokeWidth={2.5} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    onClick={() => onOpenContact(solution.title)}
                    className="inline-flex items-center gap-1 text-[16px] font-medium text-[#4da3ff] hover:text-white transition-colors"
                  >
                    Pedir orçamento
                    <ChevronRight className="w-[18px] h-[18px] fluid-hover group-hover:translate-x-1" strokeWidth={2.2} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
