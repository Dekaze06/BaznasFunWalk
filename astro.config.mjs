import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://funwalk.baznaskabbandung.org',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});

