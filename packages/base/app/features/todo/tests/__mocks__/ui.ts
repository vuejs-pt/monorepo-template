// Mock UI components for testing
export const Button = {
  name: 'Button',
  template: '<button><slot /></button>',
  props: ['variant', 'size', 'disabled']
}

export const Input = {
  name: 'Input',
  template: '<input :value="value" :placeholder="placeholder" @input="$emit(\'update:value\', $event.target.value)" />',
  props: ['value', 'placeholder', 'disabled'],
  emits: ['update:value', 'input', 'change', 'focus', 'blur']
}

export const Checkbox = {
  name: 'Checkbox',
  template: '<button role="checkbox" :aria-checked="checked" @click="$emit(\'update:checked\', !checked)"><slot /></button>',
  props: ['checked', 'disabled'],
  emits: ['update:checked', 'change']
}

export const Badge = {
  name: 'Badge',
  template: '<div data-slot="badge"><slot /></div>',
  props: ['variant', 'size']
}
