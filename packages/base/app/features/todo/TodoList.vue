<script setup lang="ts">
import TodoItem, { type Todo } from "./TodoItem.vue"

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
  toggle: [id: string]
  delete: [id: string]
}>()
</script>

<template>
  <div class="space-y-2">
    <div v-if="todos.length === 0" class="text-center py-8 text-muted-foreground">
      {{ emptyMessage }}
    </div>
    
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :show-category="showCategory"
      @toggle="emit('toggle', $event)"
      @delete="emit('delete', $event)"
    />
  </div>
</template>
