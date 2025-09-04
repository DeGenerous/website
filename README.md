## DGRS Website

This repository contains the DGRS website built with Astro and Svelte 5. It includes SSG pages, Svelte components, SCSS styling, and lightweight 3D cursor effects via Threlte.

### Quick Start

- Install: `npm install` (or `bun install`)
- Dev: `npm run dev` (serves at `http://localhost:4321`)
- Type check: `npm run check`
- Format: `npm run format`
- Build: `npm run build` (outputs to `dist/`)

### Tech

- Astro 5, Svelte 5 (runes), SCSS
- Threlte + three.js (cursor effect)
- Prettier + prettier-plugin-svelte

### Structure

- `src/pages` — route pages (Astro)
- `src/components` — Svelte components
- `src/styles` — SCSS, mixins, themes
- `public` — static assets

### Deployment

`Dockerfile` builds with Bun and serves static output via `nginx:alpine`.

### SEO

`utils/seoConfig.ts` centralizes metadata. `src/layouts/Layout.astro` sets OpenGraph/Twitter tags and canonical URLs. `sitemap.xml` is maintained in the repo.
