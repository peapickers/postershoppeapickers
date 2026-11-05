---
title: Prijsopbouw
layout: about
permalink: /about.html
credits: false
toc: false
heading: De prijs
sub-heading: tot op de cent ontleed
---
{%- assign papieren = site.data.config-prijzen | where: 'soort', 'papier' -%}
{%- assign inkt = site.data.config-prijzen | where: 'soort', 'inkt' | first -%}
{%- assign klassen = "klein,middel,groot" | split: "," -%}

## Altijd 7 × M

Er zijn twee producten met dezelfde formule: posters op maat, gedrukt na je bestelling, en Limited: gecureerde prints in kleine oplage.

**Prijs = 7 × M, afgerond op € 0,10.** M is de materiaalkost: de velkost plus de inktkost, inclusief de btw die de vzw zelf op het materiaal betaalt. Van de prijs gaat 1 M naar de materiaalkost, 3 M naar de auteursrechten (bruto) en 3 M naar vzw peapickers, met het verschil van de afronding.

vzw peapickers is {{ site.btw-vermelding }}. Er komt dus geen btw bovenop. Omdat de vzw de btw op papier en inkt niet terugkrijgt, telt die mee in M. Gaat de omzet ooit boven € 25.000, dan moet de verdeling opnieuw bekeken worden.

{% include prijs-schema.html %}

## Posters op maat

Elk werk in de shop is als poster verkrijgbaar. Je kiest het papier en de grootte, en ziet meteen de prijs met de prijsopbouw eronder: materiaalkost, auteursrechten (bruto en netto) en vzw peapickers.

1. **Sheet Size**: het vel, van 21 × 29,7 tot 40 × 60 cm, met de knoppen Groot (40 × 60), Medium (29,7 × 42) en Klein (21 × 29,7) of een eigen maat, in een verhouding van 4:6 tot vierkant. Het papier komt van een rol van 40 cm breed, dus 40 × 60 cm is het maximum. Tip: meet je kader of de plek op de muur.
2. **Image Size**: de afbeelding op het vel. De passe-partout, de witruimte rond de afbeelding, is altijd minstens 5 % van de korte zijde van het vel.

De velkost volgt de kleinste van drie groottes waarin het vel past, de inktkost de kleinste waarin de afbeelding past: **Klein** (tot 21 × 29,7 cm), **Medium** (tot 29,7 × 42 cm) en **Groot** (tot 40 × 60 cm).

| Inkoop excl. btw | Klein | Medium | Groot |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} | {% include helpers/euro.html bedrag=p.klein %} | {% include helpers/euro.html bedrag=p.middel %} | {% include helpers/euro.html bedrag=p.groot %} |
{% endfor %}| {{ inkt.naam }} | {% include helpers/euro.html bedrag=inkt.klein %} | {% include helpers/euro.html bedrag=inkt.middel %} | {% include helpers/euro.html bedrag=inkt.groot %} |

| M (materiaalkost incl. btw) | Klein | Medium | Groot |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} {% include helpers/euro.html bedrag=pb_m %} |{% endfor %}
{% endfor %}

| Prijs voor de klant | Klein | Medium | Groot |
|---|---:|---:|---:|
{% for p in papieren %}| {{ p.naam }} |{% for k in klassen %}{% assign _in = p[k] | plus: inkt[k] %}{% include helpers/prijsberekening.html inkoop=_in %} **{% include helpers/euro.html bedrag=pb_prijs %}** |{% endfor %}
{% endfor %}

Dit zijn de prijzen als vel en afbeelding in dezelfde grootte vallen. Een kleinere afbeelding is iets goedkoper. De prijs rekent met de onafgeronde M; daardoor kan 7 × de getoonde M een paar cent afwijken. Dat verschil gaat naar of komt van de vzw.

### Prijsopbouw per stuk

| Product | Materiaalkost 1M | Auteursrechten 3M | vzw peapickers 3M ± afronding | Prijs |
|---|---:|---:|---:|---:|
{% assign _voorbeelden = "semimatte:klein,enhanced-matte:middel,semimatte:middel,luster:middel,semimatte:groot" | split: "," %}{% for v in _voorbeelden %}{% assign _d = v | split: ":" %}{% assign _p = papieren | where: "id", _d[0] | first %}{% assign _k = _d[1] %}{% assign _in = _p[_k] | plus: inkt[_k] %}{% include helpers/prijsberekening.html inkoop=_in %}| Poster {{ _p.naam }}, {% if _k == "middel" %}medium{% else %}{{ _k }}{% endif %} | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | {% include helpers/euro.html bedrag=pb_prijs %} |
{% endfor %}{% include helpers/prijsberekening.html inkoop=5 %}| Limited, voorbeeld met een inkoop van € 5 | {% include helpers/euro.html bedrag=pb_m %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_vzw %} | {% include helpers/euro.html bedrag=pb_prijs %} |

## Limited

Unieke prints, op duur papier of op een bijzondere manier gereproduceerd, in een selectieve, gecureerde oplage, genummerd en gesigneerd door de auteur. Je kiest geen formaat: het is een vaste print met een vaste prijs van 7 × M, en M verschilt per werk.

Een Limited is voorraad. De auteur krijgt het auteursrecht meteen bij het drukken, nog voor de verkoop. Onverkochte exemplaren worden op de laatste dag van het boekjaar geteld, gewaardeerd aan materiaal plus betaalde auteursrechten.

Er zijn geen kaders, latten of passe-partouts als apart product. Werken uit het publiek domein worden niet verkocht.

## De auteur wordt betaald in auteursrechten

De auteur tekent per werk een niet-exclusieve licentie en krijgt 3 van de 7 delen. vzw peapickers houdt 15 % roerende voorheffing in op het brutobedrag, stort die door en betaalt de auteur netto, per kwartaal. Een tweede bestuurder ziet elke kwartaaluitbetaling en de boekhouder controleert.

| Per verkocht stuk | Prijs | Auteursrechten bruto | Voorheffing 15 % | Auteursrechten netto |
|---|---:|---:|---:|---:|
{% assign _p = papieren | where: "id", "semimatte" | first %}{% assign _in = _p.middel | plus: inkt.middel %}{% include helpers/prijsberekening.html inkoop=_in %}| Poster {{ _p.naam }}, medium | {% include helpers/euro.html bedrag=pb_prijs %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_rv %} | {% include helpers/euro.html bedrag=pb_netto %} |
{% include helpers/prijsberekening.html inkoop=5 %}| Limited, inkoop € 5 | {% include helpers/euro.html bedrag=pb_prijs %} | {% include helpers/euro.html bedrag=pb_auteur %} | {% include helpers/euro.html bedrag=pb_rv %} | {% include helpers/euro.html bedrag=pb_netto %} |

## Public Ledger

Elke ontvangst, uitgave, lening en gift staat in de [Public Ledger]({{ "/register.html" | relative_url }}), ook de inbreng van de oprichter. Verkopen staan er per werkcode, zonder persoonsgegevens. Uitbetalingen aan auteurs staan er per kwartaal samengeteld over alle auteurs, zodat niemands inkomen af te leiden is.
