---
title: Prijsopbouw
layout: about
permalink: /about.html
credits: false
toc: false
---
{%- comment -%} Herwerkt voor de klant (Jonas, 5-11-2026): eerst de kern, dan het schema, dan de prijzen; de berekening zit in uitklapbare blokken. {%- endcomment -%}
{%- assign papieren = site.data.config-prijzen | where: 'soort', 'papier' -%}
{%- assign inkt = site.data.config-prijzen | where: 'soort', 'inkt' | first -%}
{%- assign klassen = "klein,middel,groot" | split: "," -%}
{%- capture M -%}<abbr title="M = materiaalkost: de prijs van het vel plus de inkt van de afdruk">M</abbr>{%- endcapture -%}

## Prijsopbouw

<div class="pp-kern">
  <div class="pp-kern-vak"><p class="pp-kern-groot">7 × {{ M }}</p><p>De prijs is altijd zeven keer de materiaalkost {{ M }}, afgerond op € 0,10.</p></div>
  <div class="pp-kern-vak"><p class="pp-kern-groot">1 · 3 · 3</p><p>1 deel materiaalkost, 3 delen auteursrechten, 3 delen vzw peapickers.</p></div>
  <div class="pp-kern-vak"><p class="pp-kern-groot">€ 0 btw</p><p>vzw peapickers is btw-vrijgesteld. Er komt niets bovenop.</p></div>
</div>

## Waar gaat je geld naartoe?

{% include prijs-schema.html %}

## Wat kost een poster?

| Papier | Klein<br><span class="small fw-normal">21 × 29,7 cm</span> | Medium<br><span class="small fw-normal">29,7 × 42 cm</span> | Groot<br><span class="small fw-normal">40 × 60 cm</span> |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} **{% include helpers/euro.html bedrag=pb_prijs %}** |{% endfor %}
{% endfor %}{: .pp-tabel}

Dit zijn de prijzen als vel en afbeelding even groot zijn. Maak je de afbeelding kleiner met Image Size, dan is de poster iets goedkoper. Elke maat tussen 21 × 29,7 en 40 × 60 cm kan: de prijs volgt de kleinste van de drie groottes waarin je vel past.

<details class="pp-uitklap" markdown="1">
<summary>Hoe wordt {{ M }} berekend?</summary>

{{ M }} = de prijs van het vel + de inktkost.

- **Papier**: peapickers koopt altijd papierrollen en snijdt er vellen uit, omdat dat per vel het goedkoopst is. De prijs van een rol gedeeld door het aantal vellen dat eruit gesneden wordt, is de prijs per vel. Die volgt de grootte van het vel.
- **Inkt**: richtprijzen die gemiddeld per afdruk kloppen. Die volgen de grootte van de afbeelding.

| M = papier + inkt | Klein | Medium | Groot |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} {% include helpers/euro.html bedrag=pb_m %} |{% endfor %}
{% endfor %}{: .pp-tabel}

</details>

<details class="pp-uitklap" markdown="1">
<summary>Prijsopbouw per stuk, voor elk voorbeeld</summary>

| Product | Materiaalkost | Auteursrechten | vzw peapickers | Prijs |
|---|---:|---:|---:|---:|
{% assign _voorbeelden = "semimatte:klein,enhanced-matte:middel,semimatte:middel,luster:middel,semimatte:groot" | split: "," %}{% for v in _voorbeelden %}{% assign _d = v | split: ":" %}{% assign _p = papieren | where: "id", _d[0] | first %}{% assign _k = _d[1] %}{% assign _in = _p[_k] | plus: inkt[_k] %}{% include helpers/prijsberekening.html inkoop=_in %}| Poster {{ _p.naam }}, {% if _k == "middel" %}Medium{% else %}{{ _k | capitalize }}{% endif %} | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | **{% include helpers/euro.html bedrag=pb_prijs %}** |
{% endfor %}{% include helpers/prijsberekening.html inkoop=5 %}| Limited, voorbeeld met een inkoop van € 5 | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | **{% include helpers/euro.html bedrag=pb_prijs %}** |
{: .pp-tabel}

Materiaalkost = 1 × {{ M }}, auteursrechten = 3 × {{ M }} bruto, vzw peapickers = de rest (3 × {{ M }} ± afronding).
</details>

## Poster of Limited?

| | Poster | Limited |
|---|---|---|
| Wat | Elk werk, gedrukt na je bestelling | Een gecureerde print, op duur papier of in een bijzondere reproductievorm |
| Formaat | Jij kiest papier en grootte | Vast, je kiest niets |
| Oplage | Onbeperkt | Klein, genummerd en gesigneerd door de auteur |
| Prijs | 7 × {{ M }}, volgens papier en grootte | 7 × {{ M }}, vaste prijs per werk |
| Auteursrechten | Per kwartaal, na de verkoop | Meteen bij het drukken, nog voor de verkoop |
{: .pp-tabel .pp-vergelijk}

Er zijn geen kaders of passe-partouts als apart product. Werken uit het publiek domein worden niet verkocht.

## Hoe wordt de auteur betaald?

- **3 van de 7 delen** gaan naar de auteur, als bruto auteursrecht.
- **15 % roerende voorheffing** houdt de vzw in en stort ze door. De auteur krijgt het netto bedrag, per kwartaal.
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

## Alles staat in de Public Ledger

Elke ontvangst, uitgave, lening en gift staat in de [Public Ledger]({{ "/register.html" | relative_url }}), ook de inbreng van de oprichter. Verkopen staan er per werkcode, zonder persoonsgegevens. Uitbetalingen aan auteurs staan er per kwartaal samengeteld over alle auteurs, zodat niemands inkomen af te leiden is.
