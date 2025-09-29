// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Final website URL, used for sitemap and other SEO purposes
  site: "https://gtnhwebsitetest.github.io",
  output: "static",
  integrations: [icon({
    include: {
      // Only include the icons we need for bundle optimization
      ic: ["baseline-discord"],
      mdi: ["github"],
      "material-symbols": ["download-rounded"],
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
