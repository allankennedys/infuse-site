import React from 'react';

interface SmartImageProps {
  /** Caminho do arquivo original (.jpg ou .png). Os irmãos .avif e .webp
   *  precisam existir ao lado dele — ver observação abaixo. */
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Serve AVIF, com WebP e o original como degraus de fallback.
 *
 * O navegador escolhe o primeiro <source> cujo type ele suporta e **não volta
 * atrás se o arquivo não existir** — um 404 no AVIF quebra a imagem em vez de
 * cair para o WebP. Por isso todo arquivo listado aqui precisa ter os três
 * formatos gerados; não basta ter só alguns.
 *
 * O <picture> usa `display: contents` para não criar caixa própria: a <img>
 * continua participando do layout do pai exatamente como antes, o que mantém
 * intactos os `object-cover`, `absolute` e afins dos componentes.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
}) => {
  const base = src.replace(/\.(jpe?g|png)$/i, '');

  return (
    <picture className="contents">
      <source srcSet={`${base}.avif`} type="image/avif" />
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img src={src} alt={alt} loading={loading} decoding="async" className={className} />
    </picture>
  );
};
