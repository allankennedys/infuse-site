import React, { useState } from 'react';
import { Plus, MessageCircleQuestion } from 'lucide-react';
import { FAQ_ITEMS } from '../data/infuseData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQProps {
  onOpenContact: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#030305] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div ref={headerRef} className="reveal text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
            Tudo o que você precisa saber <br className="hidden sm:inline" />
            <span className="text-cyan-glow-gradient">antes de automatizar seu atendimento.</span>
          </h2>
        </div>

        <div ref={listRef} className="reveal-group reveal-group-tight space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`fluid-hover rounded-2xl border overflow-hidden ${
                  isOpen
                    ? 'bg-[#0a0d14] border-cyan-500/40'
                    : 'bg-zinc-900/40 border-white/10 hover:border-white/25'
                }`}
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                  >
                    <span
                      className={`fluid-hover text-sm sm:text-base font-bold ${
                        isOpen ? 'text-cyan-300' : 'text-white'
                      }`}
                    >
                      {item.question}
                    </span>
                    <Plus
                      className={`fluid-hover w-5 h-5 shrink-0 mt-0.5 ${
                        isOpen ? 'text-cyan-400 rotate-45' : 'text-zinc-500'
                      }`}
                    />
                  </button>
                </h3>

                {/* Kept in the DOM when closed so the answers stay crawlable. */}
                <div
                  id={`faq-answer-${idx}`}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-6 -mt-1"
                >
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400 mb-4">
            Ficou com alguma dúvida que não está aqui?
          </p>
          <button
            onClick={onOpenContact}
            className="fluid-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm"
          >
            <MessageCircleQuestion className="w-4 h-4 shrink-0" />
            <span>Falar com um Especialista</span>
          </button>
        </div>

      </div>
    </section>
  );
};
