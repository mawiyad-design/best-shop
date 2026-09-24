# Best Shop — Supermarket Website

Bilingual (English / Arabic) website for Best Shop, Al-Gardens, Amman.
Highlights our specialty: imported products from the USA & Europe.

## Pages

- `index.html` — home: imported showcase, weekly offer posters, departments, ordering, location
- `products.html` — full catalog with search, departments, "Imported only" filter

## Edit store details

Open **`config.js`**: phone, WhatsApp, email, address, map pin, social links, opening hours
and the weekly offer posters (put new poster images in `img/offers/`).

## Refresh the product catalog from Talabat

```bash
python tools/fetch_talabat.py
```

```bash
python tools/build_catalog.py
```

## Logo

`tools/make_logo.py` redraws the logo at high resolution into `img/` (brand colors #FFF000 / black).

## Preview locally

```bash
python -m http.server 5500
```
