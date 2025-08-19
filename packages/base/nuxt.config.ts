
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  $meta: { name: 'base' },
  devtools: { enabled: true },
  css: [resolve(__dirname, './app/assets/css/tailwind.css')],
  vite: {
    plugins: [tailwindcss()],
  },
})
