// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';

// Update this to your production domain once deployed.
const SITE = process.env.SITE_URL || 'https://pregnancyandbaby.tools';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/offline') && !page.includes('/404'),
      changefreq: 'weekly',
      lastmod: new Date(),
      /** @param {any} item */
      serialize(item) {
        // Tune priority/freshness by section so crawlers spend budget well.
        const url = item.url;
        if (url === `${SITE}/` || url === SITE) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.includes('/tools/') || url.includes('/pregnancy/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Mama Bloom — Pregnancy Tools',
        short_name: 'Mama Bloom',
        description:
          'Due-date calculator, week-by-week tracker and a suite of pregnancy tools. Calm, fast and works offline.',
        theme_color: '#b07089',
        background_color: '#fbf6f1',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/?source=pwa',
        categories: ['health', 'lifestyle', 'medical'],
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icons/icon-maskable-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Due date calculator',
            short_name: 'Due date',
            url: '/tools/due-date-calculator/?source=pwa-shortcut',
          },
          {
            name: 'Week-by-week',
            short_name: 'Weeks',
            url: '/pregnancy/?source=pwa-shortcut',
          },
          {
            name: 'Contraction timer',
            short_name: 'Contractions',
            url: '/tools/contraction-timer/?source=pwa-shortcut',
          },
        ],
      },
      workbox: {
        navigateFallback: '/offline/',
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // Adds push / periodic-sync / notification handlers on top of the
        // generated Workbox service worker (see public/push-sw.js).
        importScripts: ['/push-sw.js'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
});
