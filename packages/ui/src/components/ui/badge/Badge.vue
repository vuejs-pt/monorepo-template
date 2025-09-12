<script setup lang="ts">
import { computed } from "vue"
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { BadgeVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { applyVariants } from "@/lib/cva-config-manager"

interface Props extends PrimitiveProps {
  variant?: BadgeVariants["variant"]
  size?: BadgeVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})

// Apply variant from all cvaConfigs to the component
const badgeVariants = computed(() => {
  const variants = applyVariants('badge', { variant: props.variant, size: props.size })
  return variants
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :as="as"
    :as-child="asChild"
    :class="cn(badgeVariants, props.class)"
  >
    <slot />
  </Primitive>
</template>
