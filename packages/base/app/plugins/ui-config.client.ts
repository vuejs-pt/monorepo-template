import { addCVAConfig } from 'ui'
import uiConfig from '@/ui.config'

export default defineNuxtPlugin(() => {
  for (const [key, config] of Object.entries(uiConfig)) {
    console.log();
    console.log(`adding ${key} in ui-config.client.ts`)
    addCVAConfig(key, config)
  }
})
