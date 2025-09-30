<template>
  <div>
    <NuxtLink to="/" class="flex items-center">
      <ArrowLeft :size="18" />
      Back to the homepage
    </NuxtLink>
    <h1 class="mb-10 text-center">About us ClientB</h1>
    <div class="flex justify-center mb-8">
      <Button variant="default">Default Variant</Button>
    </div>
    <div class="flex justify-center mb-8">
      <Button variant="custom">Custom Variant</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { Button } from 'ui'
</script>
