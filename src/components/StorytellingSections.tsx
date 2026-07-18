import React from 'react';
import { ArrowRight, Terminal, Sparkles, Bot, ShoppingBag, Workflow } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

interface StorytellingSectionsProps {
  onOpenContact: () => void;
}

export const StorytellingSections: React.FC<StorytellingSectionsProps> = ({ onOpenContact }) => {
  const storyTextRef = useScrollReveal<HTMLDivElement>();
  const storyImageRef = useScrollReveal<HTMLDivElement>();
  const imageParallaxRef = useParallax<HTMLDivElement>(0.08);
  const lightHeaderRef = useScrollReveal<HTMLDivElement>();
  const lightCardsRef = useScrollReveal<HTMLDivElement>();
  return (
    <div className="relative bg-[#030305]">
      
      {/* Story Block 1 - Dark Obsidian Visual */}
      <section className="py-28 sm:py-36 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div ref={storyTextRef} className="reveal lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono text-cyan-400 tracking-[0.2em] font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                CONSTRUINDO O FUTURO DO SEU NEGÓCIO
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Não perca mais tempo <br />
                <span className="text-apple-gradient">com tarefas manuais repetitivas.</span>
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                Quando seu cliente manda mensagem no WhatsApp, ele quer resposta na hora. Com a Infuse Software, sua empresa ganha velocidade de grandes corporações mantendo um atendimento acolhedor e altamente eficaz.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-300 font-mono">24h / 7 dias</div>
                  <div className="text-xs text-zinc-400 mt-1">Disponibilidade total do robô de atendimento</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-300 font-mono">&lt; 5 segundos</div>
                  <div className="text-xs text-zinc-400 mt-1">Tempo de resposta da IA para qualquer cliente</div>
                </div>
              </div>
            </div>

            <div ref={storyImageRef} className="reveal lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group cursor-pointer">
                {/* Bleeds past the frame so the parallax drift never exposes an edge. */}
                <div ref={imageParallaxRef} className="absolute inset-[-10%] will-change-transform">
                  <img
                    src="/images/infuse-equipe-operacao.jpg"
                    alt="Equipe trabalhando em conjunto no escritório"
                    className="fluid-media w-full h-full object-cover group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <Sparkles className="w-4 h-4" />
                    <span>AUTOMATED CUSTOMER EXPERIENCE</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1">
                    Atendimento padronizado e inteligente que impulsiona suas vendas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Story Block 2 - Contrast High Impact Titanium Light Theme */}
      <section className="py-24 sm:py-32 bg-[#f5f5f7] text-slate-900 relative overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div ref={lightHeaderRef} className="reveal max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-cyan-700 font-extrabold">
              INFRAESTRUTURA COMPLETA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mt-3">
              Tudo o que você precisa em um só lugar. <br />
              <span className="text-cyan-600">Site, Vendas e Atendimento Integrados.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Integramos os três pilares que sustentam negócios de sucesso no digital.
            </p>
          </div>

          <div ref={lightCardsRef} className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "1. Presença & E-Commerce",
                desc: "Seu site ou loja virtual pronta para receber tráfego com visual elegante e rápido em celulares."
              },
              {
                icon: Bot,
                title: "2. Atendimento & IA no Zap",
                desc: "Atendente virtual inteligente que recebe cada visitante, responde dúvidas e faz o agendamento."
              },
              {
                icon: Workflow,
                title: "3. CRM & Automação",
                desc: "Sua equipe recebe os dados prontos no painel para acompanhar pós-venda e reengajar clientes."
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="fluid-hover p-8 rounded-2xl bg-white/90 border border-slate-300/80 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 w-fit mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-sm hover:bg-cyan-600 transition-colors shadow-xl flex items-center justify-center gap-3 mx-auto"
            >
              <span>Quero uma Demonstração para Minha Empresa</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
