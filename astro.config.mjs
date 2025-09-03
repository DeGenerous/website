import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  devToolbar: {
    enabled: false,
  },
  // Silence noisy library-only warnings from Rollup/Vite while keeping app warnings.
  // Threlte currently ships some files that import types or helpers from three/three-extras
  // that are not always used after tree-shaking, which triggers UNUSED_EXTERNAL_IMPORT.
  // We filter those specifically for node_modules to avoid hiding real issues in src/.
  vite: {
    logLevel: process.env.NODE_ENV === "production" ? "error" : "info",
    // Additional filter for dev-time Vite warnings not routed through Rollup onwarn
    customLogger: {
      info(msg, opts) {
        console.info(msg);
      },
      warn(msg, opts) {
        const s = String(msg || "");
        const isUnusedThreeImport =
          s.includes('imported from external module "three" but never used') ||
          s.includes('from external module "three/examples') ||
          s.includes('from external module "three-perf" but never used') ||
          s.includes('from external module "troika-three-text" but never used');
        const isThreltePath =
          s.includes("node_modules/@threlte/") ||
          s.includes("node_modules/three/") ||
          s.includes("node_modules/three-perf/") ||
          s.includes("node_modules/troika-three-text/");

        if (isUnusedThreeImport && isThreltePath) {
          return; // suppress noisy library-only warnings
        }
        console.warn(msg);
      },
      error(msg, opts) {
        console.error(msg);
      },
      clearScreen: true,
      hasWarned: false,
    },
    build: {
      // Avoid noisy 500kB warnings; we split vendors below as well
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (
              id.includes("three") ||
              id.includes("@threlte/") ||
              id.includes("troika-three-text") ||
              id.includes("three-perf")
            ) {
              return "threlte-three";
            }

            if (id.includes("svelte")) {
              return "svelte-vendor";
            }
          },
        },
        onwarn(warning, handler) {
          const code = warning?.code;
          const id = warning?.id || "";

          const isLib = /node_modules\//.test(id);
          const isThrelteOrThreeRelated =
            /node_modules\/(@threlte|three-perf|troika-three-text|three\/examples)\//.test(
              id
            );

          // Ignore only library-side unused external import warnings
          if (code === "UNUSED_EXTERNAL_IMPORT" && (isThrelteOrThreeRelated || isLib)) {
            return;
          }

          handler(warning);
        },
      },
    },
  },
});
