import { addCVAConfigs } from 'ui'
import uiConfig from '../ui.config'

export default defineNuxtPlugin(() => {
  addCVAConfigs(uiConfig)
})
