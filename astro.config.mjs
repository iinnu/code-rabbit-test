import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 5070,
  },
});
