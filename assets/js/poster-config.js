/* peapickers postershop: posterconfigurator en transparante prijs (ondernemingsplan v3, 4-11-2026).
   M = (papier volgens het vel + inkt volgens de afbeelding) × 1,21: de btw die de vzw zelf op het materiaal betaalt.
   Prijs = 7 × M, afgerond op € 0,10. Geen btw op de verkoop (vrijstellingsregeling kleine ondernemingen).
   Verdeling: 1M materiaal, 3M auteur (bruto), de rest naar de vzw (3M ± afronding).
   Groottes: klein tot 21 × 29,7 cm, middel tot 29,7 × 42 cm, groot tot 40 × 60 cm (staand of liggend). */
(function () {
  'use strict';
  var P = window.ppPrijzen || [], W = window.ppWerk || {}, R = window.ppRegels || {};
  var BTW_MAT = R.btwMateriaal != null ? R.btwMateriaal : 0.21, AFR = R.afronding || 0.10, RV = R.voorheffing != null ? R.voorheffing : 0.15;
  var VEL_KORT_MIN = 21, VEL_KORT_MAX = 40, VEL_LANG_MAX = 60, VERHOUDING_MAX = 1.5, AFB_MIN = 5;
  var KLASSEN = [['klein', 21, 29.7], ['middel', 29.7, 42], ['groot', 40, 60]];

  function $(id) { return document.getElementById(id); }
  function r2(x) { return Math.round(x * 100 + 1e-9) / 100; }
  function afrond(x) { return Math.round(x / AFR + 1e-6) * AFR; }
  function euro(x) { return '€ ' + r2(x).toFixed(2).replace('.', ','); }
  function getal(x) { return r2(x).toFixed(2).replace('.', ','); }
  function dec(x, n) { return (Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toString().replace('.', ','); }
  function cm(x) { return (Math.round(x * 10) / 10).toString().replace('.', ','); }
  function klasse(b, h) {
    var k = Math.min(b, h), l = Math.max(b, h);
    for (var i = 0; i < KLASSEN.length; i++) if (k <= KLASSEN[i][1] + 1e-6 && l <= KLASSEN[i][2] + 1e-6) return KLASSEN[i][0];
    return 'groot';
  }
  function klasseNaam(k) { return k === 'klein' ? 'klein (tot 21 × 29,7 cm)' : k === 'middel' ? 'middel (tot 29,7 × 42 cm)' : 'groot (tot 40 × 60 cm)'; }
  function rij(soort, id) { return P.filter(function (p) { return p.soort === soort && (!id || p.id === id); })[0]; }
  function prijs(r, k) { return parseFloat(r[k]); }

  // Verdeling van één stuk. mRuw = M onafgerond (incl. btw op materiaal).
  function verdeling(mRuw, aantal) {
    var totaal = r2(afrond(7 * mRuw)), mat = r2(mRuw), auteur = r2(3 * mat), rv = r2(auteur * RV);
    return { mRuw: mRuw, m: mat, totaal: totaal, auteur: auteur, rv: rv, netto: r2(auteur - rv), vzw: r2(totaal - mat - auteur), aantal: aantal || 1 };
  }
  function strook(v) {
    var d = function (b) { return (b / v.totaal * 100).toFixed(2) + '%'; };
    return '<div class="pp-prijsstrook" role="img" aria-label="Van ' + euro(v.totaal) + ' gaat ' + euro(v.auteur) + ' naar de auteur">' +
      '<span class="pp-ps-mat" style="width:' + d(v.m) + '">materiaal</span>' +
      '<span class="pp-ps-aut" style="width:' + d(v.auteur) + '">auteur ' + euro(v.auteur) + '</span>' +
      '<span class="pp-ps-vzw" style="width:' + d(v.vzw) + '">vzw</span></div>' +
      '<p class="mb-2"><strong>Van deze ' + euro(v.totaal) + ' gaat ' + euro(v.auteur) + ' naar de auteur.</strong></p>';
  }
  function eenvoudig(v) {
    var d = function (b) { return (b / v.totaal * 100).toFixed(2) + '%'; };
    return '<div class="pp-prijsstrook" aria-hidden="true">' +
      '<span class="pp-ps-mat" style="width:' + d(v.m) + '"></span>' +
      '<span class="pp-ps-aut" style="width:' + d(v.auteur) + '"></span>' +
      '<span class="pp-ps-vzw" style="width:' + d(v.vzw) + '"></span></div>' +
      '<p class="mb-1" style="font-variant-numeric: tabular-nums">Per poster: materiaal ' + euro(v.m) + ' · <strong>auteur ' + euro(v.auteur) + '</strong> · vzw peapickers ' + euro(v.vzw) + '</p>' +
      '<p class="mb-0"><a href="' + (R.prijsUrl || '../about.html') + '">Zo komt de prijs tot stand</a></p>';
  }
  function tabel(v, formule) {
    var n = v.aantal, x = function (b) { return euro(b * n); };
    var kop = n > 1 ? '<th class="text-end">Per stuk</th><th class="text-end">× ' + n + '</th>' : '<th class="text-end">Bedrag</th>';
    var cel = function (b) { return '<td class="text-end">' + euro(b) + '</td>' + (n > 1 ? '<td class="text-end">' + x(b) + '</td>' : ''); };
    return formule + strook(v) +
      '<div class="table-responsive"><table class="table table-sm small mb-0" style="font-variant-numeric: tabular-nums">' +
      '<caption class="small">Waar je geld naartoe gaat. ' + (R.btwTekst || 'btw-vrijgesteld') + ': er komt geen btw bovenop.</caption>' +
      '<thead><tr><th>Delen</th><th>Naar</th>' + kop + '</tr></thead><tbody>' +
      '<tr><td>1M</td><td>Materiaal: papier en inkt, met de btw die de vzw erop betaalt</td>' + cel(v.m) + '</tr>' +
      '<tr><td>3M</td><td>Auteur, bruto auteursrecht (netto ' + euro(v.netto) + ' + 15% roerende voorheffing ' + euro(v.rv) + ')</td>' + cel(v.auteur) + '</tr>' +
      '<tr><td>3M</td><td>vzw peapickers: verpakking, betaalkosten en vaste kosten (± afronding)</td>' + cel(v.vzw) + '</tr>' +
      '<tr><th></th><th>Prijs</th>' + '<th class="text-end">' + euro(v.totaal) + '</th>' + (n > 1 ? '<th class="text-end">' + x(v.totaal) + '</th>' : '') + '</tr>' +
      '</tbody></table></div>';
  }

  /* ---------- Fine-art: vaste prijs ---------- */
  var fa = $('fa-reken');
  if (fa) {
    var fm = parseFloat(fa.getAttribute('data-m')), fv = verdeling(fm, 1);
    fa.innerHTML = tabel(fv, '<p class="mb-2"><span class="h5" style="font-variant-numeric: tabular-nums">' + euro(fv.totaal) + '</span><br>' +
      '7 × ' + getal(fm) + ' = ' + dec(7 * fm, 4) + ', afgerond op € 0,10 = ' + euro(fv.totaal) + ' · M = ' + euro(fm) + ' (materiaal van deze oplage, incl. btw)</p>');
    $('fa-mand').addEventListener('click', function () {
      if (W.snipcart) return;
      window.ppMand.voegToe({ code: W.code, titel: W.titel, maker: W.maker, formaat: 'fine-art, genummerd en gesigneerd', prijs: fv.totaal, soort: 'fine-art' });
      $('fa-melding').textContent = 'De fine-art print ligt in de mand.';
    });
  }

  /* ---------- Poster ---------- */
  var img = $('pp-afb');
  if (!img) return;
  var s = { papier: (document.querySelector('input[name="papier"]:checked') || {}).value, liggend: false, kort: 40, lang: 60, marge: 2, r: 1 };
  // r = breedte / hoogte van het kunstwerk

  function velB() { return s.liggend ? s.lang : s.kort; }
  function velH() { return s.liggend ? s.kort : s.lang; }
  function past(bVak, hVak) { // grootste afbeelding met verhouding r binnen het vak
    bVak = Math.max(bVak, 0); hVak = Math.max(hVak, 0);
    return (bVak / hVak > s.r) ? { b: hVak * s.r, h: hVak } : { b: bVak, h: bVak / s.r };
  }
  function afb() { return past(velB() - 2 * s.marge, velH() - 2 * s.marge); }
  function margeVoorBreedte(b) { // kleinste rand rondom die bij deze afbeeldingsbreedte hoort
    return Math.max(0, Math.min((velB() - b) / 2, (velH() - b / s.r) / 2));
  }
  function maxMarge() { // afbeelding minstens AFB_MIN cm op de kortste zijde
    var lo = 0, hi = Math.min(velB(), velH()) / 2;
    for (var i = 0; i < 30; i++) { var mid = (lo + hi) / 2, a = past(velB() - 2 * mid, velH() - 2 * mid); if (Math.min(a.b, a.h) >= AFB_MIN) lo = mid; else hi = mid; }
    return Math.floor(lo);
  }

  // Vel: korte zijde 21–40, lange zijde ≤ 60, verhouding tussen 1:1 en 4:6
  function zetKort(k) {
    s.kort = Math.max(VEL_KORT_MIN, Math.min(VEL_KORT_MAX, k));
    s.lang = Math.max(s.kort, Math.min(s.lang, Math.floor(s.kort * VERHOUDING_MAX + 1e-9), VEL_LANG_MAX));
  }
  function zetLang(l) {
    s.lang = Math.max(VEL_KORT_MIN, Math.min(VEL_LANG_MAX, l));
    s.kort = Math.min(s.lang, VEL_KORT_MAX, Math.max(s.kort, Math.ceil(s.lang / VERHOUDING_MAX - 1e-9)));
    if (s.lang > s.kort * VERHOUDING_MAX) s.lang = Math.floor(s.kort * VERHOUDING_MAX);
  }

  var vb = $('vel-b'), vh = $('vel-h'), ab = $('afb-b'), mg = $('pp-marge'), aantal = $('pp-aantal-stuks') || { value: 1 }; // Stap 3 (aantal) is weg (Jonas, 5-11-2026): altijd 1 stuk per klik
  vb.addEventListener('input', function () { s.liggend ? zetLang(+vb.value) : zetKort(+vb.value); teken(); });
  vh.addEventListener('input', function () { s.liggend ? zetKort(+vh.value) : zetLang(+vh.value); teken(); });
  // Maten van het vel intikken (Jonas, 5-11-2026); toegepast bij Enter of bij het verlaten van het veld
  function getalIn(el) { var x = parseFloat(String(el.value).replace(',', '.')); return isNaN(x) ? null : Math.round(x * 10) / 10; }
  $('vel-b-in').addEventListener('change', function () { var x = getalIn(this); if (x !== null) { s.liggend ? zetLang(x) : zetKort(x); } teken(); });
  $('vel-h-in').addEventListener('change', function () { var x = getalIn(this); if (x !== null) { s.liggend ? zetKort(x) : zetLang(x); } teken(); });
  // Snelknoppen voor de drie groottes (Jonas, 5-11-2026); de richting staand/liggend blijft behouden
  $('vel-groot').addEventListener('click', function () { s.kort = 40; s.lang = 60; teken(); });
  $('vel-medium').addEventListener('click', function () { s.kort = 29.7; s.lang = 42; teken(); });
  $('vel-klein').addEventListener('click', function () { s.kort = 21; s.lang = 29.7; teken(); });
  $('richting-staand').addEventListener('click', function () { s.liggend = false; teken(); });
  $('richting-liggend').addEventListener('click', function () { s.liggend = true; teken(); });
  document.querySelectorAll('input[name="papier"]').forEach(function (i) { i.addEventListener('change', function () { s.papier = i.value; teken(); }); });
  mg.addEventListener('input', function () { var v = parseFloat(mg.value); if (!isNaN(v)) { s.marge = Math.max(0, Math.min(v, maxMarge())); teken(true); } });
  ab.addEventListener('input', function () { s.marge = margeVoorBreedte(+ab.value); teken(); });
  if (aantal.addEventListener) aantal.addEventListener('input', teken);

  function modus(welke) {
    var p = welke === 'poster';
    $('stap-poster').hidden = !p; $('stap-afbeelding').hidden = p;
    $('modus-poster').className = 'btn btn-sm ' + (p ? 'btn-dark' : 'btn-outline-dark');
    $('modus-afbeelding').className = 'btn btn-sm ' + (p ? 'btn-outline-dark' : 'btn-dark');
    $('modus-poster').setAttribute('aria-pressed', p); $('modus-afbeelding').setAttribute('aria-pressed', !p);
    $('pp-voorbeeld').classList.toggle('pp-modus-afbeelding', !p);
  }
  $('modus-poster').addEventListener('click', function () { modus('poster'); });
  $('modus-afbeelding').addEventListener('click', function () { modus('afbeelding'); });

  // Slepen aan de hoek (of op de afbeelding) in het voorbeeld
  var vel = $('pp-vel'), sleept = false;
  function sleep(e) {
    if (!sleept) return;
    var box = vel.getBoundingClientRect(), schaal = box.width / velB();
    var dx = Math.abs(e.clientX - (box.left + box.width / 2)) / schaal, dy = Math.abs(e.clientY - (box.top + box.height / 2)) / schaal;
    var b = Math.max(2 * dx, 2 * dy * s.r);
    var maxA = past(velB(), velH()).b, minB = s.r >= 1 ? AFB_MIN * s.r : AFB_MIN;
    s.marge = margeVoorBreedte(Math.max(minB, Math.min(maxA, b)));
    teken(); e.preventDefault();
  }
  [img, $('pp-greep')].forEach(function (el) {
    el.addEventListener('pointerdown', function (e) { sleept = true; modus('afbeelding'); try { el.setPointerCapture(e.pointerId); } catch (x) {} e.preventDefault(); });
    el.addEventListener('pointermove', sleep);
    el.addEventListener('pointerup', function () { sleept = false; });
    el.addEventListener('pointercancel', function () { sleept = false; });
  });

  var huidig = null;
  function teken(margeTyping) {
    s.marge = Math.max(0, Math.min(s.marge, maxMarge()));
    var B = velB(), H = velH(), a = afb(), n = Math.max(1, Math.min(99, parseInt(aantal.value, 10) || 1));
    // schuivers
    vb.min = s.liggend ? VEL_KORT_MIN : VEL_KORT_MIN; vb.max = s.liggend ? VEL_LANG_MAX : VEL_KORT_MAX; vb.value = B;
    vh.min = VEL_KORT_MIN; vh.max = s.liggend ? VEL_KORT_MAX : VEL_LANG_MAX; vh.value = H;
    $('vel-b-in').value = cm(B); $('vel-h-in').value = cm(H);
    var maxA = past(B, H), minB = s.r >= 1 ? AFB_MIN * s.r : AFB_MIN;
    ab.min = Math.ceil(minB); ab.max = Math.floor(maxA.b); ab.value = Math.round(a.b);
    $('afb-b-txt').textContent = cm(a.b);
    if (!margeTyping) mg.value = Math.round(s.marge * 10) / 10;
    mg.max = maxMarge();
    $('richting-staand').className = 'btn ' + (s.liggend ? 'btn-outline-dark' : 'btn-dark');
    $('richting-liggend').className = 'btn ' + (s.liggend ? 'btn-dark' : 'btn-outline-dark');
    $('richting-staand').setAttribute('aria-pressed', !s.liggend); $('richting-liggend').setAttribute('aria-pressed', s.liggend);

    // voorbeeld op schaal
    var box = $('pp-voorbeeld'), cs = getComputedStyle(box), maxW = (box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) || 280, maxH = 340, schaal = Math.min(maxW / B, maxH / H);
    vel.style.width = (B * schaal) + 'px'; vel.style.height = (H * schaal) + 'px';
    img.style.width = (a.b * schaal) + 'px'; img.style.height = (a.h * schaal) + 'px';
    img.style.left = ((B - a.b) / 2 * schaal) + 'px'; img.style.top = ((H - a.h) / 2 * schaal) + 'px';
    var g = $('pp-greep'); g.style.left = ((B + a.b) / 2 * schaal - 7) + 'px'; g.style.top = ((H + a.h) / 2 * schaal - 7) + 'px';
    var rand = { lr: (B - a.b) / 2, bo: (H - a.h) / 2 };
    $('pp-maten').textContent = 'Vel ' + cm(B) + ' × ' + cm(H) + ' cm · afbeelding ' + cm(a.b) + ' × ' + cm(a.h) + ' cm · rand ' + cm(rand.lr) + ' cm links/rechts, ' + cm(rand.bo) + ' cm boven/onder';

    // prijs
    var pr = rij('papier', s.papier), ink = rij('inkt'), kv = klasse(B, H), ka = klasse(a.b, a.h);
    var pp = prijs(pr, kv), pi = prijs(ink, ka), mRuw = (pp + pi) * (1 + BTW_MAT), v = verdeling(mRuw, n);
    // Totaal bovenaan, eenvoudige prijsopbouw eronder (Jonas, 5-11-2026)
    $('po-totaal').innerHTML = euro(v.totaal * n) + (n > 1 ? ' <span class="fs-6 fw-normal">(' + n + ' × ' + euro(v.totaal) + ')</span>' : '');
    $('po-reken').innerHTML = eenvoudig(v);

    // Snipcart-knop (en voorbeeldmand)
    var knop = $('po-mand'), randTekst = s.marge > 0 ? 'rondom min. ' + cm(s.marge) + ' cm' : 'geen';
    var uitvoering = pr.naam + ' · vel ' + kv + ' · afbeelding ' + ka;
    knop.setAttribute('data-item-custom1-value', uitvoering);
    knop.setAttribute('data-item-custom2-value', cm(B) + ' × ' + cm(H));
    knop.setAttribute('data-item-custom3-value', cm(a.b) + ' × ' + cm(a.h));
    knop.setAttribute('data-item-custom4-value', randTekst);
    knop.setAttribute('data-item-quantity', n);
    huidig = { formaat: pr.naam + ', vel ' + cm(B) + ' × ' + cm(H) + ' cm, afbeelding ' + cm(a.b) + ' × ' + cm(a.h) + ' cm, passe-partout ' + randTekst, prijs: v.totaal, aantal: n };
  }

  $('po-mand').addEventListener('click', function () {
    bewaarInstellingen(); // ook met Snipcart
    if (W.snipcart || !huidig) return;
    for (var i = 0; i < huidig.aantal; i++) window.ppMand.voegToe({ code: W.code, titel: W.titel, maker: W.maker, formaat: huidig.formaat, prijs: huidig.prijs, soort: 'poster' });
    $('po-melding').textContent = huidig.aantal > 1 ? 'De ' + huidig.aantal + ' posters liggen in de mand.' : 'De poster ligt in de mand.';
  });

  // De laatst in de mand gelegde instellingen staan klaar op het volgende kunstwerk (Jonas, 5-11-2026)
  var LAATSTE = 'pp-poster-laatste-v1';
  function bewaarInstellingen() {
    try { localStorage.setItem(LAATSTE, JSON.stringify({ papier: s.papier, liggend: s.liggend, kort: s.kort, lang: s.lang, marge: s.marge })); } catch (e) {}
  }
  function laatste() { try { return JSON.parse(localStorage.getItem(LAATSTE)); } catch (e) { return null; } }

  function start() {
    if (img.naturalWidth && img.naturalHeight) s.r = img.naturalWidth / img.naturalHeight;
    s.liggend = s.r > 1;
    var l = laatste();
    if (l && $('papier-' + l.papier)) {
      s.papier = l.papier; $('papier-' + l.papier).checked = true;
      s.liggend = !!l.liggend; s.kort = l.kort; s.lang = l.lang; s.marge = l.marge;
    }
    teken();
  }
  if (img.complete && img.naturalWidth) start(); else { img.addEventListener('load', start); teken(); }
  window.addEventListener('resize', function () { teken(); });
  modus('poster');
})();
