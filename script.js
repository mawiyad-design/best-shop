(function () {
  "use strict";

  const SITE = window.SITE;

  // ---------- Translations ----------
  const T = {
    en: {
      skip: "Skip to content",
      "nav.categories": "Departments",
      "nav.offers": "Weekly Offers",
      "nav.about": "About",
      "nav.visit": "Visit Us",
      "cta.call": "Call us",
      "cta.offers": "See this week's offers",
      "cta.directions": "Get directions",
      "cta.whatsapp": "WhatsApp us",
      "hero.title": 'Fresh groceries.<br><span class="accent">Better prices.</span> Every day.',
      "hero.lead": "Your neighborhood supermarket for farm-fresh produce, warm bakery goods and everything your home needs — all under one roof.",
      "hero.badgeTop": "Up to",
      "hero.badgeBottom": "off this week",
      "stats.products": "products",
      "stats.dailyVal": "Daily",
      "stats.fresh": "fresh deliveries",
      "stats.days": "days a week",
      "f1.t": "Fresh every morning", "f1.d": "Fruit, vegetables and bread delivered daily.",
      "f2.t": "Honest prices", "f2.d": "Great value on the brands you love.",
      "f3.t": "Quality checked", "f3.d": "Carefully stored, always within date.",
      "f4.t": "Friendly service", "f4.d": "A team that knows you by name.",
      "cat.eyebrow": "Shop by department",
      "cat.title": "Everything you need, in one place",
      "off.eyebrow": "This week only",
      "off.title": "Weekly offers",
      "off.sub": "Prices valid in store while stocks last.",
      "off.save": "Save",
      "about.eyebrow": "About Best Shop",
      "about.title": "A supermarket built around our neighbors",
      "about.p1": "Best Shop started with a simple idea: give families a clean, friendly place to buy fresh, quality groceries at fair prices.",
      "about.p2": "Today we stock thousands of products — from local produce to international favorites — and we still greet every customer at the door.",
      "about.c1": "Locally sourced produce whenever possible",
      "about.c2": "Clean, bright and easy-to-shop aisles",
      "about.c3": "New offers every single week",
      "visit.eyebrow": "Come see us",
      "visit.title": "Visit Best Shop",
      "visit.address": "Address",
      "visit.phone": "Phone",
      "visit.hours": "Opening hours",
      "visit.mapSoon": "Map coming soon",
      "visit.mapHint": "Add your shop's location in config.js to show the map here.",
      "footer.tag": "Fresh groceries. Better prices. Every day.",
      "footer.rights": "All rights reserved.",
      "status.open": "Open now · closes at {t}",
      "status.closed": "Closed now · opens {d} at {t}",
      "status.closedToday": "Closed now · opens at {t}",
      closed: "Closed",
      langButton: "العربية",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      "nav.categories": "الأقسام",
      "nav.offers": "العروض الأسبوعية",
      "nav.about": "من نحن",
      "nav.visit": "زورونا",
      "cta.call": "اتصل بنا",
      "cta.offers": "شاهد عروض هذا الأسبوع",
      "cta.directions": "احصل على الاتجاهات",
      "cta.whatsapp": "راسلنا على واتساب",
      "hero.title": 'بقالة طازجة.<br><span class="accent">أسعار أفضل.</span> كل يوم.',
      "hero.lead": "سوبرماركت الحي لخضار وفواكه طازجة، ومخبوزات ساخنة، وكل ما يحتاجه بيتك — تحت سقف واحد.",
      "hero.badgeTop": "خصم حتى",
      "hero.badgeBottom": "هذا الأسبوع",
      "stats.products": "منتج",
      "stats.dailyVal": "يوميًا",
      "stats.fresh": "توريد طازج",
      "stats.days": "أيام في الأسبوع",
      "f1.t": "طازج كل صباح", "f1.d": "فواكه وخضار وخبز تصلنا يوميًا.",
      "f2.t": "أسعار عادلة", "f2.d": "قيمة ممتازة لماركاتك المفضلة.",
      "f3.t": "جودة مضمونة", "f3.d": "تخزين سليم وصلاحية مضمونة دائمًا.",
      "f4.t": "خدمة ودودة", "f4.d": "فريق يعرفك بالاسم.",
      "cat.eyebrow": "تسوّق حسب القسم",
      "cat.title": "كل ما تحتاجه في مكان واحد",
      "off.eyebrow": "هذا الأسبوع فقط",
      "off.title": "العروض الأسبوعية",
      "off.sub": "الأسعار سارية في المتجر حتى نفاد الكمية.",
      "off.save": "وفّر",
      "about.eyebrow": "عن بست شوب",
      "about.title": "سوبرماركت قريب من جيرانه",
      "about.p1": "بدأ بست شوب بفكرة بسيطة: أن نوفر للعائلات مكانًا نظيفًا وودودًا لشراء بقالة طازجة وعالية الجودة بأسعار عادلة.",
      "about.p2": "اليوم نوفر آلاف المنتجات — من المنتجات المحلية إلى الماركات العالمية — وما زلنا نرحب بكل عميل عند الباب.",
      "about.c1": "منتجات محلية كلما أمكن",
      "about.c2": "ممرات نظيفة ومشرقة وسهلة التسوق",
      "about.c3": "عروض جديدة كل أسبوع",
      "visit.eyebrow": "تفضلوا بزيارتنا",
      "visit.title": "زوروا بست شوب",
      "visit.address": "العنوان",
      "visit.phone": "الهاتف",
      "visit.hours": "ساعات العمل",
      "visit.mapSoon": "الخريطة قريبًا",
      "visit.mapHint": "أضف موقع المتجر في ملف config.js لتظهر الخريطة هنا.",
      "footer.tag": "بقالة طازجة. أسعار أفضل. كل يوم.",
      "footer.rights": "جميع الحقوق محفوظة.",
      "status.open": "مفتوح الآن · يغلق الساعة {t}",
      "status.closed": "مغلق الآن · يفتح {d} الساعة {t}",
      "status.closedToday": "مغلق الآن · يفتح الساعة {t}",
      closed: "مغلق",
      langButton: "English",
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    },
  };

  const CATEGORIES = [
    { icon: "apple",          tint: "#fee2e2", tone: "#dc2626", en: ["Fruits & Vegetables", "Fresh from the farm, every morning"], ar: ["الفواكه والخضار", "طازجة من المزرعة كل صباح"] },
    { icon: "croissant",      tint: "#fef3c7", tone: "#d97706", en: ["Bakery", "Bread, pastries and sweets"],             ar: ["المخبز", "خبز ومعجنات وحلويات"] },
    { icon: "milk",           tint: "#dbeafe", tone: "#2563eb", en: ["Dairy & Eggs", "Milk, cheese, yogurt and more"],     ar: ["الألبان والبيض", "حليب وأجبان ولبن وغيرها"] },
    { icon: "beef",           tint: "#ffe4e6", tone: "#be123c", en: ["Meat & Poultry", "Quality cuts, fresh daily"],        ar: ["اللحوم والدواجن", "قطعيات مميزة طازجة يوميًا"] },
    { icon: "wheat",          tint: "#fef9c3", tone: "#a16207", en: ["Pantry", "Rice, pasta, oils and spices"],             ar: ["المواد الغذائية", "أرز ومعكرونة وزيوت وبهارات"] },
    { icon: "cup-soda",       tint: "#e0f2fe", tone: "#0284c7", en: ["Drinks", "Water, juices and soft drinks"],            ar: ["المشروبات", "مياه وعصائر ومشروبات غازية"] },
    { icon: "cookie",         tint: "#ffedd5", tone: "#c2410c", en: ["Snacks & Sweets", "Chips, chocolate and treats"],     ar: ["الوجبات الخفيفة والحلويات", "رقائق وشوكولاتة وسكاكر"] },
    { icon: "spray-can",      tint: "#dcfce7", tone: "#15803d", en: ["Household", "Cleaning and home essentials"],          ar: ["المنظفات والمنزل", "منظفات ومستلزمات المنزل"] },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  let lang = "en";
  try { lang = localStorage.getItem("bs-lang") || (navigator.language || "").startsWith("ar") && "ar" || "en"; } catch (e) {}

  // ---------- Helpers ----------
  const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function formatTime(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    const d = new Date(2000, 0, 1, h, m);
    return d.toLocaleTimeString(lang === "ar" ? "ar" : "en-US", { hour: "numeric", minute: "2-digit" });
  }

  function formatPrice(n) {
    const num = n.toLocaleString(lang === "ar" ? "ar" : "en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return lang === "ar" ? num + " " + SITE.currency.ar : SITE.currency.en + num;
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
    $$('[data-site="name"]').forEach((el) => (el.textContent = SITE.name[lang]));
    $$('[data-site="address"]').forEach((el) => (el.textContent = SITE.address[lang]));
    $$('[data-site="phone"]').forEach((el) => (el.textContent = SITE.phone));
    $("#langToggle span").textContent = t.langButton;
    document.title = lang === "ar"
      ? SITE.name.ar + " — سوبرماركت الحي"
      : SITE.name.en + " — Your Neighborhood Supermarket";
  }

  function renderLinks() {
    const tel = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
    const wa = "https://wa.me/" + SITE.whatsapp.replace(/\D/g, "");
    const q = SITE.mapQuery || SITE.address.en;
    const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
    $$('[data-link="phone"]').forEach((a) => (a.href = tel));
    $$('[data-link="whatsapp"]').forEach((a) => (a.href = wa));
    $$('[data-link="maps"]').forEach((a) => (a.href = maps));
  }

  function renderCategories() {
    $("#catGrid").innerHTML = CATEGORIES.map((c) => `
      <article class="cat reveal" style="--tint:${c.tint};--tone:${c.tone}">
        <div class="cat__icon"><i data-lucide="${c.icon}" aria-hidden="true"></i></div>
        <h3>${c[lang][0]}</h3>
        <p>${c[lang][1]}</p>
      </article>`).join("");
  }

  function renderOffers() {
    const t = T[lang];
    $("#offerGrid").innerHTML = SITE.offers.map((o) => {
      const pct = Math.round((1 - o.now / o.was) * 100);
      return `
      <article class="offer reveal">
        <span class="offer__tag" dir="ltr">-${pct.toLocaleString(lang === "ar" ? "ar" : "en-US")}%</span>
        <div class="offer__icon"><i data-lucide="${o.icon}" aria-hidden="true"></i></div>
        <div class="offer__body">
          <h3>${o[lang]}</h3>
          <div class="offer__price">
            <span class="offer__now">${formatPrice(o.now)}</span>
            <span class="offer__was"><span class="sr-only">${t["off.save"]}</span>${formatPrice(o.was)}</span>
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

  function renderStatus() {
    const t = T[lang];
    const el = $("#openStatus");
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const byDay = Object.fromEntries(SITE.hours.map((h) => [h.day, h]));
    const today = byDay[now.getDay()];

    let text, open = false;
    if (today && today.open && mins >= toMinutes(today.open) && mins < toMinutes(today.close)) {
      open = true;
      text = t["status.open"].replace("{t}", formatTime(today.close));
    } else if (today && today.open && mins < toMinutes(today.open)) {
      text = t["status.closedToday"].replace("{t}", formatTime(today.open));
    } else {
      for (let i = 1; i <= 7; i++) {
        const d = (now.getDay() + i) % 7;
        if (byDay[d] && byDay[d].open) {
          text = t["status.closed"].replace("{d}", t.days[d]).replace("{t}", formatTime(byDay[d].open));
          break;
        }
      }
    }
    el.classList.toggle("is-open", open);
    el.classList.toggle("is-closed", !open);
    $(".status__text", el).textContent = text || "";
  }

  function renderMap() {
    const box = $("#mapBox");
    if (SITE.mapQuery) {
      box.innerHTML = `<iframe title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe>`;
    } else {
      box.innerHTML = `<div class="map-placeholder">
        <i data-lucide="map-pin" aria-hidden="true"></i>
        <strong>${T[lang]["visit.mapSoon"]}</strong>
        <span>${T[lang]["visit.mapHint"]}</span></div>`;
    }
  }

  // ---------- Reveal on scroll ----------
  let observer;
  function setupReveal() {
    const els = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    observer = observer || new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); observer.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 70 + "ms"; observer.observe(e); });
  }

  function renderAll() {
    renderText();
    renderLinks();
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

  const header = $(".header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#year").textContent = new Date().getFullYear();
  setInterval(renderStatus, 60 * 1000);

  renderAll();
})();
