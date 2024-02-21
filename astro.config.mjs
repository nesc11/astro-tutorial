import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://enchanting-pudding-775d70.netlify.app/",
  integrations: [preact()]
});