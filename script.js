(function () {
  "use strict";

  const SITE = window.SITE;

  // ---------- Translations ----------
  const T = {
    en: {
      skip: "Skip to content",
      "top.hours": "Open daily 7 AM – 2 AM",
      "top.delivery": "Delivery available",
      "nav.categories": "Departments",
      "nav.offers": "Offers",
      "nav.order": "Order",
      "nav.visit": "Visit Us",
      "cta.call": "Call us",
      "cta.talabat": "Order on Talabat",
      "cta.whatsapp": "Order on WhatsApp",
      "cta.directions": "Get directions",
      "hero.title": 'Everything at the <span class="hl">best price.</span>',
      "hero.lead": "Your neighborhood supermarket in Al-Gardens — all your daily groceries, fresh meat and chicken, cheeses and salads, under one roof.",
      "facts.hoursVal": "7 AM – 2 AM",
      "facts.hours": "open daily",
      "facts.deliveryVal": "Delivery",
      "facts.delivery": "to your door",
      "facts.pointsVal": "Points",
      "facts.points": "loyalty program",
      "chip.meat": "Fresh meat & chicken",
      "chip.salads": "Salads",
      "chip.cheese": "Cheeses",
      "chip.daily": "Daily essentials",
      "why.title": "Why Best Shop",
      "f1.t": "The best price", "f1.d": "Everything you need at prices that respect your budget.",
      "f2.t": "Fresh every day", "f2.d": "Fresh meat and chicken, cheeses and salads daily.",
      "f3.t": "Fast delivery", "f3.d": "Order by WhatsApp or Talabat — we bring it to you.",
      "f4.t": "Points program", "f4.d": "Collect points every time you shop with us.",
      "cat.eyebrow": "Shop by department",
      "cat.title": "Everything you need, in one place",
      "off.eyebrow": "This week only",
      "off.title": "Weekly offers",
      "off.sub": "Prices valid in store while stocks last.",
      "off.more": "More offers on Instagram",
      "off.was": "Was",
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
      "footer.tag": "Everything at the best price.",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "status.open": "Open now · closes at {t}",
      "status.closed": "Closed now · opens {d} at {t}",
      "status.closedToday": "Closed now · opens at {t}",
      closed: "Closed",
      langButton: "العربية",
      marquee: ["Fresh meat & chicken", "Cheeses", "Salads", "Fruits & vegetables", "Daily essentials", "Best price", "Delivery available"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      "top.hours": "مفتوح يوميًا من 7 صباحًا حتى 2 بعد منتصف الليل",
      "top.delivery": "خدمة التوصيل متوفرة",
      "nav.categories": "الأقسام",
      "nav.offers": "العروض",
      "nav.order": "اطلب الآن",
      "nav.visit": "زورونا",
      "cta.call": "اتصل بنا",
      "cta.talabat": "اطلب عبر طلبات",
      "cta.whatsapp": "اطلب عبر واتساب",
      "cta.directions": "احصل على الاتجاهات",
      "hero.title": 'كل شيء <span class="hl">بأفضل سعر!</span>',
      "hero.lead": "سوبرماركت الحي في الجاردنز — كل المواد التموينية اليومية، لحوم ودجاج طازج، أجبان وسلطات، تحت سقف واحد.",
      "facts.hoursVal": "7 ص – 2 ليلًا",
      "facts.hours": "مفتوح يوميًا",
      "facts.deliveryVal": "توصيل",
      "facts.delivery": "حتى باب بيتك",
      "facts.pointsVal": "النقاط",
      "facts.points": "برنامج الولاء",
      "chip.meat": "لحوم ودجاج طازج",
      "chip.salads": "سلطات",
      "chip.cheese": "أجبان",
      "chip.daily": "مواد تموينية يومية",
      "why.title": "لماذا بست شوب",
      "f1.t": "أفضل سعر", "f1.d": "كل ما تحتاجه بأسعار تناسب ميزانيتك.",
      "f2.t": "طازج كل يوم", "f2.d": "لحوم ودجاج طازج، أجبان وسلطات يوميًا.",
      "f3.t": "توصيل سريع", "f3.d": "اطلب عبر واتساب أو طلبات — ونوصلك طلبك.",
      "f4.t": "برنامج النقاط", "f4.d": "اجمع النقاط في كل مرة تتسوق معنا.",
      "cat.eyebrow": "تسوّق حسب القسم",
      "cat.title": "كل ما تحتاجه في مكان واحد",
      "off.eyebrow": "هذا الأسبوع فقط",
      "off.title": "العروض الأسبوعية",
      "off.sub": "الأسعار سارية في المتجر حتى نفاد الكمية.",
      "off.more": "المزيد من العروض على إنستغرام",
      "off.was": "كان",
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
      "footer.tag": "كل شيء بأفضل سعر!",
      "footer.explore": "تصفح",
      "footer.contact": "تواصل معنا",
      "footer.rights": "جميع الحقوق محفوظة.",
      "status.open": "مفتوح الآن · يغلق الساعة {t}",
      "status.closed": "مغلق الآن · يفتح {d} الساعة {t}",
      "status.closedToday": "مغلق الآن · يفتح الساعة {t}",
      closed: "مغلق",
      langButton: "English",
      marquee: ["لحوم ودجاج طازج", "أجبان", "سلطات", "خضار وفواكه", "مواد تموينية", "أفضل سعر", "توصيل متوفر"],
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    },
  };

  const CATEGORIES = [
    { icon: "beef",           en: ["Meat & Chicken", "Fresh cuts, daily"],               ar: ["اللحوم والدجاج", "طازجة يوميًا"] },
    { icon: "milk",           en: ["Cheese & Dairy", "Cheeses, milk, yogurt, labneh"],   ar: ["الأجبان والألبان", "أجبان، حليب، لبن، لبنة"] },
    { icon: "salad",          en: ["Salads", "Freshly prepared salads"],                 ar: ["السلطات", "سلطات طازجة التحضير"] },
    { icon: "apple",          en: ["Fruits & Vegetables", "Fresh produce"],              ar: ["الخضار والفواكه", "منتجات طازجة"] },
    { icon: "wheat",          en: ["Daily Essentials", "Rice, sugar, oil, flour"],       ar: ["المواد التموينية", "أرز، سكر، زيت، طحين"] },
    { icon: "cup-soda",       en: ["Drinks", "Water, juices, soft drinks"],              ar: ["المشروبات", "مياه، عصائر، مشروبات غازية"] },
    { icon: "cookie",         en: ["Snacks & Sweets", "Chips, chocolate, treats"],       ar: ["التسالي والحلويات", "شيبس، شوكولاتة، سكاكر"] },
    { icon: "spray-can",      en: ["Household", "Cleaning & home care"],                 ar: ["المنظفات", "تنظيف ومستلزمات المنزل"] },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  let lang = "en";
  try {
    lang = localStorage.getItem("bs-lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
  } catch (e) {}

  // Latin digits in Arabic too, matching how phone numbers and prices are written in Jordan.
  const locale = () => (lang === "ar" ? "ar-JO-u-nu-latn" : "en-US");

  // ---------- Helpers ----------
  const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function formatTime(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return new Date(2000, 0, 1, h, m).toLocaleTimeString(locale(), { hour: "numeric", minute: "2-digit" });
  }

  function formatPrice(n) {
    const num = n.toLocaleString(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return num + " " + SITE.currency[lang];
  }

  // ---------- Renderers ----------
  function renderText() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => {
      const val = t[el.dataset.i18n];
      if (val == null) return;
      if (val.includes("<")) el.innerHTML = val; else el.textContent = val;
    });
    $$("[data-site]").forEach((el) => {
      const v = SITE[el.dataset.site];
      el.textContent = typeof v === "object" ? v[lang] : v;
    });
    $("#langToggle span").textContent = t.langButton;
    document.title = lang === "ar"
      ? "بست شوب — متجرك المفضّل في الجاردنز، عمّان"
      : "Best Shop — Your Favorite Store in Al-Gardens, Amman";
  }

  function renderLinks() {
    const links = {
      phone: "tel:" + SITE.phone.replace(/[^\d+]/g, ""),
      whatsapp: "https://wa.me/" + SITE.whatsapp.replace(/\D/g, ""),
      email: "mailto:" + SITE.email,
      maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.mapQuery),
      facebook: SITE.social.facebook,
      instagram: SITE.social.instagram,
      talabat: SITE.social.talabat,
    };
    $$("[data-link]").forEach((a) => { if (links[a.dataset.link]) a.href = links[a.dataset.link]; });
  }

  function renderMarquee() {
    const items = T[lang].marquee.map((m) => `<span>${m}</span>`).join("");
    $("#marquee").innerHTML = items + items + items + items;
  }

  function renderCategories() {
    $("#catGrid").innerHTML = CATEGORIES.map((c) => `
      <article class="cat reveal">
        <div class="cat__icon"><i data-lucide="${c.icon}" aria-hidden="true"></i></div>
        <div><h3>${c[lang][0]}</h3><p>${c[lang][1]}</p></div>
      </article>`).join("");
  }

  function renderOffers() {
    const t = T[lang];
    $("#offerGrid").innerHTML = SITE.offers.map((o) => {
      const pct = Math.round((1 - o.now / o.was) * 100);
      return `
      <article class="offer reveal">
        <span class="offer__tag" dir="ltr">-${pct}%</span>
        <div class="offer__icon"><i data-lucide="${o.icon}" aria-hidden="true"></i></div>
        <div class="offer__body">
          <h3>${o[lang]}</h3>
          <div class="offer__price">
            <span class="offer__now">${formatPrice(o.now)}</span>
            <span class="offer__was"><span class="sr-only">${t["off.was"]} </span>${formatPrice(o.was)}</span>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderHours() {
    const t = T[lang];
    const today = new Date().getDay();
    $("#hoursTable").innerHTML = SITE.hours.map((h) => `
      <tr class="${h.day === today ? "is-today" : ""}">
        <td>${t.days[h.day]}</td>
        <td dir="ltr">${h.open && h.close ? formatTime(h.open) + " – " + formatTime(h.close) : t.closed}</td>
      </tr>`).join("");
  }

  // Works with closing times after midnight (e.g. 07:00 – 02:00).
  function renderStatus() {
    const t = T[lang];
    const el = $("#openStatus");
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
      text = t["status.open"].replace("{t}", formatTime(yesterday.close));
    } else if (today && mins >= toMinutes(today.open) && (overnight(today) || mins < toMinutes(today.close))) {
      open = true;
      text = t["status.open"].replace("{t}", formatTime(today.close));
    } else if (today && mins < toMinutes(today.open)) {
      text = t["status.closedToday"].replace("{t}", formatTime(today.open));
    } else {
      for (let i = 1; i <= 7; i++) {
        const d = (day + i) % 7;
        if (byDay[d]) { text = t["status.closed"].replace("{d}", t.days[d]).replace("{t}", formatTime(byDay[d].open)); break; }
      }
    }
    el.classList.toggle("is-open", open);
    el.classList.toggle("is-closed", !open);
    $(".status__text", el).textContent = text;
  }

  function renderMap() {
    const box = $("#mapBox");
    if (box.dataset.loaded) return;
    box.dataset.loaded = "1";
    box.innerHTML = `<iframe title="Best Shop location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe>`;
  }

  // ---------- Reveal on scroll ----------
  let observer;
  function setupReveal() {
    const els = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    observer = observer || new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); observer.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 60 + "ms"; observer.observe(e); });
  }

  function renderAll() {
    renderText();
    renderLinks();
    renderMarquee();
    renderCategories();
    renderOffers();
    renderHours();
    renderStatus();
    renderMap();
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
  setInterval(renderStatus, 60 * 1000);

  renderAll();
})();
