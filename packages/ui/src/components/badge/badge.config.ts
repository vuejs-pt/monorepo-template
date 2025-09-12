import { cva } from "class-variance-authority";
import { addCVAConfig } from "@/lib/cva-config-manager";

// Example: https://cva.style/docs/getting-started/variants
export const badgeCVAConfig = cva('',
  {
    variants: {
      variant: {
        custom: 'font-bold',
      },
    },
  },
)

// Merge the CVA config with the CVA config provided externally
console.log();
console.log('adding badgeCVAConfig in components/badge', badgeCVAConfig)
export const badgeVariants = addCVAConfig('badge', badgeCVAConfig)
