import { cva } from "class-variance-authority";
import { addCVAConfig } from "@/lib/cva-config-manager";

// Example: https://cva.style/docs/getting-started/variants
export const inputCVAConfig = cva('',
  {
    variants: {
      variant: {
        custom: 'border-2',
        search: 'pl-8',
      },
      size: {
        xl: 'h-12 text-lg',
      },
    },
  },
)

// Merge the CVA config with the CVA config provided externally
console.log();
console.log('adding inputCVAConfig in components/input', inputCVAConfig)
export const inputVariants = addCVAConfig('input', inputCVAConfig)
