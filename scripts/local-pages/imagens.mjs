/**
 * Imagens usadas nas páginas geradas. A chave é referenciada em `capa`,
 * `img` (seções de blog) e `galeria` (páginas de produto).
 * Os arquivos ficam em `public/images/` (otimizados em WebP).
 */
export const IMAGENS = {
  'postline-calendario': {
    src: '/images/postline/postline-calendario.webp', og: '/images/postline/postline-calendario.jpg', w: 1280, h: 800,
    legenda: 'Calendário: planeje o mês e agende por rede e por cliente',
    alt: 'Calendário do Postline com as publicações do mês agendadas e publicadas, organizadas por cliente',
  },
  'postline-inbox': {
    src: '/images/postline/postline-inbox.webp', og: '/images/postline/postline-inbox.jpg', w: 1280, h: 800,
    legenda: 'Caixa de entrada: comentários e mensagens em um só lugar, com resposta automática',
    alt: 'Caixa de entrada do Postline com comentários e mensagens diretas e uma resposta automática enviada por palavra-gatilho',
  },
  'postline-studio': {
    src: '/images/postline/postline-studio.webp', og: '/images/postline/postline-studio.jpg', w: 1280, h: 800,
    legenda: 'IA e automação: roteiros prontos para revisar a partir do briefing',
    alt: 'Tela de IA e Automação do Postline com um roteiro de Reels de 30 segundos gerado a partir de um briefing',
  },
  'postline-analytics': {
    src: '/images/postline/postline-analytics.webp', og: '/images/postline/postline-analytics.jpg', w: 1280, h: 800,
    legenda: 'Analytics: alcance, curtidas, salvamentos e comparativo entre clientes',
    alt: 'Tela de Analytics do Postline com alcance, curtidas, salvamentos e comparativo entre clientes',
  },
  'nfc-loja-de-roupas': {
    src: '/images/nfc/placa-nfc-balcao-loja-de-roupas.webp', og: '/images/nfc/placa-nfc-balcao-loja-de-roupas.jpg', w: 1005, h: 1100,
    alt: 'Placa NFC da Infuse em suporte transparente sobre o balcão de uma loja, com QR Code e ícones de Pix, Instagram e Google',
  },
  'nfc-balcao-granito': {
    src: '/images/nfc/placa-nfc-balcao-de-granito.webp', og: '/images/nfc/placa-nfc-balcao-de-granito.jpg', w: 825, h: 1100,
    alt: 'Placa NFC com a frase "Aproxime o celular aqui", QR Code e ícones de Pix, Instagram e Google sobre um balcão de granito',
  },
  'nfc-vitrine-relogios': {
    src: '/images/nfc/placa-nfc-vitrine-de-relogios.webp', og: '/images/nfc/placa-nfc-vitrine-de-relogios.jpg', w: 1100, h: 825,
    alt: 'Placa NFC e QR Code da Infuse em balcão de loja com vitrine ao fundo',
  },
  'nfc-na-mao': {
    src: '/images/nfc/placa-nfc-na-mao-em-loja.webp', og: '/images/nfc/placa-nfc-na-mao-em-loja.jpg', w: 825, h: 1100,
    alt: 'Pessoa segurando a placa NFC com QR Code dentro de uma loja, com Pix, Instagram e Google como destinos',
  },
};
