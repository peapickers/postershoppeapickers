# Maakt de placeholderbeelden opnieuw met een watermerk "©<maker>" per archiefstuk.
# Moeilijker weg te werken: schuin, over het hele beeld én over de tekst, onregelmatig
# geplaatst (per archiefstuk andere spreiding, grootte en hoek), met omlijnde letters.
import csv, os, random, sys
from PIL import Image, ImageDraw, ImageFont
CB = sys.argv[1]
FB = '/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf'
FR = '/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf'
obj = os.path.join(CB, 'objects')

def watermerk(im, tekst, seed):
    rnd = random.Random(seed)
    w, h = im.size
    laag = Image.new('RGBA', (w * 2, h * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(laag)
    y, rij = 0, 0
    while y < h * 2:
        grootte = rnd.randint(34, 48)
        f = ImageFont.truetype(FB, grootte)
        x = -rnd.randint(0, 400) + (rij % 2) * 180
        while x < w * 2:
            alpha = rnd.randint(70, 105)
            d.text((x, y), tekst, font=f, fill=(255, 255, 255, alpha),
                   stroke_width=2, stroke_fill=(0, 0, 0, alpha))
            x += int(d.textlength(tekst, font=f)) + rnd.randint(60, 160)
        y += rnd.randint(95, 135); rij += 1
    laag = laag.rotate(rnd.uniform(24, 36), resample=Image.BICUBIC)
    laag = laag.crop((w // 2, h // 2, w // 2 + w, h // 2 + h))
    # fijne kruislijnen in dezelfde onregelmatige rasterhoek
    d2 = ImageDraw.Draw(laag)
    for i in range(-h, w, rnd.randint(55, 70)):
        d2.line([(i, 0), (i + h * 0.6, h)], fill=(255, 255, 255, 22), width=1)
    return Image.alpha_composite(im.convert('RGBA'), laag).convert('RGB')

for r in csv.DictReader(open(os.path.join(CB, '_data/peapickers-archief.csv'))):
    oid, code, maker = r['objectid'], r['identiteitscode'], r['creator']
    pad = f'{obj}/{oid}.jpg'
    w, h = Image.open(pad).size
    im = Image.new('RGB', (w, h), (12, 12, 12)); d = ImageDraw.Draw(im)
    d.rectangle([40, 40, w - 41, h - 41], outline=(235, 229, 210), width=2)
    d.text((80, h // 2 - 90), code, font=ImageFont.truetype(FB, 58), fill=(240, 234, 214))
    d.text((80, h // 2), 'PLACEHOLDER · fictief archiefstuk', font=ImageFont.truetype(FR, 30), fill=(150, 146, 135))
    d.text((80, h - 110), f'©{maker} · max. 1200 px', font=ImageFont.truetype(FR, 30), fill=(150, 146, 135))
    im = watermerk(im, f'©{maker}', oid)
    im.save(pad, quality=85)
    for sub, suf, sz in (('small', '_sm', 800), ('thumbs', '_th', 450)):
        t = im.copy(); t.thumbnail((sz, sz * 2)); t.save(f'{obj}/{sub}/{oid}{suf}.jpg', quality=80)
    print(code, maker, (w, h))
