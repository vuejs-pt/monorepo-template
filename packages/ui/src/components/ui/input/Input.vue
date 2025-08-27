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
  type?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "input",
  type: "text",
})

const emit = defineEmits<{
  "update:value": [value: string]
  input: [event: Event]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

// Apply variant from all cvaConfigs to the component
const inputVariants = computed(() => {
  const variants = applyVariants('input', {})
  return variants
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("update:value", target.value)
  emit("input", event)
}
</script>

<template>
  <Primitive
    data-slot="input"
    :as="as"
    :as-child="asChild"
    :class="cn(inputVariants, props.class)"
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :value="value"
    @input="handleInput"
    @change="emit('change', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  >
    <slot />
  </Primitive>
</template>
