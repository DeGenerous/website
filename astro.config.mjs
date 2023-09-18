import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import renderer from "@astrojs/renderer-svelte";
// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), svelte(), renderer()],
  // renderers: ["@astrojs/renderer-svelte"],
  site: "https://degenerousdao.com",
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
});
