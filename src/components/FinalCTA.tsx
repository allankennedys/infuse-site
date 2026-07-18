import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, MessageSquare, PhoneCall } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const ctaRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="py-28 sm:py-36 bg-[#030305] relative overflow-hidden border-t border-white/10">
      
      {/* Intense Glowing Backdrop */}

      <div
        ref={ctaRef}
        className="reveal-group max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        
        <span className="block text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 font-bold mb-5">
          VAGAS ABERTAS PARA NOVOS PROJETOS & AUTOMAÇÕES
        </span>

        <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
          Pronto para automatizar suas vendas <br />
          <span className="text-cyan-glow-gradient">
            e multiplicar o faturamento da sua empresa?
          </span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
          Fale com um de nossos consultores especialistas e descubra como criar seu novo site, e-commerce ou chatbot de WhatsApp em poucos dias.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 sm:px-9 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm sm:text-base transition-colors duration-300 flex items-center justify-center gap-3 group active:scale-98"
          >
            <Calendar className="w-5 h-5 shrink-0 text-black" />
            <span>Falar com um Consultor no WhatsApp</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Guarantees Line */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Proposta Transparente em Contrato</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Atendimento Rápido em menos de 15 Minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-indigo-400" />
            <span>Suporte Técnico Contínuo Incluso</span>
          </div>
        </div>

      </div>
    </section>
  );
};
