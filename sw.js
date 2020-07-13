var PRECACHE = 'precache-v1';
var RUNTIME = 'runtime';

// list the files you want cached by the service worker
PRECACHE_URLS = [
    'index.html',
    './',
    'index.html?utm_source=homescreen',
    'css/style.css',
    'css/materialize.css',
    'css/materialize.min.css',
    'js/init.js',
    'js/materialize.js',
    'js/materialize.min.js',
    'images/background1.jpg',
    'images/background2.jpg',
    'images/background3.jpg',
    'images/CURSO1.png',
    'images/CURSO2.png',
    'images/CURSO3.png',
    'images/CURSO4.png',

];

// the rest below handles the installing and caching
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).then(self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();

                        caches.open(RUNTIME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});
