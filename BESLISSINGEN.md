# Beslissingen postershop (laatst bruikbare stand)

Stand van 5-11-2026, na alle commentaar van Jonas op de werkende kopie van de site (43 threads, allemaal verwerkt). Dit bestand gaat voor op oudere teksten, ook op het ondernemingsplan v3 (4-11-2026), op LEESMIJ.md en op wat andere repo's of documenten nog zeggen. Wie iets verandert aan prijzen, maten of jargon, past dit bestand mee aan.

## Prijs

- **M = papier + inkt.** Geen opslag van 21 % meer: de inkoopprijzen zijn prijzen met btw, zoals betaald. `btw-materiaal: 0` in `_config.yml`.
- **Prijs = 7 × M**, afgerond op € 0,10. Geen btw op de verkoop: vzw peapickers is btw-vrijgesteld (vrijstellingsregeling kleine ondernemingen). Nergens meer spreken van "incl. btw" of "excl. btw".
- **Verdeling 1 · 3 · 3**: Materiaalkost = 1M, Auteursrechten = 3M bruto (min 15 % roerende voorheffing = netto voor de auteur), vzw peapickers = 3M bruto (de rest, ± afronding).
- Papier: peapickers koopt altijd rollen en snijdt er vellen uit, omdat dat per vel het goedkoopst is. Inkt: richtprijzen die gemiddeld per afdruk kloppen.
- Bedragen (bron: `_data/config-prijzen.csv`):

| | Klein | Medium | Groot |
|---|---:|---:|---:|
| Inkt per afdruk | € 0,50 | € 0,65 | € 1,30 |
| Epson Enhanced Matte 189 g | € 0,50 | € 1,00 | € 2,00 |
| Epson Semimatte 260 g | € 0,60 | € 1,20 | € 2,40 |
| Epson Luster 260 g | € 0,75 | € 1,50 | € 3,00 |

  Voorbeeld: Medium op Semimatte, M = € 1,20 + € 0,65 = € 1,85, prijs € 13,00.

## Maten

- **Klein 20 × 30 cm, Medium 30 × 45 cm, Groot 40 × 60 cm.** Geen A-formaten (A4/A3/A2, 21 × 29,7, 29,7 × 42) meer gebruiken.
- Elke maat tussen 20 × 30 en 40 × 60 kan; de prijs volgt de kleinste van de drie klassen waarin het vel past. De rol is 40 cm breed.
- Passe-partout standaard rondom 5 % van de korte zijde, nooit kleiner.

## Producten

- **Poster**: elk werk, gedrukt na bestelling, klant kiest papier en maat.
- **Limited**: gecureerde oplage, als genummerde en gesigneerde reproductie te koop; vast formaat, kleine genummerde en gesigneerde oplage, vaste M per werk (`fineart_m`, `fineart_oplage`). Auteursrechten meteen bij het drukken. Voorbeeld bij 25 % van de werken (001-01, 003-01, 005-02). Geen kaders of passe-partouts als apart product.
- Werken uit het publiek domein worden niet verkocht.

## Jargon (overal gelijk houden)

Prijsopbouw · Limited (niet "fine-art", behalve de vakterm "fine-art printer") · Klein / Medium / Groot (niet "middel") · Materiaalkost / Auteursrechten / vzw peapickers · Sheet Size / Image Size · Full Screen · NSFW (18+) · Metadata · Public Ledger · Deelnemen?

Open vraag: moet de filter "Unique reproductions" op Producten ook "Limited" heten?

## Site

- Menu: Producten, Prijsopbouw, Public Ledger, Over, Bestellen en leveren, Deelnemen?, mandje-icoon, zoekbalk.
- Productpagina: geen grote afbeelding en geen titel bovenaan; het bestelvak is het hoofdgedeelte. Kop met code, titel, maker en de keuze Poster/Limited. Links Sheet Size/Image Size, Full Screen en het voorbeeld; rechts Papier, Formaat (Groot/Medium/Klein, staand/liggend, breedte en hoogte intikbaar), prijs groot met "In de winkelmand" en drie lijnen eronder: Materiaalkost, Auteursrechten (bruto en netto), vzw peapickers. Geen "Geen btw" of "Leverkost komt erbij" in het bestelvak. Geen aantalstap: het aantal wijzig je in de mand. De laatst gekozen instellingen blijven klaarstaan op het volgende werk (enkel in de browser).
- Metadata in een inklapbaar blok "Metadata", standaard dicht.
- Filter op Producten: groep Product (Posters, Unique reproductions) en de schakelaar NSFW (18+).
- Prijsopbouw: kernkaders, schema met 7 delen en pijlen naar drie regels (geen voorbeeldprijs), prijstabel, uitklapblokken. Zie `pages/about.md`.
- Public Ledger: filter bovenaan, kaarten met de stand, per kwartaal inklapbaar, "Nog uit te betalen" met de volgende 4 kwartaalstortingen. Uitbetalingen aan auteurs per kwartaal samengeteld.
- Melding op elke pagina: "Deels Claude-generated teksten, zodat het idee al overgebracht kan worden. Nog te schrijven." (`tekst-melding` in `_config.yml`, leeg = weg).

## Vaste regels

- Alleen fictieve placeholders: nooit beelden of gegevens van echte kunstenaars.
- Huisstijl: Courier Prime, achtergrond #F7F7F6, tekst #111111.
- Het ophangsysteem met houten latten is geschrapt: nergens vermelden.
- Vzw in oprichting rond januari 2027, verkoop vanaf het voorjaar van 2027.
