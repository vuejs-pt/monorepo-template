
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      name: 'base'
    }
  },
  devtools: { enabled: true },
  css: [resolve(__dirname, './app/assets/css/main.css')],
  vite: {
    plugins: [tailwindcss()],
  },
})
