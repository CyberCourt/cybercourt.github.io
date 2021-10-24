importScripts("https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js", "precache-manifest.3f08df75048b1c508255cd93595f61dc.js");


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
