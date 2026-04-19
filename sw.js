/* FinChat Service Worker
   SPDX-FileCopyrightText: 2026 Ednelson Santos
   SPDX-License-Identifier: MIT */
const CACHE = 'finchat-v3';
const ASSETS = ['./'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./')))
  );
});

// Recebe mensagens da aba para exibir notificações
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'NOTIFY') {
    self.registration.showNotification(e.data.title || 'FinChat', {
      body:     e.data.body  || '',
      icon:     e.data.icon  || '',
      badge:    e.data.icon  || '',
      tag:      e.data.tag   || 'finchat',
      renotify: false,
    }).catch(() => {});
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      if (cs.length) return cs[0].focus();
      return self.clients.openWindow('./');
    })
  );
});
