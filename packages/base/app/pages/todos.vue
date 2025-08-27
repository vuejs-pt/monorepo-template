<script setup lang="ts">
import TodoInput from '~/features/todo/TodoInput.vue'
import TodoList from '~/features/todo/TodoList.vue'
import { useTodos } from '~/features/todo/composables/useTodos'
import { useTenant } from '~/features/todo/composables/useTenant'

const { hasFeature, getTenantName } = useTenant()
const supportCategories = hasFeature('todoCategories')

const {
  todos,
  addTodo,
  deleteTodo,
} = useTodos({ supportCategories })

const handleSubmit = (data: { text: string; category?: string }) => {
  addTodo(data.text, data.category)
}

useHead({
  title: `${getTenantName()} - Todo App`,
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8 max-w-2xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-foreground mb-2">
          {{ getTenantName() }} Todo App
        </h1>
        <p class="text-muted-foreground">
          Stay organized and get things done
        </p>
      </div>

      <!-- Todo Input -->
      <div class="mb-8">
        <TodoInput
          :show-category-input="supportCategories"
          @submit="handleSubmit"
        />
      </div>

      <!-- Todo List -->
      <TodoList
        :todos="todos"
        :show-category="supportCategories"
        @delete="deleteTodo"
      />

      <!-- Feature Info -->
      <div class="mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
        <div class="font-medium mb-1">Tenant Features</div>
        <div>Category Support: {{ supportCategories ? 'Enabled' : 'Disabled' }}</div>
      </div>
    </div>
  </div>
</template>
