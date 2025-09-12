<script setup lang="ts">
import { computed } from "vue"
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { applyVariants } from "@/lib/cva-config-manager"

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
  id?: string
  checked?: boolean
  disabled?: boolean
  required?: boolean
  indeterminate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  type: "button",
})

const emit = defineEmits<{
  "update:checked": [checked: boolean]
  change: [event: Event]
}>()

// Apply variant from all cvaConfigs to the component
const checkboxVariants = computed(() => {
  const variants = applyVariants('checkbox', {})
  return variants
})

const handleClick = () => {
  if (!props.disabled) {
    const newChecked = !props.checked
    emit("update:checked", newChecked)
    emit("change", new Event('change'))
  }
}
</script>

<template>
  <Primitive
    data-slot="checkbox"
    :as="as"
    :as-child="asChild"
    :class="cn(checkboxVariants, props.class)"
    :id="id"
    :disabled="disabled"
    :aria-checked="checked"
    :aria-required="required"
    role="checkbox"
    @click="handleClick"
  >
    <svg
      v-if="checked"
      class="size-4 text-primary-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <svg
      v-else-if="indeterminate"
      class="size-4 text-primary-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  </Primitive>
</template>
