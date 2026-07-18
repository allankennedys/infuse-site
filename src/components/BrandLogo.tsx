import React, { useEffect, useRef } from 'react';

interface BrandLogoProps {
  variant?: 'white' | 'navy';
  symbolOnly?: boolean;
  /** Entrada + loop contínuo. */
  animated?: boolean;
  /** Gira o símbolo enquanto verdadeiro — usado durante o scroll no hero. */
  spinning?: boolean;
  className?: string;
}

/** Duração de uma volta completa do símbolo. */
const SPIN_MS = 1500;

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'white',
  symbolOnly = false,
  animated = false,
  spinning = false,
  className = '',
}) => {
  const symbolRef = useRef<HTMLImageElement>(null);
  const spinAnim = useRef<Animation | null>(null);
  const settleAnim = useRef<Animation | null>(null);
  /** Ângulo em que a desaceleração começou, para poder retomar dali. */
  const settleFromAngle = useRef(0);

  /**
   * O giro roda pela Web Animations API, e não por CSS, por um motivo: quando a
   * rolagem para, é preciso saber em que ângulo o símbolo está para desacelerar
   * a partir dali. Removendo uma classe de animação CSS, ele saltaria do ângulo
   * corrente direto para zero — que é justamente o corte abrupto a evitar.
   *
   * A parada sempre completa a volta em curso, com easing de saída. Assim ele
   * termina exatamente na posição neutra, independentemente de quando o scroll
   * parou ou de quão rápido foi.
   */
  useEffect(() => {
    const el = symbolRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (spinning) {
      // Já girando: nada a fazer (não reiniciar, senão trava no mesmo quadro).
      if (spinAnim.current) return;

      // Voltou a rolar durante a desaceleração: retoma exatamente do ângulo
      // em que o símbolo está, sem pular de volta para zero.
      let resumeFrom = 0;
      if (settleAnim.current) {
        const settle = settleAnim.current;
        const eased = Number(settle.effect?.getComputedTiming().progress) || 0;
        const from = settleFromAngle.current;
        const angle = from + eased * (360 - from);
        resumeFrom = (angle % 360) / 360;
        settle.cancel();
        settleAnim.current = null;
      }

      spinAnim.current = el.animate(
        [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }],
        { duration: SPIN_MS, iterations: Infinity, easing: 'linear' }
      );
      spinAnim.current.currentTime = resumeFrom * SPIN_MS;
      return;
    }

    const spin = spinAnim.current;
    if (!spin) return;
    spinAnim.current = null;

    // Fração já percorrida da volta atual.
    const elapsed = Number(spin.currentTime) || 0;
    const progress = (elapsed % SPIN_MS) / SPIN_MS;
    spin.cancel();

    const remaining = 1 - progress;
    if (remaining < 0.01) return;

    settleFromAngle.current = progress * 360;

    /*
     * Continuidade de velocidade importa mais que a curva ser "bonita".
     *
     * A desaceleração precisa começar exatamente na velocidade em que o giro
     * linear estava, senão a logo dá um tranco ao parar. Com uma saída
     * quadrática — velocidade inicial igual a 2x a média — a distância
     * percorrida é v0*T/2, logo T = 2 * volta_restante * SPIN_MS. Curvas mais
     * "elásticas" (ease-out padrão do site) arrancam a ~4,5x a média e fazem
     * o símbolo acelerar antes de frear.
     */
    settleAnim.current = el.animate(
      [
        { transform: `rotateY(${progress * 360}deg)` },
        { transform: 'rotateY(360deg)' },
      ],
      {
        duration: Math.max(380, remaining * SPIN_MS * 2),
        easing: 'cubic-bezier(0.333, 0.667, 0.667, 1)',
      }
    );
    settleAnim.current.onfinish = () => {
      settleAnim.current = null;
    };
  }, [spinning]);

  useEffect(
    () => () => {
      spinAnim.current?.cancel();
      settleAnim.current?.cancel();
    },
    []
  );

  if (symbolOnly) return (
    <img
      src={`/brand/infuse-symbol-${variant}.webp`}
      alt="Símbolo da Infuse"
      className={`block h-auto object-contain ${className}`}
    />
  );

  return (
    <span
      className={`brand-logo ${animated ? 'brand-logo-animated' : ''} ${className}`}
      role="img"
      aria-label="Infuse"
    >
      <span className="brand-logo-symbol-wrap">
        <img
          ref={symbolRef}
          src={`/brand/infuse-symbol-${variant}.webp`}
          alt=""
          aria-hidden="true"
          className="brand-logo-symbol brand-logo-spinnable"
        />
      </span>
      <img
        src={`/brand/infuse-word-${variant}.webp`}
        alt=""
        aria-hidden="true"
        className="brand-logo-word"
      />
    </span>
  );
};
