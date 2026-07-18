export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metrics: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  quote: string;
  author: string;
  role: string;
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: "whatsapp-ai-chatbot",
    title: "IA & Chatbots no WhatsApp",
    subtitle: "Agentes inteligentes que atendem, qualificam e vendem 24h/dia",
    description: "Atendimento virtual com Inteligência Artificial integrado ao seu WhatsApp Business. Responde dúvidas, qualifica leads, realiza agendamentos e fecha vendas de forma humanizada e sem fila de espera.",
    icon: "MessageSquareCode",
    metrics: "+55% em taxa de conversão",
    features: [
      "Atendimento instantâneo 24 horas por dia",
      "Integração direta com seu CRM, ERP e calendário",
      "Qualificação automática de leads e transbordo para humanos",
      "Envio de cobranças, lembretes e pós-venda no WhatsApp"
    ]
  },
  {
    id: "sites-e-commerce",
    title: "Sites & Lojas Virtuais (E-Commerce)",
    subtitle: "Infraestrutura digital de alta conversão, rápida e otimizada",
    description: "Desenvolvemos landing pages ultra-rápidas e lojas virtuais e-commerce completas, desenhadas estrategicamente do layout ao código para transformar visitantes em compradores recorrentes.",
    icon: "ShoppingBag",
    metrics: "Páginas com carregamento < 1.2s",
    features: [
      "Design Apple-level limpo, responsivo e focado em conversão",
      "Checkout transparente integrado a frete e pagamentos",
      "SEO técnico otimizado para o topo do Google",
      "Integração automatizada de estoque e nota fiscal"
    ]
  },
  {
    id: "automacao-processos",
    title: "Automação de Processos & Conexões",
    subtitle: "Elimine tarefas manuais e conecte todas as suas ferramentas",
    description: "Criamos fluxos inteligentes de dados ligando seu e-commerce, formulários, sistemas de pagamento, e-mail e planilhas. Reduza custos operacionais e elimine erros de digitação manual.",
    icon: "Workflow",
    metrics: "-85% de tempo gasto em tarefas operacionais",
    features: [
      "Sincronização em tempo real entre ERP e sistemas de vendas",
      "Geração e envio automático de contratos, notas e relatórios",
      "Disparo inteligente de e-mails, SMS e alertas corporativos",
      "Webhooks customizados e conectores para Zapier/Make"
    ]
  },
  {
    id: "crm-vendas",
    title: "CRM de Vendas & Gestão Omnichannel",
    subtitle: "Visão 360° do cliente do primeiro contato ao pós-venda",
    description: "Organize seus contatos em um funil claro de negociação. Acompanhe a esteira de atendimento de cada cliente com histórico unificado de mensagens do WhatsApp, e-mails e chamadas.",
    icon: "BarChart3",
    metrics: "+40% na produtividade do time comercial",
    features: [
      "Funil de vendas visual personalizável por etapas",
      "Métricas e relatórios de desempenho de atendentes",
      "Histórico completo de interações unificado",
      "Reengajamento automático de leads inativos"
    ]
  },
  {
    id: "agendamento-inteligente",
    title: "Agendamento Inteligente & Notificações",
    subtitle: "Reduza o no-show e organize sua agenda no piloto automático",
    description: "Ideal para clínicas, consultórios, barbearias, salões, imobiliárias e prestadores de serviço. O cliente escolhe o horário disponível e recebe lembretes automáticos para não faltar.",
    icon: "CalendarCheck",
    metrics: "Até 70% de redução nas faltas de clientes",
    features: [
      "Sincronização bidirecional com Google Calendar/Outlook",
      "Confirmação automática de presença via WhatsApp",
      "Reagendamento fácil direto pela conversa do bot",
      "Pagamento de sinal de reserva integrado no agendamento"
    ]
  },
  {
    id: "sistemas-customizados",
    title: "Sistemas Web & Softwares Proprietários",
    subtitle: "Plataformas SaaS e softwares sob medida para a sua operação",
    description: "Desenvolvimento completo de sistemas web, portais de clientes e aplicativos de gestão sob medida para empresas com demandas operacionais específicas e alta exigência de segurança.",
    icon: "Code2",
    metrics: "Disponibilidade de 99.99% com segurança total",
    features: [
      "Arquitetura moderna escalável em nuvem",
      "Paineis administrativos com níveis de permissão",
      "Segurança da informação e adequação à LGPD",
      "Evolução contínua e suporte técnico dedicado"
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Clínicas & Consultórios", value: "Agendamentos 24/7 sem faltas" },
  { name: "Lojas Virtuais & E-Commerce", value: "+180% em conversão" },
  { name: "Imobiliárias & Corretores", value: "Captação & Qualificação de Leads" },
  { name: "Barbearias & Salões", value: "Agenda cheia automática" },
  { name: "Escolas & Cursos", value: "Atendimento & Matrículas no WhatsApp" },
  { name: "Empresas de Serviços", value: "CRM & Automação de Processos" }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-whatsapp-agendamento",
    client: "Rede de Clínicas de Saúde & Estética",
    title: "Como a Automação de WhatsApp e Agendamento Inteligente Reduziu Faltas em 74% e Dobrou as Consultas Agendadas",
    challenge: "A recepção não dava conta de atender o volume de chamadas e mensagens no WhatsApp, gerando demoras de até 3 horas e alto índice de desistência e faltas sem aviso prévio.",
    solution: "Implementação do Chatbot com IA da Infuse no WhatsApp oficial, com integração ao sistema de agenda e envio automático de lembretes interativos com confirmação de presença.",
    results: [
      { label: "Redução de Faltas", value: "-74%" },
      { label: "Tempo Médio de Resposta", value: "< 5 seg" },
      { label: "Agendamentos Fora de Horário", value: "38%" }
    ],
    quote: "O agente de IA da Infuse assumiu todo o atendimento inicial. Nossos pacientes agendam até de madrugada e nossa equipe foca no atendimento presencial de qualidade.",
    author: "Dra. Juliana Mendes",
    role: "Diretora Operacional"
  },
  {
    id: "case-ecommerce-crm",
    client: "E-Commerce de Moda Omnichannel",
    title: "Novo E-Commerce de Alta Performance Integrado ao WhatsApp CRM que Gerou +140% em Faturamento em 90 Dias",
    challenge: "O site antigo era lento no mobile, abandonava carrinhos e não se conectava com o estoque das lojas nem com a equipe de vendas via WhatsApp.",
    solution: "Reconstrução do site com arquitetura ultra-rápida, checkout em 1 clique, recuperação de carrinho automática via WhatsApp e painel CRM de vendas em tempo real.",
    results: [
      { label: "Aumento nas Vendas", value: "+140%" },
      { label: "Taxa de Recuperação de Carrinho", value: "32%" },
      { label: "Velocidade de Carregamento", value: "0.8s" }
    ],
    quote: "A Infuse nos entregou não apenas uma loja linda, mas uma máquina de vendas com recuperação no WhatsApp que roda no piloto automático.",
    author: "Matheus Sampaio",
    role: "Head de E-Commerce"
  }
];

export const METRICS = [
  { number: "24/7", label: "Atendimento Sem Interrupções no WhatsApp" },
  { number: "< 1 seg", label: "Tempo de Carregamento dos Nossos Sites" },
  { number: "+70%", label: "Média de Crescimento na Captura de Leads" },
  { number: "+85%", label: "Economia de Tempo em Tarefas Repetitivas" }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Diagnóstico Mapeamento Múltiplo",
    subtitle: "Análise profunda dos gargalos de vendas",
    description: "Analisamos como sua empresa atrai, atende e vende hoje. Identificamos onde você está perdendo tempo manual e onde a automação trará o maior retorno imediato."
  },
  {
    step: "02",
    title: "Construção & Design de Alta Conversão",
    subtitle: "Experiência impecável para o seu cliente",
    description: "Criamos a interface do seu site/e-commerce ou desenhamos o fluxo de conversa da Inteligência Artificial com copywriting persuasion focada em fechar vendas."
  },
  {
    step: "03",
    title: "Integração & Treinamento da IA",
    subtitle: "Conexão total ao seu ecossistema",
    description: "Conectamos o WhatsApp oficial ao seu CRM, ERP ou sistema de pagamento. Treinamos a IA com os produtos, perguntas e regras exatas do seu negócio."
  },
  {
    step: "04",
    title: "Lançamento, Otimização & Suporte",
    subtitle: "Melhoria contínua baseada em dados",
    description: "Colocamos sua operação no ar, monitoramos as interações em tempo real e fornecemos relatórios de conversão para otimizar continuamente suas vendas."
  }
];

export const FAQ_ITEMS = [
  {
    question: "O que é inteligência artificial para WhatsApp?",
    answer:
      "É um sistema que utiliza IA integrada ao WhatsApp para responder, qualificar e atender clientes automaticamente sem precisar de um atendente humano a cada mensagem. A IA interpreta o que o cliente escreve em linguagem natural e responde de forma personalizada, podendo registrar pedidos, tirar dúvidas, enviar catálogos e muito mais."
  },
  {
    question: "Como funciona a automação de WhatsApp para empresas?",
    answer:
      "A automação de WhatsApp conecta seu número do WhatsApp Business a um sistema de fluxos inteligentes. Quando um cliente envia uma mensagem, o sistema identifica a intenção e executa a ação programada: resposta, envio de link, geração de orçamento ou agendamento, registrando tudo no CRM sem intervenção manual."
  },
  {
    question: "Qual a diferença entre chatbot e IA no WhatsApp?",
    answer:
      "Um chatbot tradicional segue um roteiro fixo de menus. Já a IA no WhatsApp entende linguagem natural: mesmo que o cliente escreva de forma diferente do esperado, o sistema compreende a intenção e responde de forma fluida. O resultado é uma experiência muito mais próxima de um atendimento humano real."
  },
  {
    question: "A IA no WhatsApp atende clientes fora do horário comercial?",
    answer:
      "Sim! 24h por dia, 7 dias por semana, incluindo fins de semana e feriados. Enquanto você dorme, a IA responde dúvidas, capta leads, registra pedidos e agenda serviços. Quando sua equipe chegar pela manhã, tudo já está organizado no sistema."
  },
  {
    question: "Como funciona o sistema de agendamento para salão de beleza, barbearia e clínica de estética?",
    answer:
      "O sistema de agendamento da Infuse permite que clientes de salões, barbearias e clínicas de estética marquem horários diretamente pelo WhatsApp ou por um link de agendamento online, sem precisar ligar ou falar no Whatsapp. O sistema exibe os horários disponíveis em tempo real, confirma automaticamente, envia lembretes antes da data e avisa sobre cancelamentos, reduzindo faltas e evitando conflitos na agenda. Tudo integrado ao WhatsApp que você já usa."
  },
  {
    question: "O sistema de agendamento reduz mesmo as faltas e cancelamentos de última hora?",
    answer:
      "Sim. O principal motivo de faltas é o esquecimento. Com lembretes automáticos enviados via WhatsApp 24h e 1h antes do horário, a taxa de no-show cai drasticamente. Além disso, o sistema permite que o próprio cliente reagende com antecedência, liberando o horário para outro cliente no lugar de perder a vaga."
  },
  {
    question: "O que é uma landing page e por que meu negócio precisa de uma?",
    answer:
      "Uma landing page é uma página focada em converter o visitante em cliente, lead ou agendamento sem distrações. Diferente de um site completo, ela é projetada em torno de uma única oferta ou chamada para ação. Para anúncios no Instagram, Google ou WhatsApp, uma landing page bem feita aumenta significativamente a taxa de conversão e o retorno sobre o investimento em tráfego pago."
  },
  {
    question: "É possível integrar automação de WhatsApp com CRM?",
    answer:
      "Sim. Na Infuse, integramos a automação de WhatsApp diretamente ao CRM, criando um funil de vendas unificado. Cada lead que entra pelo WhatsApp é automaticamente registrado, categorizado e acompanhado no painel. Isso dá visibilidade total sobre o pipeline de vendas, histórico de conversas e taxa de conversão sem trabalho manual duplicado."
  },
];
