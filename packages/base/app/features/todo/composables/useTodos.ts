import { ref, computed, readonly } from 'vue'
import type { Todo } from '../TodoItem.vue'

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
      completed: false,
    }

    // Only add category if supported and provided
    if (options.supportCategories && category?.trim()) {
      newTodo.category = category.trim()
    }

    todos.value.push(newTodo)
  }

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex(t => t.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  const completedTodos = computed(() => 
    todos.value.filter(todo => todo.completed)
  )

  const pendingTodos = computed(() => 
    todos.value.filter(todo => !todo.completed)
  )

  const totalCount = computed(() => todos.value.length)
  const completedCount = computed(() => completedTodos.value.length)
  const pendingCount = computed(() => pendingTodos.value.length)

  // Get unique categories (only if categories are supported)
  const categories = computed(() => {
    if (!options.supportCategories) return []
    
    const categorySet = new Set<string>()
    todos.value.forEach(todo => {
      if (todo.category) {
        categorySet.add(todo.category)
      }
    })
    return Array.from(categorySet).sort()
  })


  return {
    // State
    todos: readonly(todos),
    
    // Actions
    addTodo,
    toggleTodo,
    deleteTodo,
    
    // Computed
    completedTodos,
    pendingTodos,
    totalCount,
    completedCount,
    pendingCount,
    categories,
   
  }
}
