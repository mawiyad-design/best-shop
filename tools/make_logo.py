"""Redraw the Best Shop logo crisply at high resolution (brand colors #FFF000 / #000000)."""
from PIL import Image, ImageDraw, ImageFont

YELLOW, BLACK = (255, 240, 0, 255), (0, 0, 0, 255)
FONT = "C:/Windows/Fonts/ariblk.ttf"


def draw(size=1200, background=True):
    ss = 2                      # supersampling for smooth edges
    W = size * ss
    k = W / 200                 # design grid is 200 x 200
    img = Image.new("RGBA", (W, W), YELLOW if background else (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([k * 12, k * 12, k * 188, k * 188], fill=BLACK)

    ring = k * 0.7
    d.ellipse([k * 14.5, k * 14.5, k * 185.5, k * 185.5], outline=YELLOW, width=max(1, int(ring)))

    tag = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    t = ImageDraw.Draw(tag)
    t.rounded_rectangle([k * 58, k * 56, k * 170, k * 144], radius=k * 5, fill=YELLOW)
    t.polygon([(k * 62, k * 56), (k * 31, k * 90), (k * 31, k * 110), (k * 62, k * 144)], fill=YELLOW)
    t.ellipse([k * 29, k * 90, k * 35, k * 110], fill=YELLOW)
    t.ellipse([k * 39, k * 95, k * 49, k * 105], fill=BLACK)          # string hole
    font = ImageFont.truetype(FONT, int(k * 37))
    for word, cy in (("BEST", 83), ("SHOP", 118)):
        box = font.getbbox(word)
        layer = Image.new("RGBA", (box[2] - box[0], box[3] - box[1]), (0, 0, 0, 0))
        ImageDraw.Draw(layer).text((-box[0], -box[1]), word, font=font, fill=BLACK)
        target_w = int(k * 104)                                         # condensed, like the original lettering
        layer = layer.resize((target_w, layer.height), Image.LANCZOS)
        tag.alpha_composite(layer, (int(k * 116 - target_w / 2), int(k * cy - layer.height / 2)))
    tag = tag.rotate(-9, resample=Image.BICUBIC, center=(k * 100, k * 100))
    img.alpha_composite(tag)
    return img.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    draw(1200).convert("RGB").save("img/logo-square.png", optimize=True)
    badge = draw(1200, background=False)
    badge.save("img/logo.png", optimize=True)
    badge.resize((512, 512), Image.LANCZOS).save("img/logo-512.png", optimize=True)
    badge.resize((180, 180), Image.LANCZOS).save("img/apple-touch-icon.png", optimize=True)
    badge.resize((64, 64), Image.LANCZOS).save("img/favicon.png", optimize=True)
    print("ok")


def app_icon(size, logo_ratio):
    """Square app icon: the round logo centered on the deep-space background."""
    bg = Image.new("RGBA", (size, size), (4, 5, 13, 255))
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([size * .08, size * .08, size * .92, size * .92], fill=(255, 240, 0, 60))
    from PIL import ImageFilter
    bg.alpha_composite(glow.filter(ImageFilter.GaussianBlur(size * .06)))
    logo = draw(int(size * logo_ratio), background=False)
    off = (size - logo.width) // 2
    bg.alpha_composite(logo, (off, off))
    return bg.convert("RGB")


def make_app_icons():
    app_icon(192, .86).save("img/icon-192.png", optimize=True)
    app_icon(512, .86).save("img/icon-512.png", optimize=True)
    # Maskable: keep the logo inside the 80% safe zone Android may crop to a circle/squircle
    app_icon(512, .66).save("img/icon-maskable-512.png", optimize=True)
    app_icon(180, .86).save("img/apple-touch-icon.png", optimize=True)
