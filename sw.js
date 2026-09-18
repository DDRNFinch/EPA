const CACHE="epa-v9";
const A=["./","./index.html","./app.js","./styles.css","./questions.js","./maths.js","./english.js","./practicals.js","./discussion.js","./confidence.js","./manifest.webmanifest","./icon.png"];

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(A))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;

  const url=new URL(e.request.url);
  const sameOrigin=url.origin===self.location.origin;

  if(sameOrigin){
    // Online is always authoritative. Cache is an offline fallback only.
    // This applies to CSS, JS, HTML, images, manifests and any future
    // same-origin app assets, so a GitHub Pages change is not held stale.
    e.respondWith(
      fetch(e.request,{cache:"no-store"})
        .then(response=>{
          if(response&&response.ok){
            const copy=response.clone();
            caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
          }
          return response;
        })
        .catch(()=>caches.match(e.request,{ignoreSearch:true}))
    );
    return;
  }

  e.respondWith(fetch(e.request));
});