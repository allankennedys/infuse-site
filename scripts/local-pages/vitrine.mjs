/**
 * Componentes de "vitrine" para páginas de produto (`p.vitrine`, `p.tema`, `p.selo`):
 * abertura com celular, abas interativas, demo animada e carrossel mobile.
 *
 * Regras de design:
 * - Prints de celular sempre em modo claro (as telas são geradas assim).
 * - Sem JavaScript, tudo continua legível: as abas viram blocos empilhados e a
 *   demo mostra a conversa completa. O JS só acrescenta interação.
 * - `prefers-reduced-motion` desliga as animações.
 */
import { IMAGENS } from './imagens.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const I = {
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
};

const img = (key, { eager = false, cls = '' } = {}) => {
  const i = IMAGENS[key];
  if (!i) throw new Error(`imagem desconhecida: ${key}`);
  return `<img${cls ? ` class="${cls}"` : ''} src="${i.src}" alt="${esc(i.alt)}" width="${i.w}" height="${i.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};

/** Moldura de celular com a tela em modo claro. */
const phone = (key, opts = {}) =>
  `<div class="phone${opts.small ? ' phone-sm' : ''}"><div class="phone-screen">${img(key, opts)}</div></div>`;

/** Tema de cor da página (sobrescreve o azul padrão do modelo). */
export const temaCss = (t) => `
:root{--blue:${t.accent};--blue-2:${t.accent2};--blue-3:${t.accent3}}
.hero::before{background:radial-gradient(closest-side,${t.glow},transparent)}
.final{background:radial-gradient(ellipse at 50% 120%,${t.glow},transparent 62%)}
.eyebrow{color:${t.accent3}}
.links a:hover{border-color:${t.accent2};color:${t.accent3}}
`;

export const vitrineCss = `
.selo{display:inline-flex;align-items:center;gap:12px;padding:8px 16px 8px 10px;border:1px solid var(--border);border-radius:999px;background:rgba(255,255,255,.03)}
.selo img{width:26px;height:auto}
.selo span{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--blue-3)}
.hero-split{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:56px;align-items:center}
.hero-split .hero-copy .hero-title{max-width:none}
.hero-phone{position:relative;display:flex;justify-content:center;padding:28px 0 20px}
.phone{position:relative;width:min(292px,74vw);aspect-ratio:390/844;border-radius:46px;padding:10px;background:#0a0a0c;box-shadow:0 0 0 1.5px #2b2b31 inset,0 50px 100px -34px rgba(212,88,127,.55),0 24px 60px -24px #000}
.phone::before{content:"";position:absolute;top:19px;left:50%;width:84px;height:23px;margin-left:-42px;border-radius:99px;background:#0a0a0c;z-index:3}
.phone-screen{position:relative;height:100%;border-radius:37px;overflow:hidden;background:#f7f7f8}
.phone-screen img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.phone-sm{width:min(236px,68vw);border-radius:40px;padding:8px}.phone-sm .phone-screen{border-radius:32px}.phone-sm::before{top:15px;width:68px;height:19px;margin-left:-34px}
.hero-phone .phone-screen img{opacity:0;animation:slide 12s infinite}
.hero-phone .phone-screen img:nth-child(1){opacity:1;animation-delay:0s}
.hero-phone .phone-screen img:nth-child(2){animation-delay:4s}
.hero-phone .phone-screen img:nth-child(3){animation-delay:8s}
@keyframes slide{0%{opacity:0}6%{opacity:1}30%{opacity:1}36%{opacity:0}100%{opacity:0}}
.hero-phone .phone-screen img:nth-child(1){animation-name:slide1}
@keyframes slide1{0%{opacity:1}30%{opacity:1}36%{opacity:0}94%{opacity:0}100%{opacity:1}}
.tabs-nav{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:26px}
.tabs-nav button{font:inherit;font-weight:600;font-size:.95rem;color:var(--muted);background:transparent;border:1px solid var(--border);border-radius:999px;padding:10px 18px;cursor:pointer;transition:all .2s}
.tabs-nav button:hover{color:var(--text);border-color:rgba(255,255,255,.3)}
.tabs-nav button[aria-selected=true]{color:#fff;background:var(--blue);border-color:var(--blue)}
.tab-panel{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:36px;align-items:center;margin-bottom:44px}
[data-js] .tab-panel{display:none;margin-bottom:0}
[data-js] .tab-panel.on{display:grid;animation:fadeup .45s ease both}
@keyframes fadeup{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.tab-panel h3{font-size:1.5rem;letter-spacing:-.025em}
.tab-panel p{color:#d4d4d8;margin-top:12px}
.tab-panel .checks{margin-top:20px}
.tab-panel figure img{width:100%;height:auto;border-radius:20px;border:1px solid var(--border);box-shadow:0 30px 70px -34px rgba(0,0,0,.9)}
.demo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.9fr);gap:56px;align-items:center}
.demo-chat{position:relative;max-width:420px;margin:0 auto;width:100%;min-height:290px;padding:22px;border-radius:26px;background:#f7f7f8;color:#141416;box-shadow:0 40px 90px -40px rgba(212,88,127,.5)}
.demo-chat .row{display:flex;gap:10px;align-items:flex-end;margin-bottom:14px}
.demo-chat .av{width:34px;height:34px;border-radius:50%;background:#e7e7ea;color:#6f7078;font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.demo-chat .bub{background:#fff;border:1px solid #e7e7ea;border-radius:16px 16px 16px 5px;padding:10px 14px;font-size:.92rem;max-width:80%}
.demo-chat .bub b{color:#b02a57}
.demo-chat .gat{display:flex;justify-content:center;margin:2px 0 14px}
.demo-chat .gat span{display:inline-flex;align-items:center;gap:6px;font-size:.76rem;font-weight:600;color:#2f7d55;background:rgba(47,125,85,.1);border:1px solid rgba(47,125,85,.25);border-radius:999px;padding:5px 12px}
.demo-chat .gat svg{width:13px;height:13px}
.demo-chat .outs{display:grid;justify-items:end}.demo-chat .outs>*{grid-area:1/1;align-self:start}.demo-chat .out{display:flex;justify-content:flex-end;margin-bottom:6px}
.demo-chat .out .bub{background:#b02a57;color:#fff;border:0;border-radius:16px 16px 5px 16px}
.demo-chat .typing{display:flex;gap:4px;padding:12px 16px;background:#b02a57;border-radius:16px 16px 5px 16px}
.demo-chat .typing i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.85);animation:blink 1s infinite}
.demo-chat .typing i:nth-child(2){animation-delay:.15s}.demo-chat .typing i:nth-child(3){animation-delay:.3s}
@keyframes blink{0%,60%,100%{opacity:.3;transform:none}30%{opacity:1;transform:translateY(-3px)}}
.dm1,.dm2,.dm3,.dm4{animation-duration:11s;animation-iteration-count:infinite;animation-fill-mode:both}
.dm1{animation-name:s1}.dm2{animation-name:s2}.dm3{animation-name:s3}.dm4{animation-name:s4}
@keyframes s1{0%,3%{opacity:0;transform:translateY(10px)}8%,92%{opacity:1;transform:none}97%,100%{opacity:0}}
@keyframes s2{0%,20%{opacity:0;transform:scale(.9)}26%,92%{opacity:1;transform:none}97%,100%{opacity:0}}
@keyframes s3{0%,36%{opacity:0}40%,50%{opacity:1}53%,100%{opacity:0}}
@keyframes s4{0%,52%{opacity:0;transform:translateY(10px)}58%,92%{opacity:1;transform:none}97%,100%{opacity:0}}
.demo-bullets{margin-top:22px}
.mob{display:flex;gap:30px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 4px 30px;margin:0 -4px;scrollbar-width:thin}
.mob figure{scroll-snap-align:center;flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:16px}
.mob figcaption{font-size:.9rem;color:var(--muted);text-align:center;max-width:220px}
.mob-hint{font-size:.82rem;color:var(--muted);margin-top:4px}
.rv-on .rv{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
.rv-on .rv.in{opacity:1;transform:none}
@media(max-width:900px){
  .hero-split{display:flex;flex-direction:column;gap:0}
  .hero-split .hero-copy{display:contents}
  .hero-split .selo{order:1}.hero-split h1{order:2}.hero-split .lede{order:3}
  .hero-phone{order:4;padding:26px 0 18px}
  .hero-split .checks{order:5}.hero-split .cta-row{order:6}.hero-split .note{order:7}
  .phone{width:min(248px,66vw);border-radius:40px;padding:8px}.phone-screen{border-radius:32px}.phone::before{top:15px;width:70px;height:19px;margin-left:-35px}
  .tab-panel{grid-template-columns:1fr;gap:22px}
  .demo{grid-template-columns:1fr;gap:32px}
}
@media(prefers-reduced-motion:reduce){
  .hero-phone .phone-screen img,.dm1,.dm2,.dm3,.dm4,.demo-chat .typing i,[data-js] .tab-panel.on{animation:none!important}
  .hero-phone .phone-screen img{opacity:0}.hero-phone .phone-screen img:nth-child(1){opacity:1}
  .dm1,.dm2,.dm4{opacity:1!important;transform:none!important}.dm3{display:none}
  .rv-on .rv{opacity:1;transform:none;transition:none}
}
`;

export const vitrineJs = `
(function(){
  document.querySelectorAll('[data-tabs]').forEach(function(root){
    var btns=[].slice.call(root.querySelectorAll('[role=tab]')),panels=[].slice.call(root.querySelectorAll('.tab-panel'));
    root.setAttribute('data-js','');
    function show(i,focus){btns.forEach(function(b,k){b.setAttribute('aria-selected',k===i?'true':'false');b.tabIndex=k===i?0:-1});panels.forEach(function(p,k){p.classList.toggle('on',k===i)});if(focus)btns[i].focus();try{gtag('event','postline_tab',{tab:btns[i].textContent.trim(),page_path:location.pathname})}catch(e){}}
    btns.forEach(function(b,i){b.addEventListener('click',function(){show(i)});b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:-1;if(n>=0){e.preventDefault();show((n+btns.length)%btns.length,true)}})});
    show(0);
  });
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    var els=document.querySelectorAll('.rv');
    document.documentElement.classList.add('rv-on');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }
})();
`;

/** Celular da abertura: as telas do app (modo claro) trocam sozinhas. */
export const vitrineHero = (v) => `<div class="hero-phone">
        <div class="phone"><div class="phone-screen">${v.hero.telas.map((k, n) => img(k, { eager: n === 0 })).join('')}</div></div>
      </div>`;

/** Abas: cada recurso com tela e texto. Sem JS, todos os painéis aparecem empilhados. */
export const vitrineAbas = (a) => `
  <section class="sec" id="recursos-em-acao">
    <div class="wrap">
      <div class="sec-head rv">
        <h2>${esc(a.h2)}</h2>
        <p>${a.sub}</p>
      </div>
      <div data-tabs>
        <div class="tabs-nav" role="tablist" aria-label="Recursos do Postline">
          ${a.itens.map((t) => `<button type="button" role="tab" aria-selected="false">${esc(t.rotulo)}</button>`).join('\n          ')}
        </div>
        ${a.itens
          .map(
            (t) => `<div class="tab-panel rv" role="tabpanel">
          <div>
            <h3>${esc(t.h3)}</h3>
            <p>${t.p}</p>
            <ul class="checks">${t.pontos.map((x) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>${esc(x)}</span></li>`).join('')}</ul>
          </div>
          <figure>${img(t.img)}</figure>
        </div>`,
          )
          .join('\n        ')}
      </div>
    </div>
  </section>
`;

/** Demo animada: comentário, palavra-gatilho, resposta no direct. */
export const vitrineDemo = (d) => `
  <section class="sec sec-alt" id="resposta-automatica">
    <div class="wrap demo">
      <div class="rv">
        <h2>${esc(d.h2)}</h2>
        ${d.p.map((x) => `<p class="prose-p" style="color:#d4d4d8;margin-top:16px;font-size:1.04rem">${x}</p>`).join('\n        ')}
        <ul class="checks demo-bullets">${d.pontos.map((x) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>${esc(x)}</span></li>`).join('')}</ul>
      </div>
      <div class="demo-chat rv" role="img" aria-label="${esc(d.aria)}">
        <div class="row dm1"><div class="av">${esc(d.cena.iniciais)}</div><div class="bub">${d.cena.comentario}</div></div>
        <div class="gat dm2"><span>${I.zap} Palavra-gatilho: <b>${esc(d.cena.gatilho)}</b></span></div>
        <div class="outs"><div class="out dm3"><div class="typing"><i></i><i></i><i></i></div></div>
        <div class="out dm4"><div class="bub">${esc(d.cena.resposta)}</div></div></div>
      </div>
    </div>
  </section>
`;

/** Carrossel de telas do app no celular (modo claro). */
export const vitrineCarrossel = (c) => `
  <section class="sec" id="no-celular">
    <div class="wrap">
      <div class="sec-head rv">
        <h2>${esc(c.h2)}</h2>
        <p>${c.sub}</p>
      </div>
      <div class="mob rv" tabindex="0" aria-label="Telas do Postline no celular">
        ${c.telas.map((t) => `<figure>${phone(t.img, { small: true })}<figcaption>${esc(t.leg)}</figcaption></figure>`).join('\n        ')}
      </div>
      <p class="mob-hint">Arraste para o lado para ver mais telas.</p>
    </div>
  </section>
`;
