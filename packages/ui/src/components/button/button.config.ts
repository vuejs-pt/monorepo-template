import { cva } from "class-variance-authority";
import { addCVAConfig } from "@/lib/cva-config-manager";

// Example: https://cva.style/docs/getting-started/variants
export const buttonCVAConfig = cva('',
  {
    variants: {
      variant: {
        custom: 'uppercase',
      },
    },
  },
)

// Merge the CVA config with the CVA config provided externally
console.log();
console.log('adding buttonCVAConfig in components/button', buttonCVAConfig)
export const buttonVariants = addCVAConfig('button', buttonCVAConfig)
