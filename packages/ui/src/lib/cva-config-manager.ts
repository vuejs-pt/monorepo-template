import { cva } from "class-variance-authority";
import { cn } from "./utils"

type CVAFn = ReturnType<typeof cva> & {
  variants?: Record<string, any>
  defaultVariants?: Record<string, any>
  compoundVariants?: Array<Record<string, any>>
}

// Helper function to merge CVA configs using cn utility
function mergeCVA(a: CVAFn, b: CVAFn) {
  return cva(cn(a(), b()), {
    variants: {
      ...(a.variants ?? {}),
      ...(b.variants ?? {}),
    },
    compoundVariants: [
      ...(a.compoundVariants ?? []),
      ...(b.compoundVariants ?? []),
    ],
    defaultVariants: {
      ...(a.defaultVariants ?? {}),
      ...(b.defaultVariants ?? {}),
    },
  });
}

const cvaConfigs: Record<string, CVAFn> = {}

// Add CVA configs
export function addCVAConfigs(cvaConfigsOverrides: CVAFn) {
  Object.assign(cvaConfigs, cvaConfigsOverrides)
}

// Merge CVA configs
export function mergeCVAConfig(key: string, cvaConfig: CVAFn) {
  const base = cvaConfigs[key]
  if (!base) {
    console.warn(`No base CVA config found for: ${key}`)
    return cvaConfig
  }
  
  if (!cvaConfig) return base
  
  return mergeCVA(base, cvaConfig)
}
