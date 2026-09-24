/* Best Shop — space effects
   1. Star field background with parallax, twinkle and shooting stars
   2. Stardust that follows the cursor
   3. Drag any product: it flies with a colored nebula trail and can be dropped
      into the basket (the "+" button stays as the non-drag way to add). */
(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const HUES = [270, 320, 190, 55];   // violet, magenta, cyan, brand yellow

  const bg = document.createElement("canvas");
  const fx = document.createElement("canvas");
  bg.className = "space-bg";
  fx.className = "space-fx";
  bg.setAttribute("aria-hidden", "true");
  fx.setAttribute("aria-hidden", "true");
  document.body.prepend(bg);
  document.body.appendChild(fx);
  const bctx = bg.getContext("2d");
  const fctx = fx.getContext("2d");

  let W = 0, H = 0;
  let stars = [];
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  function makeStars() {
    const count = Math.min(420, Math.round((W * H) / 4200));
    stars = Array.from({ length: count }, () => {
      const layer = Math.random() < .6 ? 0 : Math.random() < .75 ? 1 : 2;
      return {
        x: Math.random() * W, y: Math.random() * H, layer,
        r: [0.5, 0.9, 1.5][layer] * (0.7 + Math.random() * 0.6),
        tw: Math.random() * Math.PI * 2, sp: 0.6 + Math.random() * 1.8,
        hue: Math.random() < .15 ? HUES[(Math.random() * 3) | 0] : 0,
      };
    });
  }

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    for (const c of [bg, fx]) { c.width = W * DPR; c.height = H * DPR; }
    bctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    makeStars();
    if (reduced) drawStars(0);
  }

  // ---------- Star field ----------
  let shooting = null;
  function drawStars(time) {
    bctx.clearRect(0, 0, W, H);
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    const scroll = window.scrollY;
    for (const s of stars) {
      const depth = [0.02, 0.05, 0.1][s.layer];
      let x = s.x - pointer.x * depth * 40;
      let y = (s.y - scroll * depth * 1.5 - pointer.y * depth * 40) % H;
      if (y < 0) y += H;
      x = ((x % W) + W) % W;
      const a = reduced ? 0.8 : 0.45 + 0.55 * Math.abs(Math.sin(s.tw + time * 0.001 * s.sp));
      bctx.beginPath();
      bctx.arc(x, y, s.r, 0, Math.PI * 2);
      bctx.fillStyle = s.hue ? `hsla(${s.hue}, 100%, 80%, ${a})` : `rgba(255, 255, 255, ${a})`;
      bctx.fill();
      if (s.layer === 2) {
        bctx.beginPath();
        bctx.arc(x, y, s.r * 3.5, 0, Math.PI * 2);
        bctx.fillStyle = `rgba(200, 210, 255, ${a * 0.08})`;
        bctx.fill();
      }
    }
    if (reduced) return;
    // Shooting star every few seconds
    if (!shooting && Math.random() < 0.004) {
      shooting = { x: Math.random() * W * 0.8, y: Math.random() * H * 0.4, vx: 9 + Math.random() * 6, vy: 3 + Math.random() * 3, life: 1 };
    }
    if (shooting) {
      const s = shooting;
      const g = bctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
      g.addColorStop(0, `rgba(255, 255, 255, ${s.life})`);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      bctx.strokeStyle = g; bctx.lineWidth = 2;
      bctx.beginPath(); bctx.moveTo(s.x, s.y); bctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12); bctx.stroke();
      s.x += s.vx; s.y += s.vy; s.life -= 0.02;
      if (s.life <= 0 || s.x > W + 100) shooting = null;
    }
  }

  // ---------- Particles (stardust + nebula trail) ----------
  const particles = [];
  function emit(x, y, opts = {}) {
    if (reduced) return;
    const n = opts.count || 1;
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = (opts.speed || 0.6) * (0.3 + Math.random());
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd + (opts.vx || 0),
        vy: Math.sin(ang) * spd + (opts.vy || 0),
        life: 1, decay: opts.decay || (0.012 + Math.random() * 0.02),
        size: (opts.size || 3) * (0.5 + Math.random()),
        hue: opts.hue != null ? opts.hue + (Math.random() * 30 - 15) : HUES[(Math.random() * HUES.length) | 0],
      });
    }
    if (particles.length > 900) particles.splice(0, particles.length - 900);
  }

  function drawParticles() {
    fctx.clearRect(0, 0, W, H);
    if (!particles.length) return;
    fctx.globalCompositeOperation = "lighter";
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vx *= 0.97; p.vy *= 0.97; p.vy -= 0.01;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      const r = p.size * (0.4 + p.life);
      const g = fctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
      g.addColorStop(0, `hsla(${p.hue}, 100%, 80%, ${p.life})`);
      g.addColorStop(0.35, `hsla(${p.hue}, 100%, 60%, ${p.life * 0.5})`);
      g.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);
      fctx.fillStyle = g;
      fctx.beginPath(); fctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2); fctx.fill();
    }
    fctx.globalCompositeOperation = "source-over";
  }

  // ---------- Animation loop ----------
  let running = false;
  function frame(time) {
    if (document.hidden) { running = false; return; }
    drawStars(time);
    drawParticles();
    if (drag && drag.active) updateGhost(time);
    requestAnimationFrame(frame);
  }
  function start() { if (!running && !reduced) { running = true; requestAnimationFrame(frame); } }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) start(); });

  // Cursor stardust (mouse only, subtle)
  let lastDust = 0;
  window.addEventListener("pointermove", (e) => {
    pointer.tx = e.clientX - W / 2;
    pointer.ty = e.clientY - H / 2;
    if (finePointer && !drag && e.pointerType === "mouse") {
      const now = performance.now();
      if (now - lastDust > 40) { emit(e.clientX, e.clientY, { count: 1, size: 1.8, speed: 0.3, decay: 0.03 }); lastDust = now; }
    }
  }, { passive: true });

  // ---------- Drag products into the basket ----------
  let drag = null;
  let suppressClick = false;
  const fab = () => document.getElementById("basketFab");

  function fabCenter() {
    const r = fab().getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function beginDrag() {
    const d = drag;
    d.active = true;
    d.card.classList.add("is-lifted");
    document.body.classList.add("is-dragging");
    const img = d.card.querySelector(".product__media img");
    d.ghost = document.createElement("div");
    d.ghost.className = "drag-ghost";
    d.ghost.innerHTML = `<img src="${img ? img.src : ""}" alt="" referrerpolicy="no-referrer">`;
    document.body.appendChild(d.ghost);
    d.gx = d.x; d.gy = d.y; d.vx = 0; d.vy = 0;
    fab().classList.add("is-target");
    emit(d.x, d.y, { count: 26, speed: 3, size: 3.5 });
    if (navigator.vibrate && d.type !== "mouse") navigator.vibrate(15);
    start();
  }

  function updateGhost(time) {
    const d = drag;
    // Smooth follow gives the "floating in zero gravity" feel
    const px = d.gx, py = d.gy;
    d.gx += (d.x - d.gx) * 0.35;
    d.gy += (d.y - d.gy) * 0.35;
    d.vx = d.gx - px; d.vy = d.gy - py;
    const speed = Math.hypot(d.vx, d.vy);
    const tilt = Math.max(-25, Math.min(25, d.vx * 1.4));
    const size = d.ghost.offsetWidth;
    const hue = (time * 0.06) % 360;
    d.ghost.style.setProperty("--h", hue.toFixed(0));
    const over = Math.hypot(d.x - fabCenter().x, d.y - fabCenter().y) < 110;
    fab().classList.toggle("is-over", over);
    d.over = over;
    const scale = over ? 0.6 : 1 + Math.min(speed, 30) * 0.004;
    d.ghost.style.transform = `translate(${d.gx - size / 2}px, ${d.gy - size / 2}px) rotate(${tilt}deg) scale(${scale})`;
    // Trail: more dust the faster it flies, colors drift through the nebula palette
    const n = Math.min(6, 1 + Math.floor(speed / 4));
    emit(d.gx, d.gy, { count: n, size: 4 + Math.min(speed, 20) * 0.25, speed: 0.8, vx: -d.vx * 0.15, vy: -d.vy * 0.15, hue, decay: 0.018 });
  }

  function endDrag(cancelled) {
    const d = drag;
    drag = null;
    document.body.classList.remove("is-dragging");
    const f = fab();
    f.classList.remove("is-target", "is-over");
    if (!d || !d.active) return;
    suppressClick = true;
    setTimeout(() => (suppressClick = false), 50);
    const ghost = d.ghost;
    const size = ghost.offsetWidth;
    const dropped = !cancelled && d.over && window.BS && window.BS.addById(d.id);
    let tx, ty, endScale;
    if (dropped) {
      const c = fabCenter();
      tx = c.x; ty = c.y; endScale = 0.1;
      emit(c.x, c.y, { count: 60, speed: 5, size: 4 });
      f.classList.remove("is-bump"); void f.offsetWidth; f.classList.add("is-bump");
    } else {
      const r = d.card.getBoundingClientRect();
      tx = r.left + r.width / 2; ty = r.top + r.height / 2.6; endScale = 0.4;
      emit(d.gx, d.gy, { count: 14, speed: 1.5, size: 3 });
    }
    ghost.style.transition = "transform .45s cubic-bezier(.2,.7,.2,1), opacity .45s";
    ghost.style.transform = `translate(${tx - size / 2}px, ${ty - size / 2}px) scale(${endScale})`;
    ghost.style.opacity = "0";
    setTimeout(() => { ghost.remove(); d.card.classList.remove("is-lifted"); }, 460);
  }

  document.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const open = e.target.closest(".product__open");
    if (!open) return;
    const card = open.closest(".product");
    drag = { id: open.dataset.pid, card, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, type: e.pointerType, active: false, pid: e.pointerId };
    // Touch: press and hold to pick up (so normal scrolling still works)
    if (e.pointerType !== "mouse") {
      drag.timer = setTimeout(() => { if (drag && !drag.active) beginDrag(); }, 280);
    }
  });

  window.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.pid) return;
    drag.x = e.clientX; drag.y = e.clientY;
    const moved = Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy);
    if (!drag.active) {
      if (drag.type === "mouse" && moved > 8) beginDrag();
      else if (drag.type !== "mouse" && moved > 10) { clearTimeout(drag.timer); drag = null; }  // user is scrolling
    } else if (reduced) {
      updateGhost(0);
    }
  });

  window.addEventListener("pointerup", (e) => {
    if (!drag || e.pointerId !== drag.pid) return;
    clearTimeout(drag.timer);
    if (drag.active) endDrag(false); else drag = null;
  });
  window.addEventListener("pointercancel", () => { if (drag) { clearTimeout(drag.timer); drag.active ? endDrag(true) : (drag = null); } });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && drag && drag.active) endDrag(true); });

  // While dragging on touch screens, stop the page from scrolling
  document.addEventListener("touchmove", (e) => { if (drag && drag.active) e.preventDefault(); }, { passive: false });
  // Don't open the product viewer after a drag, and no long-press menu on products
  document.addEventListener("click", (e) => { if (suppressClick) { e.stopPropagation(); e.preventDefault(); } }, true);
  document.addEventListener("contextmenu", (e) => { if (e.target.closest(".product__open")) e.preventDefault(); });
  document.addEventListener("dragstart", (e) => { if (e.target.closest(".product")) e.preventDefault(); });

  window.addEventListener("resize", resize);
  resize();
  start();
})();
