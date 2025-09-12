import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../TodoItem.vue'
import type { Todo } from '../TodoItem.vue'

// Mock the UI components
vi.mock('ui', () => {
  return {
    Button: {
      name: 'Button',
      template: '<button><slot /></button>',
      props: ['variant', 'size', 'disabled']
    },
    Checkbox: {
      name: 'Checkbox',
      template: '<button role="checkbox" :aria-checked="checked" @click="$emit(\'update:checked\', !checked)"><slot /></button>',
      props: ['checked', 'disabled'],
      emits: ['update:checked', 'change']
    },
    Badge: {
      name: 'Badge',
      template: '<div data-slot="badge"><slot /></div>',
      props: ['variant', 'size']
    }
  }
})

const mockTodo: Todo = {
  id: '1',
  text: 'Test todo',
  completed: false,
  category: 'work'
}

describe('TodoItem', () => {
  it('renders todo text', () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: mockTodo
      }
    })
    
    expect(wrapper.text()).toContain('Test todo')
  })

  it('shows category badge when showCategory is true', () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: mockTodo,
        showCategory: true
      }
    })
    
    expect(wrapper.text()).toContain('work')
  })

  it('hides category badge when showCategory is false', () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: mockTodo,
        showCategory: false
      }
    })
    
    expect(wrapper.text()).not.toContain('work')
  })

  it('applies completed styles when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true }
    const wrapper = mount(TodoItem, {
      props: {
        todo: completedTodo
      }
    })
    
    const textElement = wrapper.find('.line-through')
    expect(textElement.exists()).toBe(true)
  })

  it('emits toggle event when checkbox is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: mockTodo
      }
    })
    
    const checkbox = wrapper.find('[role="checkbox"]')
    await checkbox.trigger('click')
    
    expect(wrapper.emitted('toggle')).toBeTruthy()
    expect(wrapper.emitted('toggle')![0]).toEqual(['1'])
  })

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: mockTodo
      }
    })
    
    const deleteButton = wrapper.findAll('button')[1] // Second button (delete)
    await deleteButton.trigger('click')
    
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')![0]).toEqual(['1'])
  })

  it('does not show category badge when todo has no category', () => {
    const todoWithoutCategory = { ...mockTodo, category: undefined }
    const wrapper = mount(TodoItem, {
      props: {
        todo: todoWithoutCategory,
        showCategory: true
      }
    })
    
    expect(wrapper.find('[data-slot="badge"]').exists()).toBe(false)
  })
})
