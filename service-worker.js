let CACHE_NAME = "BurgerBuilder";
const urlsToCache = [
"/",
"/index.html",
"/burger-builder",
"/orders",
];
self.addEventListener("install", function(event) {
// Perform install steps
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache) {
console.log("Opened cache");
return cache.addAll(urlsToCache);
})
);
self.skipWaiting();
});
 
self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request)
    .then(function(response) {
    if (response) {
    return response;
    }
    return fetch(event.request);
    })
    );
    });
