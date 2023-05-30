import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://degenerousdao.com",
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, '')
        },
      },
    },
  }
});