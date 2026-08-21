const CACHE_NAME = "daily-ledger-v23";
const ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  // Let cross-origin requests (Google sign-in, Drive API calls) go straight to
  // the network — don't intercept or cache them, they're dynamic and auth-bearing.
  if(new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached){
      return cached || fetch(event.request).then(function(resp){
        var copy = resp.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        return resp;
      }).catch(function(){ return cached; });
    })
  );
});
