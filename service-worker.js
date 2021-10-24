importScripts("https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js", "precache-manifest.e7c5751b000e394a133bc22c9bbbe2a8.js");


workbox.core.skipWaiting(); 
workbox.core.clientsClaim(); 
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    new RegExp('.*\.(?:js|css)'),
    workbox.strategies.networkOnly()
);
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.networkOnly()
);
