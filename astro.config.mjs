// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kamiljaworski.pl',
  // Remove `base` once the custom domain kamiljaworski.pl is live in GitHub Pages settings.
  // It is only needed while the site is served from the /kamiljaworski-pl/ subdirectory.
  base: '/kamiljaworski-pl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
