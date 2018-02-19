// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const dataCacheName = 'jordanliraexamples-v1';
const cacheName = 'jordanliraexamples-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/javascript/conversor.js',
    '/styles/styles.css',
];

if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
} else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
    });
}

//Install stage sets up the offline page in the cahche and opens a new cache
self.addEventListener('install', function (event) {
    var offlinePage = new Request('offline.html');
    event.waitUntil(
        fetch(offlinePage).then(function (response) {
            return caches.open('pwabuilder-offline').then(function (cache) {
                console.log('[PWA Builder] Cached offline page during Install' + response.url);
                return cache.put(offlinePage, response);
            });
        }));
});

//If any fetch fails, it will show the offline page.
//Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function (error) {
            console.error('[PWA Builder] Network request Failed. Serving offline page ' + error);
            return caches.open('pwabuilder-offline').then(function (cache) {
                return cache.match('offline.html');
            });
        }));
});

//This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function (response) {
    return caches.open('pwabuilder-offline').then(function (cache) {
        console.log('[PWA Builder] Offline page updated from refreshOffline event: ' + response.url);
        return cache.put(offlinePage, response);
    });
});