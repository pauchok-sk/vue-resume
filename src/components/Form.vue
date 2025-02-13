<script setup>
import elements from '@/help/elements'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

const isClick = ref(false)
const emit = defineEmits(['addContentArray'])

const keys = Object.keys(elements)

const updateClick = () => (isClick.value = true)

const schema = toTypedSchema(
  yup.object({
    content: yup.string().required('Это обязательное поле').min(4, 'Введите минимум 4 символа'),
    keyElement: yup.string().default(keys[0]),
  }),
)

const { defineField, handleSubmit, handleReset, errors, meta } = useForm({
  validationSchema: schema,
})

const [content] = defineField('content')
const [keyElement] = defineField('keyElement')

const handlerCreate = handleSubmit(() => {
  const element = {
    content: content.value,
    component: elements[keyElement.value].component,
    title: elements[keyElement.value].title,
  }

  emit('addContentArray', element)

  handleReset();
  isClick.value = false
})
</script>

<template>
  <form class="card card-w30" @submit.prevent="handlerCreate">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select v-model="keyElement" id="type">
        <option v-for="key in keys" :key="elements[key].title" :value="key">
          {{ elements[key].title }}
        </option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="content" id="value" rows="3"></textarea>
      <span v-if="errors.content && isClick" style="color: red">{{ errors.content }}</span>
    </div>

    <button class="btn primary" @click="updateClick">Добавить</button>
  </form>
</template>
