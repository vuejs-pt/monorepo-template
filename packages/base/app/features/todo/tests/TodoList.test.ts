import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import type { Todo } from '../TodoItem.vue'

// Mock TodoItem component
vi.mock('./TodoItem.vue', () => ({
  default: {
    name: 'TodoItem',
    template: '<div class="todo-item">{{ todo.text }}</div>',
    props: ['todo', 'showCategory'],
    emits: ['toggle', 'delete']
  }
}))

const mockTodos: Todo[] = [
  {
    id: '1',
    text: 'First todo',
    completed: false,
    category: 'work'
  },
  {
    id: '2',
    text: 'Second todo',
    completed: true,
    category: 'personal'
  }
]

describe('TodoList', () => {
  it('renders list of todos', () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: mockTodos
      }
    })
    
    expect(wrapper.text()).toContain('First todo')
    expect(wrapper.text()).toContain('Second todo')
  })

  it('shows empty message when no todos', () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: [],
        emptyMessage: 'No todos found'
      }
    })
    
    expect(wrapper.text()).toContain('No todos found')
  })

  it('uses default empty message when not provided', () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: []
      }
    })
    
    expect(wrapper.text()).toContain('No todos yet. Add one above!')
  })

  it('forwards toggle event from todo items', async () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: mockTodos
      }
    })
    
    const firstTodoItem = wrapper.findComponent({ name: 'TodoItem' })
    await firstTodoItem.vm.$emit('toggle', '1')
    
    expect(wrapper.emitted('toggle')).toBeTruthy()
    expect(wrapper.emitted('toggle')![0]).toEqual(['1'])
  })

  it('forwards delete event from todo items', async () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: mockTodos
      }
    })
    
    const firstTodoItem = wrapper.findComponent({ name: 'TodoItem' })
    await firstTodoItem.vm.$emit('delete', '1')
    
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')![0]).toEqual(['1'])
  })

  it('passes showCategory prop to todo items', () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: mockTodos,
        showCategory: true
      }
    })
    
    const todoItems = wrapper.findAllComponents({ name: 'TodoItem' })
    todoItems.forEach(item => {
      expect(item.props('showCategory')).toBe(true)
    })
  })
})
