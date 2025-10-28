self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('honor-tv-v1').then(cache => {
      return cache.addAll([
        '/', '/index.html', '/style.css', '/script.js', '/channels.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
