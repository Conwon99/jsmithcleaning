import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const townSlugs = ['ardrossan', 'ayr', 'cumnock', 'irvine', 'kilmarnock', 'largs', 'prestwick', 'saltcoats', 'stevenston', 'troon'];
const serviceSlugs = ['roof-cleaning', 'brick-cleaning', 'conservatory-cleaning', 'driveway-cleaning', 'gutter-cleaning', 'patio-cleaning', 'pressure-washing', 'soft-washing', 'upvc-cleaning'];
const hubSlugs = ['services', 'locations', 'reviews', 'about', ...townSlugs, ...serviceSlugs];

// https://astro.build/config
export default defineConfig({
  site: 'https://jsmithexteriorcleaning.com',
  output: 'static', // Static site generation
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.js',
    }),
    sitemap({
      lastmod: new Date(),
      serialize(item) {
        const segments = new URL(item.url).pathname.split('/').filter(Boolean);

        if (segments.length === 0) {
          // Homepage
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (segments.length === 2 && townSlugs.includes(segments[0]) && serviceSlugs.includes(segments[1])) {
          // Town x service matrix pages, e.g. /ayr/roof-cleaning
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (segments.length === 1 && hubSlugs.includes(segments[0])) {
          // Hub pages: town hubs, root service pages, services/locations/reviews/about
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          // Static utility pages: contact, thank-you, privacy-policy, terms-conditions
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }

        return item;
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  publicDir: './static',
});

