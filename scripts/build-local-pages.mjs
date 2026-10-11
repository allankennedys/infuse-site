/**
 * Gera as páginas estáticas de SEO (locais e gerais) em `public/<slug>/index.html`.
 *
 * Uso: `npm run pages` (também roda antes de `npm run build`).
 * O conteúdo fica em `scripts/local-pages/pages.mjs`.
 *
 * São HTML estático de propósito: a home é uma SPA renderizada no cliente, e
 * estas páginas precisam chegar ao buscador já com todo o texto no HTML.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './local-pages/pages.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.infusesoftware.com';
const WHATSAPP_NUMBER = '5575982938031';
const OG_IMAGE = 'https://i.ibb.co/2YK4dQzV/infuse-open-graph.png';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
const wa = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const WA_ICON =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.46 6.6 2.03 12.05 2.03c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/></svg>';
const CHECK_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030305;--bg-2:#0a0b10;--card:#0e1017;--border:rgba(255,255,255,.1);--text:#f5f5f7;--muted:#a1a1aa;--blue:#1877f2;--blue-2:#3b8cff;--blue-3:#8bbcff;--green:#25d366;--maxw:1120px}
html{scroll-behavior:smooth;background:var(--bg);-webkit-text-size-adjust:100%}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Segoe UI",Roboto,sans-serif;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:var(--blue);color:#fff}
img{display:block;max-width:100%;height:auto}
a{color:inherit}
ul,ol{list-style:none}
h1,h2,h3{letter-spacing:-.03em;line-height:1.12;text-wrap:balance;overflow-wrap:break-word}
h1{font-size:clamp(2.1rem,5.2vw,3.6rem);font-weight:700}
h2{font-size:clamp(1.6rem,3.4vw,2.4rem);font-weight:700}
h3{font-size:1.08rem;font-weight:600;letter-spacing:-.015em}
:focus-visible{outline:2px solid var(--blue-2);outline-offset:3px;border-radius:6px}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 20px}
.sec{padding:72px 0}
.sec-alt{background:var(--bg-2);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.sec-head{max-width:720px;margin-bottom:36px}
.sec-head p{color:var(--muted);margin-top:12px;font-size:1.02rem}
.eyebrow{display:inline-block;font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--blue-3)}
.prose>*{max-width:760px}
.prose p{color:#d4d4d8;font-size:1.04rem;margin-top:18px}
.prose a,.card a,.faq a{color:var(--blue-3);text-decoration:underline;text-underline-offset:3px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:999px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,background .2s,border-color .2s;text-align:center}
.btn svg{width:20px;height:20px;flex-shrink:0}
.btn-wa{background:var(--green);color:#04130a}
.btn-wa:hover{background:#3be07a;transform:translateY(-1px)}
.btn-ghost{border:1px solid var(--border);color:var(--text)}
.btn-ghost:hover{border-color:rgba(255,255,255,.3)}
.btn-sm{padding:9px 16px;font-size:.88rem}
.hdr{position:sticky;top:0;z-index:50;background:rgba(3,3,5,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}
.hdr-row{display:flex;align-items:center;justify-content:space-between;gap:16px;height:64px}
.brand{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.brand .sym{width:28px;height:28px;object-fit:contain}
.brand .word{height:20px;width:auto}
.nav{display:flex;gap:26px}
.nav a{color:var(--muted);font-size:.9rem;font-weight:500;text-decoration:none}
.nav a:hover{color:var(--text)}
.crumbs{padding:18px 0 0;font-size:.8rem;color:var(--muted)}
.crumbs ol{display:flex;flex-wrap:wrap;gap:6px}
.crumbs li+li::before{content:"/";margin-right:6px;opacity:.5}
.crumbs a{text-decoration:none}
.crumbs a:hover{color:var(--text)}
.hero{position:relative;padding:40px 0 76px;overflow:hidden}
.hero::before{content:"";position:absolute;top:-220px;left:50%;width:900px;height:560px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(24,119,242,.28),transparent);pointer-events:none}
.hero .wrap{position:relative}
.hero h1{max-width:18ch;margin-top:16px}
.lede{max-width:62ch;margin-top:20px;font-size:1.12rem;color:#d4d4d8}
.checks{margin-top:26px;display:grid;gap:10px}
.checks li{display:flex;gap:10px;align-items:flex-start;color:#e4e4e7}
.checks svg{width:18px;height:18px;margin-top:4px;color:var(--blue-2);flex-shrink:0}
.cta-row{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}
.note{margin-top:14px;font-size:.85rem;color:var(--muted)}
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(290px,1fr))}
.card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:24px}
.card p{color:var(--muted);margin-top:8px;font-size:.96rem}
.steps{counter-reset:s}
.steps .card{counter-increment:s}
.steps .card::before{content:"0" counter(s);display:block;font-size:.8rem;font-weight:700;color:var(--blue-2);letter-spacing:.08em;margin-bottom:10px}
.faq{max-width:820px;display:grid;gap:10px}
.faq details{background:var(--card);border:1px solid var(--border);border-radius:14px}
.faq summary{cursor:pointer;list-style:none;padding:18px 48px 18px 20px;font-weight:600;position:relative}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:1.4rem;font-weight:400;color:var(--blue-2)}
.faq details[open] summary::after{content:"\\2212"}
.faq summary h3{display:inline;font-size:1rem}
.faq details p{padding:0 20px 20px;color:#c4c4cc}
.links{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}
.links a{display:block;padding:14px 18px;border:1px solid var(--border);border-radius:12px;text-decoration:none;font-weight:500;font-size:.95rem;transition:border-color .2s,color .2s}
.links a:hover{border-color:var(--blue-2);color:var(--blue-3)}
.links-title{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:28px 0 12px}
.final{text-align:center;padding:84px 0;background:radial-gradient(ellipse at 50% 120%,rgba(24,119,242,.3),transparent 62%)}
.final h2{max-width:22ch;margin:0 auto}
.final p{color:#d4d4d8;max-width:54ch;margin:16px auto 0}
.final .cta-row{justify-content:center}
.ftr{border-top:1px solid var(--border);padding:44px 0 96px;font-size:.88rem;color:var(--muted)}
.ftr-grid{display:grid;gap:32px;grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}
.ftr strong{display:block;color:var(--text);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px}
.ftr li{margin-top:7px}
.ftr a{text-decoration:none}
.ftr a:hover{color:var(--blue-3)}
.ftr address{font-style:normal;line-height:1.8}
.copy{margin-top:36px;padding-top:20px;border-top:1px solid var(--border);font-size:.8rem}
.fab{position:fixed;right:16px;bottom:16px;z-index:60;width:56px;height:56px;border-radius:50%;background:var(--green);color:#04130a;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.45)}
.fab svg{width:28px;height:28px}
@media(max-width:760px){.nav{display:none}.sec{padding:56px 0}.hero{padding-bottom:56px}.btn{width:100%}.hdr .btn{width:auto}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`.trim();

/** Etapas do processo: iguais em estrutura, com o objeto de cada página. */
const steps = (p) => [
  { t: 'Conversa no WhatsApp', d: `Você conta como a empresa funciona hoje e o que espera de ${p.objeto}. Sem compromisso.` },
  { t: 'Diagnóstico e proposta', d: 'Definimos o escopo, o que entra na primeira entrega e enviamos a proposta com prazo e investimento.' },
  { t: 'Desenvolvimento', d: 'Construímos em etapas e você acompanha a evolução, validando antes de ir ao ar.' },
  { t: 'Publicação e suporte', d: 'Colocamos no ar, orientamos o uso e seguimos disponíveis para ajustes e melhorias.' },
];

const WHY = (p) => [
  p.kind === 'geral' && !p.localizado
    ? { t: 'Atendimento em todo o Brasil', d: 'A Infuse está sediada em Feira de Santana, na Bahia, e atende empresas de todo o país de forma remota.' }
    : { t: 'Empresa de Feira de Santana', d: 'A Infuse está sediada em Feira de Santana, na Bahia, e conhece o mercado e o consumidor da região.' },
  { t: 'Projeto sob medida', d: 'Partimos do seu processo e do seu objetivo. A solução é definida depois de entender o negócio.' },
  { t: 'Contato direto', d: 'Você fala pelo WhatsApp com quem está cuidando do seu projeto, do orçamento ao suporte.' },
  { t: 'Tudo em um só lugar', d: 'Site, automação, CRM, IA e sistemas desenvolvidos pela mesma equipe, pensados para funcionar juntos.' },
];

function render(p) {
  const url = `${SITE}/${p.slug}/`;
  const waCta = wa(`Olá! Vim pela página "${p.h1}" e quero um orçamento.`);
  const waDuvida = wa(`Olá! Vim pela página "${p.h1}" e tenho uma dúvida.`);
  const inst = p.kind === 'institucional';
  const geral = p.kind === 'geral' || inst;
  const others = PAGES.filter((o) => o.slug !== p.slug);
  const area = geral && !p.localizado
    ? { '@type': 'Country', name: 'Brasil' }
    : { '@type': 'City', name: 'Feira de Santana' };
  const crumb = geral ? p.nome : `${p.nome} em Feira de Santana`;
  const gerais = others
    .filter((o) => o.kind === 'geral')
    .map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)}</a></li>`)
    .join('');
  const linkList = (kind) =>
    others
      .filter((o) => o.kind === kind)
      .map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)} em Feira de Santana</a></li>`)
      .join('');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#organization`,
      name: 'Infuse Software',
      url: `${SITE}/`,
      logo: 'https://i.ibb.co/WN3HNVTR/favicon.png',
      image: OG_IMAGE,
      email: 'contato@infusesoftware.com',
      telephone: `+${WHATSAPP_NUMBER}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Feira de Santana',
        addressRegion: 'BA',
        addressCountry: 'BR',
      },
      areaServed: geral && !p.localizado ? 'BR' : area,
      sameAs: ['https://www.instagram.com/infuse.software'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.h1,
      serviceType: p.serviceType,
      description: p.description,
      url,
      provider: { '@id': `${SITE}/#organization` },
      areaServed: area,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: p.h1, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (p.faq ?? []).map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
      })),
    },
  ];
  if (inst) schema[1] = { '@context': 'https://schema.org', '@type': p.schemaType, name: p.h1, description: p.description, url, about: { '@id': `${SITE}/#organization` } };
  if (!p.faq) schema.pop();

  const cards = (items) =>
    items.map((i) => `<li class="card"><h3>${i.t}</h3><p>${i.d}</p></li>`).join('\n          ');
  const paras = (list) => list.map((t) => `<p>${t}</p>`).join('\n        ');

  const mainServico = () => `  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li aria-current="page">${esc(crumb)}</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">${esc(p.eyebrow)}</p>
      <h1>${esc(p.h1)}</h1>
      <p class="lede">${p.lede}</p>
      <ul class="checks">
        ${p.destaques.map((d) => `<li>${CHECK_ICON}<span>${d}</span></li>`).join('\n        ')}
      </ul>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Pedir orçamento no WhatsApp</span></a>
        <a class="btn btn-ghost" href="#servicos">Ver o que fazemos</a>
      </div>
      <p class="note">Orçamento sem compromisso. Resposta pelo WhatsApp.</p>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap prose">
      <h2>${esc(p.intro.h2)}</h2>
        ${paras(p.intro.p)}
    </div>
  </section>

  <section class="sec" id="servicos">
    <div class="wrap">
      <div class="sec-head">
        <h2>${esc(p.entregas.h2)}</h2>
        <p>${p.entregas.sub}</p>
      </div>
      <ul class="grid">
          ${cards(p.entregas.items)}
      </ul>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Falar com a Infuse</span></a>
      </div>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap prose">
      <h2>${esc(p.local.h2)}</h2>
        ${paras(p.local.p)}
    </div>
  </section>

  <section class="sec" id="como-funciona">
    <div class="wrap">
      <div class="sec-head">
        <h2>Como funciona o trabalho com a Infuse</h2>
        <p>Um processo simples, do primeiro contato à entrega.</p>
      </div>
      <ol class="grid steps">
          ${cards(p.passos ?? steps(p))}
      </ol>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap">
      <div class="sec-head">
        <h2>Por que contratar a Infuse${geral ? '' : ' em Feira de Santana'}</h2>
      </div>
      <ul class="grid">
          ${cards(WHY(p))}
      </ul>
    </div>
  </section>

  <section class="sec" id="faq">
    <div class="wrap">
      <div class="sec-head">
        <h2>Perguntas frequentes</h2>
        <p>Não achou sua dúvida? <a href="${waDuvida}" target="_blank" rel="noopener" style="color:var(--blue-3)">Pergunte pelo WhatsApp</a>.</p>
      </div>
      <div class="faq">
        ${p.faq
          .map((f) => `<details><summary><h3>${esc(f.q)}</h3></summary><p>${f.a}</p></details>`)
          .join('\n        ')}
      </div>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap">
      <h2>Outras soluções da Infuse${geral ? '' : ' em Feira de Santana'}</h2>
      <p class="links-title">Serviços</p>
      <ul class="links">${gerais}${linkList('servico')}</ul>
      <p class="links-title">Por tipo de negócio</p>
      <ul class="links">${linkList('segmento')}</ul>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>Vamos conversar sobre o seu projeto?</h2>
      <p>Conte o que a sua empresa precisa. A gente entende o cenário e envia um orçamento para o seu caso, direto pelo WhatsApp.</p>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Chamar no WhatsApp</span></a>
      </div>
    </div>
  </section>`;

  const secao = (s, i) => `  <section class="sec${i % 2 ? '' : ' sec-alt'}">
    <div class="wrap${s.items ? '' : ' prose'}">
      ${s.items ? `<div class="sec-head"><h2>${esc(s.h2)}</h2>${s.sub ? `<p>${s.sub}</p>` : ''}</div>
      <${s.ordered ? 'ol' : 'ul'} class="grid${s.ordered ? ' steps' : ''}">
          ${cards(s.items)}
      </${s.ordered ? 'ol' : 'ul'}>` : `<h2>${esc(s.h2)}</h2>
        ${paras(s.p)}`}
    </div>
  </section>`;

  const mainInst = () => `  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li aria-current="page">${esc(crumb)}</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">${esc(p.eyebrow)}</p>
      <h1>${esc(p.h1)}</h1>
      <p class="lede">${p.lede}</p>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Chamar no WhatsApp</span></a>
        <a class="btn btn-ghost" href="mailto:contato@infusesoftware.com">Enviar e-mail</a>
      </div>
      <p class="note">Orçamento sem compromisso. Resposta pelo WhatsApp.</p>
    </div>
  </section>

${p.secoes.map(secao).join('\n\n')}

${p.faq ? `  <section class="sec" id="faq">
    <div class="wrap">
      <div class="sec-head">
        <h2>Perguntas frequentes</h2>
        <p>Não achou sua dúvida? <a href="${waDuvida}" target="_blank" rel="noopener" style="color:var(--blue-3)">Pergunte pelo WhatsApp</a>.</p>
      </div>
      <div class="faq">
        ${p.faq
          .map((f) => `<details><summary><h3>${esc(f.q)}</h3></summary><p>${f.a}</p></details>`)
          .join('\n        ')}
      </div>
    </div>
  </section>

` : ''}  <section class="sec sec-alt">
    <div class="wrap">
      <h2>Outras soluções da Infuse${geral ? '' : ' em Feira de Santana'}</h2>
      <p class="links-title">Serviços</p>
      <ul class="links">${gerais}${linkList('servico')}</ul>
      <p class="links-title">Por tipo de negócio</p>
      <ul class="links">${linkList('segmento')}</ul>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>Vamos conversar sobre o seu projeto?</h2>
      <p>Conte o que a sua empresa precisa. A gente entende o cenário e envia um orçamento para o seu caso, direto pelo WhatsApp.</p>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Chamar no WhatsApp</span></a>
      </div>
    </div>
  </section>`;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#030305">
${geral ? '' : '<meta name="geo.region" content="BR-BA">\n<meta name="geo.placename" content="Feira de Santana">\n'}<link rel="icon" type="image/png" href="/icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:site_name" content="Infuse Software">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
${schema.map(jsonLd).join('\n')}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-28X808F553"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-28X808F553');</script>
<style>${CSS}</style>
</head>
<body>
<header class="hdr">
  <div class="wrap hdr-row">
    <a class="brand" href="/" aria-label="Infuse Software — página inicial">
      <img class="sym" src="/brand/infuse-symbol-white.webp" alt="" width="28" height="28">
      <img class="word" src="/brand/infuse-word-white.webp" alt="Infuse" height="20">
    </a>
    <nav class="nav" aria-label="Seções da página">
      ${inst
        ? '<a href="/">Início</a><a href="/sobre/">Sobre</a><a href="/contato/">Contato</a>'
        : '<a href="#servicos">O que fazemos</a><a href="#como-funciona">Como funciona</a><a href="#faq">Dúvidas</a>'}
    </nav>
    <a class="btn btn-wa btn-sm" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>WhatsApp</span></a>
  </div>
</header>

<main>
${inst ? mainInst() : mainServico()}
</main>

<footer class="ftr">
  <div class="wrap">
    <div class="ftr-grid">
      <div>
        <strong>Infuse Software</strong>
        <address>
          Feira de Santana, Bahia, Brasil<br>
          <a href="${wa('Olá! Vim pelo site da Infuse e gostaria de mais informações.')}" target="_blank" rel="noopener">WhatsApp: (75) 98293-8031</a><br>
          <a href="mailto:contato@infusesoftware.com">contato@infusesoftware.com</a><br>
          <a href="https://www.instagram.com/infuse.software" target="_blank" rel="noopener">@infuse.software</a>
        </address>
      </div>
      <div>
        <strong>Serviços em Feira de Santana</strong>
        <ul>${PAGES.filter((o) => o.kind === 'servico').map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <strong>Por tipo de negócio</strong>
        <ul>${PAGES.filter((o) => o.kind === 'segmento').map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <strong>Infuse</strong>
        <ul>
          <li><a href="/">Página inicial</a></li>
          <li><a href="/crm/">Infuse CRM</a></li>
          <li><a href="/agenda/">Infuse Agenda</a></li>
          ${PAGES.filter((o) => o.kind === 'geral' || o.kind === 'institucional').map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)}</a></li>`).join('')}
        </ul>
      </div>
    </div>
    <p class="copy">© ${new Date().getFullYear()} Infuse Software. Todos os direitos reservados.</p>
  </div>
</footer>

<a class="fab" href="${waCta}" target="_blank" rel="noopener" aria-label="Falar com a Infuse no WhatsApp">${WA_ICON}</a>
</body>
</html>
`;
}

for (const p of PAGES) {
  if (p.title.length > 60) console.warn(`[aviso] title com ${p.title.length} caracteres: ${p.slug}`);
  if (p.description.length > 160)
    console.warn(`[aviso] description com ${p.description.length} caracteres: ${p.slug}`);
  const dir = path.join(ROOT, 'public', p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), render(p));
  console.log(`✓ /${p.slug}/`);
}

/** Sitemap: páginas fixas (home, /crm/, /agenda/) + todas as geradas. */
const FIXAS = [
  ['', '2026-07-18', '1.00'],
  ['crm/', '2026-07-05', '0.80'],
  ['agenda/', '2026-06-26', '0.80'],
];
const DEFAULT_LASTMOD = '2026-10-11';
const entry = ([loc, lastmod, priority]) => `  <url>
    <loc>${SITE}/${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
writeFileSync(
  path.join(ROOT, 'public', 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...FIXAS, ...PAGES.map((p) => [`${p.slug}/`, p.atualizado ?? DEFAULT_LASTMOD, p.kind === 'institucional' ? '0.70' : '0.90'])]
  .map(entry)
  .join('\n')}
</urlset>
`,
);
console.log(`✓ sitemap.xml (${FIXAS.length + PAGES.length} URLs)`);
