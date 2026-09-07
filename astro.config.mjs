import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pjrbenitez.github.io',
  base: '/pasruiben',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    })
  ],
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
