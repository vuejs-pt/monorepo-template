<template>
  <Input v-bind="$attrs">
    <slot />
  </Input>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>
