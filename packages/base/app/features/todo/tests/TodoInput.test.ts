import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoInput from '../TodoInput.vue'

// Mock the UI components
vi.mock('ui', () => {
  return {
    Button: {
      name: 'Button',
      template: '<button><slot /></button>',
      props: ['variant', 'size', 'disabled']
    },
    Input: {
      name: 'Input',
      template: '<input :value="value" :placeholder="placeholder" @input="$emit(\'update:value\', $event.target.value)" />',
      props: ['value', 'placeholder', 'disabled'],
      emits: ['update:value', 'input', 'change', 'focus', 'blur']
    }
  }
})

describe('TodoInput', () => {
  it('renders with default props', () => {
    const wrapper = mount(TodoInput)
    
    expect(wrapper.find('input').attributes('placeholder')).toBe('Add a new todo...')
    expect(wrapper.find('button').text()).toBe('Add')
    expect(wrapper.find('input[placeholder="Category (optional)"]').exists()).toBe(false)
  })

  it('shows category input when showCategoryInput is true', () => {
    const wrapper = mount(TodoInput, {
      props: {
        showCategoryInput: true
      }
    })
    
    expect(wrapper.find('input[placeholder="Category (optional)"]').exists()).toBe(true)
  })

  it('emits submit event with text when button is clicked', async () => {
    const wrapper = mount(TodoInput)
    const input = wrapper.find('input')
    const button = wrapper.find('button')
    
    await input.setValue('Test todo')
    await button.trigger('click')
    
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')![0]).toEqual([{ text: 'Test todo', category: undefined }])
  })

  it('emits submit event with text and category when both are provided', async () => {
    const wrapper = mount(TodoInput, {
      props: {
        showCategoryInput: true
      }
    })
    
    const textInput = wrapper.find('input')
    const categoryInput = wrapper.findAll('input')[1]
    const button = wrapper.find('button')
    
    await textInput.setValue('Test todo')
    await categoryInput.setValue('work')
    await button.trigger('click')
    
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')![0]).toEqual([{ text: 'Test todo', category: 'work' }])
  })

  it('clears inputs after submission', async () => {
    const wrapper = mount(TodoInput, {
      props: {
        showCategoryInput: true
      }
    })
    
    const textInput = wrapper.find('input')
    const categoryInput = wrapper.findAll('input')[1]
    const button = wrapper.find('button')
    
    await textInput.setValue('Test todo')
    await categoryInput.setValue('work')
    await button.trigger('click')
    
    expect((textInput.element as HTMLInputElement).value).toBe('')
    expect((categoryInput.element as HTMLInputElement).value).toBe('')
  })

  it('does not emit when text is empty', async () => {
    const wrapper = mount(TodoInput)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.emitted('submit')).toBeFalsy()
  })

  it('trims whitespace from inputs', async () => {
    const wrapper = mount(TodoInput, {
      props: {
        showCategoryInput: true
      }
    })
    
    const textInput = wrapper.find('input')
    const categoryInput = wrapper.findAll('input')[1]
    const button = wrapper.find('button')
    
    await textInput.setValue('  Test todo  ')
    await categoryInput.setValue('  work  ')
    await button.trigger('click')
    
    expect(wrapper.emitted('submit')![0]).toEqual([{ text: 'Test todo', category: 'work' }])
  })

  it('emits submit on Enter key press', async () => {
    const wrapper = mount(TodoInput)
    const input = wrapper.find('input')
    
    await input.setValue('Test todo')
    await input.trigger('keydown', { key: 'Enter' })
    
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')![0]).toEqual([{ text: 'Test todo', category: undefined }])
  })
})
