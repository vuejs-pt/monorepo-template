import { describe, it, expect, beforeEach } from 'vitest'
import { useTodos } from '../useTodos'

describe('useTodos', () => {
  let todoManager: ReturnType<typeof useTodos>

  beforeEach(() => {
    todoManager = useTodos({ supportCategories: true })
  })

  describe('addTodo', () => {
    it('adds a todo with text only', () => {
      todoManager.addTodo('Test todo')
      
      expect(todoManager.todos.value.length).toBe(1)
      expect(todoManager.todos.value[0]?.text).toBe('Test todo')
      expect(todoManager.todos.value[0]?.completed).toBe(false)
      expect(todoManager.todos.value[0]?.id).toBeDefined()
    })

    it('adds a todo with category when categories are supported', () => {
      todoManager.addTodo('Test todo', 'work')
      
      expect(todoManager.todos.value[0]?.category).toBe('work')
    })

    it('does not add category when categories are not supported', () => {
      const todoManagerNoCategories = useTodos({ supportCategories: false })
      todoManagerNoCategories.addTodo('Test todo', 'work')
      
      expect(todoManagerNoCategories.todos.value[0]?.category).toBeUndefined()
    })

    it('trims whitespace from text', () => {
      todoManager.addTodo('  Test todo  ')
      
      expect(todoManager.todos.value[0]?.text).toBe('Test todo')
    })

    it('does not add empty todos', () => {
      todoManager.addTodo('')
      todoManager.addTodo('   ')
      
      expect(todoManager.todos.value.length).toBe(0)
    })
  })

  describe('toggleTodo', () => {
    it('toggles todo completion status', () => {
      todoManager.addTodo('Test todo')
      const todoId = todoManager.todos.value[0]?.id
      
      todoManager.toggleTodo(todoId)
      expect(todoManager.todos.value[0]?.completed).toBe(true)
      
      todoManager.toggleTodo(todoId)
      expect(todoManager.todos.value[0]?.completed).toBe(false)
    })

    it('does nothing for non-existent todo', () => {
      todoManager.addTodo('Test todo')
      const originalState = todoManager.todos.value[0]?.completed
      
      todoManager.toggleTodo('non-existent-id')
      expect(todoManager.todos.value[0]?.completed).toBe(originalState)
    })
  })

  describe('deleteTodo', () => {
    it('removes todo from list', () => {
      todoManager.addTodo('Test todo')
      const todoId = todoManager.todos.value[0]?.id
      
      todoManager.deleteTodo(todoId)
      expect(todoManager.todos.value.length).toBe(0)
    })

    it('does nothing for non-existent todo', () => {
      todoManager.addTodo('Test todo')
      
      todoManager.deleteTodo('non-existent-id')
      expect(todoManager.todos.value.length).toBe(1)
    })
  })

  describe('computed properties', () => {
    beforeEach(() => {
      todoManager.addTodo('Todo 1')
      todoManager.addTodo('Todo 2')
      todoManager.addTodo('Todo 3')
      todoManager.toggleTodo(todoManager.todos.value[0]?.id) // Complete first todo
    })

    it('calculates completed todos correctly', () => {
      expect(todoManager.completedTodos.value.length).toBe(1)
      expect(todoManager.completedCount.value).toBe(1)
    })

    it('calculates pending todos correctly', () => {
      expect(todoManager.pendingTodos.value.length).toBe(2)
      expect(todoManager.pendingCount.value).toBe(2)
    })

    it('calculates total count correctly', () => {
      expect(todoManager.totalCount.value).toBe(3)
    })
  })
})
