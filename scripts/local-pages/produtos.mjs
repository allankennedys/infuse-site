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
      'Placas NFC para o seu estabelecimento: o cliente aproxima o celular e abre avaliação no Google, Pix, cardápio digital, site ou vários links.',
    eyebrow: 'Placas NFC · Infuse Software',
    h1: 'Placas NFC para estabelecimentos',
    lede:
      'O cliente aproxima o celular da placa e o link abre na hora: avaliação no Google, chave Pix, cardápio digital, site, Instagram, WhatsApp. Você escolhe um destino ou reúne vários em uma página só.',
    destaques: [
      'Abre por aproximação, sem instalar aplicativo',
      'Avaliação no Google, Pix, cardápio, site ou redes sociais',
      'Um link único ou uma página com vários links',
    ],
    objeto: 'sua placa NFC',
    passos: PASSOS_NFC,
    intro: {
      h2: 'Do balcão para o celular do cliente em um toque',
      p: [
        'Pedir que o cliente "procure a gente no Google e deixe uma avaliação" quase nunca funciona: ele concorda, sai da loja e esquece. O mesmo vale para o Instagram que ninguém anota e para a chave Pix ditada em voz alta no caixa.',
        'A placa NFC tira esse atrito. Ela fica no balcão, na mesa ou no caixa; o cliente encosta o celular e a página abre sozinha, pronta para avaliar, pagar ou ver o cardápio. NFC é a mesma tecnologia de aproximação usada nos cartões e está presente na maioria dos smartphones atuais.',
      ],
    },
    entregas: {
      h2: 'Para onde a placa NFC pode levar o seu cliente',
      sub: 'Você decide o destino. Pode ser um único link ou uma página com todos os que quiser.',
      items: [
        { t: 'Avaliação no Google', d: 'Abre direto a tela de avaliação do seu Perfil da Empresa no Google, enquanto o cliente ainda está no estabelecimento.' },
        { t: 'Pix', d: 'Abre uma página com a sua chave Pix e o código copia e cola, para o cliente pagar sem digitar nada.' },
        { t: 'Cardápio digital', d: 'Leva ao cardápio do restaurante. Conheça o <a href="/cardapio-digital/">cardápio digital inteligente com placa NFC</a>.' },
        { t: 'Site ou loja virtual', d: 'Abre o site, o catálogo ou a loja virtual do seu negócio.' },
        { t: 'WhatsApp e redes sociais', d: 'Inicia uma conversa no WhatsApp ou abre o perfil no Instagram para o cliente seguir.' },
        { t: 'Página com vários links', d: 'Uma página com a sua marca reunindo todos os destinos: avaliar, pagar, seguir, ver o cardápio e falar com você.' },
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
      { q: 'Funciona em qualquer celular?', a: 'Funciona na maioria dos smartphones atuais, Android e iPhone, que já vêm com leitor NFC. Em alguns aparelhos Android é preciso que o NFC esteja ativado nas configurações. Modelos mais antigos ou de entrada podem não ter o recurso.' },
      { q: 'O cliente paga o Pix só encostando o celular?', a: 'Não. A placa abre uma página com a sua chave Pix e o código copia e cola; o cliente conclui o pagamento no aplicativo do banco dele. Não é o Pix por aproximação oferecido pelas maquininhas e carteiras digitais.' },
      { q: 'A placa aumenta minhas avaliações no Google?', a: 'Ela facilita o caminho, porque o cliente chega à tela de avaliação em um toque, ainda dentro do estabelecimento. A decisão de avaliar continua sendo dele. As regras do Google não permitem oferecer brinde ou desconto em troca de avaliação, nem pedir apenas avaliações positivas.' },
      { q: 'Posso colocar vários links na mesma placa?', a: 'Pode. Nesse caso a placa abre uma página com a sua marca e os botões que você escolher: avaliação, Pix, cardápio, site, Instagram, WhatsApp e outros.' },
      { q: 'Dá para trocar os links depois?', a: 'Sim. Quando a placa aponta para a página de links, alteramos os destinos sem precisar trocar a placa.' },
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
      { q: 'Qual a diferença para um cardápio em PDF com QR Code?', a: 'O PDF é uma imagem do cardápio impresso: pesa para abrir, exige zoom e precisa ser refeito a cada alteração. O cardápio digital é uma página feita para celular, que você edita item por item, e a placa NFC dispensa abrir a câmera.' },
      { q: 'Quantas placas eu preciso?', a: 'Depende de como você quer usar: uma por mesa, algumas no balcão ou só no caixa. Avaliamos junto com você.' },
      { q: 'Quanto custa o cardápio digital com placa NFC?', a: 'Depende do tamanho do cardápio e da quantidade de placas. Chame no WhatsApp, conte sobre o seu restaurante e passamos os valores.' },
    ],
  },
];
