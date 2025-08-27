<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <NuxtLink to="/" class="text-xl font-semibold text-foreground">
            {{ config.public.name }}
          </NuxtLink>
          <div class="flex gap-4">
            <NuxtLink 
              to="/" 
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              active-class="text-foreground font-medium"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/todos" 
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              active-class="text-foreground font-medium"
            >
              Todos
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>