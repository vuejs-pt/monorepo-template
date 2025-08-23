import { cva } from "class-variance-authority";

// Example: https://cva.style/docs/getting-started/variants

export const buttonVariants = cva('',
  {
    variants: {
      variant: {
        custom: 'uppercase',
      },
    },
  },
)
