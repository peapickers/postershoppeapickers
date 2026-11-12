# frozen_string_literal: true

# peapickers: JSON-export van de metadata, één bestand per werk.
#
# Wat:    voor elke rij in de metadata-CSV (_config.yml, "metadata") schrijft deze plugin bij het bouwen
#         /items/<objectid>.json, naast de gewone pagina /items/<objectid>.html.
# Waarom: de CSV blijft het enige metadatabestand; JSON is enkel een export (register: "Metadata in CSV met vier lagen").
#         Niemand tikt JSON met de hand en er draait geen script buiten het bouwen van de site.
# Hoe:    welke kolom onder welke naam in welke laag komt, staat in _data/config-json.csv:
#           laag        dublin_core, vra_core, premis, isad_g of peapickers
#           term        de naam in de JSON
#           kolom       de kolom uit de metadata-CSV (leeg = er is nog geen kolom; de waarde wordt null)
#           meerdere    "ja" = waarden gescheiden door ";" worden een lijst
#           vast        een vaste waarde voor elk werk (in plaats van een kolom)
#           toelichting uitleg voor mensen; komt niet in de JSON
#         Een regel toevoegen of schrappen in die CSV is genoeg; deze plugin hoeft daarvoor niet te veranderen.
require 'json'

module Peapickers
  class MetadataJsonGenerator < Jekyll::Generator
    safe true
    priority :low

    SCHEMA = 'peapickers-werk/0.1'

    def generate(site)
      mapping = site.data['config-json']
      records = site.data[site.config['metadata']]
      return unless mapping.is_a?(Array) && records.is_a?(Array)

      records.each do |record|
        id = record['objectid'].to_s.strip
        next if id.empty?

        slug = Jekyll::Utils.slugify(id, mode: 'pretty')
        page = Jekyll::PageWithoutAFile.new(site, site.source, 'items', "#{slug}.json")
        page.content = JSON.pretty_generate(export(record, mapping, slug)) + "\n"
        page.data['layout'] = nil
        page.data['sitemap'] = false
        site.pages << page
      end
    end

    private

    def export(record, mapping, slug)
      out = {
        'schema' => SCHEMA,
        'objectid' => record['objectid'].to_s.strip,
        'pagina' => "/items/#{slug}.html"
      }
      mapping.each do |row|
        laag = row['laag'].to_s.strip
        term = row['term'].to_s.strip
        next if laag.empty? || term.empty?

        (out[laag] ||= {})[term] = value(record, row)
      end
      out
    end

    def value(record, row)
      vast = row['vast'].to_s.strip
      return vast unless vast.empty?

      kolom = row['kolom'].to_s.strip
      return nil if kolom.empty?

      raw = record[kolom].to_s.strip
      if row['meerdere'].to_s.strip.downcase == 'ja'
        raw.split(';').map(&:strip).reject(&:empty?)
      else
        raw.empty? ? nil : raw
      end
    end
  end
end
