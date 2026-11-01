/**
 * Páginas de produto/serviço sem recorte de cidade no título (`kind: 'geral'`).
 * `localizado: true` mantém Feira de Santana como área atendida nos dados
 * estruturados — usado nos produtos físicos (placas NFC).
 */

const PASSOS_NFC = [
  { t: 'Conversa no WhatsApp', d: 'Você conta qual é o seu estabelecimento e o que quer que o cliente faça ao aproximar o celular.' },
  { t: 'Definição dos links', d: 'Escolhemos juntos o destino da placa: um link único ou uma página com vários links.' },
  { t: 'Preparação da placa', d: 'Configuramos a placa e a página de destino e testamos a leitura antes da entrega.' },
  { t: 'Entrega e suporte', d: 'Você recebe a placa pronta para usar e conta com a gente para ajustes nos links.' },
];

export const PRODUTOS = [
  {
    slug: 'placa-nfc',
    kind: 'geral',
    localizado: true,
    nome: 'Placas NFC para estabelecimentos',
    serviceType: 'Placas NFC para estabelecimentos comerciais',
    title: 'Placa NFC para Estabelecimentos | Infuse Software',
    description:
      'Placa NFC com QR Code para o seu estabelecimento: o cliente aproxima o celular ou escaneia e abre avaliação no Google, Pix, Instagram ou vários links.',
    capa: 'nfc-loja-de-roupas',
    produto: {
      nome: 'Placa NFC com QR Code da Infuse',
      descricao:
        'Placa com NFC e QR Code que levam ao mesmo destino editável: Instagram, avaliação no Google, Pix ou uma página personalizável com vários links.',
      categoria: 'Placas NFC',
      imagens: ['nfc-loja-de-roupas', 'nfc-balcao-granito', 'nfc-vitrine-relogios', 'nfc-na-mao'],
    },
    guias: {
      h2: 'Guias sobre a placa NFC e o QR Code',
      slugs: [
        'como-funciona-a-placa-nfc-da-infuse', 'placa-nfc-como-funciona-no-celular', 'placa-nfc-ou-qr-code-qual-usar', 'placa-nfc-para-avaliacoes-no-google',
        'placa-qr-code-google-avaliacao', 'placa-nfc-e-qr-code-para-instagram', 'placa-qr-code-pix-como-receber-no-balcao',
        'placa-qr-code-whatsapp-como-usar', 'pagina-com-varios-links-placa-nfc', 'placa-nfc-e-qr-code-personalizada',
        'placa-qr-code-na-parede-onde-posicionar', 'como-escolher-fornecedor-de-placa-nfc',
      ],
    },
    eyebrow: 'Placas NFC · Infuse Software',
    h1: 'Placas NFC para estabelecimentos',
    lede:
      'O cliente aproxima o celular da placa, ou escaneia o QR Code, e o link abre na hora: avaliação no Google, chave Pix, Instagram, cardápio digital, site, WhatsApp. O destino é 100% editável: você escolhe um link ou reúne vários em uma página personalizável.',
    destaques: [
      'NFC e QR Code na mesma placa, sem instalar aplicativo',
      'Destino 100% editável: Google, Pix, Instagram, site ou o que você quiser',
      'Um link único ou uma página personalizável com vários links úteis',
    ],
    objeto: 'sua placa NFC',
    passos: PASSOS_NFC,
    intro: {
      h2: 'Do balcão para o celular do cliente em um toque',
      p: [
        'Pedir que o cliente "procure a gente no Google e deixe uma avaliação" quase nunca funciona: ele concorda, sai da loja e esquece. O mesmo vale para o Instagram que ninguém anota e para a chave Pix ditada em voz alta no caixa.',
        'A placa NFC tira esse atrito. Ela fica no balcão, na mesa ou no caixa; o cliente encosta o celular e a página abre sozinha, pronta para avaliar, pagar ou ver o cardápio. NFC é a mesma tecnologia de aproximação usada nos cartões e está presente na maioria dos smartphones atuais. Para quem prefere ou tem um aparelho sem NFC, a mesma placa traz um QR Code que leva ao mesmo destino.',
      ],
    },
    galeria: {
      h2: 'Como é a placa NFC da Infuse',
      sub: 'NFC, QR Code e os atalhos do seu negócio na mesma placa, pronta para o balcão.',
      imagens: ['nfc-loja-de-roupas', 'nfc-balcao-granito', 'nfc-vitrine-relogios', 'nfc-na-mao'],
    },
    entregas: {
      h2: 'Para onde a placa NFC pode levar o seu cliente',
      sub: 'O destino é 100% editável, tanto no NFC quanto no QR Code. Pode ser um único link ou uma página personalizável com todos os que quiser.',
      items: [
        { t: 'Avaliação no Google', d: 'Abre direto a tela de avaliação do seu Perfil da Empresa no Google, enquanto o cliente ainda está no estabelecimento.' },
        { t: 'Pix', d: 'Abre uma página com a sua chave Pix e o código copia e cola, para o cliente pagar sem digitar nada.' },
        { t: 'Cardápio digital', d: 'Leva ao cardápio do restaurante. Conheça o <a href="/cardapio-digital/">cardápio digital inteligente com placa NFC</a>.' },
        { t: 'Site ou loja virtual', d: 'Abre o site, o catálogo ou a loja virtual do seu negócio.' },
        { t: 'WhatsApp e redes sociais', d: 'Inicia uma conversa no WhatsApp ou abre o perfil no Instagram para o cliente seguir.' },
        { t: 'Página personalizável com vários links', d: 'Uma página no estilo "link na bio", com a sua marca, reunindo todos os destinos úteis: avaliar, pagar, seguir, ver o cardápio e falar com você.' },
      ],
    },
    local: {
      h2: 'Para quem atende cliente no balcão, na mesa ou no caixa',
      p: [
        'A placa NFC serve para restaurantes, lanchonetes, bares, cafeterias, barbearias, salões de beleza, clínicas, lojas, academias, pet shops, hotéis e qualquer estabelecimento que receba clientes presencialmente.',
        'A Infuse fica em Feira de Santana, na Bahia, e atende os estabelecimentos da cidade e da região. Se você é de outra cidade, consulte a disponibilidade pelo WhatsApp.',
      ],
    },
    faq: [
      { q: 'O que é uma placa NFC?', a: 'É uma placa com um chip de aproximação (NFC). Quando o cliente encosta o celular, o aparelho lê o chip e abre o link gravado nele, sem precisar de aplicativo nem de digitar endereço.' },
      { q: 'Funciona em qualquer celular?', a: 'O NFC funciona na maioria dos smartphones atuais, Android e iPhone, que já vêm com leitor NFC. Em alguns aparelhos Android é preciso que o NFC esteja ativado nas configurações. Modelos mais antigos ou de entrada podem não ter o recurso, e por isso a placa também traz um QR Code, que a câmera de qualquer celular lê e que leva ao mesmo destino.' },
      { q: 'O cliente paga o Pix só encostando o celular?', a: 'Não. A placa abre uma página com a sua chave Pix e o código copia e cola; o cliente conclui o pagamento no aplicativo do banco dele. Não é o Pix por aproximação oferecido pelas maquininhas e carteiras digitais.' },
      { q: 'A placa aumenta minhas avaliações no Google?', a: 'Ela facilita o caminho, porque o cliente chega à tela de avaliação em um toque, ainda dentro do estabelecimento. A decisão de avaliar continua sendo dele. As regras do Google não permitem oferecer brinde ou desconto em troca de avaliação, nem pedir apenas avaliações positivas.' },
      { q: 'A placa tem QR Code também?', a: 'Sim. Cada placa traz NFC e QR Code, e os dois levam ao mesmo destino. O cliente escolhe o que for mais prático: encostar o celular ou escanear com a câmera.' },
      { q: 'Posso colocar vários links na mesma placa?', a: 'Pode. Nesse caso a placa abre uma página personalizável com a sua marca e os botões que você escolher: avaliação, Pix, cardápio, site, Instagram, WhatsApp e outros.' },
      { q: 'Dá para trocar o destino depois?', a: 'Sim. O destino é 100% editável, tanto no NFC quanto no QR Code. Você pode escolher um link como Instagram, avaliação do Google ou Pix, ou uma página com vários links, e alterar quando precisar sem trocar a placa.' },
      { q: 'Como funciona a placa NFC no celular?', a: 'O celular tem um leitor NFC. Ao encostar nele a placa, ele lê o chip e abre o link gravado, como o seu Instagram ou a avaliação no Google. Quem prefere pode apontar a câmera para o QR Code da placa, que leva ao mesmo lugar. Não é preciso instalar aplicativo.' },
      { q: 'Dá para usar a placa para o Instagram?', a: 'Dá. Você escolhe o link do seu perfil como destino, e o cliente chega ao Instagram encostando o celular ou escaneando o QR Code, sem digitar o nome do perfil.' },
      { q: 'Posso usar a placa para o cliente chamar no WhatsApp?', a: 'Pode. O destino pode ser o link do seu WhatsApp, inclusive com uma mensagem inicial pronta, ou uma página com vários links em que o WhatsApp é um dos botões.' },
      { q: 'A placa NFC e o QR Code são personalizáveis?', a: 'O destino é 100% editável, tanto no NFC quanto no QR Code, e a página com vários links é personalizável. Para conversar sobre a personalização visual da placa, chame no WhatsApp.' },
      { q: 'Quanto custa a placa NFC?', a: 'Depende da quantidade de placas e do que elas vão abrir. Chame no WhatsApp, conte sobre o seu estabelecimento e passamos os valores.' },
    ],
  },

  {
    slug: 'cardapio-digital',
    kind: 'geral',
    localizado: true,
    nome: 'Cardápio digital inteligente com placa NFC',
    serviceType: 'Cardápio digital com placa NFC',
    title: 'Cardápio Digital Inteligente com Placa NFC | Infuse',
    description:
      'Cardápio digital inteligente com placa NFC: o cliente aproxima o celular na mesa e o cardápio abre na hora, sempre atualizado. Fale com a Infuse.',
    eyebrow: 'Cardápio digital · Placa NFC',
    h1: 'Cardápio digital inteligente com placa NFC',
    lede:
      'O cliente senta, aproxima o celular da placa na mesa e o cardápio abre na hora, com fotos, descrições e preços atualizados. Sem baixar aplicativo e sem esperar o garçom trazer o cardápio.',
    destaques: [
      'Abre por aproximação, em qualquer mesa',
      'Fotos, categorias e itens sempre atualizados',
      'Pedido pelo WhatsApp e link para avaliação e Pix',
    ],
    objeto: 'seu cardápio digital',
    passos: [
      { t: 'Conversa no WhatsApp', d: 'Você conta como o restaurante funciona: salão, delivery, retirada, quantidade de mesas.' },
      { t: 'Montagem do cardápio', d: 'Organizamos categorias, itens, fotos e descrições a partir do seu cardápio atual.' },
      { t: 'Placas configuradas', d: 'Preparamos as placas NFC apontando para o cardápio e testamos a leitura.' },
      { t: 'Entrega e suporte', d: 'Você recebe tudo pronto, aprende a atualizar o cardápio e conta com a gente para ajustes.' },
    ],
    intro: {
      h2: 'Cardápio impresso envelhece. PDF no celular ninguém consegue ler',
      p: [
        'Todo restaurante conhece o problema: mudou um preço, acabou um prato, entrou uma novidade, e o cardápio impresso ficou errado. A alternativa improvisada, um PDF ou uma foto do cardápio, obriga o cliente a dar zoom e arrastar a tela para achar o que quer.',
        'O cardápio digital foi feito para a tela do celular: categorias, fotos e descrições em uma página leve, que você atualiza em minutos. Com a placa NFC na mesa, o cliente não precisa nem apontar a câmera: aproxima o aparelho e o cardápio aparece.',
      ],
    },
    entregas: {
      h2: 'O que o cardápio digital inteligente tem',
      sub: 'Para restaurantes, pizzarias, hamburguerias, bares, cafeterias, lanchonetes e sorveterias.',
      items: [
        { t: 'Placa NFC na mesa', d: 'O cliente encosta o celular e o cardápio abre. Veja mais sobre as <a href="/placa-nfc/">placas NFC para estabelecimentos</a>.' },
        { t: 'Cardápio feito para celular', d: 'Itens por categoria, com foto, descrição e preço, em uma página rápida e fácil de navegar.' },
        { t: 'Atualização na hora', d: 'Você altera preços, inclui pratos e marca itens como indisponíveis por um painel simples.' },
        { t: 'Pedido pelo WhatsApp', d: 'Para delivery e retirada, o cliente monta o pedido e envia a mensagem pronta para o restaurante.' },
        { t: 'Mais links na mesma placa', d: 'Avaliação no Google, Pix, Instagram e Wi-Fi podem ficar na mesma página do cardápio.' },
        { t: 'O mesmo link em todo lugar', d: 'O endereço do cardápio também vai para a bio do Instagram, o Perfil no Google e o status do WhatsApp.' },
      ],
    },
    local: {
      h2: 'Para restaurantes de Feira de Santana e região',
      p: [
        'Atendemos restaurantes, bares e lanchonetes de Feira de Santana e das cidades vizinhas. Para estabelecimentos de outras regiões, consulte a disponibilidade das placas pelo WhatsApp; o cardápio digital em si funciona em qualquer lugar.',
        'Se o seu restaurante também precisa de um site completo, com reservas e presença no Google, veja <a href="/site-para-restaurante-feira-de-santana/">site para restaurantes em Feira de Santana</a>.',
      ],
    },
    faq: [
      { q: 'Como o cliente abre o cardápio?', a: 'Ele aproxima o celular da placa NFC que fica na mesa ou no balcão, e o cardápio abre no navegador. Não precisa instalar aplicativo nem fazer cadastro.' },
      { q: 'E se o celular do cliente não tiver NFC?', a: 'A maioria dos smartphones atuais tem. Para os que não têm, o cardápio é um link comum, que você também disponibiliza no Instagram, no Google e pelo WhatsApp.' },
      { q: 'Consigo mudar preços e pratos sozinho?', a: 'Sim. Você atualiza itens, fotos, preços e disponibilidade pelo painel, e a mudança aparece na hora para os clientes. A placa continua a mesma.' },
      { q: 'O cliente faz o pedido pelo cardápio?', a: 'No salão, ele consulta o cardápio e pede ao garçom normalmente. Para delivery e retirada, pode montar o pedido e enviá-lo pronto para o WhatsApp do restaurante.' },
      { q: 'Qual a diferença para um cardápio em PDF com QR Code?', a: 'O PDF é uma imagem do cardápio impresso: pesa para abrir, exige zoom e precisa ser refeito a cada alteração. O cardápio digital é uma página feita para celular, que você edita item por item, e a placa traz NFC, que dispensa abrir a câmera, e também QR Code para quem preferir escanear.' },
      { q: 'Quantas placas eu preciso?', a: 'Depende de como você quer usar: uma por mesa, algumas no balcão ou só no caixa. Avaliamos junto com você.' },
      { q: 'Quanto custa o cardápio digital com placa NFC?', a: 'Depende do tamanho do cardápio e da quantidade de placas. Chame no WhatsApp, conte sobre o seu restaurante e passamos os valores.' },
    ],
  },

  {
    slug: 'postline',
    kind: 'geral',
    nome: 'Postline',
    serviceType: 'Plataforma de gestão de redes sociais',
    title: 'Postline: Gerenciador de Redes Sociais e Agendador de Posts',
    description:
      'Postline, da Infuse: gerenciador de redes sociais para agências e social media. Agende posts no Instagram, responda comentários e direct e veja métricas.',
    eyebrow: 'Postline · Infuse Software',
    h1: 'Postline: gerenciador de redes sociais para agências e social media',
    lede:
      'O Postline é uma plataforma de gestão de redes sociais para agências de marketing digital e social media. Agende posts, responda comentários e mensagens, automatize respostas no direct e acompanhe as métricas de cada cliente em um só lugar.',
    destaques: [
      'Agendador de posts e calendário de conteúdo para o Instagram',
      'Caixa de entrada unificada para comentários e direct',
      'Métricas por cliente e IA para roteiros, legendas e criativos',
    ],
    objeto: 'o Postline',
    capa: 'postline-calendario',
    tema: {
      accent: '#d4587f',
      accent2: '#e06a91',
      accent3: '#f2a3bc',
      glow: 'rgba(212,88,127,.30)',
    },
    selo: { img: '/images/postline/postline-logo.svg', alt: 'Logo do Postline', texto: 'Postline · da Infuse Software' },
    vitrine: {
      hero: {
        telas: ['postline-m-calendario', 'postline-m-inbox', 'postline-m-composer'],
      },
      abas: {
        h2: 'O Postline por dentro',
        sub: 'Escolha um recurso e veja a tela. Calendário, caixa de entrada, IA e métricas na mesma plataforma.',
        itens: [
          {
            rotulo: 'Calendário',
            img: 'postline-calendario',
            h3: 'Agendador de posts e calendário editorial',
            p: 'Planeje o mês no calendário de conteúdo, filtre por rede e por cliente e agende a publicação para o horário certo. Os rascunhos ficam guardados, e você pode publicar na hora quando precisar.',
            pontos: ['Visão do mês por cliente e por rede', 'Rascunhos, agendadas e publicadas em um só lugar', 'Editor com pré-visualização antes de agendar'],
          },
          {
            rotulo: 'Caixa de entrada',
            img: 'postline-inbox',
            h3: 'Comentários e direct em um só lugar',
            p: 'Responda comentários e mensagens diretas de todos os clientes sem trocar de aplicativo. Use filtros, favoritos e arquivamento para manter a caixa em dia.',
            pontos: ['Todos os clientes na mesma lista', 'Favoritas e arquivadas', 'Resposta automática por palavra-gatilho'],
          },
          {
            rotulo: 'IA',
            img: 'postline-studio',
            h3: 'IA para social media',
            p: 'Gere roteiros para Reels e Shorts, legendas e criativos a partir do seu briefing. O conteúdo chega pronto para você revisar antes de usar.',
            pontos: ['Roteiros de 15 a 60 segundos', 'Criativos nos formatos feed, story e paisagem', 'Créditos Postline para usar a IA'],
          },
          {
            rotulo: 'Métricas',
            img: 'postline-analytics',
            h3: 'Métricas e relatórios por cliente',
            p: 'Acompanhe alcance, curtidas, salvamentos e o comparativo entre clientes, direto da API oficial do Instagram.',
            pontos: ['Comparativo por cliente', 'Alcance, curtidas e salvamentos', 'Dados da API oficial do Instagram'],
          },
        ],
      },
      demo: {
        h2: 'Comentou, recebeu: resposta automática no direct do Instagram',
        p: [
          'Defina palavras-gatilho para uma publicação e escreva a mensagem. Quem comentar com uma delas recebe a mensagem no direct, sem você precisar fazer nada.',
          'Serve para enviar um link, um catálogo ou um cardápio no exato momento em que o interesse aparece.',
        ],
        pontos: ['Não diferencia maiúsculas de minúsculas', 'Basta a palavra aparecer no comentário', 'Você escolhe a mensagem enviada'],
        aria: 'Animação: um seguidor comenta com a palavra-gatilho e recebe a resposta automática no direct',
        cena: {
          iniciais: 'AM',
          comentario: '<b>Ana M.</b> Quero o <b>cardápio</b> completo!',
          gatilho: 'cardápio',
          resposta: 'Oi, Ana! Que bom que você se interessou. Segue o cardápio completo: graodourado.com.br/cardapio',
        },
      },
      carrossel: {
        h2: 'Leve o Postline no bolso',
        sub: 'O Postline funciona no navegador do celular e também pode ser instalado como aplicativo, com notificações.',
        telas: [
          { img: 'postline-m-calendario', leg: 'Calendário no celular' },
          { img: 'postline-m-inbox', leg: 'Caixa de entrada' },
          { img: 'postline-m-composer', leg: 'Nova publicação com pré-visualização' },
          { img: 'postline-m-studio', leg: 'IA & Automação' },
          { img: 'postline-m-analytics', leg: 'Analytics por cliente' },
        ],
      },
    },
    waLabel: 'Falar com a Infuse sobre o Postline',
    nota: 'Quer conhecer o Postline? Chame a equipe da Infuse pelo WhatsApp.',
    software: {
      nome: 'Postline',
      descricao:
        'Gerenciador de redes sociais para agências e social media: agendador de posts e calendário de conteúdo, caixa de entrada unificada, resposta automática no direct, métricas por cliente e criação de conteúdo com IA.',
      recursos: [
        'Agendador de posts e calendário editorial',
        'Editor de publicações com pré-visualização',
        'Caixa de entrada unificada de comentários e direct',
        'Resposta automática no direct por palavra-gatilho',
        'Métricas e relatórios por cliente',
        'IA para roteiros, legendas e criativos',
        'Gestão de clientes, equipe e biblioteca de mídia',
        'Publicação no TikTok',
      ],
    },
    passosH2: 'Como começar no Postline',
    passosSub: 'Do cadastro à primeira publicação agendada.',
    passos: [
      { t: 'Crie a conta', d: 'O cadastro é feito no aplicativo, com e-mail ou com a conta do Google.' },
      { t: 'Conecte as redes dos clientes', d: 'O Instagram é conectado pelo login oficial, e você escolhe o que autorizar. Também é possível conectar o TikTok.' },
      { t: 'Planeje e agende os posts', d: 'Monte o calendário de conteúdo, escreva no editor e agende a publicação ou publique na hora.' },
      { t: 'Atenda e acompanhe', d: 'Responda comentários e mensagens na caixa de entrada e acompanhe as métricas de cada cliente.' },
    ],
    intro: {
      h2: 'Gerenciador de redes sociais para quem atende várias marcas',
      p: [
        'Social media e agências de marketing digital costumam dividir o dia entre ferramentas diferentes: uma planilha de calendário editorial, outra para agendar posts, o aplicativo de cada rede para responder comentários e direct e mais um arquivo para o relatório de resultados. Cada troca de tela é tempo e atenção que se perdem.',
        'O Postline junta isso em uma plataforma de gestão de redes sociais. Você organiza os clientes, planeja o conteúdo, agenda e publica, responde e acompanha os resultados de cada marca sem sair do lugar. Ele é um produto da Infuse Software, empresa de tecnologia de Feira de Santana, na Bahia.',
      ],
    },
    entregas: {
      h2: 'Recursos do gerenciador de redes sociais Postline',
      sub: 'As funções principais, como o próprio aplicativo as apresenta.',
      items: [
        { t: 'Agendador de posts e calendário editorial', d: 'Planeje o mês no calendário de conteúdo e agende posts no Instagram para o horário certo. Filtre por rede e por cliente, guarde rascunhos e publique na hora quando precisar.' },
        { t: 'Editor de publicações com pré-visualização', d: 'Escreva a legenda, escolha a mídia da biblioteca e veja a pré-visualização antes de agendar.' },
        { t: 'Caixa de entrada: comentários e direct', d: 'Responda comentários e mensagens diretas de todos os clientes em um só lugar, com filtros, favoritos e arquivamento, sem trocar de aplicativo.' },
        { t: 'Resposta automática no direct', d: 'Defina palavras-gatilho para uma publicação, e quem comentar com uma delas recebe a sua mensagem no direct do Instagram, sem você precisar fazer nada.' },
        { t: 'Métricas e relatórios por cliente', d: 'Alcance, curtidas, salvamentos e comparativos por cliente, direto da API oficial do Instagram, para acompanhar e reportar os resultados.' },
        { t: 'IA para social media', d: 'Roteiros para Reels e Shorts, legendas e criativos gerados a partir do seu briefing, prontos para você revisar antes de usar.' },
        { t: 'Gestão de clientes e equipe', d: 'Organize o trabalho por cliente, convide pessoas por e-mail para o mesmo espaço de trabalho e guarde fotos e vídeos em uma biblioteca de mídia.' },
        { t: 'Publicação no TikTok', d: 'Conecte uma conta do TikTok para ver os vídeos e publicar por lá, na mesma plataforma.' },
        { t: 'Aplicativo instalável', d: 'O Postline funciona no navegador e pode ser instalado no celular ou no computador, com notificações.' },
      ],
    },
    local: {
      h2: 'Integração com o Instagram e privacidade',
      p: [
        'A conexão com o Instagram é feita pelo login oficial e só acessa o que você autoriza: publicar conteúdo, ler métricas e responder comentários e mensagens da conta profissional conectada. Você pode revogar o acesso a qualquer momento, em Configurações ou pelo próprio Instagram, e pedir a exclusão dos seus dados quando quiser.',
        'A política de privacidade, os termos de uso e o pedido de exclusão de dados estão disponíveis no próprio aplicativo.',
      ],
    },
    whyH2: 'Por que o Postline é da Infuse',
    faq: [
      { q: 'O que é o Postline?', a: 'É um gerenciador de redes sociais da Infuse Software, feito para agências e social media. Reúne agendador de posts, calendário de conteúdo, caixa de entrada, métricas por cliente e criação de conteúdo com IA em um só lugar.' },
      { q: 'Como agendar posts no Instagram com o Postline?', a: 'Você cria a publicação no editor, escolhe o cliente e a rede e agenda no calendário, definindo data e horário. Também dá para salvar como rascunho ou publicar na hora.' },
      { q: 'Dá para responder comentários e direct do Instagram no mesmo lugar?', a: 'Sim. A caixa de entrada unificada reúne comentários e mensagens diretas, com filtros, favoritos e arquivamento, e permite responder sem sair da plataforma.' },
      { q: 'Como funciona a resposta automática no direct do Instagram?', a: 'Você define palavras-gatilho e uma mensagem para uma publicação. Quem comentar com uma dessas palavras recebe a mensagem no direct automaticamente.' },
      { q: 'O Postline serve para gerenciar vários clientes?', a: 'Sim. Ele foi pensado para agências e social media que cuidam de várias marcas: o trabalho é organizado por cliente, com equipe, biblioteca de mídia e métricas separadas.' },
      { q: 'O Postline mostra métricas e relatórios do Instagram?', a: 'Mostra alcance, curtidas, salvamentos e comparativos por cliente, a partir da API oficial do Instagram.' },
      { q: 'Quais redes sociais o Postline atende?', a: 'O Instagram, com contas profissionais conectadas pelo login oficial, e o TikTok, onde é possível ver os vídeos e publicar.' },
      { q: 'Como o Postline acessa a minha conta do Instagram?', a: 'Pelo login oficial do Instagram. Ele só acessa o que você autoriza e você pode revogar o acesso a qualquer momento, em Configurações ou pelo próprio Instagram.' },
      { q: 'A IA publica sozinha?', a: 'Não por conta própria. Roteiros, legendas e criativos chegam prontos para você revisar antes de usar.' },
      { q: 'Dá para instalar o Postline no celular?', a: 'Sim. Ele funciona no navegador e também pode ser instalado como aplicativo.' },
      { q: 'Quanto custa o Postline?', a: 'Os planos e os créditos de IA ficam na área de Planos, dentro do aplicativo. Para tirar dúvidas, chame a equipe da Infuse pelo WhatsApp.' },
    ],
  },
];
