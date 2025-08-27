<script setup lang="ts">
import { useTenant } from '~/features/todo/composables/useTenant'

const { getTenantName } = useTenant()

useHead({
  title: `${getTenantName()} - Home`,
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8 max-w-2xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-foreground mb-4">
          Welcome to {{ getTenantName() }}
        </h1>
        <p class="text-lg text-muted-foreground mb-8">
          A modern multi-tenant monorepo application
        </p>
      </div>

      <!-- Navigation Card -->
      <div class="bg-card border rounded-lg p-6 shadow-sm">
        <h2 class="text-xl font-semibold mb-4">Getting Started</h2>
        <div class="space-y-4">
          <NuxtLink
            to="/todos"
            class="block p-4 bg-primary/10 hover:bg-primary/20 rounded-lg border transition-colors"
          >
            <div class="font-medium text-primary">Todo Application</div>
            <div class="text-sm text-muted-foreground">
              Manage your tasks and stay organized
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Features Info -->
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <div class="bg-card border rounded-lg p-4">
          <h3 class="font-medium mb-2">Multi-Tenant Architecture</h3>
          <p class="text-sm text-muted-foreground">
            Each tenant can have different features and configurations
          </p>
        </div>
        <div class="bg-card border rounded-lg p-4">
          <h3 class="font-medium mb-2">Shared UI Library</h3>
          <p class="text-sm text-muted-foreground">
            Consistent design system with customizable variants
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
