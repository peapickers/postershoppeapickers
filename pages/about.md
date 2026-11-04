---
title: Hoe laat is het?
layout: about
permalink: /about.html
credits: false
toc: false
heading: Fiscaliteit
sub-heading:
---

## De prijs

De materiaalkost **M** is het papier plus de inkt. Bij een poster hangt het papier af van de papiersoort en de maat van het vel, en de inkt van de maat van de afbeelding; bij fine art ligt M vast per editie. De prijs excl. btw is altijd 7 × M, met een vaste verdeling: 1 deel materiaal, 3 delen bruto auteursrecht voor de kunstenaar en 3 delen voor vzw peapickers. De btw van 21% komt erbovenop. Verzending zit niet in de prijs.

| Papier | A4-vel | A3-vel | A2-vel |
|---|---:|---:|---:|
{% for p in site.data.config-prijzen %}{% if p.soort == 'papier' %}| {{ p.naam }} | € {{ p.a4 | replace: '.', ',' }} | € {{ p.a3 | replace: '.', ',' }} | € {{ p.a2 | replace: '.', ',' }} |
{% endif %}{% endfor %}{% assign i = site.data.config-prijzen | where: 'soort', 'inkt' | first %}| **Inkt**, volgens de afbeelding | € {{ i.a4 | replace: '.', ',' }} (A4 of kleiner) | € {{ i.a3 | replace: '.', ',' }} | € {{ i.a2 | replace: '.', ',' }} |

A4 = tot 21 × 30 cm, A3 = tot 30 × 42 cm, A2 = tot 42 × 60 cm, staand of liggend.

{% include prijs-schema.html %}


## Public Ledger

peapickers stelt zich uniek op in de markt door onze financiële transparantie. Naast de prijsontleding delen we onze volledige boekhouding in de [public ledger]({{ "/register.html" | relative_url }}). Hier vind je een tijdslijn met alle financiële gegevens, geanonimiseerde administratieve acties (aankopen en verkopen) en de context die peapickers maakt tot wat het is.

## De maker wordt betaald in auteursrechten

Voor elk werk dat je hier kunt kopen, sluit vzw peapickers een niet-exclusieve licentie per werk met de auteur: het recht om het werk als poster te verkopen, in een kleine genummerde en gesigneerde oplage. De auteur blijft vrij het werk elders te tonen, te verkopen of te laten drukken. Het gaat altijd om bestaand werk, nooit om werk in opdracht.

De auteur krijgt 3 van de 7 delen van de prijs excl. btw als bruto auteursrecht. Daarop houdt vzw peapickers 15% roerende voorheffing in en stort die door; de auteur ontvangt het netto bedrag als particulier. Voor auteursrechten geïnd in 2026 geldt dat tot € 77.220 bruto per jaar (VLAIO, 2026). Uitbetaling gebeurt per kwartaal.
