<template>
  <h1 class="text-5xl font-bold text-center mb-10">{{ config.public.name }}</h1>
  <h2 class="text-3xl font-bold text-center underline">
    Hello world!
  </h2>
  <div class="flex justify-center p-4">
    <Button class="hover:bg-red-500">Click me</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ui'

const config = useRuntimeConfig()
</script>
