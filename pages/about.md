---
title: Prijsopbouw
layout: about
permalink: /about.html
credits: false
toc: false
---
{%- comment -%} Herwerkt voor de klant (Jonas, 5-11-2026; 50/50 en 7M-zin op 8-11-2026): eerst de kern, dan het schema, dan de prijzen; de berekening zit in uitklapbare blokken. 7M, 4M en 3M staan alleen op deze pagina. {%- endcomment -%}
{%- assign papieren = site.data.config-prijzen | where: 'soort', 'papier' -%}
{%- assign inkt = site.data.config-prijzen | where: 'soort', 'inkt' | first -%}
{%- assign klassen = "klein,middel,groot" | split: "," -%}
{%- capture M -%}<abbr title="M = materiaalkost: de prijs van het vel plus de inkt van de afdruk">M</abbr>{%- endcapture -%}

## Prijsopbouw

<p class="lead">7M is het minimum waarmee we onze kosten en de auteurs betalen. Meer is niet nodig, minder is te weinig.</p>

{% assign _p = papieren | where: "id", "semimatte" | first %}{% assign _in = _p.middel | plus: inkt.middel %}{% include helpers/prijsberekening.html inkoop=_in %}{% assign _rest = pb_vzw | minus: pb_m | minus: site.verpakking-poster | minus: site.betaalkost-schatting | round: 2 %}
<div class="pp-kern">
  <div class="pp-kern-vak"><p class="pp-kern-groot">7 × {{ M }}</p><p>De prijs is zeven keer de materiaalkost {{ M }}, afgerond op € 0,10.</p></div>
  <div class="pp-kern-vak"><p class="pp-kern-groot">50 / 50</p><p>De helft gaat naar de auteur als Auteursrechten, de helft naar vzw peapickers.</p></div>
  <div class="pp-kern-vak"><p class="pp-kern-groot">€ 0 btw</p><p>vzw peapickers is btw-vrijgesteld. Er komt niets bovenop.</p></div>
</div>

**Een voorbeeld.** Een poster {{ _p.naam }}, Medium, kost **{% include helpers/euro.html bedrag=pb_prijs %}**. {% include helpers/euro.html bedrag=pb_auteur %} gaat bruto naar de auteur, {% include helpers/euro.html bedrag=pb_vzw %} naar vzw peapickers. Daarvan betaalt de vzw papier en inkt ({% include helpers/euro.html bedrag=pb_m %}), de verpakking ({% include helpers/euro.html bedrag=site.verpakking-poster %}) en de betaalkost ({% include helpers/euro.html bedrag=site.betaalkost-schatting %}). Er blijft {% include helpers/euro.html bedrag=_rest %} voor de overhead: boekhouder, webshop, verzekering en reserve.

## Waar gaat je geld naartoe?

{% include prijs-schema.html %}

## Wat kost een poster?

| Papier | Klein<br><span class="small fw-normal">20 × 30 cm</span> | Medium<br><span class="small fw-normal">30 × 40 cm</span> | Groot<br><span class="small fw-normal">40 × 60 cm</span> |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} **{% include helpers/euro.html bedrag=pb_prijs %}** |{% endfor %}
{% endfor %}{: .pp-tabel}

Dit zijn de prijzen als vel en afbeelding even groot zijn. Maak je de afbeelding kleiner met Image Size, dan is de poster iets goedkoper. Elke maat tussen 20 × 30 en 40 × 60 cm kan: de prijs volgt de kleinste van de drie groottes waarin je vel past.

<details class="pp-uitklap" markdown="1">
<summary>Hoe wordt {{ M }} berekend?</summary>

{{ M }} = de prijs van het vel + de inktkost.

- **Papier**: peapickers koopt altijd papierrollen en snijdt er vellen uit, omdat dat per vel het goedkoopst is.
- **Inkt**: richtprijzen die gemiddeld per afdruk kloppen. Die volgen de grootte van de afbeelding.

| | Klein | Medium | Groot |
|---|---:|---:|---:|
| **Papier per vel** | | | |
{% for p in papieren %}| {{ p.naam }} | {% include helpers/euro.html bedrag=p.klein %} | {% include helpers/euro.html bedrag=p.middel %} | {% include helpers/euro.html bedrag=p.groot %} |
{% endfor %}| **Inkt per afdruk** | {% include helpers/euro.html bedrag=inkt.klein %} | {% include helpers/euro.html bedrag=inkt.middel %} | {% include helpers/euro.html bedrag=inkt.groot %} |
| **M = papier + inkt** | | | |
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} **{% include helpers/euro.html bedrag=pb_m %}** |{% endfor %}
{% endfor %}{: .pp-tabel .pp-opsplitsing}

</details>

<details class="pp-uitklap" markdown="1">
<summary>Prijsopbouw per stuk, voor elk voorbeeld</summary>

| Product | Materiaalkost (betaalt de vzw) | Auteursrechten | vzw peapickers | Prijs |
|---|---:|---:|---:|---:|
{% assign _voorbeelden = "semimatte:klein,enhanced-matte:middel,semimatte:middel,luster:middel,semimatte:groot" | split: "," %}{% for v in _voorbeelden %}{% assign _d = v | split: ":" %}{% assign _p = papieren | where: "id", _d[0] | first %}{% assign _k = _d[1] %}{% assign _in = _p[_k] | plus: inkt[_k] %}{% include helpers/prijsberekening.html inkoop=_in %}| Poster {{ _p.naam }}, {% if _k == "middel" %}Medium{% else %}{{ _k | capitalize }}{% endif %} | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | **{% include helpers/euro.html bedrag=pb_prijs %}** |
{% endfor %}{% include helpers/prijsberekening.html inkoop=5 %}| Limited, voorbeeld met een inkoop van € 5 | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | **{% include helpers/euro.html bedrag=pb_prijs %}** |
{: .pp-tabel}

Auteursrechten = 50 % van de prijs, bruto. vzw peapickers = de andere 50 %. Papier en inkt koopt de vzw per rol en per cartridge; de materiaalkost toont wat dat voor dit stuk kost, uit de helft van de vzw.
</details>

## Poster of Limited?

| | Poster | Limited |
|---|---|---|
| Wat | Elk werk, gedrukt na je bestelling | Gecureerde, unieke afdrukken |
| Formaat | Jij kiest papier en grootte | Vast |
| Oplage | Onbeperkt | Klein, genummerd en gesigneerd door de auteur |
| Prijs | 7 × {{ M }}, volgens papier en grootte | 7 × {{ M }}, vaste prijs per werk |
| Auteursrechten | Per kwartaal uitbetaald, alleen na verkoop | Onmiddellijk uitbetaald, losstaand van verkoop |
{: .pp-tabel .pp-vergelijk}

De webshop start in 2027 met Posters. Limited volgt later. Er zijn geen kaders of passe-partouts als apart product.

Werken uit het publiek domein krijgen later een eigen pagina bij Posters, aan 4 × {{ M }}. Daar zijn geen auteursrechten: alles gaat naar de vzw.

## Tweede kans {#tweede-kans}

Komt een Poster onbeschadigd terug na een herroeping, dan gaat hij opnieuw te koop bij [Tweede kans]({{ '/index.html?product=tweede-kans' | relative_url }}), met het label "teruggestuurd". De prijs is 80 % van de oorspronkelijke prijs, afgerond op € 0,10. Er is geen nieuwe Materiaalkost: de poster bestaat al. De opbrengst gaat voor de helft naar de auteur, als Auteursrechten, en voor de helft naar vzw peapickers. vzw peapickers draagt het verlies.

| Voorbeeld | Was | Prijs | Materiaalkost | Auteursrechten | vzw peapickers |
|---|---:|---:|---:|---:|---:|
{% assign _p = papieren | where: "id", "semimatte" | first %}{% assign _in = _p.middel | plus: inkt.middel %}{% include helpers/prijsberekening.html inkoop=_in %}{% include helpers/tweede-kans-prijs.html oud=pb_prijs %}| Poster {{ _p.naam }}, Medium, teruggestuurd | {% include helpers/euro.html bedrag=pb_prijs %} | **{% include helpers/euro.html bedrag=tk_prijs %}** | {% include helpers/euro.html bedrag=0 %} | {% include helpers/euro.html bedrag=tk_auteur %} | {% include helpers/euro.html bedrag=tk_vzw %} |
{: .pp-tabel}

## Hoe wordt de auteur betaald?

- **50 % van de verkoopprijs** gaat naar de auteur, als bruto auteursrecht.
- **15 % roerende voorheffing** houdt de vzw in en stort ze door. De auteur krijgt het netto bedrag, per kwartaal: op de 15de van januari, april, juli en oktober, voor het eerst op 15 juli 2027.
- **Een licentie per werk**, niet-exclusief. Een tweede bestuurder ziet elke uitbetaling en de boekhouder controleert.

| Per verkocht stuk | Prijs | Bruto | Voorheffing 15 % | Netto naar de auteur |
|---|---:|---:|---:|---:|
{% assign _p = papieren | where: "id", "semimatte" | first %}{% assign _in = _p.middel | plus: inkt.middel %}{% include helpers/prijsberekening.html inkoop=_in %}| Poster {{ _p.naam }}, Medium | {% include helpers/euro.html bedrag=pb_prijs %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_rv %} | **{% include helpers/euro.html bedrag=pb_netto %}** |
{% include helpers/prijsberekening.html inkoop=5 %}| Limited, inkoop € 5 | {% include helpers/euro.html bedrag=pb_prijs %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_rv %} | **{% include helpers/euro.html bedrag=pb_netto %}** |
{: .pp-tabel}

<details class="pp-uitklap" markdown="1">
<summary>Wat met onverkochte Limited-exemplaren en een grotere omzet?</summary>

Een Limited is voorraad. Onverkochte exemplaren worden op de laatste dag van het boekjaar geteld, gewaardeerd aan materiaalkost plus de betaalde auteursrechten.

Gaat de omzet ooit boven € 25.000, dan moet de verdeling opnieuw bekeken worden.
</details>

{% include geldreserves.html %}

## Alles staat in de Public Ledger

Elke ontvangst, uitgave, lening en gift staat in de [Public Ledger]({{ "/register.html" | relative_url }}), ook de inbreng van de oprichter. Verkopen staan er per werkcode, zonder persoonsgegevens. Uitbetalingen aan auteurs staan er per kwartaal samengeteld over alle auteurs, zodat niemands inkomen af te leiden is.
