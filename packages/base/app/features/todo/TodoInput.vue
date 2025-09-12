<script setup lang="ts">
import { ref } from "vue"
import { Input, Button } from "ui"

interface Props {
  placeholder?: string
  buttonText?: string
  disabled?: boolean
  showCategoryInput?: boolean
  categoryPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Add a new todo...",
  buttonText: "Add",
  categoryPlaceholder: "Category (optional)",
  disabled: false,
  showCategoryInput: false,
})

const emit = defineEmits<{
  submit: [data: { text: string; category?: string }]
}>()

const todoText = ref("")
const category = ref("")

const handleSubmit = () => {
  if (todoText.value.trim()) {
    const submitData: { text: string; category?: string } = {
      text: todoText.value.trim(),
    }

    if (props.showCategoryInput && category.value.trim()) {
      submitData.category = category.value.trim()
    }

    emit("submit", submitData)
    
    todoText.value = ""
    category.value = ""
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleSubmit()
  }
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-2">
      <Input
        v-model:value="todoText"
        :placeholder="placeholder"
        :disabled="disabled"
        @keydown="handleKeydown"
        class="flex-1"
      />
      <Button
        @click="handleSubmit"
        :disabled="disabled || !todoText.trim()"
      >
        {{ buttonText }}
      </Button>
    </div>
    
    <Input
      v-if="showCategoryInput"
      v-model:value="category"
      :placeholder="categoryPlaceholder"
      :disabled="disabled"
      @keydown="handleKeydown"
      class="w-full"
    />
  </div>
</template>
