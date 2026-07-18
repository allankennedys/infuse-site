import { useEffect, useRef } from 'react';

/**
 * Vertical-only parallax. The element must sit inside an `overflow-hidden`
 * parent and bleed past its edges (e.g. `absolute inset-[-8%]`), otherwise the
 * translation exposes a gap.
 *
 * Skipped on touch/small screens and under reduced-motion, where the effect is
 * mostly jank for no payoff.
 *
 * @param strength fraction of the viewport height travelled across the full
 *                 scroll of the element (0.1 = subtle, 0.3 = pronounced)
 */
export function useParallax<T extends HTMLElement>(strength = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    ) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Off-screen: nothing to paint.
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      // -1 when the element sits below the fold, +1 once it has passed above it.
      const progress =
        (rect.top + rect.height / 2 - viewportHeight / 2) /
        (viewportHeight / 2 + rect.height / 2);

      const offset = progress * strength * viewportHeight;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}
