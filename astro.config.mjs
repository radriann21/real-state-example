// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces'
    }, {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter'
    },     {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono'
    }, {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-body'
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
