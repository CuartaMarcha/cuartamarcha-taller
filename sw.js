self.addEventListener('install', e => e.waitUntil(caches.open('cm-v2').then(c => c.addAll(['/','index.html','logo.png','manifest.json']))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!=='cm-v2').map(k=>caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
