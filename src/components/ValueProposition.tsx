import React, { useState } from 'react';
import { MessageSquareCode, ShoppingBag, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ValuePropositionProps {
  onOpenContact: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onOpenContact }) => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const pillarsRef = useScrollReveal<HTMLDivElement>();
  const panelRef = useScrollReveal<HTMLDivElement>();

  const pillars = [
    {
      id: "whatsapp-ai",
      title: "IA & Chatbots para WhatsApp",
      tagline: "Vendas e atendimento 24h por dia direto onde seu cliente está",
      icon: MessageSquareCode,
      summary: "Qualifique leads, tire dúvidas frequentes, envie propostas e confirme agendamentos de forma automatizada e humanizada sem depender de equipe manual 24/7.",
      benefits: [
        "Respostas instantâneas sem fila de espera",
        "Integração bidirecional com CRM e Google Agenda",
        "Disparo de lembretes que reduzem faltas em até 70%",
        "Redirecionamento inteligente para atendentes humanos"
      ],
      highlight: "Construído no WhatsApp oficial com Inteligência Artificial personalizada."
    },
    {
      id: "ecommerce-sites",
      title: "Sites & E-Commerce de Alta Conversão",
      tagline: "Construídos da primeira página ao checkout para vender mais",
      icon: ShoppingBag,
      summary: "Landing pages ultrarrápidas com excelente posicionamento no Google e lojas virtuais completas integradas a meios de pagamento, frete e controle de estoque.",
      benefits: [
        "Layout limpo e responsivo otimizado para celulares",
        "Checkout transparente que reduz desistências",
        "SEO técnico avançado para figurar no topo do Google",
        "Recuperação automática de carrinho via WhatsApp"
      ],
      highlight: "Lojas e sites que carregam em menos de 1 segundo com design de classe mundial."
    },
    {
      id: "automacoes-crm",
      title: "Automação de Processos & CRM",
      tagline: "Conecte suas ferramentas e elimine tarefas manuais repetitivas",
      icon: Workflow,
      summary: "Acompanhe todo o histórico do seu cliente do primeiro contato ao pós-venda em um painel único de CRM. Sincronize cadastros, pedidos e finanças automaticamente.",
      benefits: [
        "Funil visual de negociações e vendas",
        "Integração entre sistemas de pagamento, notas e ERP",
        "Disparo de fluxos pós-venda e pesquisas de satisfação",
        "Relatórios e métricas de desempenho de atendimento em tempo real"
      ],
      highlight: "Aumento de até 85% na eficiência operacional da sua equipe."
    }
  ];

  return (
    <section id="proposta" className="py-24 sm:py-36 bg-white text-slate-950 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Storytelling Apple-Style Big Typography */}
        <div ref={headerRef} className="reveal max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-cyan-600 font-bold">
            PROPOSTA DE VALOR // INFUSE DIGITAL INFRASTRUCTURE
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mt-4 leading-[1.12]">
            Elimine processos manuais. <br />
            <span className="text-cyan-500">
              Escale suas vendas sem aumentar custos operacionais.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
            A Infuse cria a infraestrutura digital completa para o seu negócio: desde a presença online até a automação total do atendimento e pós-venda no WhatsApp.
          </p>
        </div>

        {/* 3 Pillars Selector Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pillar Navigation Cards */}
          <div ref={pillarsRef} className="reveal-group reveal-group-tight lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  aria-pressed={isActive}
                  className={`fluid-hover p-6 rounded-2xl text-left relative overflow-hidden border group ${
                    isActive
                      ? 'bg-white border-cyan-500 shadow-lg'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
                  )}

                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className={`fluid-hover p-2.5 rounded-xl group-hover:scale-110 ${
                        isActive
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-bold ${isActive ? 'text-slate-950' : 'text-slate-700'}`}>
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {pillar.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Showcase Detail */}
          <div
            ref={panelRef}
            className="reveal lg:col-span-7 min-w-0 rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 flex flex-col justify-between relative shadow-xl overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono font-semibold text-cyan-700">
                  PILAR 0{activePillar + 1} DE 03
                </span>
                <span className="text-xs font-mono text-slate-500">
                  INFUSE INTEGRATED ENGINE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3">
                {pillars[activePillar].title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {pillars[activePillar].summary}
              </p>

              {/* Benefits checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {pillars[activePillar].benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Highlight box & CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 w-full sm:w-auto flex-1">
                <span className="text-[11px] font-mono text-cyan-700 uppercase tracking-wider block font-bold">
                  Diferencial Infuse
                </span>
                <span className="text-xs text-slate-700 font-medium">
                  {pillars[activePillar].highlight}
                </span>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 text-white font-extrabold text-xs tracking-wide hover:bg-cyan-600 transition-colors shrink-0 flex items-center justify-center gap-2"
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
