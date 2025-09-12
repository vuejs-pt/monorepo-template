<template>
  <Badge v-bind="$attrs">
    <slot />
  </Badge>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>
