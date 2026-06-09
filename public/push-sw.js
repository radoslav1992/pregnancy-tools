/* Mama Bloom — custom service-worker logic, imported by the generated Workbox SW.
 * Adds weekly milestone notifications (Periodic Background Sync) plus Web Push
 * groundwork. Plain ES5-ish JS: no imports, runs in the SW global scope. */
/* eslint-disable no-undef */

var DB_NAME = 'mb-db';
var STORE = 'kv';

var FRUIT = {
  4: 'a poppy seed', 5: 'a sesame seed', 6: 'a sweet pea', 7: 'a blueberry',
  8: 'a raspberry', 9: 'a cherry', 10: 'a kumquat', 11: 'a fig', 12: 'a lime',
  13: 'a pea pod', 14: 'a lemon', 15: 'an apple', 16: 'an avocado',
  17: 'a pomegranate', 18: 'a bell pepper', 19: 'a mango', 20: 'a banana',
  21: 'a carrot', 22: 'a spaghetti squash', 23: 'a large mango', 24: 'an ear of corn',
  25: 'a cauliflower', 26: 'a head of lettuce', 27: 'a cauliflower', 28: 'an eggplant',
  29: 'a butternut squash', 30: 'a cabbage', 31: 'a coconut', 32: 'a jicama',
  33: 'a pineapple', 34: 'a cantaloupe', 35: 'a honeydew melon', 36: 'romaine lettuce',
  37: 'Swiss chard', 38: 'a leek', 39: 'a mini watermelon', 40: 'a small pumpkin'
};

function openDb() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = function () { req.result.createObjectStore(STORE); };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
}

function idbGet(key) {
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE, 'readonly');
      var r = tx.objectStore(STORE).get(key);
      r.onsuccess = function () { db.close(); resolve(r.result); };
      r.onerror = function () { db.close(); reject(r.error); };
    });
  });
}

function idbSet(key, value) {
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = function () { db.close(); resolve(); };
      tx.onerror = function () { db.close(); reject(tx.error); };
    });
  });
}

function weekFromEdd(eddIso) {
  var DAY = 86400000;
  var edd = new Date(eddIso).getTime();
  var now = new Date(); now.setHours(0, 0, 0, 0);
  var gaDays = Math.round(280 - (edd - now.getTime()) / DAY);
  if (gaDays < 0) gaDays = 0;
  if (gaDays > 294) gaDays = 294;
  return Math.floor(gaDays / 7);
}

// Show the weekly milestone notification if the week has advanced since last time.
function maybeNotifyWeek() {
  return idbGet('pregnancy').then(function (preg) {
    if (!preg || !preg.edd) return;
    var week = weekFromEdd(preg.edd);
    if (week < 4 || week > 40) return;
    return idbGet('lastNotifiedWeek').then(function (last) {
      if (last === week) return; // already told them about this week
      var fruit = FRUIT[week] || 'your little one';
      return self.registration
        .showNotification('Week ' + week + ' of your pregnancy 🌸', {
          body: "Your baby is about the size of " + fruit + ". Tap to see what's developing.",
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
          tag: 'mb-week',
          data: { url: '/pregnancy/week-' + week + '/' }
        })
        .then(function () { return idbSet('lastNotifiedWeek', week); });
    });
  }).catch(function () { /* non-fatal */ });
}

// Periodic Background Sync (Chromium, installed PWA). Fires roughly per registered interval.
self.addEventListener('periodicsync', function (event) {
  if (event.tag === 'mb-week-check') {
    event.waitUntil(maybeNotifyWeek());
  }
});

// Allow the page to trigger an immediate check (e.g. right after opt-in).
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'mb-check-week') {
    event.waitUntil(maybeNotifyWeek());
  }
});

// Web Push groundwork — fired if a backend ever sends a push.
self.addEventListener('push', function (event) {
  var payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (e) { payload = { body: event.data && event.data.text() }; }
  var title = payload.title || 'Mama Bloom 🌸';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: payload.body || 'Open your pregnancy companion.',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      data: { url: payload.url || '/my-pregnancy/' }
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || '/my-pregnancy/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf(url) !== -1 && 'focus' in list[i]) return list[i].focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
