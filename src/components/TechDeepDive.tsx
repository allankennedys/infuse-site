import React, { useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useMorphIndicator } from '../hooks/useMorphIndicator';
import { SmartImage } from './SmartImage';

type TabId = 'web' | 'bot' | 'workflow';

interface Panel {
  tab: string;
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
  image: string;
  alt: string;
}

const PANELS: Record<TabId, Panel> = {
  web: {
    tab: 'Sites e lojas virtuais',
    eyebrow: 'Sites e lojas virtuais',
    title: 'Páginas rápidas, desenhadas para converter.',
    text: 'Desenvolvemos a presença digital da sua empresa com foco na velocidade de carregamento e na experiência no celular, para ser bem encontrada no Google.',
    items: [
      'Lojas virtuais com checkout em poucas etapas',
      'Integração com meios de pagamento e cálculo de frete',
      'Estoque e pedidos sincronizados',
    ],
    image: '/images/infuse-loja-virtual.jpg',
    alt: 'Loja virtual desenvolvida pela Infuse com pedido direto pelo WhatsApp',
  },
  bot: {
    tab: 'IA no WhatsApp',
    eyebrow: 'IA e agentes no WhatsApp',
    title: 'Atendimento e vendas sem fila de espera.',
    text: 'Modelos de IA entendem mensagens de voz e texto, respondem com o catálogo atualizado, sugerem produtos e agendam serviços direto no WhatsApp Business.',
    items: [
      'Transferência para um atendente humano, no CRM, quando a conversa pede',
      'Lembretes e pós-venda automáticos',
      'Integração com a API oficial do WhatsApp Business',
    ],
    image: '/images/infuse-atendimento-leads.jpg',
    alt: 'Painel de atendimento da Infuse aberto em um notebook',
  },
  workflow: {
    tab: 'Automação e CRM',
    eyebrow: 'Automação e CRM',
    title: 'Seu CRM, seu ERP e seus pagamentos conectados.',
    text: 'Acabe com a digitação em planilhas e com as mensagens repetitivas. Criamos fluxos que executam uma ação a cada novo lead ou venda.',
    items: [
      'Painel único para acompanhar os leads por etapa do funil',
      'Emissão automática de notas e comprovantes',
      'Aviso imediato à equipe quando surge um lead quente',
    ],
    image: '/images/infuse-crm-funil.png',
    alt: 'Funil de vendas do CRM da Infuse com os contatos por etapa',
  },
};

const TABS = (Object.keys(PANELS) as TabId[]).map((id) => ({ id, label: PANELS[id].tab }));

const MANUAL = [
  'Demora para responder no WhatsApp',
  'Faltas em agendamentos sem lembrete',
  'Vendas perdidas fora do horário comercial',
  'Digitação repetitiva em planilhas',
];

const INFUSE = [
  'Resposta imediata com IA',
  'Lembretes automáticos de agendamento',
  'Atendimento e qualificação 24h, todos os dias',
  'Dados integrados entre CRM e loja virtual',
];

export const TechDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('web');
  const { containerRef, indicatorRef } = useMorphIndicator<HTMLDivElement, HTMLSpanElement>(activeTab, 'horizontal');
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();
  const comparisonRef = useScrollReveal<HTMLDivElement>();

  const panel = PANELS[activeTab];

  return (
    <section id="arquitetura" className="py-28 sm:py-40 bg-black text-[#f5f5f7] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho */}
        <div ref={headerRef} className="reveal text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <p className="text-[17px] font-semibold text-[#2997ff]">Tecnologia</p>
          <h2 className="mt-3 text-[40px] sm:text-[56px] lg:text-[64px] font-semibold tracking-[-0.03em] leading-[1.06]">
            Por dentro da tecnologia da Infuse.{' '}
            <span className="text-[#6e6e73]">Feita para atender rápido e converter.</span>
          </h2>
        </div>

        {/* Abas */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div
            ref={containerRef}
            role="tablist"
            aria-label="Áreas de tecnologia"
            className="relative p-1 rounded-full bg-[#1d1d1f] flex flex-wrap justify-center gap-0.5"
          >
            <span ref={indicatorRef} aria-hidden="true" className="morph-indicator rounded-full bg-[#f5f5f7]" />
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  data-morph-item={tab.id}
                  className={`fluid-hover relative z-10 px-5 sm:px-6 py-2.5 rounded-full text-[15px] font-medium ${
                    isActive ? 'text-black' : 'text-[#a1a1a6] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Painel */}
        <div ref={cardRef} className="reveal rounded-[32px] bg-[#161617] p-7 sm:p-14 mb-24 sm:mb-32">
          <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5">
              <p className="text-[15px] font-semibold text-[#2997ff]">{panel.eyebrow}</p>
              <h3 className="mt-3 text-[30px] sm:text-[40px] font-semibold tracking-[-0.03em] leading-[1.08]">{panel.title}</h3>
              <p className="mt-5 text-[17px] leading-[1.5] text-[#a1a1a6]">{panel.text}</p>

              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 py-4 text-[16px] leading-[1.45] text-[#d2d2d7]">
                    <Check className="w-[18px] h-[18px] text-[#2997ff] shrink-0 mt-[3px]" strokeWidth={2.4} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 rounded-[24px] overflow-hidden bg-[#0a0a0b]">
              <SmartImage src={panel.image} alt={panel.alt} className="w-full aspect-[16/10] object-cover" />
            </div>
          </div>
        </div>

        {/* Comparativo */}
        <div ref={comparisonRef} className="reveal max-w-[980px] mx-auto">
          <h3 className="text-center text-[30px] sm:text-[44px] font-semibold tracking-[-0.03em] leading-[1.08]">
            Atendimento manual <span className="text-[#6e6e73]">ou infraestrutura digital.</span>
          </h3>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="rounded-[28px] bg-[#161617] p-8 sm:p-10">
              <p className="text-[15px] font-semibold text-[#86868b]">Operação manual</p>
              <ul className="mt-6 space-y-4">
                {MANUAL.map((t) => (
                  <li key={t} className="flex items-start gap-3.5 text-[17px] leading-[1.4] text-[#a1a1a6]">
                    <Minus className="w-[18px] h-[18px] text-[#6e6e73] shrink-0 mt-[3px]" strokeWidth={2.4} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-[#f5f5f7] text-[#1d1d1f] p-8 sm:p-10">
              <p className="text-[15px] font-semibold text-[#1877f2]">Com a Infuse</p>
              <ul className="mt-6 space-y-4">
                {INFUSE.map((t) => (
                  <li key={t} className="flex items-start gap-3.5 text-[17px] leading-[1.4] font-medium">
                    <Check className="w-[18px] h-[18px] text-[#1877f2] shrink-0 mt-[3px]" strokeWidth={2.6} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
