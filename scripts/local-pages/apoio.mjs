/**
 * Páginas de apoio da marca (`kind: 'institucional'`): respondem de forma curta a
 * "o que é", "como funciona" e "como contratar". Servem ao leitor e ao Google
 * (links extras sob o resultado da marca).
 *
 * Só entram fatos já afirmados nas páginas de produto (/crm/, /agenda/,
 * /placa-nfc/) e no site. Nenhum valor monetário: planos e preços ficam nas
 * páginas dos produtos. `aboutId` liga a página à entidade do produto no schema.
 */

const SITE = 'https://www.infusesoftware.com';

export const APOIO = [
  /* ------------------------------------------------------------ CRM */
  {
    slug: 'o-que-e-infuse-crm',
    kind: 'institucional',
    schemaType: 'WebPage',
    aboutId: `${SITE}/crm/#software`,
    nome: 'O que é o Infuse CRM?',
    title: 'O que é o Infuse CRM? | Infuse Software',
    description:
      'O Infuse CRM é um CRM com WhatsApp para equipes de vendas: vários atendentes no mesmo número, funil de vendas, contatos, tarefas e agente de IA.',
    eyebrow: 'Infuse CRM',
    h1: 'O que é o Infuse CRM?',
    lede:
      'O Infuse CRM é uma plataforma da Infuse Software que reúne WhatsApp, atendimento em equipe, funil de vendas, contatos, tarefas e conversões em um único lugar.',
    secoes: [
      {
        h2: 'Em resumo',
        p: [
          'É um <a href="/crm/">CRM com WhatsApp</a> para empresas que vendem e atendem pelo WhatsApp e têm mais de uma pessoa na equipe. Em vez de cada vendedor usar o próprio celular, todos atendem pelo mesmo sistema, cada um com a sua fila, e o histórico das conversas fica compartilhado.',
          'O Infuse CRM é um produto da Infuse Software, empresa de tecnologia de Feira de Santana, na Bahia.',
        ],
      },
      {
        h2: 'O que o Infuse CRM faz',
        sub: 'As funções principais, em linguagem direta.',
        items: [
          { t: 'WhatsApp integrado', d: 'Conecta o WhatsApp pela API Oficial ou por QR Code e permite gerenciar as conversas direto no CRM.' },
          { t: 'Atendimento em equipe', d: 'Vários atendentes trabalham ao mesmo tempo, cada um com acesso e fila próprios, com histórico compartilhado e distribuição por setor, atendente ou regras.' },
          { t: 'Funil de vendas', d: 'Organiza os negócios em etapas visuais. Você move as oportunidades entre as colunas e acompanha cada venda.' },
          { t: 'Contatos, produtos e tarefas', d: 'Base de contatos com histórico, catálogo de produtos e serviços ligado aos negócios e tarefas com prazo para não perder follow-ups.' },
          { t: 'Conversões', d: 'Registra as conversões do funil e mostra o desempenho por canal e por atendente.' },
          { t: 'Agente de IA', d: 'No plano com IA, um agente atende no WhatsApp, qualifica leads e encaminha para o vendedor certo.' },
        ],
      },
      {
        h2: 'Duas formas de conectar o WhatsApp',
        p: [
          'A <strong>API Oficial do WhatsApp Business</strong> é a opção recomendada para quem precisa de estabilidade e escala. Já a conexão por <strong>QR Code</strong> usa o número que você já tem, como no WhatsApp Web, e costuma servir a equipes pequenas. As duas funcionam no mesmo sistema, e você escolhe a que faz mais sentido para o seu negócio.',
          'Se quiser entender a diferença com mais detalhe, leia <a href="/blog/whatsapp-business-api-ou-app-normal/">WhatsApp Business API ou aplicativo normal</a>.',
        ],
      },
      {
        h2: 'Como começar',
        ordered: true,
        items: [
          { t: 'Crie a conta', d: 'O cadastro é feito pelo site do Infuse CRM, em poucos passos.' },
          { t: 'Acesse o painel', d: 'Depois do cadastro, o acesso ao painel é imediato.' },
          { t: 'Escolha o plano', d: 'Há planos de CRM, de CRM com redes sociais e de CRM com agente de IA. Os detalhes ficam na <a href="/crm/">página do Infuse CRM</a>.' },
          { t: 'Teste por 7 dias', d: 'Todos os planos têm 7 dias de teste, sem fidelidade.' },
        ],
      },
      {
        h2: 'Para saber mais',
        p: [
          'Se você ainda está decidindo, estes guias ajudam: <a href="/blog/o-que-e-crm-e-para-que-serve/">O que é CRM e para que serve</a>, <a href="/blog/crm-com-whatsapp-vantagens/">CRM com WhatsApp: vantagens para a equipe de vendas</a> e <a href="/blog/crm-para-pequenas-empresas-como-escolher/">como escolher o CRM certo</a>. Para tirar dúvidas, <a href="/contato/">fale com a Infuse</a>.',
        ],
      },
    ],
    faq: [
      { q: 'O Infuse CRM funciona com mais de um atendente?', a: 'Sim. Vários atendentes e vendedores trabalham ao mesmo tempo no mesmo número, cada um com a sua fila e com o histórico de conversas compartilhado.' },
      { q: 'Posso testar o Infuse CRM antes de contratar?', a: 'Sim. Todos os planos têm 7 dias de teste, e não há fidelidade.' },
      { q: 'O Infuse CRM usa a API oficial do WhatsApp?', a: 'Pode usar. O sistema oferece duas formas de conexão: a API Oficial do WhatsApp Business, recomendada para estabilidade e escala, e o QR Code, que conecta o número que você já usa.' },
      { q: 'O Infuse CRM tem inteligência artificial?', a: 'Tem, no plano com agente de IA, que atende no WhatsApp, qualifica leads e encaminha para o vendedor certo.' },
      { q: 'Qual a relação entre o Infuse CRM e a Infuse Software?', a: 'O Infuse CRM é um produto da Infuse Software, empresa de tecnologia de Feira de Santana, na Bahia, que também desenvolve sites, sistemas, automações e soluções com IA.' },
    ],
  },

  /* --------------------------------------------------------- AGENDA */
  {
    slug: 'o-que-e-infuse-agenda',
    kind: 'institucional',
    schemaType: 'WebPage',
    aboutId: `${SITE}/agenda/#software`,
    nome: 'O que é o Infuse Agenda?',
    title: 'O que é o Infuse Agenda? | Infuse Software',
    description:
      'O Infuse Agenda é um sistema de agendamento online para barbearias, salões e estética, com página exclusiva e lembrete automático pelo WhatsApp.',
    eyebrow: 'Infuse Agenda',
    h1: 'O que é o Infuse Agenda?',
    lede:
      'O Infuse Agenda é um sistema de agendamento online da Infuse Software para profissionais da beleza e da estética. O cliente marca sozinho e você acompanha tudo em um painel.',
    secoes: [
      {
        h2: 'Em resumo',
        p: [
          'Ao assinar o <a href="/agenda/">Infuse Agenda</a>, o negócio recebe uma página exclusiva para o cliente agendar e um painel para organizar a agenda, os clientes e os serviços. Tudo funciona online, direto no navegador, sem instalar programa.',
          'Ele é feito para barbearias, salões de beleza, estúdios de nail design, manicures, cabeleireiras, designers de sobrancelha, lash designers, clínicas de estética e outros profissionais que trabalham com horário marcado.',
        ],
      },
      {
        h2: 'Como o cliente agenda',
        ordered: true,
        items: [
          { t: 'Abre o link', d: 'O cliente acessa a página do negócio, pelo Instagram, pelo WhatsApp ou pelo Google.' },
          { t: 'Escolhe', d: 'Seleciona o serviço, o profissional, o dia e o horário disponível.' },
          { t: 'Confirma', d: 'Confirma o agendamento, a qualquer hora do dia, sem depender de resposta.' },
          { t: 'Recebe o lembrete', d: 'O sistema envia um lembrete automático pelo WhatsApp antes do atendimento.' },
        ],
      },
      {
        h2: 'O que vem no Infuse Agenda',
        sub: 'Os recursos descritos na página do produto.',
        items: [
          { t: 'Página profissional do negócio', d: 'Logo, serviços, localização e botão de agendamento, com links para WhatsApp e Instagram.' },
          { t: 'Agendamento online 24h', d: 'O cliente marca sozinho, fora do horário comercial inclusive.' },
          { t: 'Lembrete automático no WhatsApp', d: 'Mensagem enviada antes do atendimento para reduzir esquecimentos e faltas.' },
          { t: 'Até 3 profissionais', d: 'Cada um com a própria agenda e horários, e o cliente escolhe com quem quer ser atendido.' },
          { t: 'Painel administrativo', d: 'Agenda do dia em tempo real, cadastro de clientes, edição de serviços e agendamentos manuais. Funciona no celular.' },
          { t: 'Suporte pelo WhatsApp', d: 'Dúvidas e ajustes são resolvidos direto com a equipe, sem fila de chamados.' },
        ],
      },
      {
        h2: 'Para saber mais',
        p: [
          'As faltas costumam ter solução. Veja o guia <a href="/blog/agenda-online-como-reduzir-faltas/">Agenda online: como reduzir faltas de clientes</a> e use a <a href="/ferramentas/calculadora-de-faltas-na-agenda/">calculadora de faltas na agenda</a> para dimensionar o problema no seu negócio. Planos e condições estão na <a href="/agenda/">página do Infuse Agenda</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Preciso instalar algum programa?', a: 'Não. O Infuse Agenda é 100% online e funciona direto no navegador do celular ou do computador.' },
      { q: 'O cliente consegue agendar sozinho?', a: 'Sim. Esse é o principal recurso. Ele acessa o link, escolhe serviço, profissional, dia e horário e confirma.' },
      { q: 'Para quem o Infuse Agenda é indicado?', a: 'Para profissionais da beleza e da estética que trabalham com horário marcado, como barbearias, salões, nail designers, manicures, designers de sobrancelha, lash designers e clínicas de estética.' },
      { q: 'O sistema avisa o cliente antes do horário?', a: 'Sim. Ele envia um lembrete automático pelo WhatsApp antes do atendimento.' },
      { q: 'Tem fidelidade?', a: 'Não. Os detalhes do plano estão na página do Infuse Agenda.' },
    ],
  },

  /* ------------------------------------------------------ PLACA NFC */
  {
    slug: 'como-funciona-a-placa-nfc-da-infuse',
    kind: 'institucional',
    schemaType: 'WebPage',
    aboutId: `${SITE}/placa-nfc/#product`,
    capa: 'nfc-na-mao',
    nome: 'Como funciona a placa NFC da Infuse',
    title: 'Como Funciona a Placa NFC da Infuse | Infuse Software',
    description:
      'A placa NFC da Infuse traz NFC e QR Code com o mesmo destino, editável: Instagram, avaliação no Google, Pix ou uma página com vários links.',
    eyebrow: 'Placa NFC',
    h1: 'Como funciona a placa NFC da Infuse',
    lede:
      'Cada placa traz NFC e QR Code. O cliente encosta o celular ou escaneia a câmera e abre o destino que você escolheu, sem instalar aplicativo.',
    secoes: [
      {
        h2: 'Em resumo',
        p: [
          'A <a href="/placa-nfc/">placa NFC da Infuse</a> fica no balcão, no caixa ou na mesa. Ela traz NFC e QR Code, e os dois levam ao mesmo destino. O destino é 100% editável: você pode alterá-lo depois, sem trocar a placa.',
        ],
      },
      {
        h2: 'Passo a passo',
        ordered: true,
        items: [
          { t: 'Você escolhe o destino', d: 'Um link único, como o Instagram, a avaliação no Google ou a chave Pix, ou uma página personalizável com vários links úteis, no estilo "link na bio".' },
          { t: 'A placa é configurada', d: 'O NFC e o QR Code da placa passam a apontar para o destino escolhido.' },
          { t: 'O cliente usa', d: 'Ele encosta o celular na placa ou escaneia o QR Code com a câmera. O destino abre na hora.' },
          { t: 'Você altera quando quiser', d: 'Mudou a campanha ou o objetivo? O destino é editável, e a mesma placa continua no balcão.' },
        ],
      },
      {
        h2: 'Para onde a placa pode levar',
        sub: 'Exemplos de destino.',
        items: [
          { t: 'Instagram', d: 'O cliente chega ao perfil sem precisar digitar o nome.' },
          { t: 'Avaliação no Google', d: 'Abre direto a tela de avaliação do perfil da empresa, com o cliente ainda no local.' },
          { t: 'Pix', d: 'Abre uma página com a chave Pix e o código copia e cola. O cliente conclui o pagamento no aplicativo do banco.' },
          { t: 'Página com vários links', d: 'Reúne WhatsApp, site, cardápio, avaliação e o que mais fizer sentido, e você pode editar os links.' },
        ],
      },
      {
        h2: 'Boas práticas',
        p: [
          'Peça avaliações no momento certo, como ao entregar o pedido ou finalizar o serviço. Segundo as regras do Google, não é permitido oferecer brinde ou desconto em troca de avaliação, nem pedir apenas avaliações positivas.',
          'Quer ir mais fundo? Leia <a href="/blog/placa-nfc-como-funciona-no-celular/">Placa NFC: como funciona no celular</a>, <a href="/blog/placa-nfc-ou-qr-code-qual-usar/">NFC ou QR Code: qual usar</a> e <a href="/blog/placa-nfc-para-avaliacoes-no-google/">Placa NFC para avaliações no Google</a>. Para disponibilidade e condições, <a href="/contato/">fale com a Infuse pelo WhatsApp</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Precisa instalar aplicativo?', a: 'Não. O NFC e a câmera do celular abrem o destino direto.' },
      { q: 'E se o celular do cliente não tiver NFC?', a: 'A placa também traz QR Code, que a câmera de qualquer celular lê e que leva ao mesmo destino.' },
      { q: 'Posso trocar o destino depois?', a: 'Sim. O destino é 100% editável, tanto no NFC quanto no QR Code.' },
      { q: 'O cliente paga o Pix só encostando o celular?', a: 'Não. A placa abre uma página com a chave Pix e o copia e cola, e o pagamento é concluído no aplicativo do banco. Não é o Pix por aproximação das maquininhas.' },
      { q: 'Como peço uma placa?', a: 'Pelo WhatsApp. Disponibilidade e condições são combinadas direto com a equipe da Infuse.' },
    ],
  },

  /* ------------------------------------------------ COMO CONTRATAR */
  {
    slug: 'como-contratar-a-infuse',
    kind: 'institucional',
    schemaType: 'WebPage',
    nome: 'Como contratar a Infuse',
    title: 'Como Contratar a Infuse Software | Passo a Passo',
    description:
      'Veja como funciona contratar a Infuse Software: conversa pelo WhatsApp, diagnóstico e proposta, desenvolvimento e suporte. Orçamento sem compromisso.',
    eyebrow: 'Contratação',
    h1: 'Como contratar a Infuse Software',
    lede:
      'O caminho é simples e começa por uma conversa no WhatsApp. Você conta o que precisa, a Infuse entende o cenário e envia uma proposta para o seu caso.',
    secoes: [
      {
        h2: 'O passo a passo',
        ordered: true,
        items: [
          { t: 'Conversa no WhatsApp', d: 'Você conta como a empresa funciona hoje e o que espera do projeto. Sem compromisso.' },
          { t: 'Diagnóstico e proposta', d: 'Definimos o escopo e o que entra na primeira entrega, e enviamos a proposta com prazo e investimento.' },
          { t: 'Desenvolvimento', d: 'Construímos em etapas, e você acompanha a evolução e valida antes de ir ao ar.' },
          { t: 'Publicação e suporte', d: 'Colocamos no ar, orientamos o uso e seguimos disponíveis para ajustes e melhorias.' },
        ],
      },
      {
        h2: 'O que ajuda a trazer na primeira conversa',
        sub: 'Nada disso é obrigatório. Quanto mais claro, mais precisa a proposta.',
        items: [
          { t: 'O objetivo', d: 'O que você quer resolver: vender mais, atender mais rápido, organizar a equipe ou aparecer melhor no Google.' },
          { t: 'Como é hoje', d: 'Como o atendimento, as vendas e o site funcionam no momento e o que está travando.' },
          { t: 'Referências', d: 'Sites, perfis ou sistemas de que você gosta, e o que você usa hoje.' },
          { t: 'Prazo desejado', d: 'Se há uma data importante, como um lançamento ou uma campanha.' },
        ],
      },
      {
        h2: 'Quanto custa',
        p: [
          'Não trabalhamos com tabela de preços genérica. O investimento depende do escopo: do que você precisa, da complexidade e das integrações. Por isso o orçamento é feito depois da conversa, sem compromisso, e enviado pelo WhatsApp.',
        ],
      },
      {
        h2: 'O que a Infuse faz',
        p: [
          'A Infuse Software, de Feira de Santana, na Bahia, desenvolve <a href="/criacao-de-sites-feira-de-santana/">sites</a>, <a href="/loja-virtual-feira-de-santana/">lojas virtuais</a>, <a href="/desenvolvimento-de-sistemas-feira-de-santana/">sistemas sob medida</a>, <a href="/automacao-de-processos-feira-de-santana/">automações</a>, <a href="/inteligencia-artificial-feira-de-santana/">IA no WhatsApp</a>, <a href="/gestao-de-trafego/">gestão de tráfego</a> e os produtos <a href="/crm/">Infuse CRM</a>, <a href="/agenda/">Infuse Agenda</a> e <a href="/placa-nfc/">placa NFC</a>. Atende a cidade e a região, e também outros estados, de forma remota. Mais respostas em <a href="/perguntas-frequentes/">perguntas frequentes</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Preciso saber exatamente o que quero antes de falar com a Infuse?', a: 'Não. A conversa serve justamente para entender o cenário e definir o escopo. Você só precisa contar o objetivo.' },
      { q: 'Posso contratar só uma parte do trabalho?', a: 'Pode. Por exemplo, só o rastreamento e a automação, mantendo o seu gestor de anúncios, ou só um site.' },
      { q: 'A Infuse atende fora de Feira de Santana?', a: 'Sim. A Infuse atende outras cidades e outros estados de forma remota, pelo WhatsApp e por reunião online.' },
      { q: 'Quanto tempo leva?', a: 'Depende do escopo. O prazo é definido na proposta, depois do diagnóstico.' },
    ],
  },

  /* ------------------------------------------------------ FAQ GERAL */
  {
    slug: 'perguntas-frequentes',
    kind: 'institucional',
    schemaType: 'WebPage',
    nome: 'Perguntas frequentes',
    title: 'Perguntas Frequentes | Infuse Software',
    description:
      'Respostas rápidas sobre a Infuse Software: o que fazemos, onde atendemos, como pedir orçamento, produtos (CRM, Agenda, placa NFC) e suporte.',
    eyebrow: 'Dúvidas',
    h1: 'Perguntas frequentes sobre a Infuse Software',
    lede:
      'As dúvidas mais comuns sobre a empresa, os serviços e os produtos. Não achou a sua? Chame no WhatsApp.',
    secoes: [
      {
        h2: 'Atalhos',
        p: [
          'Páginas que respondem às perguntas mais específicas: <a href="/o-que-e-infuse-crm/">O que é o Infuse CRM?</a>, <a href="/o-que-e-infuse-agenda/">O que é o Infuse Agenda?</a>, <a href="/como-funciona-a-placa-nfc-da-infuse/">Como funciona a placa NFC da Infuse</a> e <a href="/como-contratar-a-infuse/">Como contratar a Infuse</a>.',
        ],
      },
    ],
    faq: [
      { q: 'O que é a Infuse Software?', a: 'É uma empresa de tecnologia de Feira de Santana, na Bahia, que desenvolve sites, lojas virtuais, sistemas sob medida, automações, CRM, inteligência artificial no WhatsApp e gestão de tráfego, além de produtos próprios, como o Infuse CRM, o Infuse Agenda e a placa NFC.' },
      { q: 'Quem fundou a Infuse Software?', a: 'A Infuse Software foi fundada por Allan Kennedy e Breno Lins. Mais informações na página <a href="/sobre/">Sobre a Infuse</a>.' },
      { q: 'Onde a Infuse fica e atende?', a: 'A sede é em Feira de Santana, na Bahia. A Infuse atende a cidade e a região e também outras cidades e estados, de forma remota, pelo WhatsApp e por reunião online.' },
      { q: 'Como peço um orçamento?', a: 'Pelo WhatsApp. Você conta o que precisa, a Infuse entende o cenário e envia a proposta, sem compromisso. Veja o passo a passo em <a href="/como-contratar-a-infuse/">como contratar a Infuse</a>.' },
      { q: 'Quanto custa um projeto?', a: 'Depende do escopo. Não há tabela de preços genérica: o orçamento é feito para o seu caso, depois de uma conversa.' },
      { q: 'Qual a diferença entre a Infuse Software e outras empresas chamadas Infuse?', a: 'Existem outras marcas com o nome Infuse, como um aplicativo de vídeo e uma empresa de marketing B2B internacional. A Infuse Software é a empresa de tecnologia de Feira de Santana, e o site oficial é infusesoftware.com.' },
      { q: 'O que é o Infuse CRM?', a: 'É um CRM com WhatsApp para equipes de vendas, com vários atendentes no mesmo número, funil de vendas, contatos, tarefas e agente de IA. Veja <a href="/o-que-e-infuse-crm/">o que é o Infuse CRM</a>.' },
      { q: 'O que é o Infuse Agenda?', a: 'É um sistema de agendamento online para profissionais da beleza e da estética, com página exclusiva, painel e lembrete automático pelo WhatsApp. Veja <a href="/o-que-e-infuse-agenda/">o que é o Infuse Agenda</a>.' },
      { q: 'O que é a placa NFC da Infuse?', a: 'É uma placa com NFC e QR Code que leva o cliente a um destino que você escolhe e pode editar, como Instagram, avaliação no Google, Pix ou uma página com vários links. Veja <a href="/como-funciona-a-placa-nfc-da-infuse/">como funciona</a>.' },
      { q: 'A Infuse faz site e também cuida dos anúncios?', a: 'Faz as duas coisas, e elas funcionam melhor juntas. Também dá para contratar só uma parte, por exemplo só o rastreamento e a automação.' },
      { q: 'Como falo com a Infuse?', a: 'Pelo WhatsApp, no número (75) 98293-8031, ou pelo e-mail contato@infusesoftware.com. Veja a página de <a href="/contato/">contato</a>.' },
    ],
  },
];
