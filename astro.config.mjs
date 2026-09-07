import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Configuración de URL y Base Path para GitHub Pages:
  // Si se aloja en https://<usuario>.github.io/<repositorio>/, configurar 'base' acorde.
  // Puede sobreescribirse mediante variables de entorno en CI/CD si se desea.
  site: process.env.ASTRO_SITE || 'https://jmcastillo.github.io',
  base: process.env.ASTRO_BASE || '/',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
