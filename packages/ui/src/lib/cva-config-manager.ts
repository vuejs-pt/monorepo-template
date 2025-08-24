import { cva } from "class-variance-authority";
import { cn } from "./utils"

type CVAFn = ReturnType<typeof cva>

const cvaConfigs: Record<string, CVAFn[]> = {}

// Add a CVA config to the list for a specific component
export function addCVAConfig(component: string, cvaConfig: CVAFn) {
  if (!cvaConfigs[component]) {
    cvaConfigs[component] = []
  }
  cvaConfigs[component].push(cvaConfig)
}

export function clearAllCVAConfigs() {
  Object.keys(cvaConfigs).forEach(key => {
    cvaConfigs[key] = []
  })
}


// Apply variants to all CVA functions for a component and merge the results with cn utility
export function applyVariants(component: string, variants?: Record<string, any>) {
  const componentCVAconfigs = cvaConfigs[component]
  
  if (!componentCVAconfigs || componentCVAconfigs.length === 0) {
    return ''
  }
  
  // Apply variants to each CVA function and collect the results
  const classResults = componentCVAconfigs
    .map(cvaComponentConfig => cvaComponentConfig(variants))
  
  // Merge all class results, the later applied classes take priority and override earlier ones
  return cn(...classResults)
}
