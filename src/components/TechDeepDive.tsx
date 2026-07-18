import React, { useState } from 'react';
import { Bot, ShoppingBag, Workflow, Zap, ShieldAlert, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useMorphIndicator } from '../hooks/useMorphIndicator';
import { SmartImage } from './SmartImage';

const TABS = [
  { id: 'web', label: 'Sites & E-Commerce Core', icon: ShoppingBag },
  { id: 'bot', label: 'IA & Agentes no WhatsApp', icon: Bot },
  { id: 'workflow', label: 'Automação & CRM Nodes', icon: Workflow },
] as const;

export const TechDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'bot' | 'workflow'>('web');
  const { containerRef, indicatorRef } = useMorphIndicator<HTMLDivElement, HTMLSpanElement>(
    activeTab,
    'horizontal'
  );
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();
  const comparisonRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="arquitetura" className="py-24 sm:py-36 bg-[#030305] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background ambient light */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div ref={headerRef} className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-cyan-400 font-bold">
            TECNOLOGIA & INFRAESTRUTURA // INFUSE ENGINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
            Por Dentro da Tecnologia <br />
            <span className="text-cyan-glow-gradient">Desenvolvida pela Infuse Software.</span>
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base font-light">
            Soluções construídas para alta vazão de mensagens e conversões instantâneas com foco em retorno sobre o investimento.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div
            ref={containerRef}
            className="relative p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-wrap justify-center gap-1 backdrop-blur-md"
          >
            {/* Highlight that stretches from one tab to the next. */}
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="morph-indicator rounded-xl bg-cyan-500 shadow-[0_10px_28px_-12px_rgba(24,119,242,0.95)]"
            />

            {TABS.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-morph-item={tab.id}
                  aria-pressed={isActive}
                  className={`fluid-hover relative z-10 px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <IconComp className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Visual Content Card */}
        <div
          ref={cardRef}
          className="reveal rounded-3xl bg-[#080b12] border border-cyan-500/30 p-5 sm:p-12 shadow-2xl relative overflow-hidden mb-20"
        >
          {activeTab === 'bot' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="block text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-[0.18em]">
                  02 // AGENTE AUTÔNOMO NO WHATSAPP
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Qualificação de Leads e Vendas sem Espera.
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Utilizamos modelos de IA capazes de entender mensagens de voz e texto, responder com catálogo atualizado, sugerir produtos e agendar serviços direto no WhatsApp Business oficial.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Transbordo inteligente: se a conversa exigir, transfere para um atendente humano no CRM.",
                    "Disparo de lembretes e pós-venda automatizado para retenção de clientes.",
                    "Integração oficial sem risco de banimento de número."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl group cursor-pointer">
                <SmartImage
                  src="/images/infuse-atendimento-leads.jpg"
                  alt="Painel de atendimento da Infuse aberto em um notebook"
                  className="fluid-media w-full h-80 object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-emerald-400 font-bold">INFUSE WHATSAPP ENGINE</span>
                  <p className="text-xs text-zinc-300 font-mono mt-1">Conexão Oficial • Atendimento 24h • Respostas em &lt; 2s</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'web' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="block text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-[0.18em]">
                  01 // ARQUITETURA WEB & E-COMMERCE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Páginas Ultrarrápidas Desenhadas para Converter.
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Desenvolvemos a presença digital da sua empresa focando na velocidade de carregamento e na experiência do usuário em celulares, garantindo excelente classificação no Google.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Lojas virtuais com checkout otimizado em poucas etapas.",
                    "Integração automatizada com portais de pagamento e cálculo de frete.",
                    "Sincronização de estoque e pedidos em tempo real."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group cursor-pointer">
                <SmartImage
                  src="/images/infuse-loja-virtual.jpg"
                  alt="Loja virtual desenvolvida pela Infuse com pedido direto pelo WhatsApp"
                  className="fluid-media w-full h-80 object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-cyan-400 font-bold">HIGH-CONVERSION DIGITAL STORE</span>
                  <p className="text-xs text-zinc-300 font-mono mt-1">Carregamento Instantâneo • SEO Avançado no Google</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <span className="block text-[11px] font-mono text-indigo-300 font-bold uppercase tracking-[0.18em]">
                  03 // AUTOMAÇÃO & FLUXOS OPERACIONAIS
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Conecte seu CRM, ERP e Meios de Pagamento.
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Elimine o trabalho braçal de digitar informações em planilhas ou enviar mensagens repetitivas. Criamos pipelines que realizam ações automáticas a cada novo lead ou venda.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Painel único para acompanhar leads por etapa do funil.",
                    "Emissão automática de notas e comprovantes.",
                    "Notificação imediata para a equipe quando surge um lead quente."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl group cursor-pointer">
                <SmartImage
                  src="/images/infuse-crm-funil.png"
                  alt="Funil de vendas do CRM da Infuse com os contatos por etapa"
                  className="fluid-media w-full h-80 object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-indigo-400 font-bold">AUTOMATED WORKFLOW ENGINE</span>
                  <p className="text-xs text-zinc-300 font-mono mt-1">Integração de Webhooks • CRM Visual • Zero Erros</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Comparison: Processo Manual Tradicional vs Automação Infuse */}
        <div ref={comparisonRef} className="reveal max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              COMPARATIVO DE OPERAÇÃO
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Atendimento Manual Lento vs. Infraestrutura Digital Infuse
            </h3>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 p-6 sm:p-8 select-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Legacy Column */}
              <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/30 space-y-4">
                <div className="flex items-center justify-between text-red-400">
                  <span className="text-xs font-mono font-bold uppercase">OPERAÇÃO TRADICIONAL LENTA</span>
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">Demora para responder mensagens no WhatsApp</li>
                  <li className="flex items-center gap-2">Faltas e desistências em agendamentos sem lembrete</li>
                  <li className="flex items-center gap-2">Perda de vendas fora do horário comercial</li>
                  <li className="flex items-center gap-2">Digitação manual repetitiva em planilhas</li>
                </ul>
              </div>

              {/* Infuse Column */}
              <div className="p-6 rounded-xl bg-cyan-950/30 border border-cyan-400 space-y-4">
                <div className="flex items-center justify-between text-cyan-300">
                  <span className="text-xs font-mono font-bold uppercase">INFRAESTRUTURA DIGITAL INFUSE</span>
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-200 font-medium">
                  <li className="flex items-center gap-2">Atendimento em menos de 5 segundos via IA</li>
                  <li className="flex items-center gap-2">Lembretes automáticos reduzindo no-show em até 70%</li>
                  <li className="flex items-center gap-2">Vendas e qualificação 24h nos 7 dias da semana</li>
                  <li className="flex items-center gap-2">Integração total de dados com CRM e e-commerce</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
