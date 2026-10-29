var V='self-v4',F=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
  e.respondWith(new Promise(function(res){var done=false,t=setTimeout(function(){caches.match(q,{ignoreSearch:true}).then(function(r){if(r&&!done){done=true;res(r)}})},2500);
    fetch(q).then(function(r){clearTimeout(t);if(r&&r.ok){var cp=r.clone();caches.open(V).then(function(c){c.put(q,cp)})}if(!done){done=true;res(r)}}).catch(function(){clearTimeout(t);caches.match(q,{ignoreSearch:true}).then(function(r){if(!done){done=true;res(r||caches.match('index.html'))}})})}))});
