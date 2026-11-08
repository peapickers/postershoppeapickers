# Beslissingen postershop (laatst bruikbare stand)

> **Werkwijze beslissingen (8-11-2026).** Elke beslissing staat als één regel in het [beslissingenregister](https://peapickers.github.io/projecten/beslissingen.html), met code `JJJJ-MM-DD_Project<nr>` en een korte titel. Gebruik nooit kale codes (V1, D5, VJ3 ...), altijd de titel. Dit bestand houdt de uitwerking per onderwerp bij; het register zegt of een beslissing hier al in staat. Momentopnames per dag bestaan niet meer.

Stand van 5-11-2026, aangevuld op 7-11-2026 (herroepingsrecht; vzw: boekhouding, zetel, lening; tweedehands) en bijgewerkt op 8-11-2026 (productie door de oprichter, verdeling 50/50, zetel bij de medebestuurder), na alle commentaar van Jonas op de werkende kopie van de site (43 threads, allemaal verwerkt). Dit bestand gaat voor op oudere teksten, ook op het ondernemingsplan v3 (4-11-2026), op LEESMIJ.md en op wat andere repo's of documenten nog zeggen. Wie iets verandert aan prijzen, maten of jargon, past dit bestand mee aan.

## Prijs

- **M = papier + inkt.** Geen opslag van 21 % meer: de inkoopprijzen zijn prijzen met btw, zoals betaald. `btw-materiaal: 0` in `_config.yml`.
- **Prijs = 7 × M**, afgerond op € 0,10. Geen btw op de verkoop: vzw peapickers is btw-vrijgesteld (vrijstellingsregeling kleine ondernemingen). Nergens meer spreken van "incl. btw" of "excl. btw".
- **Verdeling 50/50** (beslissing 7-11-2026 avond, V4, bevestigd 8-11-2026; vervangt 1 · 3 · 3): elke verkoopprijs gaat voor 50 % naar Auteursrechten (bruto, min 15 % roerende voorheffing = netto voor de auteur) en voor 50 % naar vzw peapickers. In de boekhouding heet het deel van de vzw "commissie"; op de site en in de Public Ledger blijft het "vzw peapickers". De vzw betaalt uit haar deel alle kosten: papier, inkt, verpakking, betaalkosten, boekhouder, opstart. Papier en inkt zijn een uitgave van de vzw per aankoop (per rol, per cartridge), niet een deel van elke prijs; de klant ziet wel wat het materiaal de vzw kost.
- **Prijs na het marktonderzoek** (beslissing Jonas, 8-11-2026; vervangt "Prijs voorlopig" (V9)): we behouden de huidige prijzen. Posters en Limited: 7 × M. Publiek domein: 4 × M. Printshop: 3 × M (de printshop wordt later verder uitgewerkt). Alle prijzen blijven zonder btw. Bron: marktonderzoek van 8-11-2026 (Desenio, Posterstore, PSTR Studio, The Poster Club, Paper Collective, Kuriosis, Helen B, bol.com; prijs van de poster alleen, zonder kader, met btw zoals de klant betaalt).
  - Marktgemiddelde (10 referenties per maat): Medium € 28,10, Groot € 39,90. Marktgemiddelde min 21 %: Medium € 22,20, Groot € 31,50. Min 35 %: Medium € 18,30, Groot € 25,90.
  - Onze prijs tegenover het marktgemiddelde (Enhanced Matte / Semimatte / Luster): Medium € 11,60 / 13,00 / 15,10 = −59 % / −54 % / −46 %. Groot € 23,10 / 25,90 / 30,10 = −42 % / −35 % / −25 %.
  - Groot ligt dicht bij 7 × M (markt min 35 % = € 25,90 = onze Semimatte). Medium ligt ver weg: markt min 35 % is 8,5 tot 11 × M. Onzeker: 7 van de 10 Groot-referenties zijn 50 × 70 (46 % groter dan Groot), en de winkels prijzen niet per papiersoort.
  - Printshop (afdrukdiensten zoals Kruidvat, Pixum, smartphoto.be, albelli, HEMA, ifolor; per afdruk met btw): A6 € 0,23, A4 € 4,47, A3 € 7,73, A2 € 11,98 gemiddeld. Markt min 35 % = 0,5 tot 2,9 × M, ver onder 7 × M en bij A6 onder onze materiaalkost. Bij 3 × M zit A3 en A2 dicht bij het marktgemiddelde. Schatting: M voor A-formaten per cm² uit onze papier- en inktprijzen.
  - Volledig onderzoek: [marktonderzoek-prijzen-2026-11-08.md](https://peapickers.github.io/projecten/marketing.html) (projectmap Marketing) en de PDF posterprijzen-vergelijking-2026-11-08.
- Papier: peapickers koopt altijd rollen en snijdt er vellen uit, omdat dat per vel het goedkoopst is. Inkt: richtprijzen die gemiddeld per afdruk kloppen.
- Bedragen (bron: `_data/config-prijzen.csv`):

| | Klein | Medium | Groot |
|---|---:|---:|---:|
| Inkt per afdruk | € 0,50 | € 0,65 | € 1,30 |
| Epson Enhanced Matte 189 g | € 0,50 | € 1,00 | € 2,00 |
| Epson Semimatte 260 g | € 0,60 | € 1,20 | € 2,40 |
| Epson Luster 260 g | € 0,75 | € 1,50 | € 3,00 |

  Voorbeeld: Medium op Semimatte, M = € 1,20 + € 0,65 = € 1,85, prijs € 13,00: Auteursrechten € 6,50 bruto, vzw peapickers € 6,50. Na papier en inkt (€ 1,85), verpakking (€ 0,50) en betaalkost (€ 0,60) blijft € 3,55 voor de overhead.

## Maten

- **Klein 20 × 30 cm, Medium 30 × 40 cm, Groot 40 × 60 cm.** Geen A-formaten (A4/A3/A2, 21 × 29,7, 29,7 × 42) meer gebruiken.
- Elke maat tussen 20 × 30 en 40 × 60 kan; de prijs volgt de kleinste van de drie klassen waarin het vel past. De rol is 40 cm breed.
- Passe-partout standaard rondom 5 % van de korte zijde, nooit kleiner.

## Producten

- **Poster**: elk werk, gedrukt na bestelling, klant kiest papier en maat.
- **Limited**: gecureerde, unieke afdrukken; vast formaat, kleine genummerde en gesigneerde oplage, vaste M per werk (`fineart_m`, `fineart_oplage`). Auteursrechten meteen bij het drukken. Voorbeeld bij 25 % van de werken (001-01, 003-01, 005-02). Geen kaders of passe-partouts als apart product.
- **Publiek domein** (beslissing Jonas, 5-11-2026, vervangt "Werken uit het publiek domein worden niet verkocht"): aparte pagina bij Posters, prijs = 4 × M afgerond op € 0,10. Geen Auteursrechten: de volledige opbrengst gaat naar vzw peapickers, voor de overhead en de sociaal-culturele doelen (bevestigd 8-11-2026). Voorbeeld Medium op Semimatte: € 7,40, volledig voor vzw peapickers. Elk werk eerst nagaan: zeker vrij in België.
- **Tweedehands** (beslissing Jonas, 7-11-2026): een teruggestuurde Poster na herroeping komt, als hij onbeschadigd is, in een aparte tweedehandsafdeling op de website, met de vermelding "teruggestuurd". Prijs = 80 % van de oorspronkelijke prijs, afgerond op € 0,10. De opbrengst gaat 50/50 naar Auteursrechten (bruto, min 15 % roerende voorheffing) en vzw peapickers; geen nieuwe Materiaalkost. vzw peapickers draagt het verlies. Voorbeeld Medium op Semimatte: € 13,00 wordt € 10,40, waarvan € 5,20 Auteursrechten bruto en € 5,20 voor vzw peapickers. Ook voor deze verkoop gelden 14 dagen herroepingsrecht. De auteur moet dit toestaan in de licentie (licentie concept 6). Bron: [vragenlijst jurist](https://peapickers.github.io/projecten/jurist/vragenlijst-2026-11-07.html), VJ5 en VJ19.

- **Printshop** (8-11-2026): klanten drukken eigen beelden, er is geen auteur; de volledige opbrengst gaat naar vzw peapickers.
- **Geen eigen werk van bestuurders** (8-11-2026): bestuurders verkopen nooit eigen werk via de vzw.

## Jargon (overal gelijk houden)

Prijsopbouw · Limited (niet "fine-art", behalve de vakterm "fine-art printer") · Klein / Medium / Groot (niet "middel") · Materiaalkost / Auteursrechten / vzw peapickers · Sheet Size / Image Size · Full Screen · NSFW (18+) · Metadata · Public Ledger · Deelnemen?


## Site

- Menu: Producten, Prijsopbouw, Public Ledger, Over, Bestellen en leveren, Deelnemen?, mandje-icoon, zoekbalk.
- Productpagina: geen grote afbeelding en geen titel bovenaan; het bestelvak is het hoofdgedeelte. Kop met code, titel, maker en de keuze Poster/Limited. Links Sheet Size/Image Size, Full Screen en het voorbeeld; rechts Papier, Formaat (Groot/Medium/Klein, staand/liggend, breedte en hoogte intikbaar), prijs groot met "In de winkelmand" en drie lijnen eronder: Materiaalkost, Auteursrechten (bruto en netto), vzw peapickers. Geen "Geen btw" of "Leverkost komt erbij" in het bestelvak. Geen aantalstap: het aantal wijzig je in de mand. De laatst gekozen instellingen blijven klaarstaan op het volgende werk (enkel in de browser).
- Metadata in een inklapbaar blok "Metadata", standaard dicht.
- Filter op Producten: groep Product (Posters, Limited, vanaf 7-11-2026 ook Tweede kans; Limited verborgen tot de eerste Limited gepland is) en de schakelaar NSFW (18+).
- Prijsopbouw: kernkaders, schema met 7 delen en pijlen naar drie regels (geen voorbeeldprijs), prijstabel, uitklapblokken. Zie `pages/about.md`.
- Public Ledger: filter bovenaan, kaarten met de stand, per kwartaal inklapbaar, "Nog uit te betalen" met de volgende 4 kwartaalstortingen. Uitbetalingen aan auteurs per kwartaal samengeteld.
- Melding op elke pagina: "Deels Claude-generated teksten, zodat het idee al overgebracht kan worden. Nog te schrijven." (`tekst-melding` in `_config.yml`, leeg = weg).

## Site, bijgewerkt op 7-11-2026 (beslissingen; de code volgt)

Jonas koos op 7-11-2026 voor elk voorstel van de technieker (vragenlijst VT1 tot VT14, [vragenlijst techniek](https://peapickers.github.io/projecten/techniek/vragenlijst-2026-11-07.html)). De site zelf is nog niet aangepast; wat hieronder staat, is de bedoelde stand. Waar dit botst met de lijst hierboven, geldt dit.

- **Herroepingsknop**: link "Hier de overeenkomst herroepen" in de footer van elke pagina, naar een pagina Herroepen (tekst van marketing, met de melding "Ontwerptekst" tot de jurist de klantteksten levert, J15). Formulier in 2 stappen (naam, bestelnummer, e-mail; dan "Herroeping bevestigen"). Tot de webshop opent, verstuurt en bewaart het formulier niets en toont het enkel de voorbeeldmail (VT6, VT8). De bevestiging verstuurt een kleine dienst: Cloudflare Workers ontvangt, Brevo mailt (€ 0 per maand, EU-servers), met een eigen domeinnaam als afzender (VT1). Echte accounts op naam van de vzw na de oprichting (VT5). Het bestelnummer is het nummer van Snipcart, ook op het kassabonkaartje; bij overschrijving het PP-nummer (VT7).
- **Bewaren**: elke bevestiging in kopie naar de mailbox van de vzw; maandelijks een export naar Administratie en de versleutelde schijven, met een lijn in het logboek; 10 jaar, nooit in de repo (VT2).
- **Export voor de boekhouding**: CODA van de bank, de CSV van Mollie en één eigen CSV per maand uit de Public Ledger; kolommen pas vastleggen na de keuze van de software. Auteursrechten per auteur en kwartaal via een lokaal script en een privébestand "werkcode → auteur" op de versleutelde schijven (VT3, VT4). Op de Public Ledger komt een knop "Download (CSV)" (VT13).
- **Auteursrechten**: vaste betaaldag de 15de van januari, april, juli en oktober (valt die in een weekend: de werkdag ervoor), eerst op 15 juli 2027. Een verkoop telt in het kwartaal waarin de 14 dagen herroepingstermijn na de levering aflopen (VT9). "Nog uit te betalen" toont apart wat na de termijn is en wat er nog in loopt.
- **Public Ledger**: rubriek "lening oprichter" per maand (gestort, terugbetaald, openstaand), zonder naam; "gratis dienst door de oprichter" als lijn zonder naam en zonder bedrag, en papier en inkt als uitgave per aankoop (8-11-2026, vervangt de lijn over bruikleen). De voorbeeldreeks wordt herschreven met de prijzen van nu, zonder gift van materiaal en zonder Limited (VT10).
- **Limited**: 0 bij de start. De keuze Limited en de filtergroep Limited zijn verborgen tot de eerste Limited gepland is (schakelaar `limited-actief` in `_config.yml`); de uitleg blijft, met "Limited volgt later" (VT12).
- **Tweede kans** (de tweedehandsafdeling hierboven): een groep in de filter op Producten, geen menu-item, met het label "teruggestuurd" op elke kaart. Elke teruggestuurde Poster is een eigen kaart met prijs en oorspronkelijke prijs ("€ 12,10, was € 15,10"), een derde keuze naast Poster op de productpagina en maximaal 1 in de mand. De Prijsopbouw toont 50/50 (Auteursrechten bruto, vzw peapickers, geen Materiaalkost), ook in de Public Ledger. Geen gratis teruggave in Gent (VT11, VM2, VM3).
- **Publiek domein**: voorlopig alleen de zin "krijgen later een eigen pagina bij Posters, aan 4 × M, zonder Auteursrechten"; de pagina komt zodra het eerste werk nagekeken is als zeker vrij in België (VT14).
- **Over**: zonder zetel, adres of naam (VM4, VM10); er is geen productieplek meer (V1). De oproep voor nieuwe bestuurders (artistieke en curatoriële kant, zonder zetel) pas online na het akkoord van de huidige medebestuurder (VM5).
- **Prijsopbouw en bestelvak** (V4, 8-11-2026; de code volgt): Auteursrechten 50 % (bruto en netto) en vzw peapickers 50 %, met apart wat papier en inkt de vzw voor de gekozen maat en het gekozen papier kosten. "1 · 3 · 3" en "3 van de 7 delen" verdwijnen; `config-prijzen.csv` en de Public Ledger volgen. Printshop: alleen de wettelijk verplichte melding "Geen herroepingsrecht" (VM14, na J22).

## Herroepingsrecht en herroepingsknop

- **Herroepingsknop** (beslissing Jonas, 7-11-2026): de webshop krijgt een online herroepingsfunctie, verplicht volgens richtlijn (EU) 2023/2673 (nieuw art. 11a richtlijn 2011/83/EU), van toepassing sinds 19 juni 2026. Bron: [Legalnews/Andersen](https://legalnews.be/handel-consument/verplichte-herroepingsknop-in-de-eu-wat-online-ondernemers-nu-al-moeten-voorbereiden-andersen/).
  - Duidelijk benoemd, bv. "Hier de overeenkomst herroepen", zichtbaar en makkelijk vindbaar (op elke pagina, bv. in de footer en bij "Bestellen en leveren"), beschikbaar tijdens de hele herroepingstermijn.
  - Twee stappen: (1) formulier met naam, gegevens om de bestelling te herkennen (bestelnummer) en e-mailadres; (2) knop "Herroeping bevestigen".
  - Na bevestiging meteen een ontvangstbevestiging per e-mail (duurzame drager), met de inhoud van het verzoek, datum en tijdstip.
  - Belgische omzetting in het Wetboek van economisch recht was in juni 2026 nog niet gepubliceerd: het ontwerp laten nakijken door de advocaat consumentenrecht.
- **Herroepingsrecht zelf** (beslissing Jonas, 7-11-2026): 14 dagen herroepingsrecht voor elke bestelling, zowel Poster als Limited. We proberen het niet te vermijden (geen "gepersonaliseerd"-uitzondering). Open bij de advocaat: retourkosten, terugbetaling inhouden tot het werk terug is, en waardeverlies bij een beschadigd of gesigneerd werk.
- **Uitwerking** (beslissing Jonas, 7-11-2026, VJ3, VJ4, VJ17 van de jurist): de klant betaalt het terugsturen (vooraf duidelijk gemeld); de vzw betaalt terug zodra het werk terug is of de klant een verzendbewijs toont, ten laatste 14 dagen na de herroeping, via dezelfde betaalwijze. De printshop (eigen beelden van de klant) roept de uitzondering voor maatwerk in en meldt dat vóór de bestelling. Nog te bevestigen door de advocaat.
- Herroepingsverzoeken en ontvangstbevestigingen 10 jaar bewaren, samen met de stukken van de terugbetaling (fiscale bewaartermijn art. 315 WIB 92; nog te bevestigen door de boekhouder).

## Vzw: boekhouding, productie en zetel

Beslissingen van de oprichter van 7-11-2026 (avond, V1 tot V9) en 8-11-2026. Bron: [beslissingen 7 november 2026, avond](https://peapickers.github.io/projecten/ondernemingsplan/beslissingen-2026-11-07-avond.html). Ze vervangen de productieplek, de bruikleen en de zetel op de productieplek of bij een familielid uit de [beslissingen van 7 november 2026](https://peapickers.github.io/projecten/boekhouder/beslissingen-2026-11-07.html) (D5, D6, ZB04, ZB05, ZB14, J12, J14, M36 vervallen).

- **Boekhouding in zelfbeheer**: de oprichter boekt en doet alle aangiftes zelf (273S, Belcotax, klantenlisting, jaarrekening, Biztax). Een ITAA-boekhouder controleert minstens 1 keer per jaar (vóór 31 december en vóór de neerlegging). Software van de boekhouder; Accountable volstaat nu niet. Vereenvoudigde boekhouding onder de vennootschapsbelasting.
- **Productie** (V1, V2): de oprichter drukt, verpakt en verzendt als particulier, kosteloos, buiten de vzw. Geen productieplek, geen huur. Schriftelijk vastgelegd in een overeenkomst met notulen: de oprichter ontvangt nooit geld of voordeel in welke vorm ook, er komen geen kosten van de oprichter ten laste van de vzw, en de vzw heeft geen post, pakjes of klanten op het adres van de productie. Intern spreekt de vzw de oprichter alleen aan bij opzet of grove fout; tegenover klanten en auteurs is de vzw altijd aansprakelijk.
- **Printer en materiaal** (V5): de printer is eigendom van de oprichter, geen bruikleen, niet verzekerd door de vzw; gaat hij kapot, dan betaalt de oprichter de herstelling, pauzeren de bestellingen en kiest de klant tussen wachten en terugbetaling. Papier en inkt koopt de vzw op haar naam en stelt ze ter beschikking, uitsluitend voor de vzw.
- **Zetel** (V3, 8-11-2026): zetel, administratie, post en back-up bij de medebestuurder, kosteloos, niet op het adres van de productie. Eerst mondelinge toestemming, daarna een schriftelijke zetelovereenkomst, nagekeken door een expert.
- **Lening** (V7, 8-11-2026): de oprichter stort als particulier telkens wat de vzw nodig heeft voor een uitgave, renteloos, zonder vaste termijn, zonder plafond en zonder buffer, met een register per uitgave. Geen clausule over kwijtschelding; een eventuele kwijtschelding alleen achteraf, bij een aparte beslissing van het bestuur met notulen. De reserve bouwt de vzw op uit verkopen, niet met de lening. Kosten van vóór de oprichting worden niet ingebracht.
- **Public Ledger** (V6): "gratis dienst door de oprichter", zonder naam en zonder bedrag; materiaal als uitgave per aankoop. De Public Ledger is een publieke weergave, niet de wettelijke boekhouding.
- **Start**: de webshop start **zonder Limited** (0 bij de start). Eerste jaar: verlies elke maand, gedekt door de lening.
- **Kalender**: vaste betaaldag voor de Auteursrechten de 15de van januari, april, juli en oktober.
- **Bestuur**: minstens 2 leden en 2 bestuurders; geen "niet-uitvoerende" bestuurder. Nu twee bestuurders voor administratie, boekhouding, website en logistiek. Bij beslissingen over de dienst of de lening beslist de medebestuurder alleen, met notulen. Later zoeken we bestuurders voor de artistieke en curatoriële kant; de oprichter neemt geen artistieke beslissingen.
- **Auteurs**: we starten alleen met auteurs die in België wonen.
- **Vaste kosten** € 1.615 tot 3.315 per jaar (boekhouder, webshop en bank, verzekeringen, marketing, domein); break-even 455 tot 934 Posters per jaar. Na te rekenen met de offerte van de boekhouder.
- **Vanaf 2029** (V8): eigen ruimte voor productie, tentoonstellingen en workshops, ten vroegste januari 2029; uitwerken in 2028.
- **Open vragen**: fiscale en juridische vragen (voordeel van alle aard, belangenconflict, omzet voor de btw-drempel, zetel, lening, persoonsgegevens) gaan eerst naar het Cultuurloket, dat doorverwijst naar boekhouder of jurist. De licentie (concept 6, 50 %) wordt pas aangepast na toestemming van de oprichter.

## Vaste regels

- Alleen fictieve placeholders: nooit beelden of gegevens van echte kunstenaars.
- Huisstijl: Courier Prime, achtergrond #F7F7F6, tekst #111111.
- Het ophangsysteem met houten latten is geschrapt: nergens vermelden.
- Vzw in oprichting rond januari 2027, verkoop vanaf het voorjaar van 2027.
