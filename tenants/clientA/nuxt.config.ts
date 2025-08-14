import { resolve } from 'path';

export default defineNuxtConfig({
  $meta: { name: 'clientA' },
  extends: ['../../packages/base'],
  css: [resolve(__dirname, './app/assets/css/theme.css')],
})
