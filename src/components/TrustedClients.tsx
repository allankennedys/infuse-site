import React from 'react';
import { TRUSTED_CLIENTS } from '../data/infuseData';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Few logos would leave gaps in a wide viewport, so each half of the track
// repeats the list until it comfortably exceeds the screen width.
const REPEAT = Math.max(2, Math.ceil(8 / TRUSTED_CLIENTS.length));
const HALF = Array.from({ length: REPEAT }, () => TRUSTED_CLIENTS).flat();

export const TrustedClients: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="trusted-clients-title"
      className="py-20 sm:py-24 bg-[#030305] relative border-t border-white/5"
    >
      <div ref={headerRef} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Clientes
          </span>
          <span aria-hidden className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400/60" />
        </div>
        <h2
          id="trusted-clients-title"
          className="mt-5 text-2xl sm:text-4xl font-semibold tracking-tight leading-[1.15] text-white text-balance"
        >
          Empresas que confiam
          <span className="text-zinc-500"> no trabalho da nossa equipe.</span>
        </h2>
      </div>

      <div className="logo-marquee overflow-hidden">
        <ul className="logo-marquee-track flex w-max items-center">
          {[...HALF, ...HALF].map((client, idx) => (
            <li
              key={idx}
              aria-hidden={idx >= TRUSTED_CLIENTS.length}
              className="shrink-0 px-8 sm:px-12"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className={`${'emblem' in client ? 'h-12 sm:h-14' : 'h-8 sm:h-10'} w-auto max-w-[180px] object-contain opacity-40 grayscale transition-opacity duration-300 hover:opacity-80`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
