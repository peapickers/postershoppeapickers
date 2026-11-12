# Statisch en veilig: controle van de postershop

Stand 12 november 2026. Dit document zegt wat er gecontroleerd is, wat er veranderd is en wat nog open staat. Het hoort bij de stappen "Site vereenvoudigen" en "Basisbeveiliging" van het stappenplan.

Regels uit het beslissingenregister die hier gelden: geen cookiebanner (dus geen externe diensten die er een vereisen), veiligheid wint en geen eigen server, alles lezen en bekijken werkt zonder JavaScript, de CSV is het metadatabestand met JSON als export, security.txt als meldpunt, huisstijl Courier Prime op #F7F7F6 met tekst #111111.

## 1. Wat de controle vond

De site is gebouwd en elke pagina is geopend in een browser, één keer met en één keer zonder JavaScript. Elk verzoek naar een andere server is geteld.

| Wat | Gevonden | Nu |
|---|---|---|
| Externe lettertypes | Elke pagina haalde IBM Plex Sans KR op bij Google (fonts.googleapis.com en fonts.gstatic.com). Google zag zo het IP-adres van elke bezoeker. | Weg. Courier Prime staat in `assets/fonts/`. |
| Externe scripts | Geen. Bootstrap, Lunr, Spotlight en de QR-code staan in `assets/lib/`. | Ongewijzigd. |
| Trackers en statistieken | Geen. `_includes/head/analytics.html` is leeg. | Ongewijzigd. |
| Cookies | Geen enkele. | Ongewijzigd. |
| Opslag in de browser | Drie sleutels, enkel in de browser van de bezoeker, nooit verstuurd: `pp-mand-v1` (de mand), `pp-naakt` (keuze NSFW tonen), `pp-poster-laatste-v1` (laatst gekozen formaat). | Ongewijzigd. |
| Formulieren | Zoekveld (zoekt in de browser), filter van de Public Ledger (in de browser), bestelformulier in de Winkelmand (voorbeeld: verstuurt niets), herroepingsformulier (verstuurt niets zolang `herroeping-endpoint` leeg is). | Ongewijzigd. |
| Gegevens ophalen | De Winkelmand vraagt de bezette levermomenten op bij de printshop (`beschikbaarheid-url` in `_data/leverronde.yml`). Er gaat niets van de bezoeker mee. Lukt het niet, dan toont de mand alle momenten. | Blijft, en is nu het enige toegelaten adres buiten de site. |
| Snipcart | Staat uit (`snipcart-api-key` is leeg). Staat het aan, dan laadt het scripts van Snipcart. | Staat uit en wordt nu ook door de browser tegengehouden tot iemand het bewust toelaat. |
| Ingebouwde sjablonen | CollectionBuilder heeft sjablonen voor YouTube, Vimeo, Internet Archive en Bootswatch. Geen enkel werk gebruikt ze. | Blijven ongebruikt en worden door de browser tegengehouden. |
| Zonder JavaScript | Producten en de Public Ledger waren leeg. Tekstpagina's en werkpagina's waren al leesbaar. | Producten en alle handelingen van de Public Ledger staan nu als gewone HTML op de pagina. |
| Huisstijl | Lettertype en kleuren weken af van de vaste regel. | Courier Prime, #F7F7F6, #111111. |
| Meldpunt | Geen security.txt. `SECURITY.md` verwees naar het team van CollectionBuilder. | `.well-known/security.txt` en `SECURITY.md` verwijzen naar peapickers@proton.me. |

Resultaat na de wijzigingen: 24 pagina's, nul verzoeken naar een andere server, nul cookies, nul foutmeldingen in de browser.

## 2. Wat er veranderd is, en waarom

### Courier Prime lokaal

- **Wat:** acht bestanden in `assets/fonts/` (gewoon, vet, cursief, vet cursief, voor Latijns en uitgebreid Latijns schrift) en de licentie `OFL-Courier-Prime.txt`.
- **Waarom:** geen verzoek meer naar Google, en de huisstijl klopt.
- **Hoe:** de `@font-face`-regels staan bovenaan `_sass/_custom.scss`. In `_data/theme.yml` is `font-cdn` leeg en staat `base-font-family` op Courier Prime. De kleuren staan in `_sass/_custom.scss` (`$eggshell`, `$ink`) en `_data/theme.yml` (`text-color`, `link-color`).

### De browser laadt enkel de eigen site

- **Wat:** `_includes/head/veiligheid.html` zet in elke pagina een Content-Security-Policy en `referrer: no-referrer`.
- **Waarom:** ook als er later per ongeluk een link naar een externe dienst in de code komt, laadt de browser ze niet. Een bezoeker die op een externe link klikt, geeft niet door van welke pagina die kwam.
- **Hoe:** de regel laat enkel bestanden van de eigen site toe. Voor het ophalen van gegevens leest ze zelf twee instellingen: `beschikbaarheid-url` in `_data/leverronde.yml` en `herroeping-endpoint` in `_config.yml`. Vul je daar een ander adres in, dan past de regel zich aan bij de volgende bouw.
- **Let op:** wie Snipcart aanzet, moet de adressen van Snipcart in `_includes/head/veiligheid.html` toevoegen.

### Leesbaar zonder JavaScript

- **Producten** (`_layouts/producten.html`): alle werken staan als gewone tegels op de pagina. Met JavaScript komen daar filters, zoeken en shuffle bovenop. Een NSFW-werk krijgt zonder JavaScript geen beeld.
- **Public Ledger** (`_includes/register.html`): alle handelingen staan als gewone tabel op de pagina. Met JavaScript komen de totalen, de filters en het saldo erbij.
- **NSFW op de werkpagina** (`_layouts/item/item-page-base.html`, `_sass/_custom.scss`): het beeld is nu ook zonder JavaScript verborgen.
- **Beelden**: de tegels gebruiken het ingebouwde `loading="lazy"` van de browser in plaats van een script.

Wat nog JavaScript nodig heeft: zoeken, de Winkelmand en bestellen, het herroepingsformulier, de totalen en filters van de Public Ledger.

### Meldpunt

- **Wat:** `.well-known/security.txt` met peapickers@proton.me, en een eigen `SECURITY.md`.
- **Hoe:** `include: [.well-known]` in `_config.yml`, want Jekyll slaat mappen met een punt over.
- **Let op:** de regel `Expires` moet elk jaar een jaar opgeschoven worden (nu 1 november 2027). Scanners zoeken het bestand aan de wortel van een domein. Op GitHub Pages staat het onder `/postershoppeapickers/`; het werkt pas volledig op het eigen domein.

### Updates

- **Wat:** `.github/dependabot.yml`.
- **Waarom:** GitHub stelt dan zelf een pull request voor als er een veiligheidsupdate is voor de bouwstappen.
- **Hoe:** het bestand volstaat; in de instellingen van de repo moet Dependabot wel aan staan (Settings, Code security).

## 3. JSON-metadata per werk

- **Wat:** bij het bouwen maakt de site voor elk werk `/items/<objectid>.json`, naast de gewone pagina. Op elke werkpagina staat onder Metadata een link "Deze metadata als JSON".
- **Waarom:** de CSV blijft het enige metadatabestand en JSON is enkel een export. Niemand tikt JSON met de hand.
- **Hoe:** `_plugins/pp_metadata_json.rb` leest `_data/config-json.csv`. Elke regel van die CSV zegt welke kolom onder welke naam in welke laag komt.

| Kolom in `config-json.csv` | Betekenis |
|---|---|
| `laag` | `dublin_core`, `vra_core`, `premis`, `isad_g` of `peapickers` |
| `term` | de naam in de JSON |
| `kolom` | de kolom uit `_data/peapickers-archief.csv`; leeg betekent dat er nog geen kolom is, de waarde wordt dan `null` |
| `meerdere` | `ja`: waarden gescheiden door `;` worden een lijst |
| `vast` | een vaste waarde voor elk werk |
| `toelichting` | uitleg voor mensen, komt niet in de JSON |

Een term toevoegen of schrappen doe je met één regel in die CSV. De metadata-CSV zelf is niet veranderd: er zijn geen kolommen bijgekomen of verplaatst.

Wat nog `null` is omdat er geen kolom voor bestaat: de checksum van het origineel, de datum van de laatste controle, en de status van de publicatielicentie en de reproductielicentie. Welke kolommen daarvoor komen, beslis je bij de stap "Metadataschema vastleggen". De huidige indeling is een eerste voorstel op de bestaande kolommen, geen vastgelegd schema.

Alle twaalf werken zijn fictieve placeholders.

## 4. Wat nog open staat

1. **Vaste versies van de bouwsoftware.** `Gemfile` noemt geen versies en `Gemfile.lock` staat in `.gitignore`. Elke bouw neemt dus de nieuwste pakketten. Veiliger is `Gemfile.lock` in de repo. Dat doe je best op de laptop waarop je bouwt, zodat het bestand bij Windows en bij GitHub past: `bundle lock --add-platform x86_64-linux`, de regel `Gemfile.lock` uit `.gitignore` halen, en het bestand committen.
2. **Headers op de nieuwe host.** Een meta-tag kan niet alles. Bij de stap "Hosting kiezen" horen deze headers: dezelfde Content-Security-Policy met `frame-ancestors 'none'`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff` en `Permissions-Policy`. Daarna kan `'unsafe-inline'` weg als de scripts van CollectionBuilder naar aparte bestanden verhuizen.
3. **Instellingen op GitHub** (enkel jij kunt dit): main beschermen, Dependabot en secret scanning aanzetten, tweestapsverificatie op het account.
4. **Minder code.** In `assets/lib/` staan bibliotheken die geen pagina in het menu gebruikt: Leaflet (kaart), Pannellum (panorama), DataTables. De pagina's `data.html` en `timeline.html` staan niet in het menu maar worden wel gebouwd. Schrappen hoort bij "Site vereenvoudigen", nadat de structuur vastligt.
5. **Printshop offline.** Gaat de printshop offline, dan lukt het ophalen van de bezette levermomenten niet meer en toont de mand alle momenten. Zet `beschikbaarheid-url` dan leeg of naar een eigen bestand.
6. **robots.txt.** Het bestand in deze repo wordt op GitHub Pages niet gelezen, omdat het niet aan de wortel van het domein staat. Op het eigen domein werkt het wel.
7. **Tagline.** Het register zegt dat de tagline en de taglinelinks vervallen. Ze staan nog in `_config.yml`.

## 5. Zelf controleren

1. Bouw de site: `bundle exec jekyll build`.
2. Open een pagina, druk F12, kies het tabblad Netwerk en herlaad. Elke regel moet van de eigen site komen.
3. Zet JavaScript uit (F12, Ctrl+Shift+P, "Disable JavaScript") en herlaad Producten en de Public Ledger: de werken en de handelingen moeten er staan.
4. Open `/items/kunstwerk2026-001-01.json`.
