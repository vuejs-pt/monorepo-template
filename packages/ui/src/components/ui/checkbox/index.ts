import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { addCVAConfig } from "@/lib/cva-config-manager"

export { default as Checkbox } from "./Checkbox.vue"

const checkboxCVAConfig = cva(
  "peer inline-flex size-4 shrink-0 rounded-sm border shadow-xs transition-all focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=checked]:border-primary",
  {
    variants: {
      size: {
        default: "size-4",
        sm: "size-3",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

// add CVA the config to cva config manager
addCVAConfig('checkbox', checkboxCVAConfig)

export type CheckboxVariants = VariantProps<typeof checkboxCVAConfig>
