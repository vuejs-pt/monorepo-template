import { cva } from "class-variance-authority"

export default {
  button: cva('', {
    variants: {
      variant: {
        custom: 'hover:bg-blue-500',
      }
    }
  })
}
