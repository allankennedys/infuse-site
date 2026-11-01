import React, { useLayoutEffect, useRef } from 'react';

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  /** Cor das palavras ainda "apagadas" e das já "acesas", em RGB. */
  from?: [number, number, number];
  to?: [number, number, number];
}

/** Quantas palavras formam a faixa de transição: maior = varredura mais suave. */
const SOFT = 4;

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

/**
 * Texto que vai ganhando cor, palavra por palavra, conforme a rolagem.
 *
 * A cor é escrita direto no DOM (sem estado do React), porque o scroll dispara
 * dezenas de eventos por segundo e re-renderizar a cada um seria desperdício.
 * Com `prefers-reduced-motion`, o texto já aparece todo na cor final.
 */
export const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({
  text,
  className = '',
  as: Tag = 'h2',
  from = [72, 72, 78],
  to = [245, 245, 247],
}) => {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('[data-w]'));
    const paint = (i: number, f: number) => {
      const r = Math.round(from[0] + (to[0] - from[0]) * f);
      const g = Math.round(from[1] + (to[1] - from[1]) * f);
      const b = Math.round(from[2] + (to[2] - from[2]) * f);
      spans[i].style.color = `rgb(${r}, ${g}, ${b})`;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((_, i) => paint(i, 1));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      // Começa a acender quando o título entra na parte de baixo da tela e
      // termina quando chega perto do meio.
      const start = vh * 0.9;
      const end = vh * 0.38;
      const p = clamp((start - top) / (start - end));
      const n = spans.length;
      for (let i = 0; i < n; i++) paint(i, clamp((p * (n + SOFT) - i) / SOFT));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text, from, to]);

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span data-w>{w}</span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Tag>
  );
};
