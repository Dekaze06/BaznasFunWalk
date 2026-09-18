import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://funwalk.baznaskabbandung.org',
  adapter: vercel(),
  server: {
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});

