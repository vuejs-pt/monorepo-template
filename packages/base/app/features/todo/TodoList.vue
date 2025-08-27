<script setup lang="ts">
import { Button } from "ui"

export interface Todo {
  id: string
  text: string
  category?: string
}

interface Props {
  todos: readonly Todo[]
  showCategory?: boolean
  emptyMessage?: string
}

withDefaults(defineProps<Props>(), {
  emptyMessage: "No todos yet. Add one above!",
  showCategory: false,
})

const emit = defineEmits<{
  delete: [id: string]
}>()

</script>

<template>
  <div class="space-y-2">
    <div v-if="todos.length === 0" class="text-center py-8 text-muted-foreground">
      {{ emptyMessage }}
    </div>
    
    <div 
      v-for="todo in todos" 
      :key="todo.id"
      class="flex items-center gap-3 p-3 rounded-lg border bg-background transition-all hover:bg-muted/30"
    >
      
      <div class="flex-1 min-w-0">
        <div class="flex-1 text-foreground">
          {{ todo.text }}
        </div>
        {{ todo.category }}
      </div>
      
      <Button
        variant="destructive"
        size="sm"
        @click="emit('delete', todo.id)"
        class="opacity-60 hover:opacity-100"
      >
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </Button>
    </div>
  </div>
</template>
