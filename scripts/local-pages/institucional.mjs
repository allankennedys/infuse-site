/**
 * Páginas institucionais (`kind: 'institucional'`): Sobre e Contato.
 *
 * `secoes` aceita blocos `{ h2, p: [...] }` (texto) ou
 * `{ h2, sub?, items: [{ t, d }], ordered? }` (cards).
 *
 * Só entra aqui o que é fato sobre a empresa. Endereço, horário, história e
 * equipe devem ser acrescentados quando houver os dados reais.
 */

const WA = 'https://wa.me/5575982938031?text=' + encodeURIComponent('Olá! Vim pelo site da Infuse e gostaria de mais informações.');

export const INSTITUCIONAL = [
  {
    slug: 'sobre',
    kind: 'institucional',
    schemaType: 'AboutPage',
    nome: 'Sobre a Infuse',
    title: 'Sobre a Infuse Software | Tecnologia em Feira de Santana',
    description:
      'Conheça a Infuse Software, empresa de tecnologia de Feira de Santana que desenvolve sites, sistemas, automações, CRM e IA no WhatsApp para negócios.',
    eyebrow: 'Sobre nós',
    h1: 'Sobre a Infuse Software',
    lede:
      'A Infuse é uma empresa de tecnologia de Feira de Santana, na Bahia. Desenvolvemos sites, sistemas, automações e soluções com inteligência artificial para negócios que querem atender melhor e vender mais.',
    secoes: [
      {
        h2: 'O que a Infuse faz',
        p: [
          'Trabalhamos com o caminho inteiro entre a empresa e o cliente dela: o site em que o negócio é encontrado, o atendimento no WhatsApp, o CRM que organiza as vendas e os sistemas que sustentam a operação por trás.',
          'Por desenvolvermos todas essas peças, conseguimos fazê-las funcionar juntas. O contato que chega pelo site entra no funil, o atendimento automático registra a conversa e a venda fechada volta como dado para as campanhas.',
        ],
      },
      {
        h2: 'Nossas frentes de trabalho',
        sub: 'Serviços sob medida e produtos próprios.',
        items: [
          { t: 'Sites e lojas virtuais', d: '<a href="/criacao-de-sites-feira-de-santana/">Sites institucionais, landing pages</a> e <a href="/loja-virtual-feira-de-santana/">e-commerce</a>.' },
          { t: 'Automação de processos', d: '<a href="/automacao-de-processos-feira-de-santana/">Integrações e fluxos automatizados</a> entre sistemas, WhatsApp e CRM.' },
          { t: 'Inteligência artificial', d: '<a href="/inteligencia-artificial-feira-de-santana/">Agentes de IA e assistentes</a> para atendimento no WhatsApp.' },
          { t: 'Sistemas sob medida', d: '<a href="/desenvolvimento-de-sistemas-feira-de-santana/">Sistemas web, dashboards e plataformas SaaS</a>.' },
          { t: 'Gestão de tráfego', d: '<a href="/gestao-de-trafego/">Campanhas com rastreamento</a> da origem de cada cliente.' },
          { t: 'Produtos Infuse', d: 'Infuse CRM (<a href="/crm/">CRM com WhatsApp para múltiplos vendedores</a>), <a href="/agenda/">Infuse Agenda</a>, <a href="/postline/">Postline</a> (gestão de redes sociais), <a href="/placa-nfc/">placas NFC</a> e <a href="/cardapio-digital/">cardápio digital</a>.' },
        ],
      },
      {
        h2: 'Como trabalhamos',
        sub: 'O mesmo processo em todo projeto.',
        ordered: true,
        items: [
          { t: 'Entender antes de propor', d: 'Começamos pela conversa: como a empresa atende e vende hoje e onde está perdendo tempo ou cliente.' },
          { t: 'Proposta para o seu caso', d: 'Cada orçamento é feito a partir do escopo. Não trabalhamos com tabela de preços genérica.' },
          { t: 'Entrega em etapas', d: 'Você acompanha a construção e valida antes de ir ao ar.' },
          { t: 'Acompanhamento', d: 'Depois da entrega, seguimos disponíveis para ajustes e evolução.' },
        ],
      },
      {
        h2: 'Quem fundou a Infuse Software',
        p: [
          'A Infuse Software foi fundada por <a href="/autor/allan-kennedy/">Allan Kennedy</a> (<a href="https://www.linkedin.com/in/allankennedys/" target="_blank" rel="noopener me">LinkedIn</a>) e <a href="/autor/breno-lins/">Breno Lins</a> (<a href="https://www.linkedin.com/in/devbrenolins/" target="_blank" rel="noopener me">LinkedIn</a>), cofundadores da empresa. Os dois assinam os artigos do <a href="/blog/">blog da Infuse</a>.',
        ],
      },
      {
        h2: 'Onde estamos',
        p: [
          'A Infuse Software está sediada em Feira de Santana, Bahia. Atendemos empresas da cidade e da região e também clientes de outros estados, com todo o processo conduzido pelo WhatsApp e por reuniões online.',
          'Quer conversar sobre um projeto? Veja a página de <a href="/contato/">contato</a> ou chame direto no WhatsApp.',
        ],
      },
    ],
  },

  {
    slug: 'contato',
    kind: 'institucional',
    schemaType: 'ContactPage',
    nome: 'Contato',
    title: 'Contato | Infuse Software em Feira de Santana',
    description:
      'Fale com a Infuse Software, em Feira de Santana: WhatsApp (75) 98293-8031, e-mail contato@infusesoftware.com e Instagram @infuse.software.',
    eyebrow: 'Contato',
    h1: 'Fale com a Infuse Software',
    lede:
      'O jeito mais rápido de falar com a gente é pelo WhatsApp. Conte o que a sua empresa precisa e retornamos com os próximos passos.',
    secoes: [
      {
        h2: 'Canais de atendimento',
        items: [
          { t: 'WhatsApp', d: `<a href="${WA}" target="_blank" rel="noopener">(75) 98293-8031</a><br>Orçamentos, dúvidas e suporte.` },
          { t: 'E-mail', d: '<a href="mailto:contato@infusesoftware.com">contato@infusesoftware.com</a><br>Para propostas e documentos.' },
          { t: 'Instagram', d: '<a href="https://www.instagram.com/infuse.software" target="_blank" rel="noopener">@infuse.software</a><br>Acompanhe a Infuse.' },
          { t: 'Localização', d: 'Feira de Santana, Bahia, Brasil.<br>Atendimento online para todo o país.' },
        ],
      },
      {
        h2: 'O que acontece depois que você chama',
        ordered: true,
        items: [
          { t: 'Você conta o que precisa', d: 'Não precisa chegar com tudo definido. Basta explicar o seu negócio e o problema que quer resolver.' },
          { t: 'Fazemos algumas perguntas', d: 'Para entender o cenário: como você atende hoje, que ferramentas usa e o que espera do projeto.' },
          { t: 'Enviamos a proposta', d: 'Com escopo, prazo e investimento para o seu caso, sem compromisso.' },
        ],
      },
    ],
    faq: [
      { q: 'Qual o melhor canal para pedir um orçamento?', a: 'O WhatsApp. É por lá que conduzimos o atendimento, do primeiro contato ao suporte.' },
      { q: 'A Infuse atende empresas de fora de Feira de Santana?', a: 'Sim. Estamos sediados em Feira de Santana e atendemos empresas de todo o Brasil de forma online.' },
      { q: 'Preciso saber exatamente o que quero antes de chamar?', a: 'Não. Muitos clientes chegam apenas com o problema, como "perco muito tempo respondendo WhatsApp" ou "não apareço no Google". A partir daí indicamos o caminho.' },
      { q: 'O orçamento tem custo?', a: 'Não. A conversa inicial e o orçamento são sem compromisso.' },
    ],
  },
];
