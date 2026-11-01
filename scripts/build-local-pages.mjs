/**
 * Gera as páginas estáticas de SEO (locais e gerais) em `public/<slug>/index.html`.
 *
 * Uso: `npm run pages` (também roda antes de `npm run build`).
 * O conteúdo fica em `scripts/local-pages/pages.mjs`.
 *
 * São HTML estático de propósito: a home é uma SPA renderizada no cliente, e
 * estas páginas precisam chegar ao buscador já com todo o texto no HTML.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './local-pages/pages.mjs';
import { BLOG } from './local-pages/blog.mjs';
import { IMAGENS } from './local-pages/imagens.mjs';
import { AUTORES } from './local-pages/autores.mjs';
import { FERRAMENTAS } from './local-pages/ferramentas.mjs';

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
/** URL absoluta para og:image e schema (JPG, mais compatível com prévias de link). */
const imgUrl = (key) => (IMAGENS[key] ? SITE + (IMAGENS[key].og ?? IMAGENS[key].src) : OG_IMAGE);
/** `<figure>` com a imagem do mapa IMAGENS; `alt` opcional sobrescreve o padrão. */
const figure = (key, { alt, eager } = {}) => {
  const i = IMAGENS[key];
  if (!i) throw new Error(`imagem desconhecida: ${key}`);
  return `<figure class="fig"><img src="${i.src}" alt="${esc(alt ?? i.alt)}" width="${i.w}" height="${i.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`;
};

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
.prose h2{margin-top:44px}
.prose h2:first-child{margin-top:0}
.prose ul.bul,.prose ol.num{margin-top:16px;padding-left:22px;max-width:760px;color:#d4d4d8;font-size:1.04rem}
.prose ul.bul{list-style:disc}
.prose ol.num{list-style:decimal}
.prose ul.bul li,.prose ol.num li{margin-top:8px;padding-left:4px}
.prose strong{color:var(--text)}
.tool{max-width:760px;margin-top:8px;padding:26px;border:1px solid var(--border);border-radius:20px;background:var(--card)}
.field{margin-bottom:16px}
.field label,.result>label{display:block;font-weight:600;font-size:.92rem;margin-bottom:6px}
.field small{display:block;color:var(--muted);font-size:.8rem;margin-top:5px}
.tool input[type=text],.tool input[type=url],.tool textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:#07080c;color:var(--text);font:inherit;font-size:1rem}
.tool input:focus,.tool textarea:focus{outline:2px solid var(--blue-2);outline-offset:1px}
.tool textarea{resize:vertical}
.inl{display:flex;gap:10px;align-items:flex-start;margin:4px 0 18px;color:#d4d4d8;font-size:.92rem}
.inl input{margin-top:4px}
.tool .btn{margin-top:4px}
.result{margin-top:24px;padding-top:20px;border-top:1px solid var(--border)}
.result .cta-row{margin-top:14px}
.out{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}
.out>div{padding:14px 16px;border:1px solid var(--border);border-radius:14px;background:#07080c}
.out dt{color:var(--muted);font-size:.82rem}
.out dd{font-size:1.35rem;font-weight:700;margin-top:4px;letter-spacing:-.02em}
.tool .note{color:var(--muted);font-size:.88rem}
.err{margin-top:12px;color:#fca5a5;font-size:.92rem}
.chk{border:0;margin:0 0 22px;padding:0}
.chk legend{font-weight:700;margin-bottom:10px;color:var(--blue-3);font-size:.95rem}
.chk label{display:flex;gap:10px;align-items:flex-start;padding:9px 0;color:#e4e4e7;font-size:.97rem;cursor:pointer}
.chk input{margin-top:5px;width:18px;height:18px;accent-color:var(--blue)}
.score{font-size:1.6rem;font-weight:700;letter-spacing:-.02em}
.gaps{list-style:disc;padding-left:20px;margin-top:10px;color:#d4d4d8}
.gaps li{margin-top:6px}
.result h3{margin-top:16px}
.cta-inline{margin:36px 0 0;max-width:760px;padding:20px 22px;border:1px solid rgba(37,211,102,.35);background:rgba(37,211,102,.07);border-radius:16px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between}
.cta-inline p{margin:0!important;color:#e4e4e7!important;font-size:1rem!important;flex:1 1 280px}
.cta-inline .btn{padding:11px 20px;font-size:.92rem}
.byline a{color:var(--text);text-decoration:none;font-weight:600}
.byline a:hover{color:var(--blue-3)}
.autor-box{margin-top:40px;max-width:760px;padding:20px 22px;border:1px solid var(--border);border-radius:16px;background:var(--card)}
.autor-box strong{display:block;font-size:1.02rem}
.autor-box p{margin:6px 0 0;color:var(--muted);font-size:.94rem}
.autor-box a{color:var(--blue-3);text-underline-offset:3px}
.meta{margin-top:14px;font-size:.85rem;color:var(--muted)}
.callout{margin-top:24px;max-width:760px;padding:18px 20px;border:1px solid rgba(59,140,255,.35);background:rgba(24,119,242,.08);border-radius:14px;color:#d4d4d8}
.fig{margin:28px 0 0;max-width:760px}
.fig img{width:100%;max-width:520px;height:auto;border-radius:18px;border:1px solid var(--border)}
.galeria{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));align-items:start}
.galeria .fig{margin:0}
.galeria .fig img{max-width:100%}
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

const siteHeader = (waCta, navLinks) => `<header class="hdr">
  <div class="wrap hdr-row">
    <a class="brand" href="/" aria-label="Infuse Software — página inicial">
      <img class="sym" src="/brand/infuse-symbol-white.webp" alt="" width="28" height="28">
      <img class="word" src="/brand/infuse-word-white.webp" alt="Infuse" height="20">
    </a>
    <nav class="nav" aria-label="Seções da página">
      ${navLinks}
    </nav>
    <a class="btn btn-wa btn-sm" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>WhatsApp</span></a>
  </div>
</header>`;

const siteFooter = () => `<footer class="ftr">
  <div class="wrap">
    <div class="ftr-grid">
      <div>
        <strong>Infuse Software</strong>
        <address>
          Feira de Santana, Bahia, Brasil<br>
          <a href="${wa('Olá! Vim pelo site da Infuse e gostaria de mais informações.')}" target="_blank" rel="noopener">WhatsApp: (75) 98293-8031</a><br>
          <a href="mailto:contato@infusesoftware.com">contato@infusesoftware.com</a><br>
          <a href="https://www.instagram.com/infuse.software" target="_blank" rel="noopener">@infuse.software</a><br>
          <a href="https://share.google/yxzHF35a9ABS4xsvV" target="_blank" rel="noopener">Avaliações no Google</a>
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
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/ferramentas/">Ferramentas gratuitas</a></li>
          <li><a href="/crm/">Infuse CRM</a></li>
          <li><a href="/agenda/">Infuse Agenda</a></li>
          ${PAGES.filter((o) => o.kind === 'geral' || o.kind === 'institucional').map((o) => `<li><a href="/${o.slug}/">${esc(o.nome)}</a></li>`).join('')}
        </ul>
      </div>
    </div>
    <p class="copy">© ${new Date().getFullYear()} Infuse Software. Todos os direitos reservados.</p>
  </div>
</footer>`;

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
  const ogImg = p.capa ? imgUrl(p.capa) : OG_IMAGE;
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

  const navLinks = inst
    ? '<a href="/">Início</a><a href="/sobre/">Sobre</a><a href="/blog/">Blog</a><a href="/contato/">Contato</a>'
    : '<a href="#servicos">O que fazemos</a><a href="#como-funciona">Como funciona</a><a href="#faq">Dúvidas</a><a href="/blog/">Blog</a>';

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#organization`,
      name: 'Infuse Software',
      url: `${SITE}/`,
      logo: `${SITE}/favicon.png`,
      image: ogImg,
      email: 'contato@infusesoftware.com',
      telephone: `+${WHATSAPP_NUMBER}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Feira de Santana',
        addressRegion: 'BA',
        addressCountry: 'BR',
      },
      areaServed: geral && !p.localizado ? 'BR' : area,
      sameAs: ['https://www.instagram.com/infuse.software', 'https://share.google/yxzHF35a9ABS4xsvV'],
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
${p.galeria ? `
  <section class="sec">
    <div class="wrap">
      <div class="sec-head">
        <h2>${esc(p.galeria.h2)}</h2>
        ${p.galeria.sub ? `<p>${p.galeria.sub}</p>` : ''}
      </div>
      <div class="galeria">
        ${p.galeria.imagens.map((k) => figure(k)).join('\n        ')}
      </div>
    </div>
  </section>
` : ''}
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

${p.guias ? `  <section class="sec sec-alt">
    <div class="wrap">
      <h2>${esc(p.guias.h2)}</h2>
      <ul class="links" style="margin-top:20px">${p.guias.slugs.map((k) => BLOG.find((x) => x.slug === k)).filter(Boolean).map((x) => `<li><a href="/blog/${x.slug}/">${esc(x.h1)}</a></li>`).join('')}</ul>
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
${geral ? '' : '<meta name="geo.region" content="BR-BA">\n<meta name="geo.placename" content="Feira de Santana">\n'}<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" href="/favicon-blue-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImg}">
<meta property="og:site_name" content="Infuse Software">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${ogImg}">
${schema.map(jsonLd).join('\n')}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-28X808F553"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-28X808F553');</script>
<script defer src="/wa-track.js"></script>
<style>${CSS}</style>
</head>
<body>
${siteHeader(waCta, navLinks)}

<main>
${inst ? mainInst() : mainServico()}
</main>

${siteFooter()}

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


/* ---------- Blog ---------- */
const PUBLICADO_PADRAO = '2026-10-30';
const fmtData = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

const head = ({ title, description, url, og = 'article', extra = '', image = OG_IMAGE }) => `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#030305">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" href="/favicon-blue-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="${og}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:site_name" content="Infuse Software">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
${extra}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-28X808F553"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-28X808F553');</script>
<script defer src="/wa-track.js"></script>
<style>${CSS}</style>
</head>
<body>
`;

const BLOG_NAV = '<a href="/">Início</a><a href="/blog/">Blog</a><a href="/sobre/">Sobre</a><a href="/contato/">Contato</a>';
const FAB = (waCta) =>
  `<a class="fab" data-cta="fab" href="${waCta}" target="_blank" rel="noopener" aria-label="Falar com a Infuse no WhatsApp">${WA_ICON}</a>`;

const ORG_REF = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Infuse Software',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/favicon.png` },
};

const autorUrl = (a) => `${SITE}/autor/${a.slug}/`;
const personRef = (a) => ({
  '@type': 'Person',
  '@id': `${autorUrl(a)}#person`,
  name: a.nome,
  url: autorUrl(a),
  jobTitle: 'Cofundador',
  worksFor: { '@id': `${SITE}/#organization` },
  sameAs: [a.linkedin],
});

const FIXAS_NOMES = [
  { slug: 'crm', kind: 'geral', nome: 'Infuse CRM' },
  { slug: 'agenda', kind: 'geral', nome: 'Infuse Agenda' },
];
const FERR = FERRAMENTAS.map((t) => ({ ...t, kind: 'ferramenta' }));
const pagePath = (x) => (x.kind === 'ferramenta' ? `/ferramentas/${x.slug}/` : `/${x.slug}/`);
const bySlug = new Map([...FIXAS_NOMES, ...PAGES, ...BLOG, ...FERR].map((x) => [x.slug, x]));
/** Ferramentas sugeridas em cada artigo, pelo tema. */
const FERRAMENTAS_POR_TEMA = [
  [/placa-qr-code-whatsapp|whatsapp/, ['gerador-de-link-whatsapp', 'calculadora-de-leads-perdidos-no-whatsapp']],
  [/utm|rastrear|tag-manager|pixel/, ['gerador-de-utm', 'calculadora-de-roas-e-cac']],
  [/trafego|anuncio|ads|metricas|remarketing|convertem|teste-ab|segmentar/, ['calculadora-de-roas-e-cac', 'gerador-de-utm']],
  [/agenda-online|clinica|medicos|saloes|dentistas/, ['calculadora-de-faltas-na-agenda']],
  [/seo-local|google-meu-negocio|aparecer-no-google|palavras-chave|avaliac/, ['checklist-seo-local']],
  [/site|landing|velocidade|wordpress|loja-virtual|criacao/, ['checklist-site-que-vende']],
  [/crm|leads|automa|funil|follow-up|chatbot|ia-no-whatsapp/, ['calculadora-de-leads-perdidos-no-whatsapp']],
];
const ferramentasDe = (b) => {
  const out = [];
  for (const [re, ks] of FERRAMENTAS_POR_TEMA) if (re.test(b.slug)) for (const k of ks) if (!out.includes(k)) out.push(k);
  return out.slice(0, 2).map((k) => FERR.find((t) => t.slug === k));
};
const pageName = (pg) => (pg.kind === 'segmento' ? `${pg.nome} em Feira de Santana` : pg.kind === 'servico' ? `${pg.nome} em Feira de Santana` : pg.nome);

/** CTA contextual: leva do artigo para a página de serviço do mesmo tema. */
const CTA_CATEGORIA = {
  'Sites e presença digital': ['/criacao-de-sites-feira-de-santana/', 'Ver criação de sites', 'um site para a sua empresa'],
  'Sistemas sob medida': ['/desenvolvimento-de-sistemas-feira-de-santana/', 'Ver sistemas sob medida', 'um sistema sob medida'],
  'CRM e WhatsApp': ['/crm/', 'Conhecer o Infuse CRM', 'organizar o atendimento e as vendas'],
  'Inteligência artificial e automação': ['/inteligencia-artificial-feira-de-santana/', 'Ver IA e automação', 'automação e IA no atendimento'],
  'Tráfego pago e Google': ['/gestao-de-trafego/', 'Ver gestão de tráfego', 'anúncios com rastreamento'],
  'Negócios locais': ['/placa-nfc/', 'Ver a placa NFC', 'a placa NFC'],
  'Marketing para negócios locais': ['/criacao-de-sites-feira-de-santana/', 'Ver criação de sites', 'marketing digital para o meu negócio'],
  'SEO local por cidade': ['/criacao-de-sites-feira-de-santana/', 'Ver criação de sites', 'aparecer no Google na minha cidade'],
  'Placa NFC e QR Code': ['/placa-nfc/', 'Conhecer a placa NFC', 'a placa NFC com QR Code'],
};
const CTA_SLUG = [
  [/placa-nfc/, ['/placa-nfc/', 'Conhecer a placa NFC', 'a placa NFC com QR Code']],
  [/cardapio-digital/, ['/cardapio-digital/', 'Ver o cardápio digital', 'um cardápio digital']],
  [/agenda-online/, ['/agenda/', 'Conhecer o Infuse Agenda', 'agendamento online']],
  [/loja-virtual|ecommerce/, ['/loja-virtual-feira-de-santana/', 'Ver loja virtual', 'uma loja virtual']],
  [/automacao-de-processos/, ['/automacao-de-processos-feira-de-santana/', 'Ver automação de processos', 'automação de processos']],
  [/gestao-de-trafego/, ['/gestao-de-trafego/', 'Ver gestão de tráfego', 'anúncios com rastreamento']],
];
const ctaDe = (b) =>
  (CTA_SLUG.find(([re]) => re.test(b.slug)) ?? [null, CTA_CATEGORIA[b.categoria] ?? CTA_CATEGORIA['Sites e presença digital']])[1];

function renderPost(b) {
  const url = `${SITE}/blog/${b.slug}/`;
  const waCta = wa(`Olá! Li o artigo "${b.h1}" no blog da Infuse e quero conversar.`);
  const autor = AUTORES[b.autor];
  const [ctaHref, ctaLabel, ctaTema] = ctaDe(b);
  const waMeio = wa(`Olá! Li o artigo "${b.h1}" e quero saber mais sobre ${ctaTema}.`);
  const inline = `<aside class="cta-inline"><p>Quer ajuda com ${ctaTema}? Conte o seu caso e receba uma proposta sem compromisso.</p><a class="btn btn-wa" data-cta="inline" href="${waMeio}" target="_blank" rel="noopener">${WA_ICON}<span>Falar no WhatsApp</span></a></aside>`;
  const capaUrl = b.capa ? imgUrl(b.capa) : OG_IMAGE;
  const publicado = b.publicado ?? PUBLICADO_PADRAO;
  const atualizado = b.atualizado ?? publicado;
  const rel = (b.relacionados ?? []).map((s) => bySlug.get(s)).filter(Boolean);
  const ferr = ferramentasDe(b);
  const mais = BLOG.filter((o) => o.slug !== b.slug && o.categoria === b.categoria).slice(0, 4);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: b.h1,
      description: b.description,
      mainEntityOfPage: url,
      url,
      image: capaUrl,
      inLanguage: 'pt-BR',
      datePublished: publicado,
      dateModified: atualizado,
      articleSection: b.categoria,
      author: personRef(autor),
      publisher: ORG_REF,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
        { '@type': 'ListItem', position: 3, name: b.h1, item: url },
      ],
    },
  ];
  if (b.faq?.length)
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: b.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) } })),
    });

  const secao = (sec) =>
    `<h2>${esc(sec.h2)}</h2>
        ${(sec.p ?? []).map((t) => `<p>${t}</p>`).join('\n        ')}${
      sec.lista ? `\n        <ul class="bul">${sec.lista.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''
    }${sec.passos ? `\n        <ol class="num">${sec.passos.map((i) => `<li>${i}</li>`).join('')}</ol>` : ''}${
      sec.destaque ? `\n        <p class="callout">${sec.destaque}</p>` : ''
    }${sec.img ? `\n        ${figure(sec.img)}` : ''}${(sec.depois ?? []).map((t) => `\n        <p>${t}</p>`).join('')}`;

  return `${head({ title: b.title, description: b.description, url, image: capaUrl, extra: `${schema.map(jsonLd).join('\n')}\n<meta property="article:published_time" content="${publicado}">\n<meta property="article:modified_time" content="${atualizado}">` })}${siteHeader(waCta, BLOG_NAV)}

<main>
  <article>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li aria-current="page">${esc(b.categoria)}</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">${esc(b.categoria)}</p>
      <h1 style="max-width:24ch">${esc(b.h1)}</h1>
      <p class="lede">${b.lede}</p>
      <p class="meta byline">Por <a href="/autor/${autor.slug}/" rel="author">${esc(autor.nome)}</a>, ${esc(autor.cargo)} · <time datetime="${atualizado}">Atualizado em ${fmtData(atualizado)}</time> · ${b.minutos ?? 5} min de leitura</p>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap prose">
      ${b.capa ? `${figure(b.capa, { eager: true })}\n      ` : ''}${b.secoes.map((sec, i) => secao(sec) + (i === Math.floor(b.secoes.length / 2) - 1 ? `\n      ${inline}` : '')).join('\n      ')}
    </div>
  </section>
  <section class="wrap" style="padding-top:0">
    <aside class="autor-box" aria-label="Sobre o autor">
      <strong>${esc(autor.nome)}</strong>
      <p>${esc(autor.cargo)}. <a href="${autor.linkedin}" target="_blank" rel="noopener me">LinkedIn</a> · <a href="/autor/${autor.slug}/">Ver todos os artigos</a></p>
    </aside>
  </section>
  </article>

${b.faq?.length ? `  <section class="sec" id="faq">
    <div class="wrap">
      <div class="sec-head"><h2>Perguntas frequentes</h2></div>
      <div class="faq">
        ${b.faq.map((f) => `<details><summary><h3>${esc(f.q)}</h3></summary><p>${f.a}</p></details>`).join('\n        ')}
      </div>
    </div>
  </section>

` : ''}  <section class="final">
    <div class="wrap">
      <h2>Quer aplicar isso no seu negócio?</h2>
      <p>Conte o seu cenário. A gente analisa e envia uma proposta para o seu caso, direto pelo WhatsApp, sem compromisso.</p>
      <div class="cta-row">
        <a class="btn btn-wa" data-cta="final" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Falar com a Infuse</span></a>
        <a class="btn btn-ghost" href="${ctaHref}">${esc(ctaLabel)}</a>
      </div>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap">
${rel.length ? `      <h2>Serviços relacionados</h2>
      <ul class="links" style="margin-top:20px">${rel.map((r) => `<li><a href="${pagePath(r)}">${esc(pageName(r))}</a></li>`).join('')}</ul>
` : ''}${ferr.length ? `      <p class="links-title">Ferramentas gratuitas</p>
      <ul class="links">${ferr.map((t) => `<li><a href="/ferramentas/${t.slug}/">${esc(t.nome)}</a></li>`).join('')}</ul>
` : ''}${mais.length ? `      <p class="links-title">Leia também</p>
      <ul class="links">${mais.map((r) => `<li><a href="/blog/${r.slug}/">${esc(r.h1)}</a></li>`).join('')}</ul>
` : ''}      <p class="links-title"><a href="/blog/" style="text-decoration:none">Ver todos os artigos →</a></p>
    </div>
  </section>
</main>

${siteFooter()}

${FAB(waCta)}
</body>
</html>
`;
}

function renderBlogIndex() {
  const url = `${SITE}/blog/`;
  const waCta = wa('Olá! Vim pelo blog da Infuse e quero conversar.');
  const cats = [...new Set(BLOG.map((b) => b.categoria))];
  const title = 'Blog da Infuse | Sites, CRM, IA e Automação';
  const description =
    'Guias práticos sobre criação de sites, CRM, WhatsApp, inteligência artificial, automação e tráfego pago para empresas de Feira de Santana e região.';
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog da Infuse Software',
      url,
      inLanguage: 'pt-BR',
      publisher: ORG_REF,
      blogPost: BLOG.map((b) => ({ '@type': 'BlogPosting', headline: b.h1, url: `${SITE}/blog/${b.slug}/`, datePublished: b.publicado ?? PUBLICADO_PADRAO })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: url },
      ],
    },
  ];
  return `${head({ title, description, url, og: 'website', extra: schema.map(jsonLd).join('\n') })}${siteHeader(waCta, BLOG_NAV)}

<main>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li aria-current="page">Blog</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">Blog · Infuse Software</p>
      <h1>Guias para vender mais com tecnologia</h1>
      <p class="lede">Conteúdo direto ao ponto sobre sites, CRM, WhatsApp, inteligência artificial, automação e tráfego pago para quem tem um negócio em Feira de Santana e região.</p>
    </div>
  </section>
${cats.map((c, i) => `
  <section class="sec${i % 2 ? '' : ' sec-alt'}">
    <div class="wrap">
      <div class="sec-head"><h2>${esc(c)}</h2></div>
      <ul class="grid">
        ${BLOG.filter((b) => b.categoria === c).map((b) => `<li class="card"><h3><a href="/blog/${b.slug}/" style="text-decoration:none">${esc(b.h1)}</a></h3><p>${stripTags(b.lede)}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>`).join('\n')}

  <section class="final">
    <div class="wrap">
      <h2>Prefere conversar direto?</h2>
      <p>Conte o que a sua empresa precisa e receba uma proposta pelo WhatsApp, sem compromisso.</p>
      <div class="cta-row">
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Chamar no WhatsApp</span></a>
      </div>
    </div>
  </section>
</main>

${siteFooter()}

${FAB(waCta)}
</body>
</html>
`;
}

{
  const slugs = new Set();
  for (const b of BLOG) {
    if (slugs.has(b.slug)) throw new Error(`slug de blog duplicado: ${b.slug}`);
    slugs.add(b.slug);
    if (b.title.length > 60) console.warn(`[aviso] blog title com ${b.title.length} caracteres: ${b.slug}`);
    if (b.description.length > 160) console.warn(`[aviso] blog description com ${b.description.length} caracteres: ${b.slug}`);
    for (const r of b.relacionados ?? []) if (!bySlug.has(r)) throw new Error(`relacionado inexistente em ${b.slug}: ${r}`);
    const html = JSON.stringify(b);
    for (const m of html.matchAll(/href=\\"(\/[^"\\#]*)\\"/g)) {
      const l = m[1];
      const ok = l.startsWith('/ferramentas/') ? FERR.some((t) => `/ferramentas/${t.slug}/` === l) || l === '/ferramentas/' : l.startsWith('/blog/') ? BLOG.some((o) => `/blog/${o.slug}/` === l) : l === '/' || bySlug.has(l.replace(/^\/|\/$/g, ''));
      if (!ok) throw new Error(`link interno quebrado em ${b.slug}: ${l}`);
    }
    const dir = path.join(ROOT, 'public', 'blog', b.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), renderPost(b));
  }
  mkdirSync(path.join(ROOT, 'public', 'blog'), { recursive: true });
  writeFileSync(path.join(ROOT, 'public', 'blog', 'index.html'), renderBlogIndex());
  console.log(`✓ /blog/ (${BLOG.length} artigos)`);
}

function renderAutor(a) {
  const url = autorUrl(a);
  const waCta = wa(`Olá! Li os artigos de ${a.nome} no blog da Infuse e quero conversar.`);
  const posts = BLOG.filter((b) => AUTORES[b.autor] === a);
  const title = `${a.nome}, cofundador da Infuse | Artigos`;
  const description = `Artigos de ${a.nome}, cofundador da Infuse Software, sobre sites, CRM, WhatsApp, IA, automação e tráfego pago para empresas.`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'ProfilePage', url, name: title, inLanguage: 'pt-BR', mainEntity: personRef(a) },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
        { '@type': 'ListItem', position: 3, name: a.nome, item: url },
      ],
    },
  ];
  const cats = [...new Set(posts.map((b) => b.categoria))];
  return `${head({ title, description, url, og: 'profile', extra: schema.map(jsonLd).join('\n') })}${siteHeader(waCta, BLOG_NAV)}

<main>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li aria-current="page">${esc(a.nome)}</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">Autor</p>
      <h1>${esc(a.nome)}</h1>
      <p class="lede">${esc(a.cargo)}. A Infuse é uma empresa de tecnologia de Feira de Santana, na Bahia, que desenvolve sites, sistemas, automações, CRM e IA no WhatsApp.</p>
      <div class="cta-row">
        <a class="btn btn-ghost" href="${a.linkedin}" target="_blank" rel="noopener me">LinkedIn</a>
        <a class="btn btn-wa" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Falar no WhatsApp</span></a>
      </div>
    </div>
  </section>
${cats.map((c, i) => `
  <section class="sec${i % 2 ? '' : ' sec-alt'}">
    <div class="wrap">
      <div class="sec-head"><h2>${esc(c)}</h2></div>
      <ul class="links">
        ${posts.filter((b) => b.categoria === c).map((b) => `<li><a href="/blog/${b.slug}/">${esc(b.h1)}</a></li>`).join('\n        ')}
      </ul>
    </div>
  </section>`).join('\n')}
</main>

${siteFooter()}

${FAB(waCta)}
</body>
</html>
`;
}

{
  for (const a of Object.values(AUTORES)) {
    const dir = path.join(ROOT, 'public', 'autor', a.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), renderAutor(a));
  }
  console.log(`✓ /autor/ (${Object.keys(AUTORES).length} autores)`);
}


/* ---------- Ferramentas gratuitas ---------- */
const TOOL_RUNTIME = `(function(){
var $=function(id){return document.getElementById(id)};
function num(id){var v=parseFloat(String($(id).value).replace(/\\./g,'').replace(',','.'));return isNaN(v)?0:v}
function brl(n){return n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
function fmt(n){return n.toLocaleString('pt-BR',{maximumFractionDigits:1})}
function waLink(t){return 'https://wa.me/${WHATSAPP_NUMBER}?text='+encodeURIComponent(t)}
function track(n){try{gtag('event','tool_result',{tool_name:n,page_path:location.pathname})}catch(e){}}
`;

function renderFerramenta(t) {
  const url = `${SITE}/ferramentas/${t.slug}/`;
  const waCta = wa(`Olá! Usei a ferramenta "${t.nome}" no site da Infuse e quero conversar.`);
  const [ctaHref, ctaLabel] = t.cta;
  const rel = (t.relacionados ?? []).map((k) => bySlug.get(k)).filter(Boolean);
  const guias = (t.guias ?? []).map((k) => BLOG.find((b) => b.slug === k)).filter(Boolean);
  const outras = FERR.filter((o) => o.slug !== t.slug);
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t.nome,
      url,
      description: t.description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Qualquer navegador',
      inLanguage: 'pt-BR',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
      provider: ORG_REF,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Ferramentas', item: `${SITE}/ferramentas/` },
        { '@type': 'ListItem', position: 3, name: t.nome, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) } })),
    },
  ];
  return `${head({ title: t.title, description: t.description, url, og: 'website', extra: schema.map(jsonLd).join('\n') })}${siteHeader(waCta, BLOG_NAV)}

<main>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li><a href="/ferramentas/">Ferramentas</a></li>
          <li aria-current="page">${esc(t.nome)}</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">Ferramenta gratuita</p>
      <h1 style="max-width:22ch">${esc(t.h1)}</h1>
      <p class="lede">${t.lede}</p>
      <div class="tool" style="margin-top:28px">
        ${t.form}
      </div>
      <p class="note">Tudo é calculado no seu navegador. Nenhum dado é enviado ou guardado.</p>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap prose">
      ${t.explicacao.map((e) => `<h2>${esc(e.h2)}</h2>\n      ${e.p.map((x) => `<p>${x}</p>`).join('\n      ')}`).join('\n      ')}
    </div>
  </section>

  <section class="sec" id="faq">
    <div class="wrap">
      <div class="sec-head"><h2>Perguntas frequentes</h2></div>
      <div class="faq">
        ${t.faq.map((f) => `<details><summary><h3>${esc(f.q)}</h3></summary><p>${f.a}</p></details>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>Quer resolver isso de vez?</h2>
      <p>Conte o seu caso e a Infuse envia uma proposta pelo WhatsApp, sem compromisso.</p>
      <div class="cta-row">
        <a class="btn btn-wa" data-cta="final" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Falar com a Infuse</span></a>
        <a class="btn btn-ghost" href="${ctaHref}">${esc(ctaLabel)}</a>
      </div>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap">
${guias.length ? `      <h2>Guias relacionados</h2>
      <ul class="links" style="margin-top:20px">${guias.map((g) => `<li><a href="/blog/${g.slug}/">${esc(g.h1)}</a></li>`).join('')}</ul>
` : ''}${rel.length ? `      <p class="links-title">Serviços relacionados</p>
      <ul class="links">${rel.map((r) => `<li><a href="${pagePath(r)}">${esc(pageName(r))}</a></li>`).join('')}</ul>
` : ''}      <p class="links-title">Outras ferramentas gratuitas</p>
      <ul class="links">${outras.map((o) => `<li><a href="/ferramentas/${o.slug}/">${esc(o.nome)}</a></li>`).join('')}</ul>
    </div>
  </section>
</main>

${siteFooter()}

${FAB(waCta)}
<script>${TOOL_RUNTIME}${t.js}})();</script>
</body>
</html>
`;
}

function renderFerramentasHub() {
  const url = `${SITE}/ferramentas/`;
  const waCta = wa('Olá! Vim pelas ferramentas gratuitas da Infuse e quero conversar.');
  const title = 'Ferramentas Gratuitas para Empresas | Infuse';
  const description =
    'Gerador de link de WhatsApp, gerador de UTM, calculadoras de faltas, de leads perdidos e de ROAS e checklists de SEO local e de site. Grátis.';
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Ferramentas gratuitas da Infuse',
      url,
      inLanguage: 'pt-BR',
      hasPart: FERR.map((t) => ({ '@type': 'WebApplication', name: t.nome, url: `${SITE}/ferramentas/${t.slug}/` })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Ferramentas', item: url },
      ],
    },
  ];
  return `${head({ title, description, url, og: 'website', extra: schema.map(jsonLd).join('\n') })}${siteHeader(waCta, BLOG_NAV)}

<main>
  <section class="hero">
    <div class="wrap">
      <nav class="crumbs" aria-label="Você está em">
        <ol>
          <li><a href="/">Início</a></li>
          <li aria-current="page">Ferramentas</li>
        </ol>
      </nav>
      <p class="eyebrow" style="margin-top:36px">Ferramentas · Infuse Software</p>
      <h1>Ferramentas gratuitas para o seu negócio</h1>
      <p class="lede">Calculadoras, geradores e checklists para entender onde a sua empresa perde clientes e o que melhorar primeiro. Sem cadastro e sem enviar dados.</p>
    </div>
  </section>

  <section class="sec sec-alt">
    <div class="wrap">
      <ul class="grid">
        ${FERR.map((t) => `<li class="card"><h3><a href="/ferramentas/${t.slug}/" style="text-decoration:none">${esc(t.nome)}</a></h3><p>${t.lede}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>Prefere conversar direto?</h2>
      <p>Conte o que a sua empresa precisa e receba uma proposta pelo WhatsApp, sem compromisso.</p>
      <div class="cta-row">
        <a class="btn btn-wa" data-cta="final" href="${waCta}" target="_blank" rel="noopener">${WA_ICON}<span>Chamar no WhatsApp</span></a>
      </div>
    </div>
  </section>
</main>

${siteFooter()}

${FAB(waCta)}
</body>
</html>
`;
}

{
  for (const t of FERR) {
    if (t.title.length > 60) console.warn(`[aviso] ferramenta title com ${t.title.length} caracteres: ${t.slug}`);
    if (t.description.length > 160) console.warn(`[aviso] ferramenta description com ${t.description.length} caracteres: ${t.slug}`);
    const dir = path.join(ROOT, 'public', 'ferramentas', t.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), renderFerramenta(t));
  }
  writeFileSync(path.join(ROOT, 'public', 'ferramentas', 'index.html'), renderFerramentasHub());
  console.log(`✓ /ferramentas/ (${FERR.length} ferramentas)`);
}


/** Conteúdo estático da home: roda dentro de #root, e o React o substitui ao montar. */
{
  const featured = [
    'quanto-custa-um-site-em-feira-de-santana', 'como-aparecer-no-google-em-feira-de-santana', 'o-que-e-crm-e-para-que-serve',
    'crm-com-whatsapp-vantagens', 'como-funciona-ia-no-whatsapp-para-empresas', 'chatbot-ou-agente-de-ia-qual-a-diferenca',
    'o-que-automatizar-primeiro-na-sua-empresa', 'gestao-de-trafego-quanto-investir-em-anuncios', 'como-rastrear-de-onde-vem-seus-clientes',
    'placa-nfc-como-funciona-no-celular', 'site-proprio-ou-plataforma-pronta', 'google-meu-negocio-passo-a-passo',
  ];
  const li = (href, txt) => `<li><a href="${href}">${esc(txt)}</a></li>`;
  const svc = PAGES.filter((p) => p.kind === 'servico').map((p) => li(`/${p.slug}/`, `${p.nome} em Feira de Santana`));
  const prod = [li('/crm/', 'Infuse CRM'), li('/agenda/', 'Infuse Agenda'), li('/placa-nfc/', 'Placas NFC'), li('/cardapio-digital/', 'Cardápio digital'), li('/gestao-de-trafego/', 'Gestão de tráfego')];
  const seg = PAGES.filter((p) => p.kind === 'segmento').map((p) => li(`/${p.slug}/`, `${p.nome}`));
  const guias = featured.map((k) => BLOG.find((b) => b.slug === k)).filter(Boolean).map((b) => li(`/blog/${b.slug}/`, b.h1));
  const bloco = `<main class="seo-static">
<h1>Da Primeira Página ao Pós-Venda: Sua Empresa Vendendo 24h por Dia.</h1>
<p>A Infuse Software, de Feira de Santana, na Bahia, constrói sites ultrarrápidos, lojas virtuais, sistemas, CRM e automações com inteligência artificial no WhatsApp para empresas que querem vender mais e operar sem esforço manual.</p>
<p><a href="${wa('Olá! Vim pelo site da Infuse e gostaria de mais informações.')}" rel="noopener">Falar com a Infuse no WhatsApp</a></p>
<h2>Serviços e produtos</h2>
<ul>${[...svc, ...prod].join('')}</ul>
<h2>Soluções por tipo de negócio</h2>
<ul>${seg.join('')}</ul>
<h2>Ferramentas gratuitas</h2>
<ul>${FERR.map((t) => li(`/ferramentas/${t.slug}/`, t.nome)).join('')}</ul>
<h2>Guias e conteúdos</h2>
<ul>${guias.join('')}${li('/blog/', 'Ver todos os artigos do blog')}</ul>
<h2>Sobre a Infuse</h2>
<ul>${li('/sobre/', 'Sobre a Infuse')}${li('/contato/', 'Contato')}</ul>
</main>`;
  const file = path.join(ROOT, 'index.html');
  const html = readFileSync(file, 'utf8');
  const novo = html.replace(/<!--seo-static:start-->[\s\S]*?<!--seo-static:end-->/, () => `<!--seo-static:start-->${bloco}<!--seo-static:end-->`);
  if (novo === html && !html.includes(bloco)) throw new Error('marcadores seo-static ausentes em index.html');
  writeFileSync(file, novo);
  console.log('✓ index.html (conteúdo estático da home)');
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
${[
  ...FIXAS,
  ...PAGES.map((p) => [`${p.slug}/`, p.atualizado ?? DEFAULT_LASTMOD, p.kind === 'institucional' ? '0.70' : '0.90']),
  ['blog/', BLOG.map((b) => b.atualizado ?? b.publicado ?? PUBLICADO_PADRAO).sort().at(-1) ?? PUBLICADO_PADRAO, '0.70'],
  ...BLOG.map((b) => [`blog/${b.slug}/`, b.atualizado ?? b.publicado ?? PUBLICADO_PADRAO, '0.60']),
  ...Object.values(AUTORES).map((a) => [`autor/${a.slug}/`, PUBLICADO_PADRAO, '0.50']),
  ['ferramentas/', PUBLICADO_PADRAO, '0.80'],
  ...FERR.map((t) => [`ferramentas/${t.slug}/`, PUBLICADO_PADRAO, '0.80']),
]
  .map(entry)
  .join('\n')}
</urlset>
`,
);
console.log(`✓ sitemap.xml (${FIXAS.length + PAGES.length + BLOG.length + 1 + Object.keys(AUTORES).length + 1 + FERR.length} URLs)`);
