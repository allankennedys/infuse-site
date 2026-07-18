import { useEffect, useRef } from 'react';

/**
 * Shared observer: one IntersectionObserver for the whole page instead of one
 * per animated element. Each element reveals once and is then unobserved.
 */
const revealCallbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealCallbacks.get(entry.target)?.();
        revealCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    // Fires slightly before the element is fully in view, so the motion reads
    // as "already settling" rather than starting late.
    { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
  );

  return sharedObserver;
}

/**
 * Attach to any element carrying `.reveal` or `.reveal-group`.
 * Adds `.is-revealed` when the element scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support, or the visitor asked for less motion: show it at once.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = getObserver();
    revealCallbacks.set(el, () => el.classList.add('is-revealed'));
    observer.observe(el);

    return () => {
      revealCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return ref;
}
