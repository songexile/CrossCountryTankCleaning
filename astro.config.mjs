import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ccwtc.co.nz/',
  integrations: [tailwind(), react(), icon(), sitemap()],
  redirects: {
    "/old-page": "/new-page"
  }
});