// Nome da versão da memória cache do aplicativo
const CACHE_NAME = 'orcamento-app-v1';

// Lista de ficheiros essenciais a guardar no telemóvel/PC
const urlsToCache = ['/', '/index.html', '/manifest.json'];

// Passo 1: Instalação do Service Worker e gravação inicial em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Passo 2: Interceção de rede (permite abrir o app mesmo offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
