<template>
  <Button :class="cn(buttonVariants, props.class)">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button.config'

const props = defineProps<{
  class?: String
}>()
</script>
