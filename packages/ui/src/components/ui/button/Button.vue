<script setup lang="ts">
import { computed } from "vue"
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { applyVariants } from "@/lib/cva-config-manager"

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  color?: ButtonVariants["color"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})

// Apply variant from all cvaConfigs to the component
const buttonVariants = computed(() => {
  const variants = applyVariants('button', { variant: props.variant, size: props.size, color: props.color })
  return variants
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants, props.class)"
  >
    <slot />
  </Primitive>
</template>
