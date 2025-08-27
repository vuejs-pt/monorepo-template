import { resolve } from 'path';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      name: 'clientB',
    },
  },
  extends: ['../../packages/base'],
  css: [resolve(__dirname, './app/assets/css/main.css')],
})
