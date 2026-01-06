self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Ye empty fetch handler zaroori hai PWA installable banane ke liye
});

