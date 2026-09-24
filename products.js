(function () {
  "use strict";

  const BS = window.BS;
  const $ = (s) => document.querySelector(s);
  const PAGE = 48;

  const params = new URLSearchParams(location.search);
  const state = {
    cat: params.get("cat") || "",
    sub: params.get("sub") || "",
    imported: params.get("imported") === "1",
    q: params.get("q") || "",
    sort: "featured",
    shown: PAGE,
  };

  let data = null;
  let byId = {};
  let catBySlug = {};
  let results = [];

  const searchEl = $("#search");
  const sortEl = $("#sort");
  const impBtn = $("#importedToggle");
  searchEl.value = state.q;

  function syncUrl() {
    const p = new URLSearchParams();
    if (state.cat) p.set("cat", state.cat);
    if (state.sub) p.set("sub", state.sub);
    if (state.imported) p.set("imported", "1");
    if (state.q) p.set("q", state.q);
    history.replaceState(null, "", location.pathname + (p.toString() ? "?" + p : ""));
  }

  function filter() {
    const words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    results = data.products.filter((p) =>
      (!state.cat || p.c === state.cat) &&
      (!state.sub || p.s === state.sub) &&
      (!state.imported || p.imp) &&
      words.every((w) => p._q.includes(w)));
    if (state.sort === "price-asc") results.sort((a, b) => a.p - b.p);
    else if (state.sort === "price-desc") results.sort((a, b) => b.p - a.p);
    else if (state.sort === "name") results.sort((a, b) => a.t.localeCompare(b.t));
  }

  function renderChips() {
    const lang = BS.lang();
    const cats = data.categories.filter((c) => !state.imported || data.products.some((p) => p.imp && p.c === c.slug));
    $("#catChips").innerHTML =
      `<button type="button" class="chip-btn${!state.cat ? " is-active" : ""}" data-cat="">${BS.t("shop.all")}</button>` +
      cats.map((c) => `<button type="button" class="chip-btn${state.cat === c.slug ? " is-active" : ""}" data-cat="${BS.esc(c.slug)}">
          <img src="${BS.esc(c.image)}?width=64" alt="" loading="lazy" referrerpolicy="no-referrer" width="28" height="28">
          <span>${BS.esc(c[lang])}</span></button>`).join("");

    const cat = catBySlug[state.cat];
    const subs = cat ? cat.subs.filter((s) => data.products.some((p) => p.c === cat.slug && p.s === s.slug && (!state.imported || p.imp))) : [];
    $("#subChips").innerHTML = subs.length > 1
      ? `<button type="button" class="sub-btn${!state.sub ? " is-active" : ""}" data-sub="">${BS.t("shop.allSub")}</button>` +
        subs.map((s) => `<button type="button" class="sub-btn${state.sub === s.slug ? " is-active" : ""}" data-sub="${BS.esc(s.slug)}">${BS.esc(s[lang])}</button>`).join("")
      : "";
  }

  function renderGrid() {
    $("#productGrid").innerHTML = results.slice(0, state.shown).map(BS.productCard).join("");
    $("#resultCount").textContent = BS.t("shop.count").replace("{n}", BS.num(results.length));
    $("#emptyState").hidden = results.length > 0;
    $("#loadMore").hidden = state.shown >= results.length;
    impBtn.setAttribute("aria-pressed", String(state.imported));
    impBtn.classList.toggle("is-active", state.imported);
    const cat = catBySlug[state.cat];
    document.querySelector("h1").textContent = cat ? cat[BS.lang()] : BS.t(state.imported ? "shop.titleImported" : "shop.title");
  }

  function update(resetPaging = true) {
    if (!data) return;
    if (resetPaging) state.shown = PAGE;
    filter();
    renderChips();
    renderGrid();
    syncUrl();
  }

  // ---------- Events ----------
  let timer;
  searchEl.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = searchEl.value.trim(); update(); }, 150);
  });
  sortEl.addEventListener("change", () => { state.sort = sortEl.value; update(); });
  impBtn.addEventListener("click", () => {
    state.imported = !state.imported;
    if (state.cat && state.imported && !data.products.some((p) => p.imp && p.c === state.cat)) { state.cat = ""; state.sub = ""; }
    update();
  });
  $("#catChips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    state.cat = b.dataset.cat; state.sub = "";
    update();
    window.scrollTo({ top: $(".shop").offsetTop - 90, behavior: "smooth" });
  });
  $("#subChips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-sub]");
    if (!b) return;
    state.sub = b.dataset.sub;
    update();
  });
  $("#loadMore").addEventListener("click", () => { state.shown += PAGE; renderGrid(); });
  $("#productGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-pid]");
    if (!b) return;
    const p = byId[b.dataset.pid];
    const c = catBySlug[p.c];
    BS.openProduct(p, c && c[BS.lang()]);
  });

  BS.onLangChange(() => { if (data) { renderChips(); renderGrid(); } });

  fetch("data/catalog.json")
    .then((r) => r.json())
    .then((d) => {
      data = d;
      d.products.forEach((p) => { p._q = p.t.toLowerCase(); byId[p.id] = p; });
      d.categories.forEach((c) => (catBySlug[c.slug] = c));
      update();
    });
})();
