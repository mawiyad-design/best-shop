"""Turn data/talabat_raw.json into the compact files the website loads.

Usage: python tools/build_catalog.py
Writes data/catalog.json: { categories: [...], products: [...] }
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

# Products Talabat lists under "Imports" that Best Shop does not want shown as imported.
NOT_IMPORTED = {
    "3652dd56-1e6d-4099-a4ce-a2a4048689b0",  # Canary Wafer, 34g
}

CAT_AR = {
    "fruit-veg": "الخضار والفواكه", "bakery": "المخبوزات", "poultry-meat-seafood": "الدواجن واللحوم والأسماك",
    "deli": "الأجبان واللحوم الباردة", "roastery": "المحمص", "dairy-eggs": "الألبان والبيض",
    "frozen-food": "الأطعمة المجمدة", "cooking-baking": "الطبخ والخبز", "condiments": "الصلصات والبهارات",
    "ice-cream": "البوظة", "snacks-chocolate": "التسالي والشوكولاتة", "beverages": "المشروبات",
    "milk": "الحليب", "coffee-tea": "القهوة والشاي", "canned-jarred": "المعلبات",
    "breakfast-food": "الفطور", "protein-special-diet": "البروتين والحميات", "ready-to-eat": "جاهز للأكل",
    "baby-corner": "ركن الأطفال", "cleaning-laundry": "المنظفات والغسيل", "disposables": "المستهلكات الورقية",
    "personal-care": "العناية الشخصية", "household-essentials": "مستلزمات المنزل", "health-beauty": "الصحة والجمال",
    "electronics": "الإلكترونيات", "stationery-games": "القرطاسية والألعاب", "pet-care": "مستلزمات الحيوانات الأليفة",
}

SUB_AR = {
    "fresh-vegetables": "خضار طازجة", "herbs-leafy-greens": "أعشاب وورقيات", "dates-dried-fruit": "تمور وفواكه مجففة",
    "toast": "توست", "flatbread": "خبز عربي", "buns-rolls": "خبز برغر وصمون", "sweet-bakes": "مخبوزات حلوة",
    "pastries": "معجنات", "crispbread-rusk": "خبز مقرمش وقرشلة", "gluten-free": "خالٍ من الغلوتين",
    "chicken-poultry": "دجاج ودواجن", "beef-veal": "لحم بقري وعجل", "lamb-goat": "لحم غنم وماعز",
    "fish-seafood": "أسماك ومأكولات بحرية", "cold-cuts": "لحوم باردة", "cheese-labneh": "أجبان ولبنة",
    "deli-cuts": "مرتديلا ولحوم مقطعة", "pickles-olives": "مخللات وزيتون", "nuts-grains-spices": "مكسرات وحبوب وبهارات",
    "zaatar": "زعتر", "eggs": "بيض", "cheese": "أجبان", "yoghurts-labneh": "لبن ولبنة", "butter": "زبدة",
    "cream": "قشطة وكريمة", "chilled-desserts": "حلويات مبردة", "fries": "بطاطا مقلية", "ready-meals": "وجبات جاهزة",
    "fruit-and-veg": "خضار وفواكه مجمدة", "poultry": "دواجن مجمدة", "seafood": "مأكولات بحرية مجمدة",
    "meat": "لحوم مجمدة", "bakery-desserts": "مخبوزات وحلويات مجمدة", "baking-ingredients": "مستلزمات الخبز",
    "frying-oil": "زيت قلي", "olive-oil": "زيت زيتون", "ghee": "سمنة", "sugar-sweeteners": "سكر ومحليات",
    "pastas": "معكرونة", "noodles-soups": "نودلز وشوربات", "rice": "أرز", "pulses-grains": "بقوليات وحبوب",
    "pizza-pasta-sauces": "صلصات بيتزا ومعكرونة", "salad-dressings-vinegar": "صلصات سلطة وخل", "sauces": "صلصات",
    "spices-seasonings": "بهارات وتوابل", "salt": "ملح", "bars-cones-sticks": "أصابع وأكواز", "cups-tubs": "أكواب وعلب",
    "protein-ice-cream": "بوظة بروتين", "family-packs": "عبوات عائلية", "chocolate": "شوكولاتة",
    "biscuits-wafers": "بسكويت وويفر", "chips-dips": "شيبس وغموس", "seeds-nuts": "بزورات ومكسرات", "popcorn": "فشار",
    "candy-gums": "سكاكر وعلكة", "crackers-pretzels": "مقرمشات وبريتزل", "rice-cakes-others": "كعك الأرز وغيره",
    "dried-meat": "لحوم مجففة", "water": "مياه", "soft-drinks": "مشروبات غازية", "sports-energy-drinks": "مشروبات طاقة ورياضة",
    "juices": "عصائر", "specialty-drinks": "مشروبات مميزة", "syrups": "شراب مركز", "powdered-drinks": "مشروبات بودرة",
    "fresh-milk": "حليب طازج", "long-life-milk": "حليب طويل الأمد", "milk-alternatives": "بدائل الحليب",
    "powdered-milk": "حليب بودرة", "evaporated-milk": "حليب مبخر", "condensed-milk": "حليب مكثف", "coffee": "قهوة",
    "tea": "شاي", "creamers": "مبيض قهوة", "ready-to-drink": "جاهز للشرب", "canned-seafood": "أسماك معلبة",
    "canned-vegetables": "خضار معلبة", "canned-fruit": "فواكه معلبة", "canned-meat": "لحوم معلبة", "cereals": "حبوب الإفطار",
    "breakfast-mixes": "خلطات الفطور", "spreads": "أطعمة للدهن", "honey": "عسل", "protein": "بروتين",
    "special-diet": "حميات خاصة", "salads": "سلطات", "starters-sides": "مقبلات وأطباق جانبية", "sushi": "سوشي",
    "fruit-cuts": "فواكه مقطعة", "snacks-desserts": "تسالي وحلويات", "diapers": "حفاضات", "baby-formula": "حليب أطفال",
    "baby-food": "طعام أطفال", "baby-hygiene": "العناية بالطفل", "dishwashing": "جلي", "cleaning-supplies": "مواد تنظيف",
    "laundry": "غسيل", "tissues-paper-rolls": "محارم وورق", "wipes": "مناديل مبللة", "disposable-tableware": "أدوات مائدة للاستعمال مرة واحدة",
    "garbage-bags": "أكياس نفايات", "food-storage-wraps": "حفظ وتغليف الطعام", "gloves": "قفازات", "hair-care": "العناية بالشعر",
    "face-care": "العناية بالوجه", "skin-body-care": "العناية بالبشرة والجسم", "deodorants": "مزيلات العرق",
    "oral-care": "العناية بالفم", "feminine-care": "العناية النسائية", "shaving-hair-removing": "الحلاقة وإزالة الشعر",
    "outdoor-travel-gear": "مستلزمات الرحلات", "home-maintenance": "صيانة المنزل", "home-supplies-accessories": "مستلزمات وإكسسوارات المنزل",
    "kitchen-dining": "المطبخ والمائدة", "perfumes": "عطور", "makeup": "مكياج", "wellness": "العافية",
    "mobiles-accessories": "هواتف وإكسسوارات", "home-appliances": "أجهزة منزلية", "stationery": "قرطاسية",
    "cat-food": "طعام قطط", "dog-food": "طعام كلاب",
}


def main():
    raw = json.loads((ROOT / "data" / "talabat_raw.json").read_text(encoding="utf-8"))
    counts = {}
    for p in raw["products"]:
        counts[p["category"]] = counts.get(p["category"], 0) + 1

    categories = []
    for c in raw["categories"]:
        if c["slug"] == "imports" or not counts.get(c["slug"]):
            continue          # "imported" is a product flag on the site, not a separate aisle
        categories.append({
            "slug": c["slug"], "en": c["name"], "ar": CAT_AR.get(c["slug"], c["name"]),
            "image": c["image"], "count": counts[c["slug"]],
            "subs": [{"slug": s["slug"], "en": s["name"], "ar": SUB_AR.get(s["slug"], s["name"])}
                     for s in c["subCategories"]],
        })

    products = []
    for p in raw["products"]:
        if not p["image"]:
            continue
        products.append({
            "id": p["id"], "t": p["title"], "d": p["description"], "p": p["price"],
            "o": p["originalPrice"] if p["originalPrice"] and p["originalPrice"] > p["price"] else None,
            "img": p["image"], "c": p["category"], "s": p["subCategory"], "imp": 1 if p.get("imported") and p["id"] not in NOT_IMPORTED else 0,
        })
    # Imported items first inside every listing, then by name
    products.sort(key=lambda x: (-x["imp"], x["t"].lower()))

    out = {"categories": categories, "products": products,
           "importedCount": sum(p["imp"] for p in products), "total": len(products)}
    (ROOT / "data" / "catalog.json").write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")),
                                                encoding="utf-8")
    home = {"categories": [{k: c[k] for k in ("slug", "en", "ar", "image", "count")} for c in categories],
            "imported": [p for p in products if p["imp"]],
            # Discounted products, biggest saving first
            "deals": sorted([p for p in products if p["o"]], key=lambda p: p["p"] / p["o"]),
            "total": out["total"]}
    (ROOT / "data" / "home.json").write_text(json.dumps(home, ensure_ascii=False, separators=(",", ":")),
                                             encoding="utf-8")
    print(f"{len(products)} products, {out['importedCount']} imported, {len(categories)} categories")


if __name__ == "__main__":
    main()
