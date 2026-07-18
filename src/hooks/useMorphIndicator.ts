import { useCallback, useEffect, useRef } from 'react';

/**
 * Layout offset of `target` relative to `container`.
 *
 * Deliberately not getBoundingClientRect: that reports the *painted* box, so a
 * target still mid-transition (the scroll reveal slides cards up by 26px)
 * measures at its animated position and the indicator settles misaligned.
 * offsetTop/offsetLeft report the laid-out position and ignore transforms.
 */
function offsetWithin(target: HTMLElement, container: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = target;

  // Bounded walk: containers are `position: relative`, so they are in the
  // offsetParent chain, but never loop forever if that assumption breaks.
  for (let hops = 0; node && node !== container && hops < 20; hops++) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  return { x, y };
}

/**
 * Drives a single highlight that travels and reshapes itself between items —
 * the "one blob absorbing another" feel, rather than a highlight that blinks
 * from one item to the next.
 *
 * The container must be `position: relative` and each option must carry
 * `data-morph-item="<key>"`. The indicator element gets absolutely positioned
 * behind them, so options need to sit on their own stacking context
 * (`relative z-10`) and the active one must be transparent to reveal it.
 *
 * Three properties animate at once: `transform` moves it, `width`/`height`
 * reshape it, and `scale` adds the squash-and-stretch during travel. `scale`
 * is a standalone CSS property, so it composes with `transform` instead of
 * fighting it.
 */
export function useMorphIndicator<C extends HTMLElement, I extends HTMLElement>(
  activeKey: string | number,
  axis: 'horizontal' | 'vertical' = 'horizontal'
) {
  const containerRef = useRef<C>(null);
  const indicatorRef = useRef<I>(null);
  const isFirstPlacement = useRef(true);
  const stretchTimer = useRef<number | undefined>(undefined);

  const activeKeyRef = useRef(activeKey);
  activeKeyRef.current = activeKey;

  const place = useCallback((animate: boolean) => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const target = container.querySelector<HTMLElement>(
      `[data-morph-item="${activeKeyRef.current}"]`
    );
    if (!target) return;

    // Hidden behind a breakpoint (display:none) — nothing meaningful to measure.
    if (target.offsetWidth === 0 && target.offsetHeight === 0) {
      indicator.style.opacity = '0';
      return;
    }

    const { x, y } = offsetWithin(target, container);

    if (!animate) indicator.style.transition = 'none';

    indicator.style.width = `${target.offsetWidth}px`;
    indicator.style.height = `${target.offsetHeight}px`;
    indicator.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    indicator.style.opacity = '1';

    if (!animate) {
      void indicator.offsetHeight; // flush the jump before re-enabling motion
      indicator.style.transition = '';
    }
  }, []);

  // Selection changed: travel there, with the squash leading the movement.
  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const animateThisTime = !isFirstPlacement.current;
    place(animateThisTime);

    if (
      animateThisTime &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      indicator.style.scale = axis === 'horizontal' ? '1.07 0.9' : '0.9 1.07';
      window.clearTimeout(stretchTimer.current);
      // Held past the travel delay so the squash leads the movement, then
      // releases while the body is still in flight.
      stretchTimer.current = window.setTimeout(() => {
        indicator.style.scale = '1 1';
      }, 300);
    }

    isFirstPlacement.current = false;
  }, [activeKey, axis, place]);

  // Layout changes: re-place without animation. Registered once, so the
  // callback ResizeObserver fires on observe() cannot land mid-travel.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reposition = () => place(false);
    window.addEventListener('resize', reposition);

    let lastWidth = container.offsetWidth;
    let lastHeight = container.offsetHeight;

    // Only react to real size changes. Re-placing on every notification would
    // apply `transition: none` mid-flight and cancel the running animation.
    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            if (width === lastWidth && height === lastHeight) return;
            lastWidth = width;
            lastHeight = height;
            place(false);
          })
        : null;
    observer?.observe(container);

    return () => {
      window.removeEventListener('resize', reposition);
      observer?.disconnect();
    };
  }, [place]);

  useEffect(() => () => window.clearTimeout(stretchTimer.current), []);

  return { containerRef, indicatorRef };
}
