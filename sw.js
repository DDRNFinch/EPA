const CACHE="epa-v7";
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
  const isAppCode=sameOrigin&&(/\.js$/.test(url.pathname)||url.pathname.endsWith(".html")||url.pathname.endsWith("/"));

  if(isAppCode){
    // Always ask the network first for the app shell/code. The current
    // service-worker cache is only the offline fallback.
    e.respondWith(
      fetch(e.request,{cache:"no-cache"})
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

  e.respondWith(
    caches.match(e.request,{ignoreSearch:true})
      .then(cached=>cached||fetch(e.request).then(response=>{
        if(response&&response.ok&&sameOrigin){
          const copy=response.clone();
          caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
        }
        return response;
      }).catch(()=>cached))
  );
});