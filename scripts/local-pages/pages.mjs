/**
 * Conteúdo das páginas de SEO local (Feira de Santana) e das páginas gerais
 * de serviço (`kind: 'geral'`, sem recorte de cidade).
 *
 * Cada item vira `public/<slug>/index.html` via `npm run pages`.
 *
 * Regras de conteúdo:
 *  - Nada de preço, prazo fechado, número de clientes, depoimento ou métrica
 *    que não possa ser comprovada.
 *  - Todo CTA leva para o WhatsApp comercial.
 *  - Textos podem conter HTML simples (<a>, <strong>); o JSON-LD é gerado sem
 *    as tags.
 */

import { SEGMENTOS_2 } from './segmentos-2.mjs';
import { PRODUTOS } from './produtos.mjs';
import { INSTITUCIONAL } from './institucional.mjs';

const BASE = [
  // ───────────────────────────── SERVIÇOS ─────────────────────────────
  {
    slug: 'criacao-de-sites-feira-de-santana',
    kind: 'servico',
    nome: 'Criação de sites',
    serviceType: 'Criação de sites',
    title: 'Criação de Sites em Feira de Santana | Infuse',
    description:
      'Criação de sites institucionais e landing pages em Feira de Santana. Site rápido, responsivo e otimizado para o Google. Peça seu orçamento pelo WhatsApp.',
    eyebrow: 'Desenvolvimento web · Feira de Santana, BA',
    h1: 'Criação de sites em Feira de Santana',
    lede:
      'A Infuse é uma empresa de tecnologia de Feira de Santana que desenvolve sites institucionais, landing pages e páginas de serviço para empresas da cidade e da região. Seu negócio aparece no Google e o visitante chega ao seu WhatsApp em um toque.',
    destaques: [
      'Site institucional, landing page ou página de serviço',
      'Feito para celular, rápido e com SEO técnico',
      'Botão de WhatsApp e formulário prontos para captar contatos',
    ],
    objeto: 'seu site',
    intro: {
      h2: 'Um site profissional para a sua empresa em Feira de Santana',
      p: [
        'Quem procura um serviço em Feira de Santana costuma começar pelo Google e pelo celular. Se a sua empresa só existe no Instagram, você depende do alcance da rede social e fica fora das buscas de quem já está pronto para contratar. O site é o endereço que é seu: reúne serviços, localização, formas de contato e passa a confiança que um perfil de rede social sozinho não passa.',
        'Desenvolvemos cada projeto de acordo com o objetivo do negócio. Uma empresa que precisa apresentar seus serviços pede um site institucional; uma campanha de anúncios pede uma landing page enxuta, focada em uma única ação. Antes de desenhar qualquer tela, conversamos para entender o que você vende, para quem e como o cliente chega até você hoje.',
      ],
    },
    entregas: {
      h2: 'O que fazemos em desenvolvimento de sites',
      sub: 'Do layout à publicação, com o conteúdo organizado para o cliente e para o Google.',
      items: [
        { t: 'Sites institucionais', d: 'Páginas de início, sobre, serviços e contato para apresentar a empresa com clareza e gerar pedidos de orçamento.' },
        { t: 'Landing pages', d: 'Página única focada em conversão, ideal para campanhas no Google, Instagram e para divulgar um serviço específico.' },
        { t: 'Layout responsivo', d: 'O site se adapta a celular, tablet e computador. O mesmo conteúdo, legível em qualquer tela.' },
        { t: 'SEO técnico', d: 'Títulos, descrições, URLs, dados estruturados e sitemap configurados para o Google entender do que trata cada página.' },
        { t: 'Integração com WhatsApp', d: 'Botões e formulários que abrem a conversa já com a mensagem pronta, para o cliente não desistir no caminho.' },
        { t: 'Domínio, hospedagem e publicação', d: 'Orientamos o registro do domínio e colocamos o site no ar com certificado de segurança (HTTPS).' },
      ],
    },
    local: {
      h2: 'Por que ter um site ajuda a vender mais em Feira de Santana',
      p: [
        'Feira de Santana é a segunda maior cidade da Bahia e um polo de comércio e serviços que atende também os municípios vizinhos. Isso significa mais clientes em potencial e também mais concorrência: do Centro à Kalilândia, do Santa Mônica ao SIM, há várias empresas disputando a mesma busca. Um site bem estruturado, com páginas que dizem claramente o que você faz e onde atende, é o que permite aparecer para quem pesquisa pelo seu serviço na cidade.',
        'O site também trabalha junto com o Perfil da Empresa no Google (a ficha que aparece no Maps). Com o endereço do site na ficha e as mesmas informações de contato nos dois lugares, o Google ganha mais sinais para relacionar seu negócio a Feira de Santana.',
      ],
    },
    faq: [
      { q: 'Quanto custa criar um site em Feira de Santana?', a: 'O valor depende do tipo de projeto: quantidade de páginas, funcionalidades, integrações e produção de conteúdo. Por isso não trabalhamos com tabela fixa. Chame no WhatsApp, conte o que você precisa e enviamos um orçamento para o seu caso.' },
      { q: 'Em quanto tempo o site fica pronto?', a: 'O prazo varia conforme o tamanho do projeto e a agilidade no envio dos textos e imagens. Uma landing page é mais rápida do que um site com várias páginas. Informamos o prazo junto com o orçamento, depois de entender o escopo.' },
      { q: 'Qual a diferença entre site institucional e landing page?', a: 'O site institucional apresenta a empresa como um todo, com várias páginas (serviços, sobre, contato). A landing page é uma página única, pensada para uma oferta específica e para levar o visitante a uma ação, como chamar no WhatsApp. Muitas empresas usam os dois.' },
      { q: 'O site vai aparecer no Google?', a: 'Entregamos o site com a base técnica de SEO configurada e cadastrado no Google Search Console. A posição nos resultados depende também da concorrência, do conteúdo e do tempo, então nenhuma empresa séria pode garantir o primeiro lugar. O que fazemos é construir o site da forma correta para competir.' },
      { q: 'Já tenho um site antigo. Vocês refazem?', a: 'Sim. Avaliamos o site atual, aproveitamos o que funciona (domínio, conteúdo, páginas que já recebem visitas) e reconstruímos com layout e estrutura novos.' },
      { q: 'A Infuse atende só Feira de Santana?', a: 'Estamos sediados em Feira de Santana e atendemos empresas da cidade, da região e de todo o Brasil, com todo o processo conduzido pelo WhatsApp e por reuniões online.' },
    ],
  },

  {
    slug: 'automacao-de-processos-feira-de-santana',
    kind: 'servico',
    nome: 'Automação de processos',
    serviceType: 'Automação de processos',
    title: 'Automação de Processos em Feira de Santana | Infuse',
    description:
      'Automação de processos para empresas em Feira de Santana: n8n, integrações via API, CRM e WhatsApp. Reduza tarefas manuais. Fale com a Infuse no WhatsApp.',
    eyebrow: 'Automação e integrações · Feira de Santana, BA',
    h1: 'Automação de processos em Feira de Santana',
    lede:
      'Conectamos os sistemas que sua empresa já usa e automatizamos as tarefas repetitivas com n8n, integrações via API, CRM e WhatsApp. Sua equipe para de copiar e colar informação e passa a cuidar do cliente.',
    destaques: [
      'Fluxos automatizados com n8n',
      'Integração entre sistemas via API e webhooks',
      'WhatsApp, CRM, planilhas e e-mail trabalhando juntos',
    ],
    objeto: 'sua automação',
    intro: {
      h2: 'Menos trabalho manual, menos erro, mais tempo para vender',
      p: [
        'Toda empresa tem tarefas que se repetem todos os dias: passar o contato do formulário para a planilha, avisar o vendedor de um novo pedido, enviar confirmação ao cliente, cobrar um retorno, montar o mesmo relatório toda semana. Feitas à mão, elas tomam horas da equipe e abrem espaço para esquecimento e erro de digitação.',
        'Automação de processos é fazer com que os sistemas executem essas etapas sozinhos, seguindo as regras do seu negócio. Mapeamos como o trabalho acontece hoje, identificamos o que pode ser automatizado e construímos os fluxos que ligam uma ferramenta à outra.',
      ],
    },
    entregas: {
      h2: 'O que automatizamos',
      sub: 'Trabalhamos com as ferramentas que você já tem. Quando falta uma peça, desenvolvemos.',
      items: [
        { t: 'Fluxos com n8n', d: 'Usamos o n8n para orquestrar automações: um evento em um sistema dispara ações em outros, com regras, condições e tratamento de erros.' },
        { t: 'Integrações via API', d: 'Conectamos ERP, loja virtual, meios de pagamento, formulários e outros sistemas que oferecem API ou webhooks.' },
        { t: 'CRM automatizado', d: 'Cada contato entra no funil sozinho, com origem e histórico. Conheça também o <a href="/crm/">Infuse CRM</a>, nosso CRM com WhatsApp integrado.' },
        { t: 'Automação de WhatsApp', d: 'Confirmações, lembretes, avisos de status e distribuição de atendimentos enviados automaticamente pelo WhatsApp.' },
        { t: 'Relatórios e planilhas', d: 'Dados reunidos de várias fontes e atualizados sem intervenção manual, prontos para consulta.' },
        { t: 'Alertas internos', d: 'Sua equipe é avisada na hora quando chega um lead, um pedido ou quando algo foge do esperado.' },
      ],
    },
    local: {
      h2: 'Automação para a realidade das empresas de Feira de Santana',
      p: [
        'O comércio, os prestadores de serviço, as distribuidoras e as indústrias de Feira de Santana lidam com um volume grande de atendimentos, muitos deles vindos de cidades vizinhas e quase sempre pelo WhatsApp. Quando a operação cresce, o controle em caderno, planilha solta e memória da equipe deixa de dar conta.',
        'Por estarmos na mesma cidade, conhecemos esse cenário de perto. Começamos pelo processo que mais dói, colocamos para rodar e evoluímos a partir daí. Você não precisa trocar todos os seus sistemas para começar a automatizar.',
      ],
    },
    faq: [
      { q: 'O que é automação de processos?', a: 'É o uso de software para executar tarefas repetitivas que hoje são feitas manualmente, como transferir dados entre sistemas, enviar mensagens, gerar documentos e atualizar planilhas. O processo segue regras definidas por você e roda sem depender de alguém lembrar de fazer.' },
      { q: 'O que é o n8n?', a: 'O n8n é uma plataforma de automação que conecta aplicativos e sistemas em fluxos visuais. Com ele, um acontecimento em uma ferramenta (um novo pedido, uma mensagem, um formulário preenchido) dispara ações em outras. É uma das ferramentas que usamos para construir automações.' },
      { q: 'Preciso trocar os sistemas que já uso?', a: 'Na maioria dos casos, não. A ideia é integrar o que você já tem. Se o sistema atual oferece API, webhooks ou alguma forma de exportar dados, normalmente dá para conectar. Avaliamos isso no diagnóstico.' },
      { q: 'Quais processos podem ser automatizados?', a: 'Atendimento inicial, cadastro de leads, envio de propostas, confirmações e lembretes, emissão de avisos internos, atualização de planilhas e relatórios, entre outros. Em geral, tudo que é repetitivo, segue regra e envolve passar informação de um lugar para outro.' },
      { q: 'Quanto custa uma automação?', a: 'Depende da quantidade de sistemas envolvidos e da complexidade dos fluxos. Não temos tabela de preços: fazemos o diagnóstico e enviamos uma proposta para o seu caso. Chame no WhatsApp para começar.' },
      { q: 'Vocês dão suporte depois que a automação está no ar?', a: 'Sim. Sistemas mudam, APIs são atualizadas e o processo da empresa evolui. Combinamos o acompanhamento e a manutenção junto com o projeto.' },
    ],
  },

  {
    slug: 'inteligencia-artificial-feira-de-santana',
    kind: 'servico',
    nome: 'Inteligência artificial',
    serviceType: 'Inteligência artificial para empresas',
    title: 'Inteligência Artificial para Empresas em Feira de Santana',
    description:
      'Agentes de IA, atendimento automatizado e assistentes para WhatsApp para empresas em Feira de Santana. Integrado aos seus sistemas. Fale com a Infuse.',
    eyebrow: 'IA aplicada ao negócio · Feira de Santana, BA',
    h1: 'Inteligência artificial para empresas em Feira de Santana',
    lede:
      'Desenvolvemos agentes de IA e assistentes para WhatsApp que respondem clientes, qualificam contatos e executam tarefas integrados aos sistemas da sua empresa, a qualquer hora do dia.',
    destaques: [
      'Agente de IA treinado com as informações do seu negócio',
      'Atendimento automatizado no WhatsApp, 24 horas',
      'Transferência para a equipe humana quando necessário',
    ],
    objeto: 'seu agente de IA',
    intro: {
      h2: 'IA que resolve problema real, não só responde pergunta',
      p: [
        'O cliente manda mensagem à noite, no domingo, no horário de almoço. Se a resposta demora, ele chama o concorrente. Um agente de inteligência artificial atende na hora: entende o que a pessoa escreveu em linguagem natural, responde com base nas informações do seu negócio e encaminha o que precisa de gente para a sua equipe.',
        'A diferença para um chatbot de menu ("digite 1, digite 2") é que a IA compreende a intenção mesmo quando o cliente escreve do jeito dele. E, integrada aos seus sistemas, ela não fica só na conversa: consulta informações, registra o contato no CRM e agenda horários.',
      ],
    },
    entregas: {
      h2: 'Soluções de inteligência artificial que desenvolvemos',
      sub: 'Cada agente é configurado com as regras, os produtos e o tom de voz da sua empresa.',
      items: [
        { t: 'Agentes de IA', d: 'Assistentes que executam tarefas de ponta a ponta: recebem a solicitação, consultam dados, tomam a ação e registram o resultado.' },
        { t: 'Assistente para WhatsApp', d: 'Atendimento por IA no número da sua empresa, usando a API oficial do WhatsApp Business.' },
        { t: 'Atendimento automatizado', d: 'Respostas imediatas para as dúvidas frequentes: horários, serviços, localização, disponibilidade e como contratar.' },
        { t: 'Qualificação de leads', d: 'A IA faz as perguntas iniciais, entende a necessidade e entrega o contato organizado para o vendedor.' },
        { t: 'Integrações inteligentes', d: 'Conexão da IA com CRM, agenda, planilhas e sistemas internos, para que ela trabalhe com dados reais.' },
        { t: 'Transbordo para humano', d: 'Regras claras para a IA passar a conversa à equipe: quando o cliente pede, quando o assunto é sensível ou foge do roteiro.' },
      ],
    },
    local: {
      h2: 'IA no atendimento das empresas de Feira de Santana',
      p: [
        'Em Feira de Santana, boa parte das vendas começa no WhatsApp, seja em uma loja do Centro, em uma clínica, em um escritório ou em uma distribuidora que atende a região. O gargalo costuma ser o mesmo: muitas mensagens, pouca gente para responder e contatos que esfriam enquanto esperam.',
        'Um assistente de IA assume o primeiro atendimento e mantém a resposta rápida mesmo nos horários de pico e fora do expediente. Sua equipe continua no comando: ela define o que a IA pode responder e entra na conversa sempre que for preciso.',
      ],
    },
    faq: [
      { q: 'O que é um agente de IA?', a: 'É um sistema de inteligência artificial que, além de conversar, executa tarefas: consulta informações, registra dados em outros sistemas, agenda horários e encaminha solicitações, seguindo as regras definidas pela empresa.' },
      { q: 'Qual a diferença entre chatbot e IA no WhatsApp?', a: 'O chatbot tradicional segue um roteiro fixo de menus e opções. A IA entende linguagem natural: o cliente escreve do jeito dele e o sistema compreende a intenção e responde de forma fluida. Quando faz sentido, combinamos os dois.' },
      { q: 'A IA substitui minha equipe de atendimento?', a: 'Não é esse o objetivo. A IA assume o que é repetitivo e o primeiro contato, e a equipe fica com as conversas que exigem negociação, cuidado e decisão. Sempre configuramos a transferência para um atendente humano.' },
      { q: 'A IA pode responder errado?', a: 'Modelos de IA podem errar, por isso limitamos o agente às informações que você fornece, definimos o que ele não deve responder e criamos regras de transferência para a equipe. Depois do lançamento, acompanhamos as conversas e ajustamos.' },
      { q: 'Funciona no número de WhatsApp que eu já uso?', a: 'Em geral, sim. A integração é feita pela API oficial do WhatsApp Business. Avaliamos a situação do seu número e explicamos o que muda no uso do dia a dia antes de começar.' },
      { q: 'Quanto custa implantar IA na minha empresa?', a: 'Varia conforme o que a IA vai fazer, o volume de atendimento e as integrações necessárias. Fazemos o orçamento depois de entender o seu cenário. Chame no WhatsApp para conversar.' },
    ],
  },

  {
    slug: 'desenvolvimento-de-sistemas-feira-de-santana',
    kind: 'servico',
    nome: 'Desenvolvimento de sistemas',
    serviceType: 'Desenvolvimento de sistemas web',
    title: 'Desenvolvimento de Sistemas em Feira de Santana | Infuse',
    description:
      'Desenvolvimento de sistemas web sob medida em Feira de Santana: sistemas personalizados, dashboards, plataformas SaaS e software. Fale com a Infuse.',
    eyebrow: 'Software sob medida · Feira de Santana, BA',
    h1: 'Desenvolvimento de sistemas web em Feira de Santana',
    lede:
      'Criamos sistemas personalizados, dashboards e plataformas SaaS para empresas que não encontram em um software pronto o que a operação precisa. Software feito para o seu processo, acessado pelo navegador.',
    destaques: [
      'Sistemas web personalizados para a sua operação',
      'Dashboards com os indicadores do negócio',
      'Plataformas SaaS, do protótipo à evolução contínua',
    ],
    objeto: 'seu sistema',
    intro: {
      h2: 'Quando a planilha e o sistema pronto não dão mais conta',
      p: [
        'Muitas empresas crescem apoiadas em planilhas, grupos de WhatsApp e sistemas genéricos adaptados na base do improviso. Funciona por um tempo. Depois aparecem os sintomas: informação duplicada, dados que ninguém confia, retrabalho e decisões tomadas no escuro.',
        'Um sistema sob medida é construído em torno do seu processo, e não o contrário. Levantamos as regras do negócio com quem usa no dia a dia, definimos o que é essencial para a primeira versão e desenvolvemos em etapas, para você usar e validar ao longo do caminho.',
      ],
    },
    entregas: {
      h2: 'O que desenvolvemos',
      sub: 'Aplicações web acessadas pelo navegador, no computador e no celular.',
      items: [
        { t: 'Sistemas personalizados', d: 'Sistemas de gestão, controle de pedidos, ordens de serviço, cadastros e fluxos internos desenhados para a sua operação.' },
        { t: 'Dashboards', d: 'Painéis que reúnem dados de diferentes fontes e mostram os indicadores que importam em uma única tela.' },
        { t: 'Plataformas SaaS', d: 'Produtos digitais por assinatura, com cadastro de usuários, planos e área administrativa. É o modelo dos nossos próprios produtos, <a href="/crm/">Infuse CRM</a> e <a href="/agenda/">Infuse Agenda</a>.' },
        { t: 'Portais e áreas do cliente', d: 'Ambientes com login para clientes, parceiros ou equipe consultarem informações e enviarem solicitações.' },
        { t: 'Integrações e APIs', d: 'Conexão do sistema com ERP, meios de pagamento, WhatsApp e outras ferramentas que a empresa utiliza.' },
        { t: 'Manutenção e evolução', d: 'Correções, melhorias e novas funcionalidades depois da entrega, conforme o negócio muda.' },
      ],
    },
    local: {
      h2: 'Uma software house em Feira de Santana',
      p: [
        'Feira de Santana reúne comércio atacadista e varejista, indústrias no Centro Industrial do Subaé, empresas de logística favorecidas pelo entroncamento rodoviário e um setor de serviços em expansão. Cada operação tem regras próprias que dificilmente cabem em um software de prateleira.',
        'Ter o desenvolvedor na mesma cidade facilita o que mais pesa em um projeto de software: entender o processo. Falamos a língua do negócio local e mantemos o contato direto pelo WhatsApp do início ao fim.',
      ],
    },
    faq: [
      { q: 'Quando vale a pena desenvolver um sistema sob medida?', a: 'Quando os sistemas prontos não atendem a um processo importante da empresa, quando você paga por muitos recursos que não usa ou quando a operação depende de planilhas e controles manuais que já não acompanham o crescimento. Se um software pronto resolver bem, dizemos isso no diagnóstico.' },
      { q: 'O que é um sistema web?', a: 'É um software acessado pelo navegador, sem instalação em cada computador. Funciona no computador e no celular, e os dados ficam centralizados, disponíveis para quem tem permissão de acesso.' },
      { q: 'O que é uma plataforma SaaS?', a: 'SaaS significa software como serviço: um sistema online que vários clientes acessam mediante assinatura. Se você tem a ideia de um produto digital nesse modelo, desenvolvemos desde a primeira versão.' },
      { q: 'Quanto tempo leva para desenvolver um sistema?', a: 'Depende do escopo. Trabalhamos em etapas, começando por uma primeira versão com o essencial, que entra em uso antes das funcionalidades complementares. O cronograma é definido junto com a proposta.' },
      { q: 'Quanto custa desenvolver um sistema?', a: 'O valor depende das funcionalidades, das integrações e do nível de complexidade. Não trabalhamos com preço de tabela: levantamos os requisitos e enviamos uma proposta. Chame no WhatsApp para iniciar.' },
      { q: 'O sistema pode ser integrado ao que eu já uso?', a: 'Sim, desde que as outras ferramentas ofereçam API, webhooks ou algum meio de troca de dados. Avaliamos as integrações no levantamento de requisitos.' },
    ],
  },

  {
    slug: 'gestao-de-trafego-feira-de-santana',
    kind: 'servico',
    nome: 'Gestão de tráfego inteligente',
    serviceType: 'Gestão de tráfego pago com rastreamento e automação',
    title: 'Gestão de Tráfego em Feira de Santana | Infuse Software',
    description:
      'Gestão de tráfego inteligente em Feira de Santana: campanhas com rastreamento, eventos de conversão e automação no WhatsApp. Saiba de onde vem cada cliente.',
    eyebrow: 'Tráfego pago com tecnologia · Feira de Santana, BA',
    h1: 'Gestão de tráfego inteligente em Feira de Santana',
    lede:
      'A Infuse Software une gestão de tráfego pago com rastreamento e automação no WhatsApp. Você acompanha o desempenho das campanhas, sabe de onde veio cada cliente e devolve às plataformas de anúncio os eventos de conversão que realmente importam: conversa qualificada e venda fechada.',
    destaques: [
      'Saiba de qual campanha e anúncio veio cada cliente',
      'Eventos de conversão enviados às plataformas de anúncio',
      'Automação com API oficial e não oficial do WhatsApp',
    ],
    objeto: 'suas campanhas',
    intro: {
      h2: 'Anunciar sem rastrear é investir no escuro',
      p: [
        'A maioria das empresas que anuncia para o WhatsApp enxerga só metade do caminho. O gerenciador de anúncios mostra quantas conversas foram iniciadas, mas não diz quais viraram orçamento e quais viraram venda. Sem essa informação, a campanha que traz muito curioso parece melhor do que a campanha que traz pouco cliente, mas cliente que compra.',
        'Gestão de tráfego inteligente é fechar esse ciclo. Rastreamos a origem de cada contato desde o clique no anúncio, acompanhamos a conversa até o resultado e enviamos esse resultado de volta para a plataforma. Assim, as decisões sobre onde investir passam a se basear em venda, e não em clique.',
      ],
    },
    entregas: {
      h2: 'O que a Infuse faz em gestão de tráfego',
      sub: 'Campanha, rastreamento e automação cuidados pela mesma equipe.',
      items: [
        { t: 'Gestão de campanhas', d: 'Planejamento, criação e otimização de campanhas de tráfego pago, com foco em gerar contatos e vendas pelo WhatsApp e pelo site.' },
        { t: 'Rastreamento de origem', d: 'Identificamos de qual campanha, conjunto e anúncio veio cada contato, usando parâmetros de URL e os dados de origem que acompanham a conversa.' },
        { t: 'Eventos de conversão', d: 'Enviamos às plataformas de anúncio os eventos que acontecem depois do clique, como lead qualificado, agendamento e compra, por meio das APIs de conversão.' },
        { t: 'Automação no WhatsApp', d: 'Resposta imediata ao lead que chega do anúncio, qualificação, distribuição para a equipe e acompanhamento, com a API oficial ou com conexão não oficial do WhatsApp.' },
        { t: 'Painel de desempenho', d: 'Investimento, contatos, conversas qualificadas e vendas reunidos por campanha, para você ver o retorno de cada uma.' },
        { t: 'CRM integrado', d: 'Cada lead entra no funil já com a origem registrada e segue até o fechamento. Conheça o <a href="/crm/">Infuse CRM</a>.' },
      ],
    },
    local: {
      h2: 'Tráfego pago para empresas de Feira de Santana',
      p: [
        'Em Feira de Santana, a maior parte dos anúncios locais leva o cliente direto para o WhatsApp. É ali que a venda acontece, e é justamente ali que o rastreamento costuma se perder: a empresa sabe quanto gastou, mas não sabe qual anúncio trouxe o cliente que fechou.',
        'Como desenvolvemos também <a href="/automacao-de-processos-feira-de-santana/">automações</a>, <a href="/criacao-de-sites-feira-de-santana/">sites e landing pages</a>, cuidamos de todo o trajeto: o anúncio, a página, a conversa no WhatsApp e o registro da venda. Isso vale para quem anuncia só na cidade e para quem atende a região inteira. Para empresas de outras cidades, temos a página geral de <a href="/gestao-de-trafego/">gestão de tráfego inteligente</a>.',
      ],
    },
    faq: [
      { q: 'O que é gestão de tráfego inteligente?', a: 'É a gestão de campanhas de anúncios combinada com rastreamento e automação. Além de criar e otimizar os anúncios, registramos a origem de cada contato, acompanhamos o que acontece na conversa e usamos esses dados para decidir onde investir.' },
      { q: 'Como vocês sabem de onde veio cada cliente?', a: 'Cada anúncio leva parâmetros de identificação. Quando a pessoa chega ao site ou inicia a conversa no WhatsApp, capturamos esses dados e gravamos no cadastro do contato. A partir daí, a origem acompanha o lead até a venda. Contatos que chegam sem passar por um link rastreado, como quem salva o número e chama depois, nem sempre podem ser atribuídos.' },
      { q: 'O que são eventos de conversão e por que enviá-los?', a: 'São registros de ações importantes, como um lead qualificado, um agendamento ou uma compra. Quando esses eventos são enviados de volta à plataforma de anúncios, ela passa a saber quais cliques geraram resultado e pode otimizar a entrega para pessoas com perfil parecido.' },
      { q: 'Qual a diferença entre a API oficial e a não oficial do WhatsApp?', a: 'A API oficial é o canal fornecido pela Meta para empresas: é a opção mais estável, permite vários atendentes no mesmo número e traz os dados de origem dos anúncios de clique para WhatsApp, com custos de mensagem cobrados pela Meta. A conexão não oficial funciona a partir do WhatsApp comum, pareado por QR Code; é mais simples de começar, mas não tem suporte da Meta e está sujeita a instabilidade e a restrições do número. Trabalhamos com as duas e explicamos os prós e contras antes de você escolher.' },
      { q: 'Vocês garantem resultado nas campanhas?', a: 'Não, e desconfie de quem garante. O resultado depende da oferta, do mercado, do atendimento e do valor investido. O que entregamos é gestão criteriosa e dados confiáveis para você saber o que está funcionando.' },
      { q: 'Quanto custa a gestão de tráfego?', a: 'Depende do volume de campanhas e do nível de rastreamento e automação envolvido. O valor investido em anúncios é pago às plataformas e é separado do nosso serviço. Chame no WhatsApp, conte como você anuncia hoje e enviamos uma proposta.' },
    ],
  },

  // ───────────────────────────── SEGMENTOS ─────────────────────────────
  {
    slug: 'loja-virtual-feira-de-santana',
    kind: 'segmento',
    nome: 'Loja virtual para lojas',
    serviceType: 'Criação de loja virtual (e-commerce)',
    title: 'Loja Virtual e E-commerce em Feira de Santana | Infuse',
    description:
      'Criação de loja virtual para lojas de Feira de Santana. E-commerce com catálogo, carrinho, pagamento online e pedidos no WhatsApp. Fale com a Infuse.',
    eyebrow: 'E-commerce para lojistas · Feira de Santana, BA',
    h1: 'Loja virtual para lojas de Feira de Santana',
    lede:
      'Sua loja já vende no balcão e no WhatsApp. Com um e-commerce, ela passa a vender também pelo site, com catálogo organizado, carrinho, pagamento online e pedidos chegando prontos para separar.',
    destaques: [
      'Catálogo com fotos, variações e estoque',
      'Pagamento online e cálculo de frete',
      'Pedidos e atendimento integrados ao WhatsApp',
    ],
    objeto: 'sua loja virtual',
    intro: {
      h2: 'Do balcão para a internet, sem abandonar o que já funciona',
      p: [
        'Vender pelo WhatsApp e pelo Instagram funciona até certo ponto. Quando o volume aumenta, responder preço por preço, mandar foto por foto e anotar pedido à mão vira o gargalo da loja. O cliente espera, a equipe se perde e venda fica para trás.',
        'A loja virtual organiza isso. O cliente vê os produtos, escolhe tamanho e cor, coloca no carrinho e paga, a qualquer hora. Para quem prefere fechar na conversa, o site também funciona como catálogo: a pessoa chega ao WhatsApp já sabendo o que quer.',
      ],
    },
    entregas: {
      h2: 'O que sua loja virtual pode ter',
      sub: 'Montamos o e-commerce de acordo com o tipo de produto e a forma como você vende.',
      items: [
        { t: 'Catálogo de produtos', d: 'Categorias, fotos, descrições, variações de tamanho e cor e busca para o cliente encontrar o que procura.' },
        { t: 'Carrinho e checkout', d: 'Processo de compra curto, pensado para o celular, com integração a meios de pagamento online.' },
        { t: 'Frete e retirada', d: 'Opções de entrega configuradas para o seu negócio: envio para outras cidades, entrega local ou retirada na loja.' },
        { t: 'Pedido no WhatsApp', d: 'Alternativa para o cliente finalizar pelo WhatsApp, com os itens do pedido já na mensagem.' },
        { t: 'Painel de gestão', d: 'Área para cadastrar produtos, acompanhar pedidos e atualizar estoque sem depender de programador.' },
        { t: 'SEO para produtos', d: 'Páginas de produto e categoria estruturadas para aparecer nas buscas do Google.' },
      ],
    },
    local: {
      h2: 'E-commerce para o comércio de Feira de Santana',
      p: [
        'O comércio é a marca de Feira de Santana. Lojas do Centro, da Senhor dos Passos, do Feiraguay, dos shoppings e dos bairros atendem todos os dias clientes da cidade e de municípios vizinhos que viajam para comprar aqui. Com uma loja virtual, esse mesmo cliente consegue comprar de novo sem precisar voltar à cidade.',
        'Atendemos lojas de moda, calçados, acessórios, cosméticos, eletrônicos, autopeças, materiais de construção, móveis e outros segmentos. Se a sua loja ainda não vende online, começamos pelo essencial e evoluímos conforme os pedidos aparecem.',
      ],
    },
    faq: [
      { q: 'Minha loja é pequena. Vale a pena ter loja virtual?', a: 'Depende de como você vende hoje. Se já recebe pedidos pelo WhatsApp e Instagram e sente que perde tempo repetindo informação de produto, a loja virtual ou um catálogo online costuma organizar bastante a operação. Conversamos antes para indicar o formato mais adequado ao seu momento.' },
      { q: 'Qual a diferença entre catálogo online e e-commerce?', a: 'O catálogo online mostra os produtos e leva o cliente para fechar o pedido no WhatsApp. O e-commerce completo tem carrinho, pagamento online e cálculo de frete, e a compra é concluída no próprio site. Dá para começar com o catálogo e evoluir.' },
      { q: 'Consigo cadastrar os produtos sozinho?', a: 'Sim. A loja tem um painel de gestão para você incluir produtos, alterar fotos e preços e acompanhar pedidos. Explicamos o uso na entrega.' },
      { q: 'Dá para vender para outras cidades?', a: 'Sim. Configuramos as opções de envio para outras cidades e estados, além de entrega local em Feira de Santana e retirada na loja, se você trabalhar com essas modalidades.' },
      { q: 'Quanto custa criar uma loja virtual?', a: 'O investimento varia com a quantidade de produtos, as integrações de pagamento e frete e as funcionalidades desejadas. Não passamos preço de tabela: chame no WhatsApp, conte sobre a sua loja e enviamos um orçamento.' },
      { q: 'Vocês integram a loja virtual com o WhatsApp?', a: 'Sim. O site pode ter botão de atendimento, pedido enviado pelo WhatsApp e avisos automáticos de status. Também trabalhamos com <a href="/automacao-de-processos-feira-de-santana/">automação de processos</a> para ligar a loja aos seus outros sistemas.' },
    ],
  },

  {
    slug: 'site-para-barbearia-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para barbearias',
    serviceType: 'Site e agendamento online para barbearias',
    title: 'Site para Barbearia em Feira de Santana | Infuse',
    description:
      'Site e agendamento online para barbearias em Feira de Santana. O cliente marca o horário sozinho e recebe lembrete no WhatsApp. Fale com a Infuse.',
    eyebrow: 'Barbearias · Feira de Santana, BA',
    h1: 'Site e agendamento online para barbearias em Feira de Santana',
    lede:
      'Um site com a cara da sua barbearia e uma agenda em que o próprio cliente escolhe o serviço, o barbeiro e o horário. Você corta cabelo em vez de ficar respondendo mensagem.',
    destaques: [
      'Site com serviços, equipe, fotos e localização',
      'Agendamento online feito pelo cliente, 24 horas',
      'Lembretes automáticos no WhatsApp',
    ],
    objeto: 'o site da sua barbearia',
    intro: {
      h2: 'Agenda organizada e barbearia fácil de encontrar',
      p: [
        'Na barbearia, o WhatsApp toca o dia inteiro: "tem horário hoje?", "quanto tá o corte?", "dá para encaixar?". Quem está com a máquina na mão não consegue responder, e o cliente que fica sem resposta marca em outro lugar. No fim do dia ainda tem o horário vago de quem esqueceu e não avisou.',
        'Com site e agendamento online, o cliente resolve tudo sozinho: vê os serviços, escolhe o profissional e marca o horário disponível. A confirmação e o lembrete chegam pelo WhatsApp, o que ajuda a reduzir os esquecimentos.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para barbearias',
      sub: 'Presença no Google e agenda funcionando no mesmo lugar.',
      items: [
        { t: 'Site da barbearia', d: 'Página com serviços, equipe, fotos dos cortes, endereço, horário de funcionamento e botão para agendar.' },
        { t: 'Agendamento online', d: 'O cliente marca pelo link, sem precisar ligar ou esperar resposta. Conheça o <a href="/agenda/">Infuse Agenda</a>, nosso sistema de agendamento.' },
        { t: 'Lembretes no WhatsApp', d: 'Mensagens automáticas antes do horário marcado, com opção de o cliente avisar se não puder ir.' },
        { t: 'Agenda por barbeiro', d: 'Cada profissional com seus horários e serviços, sem conflito de marcação.' },
        { t: 'Link para Instagram e Google', d: 'Um único link de agendamento para colocar na bio, nos stories e no Perfil da Empresa no Google.' },
        { t: 'Painel de controle', d: 'Visão dos agendamentos do dia e da semana pelo celular.' },
      ],
    },
    local: {
      h2: 'Para barbearias de todos os bairros de Feira de Santana',
      p: [
        'Feira de Santana tem barbearia em praticamente todo bairro: Centro, Tomba, Cidade Nova, Santa Mônica, SIM, Mangabeira, Conceição e por aí vai. O cliente normalmente procura a mais próxima e a que consegue marcar mais rápido. Aparecer na busca por "barbearia perto de mim" e oferecer agendamento na hora pesa na escolha.',
        'Seja uma barbearia com vários profissionais ou um barbeiro que atende sozinho, montamos a estrutura no tamanho do seu negócio.',
      ],
    },
    faq: [
      { q: 'Barbearia precisa mesmo de site?', a: 'O site ajuda a barbearia a ser encontrada no Google por quem não segue o perfil no Instagram, reúne serviços, endereço e horários em um só lugar e serve de porta de entrada para o agendamento online. Para quem depende de agenda cheia, costuma fazer diferença.' },
      { q: 'Como funciona o agendamento online para barbearia?', a: 'O cliente acessa o link, escolhe o serviço, o profissional e um horário livre. O agendamento entra direto na agenda da barbearia, e o cliente recebe a confirmação e o lembrete pelo WhatsApp.' },
      { q: 'Meus clientes vão conseguir usar?', a: 'Sim. O agendamento é feito pelo navegador do celular, sem instalar aplicativo e em poucos toques. E quem preferir continua podendo marcar com você pelo WhatsApp.' },
      { q: 'O sistema reduz as faltas?', a: 'O principal motivo de falta é o esquecimento. Os lembretes automáticos pelo WhatsApp ajudam a diminuir esse problema e dão ao cliente a chance de avisar com antecedência, liberando o horário para outra pessoa.' },
      { q: 'Serve para quem trabalha sozinho?', a: 'Serve. A agenda funciona tanto para um único profissional quanto para equipes com vários barbeiros, cada um com seus horários.' },
      { q: 'Quanto custa?', a: 'Depende do que a sua barbearia precisa: só o agendamento, o site completo ou os dois. Chame no WhatsApp que explicamos as opções e passamos os valores para o seu caso.' },
    ],
  },

  {
    slug: 'site-para-contabilidade-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para contabilidade',
    serviceType: 'Site e automação para escritórios de contabilidade',
    title: 'Site para Contabilidade em Feira de Santana | Infuse',
    description:
      'Site, automação e atendimento no WhatsApp para escritórios de contabilidade em Feira de Santana. Capte clientes pelo Google. Fale com a Infuse.',
    eyebrow: 'Escritórios contábeis · Feira de Santana, BA',
    h1: 'Site para escritório de contabilidade em Feira de Santana',
    lede:
      'Um site profissional que apresenta os serviços do seu escritório, capta novos clientes pelo Google e, se você quiser, automatiza o atendimento e as cobranças de documentos que consomem o tempo da equipe.',
    destaques: [
      'Site institucional com páginas por serviço contábil',
      'Captação de contatos pelo Google e WhatsApp',
      'Automação de avisos, lembretes e solicitações de documentos',
    ],
    objeto: 'o site do seu escritório',
    intro: {
      h2: 'Contabilidade se contrata por confiança, e ela começa na pesquisa',
      p: [
        'Quem vai abrir uma empresa, trocar de contador ou regularizar um MEI pesquisa antes de ligar. Compara escritórios, lê sobre os serviços, procura sinais de que está lidando com gente séria. Um escritório sem site, ou com um site desatualizado, fica fora dessa comparação.',
        'Além da captação, existe a rotina: todo mês a equipe cobra os mesmos documentos, responde as mesmas dúvidas e envia os mesmos avisos de vencimento. Grande parte disso pode ser automatizada, para o time se dedicar ao trabalho técnico.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para escritórios contábeis',
      sub: 'Presença digital para captar clientes e tecnologia para aliviar a rotina.',
      items: [
        { t: 'Site institucional', d: 'Apresentação do escritório, equipe, áreas de atuação e canais de contato, com visual profissional.' },
        { t: 'Páginas por serviço', d: 'Páginas específicas para abertura de empresa, MEI, departamento pessoal, imposto de renda e outros serviços, cada uma otimizada para a sua busca.' },
        { t: 'Formulário e WhatsApp', d: 'O interessado pede uma proposta em poucos cliques e o contato chega organizado para o escritório.' },
        { t: 'Blog e conteúdo', d: 'Estrutura para publicar artigos sobre dúvidas fiscais e contábeis, que atraem buscas e demonstram autoridade.' },
        { t: 'Automação de rotinas', d: 'Lembretes de envio de documentos e avisos de vencimento disparados automaticamente. Veja mais em <a href="/automacao-de-processos-feira-de-santana/">automação de processos</a>.' },
        { t: 'Atendimento com IA', d: 'Assistente no WhatsApp para responder dúvidas frequentes e direcionar cada solicitação ao setor certo.' },
      ],
    },
    local: {
      h2: 'Contabilidade em uma cidade que não para de abrir empresa',
      p: [
        'Com comércio forte, indústria e um setor de serviços em crescimento, Feira de Santana tem demanda constante por contabilidade: abertura de CNPJ, regularização de MEI, folha de pagamento, obrigações fiscais. Quem busca "contador em Feira de Santana" ou "abrir empresa em Feira de Santana" está perto de contratar.',
        'Estruturamos o site do seu escritório em torno dessas buscas, com conteúdo claro sobre cada serviço e contato fácil pelo WhatsApp.',
      ],
    },
    faq: [
      { q: 'Por que um escritório de contabilidade precisa de site?', a: 'Porque a escolha do contador envolve pesquisa e comparação. O site mostra quem é o escritório, quais serviços presta e como entrar em contato, além de permitir que você apareça nas buscas do Google por serviços contábeis na cidade.' },
      { q: 'O site ajuda a captar clientes pelo Google?', a: 'Sim, é uma das principais funções. Com páginas específicas por serviço e SEO técnico bem feito, o escritório passa a concorrer pelas buscas locais. O resultado depende também da concorrência e do tempo, então não prometemos posição.' },
      { q: 'Dá para automatizar a cobrança de documentos dos clientes?', a: 'Dá. Configuramos lembretes automáticos por WhatsApp ou e-mail nas datas combinadas, reduzindo o trabalho manual de cobrar um por um. A viabilidade de integração com o seu sistema contábil é avaliada no diagnóstico.' },
      { q: 'A IA pode responder dúvidas contábeis dos clientes?', a: 'A IA pode cuidar do atendimento inicial: horários, lista de documentos, andamento de solicitações e encaminhamento ao setor responsável. Orientação técnica e casos específicos continuam com o contador, e configuramos a transferência para a equipe.' },
      { q: 'O site segue as regras de publicidade da profissão contábil?', a: 'O conteúdo é definido e aprovado por você, que conhece as normas do seu conselho profissional. Trabalhamos com informação objetiva sobre os serviços, sem promessas de resultado.' },
      { q: 'Quanto custa um site para contabilidade?', a: 'Varia com a quantidade de páginas e com as automações incluídas. Não temos preço de tabela: chame no WhatsApp, conte como é o seu escritório e enviamos uma proposta.' },
    ],
  },

  {
    slug: 'site-para-restaurante-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para restaurantes',
    serviceType: 'Site e cardápio digital para restaurantes',
    title: 'Site para Restaurante em Feira de Santana | Infuse',
    description:
      'Site e cardápio digital para restaurantes, lanchonetes e deliveries em Feira de Santana. Pedidos e reservas direto no WhatsApp. Fale com a Infuse.',
    eyebrow: 'Restaurantes e delivery · Feira de Santana, BA',
    h1: 'Site e cardápio digital para restaurantes em Feira de Santana',
    lede:
      'Um site com o cardápio sempre atualizado, fotos dos pratos, localização e botão para pedir ou reservar pelo WhatsApp. Um canal de venda que é seu.',
    destaques: [
      'Cardápio digital com fotos, fácil de atualizar',
      'Pedidos e reservas direto no seu WhatsApp',
      'Presença no Google para quem busca onde comer',
    ],
    objeto: 'o site do seu restaurante',
    intro: {
      h2: 'O cliente decide onde comer pelo celular',
      p: [
        'Antes de sair de casa ou pedir delivery, o cliente pesquisa: quer ver o cardápio, as fotos, o endereço e se está aberto. Se encontra só um PDF pesado ou uma foto torta do cardápio, a chance de desistir é grande.',
        'Com um site próprio, o restaurante tem um endereço para divulgar em todo lugar, no Instagram, no Google, no QR Code da mesa, e recebe os pedidos e reservas direto no WhatsApp, em um canal sob o seu controle.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para restaurantes',
      sub: 'Para restaurantes, pizzarias, hamburguerias, lanchonetes, cafeterias e deliveries.',
      items: [
        { t: 'Cardápio digital', d: 'Pratos por categoria, com foto e descrição, leve para abrir no celular e simples de atualizar.' },
        { t: 'Pedido pelo WhatsApp', d: 'O cliente monta o pedido no site e envia a mensagem pronta para o WhatsApp do restaurante.' },
        { t: 'Reservas', d: 'Botão ou formulário de reserva de mesa, com confirmação pelo WhatsApp.' },
        { t: 'QR Code para as mesas', d: 'Acesso ao cardápio pelo celular do cliente, sem cardápio impresso desatualizado.' },
        { t: 'Localização e horários', d: 'Endereço com mapa, horário de funcionamento e área de entrega sempre visíveis.' },
        { t: 'Atendimento automático', d: 'Respostas automáticas no WhatsApp para as perguntas de sempre: horário, cardápio, taxa e área de entrega.' },
      ],
    },
    local: {
      h2: 'Gastronomia em Feira de Santana, do almoço ao delivery',
      p: [
        'Feira de Santana tem uma cena gastronômica variada, da comida regional aos restaurantes, pizzarias e hamburguerias espalhados por bairros como Santa Mônica, Kalilândia, Capuchinhos e SIM. Por ser ponto de passagem de quem viaja pelas BRs, a cidade também recebe muita gente de fora procurando onde comer.',
        'Estar bem apresentado no Google, com cardápio acessível e contato rápido, ajuda o restaurante a ser escolhido tanto pelo morador quanto por quem está só de passagem.',
      ],
    },
    faq: [
      { q: 'Restaurante que já está no Instagram precisa de site?', a: 'O Instagram é ótimo para divulgar, mas não organiza cardápio nem aparece bem nas buscas do Google. O site reúne cardápio, endereço, horários e pedido em um link só, que você usa na bio, no Google e no QR Code das mesas.' },
      { q: 'Como funciona o pedido pelo site?', a: 'O cliente navega pelo cardápio, escolhe os itens e finaliza enviando o pedido para o WhatsApp do restaurante, já com tudo descrito na mensagem. Sua equipe confirma e combina pagamento e entrega.' },
      { q: 'Consigo atualizar o cardápio sozinho?', a: 'Sim. Você altera pratos, fotos, descrições e disponibilidade por um painel simples, sem depender de nós a cada mudança.' },
      { q: 'O site substitui os aplicativos de delivery?', a: 'Não necessariamente. Muitos restaurantes usam os dois: os aplicativos para alcançar clientes novos e o canal próprio para atender quem já conhece a casa. A decisão é sua, e o site funciona nos dois cenários.' },
      { q: 'Dá para automatizar o atendimento no WhatsApp?', a: 'Dá. Configuramos respostas automáticas e, se fizer sentido, um <a href="/inteligencia-artificial-feira-de-santana/">assistente com IA</a> para atender as dúvidas frequentes nos horários de pico.' },
      { q: 'Quanto custa um site para restaurante?', a: 'Depende do formato: cardápio digital simples, site completo ou site com atendimento automatizado. Chame no WhatsApp para a gente entender o seu restaurante e passar um orçamento.' },
    ],
  },

  {
    slug: 'site-para-clinica-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para clínicas',
    serviceType: 'Site e agendamento para clínicas e consultórios',
    title: 'Site para Clínicas e Consultórios em Feira de Santana',
    description:
      'Site, agendamento online e atendimento no WhatsApp para clínicas e consultórios em Feira de Santana. Menos faltas, agenda organizada. Fale com a Infuse.',
    eyebrow: 'Clínicas e consultórios · Feira de Santana, BA',
    h1: 'Site para clínicas e consultórios em Feira de Santana',
    lede:
      'Site profissional para apresentar especialidades e equipe, com agendamento e confirmação de consultas pelo WhatsApp. A recepção ganha tempo e o paciente consegue marcar sem esperar.',
    destaques: [
      'Site com especialidades, profissionais e convênios',
      'Agendamento e confirmação de consultas pelo WhatsApp',
      'Lembretes automáticos para reduzir faltas',
    ],
    objeto: 'o site da sua clínica',
    intro: {
      h2: 'A recepção sobrecarregada custa pacientes',
      p: [
        'Telefone tocando, WhatsApp cheio e paciente no balcão ao mesmo tempo: é a rotina da maioria das recepções. A mensagem que fica sem resposta por algumas horas muitas vezes vira consulta marcada em outra clínica. E as faltas sem aviso deixam horários vazios que poderiam ter sido ocupados.',
        'Com um site claro e o atendimento inicial automatizado, o paciente encontra as informações sozinho, solicita o horário e recebe confirmação e lembrete. A recepção fica com os casos que realmente precisam de atenção humana.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para clínicas e consultórios',
      sub: 'Para clínicas médicas, odontológicas, de estética, fisioterapia, psicologia e outras especialidades.',
      items: [
        { t: 'Site da clínica', d: 'Especialidades, corpo clínico, convênios aceitos, estrutura, endereço e canais de contato.' },
        { t: 'Páginas por especialidade', d: 'Uma página para cada serviço ou tratamento, facilitando que o paciente encontre a clínica na busca.' },
        { t: 'Agendamento online', d: 'Solicitação de consulta pelo site ou WhatsApp, com os horários disponíveis.' },
        { t: 'Confirmação e lembretes', d: 'Mensagens automáticas antes da consulta, com opção de confirmar ou remarcar.' },
        { t: 'Assistente no WhatsApp', d: 'Respostas imediatas para dúvidas sobre horários, convênios, preparo e localização, com transferência para a recepção.' },
        { t: 'CRM de pacientes', d: 'Histórico de contatos e retornos organizados, para a equipe acompanhar cada atendimento. Veja o <a href="/crm/">Infuse CRM</a>.' },
      ],
    },
    local: {
      h2: 'Feira de Santana é referência em saúde para a região',
      p: [
        'Feira de Santana concentra hospitais, clínicas e consultórios que atendem pacientes da própria cidade e de dezenas de municípios do entorno. Muita gente pesquisa de outra cidade, pelo celular, antes de decidir onde marcar e viajar para a consulta.',
        'Para esse paciente, encontrar com facilidade a especialidade, o endereço, os convênios e um jeito rápido de agendar é o que define a escolha. É isso que estruturamos no site da sua clínica.',
      ],
    },
    faq: [
      { q: 'O site da clínica pode ter agendamento online?', a: 'Pode. O paciente solicita o horário pelo site ou pelo WhatsApp e recebe a confirmação. A forma de integração com a agenda que a clínica já usa é avaliada no início do projeto.' },
      { q: 'Como os lembretes ajudam a reduzir as faltas?', a: 'Boa parte das faltas acontece por esquecimento. O lembrete automático pelo WhatsApp antes da consulta ajuda o paciente a se organizar e permite que ele avise se não puder comparecer, liberando o horário para outra pessoa.' },
      { q: 'A IA pode atender pacientes no WhatsApp?', a: 'Pode cuidar do atendimento administrativo: horários, convênios, localização, preparo para exames e solicitação de agendamento. Ela não faz orientação clínica nem diagnóstico, e a conversa é transferida para a equipe sempre que necessário.' },
      { q: 'E a privacidade dos dados dos pacientes?', a: 'Dados de saúde são sensíveis e tratados com esse cuidado. Definimos com a clínica quais informações circulam em cada canal e desenvolvemos o projeto levando em conta a LGPD.' },
      { q: 'O conteúdo respeita as regras de publicidade em saúde?', a: 'O conteúdo é validado pela clínica, que conhece as normas do seu conselho profissional. Trabalhamos com informação objetiva sobre especialidades e serviços, sem promessa de resultado.' },
      { q: 'Quanto custa um site para clínica?', a: 'Depende do tamanho do site e dos recursos de agendamento e atendimento incluídos. Chame no WhatsApp, conte como funciona a sua clínica e enviamos uma proposta.' },
    ],
  },

  {
    slug: 'site-para-imobiliaria-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para imobiliárias',
    serviceType: 'Site e CRM para imobiliárias e corretores',
    title: 'Site para Imobiliária em Feira de Santana | Infuse',
    description:
      'Site para imobiliárias e corretores em Feira de Santana: vitrine de imóveis, captação de leads no WhatsApp e CRM de atendimento. Fale com a Infuse.',
    eyebrow: 'Imobiliárias e corretores · Feira de Santana, BA',
    h1: 'Site para imobiliárias e corretores em Feira de Santana',
    lede:
      'Uma vitrine de imóveis com busca por bairro, tipo e faixa de valor, captação de interessados direto no WhatsApp e um CRM para nenhum contato ficar sem retorno.',
    destaques: [
      'Vitrine de imóveis com filtros e fotos',
      'Leads enviados ao corretor pelo WhatsApp',
      'CRM para acompanhar cada negociação',
    ],
    objeto: 'o site da sua imobiliária',
    intro: {
      h2: 'O interessado que não recebe resposta fecha com outro corretor',
      p: [
        'Quem procura imóvel entra em contato com várias imobiliárias ao mesmo tempo. Leva vantagem quem responde primeiro e com a informação certa. Só que os contatos chegam de portais, do Instagram e do WhatsApp, e, sem organização, parte deles se perde.',
        'Um site próprio dá à imobiliária um canal que não depende só dos portais, e o CRM garante que cada interessado seja registrado, distribuído ao corretor e acompanhado até o fechamento.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para imobiliárias',
      sub: 'Para imobiliárias, corretores autônomos e construtoras.',
      items: [
        { t: 'Vitrine de imóveis', d: 'Listagem com fotos, características, mapa e filtros por bairro, tipo, finalidade e valor.' },
        { t: 'Página de cada imóvel', d: 'Uma página por imóvel, otimizada para a busca e com botão de contato direto com o corretor.' },
        { t: 'Landing pages de lançamento', d: 'Páginas específicas para empreendimentos e loteamentos, ideais para campanhas de anúncios.' },
        { t: 'Captação no WhatsApp', d: 'O interessado chama já informando o imóvel que viu, e o corretor responde com contexto.' },
        { t: 'CRM imobiliário', d: 'Funil de atendimento com histórico de conversas e etapas da negociação. Conheça o <a href="/crm/">Infuse CRM</a>.' },
        { t: 'Qualificação com IA', d: 'Assistente que faz as perguntas iniciais (tipo de imóvel, região, faixa de valor) e passa o contato pronto ao corretor.' },
      ],
    },
    local: {
      h2: 'Mercado imobiliário de Feira de Santana',
      p: [
        'Feira de Santana segue em expansão, com novos condomínios, loteamentos e empreendimentos em regiões como SIM, Santa Mônica, Papagaio e nos eixos das principais avenidas. Quem procura imóvel na cidade pesquisa por bairro: "casa à venda no SIM", "apartamento para alugar no Santa Mônica".',
        'Um site com páginas organizadas por bairro e por tipo de imóvel coloca a imobiliária nessas buscas e reduz a dependência exclusiva dos portais.',
      ],
    },
    faq: [
      { q: 'Imobiliária que anuncia em portais precisa de site próprio?', a: 'Os portais trazem visibilidade, mas o contato é disputado com outros anunciantes. No site próprio a marca é sua, o interessado vê só os seus imóveis e o contato chega direto para a sua equipe. Os dois canais se complementam.' },
      { q: 'Consigo cadastrar e atualizar os imóveis sozinho?', a: 'Sim. O site tem um painel para incluir imóveis, trocar fotos, alterar valores e marcar como vendido ou alugado.' },
      { q: 'O site pode ser integrado ao sistema que já uso?', a: 'Depende do sistema. Se ele oferece API ou exportação de dados, normalmente é possível integrar. Avaliamos isso no início do projeto.' },
      { q: 'Como o CRM ajuda a imobiliária?', a: 'Ele registra cada interessado, de onde veio e em que etapa está, distribui os contatos entre os corretores e mantém o histórico das conversas. Assim a equipe sabe quem precisa de retorno e nenhum lead fica esquecido.' },
      { q: 'Serve para corretor autônomo?', a: 'Serve. Montamos um site menor, com a sua carteira de imóveis e contato direto no seu WhatsApp, que pode crescer conforme a carteira aumenta.' },
      { q: 'Quanto custa um site para imobiliária?', a: 'O valor depende da quantidade de imóveis, dos filtros de busca e das integrações com CRM e outros sistemas. Chame no WhatsApp para entendermos a sua operação e enviarmos um orçamento.' },
    ],
  },

  {
    slug: 'site-para-corretor-de-imoveis-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para corretores de imóveis',
    serviceType: 'Site e CRM para corretores de imóveis',
    title: 'Site para Corretor de Imóveis em Feira de Santana | Infuse',
    description:
      'Site para corretor de imóveis em Feira de Santana: sua carteira de imóveis, sua marca e contatos direto no seu WhatsApp. Fale com a Infuse.',
    eyebrow: 'Corretores de imóveis · Feira de Santana, BA',
    h1: 'Site para corretor de imóveis em Feira de Santana',
    lede:
      'Um site com o seu nome, a sua carteira de imóveis e o seu WhatsApp. O interessado encontra você no Google, vê os imóveis e chama direto, sem intermediário.',
    destaques: [
      'Site pessoal com a sua marca e o seu CRECI',
      'Carteira de imóveis com fotos, filtros e mapa',
      'Contatos direto no seu WhatsApp, organizados em um CRM',
    ],
    objeto: 'o seu site de corretor',
    intro: {
      h2: 'Sua carteira de imóveis em um endereço que é seu',
      p: [
        'O corretor autônomo costuma depender de portais, grupos de WhatsApp e do Instagram para divulgar imóveis. Em todos esses lugares o seu anúncio aparece ao lado do de outros corretores, e o cliente que gostou de você não tem onde ver o restante da sua carteira.',
        'Com um site próprio, cada imóvel tem uma página que você compartilha onde quiser, e o interessado conhece o profissional por trás do anúncio. O contato chega no seu WhatsApp já dizendo qual imóvel a pessoa viu, e você responde com contexto.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para corretores de imóveis',
      sub: 'Uma estrutura enxuta, que você mesmo mantém e que cresce junto com a carteira.',
      items: [
        { t: 'Site pessoal do corretor', d: 'Apresentação profissional com foto, número do CRECI, regiões em que você atua e canais de contato.' },
        { t: 'Carteira de imóveis', d: 'Listagem com fotos, características, mapa e filtros por bairro, tipo, finalidade e valor.' },
        { t: 'Página por imóvel', d: 'Um link para cada imóvel, pronto para enviar no WhatsApp, postar nos stories e usar em anúncios.' },
        { t: 'Painel para atualizar', d: 'Você cadastra imóveis, troca fotos e marca como vendido ou alugado pelo celular.' },
        { t: 'Contato no WhatsApp', d: 'Botão em cada imóvel que abre a conversa com a referência do anúncio na mensagem.' },
        { t: 'CRM de atendimento', d: 'Cada interessado registrado com histórico e etapa da negociação, para nenhum retorno ficar esquecido. Conheça o <a href="/crm/">Infuse CRM</a>.' },
      ],
    },
    local: {
      h2: 'Para corretores que atuam em Feira de Santana e região',
      p: [
        'Quem procura imóvel em Feira de Santana pesquisa por bairro e por tipo: casa em condomínio no SIM, apartamento no Santa Mônica, terreno em loteamento novo, ponto comercial no Centro. Um site com os seus imóveis organizados dessa forma permite que você apareça nessas buscas com o seu nome.',
        'Se você trabalha em equipe ou tem uma imobiliária, veja também a página de <a href="/site-para-imobiliaria-feira-de-santana/">site para imobiliárias</a>, com distribuição de contatos entre corretores.',
      ],
    },
    faq: [
      { q: 'Corretor autônomo precisa de site próprio?', a: 'Não é obrigatório, mas ajuda a construir a sua marca pessoal. Nos portais e nas redes sociais você divide espaço com outros anunciantes; no seu site o interessado vê apenas os seus imóveis e fala direto com você.' },
      { q: 'Tenho poucos imóveis. Vale a pena?', a: 'O site pode começar pequeno, com a sua apresentação e os imóveis que você tem hoje, e crescer conforme a carteira aumenta. Conversamos antes para indicar o formato adequado ao seu momento.' },
      { q: 'Consigo cadastrar os imóveis sozinho?', a: 'Sim. O site tem um painel para incluir imóveis, trocar fotos, alterar valores e marcar como vendido ou alugado, sem depender de programador.' },
      { q: 'Posso continuar anunciando nos portais?', a: 'Pode, e os canais se complementam. Os portais trazem alcance; o site próprio reúne toda a sua carteira e fortalece o seu nome junto ao cliente.' },
      { q: 'Como os contatos chegam até mim?', a: 'Pelo WhatsApp, com a referência do imóvel que a pessoa estava vendo. Se você usar o CRM, cada contato também fica registrado com histórico e etapa da negociação.' },
      { q: 'Quanto custa um site para corretor de imóveis?', a: 'O valor depende do tamanho da carteira, dos filtros de busca e de incluir ou não o CRM. Chame no WhatsApp, conte como você trabalha e enviamos um orçamento.' },
    ],
  },

  {
    slug: 'site-para-advogado-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para advogados',
    serviceType: 'Site para advogados e escritórios de advocacia',
    title: 'Site para Advogados em Feira de Santana | Infuse',
    description:
      'Site para advogados e escritórios de advocacia em Feira de Santana: áreas de atuação, conteúdo informativo e contato pelo WhatsApp. Fale com a Infuse.',
    eyebrow: 'Advocacia · Feira de Santana, BA',
    h1: 'Site para advogados e escritórios de advocacia em Feira de Santana',
    lede:
      'Um site sóbrio e profissional para apresentar o escritório, as áreas de atuação e os advogados, com conteúdo informativo e um canal de contato organizado pelo WhatsApp.',
    destaques: [
      'Site institucional com páginas por área de atuação',
      'Blog para artigos e conteúdo jurídico informativo',
      'Contato pelo WhatsApp com triagem inicial organizada',
    ],
    objeto: 'o site do seu escritório',
    intro: {
      h2: 'Quem precisa de um advogado pesquisa antes de entrar em contato',
      p: [
        'Diante de um problema jurídico, a pessoa busca informação no Google, lê sobre o assunto e procura saber quem é o profissional antes de ligar. Um site bem estruturado mostra a formação, as áreas de atuação e a forma de trabalho do escritório, e transmite a seriedade que a advocacia exige.',
        'Do lado de dentro, o desafio é o atendimento: mensagens que chegam a qualquer hora, perguntas repetidas sobre documentos e andamento, contatos que se perdem entre o celular de um advogado e o de outro. Organizar esse fluxo libera tempo para o trabalho jurídico.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para advogados e escritórios',
      sub: 'Presença digital com caráter informativo e tecnologia para organizar o atendimento.',
      items: [
        { t: 'Site institucional', d: 'Apresentação do escritório, perfil dos advogados com número de inscrição na OAB, endereço e canais de contato.' },
        { t: 'Páginas por área de atuação', d: 'Uma página para cada área (trabalhista, previdenciário, família, cível, empresarial e outras), explicando em linguagem clara como o escritório atua.' },
        { t: 'Blog jurídico', d: 'Estrutura para publicar artigos que esclarecem dúvidas comuns, atraem buscas e demonstram conhecimento técnico.' },
        { t: 'Contato pelo WhatsApp', d: 'Botões e formulário que levam a pessoa ao WhatsApp do escritório com o assunto já identificado.' },
        { t: 'Triagem do atendimento', d: 'Assistente que recebe a mensagem, coleta as informações iniciais e encaminha ao advogado responsável, sem prestar orientação jurídica.' },
        { t: 'Organização dos contatos', d: 'Histórico de cada atendimento e lembretes de retorno em um CRM. Veja o <a href="/crm/">Infuse CRM</a>.' },
      ],
    },
    local: {
      h2: 'Advocacia em Feira de Santana',
      p: [
        'Feira de Santana é sede de comarca, com varas da Justiça Estadual, Justiça do Trabalho e Justiça Federal, e concentra a demanda jurídica de boa parte dos municípios do entorno. Quem mora na região e precisa de um advogado costuma procurar um profissional na cidade.',
        'Estruturamos o site com páginas claras por área de atuação, para que o escritório seja encontrado por quem pesquisa pelo tipo de causa em Feira de Santana.',
      ],
    },
    faq: [
      { q: 'Advogado pode ter site?', a: 'Pode. A publicidade na advocacia é permitida desde que tenha caráter informativo e seja feita com discrição e sobriedade, conforme o Código de Ética e Disciplina e o Provimento 205/2021 do Conselho Federal da OAB. O site é um dos meios admitidos.' },
      { q: 'O site segue as regras de publicidade da OAB?', a: 'Desenvolvemos o site com linguagem informativa, sem promessa de resultado, sem divulgação de valores de honorários e sem apelo mercantil. O conteúdo final é revisado e aprovado por você, que responde pela conformidade com as normas da Ordem.' },
      { q: 'O site ajuda o escritório a ser encontrado no Google?', a: 'Sim. Páginas específicas por área de atuação, conteúdo informativo e SEO técnico permitem que o escritório apareça nas buscas locais. O posicionamento depende também da concorrência e do tempo, e não prometemos posição.' },
      { q: 'A IA pode atender clientes do escritório?', a: 'Pode cuidar da parte administrativa: receber o contato, identificar o assunto, informar documentos necessários e encaminhar ao advogado. Ela não presta consultoria jurídica, que é atividade privativa da advocacia.' },
      { q: 'Vocês escrevem os textos do site?', a: 'Ajudamos a estruturar e redigir os textos institucionais a partir das informações que você fornece. Os artigos jurídicos são de autoria do advogado, e toda publicação passa pela sua aprovação.' },
      { q: 'Quanto custa um site para advogado?', a: 'Depende do número de páginas, do blog e dos recursos de atendimento incluídos. Chame no WhatsApp, conte como é o seu escritório e enviamos uma proposta.' },
    ],
  },

  {
    slug: 'site-para-psicologo-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para psicólogos',
    serviceType: 'Site e agendamento para psicólogos',
    title: 'Site para Psicólogos em Feira de Santana | Infuse',
    description:
      'Site para psicólogos em Feira de Santana: apresentação profissional, agendamento de sessões e contato discreto pelo WhatsApp. Fale com a Infuse.',
    eyebrow: 'Psicologia · Feira de Santana, BA',
    h1: 'Site para psicólogos em Feira de Santana',
    lede:
      'Um site acolhedor e profissional para apresentar a sua abordagem e as formas de atendimento, com um caminho simples e discreto para a pessoa agendar a primeira sessão.',
    destaques: [
      'Apresentação profissional com abordagem e CRP',
      'Agendamento de sessões presenciais e online',
      'Lembretes automáticos e contato pelo WhatsApp',
    ],
    objeto: 'o seu site',
    intro: {
      h2: 'Procurar terapia já é um passo difícil. O contato precisa ser fácil',
      p: [
        'Quem decide buscar ajuda psicológica costuma pesquisar com cuidado: lê sobre o profissional, a abordagem, o tipo de demanda que atende e como funciona a primeira sessão. Um site claro responde a essas dúvidas com calma, coisa que um perfil de rede social nem sempre consegue.',
        'Para quem atende sozinho, há ainda a parte administrativa: responder mensagens entre uma sessão e outra, confirmar horários, remarcar. Agendamento online e lembretes automáticos tiram esse peso sem interferir na relação com o paciente.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para psicólogos',
      sub: 'Para psicólogos clínicos, consultórios compartilhados e clínicas de psicologia.',
      items: [
        { t: 'Site profissional', d: 'Apresentação com a sua formação, abordagem, público atendido, número de inscrição no CRP e endereço do consultório.' },
        { t: 'Páginas por tipo de atendimento', d: 'Psicoterapia individual, de casal, infantil, orientação profissional e outras modalidades, cada uma explicada em uma página.' },
        { t: 'Agendamento de sessões', d: 'A pessoa solicita um horário pelo site ou pelo WhatsApp, para atendimento presencial ou online.' },
        { t: 'Lembretes automáticos', d: 'Mensagem antes da sessão, com possibilidade de o paciente avisar se precisar remarcar.' },
        { t: 'Blog', d: 'Espaço para textos informativos sobre saúde mental, que ajudam quem está pesquisando e aproximam o leitor do seu trabalho.' },
        { t: 'Contato discreto', d: 'Botão de WhatsApp e formulário simples, que pedem apenas o necessário para o primeiro contato.' },
      ],
    },
    local: {
      h2: 'Psicologia em Feira de Santana, no consultório e online',
      p: [
        'Em Feira de Santana, quem procura atendimento presencial busca um psicólogo na própria cidade, muitas vezes perto de casa ou do trabalho. Aparecer nessa pesquisa, com informações completas e um contato simples, facilita o primeiro passo de quem está decidindo começar.',
        'O site também apresenta o atendimento online, para pacientes de cidades vizinhas ou que se mudaram e querem manter o acompanhamento com você.',
      ],
    },
    faq: [
      { q: 'Psicólogo pode ter site e divulgar o trabalho?', a: 'Pode. O Código de Ética Profissional do Psicólogo permite a divulgação dos serviços, desde que com informações verdadeiras, com nome e número de inscrição no CRP, sem promessa de resultado e sem sensacionalismo. Montamos o site dentro dessa linha, e o conteúdo final é aprovado por você.' },
      { q: 'O site pode ter agendamento online?', a: 'Pode. A pessoa solicita o horário pelo site ou pelo WhatsApp e recebe a confirmação. Definimos com você como a agenda funciona e quais horários ficam disponíveis.' },
      { q: 'Como fica o sigilo?', a: 'O site e o agendamento tratam apenas de informações administrativas, como nome, contato e horário. Nenhum conteúdo clínico passa por essas ferramentas, e o projeto é desenvolvido levando em conta a LGPD.' },
      { q: 'A IA conversa com os pacientes?', a: 'Se você quiser automação, ela se limita à parte administrativa: horários, endereço, modalidades e solicitação de agendamento. Não realiza acolhimento nem qualquer intervenção psicológica, e a conversa passa para você sempre que necessário.' },
      { q: 'Serve para quem atende só online?', a: 'Serve. O site apresenta o seu trabalho e a forma de atendimento a distância e direciona a pessoa para o agendamento.' },
      { q: 'Quanto custa um site para psicólogo?', a: 'Depende do número de páginas e de incluir ou não agendamento e lembretes. Chame no WhatsApp, conte como você atende e enviamos um orçamento.' },
    ],
  },

  {
    slug: 'site-para-medico-feira-de-santana',
    kind: 'segmento',
    nome: 'Site para médicos',
    serviceType: 'Site e agendamento para médicos',
    title: 'Site para Médicos em Feira de Santana | Infuse',
    description:
      'Site para médicos em Feira de Santana: perfil profissional, especialidade, locais de atendimento e agendamento de consultas pelo WhatsApp. Fale com a Infuse.',
    eyebrow: 'Médicos · Feira de Santana, BA',
    h1: 'Site para médicos em Feira de Santana',
    lede:
      'Um site com o seu nome e a sua especialidade, que reúne formação, locais de atendimento e convênios e leva o paciente ao agendamento pelo WhatsApp.',
    destaques: [
      'Perfil profissional com CRM, RQE e formação',
      'Locais de atendimento, convênios e agendamento',
      'Confirmação e lembretes de consulta automáticos',
    ],
    objeto: 'o seu site',
    intro: {
      h2: 'O paciente pesquisa o seu nome antes de marcar a consulta',
      p: [
        'Depois de receber uma indicação, o paciente procura o nome do médico no Google. O que ele encontra, muitas vezes, são cadastros de terceiros com telefone antigo e endereço errado. Um site próprio garante que a informação correta, publicada por você, esteja disponível.',
        'Quem atende em mais de um local sabe a confusão que isso gera: dias diferentes em cada clínica, convênios diferentes, secretárias diferentes. O site organiza tudo em uma página e direciona o paciente para o canal certo de agendamento.',
      ],
    },
    entregas: {
      h2: 'O que entregamos para médicos',
      sub: 'Para médicos que atendem em consultório próprio, em clínicas ou em mais de um local.',
      items: [
        { t: 'Site pessoal do médico', d: 'Perfil com formação, especialidade, número do CRM e RQE, áreas de atuação e foto profissional.' },
        { t: 'Locais e convênios', d: 'Endereços com mapa, dias de atendimento em cada local e convênios aceitos.' },
        { t: 'Páginas por área de atuação', d: 'Páginas sobre as condições e os procedimentos da sua especialidade, em linguagem acessível ao paciente.' },
        { t: 'Agendamento pelo WhatsApp', d: 'O paciente solicita a consulta e é encaminhado à secretária ou à clínica responsável por cada local.' },
        { t: 'Confirmação e lembretes', d: 'Mensagens automáticas antes da consulta, com opção de confirmar ou remarcar.' },
        { t: 'Blog de conteúdo educativo', d: 'Espaço para artigos de orientação em saúde, assinados por você.' },
      ],
    },
    local: {
      h2: 'Medicina em Feira de Santana',
      p: [
        'Feira de Santana é polo regional de saúde: pacientes de muitos municípios do entorno vêm à cidade para consultas e exames. Boa parte pesquisa pela especialidade e pelo nome do médico ainda de casa, pelo celular, antes de decidir a viagem.',
        'Para esse paciente, encontrar a especialidade, o endereço, os convênios e um contato que funciona é decisivo. Se você busca uma solução para a clínica como um todo, veja a página de <a href="/site-para-clinica-feira-de-santana/">site para clínicas e consultórios</a>.',
      ],
    },
    faq: [
      { q: 'Médico pode ter site e divulgar o trabalho?', a: 'Pode. A publicidade médica é regulamentada pelo Conselho Federal de Medicina (Resolução CFM nº 2.336/2023), que permite a divulgação com identificação do médico, número do CRM e, para quem anuncia especialidade, o RQE. O site é um dos meios previstos.' },
      { q: 'O site respeita as normas do CFM?', a: 'Desenvolvemos o site com conteúdo informativo, com a identificação profissional exigida e sem promessa de resultado ou sensacionalismo. O conteúdo final é revisado e aprovado por você, que responde pela conformidade com as normas do Conselho.' },
      { q: 'Atendo em vários locais. O site comporta isso?', a: 'Sim. Cada local aparece com endereço, dias de atendimento, convênios e o contato de agendamento correspondente.' },
      { q: 'O paciente consegue agendar pelo site?', a: 'Consegue solicitar a consulta pelo site ou pelo WhatsApp. A forma de integração com a agenda que você ou a clínica já utilizam é avaliada no início do projeto.' },
      { q: 'A IA pode atender pacientes no WhatsApp?', a: 'Pode cuidar da parte administrativa: horários, convênios, endereços, preparo para exames e solicitação de agendamento. Não faz orientação clínica nem diagnóstico, e a conversa é transferida para a equipe sempre que necessário.' },
      { q: 'Quanto custa um site para médico?', a: 'Depende do número de páginas e dos recursos de agendamento incluídos. Chame no WhatsApp, conte como é a sua rotina de atendimento e enviamos uma proposta.' },
    ],
  },

  // ───────────────────────────── GERAIS (sem recorte local) ─────────────────────────────
  {
    slug: 'gestao-de-trafego',
    kind: 'geral',
    nome: 'Gestão de tráfego inteligente',
    serviceType: 'Gestão de tráfego pago com rastreamento e automação',
    title: 'Gestão de Tráfego Inteligente com Rastreamento | Infuse',
    description:
      'Gestão de tráfego com rastreamento de ponta a ponta: origem de cada lead, eventos de conversão e automação no WhatsApp (API oficial e não oficial).',
    eyebrow: 'Tráfego pago · Rastreamento · Automação',
    h1: 'Gestão de tráfego inteligente, do clique à venda',
    lede:
      'A Infuse Software faz a gestão das suas campanhas e constrói a tecnologia por trás delas: rastreamento da origem de cada lead, envio de eventos de conversão para as plataformas de anúncio e automação do atendimento no WhatsApp, com API oficial ou não oficial.',
    destaques: [
      'Atribuição: cada cliente ligado à campanha que o trouxe',
      'Conversões reais devolvidas às plataformas de anúncio',
      'Desempenho das campanhas medido em vendas, não em cliques',
    ],
    objeto: 'sua operação de tráfego',
    intro: {
      h2: 'O problema não é o anúncio. É o que acontece depois do clique',
      p: [
        'Quando a venda é fechada em uma conversa de WhatsApp, o resultado fica fora do alcance das plataformas de anúncio. Elas contam o clique e a conversa iniciada, e param aí. O gestor otimiza para "mensagens", o algoritmo entrega para quem mais clica, e a empresa recebe volume sem saber se está recebendo comprador.',
        'Nós tratamos tráfego como um sistema. O anúncio, a página, a conversa, o CRM e a venda são conectados por dados. Cada lead carrega a identificação da campanha de origem, cada etapa da negociação gera um evento, e esses eventos voltam para a plataforma. O resultado é uma operação em que dá para responder, com números, qual campanha vende.',
      ],
    },
    entregas: {
      h2: 'O que está incluído na gestão de tráfego inteligente',
      sub: 'Mídia e engenharia feitas pela mesma empresa, sem depender de várias ferramentas desconectadas.',
      items: [
        { t: 'Gestão de campanhas', d: 'Estrutura de contas, públicos, criativos e orçamento, com otimização contínua orientada pelos dados de venda.' },
        { t: 'Trackeamento de leads', d: 'Captura de parâmetros de URL e identificadores de clique no site e na entrada do WhatsApp, gravados no cadastro de cada contato.' },
        { t: 'Envio de eventos de conversão', d: 'Integração servidor a servidor com as APIs de conversão das plataformas, enviando lead, lead qualificado, agendamento e compra.' },
        { t: 'Automação com WhatsApp', d: 'Fluxos de atendimento, qualificação e follow-up usando a API oficial do WhatsApp Business ou conexão não oficial, conforme o cenário de cada empresa.' },
        { t: 'Dashboard de campanhas', d: 'Custo por lead, por lead qualificado e por venda, além do retorno por campanha, em um painel único.' },
        { t: 'Integração com CRM e sistemas', d: 'Conexão com o <a href="/crm/">Infuse CRM</a> ou com o CRM e ERP que a empresa já utiliza, para que o status da venda alimente o rastreamento.' },
      ],
    },
    local: {
      h2: 'Para empresas que vendem pelo WhatsApp, em qualquer lugar do Brasil',
      p: [
        'O serviço é indicado para negócios que já investem ou vão investir em anúncios e fecham vendas por conversa: clínicas, imobiliárias, escolas e cursos, prestadores de serviço, lojas e e-commerces com atendimento consultivo. Também atendemos gestores de tráfego e agências que precisam da parte técnica de rastreamento e automação para os próprios clientes.',
        'A Infuse fica em Feira de Santana, na Bahia, e atende empresas de todo o país de forma remota. Se a sua empresa é da cidade, veja a página de <a href="/gestao-de-trafego-feira-de-santana/">gestão de tráfego em Feira de Santana</a>.',
      ],
    },
    faq: [
      { q: 'Qual a diferença para uma gestão de tráfego tradicional?', a: 'A gestão tradicional costuma terminar no gerenciador de anúncios, olhando custo por clique e por mensagem. Aqui o trabalho inclui a infraestrutura de dados: rastrear a origem de cada lead, acompanhar a conversa até a venda e devolver esse resultado às plataformas.' },
      { q: 'Como funciona o trackeamento de um lead que chega pelo WhatsApp?', a: 'Nos anúncios de clique para WhatsApp recebidos pela API oficial, a mensagem chega acompanhada dos dados do anúncio de origem. Em campanhas que passam por uma página, capturamos os parâmetros da URL e os associamos ao contato quando a conversa começa. Nos dois casos, a origem fica gravada no CRM.' },
      { q: 'Para que serve enviar eventos de conversão?', a: 'Para que a plataforma de anúncios saiba quais cliques viraram cliente. Com esse retorno, as campanhas podem ser otimizadas para conversões que acontecem fora do site, como uma venda fechada no WhatsApp, e os relatórios passam a refletir resultado de negócio.' },
      { q: 'Devo usar a API oficial ou a não oficial do WhatsApp?', a: 'A API oficial, fornecida pela Meta, é a opção mais estável: suporta vários atendentes, modelos de mensagem aprovados e os dados de origem dos anúncios, com custos de mensagem cobrados pela Meta. A conexão não oficial usa o WhatsApp comum pareado por QR Code; tem implantação mais simples, mas não é suportada pela Meta e pode sofrer instabilidade e restrições do número. Atendemos nos dois formatos e indicamos o mais adequado depois de entender o seu volume e o seu risco.' },
      { q: 'Já tenho um gestor de tráfego. Posso contratar só o rastreamento e a automação?', a: 'Pode. Implantamos o rastreamento, os eventos de conversão e a automação, e o seu gestor ou a sua agência seguem cuidando das campanhas com dados melhores.' },
      { q: 'Como os dados dos leads são tratados?', a: 'Os dados são coletados para atendimento e mensuração das campanhas da própria empresa. Quando enviados às plataformas de anúncio, os identificadores pessoais seguem com hash, como as próprias APIs de conversão exigem. O projeto é desenvolvido levando em conta a LGPD.' },
      { q: 'Vocês garantem um número de vendas?', a: 'Não. Nenhum gestor sério pode garantir vendas, que dependem também da oferta, do preço e do atendimento. Garantimos transparência: você enxerga o que cada campanha trouxe.' },
      { q: 'Quanto custa?', a: 'O valor depende do escopo: gestão de campanhas, rastreamento, automação ou o conjunto. A verba de anúncios é paga às plataformas e é separada do nosso serviço. Chame no WhatsApp para conversarmos sobre o seu cenário.' },
    ],
  },
];

const locais = (kind) => BASE.filter((p) => p.kind === kind);

/** Ordem usada nas listas de links: serviços, segmentos, gerais, institucionais. */
export const PAGES = [
  ...locais('servico'),
  ...locais('segmento'),
  ...SEGMENTOS_2,
  ...locais('geral'),
  ...PRODUTOS,
  ...INSTITUCIONAL,
];
