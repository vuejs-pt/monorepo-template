<template>
  <div>
    <NuxtLink to="/" class="flex items-center">
      <ArrowLeft :size="18" />
      Back to the homepage
    </NuxtLink>
    <h1 class="mt-10 text-center">About us ClientA</h1>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>
