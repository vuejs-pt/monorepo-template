<template>
  <div class="container mx-auto py-8">
    <h1 class="text-5xl font-bold text-center mb-10">{{ config.public.name }}</h1>
    <h2 class="text-3xl font-bold text-center underline mb-8">
      Hello world!
    </h2>
    <div class="flex justify-center p-4 mb-8">
      <Button>Just a button</Button>
    </div>
    <div class="flex justify-center p-4 mb-8"> 
      <Button variant="custom">Custom buttom</Button>
    </div>
    <div class="flex justify-center p-4 mb-8">
      <Button class="hover:bg-red-500">Inline class button</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ui'

const config = useRuntimeConfig()
</script>
