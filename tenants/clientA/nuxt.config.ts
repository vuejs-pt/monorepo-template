import { resolve } from 'path';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      name: 'clientA'
    }
  },
  extends: ['../../packages/base'],
  css: [resolve(__dirname, './app/assets/css/main.css')],
})
