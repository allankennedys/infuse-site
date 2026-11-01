/* Medição GA4: evento `whatsapp_click` em todo clique/abertura de link do WhatsApp. */
(function () {
  var seen = 0;
  function send(url, text, method, where) {
    var now = Date.now();
    if (now - seen < 500) return; // evita contagem dupla
    seen = now;
    window.dataLayer = window.dataLayer || [];
    var g = window.gtag || function () { window.dataLayer.push(arguments); };
    g('event', 'whatsapp_click', {
      link_url: String(url).slice(0, 100),
      link_text: String(text || '').trim().slice(0, 80),
      click_method: method,
      cta_location: where || '',
      page_path: location.pathname,
      transport_type: 'beacon'
    });
  }
  function isWa(u) { return typeof u === 'string' && u.indexOf('wa.me') !== -1; }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (a && isWa(a.href)) send(a.href.split('?')[0], a.textContent, 'link', a.getAttribute('data-cta'));
  }, true);

  // Abertura via JS (ex.: formulário de contato que monta a mensagem)
  var open = window.open;
  window.open = function (url) {
    if (isWa(String(url))) send(String(url).split('?')[0], '', 'form');
    return open.apply(this, arguments);
  };
})();
