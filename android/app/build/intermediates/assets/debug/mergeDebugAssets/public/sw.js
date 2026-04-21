// A very small service worker to enable PWA installability
const CACHE_NAME = 'warcrow-companion-v2';
const CORE_ASSETS = [
  '/warcrow-companion/',
  '/warcrow-companion/index.html',
  '/warcrow-companion/manifest.webmanifest',
  '/warcrow-companion/favicon.ico',
  '/warcrow-companion/warcrow.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : undefined)))
      .then(() => self.clients.claim())
  );
});

// Network-first for all requests, with cache fallback. Keeps cache updated for next time.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  event.respondWith(
    fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
      return res;
    }).catch(() => {
      // On failure (offline), try cache; for navigations, fallback to cached index.html
      return caches.match(req).then((cached) => {
        if (cached) return cached;
        if (req.mode === 'navigate') return caches.match('/warcrow-companion/index.html');
        return undefined;
      });
    })
  );
});
