# Beslissingen postershop (laatst bruikbare stand)

Stand van 5-11-2026, aangevuld op 7-11-2026 (herroepingsrecht; vzw: boekhouding, productieplek, zetel, lening en bruikleen), na alle commentaar van Jonas op de werkende kopie van de site (43 threads, allemaal verwerkt). Dit bestand gaat voor op oudere teksten, ook op het ondernemingsplan v3 (4-11-2026), op LEESMIJ.md en op wat andere repo's of documenten nog zeggen. Wie iets verandert aan prijzen, maten of jargon, past dit bestand mee aan.

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

- **Klein 20 × 30 cm, Medium 30 × 40 cm, Groot 40 × 60 cm.** Geen A-formaten (A4/A3/A2, 21 × 29,7, 29,7 × 42) meer gebruiken.
- Elke maat tussen 20 × 30 en 40 × 60 kan; de prijs volgt de kleinste van de drie klassen waarin het vel past. De rol is 40 cm breed.
- Passe-partout standaard rondom 5 % van de korte zijde, nooit kleiner.

## Producten

- **Poster**: elk werk, gedrukt na bestelling, klant kiest papier en maat.
- **Limited**: gecureerde, unieke afdrukken; vast formaat, kleine genummerde en gesigneerde oplage, vaste M per werk (`fineart_m`, `fineart_oplage`). Auteursrechten meteen bij het drukken. Voorbeeld bij 25 % van de werken (001-01, 003-01, 005-02). Geen kaders of passe-partouts als apart product.
- **Publiek domein** (beslissing Jonas, 5-11-2026, vervangt "Werken uit het publiek domein worden niet verkocht"): aparte pagina bij Posters, prijs = 4 × M afgerond op € 0,10. Verdeling Materiaalkost 1M, vzw peapickers 3M, geen Auteursrechten. Voorbeeld Medium op Semimatte: € 7,40, waarvan € 5,55 voor vzw peapickers. Elk werk eerst nagaan: zeker vrij in België.

## Jargon (overal gelijk houden)

Prijsopbouw · Limited (niet "fine-art", behalve de vakterm "fine-art printer") · Klein / Medium / Groot (niet "middel") · Materiaalkost / Auteursrechten / vzw peapickers · Sheet Size / Image Size · Full Screen · NSFW (18+) · Metadata · Public Ledger · Deelnemen?


## Site

- Menu: Producten, Prijsopbouw, Public Ledger, Over, Bestellen en leveren, Deelnemen?, mandje-icoon, zoekbalk.
- Productpagina: geen grote afbeelding en geen titel bovenaan; het bestelvak is het hoofdgedeelte. Kop met code, titel, maker en de keuze Poster/Limited. Links Sheet Size/Image Size, Full Screen en het voorbeeld; rechts Papier, Formaat (Groot/Medium/Klein, staand/liggend, breedte en hoogte intikbaar), prijs groot met "In de winkelmand" en drie lijnen eronder: Materiaalkost, Auteursrechten (bruto en netto), vzw peapickers. Geen "Geen btw" of "Leverkost komt erbij" in het bestelvak. Geen aantalstap: het aantal wijzig je in de mand. De laatst gekozen instellingen blijven klaarstaan op het volgende werk (enkel in de browser).
- Metadata in een inklapbaar blok "Metadata", standaard dicht.
- Filter op Producten: groep Product (Posters, Limited) en de schakelaar NSFW (18+).
- Prijsopbouw: kernkaders, schema met 7 delen en pijlen naar drie regels (geen voorbeeldprijs), prijstabel, uitklapblokken. Zie `pages/about.md`.
- Public Ledger: filter bovenaan, kaarten met de stand, per kwartaal inklapbaar, "Nog uit te betalen" met de volgende 4 kwartaalstortingen. Uitbetalingen aan auteurs per kwartaal samengeteld.
- Melding op elke pagina: "Deels Claude-generated teksten, zodat het idee al overgebracht kan worden. Nog te schrijven." (`tekst-melding` in `_config.yml`, leeg = weg).

## Herroepingsrecht en herroepingsknop

- **Herroepingsknop** (beslissing Jonas, 7-11-2026): de webshop krijgt een online herroepingsfunctie, verplicht volgens richtlijn (EU) 2023/2673 (nieuw art. 11a richtlijn 2011/83/EU), van toepassing sinds 19 juni 2026. Bron: [Legalnews/Andersen](https://legalnews.be/handel-consument/verplichte-herroepingsknop-in-de-eu-wat-online-ondernemers-nu-al-moeten-voorbereiden-andersen/).
  - Duidelijk benoemd, bv. "Hier de overeenkomst herroepen", zichtbaar en makkelijk vindbaar (op elke pagina, bv. in de footer en bij "Bestellen en leveren"), beschikbaar tijdens de hele herroepingstermijn.
  - Twee stappen: (1) formulier met naam, gegevens om de bestelling te herkennen (bestelnummer) en e-mailadres; (2) knop "Herroeping bevestigen".
  - Na bevestiging meteen een ontvangstbevestiging per e-mail (duurzame drager), met de inhoud van het verzoek, datum en tijdstip.
  - Belgische omzetting in het Wetboek van economisch recht was in juni 2026 nog niet gepubliceerd: het ontwerp laten nakijken door de advocaat consumentenrecht.
- **Herroepingsrecht zelf** (beslissing Jonas, 7-11-2026): 14 dagen herroepingsrecht voor elke bestelling, zowel Poster als Limited. We proberen het niet te vermijden (geen "gepersonaliseerd"-uitzondering). Open bij de advocaat: retourkosten, terugbetaling inhouden tot het werk terug is, en waardeverlies bij een beschadigd of gesigneerd werk.
- Herroepingsverzoeken en ontvangstbevestigingen 10 jaar bewaren, samen met de stukken van de terugbetaling (fiscale bewaartermijn art. 315 WIB 92; nog te bevestigen door de boekhouder).

## Vzw: boekhouding, productieplek en zetel

Beslissingen van de oprichter van 7-11-2026. Details, open vragen en actiepunten: [beslissingen van 7 november 2026](https://peapickers.github.io/projecten/boekhouder/beslissingen-2026-11-07.html) (D1 tot D11, ZB01 tot ZB12).

- **Boekhouding in zelfbeheer**: de oprichter boekt en doet alle aangiftes zelf (273S, Belcotax, klantenlisting, jaarrekening, Biztax). Een ITAA-boekhouder krijgt een maandvergoeding en controleert minstens 1 keer per jaar (vóór 31 december en vóór de neerlegging). Software van de boekhouder; Accountable volstaat nu niet. Vereenvoudigde boekhouding onder de vennootschapsbelasting.
- **Productieplek**: een paar m² bij een bestaand bedrijf of organisatie dat mag onderverhuren, vaste huur in geld van maximaal € 150 per maand alles inbegrepen. Geen eigen pand, geen onderverhuur door de vzw, geen ruil tegen prints (de gastheer koopt prints aan de gewone prijs).
- **Zetel**: liefst op het adres van de productieplek, anders bij een familielid met schriftelijke toestemming. In een extern pand gedeeld met andere ondernemers komt de zetel daar.
- **Lening en materiaal** (antwoord Jonas, 7-11-2026, vervangt "niet nodig bij een extern gedeeld pand"): de renteloze lening van de oprichter als particulier aan de vzw **blijft**, zonder vaste termijn en zonder rente, met genoteerde stortingen en terugbetalingen. Ze dekt het startgeld, het tekort van het eerste jaar en elk dreigend negatief saldo. Het materiaal van de oprichter gaat in **bruikleen** naar de vzw (schriftelijk, met inventaris), niet in koop. Vanaf 2029 wil de vzw een eigen pand kopen voor zetel en productie.
- **Start** (antwoord Jonas, 7-11-2026): de webshop start **zonder Limited** (0 bij de start). Kosten van vóór de oprichting worden niet ingebracht: de vzw boekt vanaf de oprichting. Eerste jaar: verlies elke maand, gedekt door de maandelijkse lening van de oprichter (doel: onder € 300 per maand).
- **Verzekering en kalender** (7-11-2026): één polis op naam van de vzw (ook voor materiaal in bruikleen); huurwaarborg volgens het gebruik (2 maanden); vaste betaaldag voor de Auteursrechten de 15de van januari, april, juli en oktober. Zie de [vragenlijst boekhouder](https://peapickers.github.io/projecten/boekhouder/vragenlijst-2026-11-07.html).
- **Bestuur**: minstens 2 leden en 2 bestuurders; een medebestuurder blijft nodig. Geen "niet-uitvoerende" bestuurder.
- **Auteurs**: we starten alleen met auteurs die in België wonen.
- **Vaste kosten** stijgen met de productieplek (tot € 1.800 per jaar); break-even ruw 1.070 tot 1.180 posters per jaar. Na te rekenen met de offerte van de boekhouder.

## Vaste regels

- Alleen fictieve placeholders: nooit beelden of gegevens van echte kunstenaars.
- Huisstijl: Courier Prime, achtergrond #F7F7F6, tekst #111111.
- Het ophangsysteem met houten latten is geschrapt: nergens vermelden.
- Vzw in oprichting rond januari 2027, verkoop vanaf het voorjaar van 2027.
