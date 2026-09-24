/* Best Shop app service worker
   - Pages and product data: network first, cached copy when offline
   - App files (CSS, JS, logos, posters): served from cache, refreshed in the background
   - Product photos from Talabat: cached as customers see them (up to 400)
   Bump VERSION whenever the site changes so phones pick up the new files. */
const VERSION = "bs-v3";
const SHELL = `${VERSION}-shell`;
const PHOTOS = `${VERSION}-photos`;
const PHOTO_LIMIT = 400;

const SHELL_FILES = [
  "./", "./index.html", "./products.html", "./styles.css", "./script.js", "./space.js", "./products.js",
  "./config.js", "./data/home.json", "./manifest.webmanifest",
  "./img/logo.png", "./img/logo-512.png", "./img/favicon.png", "./img/icon-192.png",
  "./img/offers/mandi-rice.jpg", "./img/offers/leeza-oil.jpg", "./img/offers/tayba-juice.jpg", "./img/offers/tiger-rice.jpg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(req) {
  const cache = await caches.open(SHELL);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(req, { ignoreSearch: true })) || (await cache.match("./index.html"));
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fresh = fetch(req).then((res) => {
    if (res.ok || res.type === "opaque") cache.put(req, res.clone());
    return res;
  }).catch(() => cached);
  return cached || fresh;
}

async function photo(req) {
  const cache = await caches.open(PHOTOS);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok || res.type === "opaque") {
    await cache.put(req, res.clone());
    const keys = await cache.keys();
    if (keys.length > PHOTO_LIMIT) await Promise.all(keys.slice(0, keys.length - PHOTO_LIMIT).map((k) => cache.delete(k)));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.hostname === "talabat.dhmedia.io") { e.respondWith(photo(req)); return; }
  if (/fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(url.hostname)) {
    e.respondWith(staleWhileRevalidate(req, SHELL)); return;
  }
  if (url.origin !== self.location.origin) return;       // maps, WhatsApp, etc. go straight to the network

  if (req.mode === "navigate" || url.pathname.endsWith(".json")) { e.respondWith(networkFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req, SHELL));
});
