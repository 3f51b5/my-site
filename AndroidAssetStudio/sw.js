importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "23bd938073f3b4eddafd21aaf1442708"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "b7e63acf0484d1a24af9c78fbc6947b9"
  },
  {
    "url": "icons-generic.html",
    "revision": "ff8152fc6dcf76660536de5285cc4e34"
  },
  {
    "url": "icons-launcher.html",
    "revision": "c1d19047be727708e2e626b53c340b24"
  },
  {
    "url": "icons-notification.html",
    "revision": "33c02383be5c3d42ff4c41c09880ccf2"
  },
  {
    "url": "index.html",
    "revision": "186564d38634848c24f9fd06db0b4672"
  },
  {
    "url": "nine-patches.html",
    "revision": "da70c6a03ba60ceb39182b223cc6c0a6"
  },
  {
    "url": "res/generator-thumbs/icon-animator.svg",
    "revision": "47d59b4fd0289994d2f8bd27efacdff1"
  },
  {
    "url": "res/generator-thumbs/icons-actionbar.svg",
    "revision": "bdacfa754719b69a03734fa15b2c2e0c"
  },
  {
    "url": "res/generator-thumbs/icons-app-shortcut.svg",
    "revision": "50baa429922a87fb96080fc6c8cecd0a"
  },
  {
    "url": "res/generator-thumbs/icons-generic.svg",
    "revision": "7e9aaa9edeaf210c7afac117cf094192"
  },
  {
    "url": "res/generator-thumbs/icons-launcher.svg",
    "revision": "ac624b8aabda5851413f3ccfd252b80d"
  },
  {
    "url": "res/generator-thumbs/icons-notification.svg",
    "revision": "cfc9273c4ce8a151fa5d25dbded7914d"
  },
  {
    "url": "res/generator-thumbs/nine-patches.svg",
    "revision": "c37457a837ee23a6c1981b5d993ee72e"
  },
  {
    "url": "app.js",
    "revision": "033b8d778c9d84a6df96d08c58928ff1"
  },
  {
    "url": "vendor.js",
    "revision": "e7ed041554d1603a964b39a3b1010a9d"
  },
  {
    "url": "app.css",
    "revision": "c7ac3bad6868fa8632b47f98361dfaa5"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|www).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: true,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

workbox.googleAnalytics.initialize();
