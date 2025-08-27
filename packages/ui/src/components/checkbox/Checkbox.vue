<template>
  <Checkbox v-bind="$attrs">
    <slot />
  </Checkbox>
</template>

<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>
