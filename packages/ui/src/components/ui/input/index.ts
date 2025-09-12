import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { addCVAConfig } from "@/lib/cva-config-manager"

export { default as Input } from "./Input.vue"

const inputCVAConfig = cva(
  "flex h-9 w-full rounded-md border bg-background px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2.5 py-1",
        lg: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

// add CVA the config to cva config manager
addCVAConfig('input', inputCVAConfig)

export type InputVariants = VariantProps<typeof inputCVAConfig>
