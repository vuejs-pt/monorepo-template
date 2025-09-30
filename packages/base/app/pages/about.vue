<template>
  <div>
    <NuxtLink to="/" class="flex items-center">
      <ArrowLeft :size="18" />
      Back to the homepage
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>
