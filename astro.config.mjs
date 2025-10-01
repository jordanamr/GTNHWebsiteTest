// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Final website URL, used for sitemap and other SEO purposes
  site: "https://gtnh-test.arenareturns.com",
  output: "static",
  integrations: [icon({
    include: {
      // Only include the icons we need for bundle optimization
      ic: ["baseline-discord"],
      mdi: ["github", "arrow-left-bold", "arrow-right-bold", "open-in-new", "check-circle", "alert-circle-outline", "headset", "chevron-down", "calendar", "server", "laptop"],
      "material-symbols": ["download-rounded", "folder-zip-outline"],
      tabler: ["scale-outline", "jump-rope", "color-picker", "trophy", "brand-discord"],
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
