// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kamiljaworski.pl',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
