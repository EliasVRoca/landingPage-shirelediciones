import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import { Global } from './global';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({ include: ['**/react/*'] })],
  base: Global.baseUrl
});
