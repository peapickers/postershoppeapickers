# 2026-10-27_peapickers postershop (prototype)

**Kern.** Prototype van de budget-postershop van peapickers, gebouwd op dezelfde CollectionBuilder-basis als de archiefsite. Elke poster is een archiefstuk met identiteitscode en volledige metadata. **Er wordt niets verkocht**: de vzw is nog niet opgericht. De mand, het bestelformulier en de QR-code zijn een voorbeeld; er wordt niets verstuurd en de QR-code gebruikt het ongeldige voorbeeldrekeningnummer BE00 0000 0000 0000. Alle archiefstukken zijn fictieve placeholders.

Preview: https://claude.ai/artifact/VvCbo1vpHSqTzNJaN3CgLA
Overeenkomst voor verkoop per archiefstuk (concept voor jurist): https://claude.ai/artifact/AGDDDqjyhMFbgi1fxstJ1Q

## Inhoud

| Bestand | Wat |
|---|---|
| `postershop-bron.zip` | Broncode (Jekyll). Metadata: `_data/peapickers-archief.csv` (fine art: kolommen `fineart_m`, `fineart_oplage`). Papier- en inktprijzen: `_data/config-prijzen.csv`. |
| `postershop-site.zip` | Gebouwde site met relatieve paden, klaar voor een statische host (Cloudflare Pages: voorwaarden nog niet nagekeken). |

## Wat er veranderd is tegenover de archiefsite

- Naam en tagline: peapickers postershop, "Licensed reproductions" (27-10, opmerking Jonas).
- Achtergrond #F7F7F6 (neutraal, lichter dan eggshell #F0EAD6); Courier Prime blijft. Kleur aanpassen in `_sass/_custom.scss`.
- Bestelvak per werk (`_includes/item/shop-box.html`, `assets/js/poster-config.js`): poster op maat (papier, vel 20 × 30 tot 40 × 60 cm, afbeelding met passe-partout, aantal) en fine-art met vaste prijs. Prijsregels volgens het ondernemingsplan v3 (4-11-2026): M = (papier + inkt) × 1,21 (btw op materiaal), prijs = 7 × M afgerond op € 0,10, geen btw op de verkoop (vrijstellingsregeling kleine ondernemingen). Inkoopprijzen klein/middel/groot in `_data/config-prijzen.csv`, regels in `_config.yml`.
- Mand (`/mand.html`, `_includes/mand.html`, `_includes/js/mand-js.html`): bewaard in de browser, leverzones uit Beslissingen 26-10, gestructureerde mededeling met controlegetal (mod 97), EPC-QR.
- Geen startpagina: de site opent op het posteroverzicht (index.html), op vraag van Jonas 27-10.
- Overzicht: tegels met enkel het beeld; bij hover wordt het beeld donkerder en verschijnen titel, maker, jaar en code. Metadata en prijs pas op de posterpagina. Placeholders tonen enkel de code, geen titel (27-10).
- Publiek register (`/register.html`, data in `_data/register.csv`): 24 fictieve handelingen als lijst "JJJJ-MM-DD: ± €bedrag; beschrijving" (lening, investeringen, materiaal, bestellingen, verzending, herroeping, vaste kosten, terugbetaling, auteursrechten, voorheffing); bovenaan saldo, uitgekeerd aan makers, materiaal, deel peapickers, schulden en verkochte posters; filterbaar op soort, archiefstuk en periode, met netto bedrag van de selectie. Menu: Posters, Onderwerpen, Register, Over, Mand (27-10).
- Over-pagina met prijsopbouw (teksten "Wat je hier koopt" en "Wie de beelden maakt" voorlopig lorem ipsum), makers, auteursrechten en betaling.
- Rechtenregel per archiefstuk verwijst naar de overeenkomst voor verkoop per archiefstuk.

## Onzeker (O)

- Of Belgische bankapps de gestructureerde mededeling herkennen in het vrije veld van de EPC-QR, of ze in het gestructureerde veld moet. Te testen met een echte rekening na de oprichting.
- Bestellen en leveren (`/verzending.html`): leverregels in `_data/config-verzending.csv` (gedeelde leverronde Gent gratis, levering in Gent € 3,50, bpost aan kostprijs), Gentse postcodes in `_data/config-postcodes.csv`, stand van de leverronde in `_data/leverronde.yml`, bestelminimum € 20 in `_config.yml`. Het bpost-tarief is nog niet bepaald.
- De M-waarden zijn het rekenvoorbeeld uit plan v4 (A2 € 6,00, gehalveerd per maat), geen metingen.
- Algemene voorwaarden, herroeping en privacyverklaring zijn nog niet opgesteld.

## Bouwen

`bundle install`, dan `bundle exec jekyll build` (Ruby 3.3). `baseurl: /__BASE__` staat al in `_config.yml`; maak daarna de paden relatief met `python3 ../archiefwebsite-static/hulpscripts/relativize.py _site uit`.
