import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pjrbenitez.github.io',
  base: '/pasruiben',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
