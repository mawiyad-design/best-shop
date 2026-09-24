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
      "order.lead": "Send us your list on WhatsApp, or order from our store on Talabat. Fast, easy and at the best price.",
      "order.s1": "Send your shopping list",
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
      "order.lead": "أرسل لنا قائمتك على واتساب، أو اطلب من متجرنا على طلبات. سريع وسهل وبأفضل سعر.",
      "order.s1": "أرسل قائمة مشترياتك",
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
  function productCard(p) {
    const pct = p.o ? Math.round((1 - p.p / p.o) * 100) : 0;
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
      </article>`;
  }

  const viewer = $("#viewer");
  function openViewer(html) {
    $("#viewerBody").innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
    if (viewer.showModal) viewer.showModal(); else viewer.setAttribute("open", "");
  }
  function closeViewer() { if (viewer.close) viewer.close(); else viewer.removeAttribute("open"); }
  if (viewer) {
    viewer.addEventListener("click", (e) => { if (e.target === viewer || e.target.closest("[data-close]")) closeViewer(); });
  }

  function waLink(text) {
    return "https://wa.me/" + SITE.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(text);
  }

  function openProduct(p, catName) {
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
            <a class="btn btn--wa" href="${esc(waLink(t("product.waMsg").replace("{p}", p.t)))}" target="_blank" rel="noopener"><i data-lucide="message-circle" aria-hidden="true"></i><span>${t("product.wa")}</span></a>
            <a class="btn btn--outline" href="${esc(SITE.social.talabat)}" target="_blank" rel="noopener"><i data-lucide="shopping-bag" aria-hidden="true"></i><span>${t("product.talabat")}</span></a>
          </div>
        </div>
      </div>`);
  }

  function openPoster(o) {
    openViewer(`
      <figure class="poster-view">
        <img src="${esc(o.img)}" alt="${esc(o[lang])}">
        <figcaption>
          <strong>${esc(o[lang])}</strong>
          <span>${formatPrice(o.price)}</span>
          <a class="btn btn--wa" href="${esc(waLink(t("product.waMsg").replace("{p}", o[lang])))}" target="_blank" rel="noopener"><i data-lucide="message-circle" aria-hidden="true"></i><span>${t("product.wa")}</span></a>
        </figcaption>
      </figure>`);
  }

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
      if (b) openPoster(SITE.offers[+b.dataset.offer]);
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
