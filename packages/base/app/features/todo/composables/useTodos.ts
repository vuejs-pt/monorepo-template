import { ref, readonly } from 'vue'
import type { Todo } from '../TodoList.vue'

export interface UseTodosOptions {
  supportCategories?: boolean
}

export function useTodos(options: UseTodosOptions = {}) {
  const todos = ref<Todo[]>([])

  // Generate unique ID for new todos
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36)
  }

  // Add a new todo
  const addTodo = (text: string, category?: string) => {
    if (!text.trim()) return

    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
    }

    // Only add category if supported and provided
    if (options.supportCategories && category?.trim()) {
      newTodo.category = category.trim()
    }
    todos.value.push(newTodo)
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex(t => t.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  return {
    // State
    todos: readonly(todos),
    
    // Actions
    addTodo,
    deleteTodo,
   
  }
}
