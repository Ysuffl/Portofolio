// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://your-portfolio-domain.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Jika ingin menggunakan SCSS
        }
      }
    }
  }
});