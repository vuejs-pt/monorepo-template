
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  runtimeConfig: {
    public: { name: 'base' }
  },
  devtools: { enabled: true },
  css: [resolve(__dirname, './app/assets/css/main.css')],
  plugins: [
    resolve(__dirname, './app/plugins/ui-config.client.ts')
  ],
  alias: {
    '@': resolve('./'),
    '~': resolve('./'),
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
