"""Download Best Shop's active products from its public Talabat store page.

Usage: python tools/fetch_talabat.py  -> writes data/talabat_raw.json
"""
import json, time, urllib.request, pathlib

BASE = ("https://www.talabat.com/_next/data/manifests/grocery-items.json"
        "?aid=4894&countrySlug=jordan&vertical=grocery&branchId=1104142&branchSlug=best-shop-tla-ali")
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128 Safari/537.36",
           "Accept": "application/json"}
SKIP = {"tobacco"}


def get(url):
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=40) as r:
                return json.load(r)["pageProps"]["initialState"]
        except Exception as e:
            print("  retry", attempt + 1, e)
            time.sleep(2 + attempt * 3)
    raise RuntimeError(url)


def main():
    first = get(BASE + "&categorySlug=fruit-veg&subCategorySlug=fresh-vegetables")
    cats = first["categories"]
    products, seen = [], set()
    for c in cats:
        if c["slug"] in SKIP:
            continue
        for sc in c["subCategories"]:
            page, pages = 1, 1
            while page <= pages:
                st = get(f"{BASE}&categorySlug={c['slug']}&subCategorySlug={sc['slug']}&page={page}")
                data = st["itemsData"]
                pages = data["pageCount"] or 1
                for it in data["items"]:
                    if it["id"] in seen:
                        continue
                    seen.add(it["id"])
                    products.append({
                        "id": it["id"], "sku": it.get("sku"), "title": it["title"].strip(),
                        "description": (it.get("description") or "").strip(),
                        "price": it["price"], "originalPrice": it.get("originalPrice"),
                        "discountPercentage": it.get("discountPercentage") or 0,
                        "image": it.get("image") or "", "category": c["slug"], "subCategory": sc["slug"],
                    })
                if not data["items"]:
                    break
                page += 1
                time.sleep(0.25)
            print(f"{c['name'].strip()} / {sc['name']}: total so far {len(products)}")
    out = pathlib.Path(__file__).resolve().parent.parent / "data"
    out.mkdir(exist_ok=True)
    cats_out = [{"slug": c["slug"], "name": c["name"].strip(), "image": c.get("imageUrl", ""),
                 "subCategories": [{"slug": s["slug"], "name": s["name"].strip()} for s in c["subCategories"]]}
                for c in cats if c["slug"] not in SKIP]
    (out / "talabat_raw.json").write_text(json.dumps({"categories": cats_out, "products": products},
                                                      ensure_ascii=False), encoding="utf-8")
    print("DONE", len(products))


if __name__ == "__main__":
    main()
