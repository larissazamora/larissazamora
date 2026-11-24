/* Larissa Zamora · portfólio — comportamento da página.
   O conteúdo fica em js/conteudo.js; normalmente não é preciso mexer aqui. */
(function () {
  'use strict';

  var C = window.CONTEUDO || {};
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var list = function (k) { return Array.isArray(C[k]) ? C[k] : []; };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Links: WhatsApp, redes e e-mail ---------- */
  function waLink(msg) {
    return 'https://wa.me/' + String(C.whatsapp || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(msg);
  }
  $$('[data-wa]').forEach(function (a) {
    a.href = waLink(C.mensagemPadrao || 'Olá, Larissa!');
    a.target = '_blank';
    a.rel = 'noopener';
  });
  var redes = C.redes || {};
  $$('[data-social]').forEach(function (a) {
    var k = a.dataset.social;
    if (k === 'email') {
      a.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Parceria (via site)');
    } else if (redes[k]) {
      a.href = redes[k];
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.hidden = true;
    }
  });
  if (C.email) $$('[data-email]').forEach(function (el) { el.textContent = C.email; });

  if (C.fotoPerfil) {
    $('#hero-foto').innerHTML = '<img src="' + esc(C.fotoPerfil) + '" alt="Foto de Larissa Zamora" fetchpriority="high">';
  }

  /* ---------- Marcas (adesivos) ---------- */
  var CORES = {
    navy: ['#1B2A41', '#F6F0E6'], caramel: ['#B07F4F', '#FFFCF6'], cream: ['#FFFCF6', '#1B2A41'],
    brown: ['#7A5236', '#F6F0E6'], sand: ['#D9C3A3', '#4A3326'], dusty: ['#A3B5C6', '#1B2A41'],
    cocoa: ['#4A3326', '#ECE1D0'], blue: ['#2A3F5F', '#ECE1D0']
  };
  // tamanho máximo da letra e largura média de cada estilo (para o nome caber no adesivo)
  var ESTILOS = { serif: [22, .42], caps: [13, .74], sans: [17, .56], script: [24, .40], display: [17, .58] };

  function renderMarcas() {
    var ul = $('#stickers');
    if (!ul) return;
    var rots = [-6, 4, -3, 6, -5, 3, -4, 5];
    var marcas = list('marcas');
    var html = marcas.map(function (m, i) {
      var cor = CORES[m.cor] || CORES.navy;
      var est = ESTILOS[m.estilo] ? m.estilo : 'serif';
      var maior = Math.max.apply(null, String(m.nome).split(/\s+/).map(function (w) { return w.length; }).concat(3));
      var fs = Math.min(ESTILOS[est][0], 70 / (maior * ESTILOS[est][1])).toFixed(1);
      var face = m.logo
        ? '<img src="' + esc(m.logo) + '" alt="' + esc(m.nome) + '" loading="lazy">'
        : '<b class="st-' + est + '" style="--fs:' + fs + 'cqi">' + esc(m.nome) + '</b>';
      return '<li class="sticker-item reveal" style="--d:' + (i * 60) + 'ms">' +
        '<span class="sticker" style="--bg:' + cor[0] + ';--fg:' + cor[1] + ';--rot:' + rots[i % rots.length] + 'deg">' +
        '<span class="face">' + face + '</span>' +
        '<span class="flap-wrap" aria-hidden="true"><span class="flap"></span></span>' +
        '</span>' +
        '<span class="sticker-tag">' + esc(m.tag || '') + '</span>' +
        '</li>';
    }).join('');
    html += '<li class="sticker-item reveal" style="--d:' + (marcas.length * 60) + 'ms">' +
      '<a href="#contato" class="sticker cta" style="--rot:-5deg"><span class="face"><b>Sua marca aqui</b><i aria-hidden="true">✦</i></span></a>' +
      '<span class="sticker-tag">vamos conversar?</span></li>';
    ul.innerHTML = html;
    $$('[data-count="marcas"]').forEach(function (el) { el.textContent = marcas.length; });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitStickers); else fitStickers();
  }

  // diminui a letra até o nome caber inteiro no adesivo (sem quebrar palavras)
  function fitStickers() {
    $$('.sticker:not(.cta) .face b').forEach(function (b) {
      var st = b.closest('.sticker');
      var W = st.clientWidth;
      if (!W) return;
      var maxH = W * 0.6;
      var fs = parseFloat(getComputedStyle(b).fontSize);
      var guard = 60;
      b.style.fontSize = fs + 'px';
      while (guard-- && fs > 7 && (b.scrollWidth > b.clientWidth + 1 || b.scrollHeight > maxH)) {
        fs -= 0.5;
        b.style.fontSize = fs + 'px';
      }
      b.style.fontSize = (fs / W * 100).toFixed(2) + 'cqi';
    });
  }

  /* ---------- Vídeos ---------- */
  var GRADS = [
    ['#1B2A41', '#3E5677'], ['#B07F4F', '#7A5236'], ['#A3B5C6', '#2A3F5F'], ['#4A3326', '#B07F4F'],
    ['#2A3F5F', '#A3B5C6'], ['#7A5236', '#D9C3A3'], ['#3E5677', '#B07F4F'], ['#B07F4F', '#1B2A41'], ['#4A3326', '#2A3F5F']
  ];

  function renderVideos() {
    var grid = $('#video-grid');
    if (!grid) return;
    grid.innerHTML = list('videos').map(function (v, i) {
      var g = GRADS[i % GRADS.length];
      var media = v.src
        ? '<video src="' + esc(v.src) + '"' + (v.capa ? ' poster="' + esc(v.capa) + '"' : '') + ' muted loop playsinline preload="metadata"></video>'
        : v.capa
          ? '<img src="' + esc(v.capa) + '" alt="" loading="lazy">'
          : '<span class="vc-ph" aria-hidden="true">' + esc(String(v.marca || '?').trim().charAt(0)) + '</span>';
      return '<button type="button" class="video-card reveal" data-cat="' + esc(v.categoria) + '" data-i="' + i + '" ' +
        'style="--g1:' + g[0] + ';--g2:' + g[1] + ';--d:' + ((i % 5) * 70) + 'ms" ' +
        'aria-label="Assistir: ' + esc(v.marca) + ', ' + esc(v.titulo) + '">' +
        '<span class="vc-media">' + media +
        '<span class="vc-tag">' + esc(v.tipo) + '</span>' +
        '<span class="vc-play" aria-hidden="true"><svg><use href="#i-play"/></svg></span>' +
        '<span class="vc-info"><b>' + esc(v.marca) + '</b><small>' + esc(v.titulo) + '</small></span>' +
        '</span></button>';
    }).join('');

    // pré-visualização ao passar o mouse
    $$('.video-card', grid).forEach(function (card) {
      var video = $('video', card);
      if (!video) return;
      card.addEventListener('mouseenter', function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); });
      card.addEventListener('mouseleave', function () { video.pause(); video.currentTime = 0; });
    });

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.video-card');
      if (!card) return;
      var v = list('videos')[card.dataset.i];
      if (v.src) {
        openModal('<video src="' + esc(v.src) + '"' + (v.capa ? ' poster="' + esc(v.capa) + '"' : '') + ' controls autoplay playsinline></video>', v.marca + ' · ' + v.titulo);
      } else if (v.link) {
        window.open(v.link, '_blank', 'noopener');
      } else {
        toast('Esse vídeo chega em breve por aqui ✨');
      }
    });

    // filtros: esconde os que não têm vídeos
    $$('.filter').forEach(function (b) {
      var f = b.dataset.filter;
      if (f !== 'todos' && !list('videos').some(function (v) { return v.categoria === f; })) b.hidden = true;
      b.addEventListener('click', function () {
        $$('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        $$('.video-card', grid).forEach(function (c) {
          var show = f === 'todos' || c.dataset.cat === f;
          c.hidden = !show;
          if (show && !reduced) { c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop'); }
        });
      });
    });
  }

  /* ---------- Feedbacks ---------- */
  function renderPrints() {
    var box = $('#prints');
    if (!box) return;
    var rots = [-2.5, 1.8, -1.2, 2.4, -2, 1.4];
    var padroes = [[72, 90, 54], [86, 62], [60, 92, 76, 42], [80, 50, 88], [66, 84], [90, 70, 46]];
    box.innerHTML = list('feedbacks').map(function (f, i) {
      var inner;
      if (f.img) {
        inner = '<img src="' + esc(f.img) + '" alt="Print de feedback de ' + esc(f.marca) + '" loading="lazy">';
      } else {
        var p = padroes[i % padroes.length];
        inner = '<span class="print-ph">' + p.map(function (w, j) {
          return '<span class="bub' + (j === p.length - 1 && i % 2 ? ' me' : '') + '" style="--w:' + w + '%"></span>';
        }).join('') + '<span class="ph-label">espaço para o print</span></span>';
      }
      return '<button type="button" class="print reveal" data-i="' + i + '" style="--rot:' + rots[i % rots.length] + 'deg;--d:' + (i * 80) + 'ms" aria-label="Ampliar feedback de ' + esc(f.marca) + '">' +
        '<span class="print-inner">' + inner + '</span>' +
        '<span class="print-cap">' + esc(f.marca) + '</span></button>';
    }).join('');

    box.addEventListener('click', function (e) {
      var b = e.target.closest('.print');
      if (!b) return;
      var f = list('feedbacks')[b.dataset.i];
      if (f.img) openModal('<img src="' + esc(f.img) + '" alt="Print de feedback de ' + esc(f.marca) + '">', f.marca);
      else toast('Print em breve por aqui ✨');
    });
  }

  /* ---------- Cupons ---------- */
  function renderCupons() {
    var box = $('#cupons-lista');
    if (!box) return;
    box.innerHTML = list('cupons').map(function (c, i) {
      return '<article class="ticket reveal" style="--d:' + (i * 90) + 'ms">' +
        '<div class="stub"><span class="val">' + esc(c.valor) + '</span><span class="suf">' + esc(c.sufixo) + '</span></div>' +
        '<div class="t-body">' +
        (c.categoria ? '<span class="t-cat">' + esc(c.categoria) + '</span>' : '') +
        '<h3 class="t-brand">' + esc(c.empresa) + '</h3>' +
        '<p class="t-desc">' + esc(c.detalhe) + '</p>' +
        '<div class="code-row"><span class="code">' + esc(c.codigo) + '</span>' +
        '<button type="button" class="copy" data-copy="' + esc(c.codigo) + '" data-copy-msg="Cupom ' + esc(c.codigo) + ' copiado!">Copiar</button></div>' +
        (c.link ? '<a class="t-link" href="' + esc(c.link) + '" target="_blank" rel="noopener">Usar cupom<svg><use href="#i-arrow"/></svg></a>' : '') +
        '</div></article>';
    }).join('');
  }

  /* ---------- Lifestyle ---------- */
  var CENAS = {
    praia: function (id) {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2D5B2"/><stop offset=".55" stop-color="#E2A48E"/></linearGradient></defs>' +
        '<rect width="100" height="125" fill="url(#' + id + ')"/><circle cx="50" cy="62" r="15" fill="#FCE9CC"/><rect y="64" width="100" height="30" fill="#7F9BB3"/>' +
        '<path d="M8 72h26M52 70h40M18 79h50M62 86h26M6 88h30" stroke="#B9CAD7" stroke-width="1.2" stroke-linecap="round" opacity=".8"/>' +
        '<path d="M0 94c20-6 45-7 100-2v33H0z" fill="#E8D5B7"/></svg>';
    },
    serra: function (id) {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C6D4DF"/><stop offset="1" stop-color="#F0E5D3"/></linearGradient></defs>' +
        '<rect width="100" height="125" fill="url(#' + id + ')"/><circle cx="70" cy="34" r="9" fill="#FAEFDC"/>' +
        '<path d="M0 125V78l22-26 16 18 20-30 24 32 18-14v67z" fill="#93A8BC"/>' +
        '<path d="M0 125V96l18-14 22 16 26-24 34 30v21z" fill="#55707A"/>' +
        '<path d="M0 125v-14c25-6 60-8 100 0v14z" fill="#3E5450"/></svg>';
    },
    cidade: function (id) {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2A41"/><stop offset="1" stop-color="#6F7F98"/></linearGradient></defs>' +
        '<rect width="100" height="125" fill="url(#' + id + ')"/><circle cx="76" cy="26" r="7" fill="#F3E3C7"/>' +
        '<path d="M0 125V82h12V68h10v14h8V56h16v28h8V72h12v-8h8v8h10V62h16v63z" fill="#14213A"/>' +
        '<g fill="#E8C98F" opacity=".85"><rect x="34" y="61" width="3" height="4"/><rect x="40" y="61" width="3" height="4"/><rect x="34" y="70" width="3" height="4"/><rect x="40" y="78" width="3" height="4"/>' +
        '<rect x="15" y="73" width="3" height="4"/><rect x="88" y="68" width="3" height="4"/><rect x="88" y="77" width="3" height="4"/><rect x="58" y="77" width="3" height="4"/><rect x="72" y="70" width="3" height="4"/></g>' +
        '<path d="M0 108h100v17H0z" fill="#0F1A2C"/><path d="M8 116h14M40 116h20M74 116h16" stroke="#E8C98F" stroke-width="1" opacity=".5"/></svg>';
    },
    cafe: function () {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="125" fill="#C39A71"/>' +
        '<path d="M0 30h100M0 62h100M0 94h100" stroke="#B3895F" stroke-width="1.2"/>' +
        '<circle cx="48" cy="64" r="31" fill="#F4ECE0"/><path d="M70 60h7a6 6 0 0 1 0 12h-6" fill="none" stroke="#FFFBF5" stroke-width="4"/>' +
        '<circle cx="48" cy="64" r="22" fill="#FFFBF5"/><circle cx="48" cy="64" r="18" fill="#7A5236"/>' +
        '<path d="M48 74c-9-6-10-13-6-16 3-2 6 0 6 3 0-3 3-5 6-3 4 3 3 10-6 16z" fill="#EBD8BE"/></svg>';
    },
    bemestar: function () {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="125" fill="#ECE1D0"/>' +
        '<circle cx="50" cy="40" r="10" fill="#B07F4F" opacity=".85"/>' +
        '<path d="M16 125V72a34 34 0 0 1 68 0v53z" fill="#D9C3A3"/><path d="M30 125V80a20 20 0 0 1 40 0v45z" fill="#B07F4F" opacity=".5"/>' +
        '<path d="M84 116c-4-14 0-26 10-32-2 12-4 22-10 32z" fill="#7C8F6E"/><path d="M84 116c-10-8-14-18-12-28 8 8 11 16 12 28z" fill="#95A780"/></svg>';
    },
    humor: function () {
      return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="125" fill="#E3BE86"/>' +
        '<circle cx="50" cy="58" r="28" fill="#FFF6E6"/>' +
        '<path d="M37 53q4-6 9 0M54 53q4-6 9 0" fill="none" stroke="#1B2A41" stroke-width="2.6" stroke-linecap="round"/>' +
        '<path d="M37 63c4 12 22 12 26 0z" fill="#1B2A41"/>' +
        '<text x="50" y="106" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="17" fill="#7A5236">haha!</text></svg>';
    }
  };

  function renderLifestyle() {
    var box = $('#polaroids');
    if (!box) return;
    var rots = [-2, 1.5, -1, 2, -1.5, 1];
    box.innerHTML = list('lifestyle').map(function (p, i) {
      var cena = CENAS[p.cena] || CENAS.praia;
      var pic = p.img
        ? (/\.(mp4|webm|mov)$/i.test(p.img)
          ? '<video src="' + esc(p.img) + '" muted loop autoplay playsinline></video>'
          : '<img src="' + esc(p.img) + '" alt="' + esc(p.legenda) + '" loading="lazy" draggable="false">')
        : cena('cena-' + i);
      var tag = p.link ? 'a' : 'div';
      var attrs = p.link ? ' href="' + esc(p.link) + '" target="_blank" rel="noopener"' : '';
      return '<' + tag + ' class="polaroid reveal"' + attrs + ' style="--rot:' + rots[i % rots.length] + 'deg;--d:' + (i * 80) + 'ms">' +
        '<span class="pic">' + pic + '</span>' +
        '<span class="pol-cap">' + esc(p.legenda) + '</span>' +
        (p.tag ? '<span class="pol-tag">' + esc(p.tag) + '</span>' : '') +
        '</' + tag + '>';
    }).join('');

    // setas
    $$('.car-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var card = $('.polaroid', box);
        var step = card ? card.getBoundingClientRect().width + 28 : 300;
        box.scrollBy({ left: step * Number(b.dataset.dir), behavior: reduced ? 'auto' : 'smooth' });
      });
    });

    // arrastar com o mouse
    var drag = null;
    box.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      drag = { x: e.clientX, s: box.scrollLeft, moved: false };
    });
    window.addEventListener('pointermove', function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; box.classList.add('dragging'); }
      if (drag.moved) box.scrollLeft = drag.s - dx;
    });
    window.addEventListener('pointerup', function () {
      if (!drag) return;
      box.classList.remove('dragging');
      setTimeout(function () { drag = null; }, 0);
    });
    box.addEventListener('click', function (e) {
      if (drag && drag.moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  /* ---------- Esconde seções vazias ---------- */
  function hideIfEmpty(key, id) {
    if (list(key).length) return;
    var s = document.getElementById(id);
    if (s) s.hidden = true;
    $$('a[href="#' + id + '"]').forEach(function (a) { (a.closest('li') || a).hidden = true; });
  }

  renderMarcas();
  renderVideos();
  renderPrints();
  renderCupons();
  renderLifestyle();
  hideIfEmpty('videos', 'videos');
  hideIfEmpty('feedbacks', 'feedbacks');
  hideIfEmpty('cupons', 'cupons');
  hideIfEmpty('lifestyle', 'lifestyle');

  /* ---------- Aviso (toast) ---------- */
  var toastEl = $('.toast');
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }

  /* ---------- Copiar (cupons e e-mail) ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    ta.remove();
    return ok;
  }
  $$('[data-copy-email]').forEach(function (b) {
    b.dataset.copy = C.email || '';
    b.dataset.copyMsg = 'E-mail copiado!';
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (!b) return;
    var text = b.dataset.copy;
    copyText(text).then(function (ok) {
      toast(ok ? b.dataset.copyMsg : 'Copie manualmente: ' + text);
      if (ok && b.classList.contains('copy')) {
        b.classList.add('done');
        b.textContent = 'Copiado ✓';
        setTimeout(function () { b.classList.remove('done'); b.textContent = 'Copiar'; }, 2200);
      }
    });
  });

  /* ---------- Janela de vídeo / print ---------- */
  var modal = $('.modal');
  var modalBody = $('.modal-body');
  var lastFocus = null;
  function openModal(html, caption) {
    lastFocus = document.activeElement;
    modalBody.innerHTML = html + (caption ? '<p class="modal-cap">' + esc(caption) + '</p>' : '');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close').focus();
  }
  function closeModal() {
    modal.hidden = true;
    modalBody.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  $('.modal-close').addEventListener('click', closeModal);
  $('.modal-backdrop').addEventListener('click', closeModal);

  /* ---------- Menu do celular ---------- */
  var menu = $('#menu-mobile');
  var menuBtn = $('.menu-btn');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('.mm-close').focus(); else menuBtn.focus({ preventScroll: true });
  }
  menuBtn.addEventListener('click', function () { setMenu(true); });
  $('.mm-close').addEventListener('click', function () { setMenu(false); });
  $$('#menu-mobile a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!modal.hidden) closeModal();
    if (menu.classList.contains('open')) setMenu(false);
  });

  /* ---------- Formulário → WhatsApp ---------- */
  var form = $('#wa-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nomeInput = $('#f-nome');
    var nome = nomeInput.value.trim();
    var empresa = $('#f-empresa').value.trim();
    var tipoEl = $('input[name="tipo"]:checked', form);
    var tipo = tipoEl ? tipoEl.value : 'uma parceria';
    var msg = $('#f-msg').value.trim();
    var note = $('#form-note');
    if (!nome) {
      nomeInput.classList.add('invalid');
      note.textContent = 'Escreva seu nome para eu saber com quem estou falando.';
      nomeInput.focus();
      return;
    }
    nomeInput.classList.remove('invalid');
    note.textContent = '';
    var linhas = [
      'Olá, Larissa! 👋 Vim pelo seu site.',
      'Meu nome é ' + nome + (empresa ? ', da ' + empresa : '') + '.',
      'Tenho interesse em: ' + tipo + '.'
    ];
    if (msg) linhas.push('', msg);
    window.open(waLink(linhas.join('\n')), '_blank', 'noopener');
  });

  /* ---------- Palavra que muda no topo ---------- */
  var words = $$('.rotator .w');
  if (!reduced && words.length > 1) {
    var wi = 0;
    setInterval(function () {
      var cur = words[wi];
      cur.classList.remove('is-on');
      cur.classList.add('is-out');
      wi = (wi + 1) % words.length;
      words[wi].classList.remove('is-out');
      words[wi].classList.add('is-on');
      setTimeout(function () { cur.classList.remove('is-out'); }, 600);
    }, 2600);
  }

  /* ---------- Cabeçalho, botão flutuante e menu ativo ---------- */
  var header = $('.site-header');
  var fab = $('.fab');
  var contactVisible = false;
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 24);
    fab.classList.toggle('show', y > window.innerHeight * 0.7 && !contactVisible);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      contactVisible = entries[0].isIntersecting;
      onScroll();
    }, { threshold: 0.12 }).observe($('#contato'));

    var navLinks = $$('.nav-links a');
    var secIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { secIO.observe(s); });

    /* Aparecer ao rolar: só o que está abaixo da tela começa escondido */
    if (!reduced) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
      var limit = window.innerHeight * 0.92;
      $$('.reveal').forEach(function (el) {
        if (el.getBoundingClientRect().top > limit) { el.classList.add('pre'); io.observe(el); }
      });
    }

    /* Contadores */
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        countIO.unobserve(e.target);
        var el = e.target;
        var alvo = parseInt(el.textContent, 10);
        if (!alvo || reduced) return;
        var t0 = performance.now();
        el.textContent = '0';
        (function step(t) {
          var p = Math.min((t - t0) / 1200, 1);
          el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        // garante o número final mesmo se a aba estiver em segundo plano
        setTimeout(function () { el.textContent = alvo; }, 1400);
      });
    }, { threshold: 0.6 });
    $$('.count').forEach(function (el) { countIO.observe(el); });
  }

  var ano = $('#ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
