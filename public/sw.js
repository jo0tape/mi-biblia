const CACHE = 'biblia-v1';

const BIBLE_FILES = [
  '/bible/gn.json','/bible/ex.json','/bible/lv.json','/bible/nm.json',
  '/bible/dt.json','/bible/js.json','/bible/jud.json','/bible/rt.json',
  '/bible/1sm.json','/bible/2sm.json','/bible/1kgs.json','/bible/2kgs.json',
  '/bible/1ch.json','/bible/2ch.json','/bible/ezr.json','/bible/ne.json',
  '/bible/et.json','/bible/job.json','/bible/ps.json','/bible/prv.json',
  '/bible/ec.json','/bible/so.json','/bible/is.json','/bible/jr.json',
  '/bible/lm.json','/bible/ez.json','/bible/dn.json','/bible/ho.json',
  '/bible/jl.json','/bible/am.json','/bible/ob.json','/bible/jn.json',
  '/bible/mi.json','/bible/na.json','/bible/hk.json','/bible/zp.json',
  '/bible/hg.json','/bible/zc.json','/bible/ml.json','/bible/mt.json',
  '/bible/mk.json','/bible/lk.json','/bible/jo.json','/bible/act.json',
  '/bible/rm.json','/bible/1co.json','/bible/2co.json','/bible/gl.json',
  '/bible/eph.json','/bible/ph.json','/bible/cl.json','/bible/1ts.json',
  '/bible/2ts.json','/bible/1tm.json','/bible/2tm.json','/bible/tt.json',
  '/bible/phm.json','/bible/hb.json','/bible/jm.json','/bible/1pe.json',
  '/bible/2pe.json','/bible/1jo.json','/bible/2jo.json','/bible/3jo.json',
  '/bible/jd.json','/bible/re.json',
];

// Pre-cache todos los archivos de la Biblia al instalar
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(BIBLE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Archivos locales de la Biblia: cache first
  if (url.pathname.startsWith('/bible/')) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
    return;
  }

  // API remota RVR1960: network first, cache fallback
  if (url.hostname === 'bible-api.deno.dev') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Todo lo demás: network normal
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
