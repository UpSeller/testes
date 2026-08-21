import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://upseller.github.io/testes";

export default defineConfig({
  site: SITE_URL,
  base: "/testes",
  output: "static",
  integrations: [sitemap()],
  build: {
    // Inline styles pequenos para melhor LCP
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      // CSS menor
      cssMinify: "lightningcss",
    },
  },
});
