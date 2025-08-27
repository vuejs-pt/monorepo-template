<script setup lang="ts">
import { computed } from "vue"
import { Checkbox, Button, Badge } from "ui"

export interface Todo {
  id: string
  text: string
  completed: boolean
  category?: string
}

interface Props {
  todo: Todo
  showCategory?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  toggle: [id: string]
  delete: [id: string]
}>()

const todoItemClasses = computed(() => {
  return props.todo.completed
    ? "flex items-center gap-3 p-3 rounded-lg border bg-muted/50 transition-all"
    : "flex items-center gap-3 p-3 rounded-lg border bg-background transition-all hover:bg-muted/30"
})

const textClasses = computed(() => {
  return props.todo.completed
    ? "flex-1 line-through text-muted-foreground"
    : "flex-1 text-foreground"
})
</script>

<template>
  <div :class="todoItemClasses">
    <Checkbox
      :checked="todo.completed"
      @update:checked="() => emit('toggle', todo.id)"
    />
    
    <div class="flex-1 min-w-0">
      <div :class="textClasses">
        {{ todo.text }}
      </div>
      <Badge
        v-if="showCategory && todo.category"
        variant="secondary"
        size="sm"
        class="mt-1"
      >
        {{ todo.category }}
      </Badge>
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
</template>
