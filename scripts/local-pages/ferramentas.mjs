/**
 * Ferramentas gratuitas (`/ferramentas/<slug>/`): HTML + JS no próprio navegador,
 * sem enviar dados a servidor algum. O resultado pode ser levado ao WhatsApp
 * (a mensagem sai preenchida), que é onde o contato com a Infuse acontece.
 *
 * Regra de conteúdo: nenhuma ferramenta mostra preço da Infuse nem valores de
 * exemplo; os campos começam vazios e os resultados vêm só dos números que a
 * pessoa digitar. `cta` é o serviço relacionado; `guias` são slugs de artigos.
 */

const campo = (id, label, { hint = '', ph = '', tipo = 'text', modo = 'decimal' } = {}) =>
  `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${tipo}" ${tipo === 'text' ? `inputmode="${modo}" ` : ''}placeholder="${ph}" autocomplete="off">${hint ? `<small>${hint}</small>` : ''}</div>`;

const checklist = (grupos) =>
  grupos
    .map(
      (g) => `<fieldset class="chk"><legend>${g.t}</legend>${g.itens
        .map((i, k) => `<label><input type="checkbox" data-t="${i.replace(/"/g, '&quot;')}"><span>${i}</span></label>`)
        .join('')}</fieldset>`,
    )
    .join('');

export const FERRAMENTAS = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'gerador-de-link-whatsapp',
    nome: 'Gerador de link de WhatsApp',
    title: 'Gerador de Link de WhatsApp com Mensagem | Infuse',
    description:
      'Crie grátis um link wa.me do WhatsApp com mensagem pronta para colocar no site, no Instagram, em anúncios ou em uma placa NFC. Sem cadastro.',
    h1: 'Gerador de link de WhatsApp com mensagem pronta',
    lede:
      'Digite o número e a mensagem inicial e copie o link. O cliente clica e a conversa já abre com o texto preenchido. Funciona no site, no Instagram, em anúncios e em QR Codes.',
    cta: ['/placa-nfc/', 'Colocar esse link em uma placa NFC com QR Code', 'a placa NFC com o meu link de WhatsApp'],
    form:
      campo('num', 'Número do WhatsApp (com DDD)', { ph: 'DDD e número', modo: 'tel', hint: 'O código do Brasil (55) é adicionado automaticamente.' }) +
      `<div class="field"><label for="msg">Mensagem inicial (opcional)</label><textarea id="msg" rows="3" placeholder="Ex.: Olá! Vim pelo Instagram e quero um orçamento."></textarea></div>
      <button type="button" class="btn btn-wa" id="go">Gerar link</button>
      <div class="result" id="res" hidden>
        <label for="out">Seu link</label>
        <input id="out" type="text" readonly>
        <div class="cta-row"><button type="button" class="btn btn-ghost btn-sm" id="copy">Copiar link</button><a class="btn btn-ghost btn-sm" id="test" target="_blank" rel="noopener">Testar o link</a></div>
      </div>
      <p class="err" id="err" hidden></p>`,
    js: `
      $('go').onclick=function(){
        var n=$('num').value.replace(/\\D/g,''); if(n.length>=10&&n.length<=11)n='55'+n;
        if(!(n.length>=12&&n.length<=13)){$('err').textContent='Confira o número: use DDD e o número, só com dígitos.';$('err').hidden=false;$('res').hidden=true;return;}
        $('err').hidden=true; var m=$('msg').value.trim();
        var url='https://wa.me/'+n+(m?'?text='+encodeURIComponent(m):'');
        $('out').value=url; $('test').href=url; $('res').hidden=false; track('gerador-de-link-whatsapp');
      };
      $('copy').onclick=function(){var o=$('out');o.select();try{navigator.clipboard.writeText(o.value)}catch(e){document.execCommand('copy')}this.textContent='Copiado!';var b=this;setTimeout(function(){b.textContent='Copiar link'},1800)};
    `,
    explicacao: [
      {
        h2: 'Como usar o link gerado',
        p: [
          'O formato wa.me é o link oficial de conversa do WhatsApp. Ao clicar, o celular abre o app com o seu número e, se você escreveu uma mensagem, com o texto já preenchido. Isso reduz o atrito: o cliente só precisa tocar em enviar.',
          'Use o link no botão do site, na bio do Instagram, em anúncios que levam ao WhatsApp, em e-mails e no QR Code de uma placa. Escreva uma mensagem que diga de onde o cliente veio ("Vim pelo Instagram"), porque assim você sabe a origem de cada conversa.',
        ],
      },
      {
        h2: 'Mantenha a mensagem curta e específica',
        p: [
          'Uma mensagem inicial boa tem uma frase e identifica o assunto: "Olá! Quero um orçamento de site" funciona melhor que um texto longo. Mensagens genéricas atraem curiosos; as específicas já qualificam o contato antes da primeira resposta.',
          'Depois de gerar, teste o link no próprio celular. Se o seu atendimento cresce, vale organizar essas conversas em um <a href="/crm/">CRM com WhatsApp</a> para não perder nenhuma.',
        ],
      },
    ],
    faq: [
      { q: 'O link funciona para número comercial e pessoal?', a: 'Funciona nos dois, no WhatsApp comum e no WhatsApp Business. O link só abre a conversa com o número informado.' },
      { q: 'Preciso do código do país?', a: 'No Brasil, o código é 55. A ferramenta adiciona sozinha quando você digita só o DDD e o número.' },
      { q: 'A ferramenta guarda o meu número?', a: 'Não. Tudo é montado no seu próprio navegador, e nenhum dado é enviado ou armazenado.' },
      { q: 'Posso colocar o link em um QR Code?', a: 'Pode. Qualquer gerador de QR Code aceita o link. Se preferir uma placa pronta, a placa NFC da Infuse traz NFC e QR Code com destino editável.' },
    ],
    relacionados: ['placa-nfc', 'crm'],
    guias: ['placa-qr-code-whatsapp-como-usar', 'campanha-de-clique-para-whatsapp-como-funciona', 'como-vender-mais-pelo-whatsapp'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gerador-de-utm',
    nome: 'Gerador de UTM',
    title: 'Gerador de UTM Grátis para Campanhas | Infuse',
    description:
      'Monte links com parâmetros UTM (source, medium, campaign) para rastrear de onde vêm seus clientes no Google Analytics. Grátis, sem cadastro.',
    h1: 'Gerador de UTM para rastrear campanhas',
    lede:
      'Preencha a página de destino e os parâmetros e copie o link com UTM. Assim o Google Analytics mostra qual anúncio, post ou e-mail trouxe cada visita.',
    cta: ['/gestao-de-trafego/', 'Ver gestão de tráfego com rastreamento', 'rastrear a origem dos meus clientes'],
    form:
      campo('url', 'Página de destino', { ph: 'https://seusite.com.br/pagina', modo: 'url' }) +
      campo('src', 'Origem (utm_source)', { ph: 'facebook, google, instagram, newsletter' }) +
      campo('med', 'Mídia (utm_medium)', { ph: 'cpc, social, email, bio' }) +
      campo('camp', 'Campanha (utm_campaign)', { ph: 'nome da campanha' }) +
      campo('cont', 'Conteúdo (utm_content), opcional', { ph: 'qual anúncio ou botão' }) +
      campo('term', 'Termo (utm_term), opcional', { ph: 'palavra-chave' }) +
      `<label class="inl"><input type="checkbox" id="norm" checked><span>Padronizar em minúsculas e trocar espaços por hífen</span></label>
      <button type="button" class="btn btn-wa" id="go">Gerar link com UTM</button>
      <div class="result" id="res" hidden><label for="out">Link com UTM</label><textarea id="out" rows="3" readonly></textarea>
      <div class="cta-row"><button type="button" class="btn btn-ghost btn-sm" id="copy">Copiar link</button></div></div>
      <p class="err" id="err" hidden></p>`,
    js: `
      function nz(v){v=v.trim();return $('norm').checked?v.toLowerCase().replace(/\\s+/g,'-'):v;}
      $('go').onclick=function(){
        var u=$('url').value.trim(); if(u&&!/^https?:\\/\\//i.test(u))u='https://'+u;
        var s=nz($('src').value),m=nz($('med').value),c=nz($('camp').value),e;
        try{e=new URL(u)}catch(x){e=null}
        if(!e||!s||!m||!c){$('err').textContent='Preencha a página de destino, a origem, a mídia e a campanha.';$('err').hidden=false;$('res').hidden=true;return;}
        $('err').hidden=true;
        e.searchParams.set('utm_source',s);e.searchParams.set('utm_medium',m);e.searchParams.set('utm_campaign',c);
        if($('cont').value.trim())e.searchParams.set('utm_content',nz($('cont').value));
        if($('term').value.trim())e.searchParams.set('utm_term',nz($('term').value));
        $('out').value=e.toString();$('res').hidden=false;track('gerador-de-utm');
      };
      $('copy').onclick=function(){var o=$('out');o.select();try{navigator.clipboard.writeText(o.value)}catch(e){document.execCommand('copy')}this.textContent='Copiado!';var b=this;setTimeout(function(){b.textContent='Copiar link'},1800)};
    `,
    explicacao: [
      {
        h2: 'Para que serve o UTM',
        p: [
          'UTM são marcações no final de um link. Quando alguém clica, o Google Analytics lê a marcação e registra de onde a visita veio: qual rede, qual tipo de mídia, qual campanha. Sem isso, boa parte do tráfego cai em "direto" e você não sabe o que funcionou.',
          'Os três parâmetros obrigatórios são origem (source), mídia (medium) e campanha (campaign). Content e term são opcionais e ajudam a diferenciar anúncios e palavras-chave.',
        ],
      },
      {
        h2: 'Padronize para os relatórios fazerem sentido',
        p: [
          'O erro mais comum é escrever "Facebook", "facebook" e "face" como se fossem a mesma origem: o Analytics as trata como fontes diferentes. Combine uma lista de nomes e use sempre a mesma grafia. Por isso a ferramenta oferece padronizar em minúsculas e sem espaços.',
          'O UTM mostra a origem do clique, mas não a venda. Para fechar o ciclo é preciso ligar o lead ao resultado, o que o <a href="/gestao-de-trafego/">rastreamento de ponta a ponta</a> da Infuse faz, enviando eventos de conversão às plataformas.',
        ],
      },
    ],
    faq: [
      { q: 'Posso usar UTM em links internos do meu site?', a: 'Não é recomendado. UTM em link interno pode reiniciar a sessão e atrapalhar a atribuição. Use apenas em links que levam de fora para o seu site.' },
      { q: 'UTM funciona com WhatsApp?', a: 'O UTM registra a visita no site. Para anúncios que abrem conversa direto no WhatsApp, a origem vem de outros dados, como os do anúncio na API oficial. Veja o guia sobre campanhas de clique para WhatsApp.' },
      { q: 'Os UTMs são visíveis para o visitante?', a: 'Sim, aparecem no endereço. Por isso, evite colocar informação sensível e prefira nomes simples.' },
      { q: 'A ferramenta guarda os meus links?', a: 'Não. Tudo é feito no seu navegador, sem envio de dados.' },
    ],
    relacionados: ['gestao-de-trafego-feira-de-santana', 'gestao-de-trafego'],
    guias: ['o-que-sao-utms-e-como-usar', 'como-rastrear-de-onde-vem-seus-clientes', 'google-tag-manager-e-ga4-para-pequenas-empresas'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'calculadora-de-faltas-na-agenda',
    nome: 'Calculadora de faltas na agenda',
    title: 'Calculadora de Faltas e Cancelamentos na Agenda | Infuse',
    description:
      'Calcule quanto as faltas e os cancelamentos custam por mês e por ano ao seu consultório, clínica, salão ou barbearia. Use os seus próprios números.',
    h1: 'Calculadora: quanto as faltas custam para o seu negócio',
    lede:
      'Informe quantos atendimentos você faz, quantos clientes faltam e o valor médio de cada atendimento. A ferramenta mostra o que se perde com horários vagos e quanto poderia voltar com lembretes.',
    cta: ['/agenda/', 'Conhecer o Infuse Agenda', 'agendamento com lembretes automáticos'],
    form:
      campo('a', 'Atendimentos agendados por mês', { ph: 'quantidade' }) +
      campo('f', 'Percentual de faltas e cancelamentos tardios (%)', { ph: 'seu percentual', hint: 'Se não souber, conte as faltas dos últimos meses e divida pelo total agendado.' }) +
      campo('v', 'Valor médio de cada atendimento (R$)', { ph: 'valor do seu atendimento' }) +
      campo('r', 'Quanto das faltas você acredita recuperar com lembretes (%)', { ph: 'sua estimativa', hint: 'É uma estimativa sua, não uma promessa.' }) +
      `<button type="button" class="btn btn-wa" id="go">Calcular</button>
      <div class="result" id="res" hidden><dl class="out" id="out"></dl>
      <p class="note" id="msg"></p>
      <div class="cta-row"><a class="btn btn-wa btn-sm" id="wa" data-cta="tool" target="_blank" rel="noopener">Levar este resultado ao WhatsApp</a></div></div>`,
    js: `
      $('go').onclick=function(){
        var a=num('a'),f=num('f'),v=num('v'),r=num('r');
        if(!a||!v){$('res').hidden=true;return;}
        var fal=a*f/100, mes=fal*v, ano=mes*12, rec=mes*Math.min(r,100)/100;
        $('out').innerHTML='<div><dt>Faltas por mês</dt><dd>'+fmt(fal)+'</dd></div><div><dt>Receita parada por mês</dt><dd>'+brl(mes)+'</dd></div><div><dt>Receita parada por ano</dt><dd>'+brl(ano)+'</dd></div>'+(r?'<div><dt>Recuperável por mês, na sua estimativa</dt><dd>'+brl(rec)+'</dd></div>':'');
        $('msg').textContent='Estimativa feita a partir dos números que você informou. O resultado real depende do seu perfil de clientes e de como a confirmação é feita.';
        $('res').hidden=false;
        $('wa').href=waLink('Olá! Usei a calculadora de faltas da Infuse. Tenho cerca de '+fmt(a)+' atendimentos por mês, com '+fmt(f)+'% de faltas. Quero saber como reduzir isso com lembretes automáticos.');
        track('calculadora-de-faltas-na-agenda');
      };
    `,
    explicacao: [
      {
        h2: 'Por que a falta custa mais do que parece',
        p: [
          'Quando um cliente não aparece, o horário dificilmente é preenchido a tempo. O custo não é só o valor do atendimento: há o tempo do profissional parado, a estrutura que já está montada e, em muitos casos, um cliente em espera que poderia ter sido encaixado.',
          'A conta da ferramenta é simples: atendimentos por mês, vezes o percentual de faltas, vezes o valor médio. Ela evidencia o tamanho do problema, e o resultado vale tanto quanto os números que você colocar.',
        ],
      },
      {
        h2: 'O que costuma reduzir as faltas',
        p: [
          'O principal motivo de faltas é esquecimento. Confirmação e lembrete pelo WhatsApp, um dia antes e perto do horário, deixam fácil remarcar em vez de sumir. Uma política de cancelamento clara e uma lista de espera para encaixar quem desistiu completam o quadro.',
          'O <a href="/agenda/">Infuse Agenda</a> reúne agendamento online e lembretes automáticos, e a <a href="/blog/agenda-online-como-reduzir-faltas/">guia sobre como reduzir faltas</a> detalha as práticas.',
        ],
      },
    ],
    faq: [
      { q: 'Como descobrir o meu percentual de faltas?', a: 'Pegue um mês fechado, conte quantos agendamentos não compareceram ou cancelaram em cima da hora e divida pelo total agendado.' },
      { q: 'O resultado é uma previsão de quanto vou recuperar?', a: 'Não. É uma estimativa baseada nos números que você digitou. O quanto se recupera depende do seu público e da forma como os lembretes são feitos.' },
      { q: 'Serve para qualquer tipo de negócio?', a: 'Serve para quem trabalha com hora marcada: consultórios, clínicas, salões, barbearias, estética, oficinas e escolas, entre outros.' },
      { q: 'Os dados ficam salvos?', a: 'Não. A conta é feita no seu navegador e nada é enviado a servidor.' },
    ],
    relacionados: ['agenda', 'site-para-clinica-feira-de-santana', 'site-para-salao-de-beleza-feira-de-santana'],
    guias: ['agenda-online-como-reduzir-faltas', 'marketing-digital-para-clinicas-e-medicos', 'marketing-digital-para-saloes-e-barbearias'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'calculadora-de-leads-perdidos-no-whatsapp',
    nome: 'Calculadora de leads perdidos no WhatsApp',
    title: 'Calculadora de Vendas Perdidas no WhatsApp | Infuse',
    description:
      'Estime quantas vendas a sua empresa perde por demora ou falta de resposta no WhatsApp, usando os seus próprios números. Grátis e sem cadastro.',
    h1: 'Calculadora: quanto você perde por demora no WhatsApp',
    lede:
      'Informe quantos contatos chegam, quantos você fecha e quantos somem sem resposta. A ferramenta estima as vendas e a receita que ficam pelo caminho.',
    cta: ['/inteligencia-artificial-feira-de-santana/', 'Ver atendimento com IA no WhatsApp', 'atendimento automático no WhatsApp'],
    form:
      campo('c', 'Contatos novos por mês no WhatsApp', { ph: 'quantidade' }) +
      campo('t', 'Percentual que vira venda hoje (%)', { ph: 'sua taxa de fechamento' }) +
      campo('k', 'Valor médio de cada venda (R$)', { ph: 'ticket médio' }) +
      campo('d', 'Percentual de contatos que você acha que some por demora ou falta de resposta (%)', { ph: 'sua estimativa', hint: 'Uma estimativa honesta: quantos ficam sem resposta no mesmo dia, fora do horário ou em horário de pico?' }) +
      `<button type="button" class="btn btn-wa" id="go">Calcular</button>
      <div class="result" id="res" hidden><dl class="out" id="out"></dl><p class="note" id="msg"></p>
      <div class="cta-row"><a class="btn btn-wa btn-sm" id="wa" data-cta="tool" target="_blank" rel="noopener">Levar este resultado ao WhatsApp</a></div></div>`,
    js: `
      $('go').onclick=function(){
        var c=num('c'),t=num('t'),k=num('k'),d=num('d');
        if(!c||!k){$('res').hidden=true;return;}
        var per=c*Math.min(d,100)/100, vend=per*t/100, rec=vend*k;
        $('out').innerHTML='<div><dt>Contatos sem resposta por mês</dt><dd>'+fmt(per)+'</dd></div><div><dt>Vendas que poderiam ter acontecido</dt><dd>'+fmt(vend)+'</dd></div><div><dt>Receita deixada na mesa por mês</dt><dd>'+brl(rec)+'</dd></div><div><dt>Por ano</dt><dd>'+brl(rec*12)+'</dd></div>';
        $('msg').textContent='Supõe que os contatos perdidos fechariam na mesma taxa dos atendidos. É uma estimativa com os números que você informou, não uma garantia de resultado.';
        $('res').hidden=false;
        $('wa').href=waLink('Olá! Usei a calculadora de leads perdidos da Infuse. Recebo cerca de '+fmt(c)+' contatos por mês no WhatsApp e acho que cerca de '+fmt(d)+'% ficam sem resposta. Quero entender como atender todos.');
        track('calculadora-de-leads-perdidos-no-whatsapp');
      };
    `,
    explicacao: [
      {
        h2: 'Por que a demora custa vendas',
        p: [
          'Quem chama no WhatsApp quer resposta agora. Se a empresa demora, fora do horário ou em picos, o cliente segue para o concorrente que respondeu primeiro. Como o lead já foi pago (por anúncio, esforço ou tempo), cada contato sem resposta é dinheiro perdido.',
          'A conta usa a mesma taxa de fechamento que você já tem hoje. Ela não presume que todos fechariam, só que os perdidos teriam a mesma chance dos atendidos.',
        ],
      },
      {
        h2: 'O que costuma resolver',
        p: [
          'Três coisas fazem diferença: resposta imediata (mesmo que automática, com triagem), distribuição organizada para a equipe e acompanhamento de quem não fechou. Uma <a href="/inteligencia-artificial-feira-de-santana/">IA no WhatsApp</a> responde na hora e passa para um atendente quando preciso, e um <a href="/crm/">CRM</a> mantém o funil organizado.',
          'Veja também o guia sobre <a href="/blog/como-organizar-leads-do-whatsapp/">como organizar os leads do WhatsApp</a> sem perder vendas.',
        ],
      },
    ],
    faq: [
      { q: 'Como estimar o percentual de contatos que somem?', a: 'Olhe um período e conte as conversas que ficaram sem resposta no dia ou que esfriaram depois da primeira mensagem. Mesmo uma amostra pequena já ajuda.' },
      { q: 'Responder automaticamente resolve tudo?', a: 'Resolve a espera, mas não substitui a qualidade do atendimento. O ideal é automatizar a primeira resposta e a triagem e passar para uma pessoa nos casos que exigem conversa.' },
      { q: 'O resultado é uma promessa de aumento de vendas?', a: 'Não. É uma estimativa com base nos números que você digitou, para dimensionar o problema.' },
      { q: 'Meus dados ficam guardados?', a: 'Não. Tudo é calculado no seu navegador.' },
    ],
    relacionados: ['inteligencia-artificial-feira-de-santana', 'crm', 'automacao-de-processos-feira-de-santana'],
    guias: ['como-organizar-leads-do-whatsapp', 'chatbot-ou-agente-de-ia-qual-a-diferenca', 'como-vender-mais-pelo-whatsapp'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'calculadora-de-roas-e-cac',
    nome: 'Calculadora de ROAS e CAC',
    title: 'Calculadora de ROAS e CAC para Anúncios | Infuse',
    description:
      'Calcule o ROAS, o CAC e o ticket médio das suas campanhas e veja se o investimento em anúncios se paga, a partir dos seus próprios números.',
    h1: 'Calculadora de ROAS e CAC para campanhas de anúncios',
    lede:
      'Informe quanto investiu em anúncios, a receita que eles trouxeram e quantos clientes novos vieram. A ferramenta calcula ROAS, CAC e ticket médio e compara com o seu ponto de equilíbrio.',
    cta: ['/gestao-de-trafego/', 'Ver gestão de tráfego', 'melhorar o retorno dos meus anúncios'],
    form:
      campo('i', 'Investimento em anúncios no período (R$)', { ph: 'quanto você investiu' }) +
      campo('rv', 'Receita atribuída aos anúncios (R$)', { ph: 'quanto vendeu pelos anúncios' }) +
      campo('n', 'Clientes novos vindos dos anúncios', { ph: 'quantidade' }) +
      campo('m', 'Margem bruta média da venda (%), opcional', { ph: 'sua margem', hint: 'Serve para calcular o ROAS de equilíbrio e o resultado depois dos anúncios.' }) +
      `<button type="button" class="btn btn-wa" id="go">Calcular</button>
      <div class="result" id="res" hidden><dl class="out" id="out"></dl><p class="note" id="msg"></p>
      <div class="cta-row"><a class="btn btn-wa btn-sm" id="wa" data-cta="tool" target="_blank" rel="noopener">Falar sobre meus anúncios no WhatsApp</a></div></div>`,
    js: `
      $('go').onclick=function(){
        var i=num('i'),rv=num('rv'),n=num('n'),m=num('m');
        if(!i||!rv){$('res').hidden=true;return;}
        var roas=rv/i, h='<div><dt>ROAS (receita para cada R$ 1 investido)</dt><dd>'+roas.toFixed(2).replace('.',',')+'</dd></div>';
        if(n){h+='<div><dt>CAC (custo por cliente novo)</dt><dd>'+brl(i/n)+'</dd></div><div><dt>Ticket médio</dt><dd>'+brl(rv/n)+'</dd></div>';}
        var msg='O ROAS mostra a receita por real investido, mas só o lucro diz se compensa.';
        if(m>0){var be=100/m; h+='<div><dt>ROAS de equilíbrio</dt><dd>'+be.toFixed(2).replace('.',',')+'</dd></div><div><dt>Resultado depois dos anúncios</dt><dd>'+brl(rv*m/100-i)+'</dd></div>';
          msg=roas>=be?'O seu ROAS está acima do equilíbrio: a margem cobre o investimento. Ainda vale olhar o custo de atendimento e de operação.':'O seu ROAS está abaixo do equilíbrio: com essa margem, os anúncios não cobrem o próprio custo. Veja oferta, página, atendimento e rastreamento.';}
        $('out').innerHTML=h;$('msg').textContent=msg+' Estimativa a partir dos números que você informou.';$('res').hidden=false;
        $('wa').href=waLink('Olá! Usei a calculadora de ROAS e CAC da Infuse e quero conversar sobre melhorar o retorno dos meus anúncios.');
        track('calculadora-de-roas-e-cac');
      };
    `,
    explicacao: [
      {
        h2: 'O que são ROAS e CAC',
        p: [
          'ROAS é a receita gerada para cada real investido em anúncios. CAC é quanto você gastou, em média, para conquistar um cliente novo. Juntos com o ticket médio, mostram se a campanha traz clientes a um custo que a venda comporta.',
          'Um ROAS alto não garante lucro: depende da margem. Por isso a ferramenta calcula o ROAS de equilíbrio, o mínimo para a margem cobrir o investimento. Se você informar a margem, ela compara os dois.',
        ],
      },
      {
        h2: 'Cuidado com os números de entrada',
        p: [
          'A receita atribuída aos anúncios só é confiável se a origem de cada cliente é rastreada até a venda. Quando a venda acontece fora do site, no WhatsApp ou no balcão, as plataformas enxergam só o clique. Por isso o <a href="/gestao-de-trafego/">rastreamento de ponta a ponta</a> muda tanto a leitura dos resultados.',
          'Leia também o guia de <a href="/blog/metricas-de-trafego-pago-que-importam/">métricas de tráfego pago que importam</a> para interpretar cada indicador sem se enganar.',
        ],
      },
    ],
    faq: [
      { q: 'Qual é um bom ROAS?', a: 'Depende da sua margem e dos seus custos. O que importa é se o ROAS fica acima do seu ROAS de equilíbrio. Não existe um número bom para todos.' },
      { q: 'O CAC deve incluir só a verba de anúncios?', a: 'Para a conta de campanha, sim. Em uma análise mais completa, some também o custo de gestão, de ferramentas e de atendimento.' },
      { q: 'E se a venda fecha no WhatsApp?', a: 'Então é preciso registrar a origem do lead e a venda para atribuir a receita ao anúncio. Sem isso, a conta subestima o retorno.' },
      { q: 'Os dados ficam salvos?', a: 'Não. A conta roda no seu navegador, sem envio de dados.' },
    ],
    relacionados: ['gestao-de-trafego', 'gestao-de-trafego-feira-de-santana'],
    guias: ['metricas-de-trafego-pago-que-importam', 'gestao-de-trafego-quanto-investir-em-anuncios', 'como-rastrear-de-onde-vem-seus-clientes'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'checklist-seo-local',
    nome: 'Checklist de SEO local',
    title: 'Checklist de SEO Local: Seu Negócio Aparece? | Infuse',
    description:
      'Faça o checklist de SEO local e veja o que falta para o seu negócio aparecer melhor no Google Maps e na busca da sua cidade. Resultado na hora.',
    h1: 'Checklist de SEO local: seu negócio aparece no Google?',
    lede:
      'Marque o que a sua empresa já tem. Você recebe uma nota e a lista do que vale corrigir primeiro para aparecer melhor no Google e no Maps na sua cidade.',
    cta: ['/criacao-de-sites-feira-de-santana/', 'Ver criação de sites', 'melhorar o meu SEO local'],
    form:
      checklist([
        {
          t: 'Perfil da Empresa no Google',
          itens: [
            'Tenho o Perfil da Empresa no Google criado e verificado',
            'A categoria principal do perfil descreve bem o meu negócio',
            'Nome, endereço, telefone e horário estão corretos e atualizados',
            'O perfil tem fotos reais do local, da equipe e dos trabalhos',
            'Respondo as perguntas e posto novidades no perfil',
          ],
        },
        {
          t: 'Avaliações',
          itens: [
            'Peço avaliações a clientes satisfeitos de forma regular',
            'Respondo as avaliações, inclusive as negativas',
            'Facilito o caminho: o cliente chega à avaliação em poucos toques',
          ],
        },
        {
          t: 'Site',
          itens: [
            'Tenho um site próprio, rápido e que abre bem no celular',
            'O site tem uma página para cada serviço principal',
            'O título e o texto das páginas citam o serviço e a minha cidade',
            'O endereço e o telefone do site são iguais aos do perfil no Google',
            'O site tem botão de WhatsApp ou formulário bem visível',
          ],
        },
        {
          t: 'Consistência e medição',
          itens: [
            'Meu nome, endereço e telefone são iguais em redes sociais e diretórios',
            'Acompanho de onde vêm as visitas e os contatos (Analytics e Search Console)',
            'Sei quais termos de busca trazem clientes para o meu negócio',
          ],
        },
      ]) +
      `<button type="button" class="btn btn-wa" id="go">Ver minha nota</button>
      <div class="result" id="res" hidden><p class="score" id="score"></p><p id="msg"></p><div id="gaps"></div>
      <div class="cta-row"><a class="btn btn-wa btn-sm" id="wa" data-cta="tool" target="_blank" rel="noopener">Pedir ajuda com esses pontos no WhatsApp</a></div></div>`,
    js: checklistJs('checklist-seo-local', 'SEO local', [
      [0.75, 'Boa base. Os pontos em aberto abaixo são os próximos ganhos.'],
      [0.45, 'Há lacunas relevantes. Corrigir os itens abaixo tende a ajudar bastante a aparecer na sua cidade.'],
      [0, 'O básico ainda está incompleto. Comece pelo Perfil da Empresa no Google e pelas informações do site.'],
    ]),
    explicacao: [
      {
        h2: 'O que pesa no SEO local',
        p: [
          'O Google decide o que mostrar em buscas com intenção local combinando relevância (o negócio faz o que a pessoa procura), distância e destaque (o quanto ele é conhecido e bem avaliado). O Perfil da Empresa, as avaliações e o site com páginas claras influenciam esses três pontos.',
          'O checklist reúne as práticas que mais aparecem nas recomendações do próprio Google. A nota é uma referência para priorizar, não uma medida oficial.',
        ],
      },
      {
        h2: 'Por onde começar',
        p: [
          'Se o Perfil da Empresa ainda não está completo, comece por ele: é o passo de maior efeito e custa apenas tempo. Depois cuide das avaliações, das páginas por serviço e da consistência dos dados.',
          'Os guias <a href="/blog/google-meu-negocio-passo-a-passo/">Google Meu Negócio passo a passo</a> e <a href="/blog/o-que-e-seo-local/">O que é SEO local</a> explicam cada item. A <a href="/placa-nfc/">placa NFC</a> ajuda a pedir avaliações no balcão.',
        ],
      },
    ],
    faq: [
      { q: 'A nota do checklist é uma nota oficial do Google?', a: 'Não. É uma referência para você priorizar. O Google não divulga uma pontuação de SEO local.' },
      { q: 'Quanto tempo leva para ver resultado?', a: 'Ajustes no perfil podem refletir em semanas. Melhorar posições de forma consistente costuma levar meses e depende da concorrência.' },
      { q: 'Preciso de site para aparecer no Maps?', a: 'O perfil sozinho já aparece, mas um site com páginas por serviço amplia a presença e ajuda em buscas comuns.' },
      { q: 'Os dados ficam salvos?', a: 'Não. O checklist roda no seu navegador, sem envio de dados.' },
    ],
    relacionados: ['criacao-de-sites-feira-de-santana', 'placa-nfc'],
    guias: ['google-meu-negocio-passo-a-passo', 'o-que-e-seo-local', 'como-aparecer-no-google-em-feira-de-santana'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'checklist-site-que-vende',
    nome: 'Checklist: seu site vende?',
    title: 'Checklist: Seu Site Está Pronto Para Vender? | Infuse',
    description:
      'Marque o que o seu site já tem e veja o que falta para converter visitas em contatos: velocidade, celular, WhatsApp, prova social e mais.',
    h1: 'Checklist: o seu site está pronto para vender?',
    lede:
      'Responda sobre o seu site e receba uma nota com os pontos que mais atrapalham a conversão de visitas em contatos e vendas.',
    cta: ['/criacao-de-sites-feira-de-santana/', 'Ver criação de sites', 'melhorar o meu site'],
    form:
      checklist([
        {
          t: 'Primeira impressão',
          itens: [
            'Quem chega entende em poucos segundos o que eu vendo e para quem',
            'O botão principal (WhatsApp, orçamento ou comprar) aparece sem rolar a página',
            'O site abre rápido, inclusive no celular com internet comum',
            'O layout funciona bem no celular, sem zoom e sem elementos cortados',
          ],
        },
        {
          t: 'Conteúdo e confiança',
          itens: [
            'Tenho uma página para cada serviço ou produto principal',
            'Mostro depoimentos, avaliações ou clientes reais',
            'Mostro endereço, telefone e meios de contato claros',
            'Tenho uma seção de perguntas frequentes que responde às dúvidas antes da compra',
          ],
        },
        {
          t: 'Conversão',
          itens: [
            'O contato é simples: um clique no WhatsApp ou formulário curto',
            'Respondo rápido aos contatos que chegam pelo site',
            'Cada página tem um próximo passo claro para o visitante',
          ],
        },
        {
          t: 'Técnico e medição',
          itens: [
            'O site usa HTTPS (cadeado) e tem política de privacidade',
            'Cada página tem título e descrição próprios para o Google',
            'Meço visitas e cliques de contato (Analytics ou similar)',
            'Sei de onde vêm os contatos que viram cliente',
          ],
        },
      ]) +
      `<button type="button" class="btn btn-wa" id="go">Ver minha nota</button>
      <div class="result" id="res" hidden><p class="score" id="score"></p><p id="msg"></p><div id="gaps"></div>
      <div class="cta-row"><a class="btn btn-wa btn-sm" id="wa" data-cta="tool" target="_blank" rel="noopener">Pedir ajuda com esses pontos no WhatsApp</a></div></div>`,
    js: checklistJs('checklist-site-que-vende', 'o meu site', [
      [0.75, 'Boa base. Os itens em aberto abaixo são os próximos ganhos.'],
      [0.45, 'O site tem pontos que provavelmente travam a conversão. Resolver os abaixo tende a ajudar.'],
      [0, 'O site ainda não está pronto para vender. Comece pela proposta, pelo botão de contato e pelo celular.'],
    ]),
    explicacao: [
      {
        h2: 'Um site bonito não é um site que vende',
        p: [
          'Site que vende é o que responde rápido à pergunta do visitante: o que é, serve para mim, posso confiar e como contrato. Velocidade, celular, prova social e um caminho claro até o contato pesam mais que o visual.',
          'A nota do checklist indica onde estão os maiores gargalos. Não é uma auditoria técnica: serve para decidir por onde começar.',
        ],
      },
      {
        h2: 'Como melhorar o que falta',
        p: [
          'Muitos itens se resolvem com conteúdo e organização. Os de velocidade e de estrutura podem exigir ajuste técnico. O guia <a href="/blog/o-que-um-site-institucional-precisa-ter/">o que um site institucional precisa ter</a> e o de <a href="/blog/velocidade-do-site-e-core-web-vitals/">velocidade e Core Web Vitals</a> detalham cada ponto.',
          'Se preferir um site feito já pensando em conversão e em Google, veja a <a href="/criacao-de-sites-feira-de-santana/">criação de sites da Infuse</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Preciso refazer o site inteiro se a nota for baixa?', a: 'Nem sempre. Muitos itens se corrigem com ajustes de conteúdo e de botões. Priorize os que tocam o contato e o celular.' },
      { q: 'Qual item pesa mais?', a: 'Em geral, clareza da oferta, funcionamento no celular e um contato fácil. Sem esses, o resto rende menos.' },
      { q: 'A ferramenta analisa o meu site automaticamente?', a: 'Não. Ela depende das respostas que você der. Para uma análise técnica, use ferramentas de medição de velocidade ou peça uma avaliação.' },
      { q: 'Os dados ficam salvos?', a: 'Não. Tudo roda no seu navegador, sem envio de dados.' },
    ],
    relacionados: ['criacao-de-sites-feira-de-santana', 'loja-virtual-feira-de-santana'],
    guias: ['o-que-um-site-institucional-precisa-ter', 'velocidade-do-site-e-core-web-vitals', 'landing-page-o-que-e-e-quando-usar'],
  },
];

/** JS do checklist: pontua, lista o que falta e monta a mensagem de WhatsApp. */
function checklistJs(nome, assunto, faixas) {
  return `
      $('go').onclick=function(){
        var all=document.querySelectorAll('.chk input'),ok=0,gaps=[];
        for(var i=0;i<all.length;i++){if(all[i].checked)ok++;else gaps.push(all[i].getAttribute('data-t'));}
        var tot=all.length,r=ok/tot,fx=${JSON.stringify(faixas)},m='';
        for(var k=0;k<fx.length;k++){if(r>=fx[k][0]){m=fx[k][1];break;}}
        $('score').textContent='Nota: '+ok+' de '+tot+' itens';
        $('msg').textContent=m;
        $('gaps').innerHTML=gaps.length?'<h3>O que vale corrigir</h3><ul class="gaps"><li>'+gaps.join('</li><li>')+'</li></ul>':'<p>Você marcou tudo. Vale revisar esses pontos com regularidade.</p>';
        var t='Olá! Fiz o checklist de ${assunto} da Infuse e marquei '+ok+' de '+tot+'. ';
        if(gaps.length)t+='Pontos em aberto: '+gaps.slice(0,6).join('; ')+'.';
        $('wa').href=waLink(t.slice(0,900));
        $('res').hidden=false;track('${nome}');
      };
    `;
}
