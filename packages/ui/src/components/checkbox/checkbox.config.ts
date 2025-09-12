import { cva } from "class-variance-authority";
import { addCVAConfig } from "@/lib/cva-config-manager";

// Example: https://cva.style/docs/getting-started/variants
export const checkboxCVAConfig = cva('',
  {
    variants: {
      variant: {
        custom: 'rounded-full',
      },
      size: {
        xl: 'size-6',
      },
    },
  },
)

// Merge the CVA config with the CVA config provided externally
console.log();
console.log('adding checkboxCVAConfig in components/checkbox', checkboxCVAConfig)
export const checkboxVariants = addCVAConfig('checkbox', checkboxCVAConfig)
