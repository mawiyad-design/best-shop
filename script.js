(function () {
  "use strict";

  const SITE = window.SITE;

  // ---------- Translations ----------
  const T = {
    en: {
      skip: "Skip to content",
      "top.imports": "Imported from the USA & Europe",
      "top.hours": "Open until 2 AM, every day",
      "top.delivery": "Delivery available",
      "nav.home": "Home",
      "nav.imports": "Imported",
      "nav.products": "All Products",
      "nav.offers": "Offers",
      "nav.order": "Order",
      "nav.visit": "Visit Us",
      "cta.call": "Call us",
      "cta.imports": "Shop imported products",
      "cta.allProducts": "Browse all products",
      "cta.directions": "Get directions",
      "hero.importPill": "Imported from the USA & Europe",
      "hero.title": 'Everything at the <span class="hl">best price.</span>',
      "hero.lead": "Your neighborhood supermarket in Al-Gardens — hard-to-find imported favorites from the USA and Europe, plus fresh meat and chicken, cheeses and all your daily groceries.",
      "facts.products": "products",
      "facts.hoursVal": "Until 2 AM",
      "facts.hours": "every day",
      "facts.deliveryVal": "Delivery",
      "facts.delivery": "to your door",
      "chip.imports": "USA & Europe imports",
      "chip.meat": "Fresh meat & chicken",
      "chip.cheese": "Cheeses",
      "chip.price": "Best prices",
      "imp.eyebrow": "Our specialty",
      "imp.title": "Imported from the USA & Europe",
      "imp.lead": "The American and European brands you can't find anywhere else in the neighborhood — chocolates, snacks, baking mixes, cereals, drinks and more, hand-picked by Best Shop.",
      "imp.stat": "imported products in store now",
      "imp.cta": "See all imported products",
      "imp.badge": "Imported",
      "why.title": "Why Best Shop",
      "f1.t": "Imported specialties", "f1.d": "Hard-to-find brands from the USA and Europe, always in stock.",
      "f2.t": "The best price", "f2.d": "Everything you need at prices that respect your budget.",
      "f3.t": "Fresh every day", "f3.d": "Fresh meat and chicken, cheeses and salads daily.",
      "f4.t": "Fast delivery", "f4.d": "Order by WhatsApp or Talabat — we bring it to you.",
      "off.eyebrow": "Special offers",
      "off.title": "This week's offers",
      "off.sub": "Prices valid in store while stocks last. Tap a poster to see it full size.",
      "off.more": "More offers on Instagram",
      "off.view": "View offer",
      "cat.eyebrow": "Shop by department",
      "cat.title": "Everything you need, in one place",
      "cat.sub": "products across every aisle.",
      "cat.items": "items",
      "order.eyebrow": "Delivery available",
      "order.title": "Stay home. We'll bring it to you.",
      "order.lead": "Fill your basket on this website and send it to us on WhatsApp in one tap, or order from our store on Talabat. Pay cash on delivery.",
      "order.s1": "Add products to your basket",
      "order.s2": "We prepare your order fresh",
      "order.s3": "Delivered to your door",
      "order.wa": "Order on WhatsApp",
      "order.talabat": "Order on Talabat",
      "order.talabatSub": "Best Shop Supermarket",
      "order.call": "Call the store",
      "visit.eyebrow": "Come see us",
      "visit.title": "Visit Best Shop",
      "visit.address": "Address",
      "visit.phone": "Phone & WhatsApp",
      "visit.email": "Email",
      "visit.hours": "Opening hours",
      "footer.tag": "Imported favorites from the USA & Europe — everything at the best price.",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "status.open": "Open now · closes at {t}",
      "status.closed": "Closed now · opens {d} at {t}",
      "status.closedToday": "Closed now · opens at {t}",
      "product.wa": "Order on WhatsApp",
      "product.talabat": "Order on Talabat",
      "product.waMsg": "Hello Best Shop, I would like to order: {p}",
      "product.imported": "Imported from the USA & Europe",
      "product.save": "Save {n}%",
      "shop.title": "All products",
      "shop.titleImported": "Imported from the USA & Europe",
      "shop.search": "Search 4,000+ products…",
      "shop.searchLabel": "Search products",
      "shop.importedOnly": "Imported only",
      "shop.sortLabel": "Sort by",
      "shop.sortFeatured": "Featured",
      "shop.sortLow": "Price: low to high",
      "shop.sortHigh": "Price: high to low",
      "shop.sortName": "Name A–Z",
      "shop.all": "All departments",
      "shop.allSub": "All",
      "shop.count": "{n} products",
      "shop.empty": "No products match your search.",
      "shop.more": "Show more",
      "shop.note": "Product names, photos and prices come from our Talabat store and may change. Prices in store may differ.",
      "basket.title": "Basket",
      "basket.add": "Add to basket",
      "basket.added": "Added to basket",
      "basket.empty": "Your basket is empty.",
      "basket.minNote": "Minimum order: {m}",
      "basket.qty": "Quantity",
      "basket.less": "Remove one",
      "basket.more": "Add one",
      "basket.subtotal": "Subtotal",
      "basket.short": "Add {x} more to reach the {m} minimum order.",
      "basket.minOk": "Minimum order reached.",
      "basket.feeNote": "The store confirms the delivery fee and final total on WhatsApp.",
      "basket.name": "Name",
      "basket.address": "Delivery address",
      "basket.notes": "Notes (optional)",
      "basket.payment": "Payment",
      "basket.cash": "Cash on delivery",
      "basket.send": "Send order on WhatsApp",
      "basket.clear": "Empty basket",
      "basket.required": "Please add your name and delivery address.",
      "basket.msgHead": "New order from the Best Shop website:",
      "order.min": "Minimum order 5 JD",
      closed: "Closed",
      langButton: "العربية",
      marquee: ["✈️ Imported from the USA & Europe", "Fresh meat & chicken", "Cheeses", "Chocolates & snacks", "Daily essentials", "Best price", "Delivery available"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      "top.imports": "منتجات مستوردة من أمريكا وأوروبا",
      "top.hours": "مفتوح حتى 2 بعد منتصف الليل يوميًا",
      "top.delivery": "خدمة التوصيل متوفرة",
      "nav.home": "الرئيسية",
      "nav.imports": "المستورد",
      "nav.products": "كل المنتجات",
      "nav.offers": "العروض",
      "nav.order": "اطلب الآن",
      "nav.visit": "زورونا",
      "cta.call": "اتصل بنا",
      "cta.imports": "تسوّق المنتجات المستوردة",
      "cta.allProducts": "تصفح كل المنتجات",
      "cta.directions": "احصل على الاتجاهات",
      "hero.importPill": "مستورد من أمريكا وأوروبا",
      "hero.title": 'كل شيء <span class="hl">بأفضل سعر!</span>',
      "hero.lead": "سوبرماركت الحي في الجاردنز — منتجات مستوردة مميزة من أمريكا وأوروبا يصعب إيجادها، إلى جانب اللحوم والدجاج الطازج والأجبان وكل احتياجاتك اليومية.",
      "facts.products": "منتج",
      "facts.hoursVal": "حتى 2 ليلًا",
      "facts.hours": "كل يوم",
      "facts.deliveryVal": "توصيل",
      "facts.delivery": "حتى باب بيتك",
      "chip.imports": "مستورد من أمريكا وأوروبا",
      "chip.meat": "لحوم ودجاج طازج",
      "chip.cheese": "أجبان",
      "chip.price": "أفضل الأسعار",
      "imp.eyebrow": "تخصصنا",
      "imp.title": "مستورد من أمريكا وأوروبا",
      "imp.lead": "الماركات الأمريكية والأوروبية التي لن تجدها في مكان آخر في الحي — شوكولاتة، تسالي، خلطات كيك، حبوب إفطار، مشروبات وأكثر، مختارة بعناية من بست شوب.",
      "imp.stat": "منتج مستورد متوفر الآن",
      "imp.cta": "شاهد كل المنتجات المستوردة",
      "imp.badge": "مستورد",
      "why.title": "لماذا بست شوب",
      "f1.t": "منتجات مستوردة مميزة", "f1.d": "ماركات من أمريكا وأوروبا يصعب إيجادها، متوفرة دائمًا.",
      "f2.t": "أفضل سعر", "f2.d": "كل ما تحتاجه بأسعار تناسب ميزانيتك.",
      "f3.t": "طازج كل يوم", "f3.d": "لحوم ودجاج طازج، أجبان وسلطات يوميًا.",
      "f4.t": "توصيل سريع", "f4.d": "اطلب عبر واتساب أو طلبات — ونوصلك طلبك.",
      "off.eyebrow": "عروض خاصة",
      "off.title": "عروض هذا الأسبوع",
      "off.sub": "الأسعار سارية في المتجر حتى نفاد الكمية. اضغط على العرض لرؤيته بالحجم الكامل.",
      "off.more": "المزيد من العروض على إنستغرام",
      "off.view": "عرض",
      "cat.eyebrow": "تسوّق حسب القسم",
      "cat.title": "كل ما تحتاجه في مكان واحد",
      "cat.sub": "منتج في كل الأقسام.",
      "cat.items": "منتج",
      "order.eyebrow": "خدمة التوصيل متوفرة",
      "order.title": "خليك بالبيت، واحنا منوصلك.",
      "order.lead": "املأ سلتك على هذا الموقع وأرسلها لنا عبر واتساب بضغطة واحدة، أو اطلب من متجرنا على طلبات. الدفع نقدًا عند الاستلام.",
      "order.s1": "أضف المنتجات إلى سلتك",
      "order.s2": "نجهّز طلبك طازجًا",
      "order.s3": "نوصله حتى باب بيتك",
      "order.wa": "اطلب عبر واتساب",
      "order.talabat": "اطلب عبر طلبات",
      "order.talabatSub": "بست شوب سوبرماركت",
      "order.call": "اتصل بالمتجر",
      "visit.eyebrow": "تفضلوا بزيارتنا",
      "visit.title": "زوروا بست شوب",
      "visit.address": "العنوان",
      "visit.phone": "الهاتف وواتساب",
      "visit.email": "البريد الإلكتروني",
      "visit.hours": "ساعات العمل",
      "footer.tag": "منتجات مستوردة مميزة من أمريكا وأوروبا — كل شيء بأفضل سعر!",
      "footer.explore": "تصفح",
      "footer.contact": "تواصل معنا",
      "footer.rights": "جميع الحقوق محفوظة.",
      "status.open": "مفتوح الآن · يغلق الساعة {t}",
      "status.closed": "مغلق الآن · يفتح {d} الساعة {t}",
      "status.closedToday": "مغلق الآن · يفتح الساعة {t}",
      "product.wa": "اطلب عبر واتساب",
      "product.talabat": "اطلب عبر طلبات",
      "product.waMsg": "مرحبًا بست شوب، أرغب بطلب: {p}",
      "product.imported": "مستورد من أمريكا وأوروبا",
      "product.save": "وفّر {n}%",
      "shop.title": "كل المنتجات",
      "shop.titleImported": "مستورد من أمريكا وأوروبا",
      "shop.search": "ابحث في أكثر من 4,000 منتج…",
      "shop.searchLabel": "ابحث عن منتج",
      "shop.importedOnly": "المستورد فقط",
      "shop.sortLabel": "ترتيب حسب",
      "shop.sortFeatured": "المميز",
      "shop.sortLow": "السعر: من الأقل للأعلى",
      "shop.sortHigh": "السعر: من الأعلى للأقل",
      "shop.sortName": "الاسم أ–ي",
      "shop.all": "كل الأقسام",
      "shop.allSub": "الكل",
      "shop.count": "{n} منتج",
      "shop.empty": "لا توجد منتجات مطابقة لبحثك.",
      "shop.more": "عرض المزيد",
      "shop.note": "أسماء المنتجات وصورها وأسعارها مأخوذة من متجرنا على طلبات وقد تتغير. قد تختلف الأسعار داخل المتجر.",
      "basket.title": "السلة",
      "basket.add": "أضف إلى السلة",
      "basket.added": "تمت الإضافة إلى السلة",
      "basket.empty": "سلتك فارغة.",
      "basket.minNote": "الحد الأدنى للطلب: {m}",
      "basket.qty": "الكمية",
      "basket.less": "إزالة واحدة",
      "basket.more": "إضافة واحدة",
      "basket.subtotal": "المجموع",
      "basket.short": "أضف {x} للوصول إلى الحد الأدنى للطلب {m}.",
      "basket.minOk": "تم الوصول إلى الحد الأدنى للطلب.",
      "basket.feeNote": "يؤكد المتجر أجرة التوصيل والمجموع النهائي عبر واتساب.",
      "basket.name": "الاسم",
      "basket.address": "عنوان التوصيل",
      "basket.notes": "ملاحظات (اختياري)",
      "basket.payment": "الدفع",
      "basket.cash": "الدفع نقدًا عند الاستلام",
      "basket.send": "أرسل الطلب عبر واتساب",
      "basket.clear": "إفراغ السلة",
      "basket.required": "يرجى إدخال الاسم وعنوان التوصيل.",
      "basket.msgHead": "طلب جديد من موقع بست شوب:",
      "order.min": "الحد الأدنى للطلب 5 د.أ",
      closed: "مغلق",
      langButton: "English",
      marquee: ["✈️ مستورد من أمريكا وأوروبا", "لحوم ودجاج طازج", "أجبان", "شوكولاتة وتسالي", "مواد تموينية", "أفضل سعر", "توصيل متوفر"],
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    },
  };

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let lang = "en";
  try {
    lang = localStorage.getItem("bs-lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
  } catch (e) {}

  // Latin digits in Arabic too, matching how phone numbers and prices are written in Jordan.
  const locale = () => (lang === "ar" ? "ar-JO-u-nu-latn" : "en-US");
  const t = (key) => T[lang][key] ?? T.en[key] ?? key;
  const num = (n) => Number(n).toLocaleString(locale());

  function formatTime(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return new Date(2000, 0, 1, h, m).toLocaleTimeString(locale(), { hour: "numeric", minute: "2-digit" });
  }

  function formatPrice(n) {
    return Number(n).toLocaleString(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " " + SITE.currency[lang];
  }

  const imgUrl = (url, w) => url + (url.includes("?") ? "&" : "?") + "width=" + w;

  // ---------- Shared: product cards + viewer ----------
  // Every product/offer shown on the page, so "add" buttons can look items up by id.
  const registry = {};

  function productCard(p) {
    registry[p.id] = p;
    const pct = p.o ? Math.round((1 - p.p / p.o) * 100) : 0;
    const qty = basket.qty(p.id);
    return `
      <article class="product${p.imp ? " product--imp" : ""}">
        <button class="product__open" type="button" data-pid="${esc(p.id)}">
          <span class="product__media">
            <img src="${esc(imgUrl(p.img, 300))}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" width="300" height="300" onerror="this.style.visibility='hidden'">
            ${p.imp ? `<span class="badge badge--imp"><span aria-hidden="true">✈️</span>${t("imp.badge")}</span>` : ""}
            ${pct > 0 ? `<span class="badge badge--sale" dir="ltr">-${pct}%</span>` : ""}
          </span>
          <span class="product__name" dir="auto">${esc(p.t)}</span>
          <span class="product__price">
            <strong>${formatPrice(p.p)}</strong>
            ${p.o ? `<s>${formatPrice(p.o)}</s>` : ""}
          </span>
        </button>
        <button class="product__add${qty ? " is-in" : ""}" type="button" data-add="${esc(p.id)}" aria-label="${esc(t("basket.add"))}: ${esc(p.t)}">
          ${qty ? `<span>${qty}</span>` : `<i data-lucide="plus" aria-hidden="true"></i>`}
        </button>
      </article>`;
  }

  const viewer = $("#viewer");
  function openViewer(html) {
    $("#viewerBody").innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
    if (!viewer.open) { if (viewer.showModal) viewer.showModal(); else viewer.setAttribute("open", ""); }
  }
  function closeViewer() { if (viewer.close) viewer.close(); else viewer.removeAttribute("open"); }
  if (viewer) {
    viewer.addEventListener("click", (e) => { if (e.target === viewer || e.target.closest("[data-close]")) closeViewer(); });
  }

  function waLink(text) {
    return "https://wa.me/" + SITE.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(text);
  }

  function openProduct(p, catName) {
    registry[p.id] = p;
    const pct = p.o ? Math.round((1 - p.p / p.o) * 100) : 0;
    const desc = (p.d || "").split(/\n+/).map((l) => l.replace(/^[•\-\s]+/, "").trim()).filter(Boolean);
    openViewer(`
      <div class="pd">
        <div class="pd__media">
          <img src="${esc(imgUrl(p.img, 600))}" alt="${esc(p.t)}" referrerpolicy="no-referrer">
          ${p.imp ? `<span class="badge badge--imp"><span aria-hidden="true">✈️</span>${t("imp.badge")}</span>` : ""}
        </div>
        <div class="pd__info">
          ${catName ? `<span class="pd__cat">${esc(catName)}</span>` : ""}
          <h2 dir="auto">${esc(p.t)}</h2>
          ${p.imp ? `<p class="pd__imp"><span aria-hidden="true">✈️</span> ${t("product.imported")}</p>` : ""}
          <div class="pd__price">
            <strong>${formatPrice(p.p)}</strong>
            ${p.o ? `<s>${formatPrice(p.o)}</s><span class="badge badge--sale">${t("product.save").replace("{n}", pct)}</span>` : ""}
          </div>
          ${desc.length ? `<ul class="pd__desc" dir="auto">${desc.slice(0, 8).map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}
          <div class="pd__actions">
            <button class="btn btn--dark" type="button" data-add="${esc(p.id)}" data-close><i data-lucide="shopping-basket" aria-hidden="true"></i><span>${t("basket.add")}</span></button>
            <a class="btn btn--outline" href="${esc(SITE.social.talabat)}" target="_blank" rel="noopener"><i data-lucide="shopping-bag" aria-hidden="true"></i><span>${t("product.talabat")}</span></a>
          </div>
        </div>
      </div>`);
  }

  function offerItem(o, i) {
    return { id: "offer-" + i, t: o[lang], p: o.price, img: o.img, local: true };
  }

  function openPoster(o, i) {
    const item = offerItem(o, i);
    registry[item.id] = item;
    openViewer(`
      <figure class="poster-view">
        <img src="${esc(o.img)}" alt="${esc(o[lang])}">
        <figcaption>
          <strong>${esc(o[lang])}</strong>
          <span>${formatPrice(o.price)}</span>
          <button class="btn btn--dark" type="button" data-add="${esc(item.id)}" data-close><i data-lucide="shopping-basket" aria-hidden="true"></i><span>${t("basket.add")}</span></button>
        </figcaption>
      </figure>`);
  }

  // ---------- Basket (orders are sent to the store on WhatsApp) ----------
  const basket = (function () {
    let items = [];
    try { items = JSON.parse(localStorage.getItem("bs-basket") || "[]"); } catch (e) {}
    const save = () => { try { localStorage.setItem("bs-basket", JSON.stringify(items)); } catch (e) {} };
    const find = (id) => items.find((x) => x.id === id);
    return {
      items: () => items,
      qty: (id) => (find(id) || {}).q || 0,
      count: () => items.reduce((a, x) => a + x.q, 0),
      total: () => Math.round(items.reduce((a, x) => a + x.p * x.q, 0) * 1000) / 1000,
      add(p) {
        const it = find(p.id);
        if (it) it.q += 1; else items.push({ id: p.id, t: p.t, p: p.p, img: p.img, local: !!p.local, q: 1 });
        save();
      },
      set(id, q) {
        const it = find(id);
        if (!it) return;
        if (q <= 0) items = items.filter((x) => x.id !== id); else it.q = q;
        save();
      },
      clear() { items = []; save(); },
    };
  })();

  // Drawer + floating button are added by script so every page gets them.
  document.body.insertAdjacentHTML("beforeend", `
    <button class="basket-fab" id="basketFab" type="button" aria-haspopup="dialog">
      <i data-lucide="shopping-basket" aria-hidden="true"></i>
      <span class="basket-fab__label" data-i18n="basket.title">Basket</span>
      <span class="basket-fab__count" id="basketCount">0</span>
    </button>
    <dialog class="drawer" id="basketDrawer" aria-labelledby="basketTitle">
      <div class="drawer__head">
        <h2 id="basketTitle" data-i18n="basket.title">Basket</h2>
        <button class="viewer__close" type="button" data-close-basket aria-label="Close"><i data-lucide="x" aria-hidden="true"></i></button>
      </div>
      <div class="drawer__body" id="basketBody"></div>
    </dialog>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>`);

  const drawer = $("#basketDrawer");
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-on"), 1800);
  }

  function renderBasketCount() {
    const n = basket.count();
    $("#basketCount").textContent = num(n);
    $("#basketFab").classList.toggle("is-empty", n === 0);
    $("#basketFab").setAttribute("aria-label", t("basket.title") + " (" + n + ")");
  }

  function renderBasket() {
    const items = basket.items();
    const total = basket.total();
    const min = SITE.minOrder || 0;
    const short = Math.max(0, Math.round((min - total) * 1000) / 1000);
    const pct = min ? Math.min(100, Math.round((total / min) * 100)) : 100;
    const body = $("#basketBody");
    if (!items.length) {
      body.innerHTML = `
        <div class="basket-empty">
          <i data-lucide="shopping-basket" aria-hidden="true"></i>
          <p>${t("basket.empty")}</p>
          <p class="basket-min">${t("basket.minNote").replace("{m}", formatPrice(min))}</p>
          <a class="btn btn--dark" href="products.html?imported=1" data-close-basket><span aria-hidden="true">✈️</span><span>${t("cta.imports")}</span></a>
        </div>`;
    } else {
      body.innerHTML = `
        <ul class="basket-list">
          ${items.map((x) => `
            <li class="basket-item">
              <img src="${esc(x.local ? x.img : imgUrl(x.img, 120))}" alt="" referrerpolicy="no-referrer" width="56" height="56">
              <div class="basket-item__info">
                <span class="basket-item__name" dir="auto">${esc(x.t)}</span>
                <span class="basket-item__price">${formatPrice(x.p * x.q)}</span>
              </div>
              <div class="qty" role="group" aria-label="${esc(t("basket.qty"))}">
                <button type="button" data-qty="${esc(x.id)}" data-d="-1" aria-label="${esc(t("basket.less"))}"><i data-lucide="${x.q === 1 ? "trash-2" : "minus"}" aria-hidden="true"></i></button>
                <span>${num(x.q)}</span>
                <button type="button" data-qty="${esc(x.id)}" data-d="1" aria-label="${esc(t("basket.more"))}"><i data-lucide="plus" aria-hidden="true"></i></button>
              </div>
            </li>`).join("")}
        </ul>
        <div class="basket-sum">
          <div class="basket-sum__row"><span>${t("basket.subtotal")}</span><strong>${formatPrice(total)}</strong></div>
          <div class="min-bar${short ? "" : " is-ok"}">
            <div class="min-bar__track"><span style="width:${pct}%"></span></div>
            <p>${short ? t("basket.short").replace("{x}", formatPrice(short)).replace("{m}", formatPrice(min)) : t("basket.minOk")}</p>
          </div>
          <p class="basket-note">${t("basket.feeNote")}</p>
        </div>
        <form class="checkout" id="checkoutForm" novalidate>
          <label><span>${t("basket.name")}</span><input name="name" autocomplete="name" required></label>
          <label><span>${t("basket.address")}</span><textarea name="address" rows="2" autocomplete="street-address" required></textarea></label>
          <label><span>${t("basket.notes")}</span><input name="notes"></label>
          <fieldset class="pay">
            <legend>${t("basket.payment")}</legend>
            <label class="pay__opt"><input type="radio" name="pay" value="cash" checked><span>${t("basket.cash")}</span></label>
          </fieldset>
          <p class="form-error" id="checkoutError" hidden></p>
          <button class="btn btn--wa btn--block" type="submit" ${short ? "disabled" : ""}>
            <i data-lucide="message-circle" aria-hidden="true"></i><span>${t("basket.send")}</span>
          </button>
          <button class="link-btn" type="button" id="basketClear">${t("basket.clear")}</button>
        </form>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function orderMessage(form) {
    const lines = basket.items().map((x) => `• ${x.q} × ${x.t} — ${formatPrice(x.p * x.q)}`);
    return [
      t("basket.msgHead"),
      "",
      ...lines,
      "",
      `${t("basket.subtotal")}: ${formatPrice(basket.total())}`,
      `${t("basket.name")}: ${form.name.value.trim()}`,
      `${t("basket.address")}: ${form.address.value.trim()}`,
      form.notes.value.trim() ? `${t("basket.notes")}: ${form.notes.value.trim()}` : null,
      `${t("basket.payment")}: ${t("basket.cash")}`,
    ].filter((l) => l !== null).join("\n");
  }

  function openBasket() {
    renderBasket();
    if (drawer.showModal) drawer.showModal(); else drawer.setAttribute("open", "");
  }
  function closeBasket() { if (drawer.close) drawer.close(); else drawer.removeAttribute("open"); }

  // Keep product "+" buttons in sync with the basket.
  function refreshAddButtons() {
    $$("[data-add].product__add").forEach((b) => {
      const q = basket.qty(b.dataset.add);
      b.classList.toggle("is-in", q > 0);
      b.innerHTML = q ? `<span>${num(q)}</span>` : `<i data-lucide="plus" aria-hidden="true"></i>`;
    });
    renderBasketCount();
    if (window.lucide) window.lucide.createIcons();
  }

  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
      const p = registry[add.dataset.add];
      if (p) {
        basket.add(p);
        refreshAddButtons();
        toast(t("basket.added"));
        if (add.hasAttribute("data-close")) closeViewer();
      }
      return;
    }
    if (e.target.closest("#basketFab")) { openBasket(); return; }
    if (e.target === drawer || e.target.closest("[data-close-basket]")) { closeBasket(); return; }
    const qb = e.target.closest("[data-qty]");
    if (qb) {
      basket.set(qb.dataset.qty, basket.qty(qb.dataset.qty) + Number(qb.dataset.d));
      renderBasket();
      refreshAddButtons();
      return;
    }
    if (e.target.closest("#basketClear")) { basket.clear(); renderBasket(); refreshAddButtons(); }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id !== "checkoutForm") return;
    e.preventDefault();
    const form = e.target;
    const err = $("#checkoutError");
    if (basket.total() < (SITE.minOrder || 0)) return;
    if (!form.name.value.trim() || !form.address.value.trim()) {
      err.textContent = t("basket.required");
      err.hidden = false;
      (form.name.value.trim() ? form.address : form.name).focus();
      return;
    }
    err.hidden = true;
    window.open(waLink(orderMessage(form)), "_blank", "noopener");
  });

  // ---------- Shared renderers ----------
  function renderText() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => {
      const val = T[lang][el.dataset.i18n];
      if (val == null) return;
      if (val.includes("<")) el.innerHTML = val; else el.textContent = val;
    });
    $$("[data-i18n-placeholder]").forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)));
    $$("[data-site]").forEach((el) => {
      const v = SITE[el.dataset.site];
      el.textContent = typeof v === "object" ? v[lang] : v;
    });
    $("#langToggle span").textContent = t("langButton");
  }

  function renderLinks() {
    const links = {
      phone: "tel:" + SITE.phone.replace(/[^\d+]/g, ""),
      whatsapp: "https://wa.me/" + SITE.whatsapp.replace(/\D/g, ""),
      email: "mailto:" + SITE.email,
      maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.mapLatLng || SITE.mapQuery),
      facebook: SITE.social.facebook,
      instagram: SITE.social.instagram,
      talabat: SITE.social.talabat,
    };
    $$("[data-link]").forEach((a) => { if (links[a.dataset.link]) a.href = links[a.dataset.link]; });
  }

  // ---------- Home page ----------
  let home = null;

  function renderMarquee() {
    const el = $("#marquee");
    if (!el) return;
    const items = t("marquee").map((m) => `<span>${esc(m)}</span>`).join("");
    el.innerHTML = items + items + items + items;
  }

  function renderCounts() {
    if (!home) return;
    $$('[data-count="total"]').forEach((el) => (el.textContent = num(Math.floor(home.total / 100) * 100) + "+"));
    $$('[data-count="imported"]').forEach((el) => (el.textContent = num(home.imported.length)));
  }

  // A varied pick of imported items (one per sub-category in turn) for the home page.
  function pickImported(list, n) {
    const groups = {};
    list.forEach((p) => (groups[p.s] = groups[p.s] || []).push(p));
    const keys = Object.keys(groups);
    const out = [];
    for (let i = 0; out.length < n && i < 50; i++) {
      keys.forEach((k) => { if (groups[k][i] && out.length < n) out.push(groups[k][i]); });
    }
    return out;
  }

  function renderImports() {
    const grid = $("#importGrid");
    if (!grid || !home) return;
    const picks = pickImported(home.imported, 10);
    grid.innerHTML = picks.map(productCard).join("");
    grid.onclick = (e) => {
      const b = e.target.closest("[data-pid]");
      if (!b) return;
      const p = home.imported.find((x) => x.id === b.dataset.pid);
      const c = home.categories.find((x) => x.slug === p.c);
      openProduct(p, c && c[lang]);
    };
  }

  function renderCategories() {
    const grid = $("#catGrid");
    if (!grid || !home) return;
    grid.innerHTML = home.categories.map((c) => `
      <a class="dept reveal" href="products.html?cat=${encodeURIComponent(c.slug)}">
        <span class="dept__img"><img src="${esc(imgUrl(c.image, 200))}" alt="" loading="lazy" referrerpolicy="no-referrer" width="96" height="96"></span>
        <span class="dept__name">${esc(c[lang])}</span>
        <span class="dept__count">${num(c.count)} ${t("cat.items")}</span>
      </a>`).join("");
  }

  function renderOffers() {
    const grid = $("#offerGrid");
    if (!grid) return;
    grid.innerHTML = SITE.offers.map((o, i) => `
      <button class="poster reveal" type="button" data-offer="${i}">
        <img src="${esc(o.img)}" alt="${esc(o[lang])} — ${formatPrice(o.price)}" loading="lazy">
        <span class="poster__cap"><span>${esc(o[lang])}</span><strong>${formatPrice(o.price)}</strong></span>
      </button>`).join("");
    grid.onclick = (e) => {
      const b = e.target.closest("[data-offer]");
      if (b) openPoster(SITE.offers[+b.dataset.offer], +b.dataset.offer);
    };
  }

  function renderHours() {
    const table = $("#hoursTable");
    if (!table) return;
    const today = new Date().getDay();
    table.innerHTML = SITE.hours.map((h) => `
      <tr class="${h.day === today ? "is-today" : ""}">
        <td>${t("days")[h.day]}</td>
        <td dir="ltr">${h.open && h.close ? formatTime(h.open) + " – " + formatTime(h.close) : t("closed")}</td>
      </tr>`).join("");
  }

  // Works with closing times after midnight (e.g. 07:00 – 02:00).
  function renderStatus() {
    const el = $("#openStatus");
    if (!el) return;
    const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const day = now.getDay();
    const byDay = Object.fromEntries(SITE.hours.filter((h) => h.open).map((h) => [h.day, h]));
    const overnight = (h) => toMinutes(h.close) <= toMinutes(h.open);
    const today = byDay[day];
    const yesterday = byDay[(day + 6) % 7];
    let text = "", open = false;

    if (yesterday && overnight(yesterday) && mins < toMinutes(yesterday.close)) {
      open = true;
      text = t("status.open").replace("{t}", formatTime(yesterday.close));
    } else if (today && mins >= toMinutes(today.open) && (overnight(today) || mins < toMinutes(today.close))) {
      open = true;
      text = t("status.open").replace("{t}", formatTime(today.close));
    } else if (today && mins < toMinutes(today.open)) {
      text = t("status.closedToday").replace("{t}", formatTime(today.open));
    } else {
      for (let i = 1; i <= 7; i++) {
        const d = (day + i) % 7;
        if (byDay[d]) { text = t("status.closed").replace("{d}", t("days")[d]).replace("{t}", formatTime(byDay[d].open)); break; }
      }
    }
    el.classList.toggle("is-open", open);
    el.classList.toggle("is-closed", !open);
    $(".status__text", el).textContent = text;
  }

  function renderMap() {
    const box = $("#mapBox");
    if (!box || box.dataset.loaded) return;
    box.dataset.loaded = "1";
    box.innerHTML = `<iframe title="Best Shop location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=${encodeURIComponent(SITE.mapLatLng || SITE.mapQuery)}&z=17&output=embed"></iframe>`;
  }

  // ---------- Reveal on scroll ----------
  let observer;
  function setupReveal() {
    const els = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    observer = observer || new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); observer.unobserve(en.target); } });
    }, { threshold: 0.1 });
    els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 60 + "ms"; observer.observe(e); });
  }

  const langListeners = [];
  function renderAll() {
    renderText();
    renderLinks();
    renderMarquee();
    renderCounts();
    renderImports();
    renderCategories();
    renderOffers();
    renderHours();
    renderStatus();
    renderMap();
    renderBasketCount();
    if (drawer.open) renderBasket();
    langListeners.forEach((fn) => fn(lang));
    if (window.lucide) window.lucide.createIcons();
    setupReveal();
  }

  // ---------- Events ----------
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    try { localStorage.setItem("bs-lang", lang); } catch (e) {}
    renderAll();
  });

  const nav = $("#nav");
  const menuBtn = $("#menuToggle");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  $("#year").textContent = new Date().getFullYear();

  // Shared helpers for products.js
  window.BS = {
    t, esc, num, formatPrice, productCard, openProduct, renderAll,
    lang: () => lang,
    onLangChange: (fn) => langListeners.push(fn),
    refreshIcons: () => window.lucide && window.lucide.createIcons(),
  };

  if (document.body.dataset.page === "home") {
    setInterval(renderStatus, 60 * 1000);
    fetch("data/home.json").then((r) => r.json()).then((data) => { home = data; renderAll(); }).catch(() => {});
  }
  renderAll();
})();
