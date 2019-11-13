const CACHE_NAME = 'testowy_cache';

// List of files which are store in cache.
const filesToCache = [
    '/americanmotors/',
    '/americanmotors/index.html',
    '/americanmotors/out.js',
    '/americanmotors/image/am_96.png'
];

self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(function (err) {
            // Snooze errors...
            // console.error(err);
        })
    );
});

self.addEventListener('fetch', function (evt) {
    // Snooze logs...
    // console.log(event.request.url);
    evt.respondWith(
        // Firstly, send request..
        fetch(evt.request).catch(function () {
            // When request failed, return file from cache...
            return caches.match(evt.request);
        })
    );
});