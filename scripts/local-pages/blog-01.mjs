/**
 * Formato de um artigo:
 *
 * {
 *   slug,            // kebab-case, vira /blog/<slug>/
 *   categoria,       // agrupa na listagem e em "Leia também"
 *   title,           // <= 60 caracteres, termina com " | Infuse" se couber
 *   description,     // <= 160 caracteres
 *   h1, lede,        // lede pode ter HTML (links)
 *   minutos,         // tempo de leitura
 *   secoes: [{ h2, p: [html...], lista?: [html...], passos?: [html...], destaque?: html, depois?: [html...] }],
 *   faq: [{ q, a }],
 *   relacionados: [slug de páginas de serviço/segmento/produto],
 * }
 *
 * Ordem dentro da seção: p, lista, passos, destaque, depois.
 * Links internos usam caminhos absolutos do site, ex.: <a href="/crm/">.
 */

export const BLOG_01 = [
  {
    slug: 'quanto-custa-um-site-em-feira-de-santana',
    categoria: 'Sites e presença digital',
    title: 'Quanto custa um site em Feira de Santana? | Infuse',
    description:
      'Veja de que depende o preço de um site em Feira de Santana, as faixas de referência do mercado, o que costuma ficar de fora e como comparar propostas.',
    h1: 'Quanto custa um site em Feira de Santana?',
    lede:
      'O preço de um site varia muito porque "site" pode ser uma página simples ou uma plataforma inteira. Entenda o que faz o valor subir ou descer e como comparar propostas sem cair em pegadinha.',
    minutos: 6,
    secoes: [
      {
        h2: 'A resposta curta',
        p: [
          'Não existe um preço único. Em referência de mercado, uma página simples feita a partir de modelo pronto custa pouco, um site institucional personalizado fica numa faixa intermediária e projetos com sistema, área restrita ou integrações custam bem mais. Os valores mudam de profissional para profissional e de ano para ano, então desconfie de qualquer tabela fixa, inclusive as que circulam na internet.',
          'O que dá para fazer com segurança é entender o que compõe o preço. Com isso você consegue olhar duas propostas lado a lado e saber por que uma custa o dobro da outra.',
        ],
      },
      {
        h2: 'O que faz o preço de um site subir ou descer',
        p: ['Seis fatores explicam quase toda a diferença entre propostas:'],
        lista: [
          '<strong>Quantidade de páginas e de conteúdo.</strong> Uma página única é bem diferente de um site com serviços, sobre, blog e contato.',
          '<strong>Design personalizado ou modelo pronto.</strong> Identidade visual própria exige criação; modelo pronto reduz o custo e também a diferenciação.',
          '<strong>Funcionalidades.</strong> Formulários, agendamento, área do cliente, integração com WhatsApp ou CRM, pagamento online.',
          '<strong>Textos e imagens.</strong> Quem escreve o conteúdo e quem fornece as fotos muda o escopo.',
          '<strong>Otimização para o Google.</strong> Estrutura, velocidade, páginas por serviço e dados estruturados dão trabalho e fazem diferença nos resultados.',
          '<strong>Suporte depois da entrega.</strong> Ajustes, atualizações e correções podem estar incluídos ou ser cobrados à parte.',
        ],
      },
      {
        h2: 'Custos que costumam ficar de fora da proposta',
        p: ['Ao comparar orçamentos, pergunte sobre o que está além do valor de criação:'],
        lista: [
          '<strong>Domínio</strong> (o endereço .com.br), pago anualmente e que deve ficar no seu nome.',
          '<strong>Hospedagem</strong>, que pode ser mensal ou anual, ou estar embutida em plataformas de site pronto.',
          '<strong>Certificado SSL</strong>, o cadeado de segurança. Hoje muitas hospedagens incluem.',
          '<strong>E-mail profissional</strong> com o seu domínio.',
          '<strong>Manutenção e alterações</strong> depois que o site entra no ar.',
        ],
        destaque:
          '<strong>Dica:</strong> peça para o domínio ser registrado no seu CPF ou CNPJ. Se ficar no nome de quem fez o site, trocar de fornecedor depois vira um problema.',
      },
      {
        h2: 'Site barato demais costuma sair caro',
        p: [
          'Um valor muito abaixo do mercado normalmente significa modelo genérico, nenhum cuidado com Google e velocidade, textos copiados e ausência de suporte. O site fica no ar, mas não traz cliente, e a empresa acaba pagando duas vezes: o barato e o refeito.',
          'O contrário também vale. Preço alto não garante qualidade. O que garante é saber o que está sendo entregue e para quê.',
        ],
      },
      {
        h2: 'Como comparar orçamentos',
        passos: [
          'Peça o escopo por escrito: páginas, funcionalidades, prazo e o que fica fora.',
          'Confirme de quem é o domínio, o conteúdo e o código do site.',
          'Pergunte quais custos recorrentes existem e quando começam.',
          'Veja se o site será otimizado para o Google e se terá integração com WhatsApp.',
          'Confira o que acontece depois da entrega: suporte, prazo de resposta e custo de alterações.',
        ],
      },
      {
        h2: 'Como a Infuse trata orçamento',
        p: [
          'Na Infuse não trabalhamos com tabela de preços genérica. Conversamos pelo WhatsApp, entendemos o negócio, definimos o que entra na primeira entrega e só então enviamos a proposta com prazo e investimento. Assim você paga pelo que o seu caso precisa. Veja como funciona a <a href="/criacao-de-sites-feira-de-santana/">criação de sites em Feira de Santana</a> ou, se a ideia é vender online, a <a href="/loja-virtual-feira-de-santana/">loja virtual</a>.',
        ],
      },
    ],
    faq: [
      {
        q: 'Site com mensalidade ou pagamento único: qual é melhor?',
        a: 'Depende do que está incluso. Mensalidade costuma embutir hospedagem, suporte e atualizações, mas o site pode ficar preso à plataforma. Pagamento único dá mais controle, desde que domínio, hospedagem e código fiquem com você. Peça os dois formatos por escrito e compare o custo em dois ou três anos.',
      },
      {
        q: 'Quanto tempo leva para ficar pronto?',
        a: 'Páginas simples podem sair em poucos dias. Sites institucionais completos costumam levar de duas a seis semanas, e boa parte do prazo depende de você enviar textos, fotos e aprovações. Projetos com funcionalidades específicas levam mais.',
      },
      {
        q: 'Preciso pagar todo mês para manter o site no ar?',
        a: 'Você precisa manter domínio e hospedagem, que têm custo recorrente, geralmente anual ou mensal. Taxas de manutenção e suporte são opcionais e dependem do que foi combinado.',
      },
      {
        q: 'Um site feito em construtor (Wix, por exemplo) resolve?',
        a: 'Para um primeiro endereço na internet, pode resolver. As limitações aparecem em desempenho, SEO avançado, integrações e liberdade de design. Vale como ponto de partida, mas negócios que dependem do Google costumam sair ganhando com um site feito sob medida.',
      },
    ],
    relacionados: ['criacao-de-sites-feira-de-santana', 'loja-virtual-feira-de-santana', 'contato'],
  },
];
