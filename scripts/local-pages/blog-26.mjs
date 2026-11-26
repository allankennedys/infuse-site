export const BLOG_26 = [
  {
    slug: 'como-saber-qual-anuncio-gerou-conversa-no-whatsapp',
    categoria: 'Rastreamento de WhatsApp',
    capa: 'crm-funil',
    teste: true,
    publicado: '2026-11-16',
    relacionados: ['crm'],
    title: 'Como saber qual anúncio gerou conversa no WhatsApp',
    description:
      'Veja como ligar anúncio, conversa e venda no WhatsApp, o que a Meta informa na primeira mensagem e o que o Infuse CRM registra da origem do lead.',
    h1: 'Como saber qual anúncio gerou conversa no WhatsApp',
    lede:
      'Você investe em anúncios, o telefone toca, mas na hora de fechar a conta ninguém sabe qual campanha trouxe aquele cliente. Entenda o que dá para identificar, o que fica de fora e como ligar anúncio, conversa e venda.',
    minutos: 6,
    secoes: [
      {
        h2: 'Por que o WhatsApp esconde a origem do cliente',
        p: [
          'Num site, a ferramenta de análise enxerga de onde veio a visita. No WhatsApp o cliente sai do anúncio e entra numa conversa privada, dentro de outro aplicativo. Quem olha só a caixa de mensagens vê um número de telefone e um "oi", sem nenhuma pista de qual anúncio provocou o contato.',
          'É por isso que muita empresa mede o anúncio pela quantidade de mensagens recebidas e para por aí. O problema é que mensagem não é venda. Sem ligar a conversa ao anúncio e depois à compra, você não sabe se a campanha barata está trazendo curioso e a mais cara está trazendo comprador. Se quiser a visão geral do tema, ela está em <a href="/blog/rastreamento-no-whatsapp-o-que-e/">rastreamento no WhatsApp: o que é</a>.',
        ],
      },
      {
        h2: 'O que a Meta informa quando o cliente chega por anúncio',
        p: [
          'Nos anúncios que abrem o WhatsApp (os de clique para WhatsApp, explicados em <a href="/blog/campanha-de-clique-para-whatsapp-como-funciona/">campanha de clique para WhatsApp</a>), a primeira mensagem do cliente chega acompanhada de dados do anúncio. Entre eles estão:',
        ],
        lista: [
          '<strong>Identificador do clique.</strong> Um código único daquele clique, que a Meta usa depois para atribuir uma venda ao anúncio.',
          '<strong>Identificador do anúncio.</strong> Indica qual criativo gerou a conversa.',
          '<strong>Endereço de origem e aplicativo.</strong> Mostra se o clique veio do Instagram ou do Facebook.',
          '<strong>Título do anúncio.</strong> Ajuda a reconhecer a peça sem abrir o gerenciador.',
        ],
        depois: [
          'Esses dados só existem na primeira conversa originada pelo anúncio. Se o cliente apagar a conversa, trocar de número ou voltar dias depois por outro caminho, o rastro se perde. Esse é um limite real e vale conhecê-lo antes de prometer precisão total para si mesmo ou para o time.',
        ],
      },
      {
        h2: 'Do anúncio à venda: os três elos que precisam existir',
        p: ['Saber qual anúncio gerou uma conversa é só o primeiro passo. Para fechar a conta, três elos precisam estar conectados:'],
        passos: [
          '<strong>Anúncio para conversa.</strong> A origem do clique é guardada junto ao contato assim que a primeira mensagem chega.',
          '<strong>Conversa para etapa do funil.</strong> O contato avança (atendimento, proposta, fechado) e cada mudança fica registrada com data.',
          '<strong>Etapa para venda.</strong> Quando o negócio fecha, a venda é lançada com valor e data, ligada ao mesmo contato que veio do anúncio.',
        ],
        depois: [
          'Se qualquer elo for feito de cabeça ou em planilha separada, ele quebra. O atendente esquece de anotar a origem, a venda é lançada dias depois, o contato muda de número. Quanto mais automático for o registro, mais confiável é a conta.',
        ],
      },
      {
        h2: 'O que o Infuse CRM registra da origem do lead',
        p: [
          'No Infuse CRM, o contato nasce na primeira mensagem e, quando ela vem de um anúncio de clique para WhatsApp, a origem é reconhecida sozinha: o sistema guarda o identificador do clique, do anúncio, o aplicativo de entrada (Instagram ou Facebook) e o título do anúncio. Ninguém precisa digitar nada para isso acontecer.',
          'A origem aparece na lista de contatos, onde você pode filtrar por ela, e alimenta os relatórios de Funil e de Vendas, que mostram quantos leads de cada origem fecharam e quanto cada origem vendeu. Origens que não vêm de anúncio, como indicação ou contato direto, também ficam separadas, o que evita misturar tudo no mesmo número. O CRM conecta o WhatsApp por QR Code, e as conversas continuam no número que sua equipe já usa.',
        ],
        img: 'crm-contatos',
        destaque:
          'Quando o lead chega por clique em anúncio, a origem é registrada automaticamente. Quando chega por outro caminho, o sistema não inventa uma origem: ela fica como declarada pela equipe ou em branco.',
      },
      {
        h2: 'Limites honestos: o que continua sem resposta',
        p: ['Nenhum método rastreia tudo. Os pontos que mais derrubam a precisão são:'],
        lista: [
          'Cliente que vê o anúncio, procura o número no Google ou no perfil e chama por conta própria. A conversa parece orgânica, mas teve influência do anúncio.',
          'Link de WhatsApp comum (sem passar por anúncio de clique para WhatsApp) não traz dados do anúncio. Para esses casos, veja <a href="/blog/utm-e-whatsapp-como-rastrear-origem-do-lead/">UTM e WhatsApp</a>.',
          'Cliente que já era contato antigo e volta por um anúncio novo. A origem registrada é a da primeira conversa.',
          'Venda fechada por telefone ou presencial e que não foi lançada no sistema.',
        ],
        depois: [
          'Por isso o objetivo realista é uma leitura confiável da tendência (quais campanhas trazem gente que compra), não uma contagem perfeita de cada real investido.',
        ],
      },
      {
        h2: 'O papel do atendimento em toda essa conta',
        p: [
          'Ligar anúncio a venda não depende só de tecnologia. A conversa é onde a venda acontece, e uma conversa respondida tarde ou sem acompanhamento desperdiça um clique que já foi pago. Por isso, quem mede a origem também precisa olhar a velocidade de resposta e o que acontece com o contato depois da primeira troca de mensagens.',
          'Um bom hábito é revisar, uma vez por semana, os contatos que vieram de anúncio e não avançaram no funil. Ler essas conversas costuma revelar o motivo mais rápido do que qualquer relatório: pergunta sem resposta, preço pedido cedo demais, promessa do anúncio que a loja não cumpre. A leitura de <a href="/blog/como-medir-atendimento-no-whatsapp-relatorios/">como medir o atendimento no WhatsApp</a> ajuda a transformar isso em rotina.',
        ],
      },
      {
        h2: 'Como começar a medir ainda esta semana',
        p: [
          'O caminho mais curto é ter o WhatsApp da empresa conectado a um CRM que guarde a origem, ativar anúncios de clique para WhatsApp e registrar toda venda no mesmo lugar onde a conversa aconteceu. Para organizar o que entra, vale também revisar como você trata os contatos novos em <a href="/blog/como-organizar-leads-do-whatsapp/">como organizar leads do WhatsApp</a>.',
          'No Infuse CRM você pode testar isso por 7 dias grátis, com o seu próprio número, e conferir se a origem dos primeiros leads de anúncio aparece como esperado antes de decidir qualquer coisa.',
        ],
      },
    ],
    faq: [
      {
        q: 'Dá para saber qual anúncio gerou uma conversa no WhatsApp sem CRM?',
        a: 'Até certo ponto. O gerenciador da Meta mostra quantas conversas cada anúncio iniciou, mas não diz quem comprou. Para ligar a conversa à venda, é preciso guardar a origem junto ao contato e registrar a compra, e isso é o que um CRM faz.',
      },
      {
        q: 'Funciona com o WhatsApp Business comum?',
        a: 'O anúncio de clique para WhatsApp funciona com ele, mas o aplicativo não guarda a origem de forma organizada. Na prática, as pessoas anotam à mão ou esquecem. Um CRM conectado ao número resolve o registro.',
      },
      {
        q: 'O Infuse CRM identifica a origem de qualquer conversa?',
        a: 'Não. Ele reconhece automaticamente a origem de quem chega por anúncio de clique para WhatsApp. Para os demais casos, a origem pode ser informada pela equipe, e o relatório deixa claro o que veio de anúncio e o que não veio.',
      },
      {
        q: 'Preciso de um número de WhatsApp novo?',
        a: 'Não. O CRM conecta o número que você já usa por QR Code, e a equipe continua atendendo no mesmo número.',
      },
    ],
  },
  {
    slug: 'anuncios-click-to-whatsapp-rastreamento-no-crm',
    categoria: 'Rastreamento de WhatsApp',
    capa: 'crm-atendimento',
    teste: true,
    publicado: '2026-11-16',
    relacionados: ['crm'],
    title: 'Anúncios Click to WhatsApp: rastreamento no CRM',
    description:
      'Como acompanhar a conversa de um anúncio Click to WhatsApp até a venda e ler o relatório Meta Ads do Infuse CRM, com ROAS, CAC e leitura por anúncio.',
    h1: 'Anúncios Click to WhatsApp: como rastrear até a venda no CRM',
    lede:
      'O anúncio que abre o WhatsApp encurta o caminho do clique à conversa, mas o gerenciador de anúncios para de contar justamente aí. Veja como seguir o cliente até a venda e o que o relatório Meta Ads do CRM mostra.',
    minutos: 6,
    secoes: [
      {
        h2: 'Onde o gerenciador de anúncios para de contar',
        p: [
          'Num anúncio de clique para WhatsApp, o resultado que a Meta mede é a conversa iniciada. Isso é útil para saber se o criativo chama atenção, mas diz pouco sobre negócio. Uma conversa pode ser uma dúvida de preço, um engano, um concorrente curioso ou uma venda de verdade.',
          'A diferença entre os anúncios só aparece quando você olha o que aconteceu depois da conversa. Se quiser rever como esse tipo de campanha funciona por dentro, leia <a href="/blog/campanha-de-clique-para-whatsapp-como-funciona/">campanha de clique para WhatsApp</a>. Aqui o foco é o que vem depois do clique.',
        ],
      },
      {
        h2: 'O ciclo completo: do anúncio ao relatório',
        p: ['No Infuse CRM, o acompanhamento de um anúncio de clique para WhatsApp segue estes passos:'],
        passos: [
          '<strong>O cliente clica e manda a primeira mensagem.</strong> O CRM cria o contato e guarda os dados do anúncio que vieram com a mensagem.',
          '<strong>A equipe atende.</strong> A conversa fica na fila, com atendente definido, e o contato é movido pelas etapas do funil.',
          '<strong>A venda é lançada.</strong> Valor e data entram no contato, e a etapa de conversão registra o fechamento.',
          '<strong>A venda vai para a Meta.</strong> Vendas de clientes que vieram de anúncio são enviadas pela Conversions API, ligadas ao clique original.',
          '<strong>O relatório cruza investimento e receita.</strong> A aba Meta ADS junta o que foi gasto na Meta com o que esses clientes realmente compraram.',
        ],
        depois: [
          'Repare que a equipe só faz o que já faria: atender e lançar a venda. O restante acontece a partir desses registros.',
        ],
      },
      {
        h2: 'O que o relatório Meta ADS do CRM mostra',
        p: [
          'A aba Meta ADS coloca o investimento da Meta ao lado da receita dos clientes que vieram de anúncio. Os indicadores principais são:',
        ],
        lista: [
          '<strong>ROAS.</strong> A receita gerada para cada unidade de verba investida em anúncio.',
          '<strong>CAC.</strong> Quanto custou, em média, conquistar cada cliente novo vindo do anúncio.',
          '<strong>Ticket médio.</strong> O valor médio das compras desses clientes.',
          '<strong>LTV.</strong> O quanto esses clientes compraram ao longo do tempo, incluindo recompras.',
          '<strong>Leitura por campanha e por anúncio.</strong> Dá para ver qual criativo traz cliente que compra, não só quem manda mensagem.',
        ],
        depois: [
          'O CRM trabalha com contas de anúncio da Meta, e a credencial de acesso fica restrita ao administrador. As demais abas de relatório (Atendimento, Vendas, Funil, Jornada e Recompra) ajudam a entender o que acontece entre a conversa e a compra.',
        ],
        img: 'crm-funil',
      },
      {
        h2: 'Como interpretar sem se enganar',
        p: [
          'Relatório bonito não elimina a necessidade de pensar. Alguns cuidados ajudam a não tirar conclusões erradas:',
        ],
        lista: [
          '<strong>Respeite o tempo de fechamento.</strong> Se o seu ciclo de venda leva dias, uma campanha recente parecerá pior do que é, porque as vendas ainda não aconteceram.',
          '<strong>Compare períodos equivalentes.</strong> A Meta e o CRM podem tratar a janela de datas de formas diferentes, e o relatório já ajusta isso, mas vale manter o mesmo intervalo ao comparar semanas.',
          '<strong>Não corte anúncio com pouca amostra.</strong> Um criativo com poucas conversas pode ter um resultado ruim ou ótimo por acaso.',
          '<strong>Olhe a qualidade do atendimento.</strong> Um anúncio bom pode parecer fraco se as mensagens ficam horas sem resposta. Veja <a href="/blog/tempo-de-primeira-resposta-whatsapp/">tempo de primeira resposta no WhatsApp</a>.',
        ],
        destaque:
          'O relatório responde "qual anúncio trouxe quem comprou", mas não explica sozinho o porquê. Combine os números com a conversa real: leia o que os clientes perguntam antes de comprar.',
      },
      {
        h2: 'O que ele não faz',
        p: [
          'Para evitar expectativa errada: o CRM não cria nem edita seus anúncios, não faz disparo em massa e não substitui a análise de quem gerencia as campanhas. Ele registra, cruza e reporta. Se o anúncio é fraco, o relatório apenas mostra que é fraco.',
          'Também não atribui vendas a anúncios quando o clique não foi capturado. Quem chegou por outro caminho aparece em outra origem, e isso é proposital: misturar tudo inflaria o resultado da mídia paga. Para entender como decidir entre canais, veja <a href="/blog/google-ads-ou-meta-ads-onde-anunciar/">Google Ads ou Meta Ads</a>.',
        ],
      },
      {
        h2: 'Rotina semanal de análise',
        p: [
          'Rastrear só ajuda se alguém olhar os dados com regularidade. Uma rotina simples já resolve: toda semana, abra o relatório com o mesmo intervalo, veja quais anúncios trouxeram clientes que compraram, quais trouxeram só conversa e quais não trouxeram nada.',
          'Depois, converse com quem atende. Ele sabe se o anúncio atraiu o público certo, se as perguntas mais comuns indicam uma promessa confusa e se há mensagens que ficam sem resposta. O número aponta o problema, a conversa explica. Decisões de pausar ou escalar um anúncio ficam bem mais seguras quando as duas fontes concordam.',
        ],
      },
      {
        h2: 'Como validar na sua operação',
        p: [
          'O jeito mais seguro de confirmar que o rastreamento funciona no seu caso é fazer um teste controlado: abra o anúncio no seu celular, clique para o WhatsApp, mande uma mensagem e confira se o contato aparece no CRM com a origem de anúncio. Depois lance uma venda de teste e acompanhe até o relatório.',
          'O teste grátis do Infuse CRM dura 7 dias e permite fazer exatamente essa checagem com o seu número, antes de qualquer compromisso. Se precisar de ajuda para estruturar as campanhas, a página de <a href="/gestao-de-trafego/">gestão de tráfego</a> explica como trabalhamos.',
        ],
      },
    ],
    faq: [
      {
        q: 'O relatório Meta Ads do CRM substitui o Gerenciador de Anúncios?',
        a: 'Não. O Gerenciador continua sendo onde você cria e ajusta campanhas. O relatório do CRM complementa com o que o gerenciador não sabe: quem comprou e quanto.',
      },
      {
        q: 'Preciso mexer nos anúncios para o rastreamento funcionar?',
        a: 'Os anúncios precisam ser de clique para WhatsApp, porque é neles que a Meta envia os dados do clique junto da primeira mensagem. Fora isso, o registro da origem é automático.',
      },
      {
        q: 'Quem pode ver o relatório Meta ADS?',
        a: 'O administrador escolhe quais abas de relatório ficam visíveis e quem tem acesso a elas, e a credencial da Meta é restrita ao administrador.',
      },
      {
        q: 'O ROAS do CRM sempre bate com o da Meta?',
        a: 'Nem sempre. Cada ferramenta usa suas regras de atribuição e de data, então pequenas diferenças são normais. Use o CRM como leitura do que virou venda registrada na sua operação.',
      },
    ],
  },
  {
    slug: 'meta-conversions-api-whatsapp-lead-e-compra',
    categoria: 'Rastreamento de WhatsApp',
    capa: 'crm-funil',
    teste: true,
    publicado: '2026-11-16',
    relacionados: ['crm'],
    title: 'Meta Conversions API no WhatsApp: enviar a compra à Meta',
    description:
      'Como a API de Conversões da Meta recebe vendas do WhatsApp a partir do CRM, por que isso ajuda a otimizar anúncios e quais são os limites dessa integração.',
    h1: 'Meta Conversions API no WhatsApp: como enviar a compra à Meta',
    lede:
      'Quando a venda acontece no WhatsApp, a Meta não fica sabendo. A Conversions API resolve isso ao receber o resultado direto do seu sistema. Entenda como funciona, o que melhora e onde estão os limites.',
    minutos: 6,
    secoes: [
      {
        h2: 'O problema: a Meta otimiza sem ver a venda',
        p: [
          'O sistema de entrega de anúncios da Meta aprende com os resultados que recebe. Se o único resultado conhecido for "conversa iniciada", ele procura mais gente que inicia conversa, o que nem sempre é gente que compra. A venda, que é o evento que importa, acontece fora do alcance dele.',
          'A Conversions API é um canal para o seu sistema avisar a Meta diretamente: "este clique virou venda". Para a base conceitual, vale ler <a href="/blog/o-que-e-pixel-e-api-de-conversoes-meta/">o que é Pixel e API de Conversões da Meta</a>. Aqui o foco é o caminho específico do WhatsApp.',
        ],
      },
      {
        h2: 'Lead e compra: pesos diferentes para a Meta',
        p: [
          'Em campanhas de WhatsApp, costuma-se pensar em dois momentos que poderiam ser informados à Meta:',
        ],
        lista: [
          '<strong>Lead.</strong> A pessoa demonstrou interesse real, por exemplo respondeu às perguntas de qualificação. É um sinal mais cedo no ciclo, útil quando vendas são raras ou demoradas.',
          '<strong>Compra.</strong> O negócio fechou e a venda foi registrada, com valor. É o sinal mais forte, porque mede o resultado real.',
        ],
        depois: [
          'O Infuse CRM envia à Meta o evento de compra. Os leads continuam sendo contados e analisados nos relatórios do próprio CRM (funil por origem, taxa de conversão), mas não são reenviados como evento separado. Se a sua estratégia depende de otimizar por um evento de lead qualificado, confirme se isso atende ao que você precisa antes de decidir.',
        ],
      },
      {
        h2: 'Como a compra chega à Meta a partir do CRM',
        p: ['O fluxo no Infuse CRM, resumido, é este:'],
        passos: [
          '<strong>O lead chega por anúncio de clique para WhatsApp</strong> e o CRM guarda o identificador do clique.',
          '<strong>A venda é lançada</strong> no contato, com valor e data.',
          '<strong>O CRM coloca o evento numa fila.</strong> Se a Meta estiver fora do ar, o evento é reprocessado depois, e mover um cartão no funil continua instantâneo.',
          '<strong>O evento de compra é enviado</strong> com o valor da venda e o identificador do clique, para a Meta ligar a compra ao anúncio.',
          '<strong>Cada venda sai uma vez.</strong> Há identificadores por evento e por venda para evitar contagem em dobro. Cliente que compra de novo gera um novo evento, com o valor daquela compra.',
        ],
        img: 'crm-funil',
      },
      {
        h2: 'Por que isso pode melhorar a otimização',
        p: [
          'Quando a Meta recebe compras ligadas a cliques, ela passa a ter um sinal melhor para aprender que tipo de pessoa compra, e não só quem conversa. Com o tempo, isso pode ajudar a entrega a priorizar perfis mais próximos de quem fecha negócio.',
          'A palavra importante é "pode". A melhoria depende do volume de vendas enviadas, da qualidade do anúncio, do público e de outros fatores que o CRM não controla. Não existe garantia de queda de custo nem de aumento de vendas só por ativar a integração. Para entender como isso entra na conta de retorno, veja <a href="/blog/roi-de-trafego-pago-com-whatsapp-como-fechar-a-conta/">ROI de tráfego pago com WhatsApp</a>.',
        ],
        destaque:
          'Enviar a venda para a Meta é dar mais informação ao algoritmo, não um atalho para resultado. O ganho depende de volume, de anúncio bom e de atendimento que realmente fecha.',
      },
      {
        h2: 'Limites que você precisa conhecer',
        p: ['Alguns pontos são regras da Meta e outros são decisões de projeto do CRM para não contaminar seus números:'],
        lista: [
          '<strong>Só vendas de anúncio.</strong> Compra de indicação, orgânico ou base antiga não é enviada como se fosse de anúncio, para não inflar o resultado da mídia paga.',
          '<strong>Janela de sete dias.</strong> A Meta aceita eventos com data de até sete dias atrás. Venda lançada com muito atraso não consegue entrar com a data real.',
          '<strong>Sem clique, sem atribuição.</strong> O identificador do clique é o que liga a venda ao anúncio. Sem ele, a Meta não tem como atribuir.',
          '<strong>Registro depende da equipe.</strong> Se a venda não for lançada no CRM, ela não existe para a integração.',
        ],
        depois: [
          'Esses limites explicam por que organização do time importa tanto quanto a tecnologia. Veja como estruturar isso em <a href="/blog/funil-de-vendas-no-whatsapp-etapas-na-pratica/">funil de vendas no WhatsApp: etapas na prática</a>.',
        ],
      },
      {
        h2: 'Quando vale (ou não) investir nessa integração',
        p: [
          'A integração faz mais sentido para quem já investe de forma recorrente em anúncios de clique para WhatsApp e fecha a venda nessa mesma conversa. Se o volume de vendas for muito baixo, a Meta recebe poucos sinais e o efeito na otimização tende a ser pequeno, ainda que os relatórios do CRM continuem úteis.',
          'Se a sua venda acontece em outro canal, por exemplo presencialmente sem registro, a integração terá pouco o que enviar. Nesse caso, o primeiro passo é disciplinar o lançamento das vendas, e só depois pensar em otimização automática.',
        ],
      },
      {
        h2: 'Como testar a integração com segurança',
        p: [
          'Antes de confiar nos números, faça um fluxo completo de teste: clique em um anúncio seu, converse, lance uma venda e depois verifique no relatório do CRM e nos eventos da sua conta da Meta se a compra apareceu uma única vez. Quem configura as credenciais da Meta no CRM é o administrador da conta.',
          'Você pode fazer esse teste durante os 7 dias grátis do Infuse CRM, usando o seu WhatsApp conectado por QR Code. Se o fluxo estiver confuso, uma conversa com quem cuida das suas campanhas ajuda; a Infuse também atua com <a href="/gestao-de-trafego/">gestão de tráfego</a>.',
        ],
      },
    ],
    faq: [
      {
        q: 'A Conversions API funciona sem o pixel no site?',
        a: 'Para campanhas de clique para WhatsApp, o evento vem do sistema que registra a venda, não do site. Por isso a venda pode ser enviada mesmo sem pixel, desde que o clique tenha sido identificado.',
      },
      {
        q: 'O Infuse CRM envia o evento de lead para a Meta?',
        a: 'O CRM envia o evento de compra. Os leads são analisados nos relatórios do próprio CRM, como funil e conversão por origem.',
      },
      {
        q: 'Posso enviar vendas antigas para a Meta?',
        a: 'Só dentro da janela aceita pela Meta, que é de sete dias. Vendas mais antigas não entram com a data real e, portanto, ficam só nos relatórios do CRM.',
      },
      {
        q: 'Isso exige a API Oficial do WhatsApp?',
        a: 'No Infuse CRM, não. O WhatsApp é conectado por QR Code. A integração com a Meta usa os dados do clique do anúncio e a Conversions API.',
      },
    ],
  },
  {
    slug: 'utm-e-whatsapp-como-rastrear-origem-do-lead',
    categoria: 'Rastreamento de WhatsApp',
    capa: 'crm-contatos',
    teste: true,
    publicado: '2026-11-16',
    relacionados: ['crm'],
    title: 'UTM e WhatsApp: como rastrear a origem do lead',
    description:
      'Entenda por que UTM não chega sozinha ao WhatsApp, quais alternativas existem para identificar a origem do lead e como complementar o rastreamento com um CRM.',
    h1: 'UTM e WhatsApp: como rastrear a origem do lead',
    lede:
      'UTM funciona muito bem para visitas em site, mas a conversa no WhatsApp não carrega esses parâmetros. Veja onde a UTM se perde, quais caminhos complementam e como não ficar sem origem nenhuma.',
    minutos: 6,
    secoes: [
      {
        h2: 'Onde a UTM se perde no caminho até o WhatsApp',
        p: [
          'A UTM é um conjunto de parâmetros colocado no final de um link, que o Google Analytics lê quando a pessoa chega ao site. Se você ainda não conhece o básico, o artigo <a href="/blog/o-que-sao-utms-e-como-usar/">o que são UTMs e como usar</a> explica a montagem. O ponto aqui é outro: o que acontece quando o destino é o WhatsApp.',
          'Um link do tipo wa.me abre a conversa, mas o WhatsApp não repassa os parâmetros da URL para o seu atendente nem para qualquer sistema. A pessoa clica, a UTM existe no link, e a conversa começa sem ela. A informação some na passagem de um aplicativo para outro.',
        ],
      },
      {
        h2: 'Três cenários e o que cada um permite rastrear',
        p: ['Na prática, o lead chega ao WhatsApp por caminhos diferentes, e cada um permite um nível de rastreamento:'],
        lista: [
          '<strong>Anúncio de clique para WhatsApp.</strong> A Meta envia dados do anúncio com a primeira mensagem. É o caso mais completo, e a UTM nem é necessária para saber o anúncio de origem.',
          '<strong>Site ou landing page com botão de WhatsApp.</strong> A UTM é lida na visita ao site. A conversa depois precisa ser ligada a essa visita por algum identificador.',
          '<strong>Link solto no Instagram, bio, e-mail ou QR Code.</strong> Não há dados automáticos. O que existe é um link diferente por canal e a boa vontade de quem atende em perguntar.',
        ],
        depois: [
          'Entender em qual cenário cada campanha cai evita a frustração de montar UTMs detalhadas e depois descobrir que o WhatsApp não as leva adiante.',
        ],
      },
      {
        h2: 'Como complementar a UTM para o WhatsApp',
        p: ['Algumas práticas simples ajudam a recuperar parte da informação que a UTM não consegue carregar:'],
        passos: [
          '<strong>Use um número ou link de entrada por canal</strong> quando possível, ou uma mensagem inicial pré-preenchida diferente em cada link (por exemplo, uma palavra de referência no texto). Assim a primeira mensagem já diz de onde veio.',
          '<strong>Registre o canal logo no primeiro atendimento.</strong> Uma etiqueta ou campo de origem preenchido pelo atendente é imperfeito, mas melhor do que nada.',
          '<strong>Mantenha a nomenclatura das UTMs padronizada</strong> para o tráfego que passa pelo site, e leve a mesma lógica de nomes para as origens do CRM.',
          '<strong>Revise as origens com frequência.</strong> Conversas marcadas como "outros" ou sem origem mostram onde o processo está falhando.',
        ],
        img: 'crm-contatos',
      },
      {
        h2: 'Onde o CRM entra nessa conta',
        p: [
          'A UTM identifica a campanha na visita. O CRM guarda o que acontece depois: a conversa, as etapas, a venda. O valor está em juntar as duas pontas. No Infuse CRM, o contato tem um campo de origem que pode ser filtrado na lista e analisado nos relatórios de Funil e de Vendas, com taxa de conversão e receita por origem.',
          'Quando o lead chega por anúncio de clique para WhatsApp, a origem é reconhecida automaticamente. Para os outros caminhos, a origem pode ser definida pela equipe, e campos personalizados e etiquetas ajudam a guardar detalhes como a campanha ou a palavra de referência. O CRM não lê UTM de links soltos do WhatsApp, porque o próprio WhatsApp não entrega esse dado. Para a visão do conjunto, leia <a href="/blog/como-rastrear-de-onde-vem-seus-clientes/">como rastrear de onde vêm seus clientes</a>.',
        ],
        destaque:
          'Não existe UTM mágica para o WhatsApp. O que existe é combinar origem automática nos anúncios de clique para WhatsApp com registro disciplinado nos demais canais.',
      },
      {
        h2: 'Erros comuns ao misturar UTM e WhatsApp',
        p: ['Alguns tropeços aparecem sempre que a operação tenta forçar a UTM onde ela não alcança:'],
        lista: [
          'Colocar UTM em link de wa.me achando que o WhatsApp vai reportar o parâmetro.',
          'Usar nomes diferentes para o mesmo canal ("insta", "instagram", "ig"), o que fragmenta os relatórios.',
          'Contar mensagens como se fossem leads qualificados, sem olhar para a etapa seguinte do funil.',
          'Deixar a origem em branco porque "o cliente sabe de onde veio". O dado precisa existir no sistema.',
        ],
      },
      {
        h2: 'Como a mensagem inicial ajuda a identificar a origem',
        p: [
          'Quando o link não é de anúncio, a primeira mensagem pré-preenchida é uma aliada barata. Em vez de um "olá" genérico, o texto pode trazer uma referência ao canal ou à oferta, como o nome da promoção ou do material que o cliente viu. Ao ler a conversa, o atendente já sabe a origem e pode registrá-la sem perguntar.',
          'Isso não é rastreamento perfeito, porque o cliente pode apagar ou alterar o texto, mas na prática a maioria envia a mensagem como veio. Use uma palavra curta e padronizada por canal, e anote a lista de palavras em um lugar que toda a equipe consulte.',
        ],
      },
      {
        h2: 'Um plano mínimo para começar',
        p: [
          'Se hoje você não rastreia nada, comece pequeno: separe seus canais de entrada, defina nomes de origem em uma lista curta, peça aos atendentes que confirmem o canal na primeira conversa e use anúncios de clique para WhatsApp nas campanhas pagas. Depois de algumas semanas, olhe o relatório de vendas por origem e veja qual canal traz quem compra. O passo a passo da análise está em <a href="/blog/relatorio-de-vendas-por-origem-whatsapp/">relatório de vendas por origem no WhatsApp</a>.',
          'Você pode montar esse fluxo no Infuse CRM durante o teste grátis de 7 dias, conectando seu WhatsApp por QR Code e conferindo como as origens aparecem na lista de contatos e nos relatórios.',
        ],
      },
    ],
    faq: [
      {
        q: 'UTM funciona em link de WhatsApp?',
        a: 'O link aceita os parâmetros, mas o WhatsApp não os repassa para a conversa nem para seu sistema. Por isso a UTM sozinha não identifica a origem de quem chama no WhatsApp.',
      },
      {
        q: 'Como saber a origem de quem chama pelo site?',
        a: 'A UTM é lida na visita ao site. Para ligar a visita à conversa é preciso um identificador compartilhado ou um registro de origem feito no atendimento. Sem isso, a visita e a conversa ficam em bases separadas.',
      },
      {
        q: 'O Infuse CRM lê UTM?',
        a: 'Ele reconhece automaticamente a origem de anúncios de clique para WhatsApp e permite registrar a origem dos demais contatos. Não lê UTM de link comum de WhatsApp, pois esse dado não chega à conversa.',
      },
      {
        q: 'Vale a pena usar UTM mesmo assim?',
        a: 'Vale para o tráfego que passa por site e landing page, onde o Analytics lê o parâmetro. Mantenha os nomes padronizados e use o CRM para o que acontece depois do primeiro contato.',
      },
    ],
  },
  {
    slug: 'como-calcular-custo-por-lead-whatsapp',
    categoria: 'Rastreamento de WhatsApp',
    capa: 'crm-funil',
    teste: true,
    publicado: '2026-11-16',
    relacionados: ['crm'],
    title: 'Como calcular o custo por lead no WhatsApp',
    description:
      'Aprenda a calcular custo por conversa, custo por lead qualificado e custo por venda no WhatsApp, com as fórmulas e os cuidados para não se enganar nos números.',
    h1: 'Como calcular o custo por lead no WhatsApp',
    lede:
      'Dividir a verba pelo número de mensagens parece simples, mas esconde muita coisa. Veja como calcular custo por conversa, por lead qualificado e por venda, e qual deles realmente guia uma decisão.',
    minutos: 6,
    secoes: [
      {
        h2: 'Por que "custo por lead" no WhatsApp precisa de definição',
        p: [
          'Em anúncios que abrem o WhatsApp, a palavra "lead" pode significar coisas muito diferentes: qualquer pessoa que mandou mensagem, quem respondeu às perguntas iniciais ou quem pediu orçamento. Se cada pessoa da equipe usa um significado, o custo calculado não serve para comparar nada.',
          'O primeiro passo é escolher e escrever o que conta como lead na sua operação. Depois, calcule três custos diferentes, cada um respondendo a uma pergunta. Neste artigo usamos letras no lugar de valores, para você aplicar com os seus números.',
        ],
      },
      {
        h2: 'Os três custos que valem a pena calcular',
        p: ['Considere V como a verba investida em anúncios no período, C como o número de conversas iniciadas, Q como o número de leads qualificados e N como o número de vendas fechadas.'],
        lista: [
          '<strong>Custo por conversa = V ÷ C.</strong> Mede a eficiência do anúncio em gerar contato. É o número que o gerenciador de anúncios entrega.',
          '<strong>Custo por lead qualificado = V ÷ Q.</strong> Mede a eficiência em trazer gente com perfil e interesse, depois de aplicado o seu critério de qualificação.',
          '<strong>Custo por venda = V ÷ N.</strong> Mede o que realmente custou fechar cada cliente vindo de anúncio. É também conhecido como custo de aquisição de cliente (CAC).',
        ],
        depois: [
          'Os três usam o mesmo V, mas o denominador muda e, com ele, a conclusão. Um anúncio pode ter o menor custo por conversa e o maior custo por venda, se atrair muita gente sem intenção de compra.',
        ],
      },
      {
        h2: 'As taxas que ligam um custo ao outro',
        p: [
          'Entre as conversas e as vendas existem taxas que explicam por que os custos se afastam. Elas também mostram onde está o gargalo:',
        ],
        lista: [
          '<strong>Taxa de qualificação = Q ÷ C.</strong> Quantas conversas viram leads qualificados. Se for baixa, o problema pode estar no anúncio ou na promessa que ele faz.',
          '<strong>Taxa de fechamento = N ÷ Q.</strong> Quantos leads qualificados compram. Se for baixa, olhe atendimento, proposta e tempo de resposta.',
          '<strong>Relação entre os custos:</strong> custo por venda = custo por conversa ÷ (taxa de qualificação × taxa de fechamento).',
        ],
        depois: [
          'Essa última fórmula mostra que reduzir o custo por venda não depende só de baratear a conversa. Melhorar qualificação e fechamento tem o mesmo efeito. Para ir além, veja <a href="/blog/metricas-de-trafego-pago-que-importam/">métricas de tráfego pago que importam</a>.',
        ],
        destaque:
          'Custo por conversa é métrica de anúncio. Custo por venda é métrica de negócio. Decida orçamento olhando a segunda e use a primeira para diagnosticar.',
      },
      {
        h2: 'Passo a passo para calcular com dados reais',
        p: ['Para sair da teoria, siga esta sequência com o período que você quer analisar:'],
        passos: [
          '<strong>Defina o período</strong> e mantenha o mesmo para verba, conversas e vendas. Respeite o tempo médio de fechamento, para não cobrar da campanha vendas que ainda estão a caminho.',
          '<strong>Levante V</strong> a partir do gerenciador de anúncios, separando as campanhas que levam ao WhatsApp.',
          '<strong>Conte C, Q e N apenas de quem veio desses anúncios</strong>, não de toda a base de contatos.',
          '<strong>Aplique as três fórmulas</strong> e compare com o período anterior, não com números de outras empresas.',
          '<strong>Repita por campanha e por anúncio</strong> para descobrir onde o custo por venda está alto e onde está baixo.',
        ],
      },
      {
        h2: 'Como o Infuse CRM ajuda a ter os números certos',
        p: [
          'A parte difícil dessas contas é contar Q e N somente de quem veio de anúncio. No Infuse CRM, a origem do lead de anúncio de clique para WhatsApp é registrada automaticamente, o funil guarda as etapas por onde cada contato passou e as vendas ficam lançadas com valor e data. O relatório de Funil mostra quantos leads de cada origem chegaram à etapa de conversão, e o relatório Meta ADS cruza o investimento da Meta com a receita dos clientes de anúncio, exibindo CAC e ROAS por campanha e por anúncio.',
          'O CRM não define sozinho o que é um lead qualificado: isso depende das etapas e das etiquetas que a sua equipe usa. Vale escolher uma etapa do funil que represente a qualificação e manter o critério igual para todos os atendentes. Para organizar isso, veja <a href="/blog/como-organizar-leads-do-whatsapp/">como organizar leads do WhatsApp</a>.',
        ],
        img: 'crm-funil',
      },
      {
        h2: 'Como usar o resultado para decidir',
        p: [
          'Com os três custos calculados, a decisão fica mais objetiva. Se o custo por conversa é baixo e o custo por venda é alto, o anúncio atrai volume sem qualidade: revise público, promessa e perguntas de qualificação. Se o custo por conversa é alto, mas o custo por venda é razoável, a campanha atrai poucos, mas bons contatos, e pode merecer mais verba.',
          'Registre os resultados de cada período em uma planilha simples ou no próprio relatório, anotando o que foi alterado nas campanhas. Assim você percebe quais mudanças realmente fizeram diferença e quais foram coincidência.',
        ],
      },
      {
        h2: 'Armadilhas que distorcem o custo por lead',
        p: ['Algumas situações fazem o número parecer melhor ou pior do que é:'],
        lista: [
          'Contar como lead conversa de fornecedor, de cliente antigo ou de curioso sem interesse.',
          'Misturar vendas de indicação e de orgânico no cálculo do custo por venda de anúncio.',
          'Comparar períodos de tamanhos diferentes ou com sazonalidade diferente.',
          'Julgar uma campanha com poucas conversas. Amostra pequena oscila muito.',
          'Esquecer que parte das vendas de uma campanha pode acontecer semanas depois.',
        ],
        depois: [
          'Para fechar a conta completa incluindo retorno sobre o investimento, continue em <a href="/blog/roi-de-trafego-pago-com-whatsapp-como-fechar-a-conta/">ROI de tráfego pago com WhatsApp</a>.',
        ],
      },
    ],
    faq: [
      {
        q: 'Qual é a diferença entre custo por lead e custo por conversa no WhatsApp?',
        a: 'Custo por conversa divide a verba pelas mensagens iniciadas. Custo por lead divide pela quantidade de contatos que passaram no seu critério de qualificação. O segundo é mais próximo do negócio.',
      },
      {
        q: 'Qual custo devo usar para decidir onde investir?',
        a: 'O custo por venda, porque ele considera o que realmente fechou. Use o custo por conversa e por lead qualificado para entender em que ponto do caminho o resultado está se perdendo.',
      },
      {
        q: 'O CRM calcula o custo por lead automaticamente?',
        a: 'O relatório Meta ADS do Infuse CRM mostra investimento, receita, ROAS e CAC para clientes de anúncio. O critério de lead qualificado é definido por você por meio das etapas do funil.',
      },
      {
        q: 'Como tratar vendas que fecham semanas depois do anúncio?',
        a: 'Analise períodos mais longos e atribua a venda ao período em que ela foi fechada, sabendo que campanhas recentes ainda podem ter vendas por vir. Evite cortar um anúncio cedo demais.',
      },
    ],
  },
];
