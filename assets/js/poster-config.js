/* peapickers postershop: posterconfigurator en transparante prijs (ondernemingsplan v3, 4-11-2026).
   M = papier volgens het vel + inkt volgens de afbeelding, zoals betaald (btwMateriaal = 0 sinds 5-11-2026).
   Prijs = 7 × M, afgerond op € 0,10. Geen btw op de verkoop (vrijstellingsregeling kleine ondernemingen).
   Verdeling (8-11-2026): 50 % Auteursrechten (bruto, min 15 % roerende voorheffing), 50 % vzw peapickers. Papier en inkt zijn een uitgave van de vzw, alleen getoond op Prijsopbouw.
   Groottes (Jonas, 5-11-2026: overzichtelijke maten, geen A-formaten): Klein tot 20 × 30 cm, Medium tot 30 × 40 cm, Groot tot 40 × 60 cm (staand of liggend). */
(function () {
  'use strict';
  var P = window.ppPrijzen || [], W = window.ppWerk || {}, R = window.ppRegels || {};
  var BTW_MAT = R.btwMateriaal != null ? R.btwMateriaal : 0.21, AFR = R.afronding || 0.10, RV = R.voorheffing != null ? R.voorheffing : 0.15;
  var VEL_KORT_MIN = 20, VEL_KORT_MAX = 40, VEL_LANG_MAX = 60, VERHOUDING_MAX = 1.5, AFB_MIN = 5;
  var KLASSEN = [['klein', 20, 30], ['middel', 30, 40], ['groot', 40, 60]];

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
  function klasseNaam(k) { return k === 'klein' ? 'klein (tot 20 × 30 cm)' : k === 'middel' ? 'medium (tot 30 × 40 cm)' : 'groot (tot 40 × 60 cm)'; }
  function rij(soort, id) { return P.filter(function (p) { return p.soort === soort && (!id || p.id === id); })[0]; }
  function prijs(r, k) { return parseFloat(r[k]); }

  // Verdeling van één stuk. mRuw = M onafgerond (papier + inkt, zoals betaald).
  function verdeling(mRuw, aantal) {
    var totaal = r2(afrond(7 * mRuw)), mat = r2(mRuw), auteur = r2(totaal / 2), rv = r2(auteur * RV);
    return { mRuw: mRuw, m: mat, totaal: totaal, auteur: auteur, rv: rv, netto: r2(auteur - rv), vzw: r2(totaal - auteur), aantal: aantal || 1 };
  }
  // Eenvoudige prijsopbouw: twee lijnen, 50/50 (Jonas, 8-11-2026). Materiaalkost staat alleen op Prijsopbouw.
  function eenvoudig(v) {
    var rij = function (naam, bedrag, extra) { return '<tr><th scope="row" class="fw-normal ps-0">' + naam + '</th><td class="text-end pe-0">' + bedrag + (extra || '') + '</td></tr>'; };
    return '<table class="table table-sm table-borderless small mb-1 pp-opbouw" style="font-variant-numeric: tabular-nums"><tbody>' +
      rij('Auteursrechten', '<strong>' + euro(v.auteur) + '</strong> bruto', ' <span class="text-muted">(' + euro(v.netto) + ' netto)</span>') +
      rij('vzw peapickers', euro(v.vzw)) +
      '</tbody></table>' +
      '<p class="mb-0"><a href="' + (R.prijsUrl || '../about.html') + '">Prijsopbouw</a></p>';
  }
  /* ---------- Keuze Poster / Limited / Tweede kans (Jonas, 5-11-2026 en 7-11-2026) ---------- */
  var productKnoppen = document.querySelectorAll('#pp-product [data-product]');
  if (productKnoppen.length) {
    var kies = function (welke) {
      document.querySelectorAll('[data-product-sectie]').forEach(function (sec) { sec.hidden = sec.getAttribute('data-product-sectie') !== welke; });
      productKnoppen.forEach(function (k) {
        var aan = k.getAttribute('data-product') === welke;
        k.className = 'btn ' + (aan ? 'btn-dark' : 'btn-outline-dark');
        k.setAttribute('aria-pressed', aan);
      });
      if (welke === 'poster') window.dispatchEvent(new Event('resize')); // postervoorbeeld opnieuw schalen
    };
    productKnoppen.forEach(function (k) { k.addEventListener('click', function () { kies(k.getAttribute('data-product')); }); });
    // Link vanuit de filter Tweede kans: items/....html#tweede-kans opent meteen dat product
    if (location.hash === '#tweede-kans' && $('product-tweede-kans')) kies('tweede-kans');
  }

  /* ---------- Tweede kans: vaste prijs per teruggestuurde Poster ---------- */
  document.querySelectorAll('.pp-tk-mand').forEach(function (knop) {
    knop.addEventListener('click', function () {
      if (W.snipcart) return;
      var m = window.ppMand.lees(), formaat = knop.getAttribute('data-tk-formaat');
      var melding = knop.closest('.pp-afrekenen').querySelector('.pp-tk-melding');
      if (m.some(function (r) { return r.code === W.code && r.formaat === formaat; })) { melding.textContent = 'Deze poster ligt al in de mand. Hij is maar één keer te koop.'; return; }
      window.ppMand.voegToe({ code: W.code, titel: W.titel, maker: W.maker, formaat: formaat, prijs: parseFloat(knop.getAttribute('data-tk-prijs')), soort: 'tweede kans' });
      melding.textContent = 'De poster ligt in de mand.';
    });
  });

  /* ---------- Limited (vroeger fine-art): vaste prijs ---------- */
  var fa = $('fa-reken');
  if (fa) {
    var fm = parseFloat(fa.getAttribute('data-m')), fv = verdeling(fm, 1);
    fa.innerHTML = eenvoudig(fv);
    $('fa-mand').addEventListener('click', function () {
      if (W.snipcart) return;
      window.ppMand.voegToe({ code: W.code, titel: W.titel, maker: W.maker, formaat: 'limited, genummerd en gesigneerd', prijs: fv.totaal, soort: 'limited' });
      $('fa-melding').textContent = 'De Limited ligt in de mand.';
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
  // Passe-partout altijd rondom 5 % van de korte zijde van het vel (Jonas, 5-11-2026):
  // dat is de standaard bij elk vel en de kleinste rand; in "Afbeelding" kan de afbeelding enkel kleiner.
  var PP_MIN = 0.05;
  function minMarge() { return Math.round(Math.min(velB(), velH()) * PP_MIN * 100) / 100; }
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
  $('vel-medium').addEventListener('click', function () { s.kort = 30; s.lang = 40; teken(); });
  $('vel-klein').addEventListener('click', function () { s.kort = 20; s.lang = 30; teken(); });
  $('richting-staand').addEventListener('click', function () { s.liggend = false; teken(); });
  $('richting-liggend').addEventListener('click', function () { s.liggend = true; teken(); });
  document.querySelectorAll('input[name="papier"]').forEach(function (i) { i.addEventListener('change', function () { s.papier = i.value; teken(); }); });
  mg.addEventListener('input', function () { var v = parseFloat(mg.value); if (!isNaN(v)) { s.marge = Math.max(minMarge(), Math.min(v, maxMarge())); teken(true); } });
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
    var m0 = minMarge(), maxA = past(velB() - 2 * m0, velH() - 2 * m0).b, minB = s.r >= 1 ? AFB_MIN * s.r : AFB_MIN;
    s.marge = margeVoorBreedte(Math.max(minB, Math.min(maxA, b)));
    teken(); e.preventDefault();
  }
  [img, $('pp-greep')].forEach(function (el) {
    el.addEventListener('pointerdown', function (e) { sleept = true; modus('afbeelding'); try { el.setPointerCapture(e.pointerId); } catch (x) {} e.preventDefault(); });
    el.addEventListener('pointermove', sleep);
    el.addEventListener('pointerup', function () { sleept = false; });
    el.addEventListener('pointercancel', function () { sleept = false; });
  });

  var huidig = null, vorigVel = null;
  function teken(margeTyping) {
    var B = velB(), H = velH(), m0 = minMarge();
    if (vorigVel !== null && vorigVel !== B + 'x' + H) s.marge = m0; // ander vel: terug naar 5 %
    vorigVel = B + 'x' + H;
    s.marge = Math.max(m0, Math.min(s.marge, maxMarge()));
    var a = afb(), n = Math.max(1, Math.min(99, parseInt(aantal.value, 10) || 1));
    // schuivers
    vb.min = s.liggend ? VEL_KORT_MIN : VEL_KORT_MIN; vb.max = s.liggend ? VEL_LANG_MAX : VEL_KORT_MAX; vb.value = B;
    vh.min = VEL_KORT_MIN; vh.max = s.liggend ? VEL_KORT_MAX : VEL_LANG_MAX; vh.value = H;
    $('vel-b-in').value = cm(B); $('vel-h-in').value = cm(H);
    var maxA = past(B - 2 * m0, H - 2 * m0), minB = s.r >= 1 ? AFB_MIN * s.r : AFB_MIN;
    ab.min = Math.ceil(minB); ab.max = Math.floor(maxA.b); ab.value = Math.round(a.b);
    $('afb-b-txt').textContent = cm(a.b);
    if (!margeTyping) mg.value = Math.round(s.marge * 10) / 10;
    mg.max = maxMarge(); mg.min = m0;
    $('richting-staand').className = 'btn ' + (s.liggend ? 'btn-outline-dark' : 'btn-dark');
    $('richting-liggend').className = 'btn ' + (s.liggend ? 'btn-dark' : 'btn-outline-dark');
    $('richting-staand').setAttribute('aria-pressed', !s.liggend); $('richting-liggend').setAttribute('aria-pressed', s.liggend);

    // voorbeeld op schaal
    var box = $('pp-voorbeeld'), cs = getComputedStyle(box), maxW = (box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) || 280, maxH = 420, schaal = Math.min(maxW / B, maxH / H);
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
    var lab = function (k) { return k === 'middel' ? 'medium' : k; }; // jargon: Medium, niet "middel" (moet gelijk zijn aan de keuzelijst in shop-box.html)
    var uitvoering = pr.naam + ' · vel ' + lab(kv) + ' · afbeelding ' + lab(ka);
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
    } else s.marge = minMarge();
    vorigVel = null;
    teken();
  }
  if (img.complete && img.naturalWidth) start(); else { img.addEventListener('load', start); teken(); }
  window.addEventListener('resize', function () { teken(); });
  modus('poster');
})();
