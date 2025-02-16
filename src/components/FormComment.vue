<script setup>
import { toTypedSchema } from '@vee-validate/yup'
import TitleMin from './ui/TitleMin.vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { inject, onMounted, ref } from 'vue'
import axios from 'axios'
import { getAuth } from 'firebase/auth'

const isClickForm = ref(false)

const emit = defineEmits(['getComments'])

const schema = toTypedSchema(
  yup.object({
    body: yup
      .string()
      .required('Это обязательное поле')
      .min(8, 'Это поле должно содержать минимум 8 символов'),
  }),
)

const { handleReset, handleSubmit } = useForm({
  validationSchema: schema,
})

const isLogin = inject('isLogin')
const login = inject('login')

const { value: body, errorMessage: errorBody } = useField('body')

const onSubmit = handleSubmit(async (values) => {
  const auth = getAuth();
  const currentUser = auth.currentUser
  const body = {
    name: currentUser.displayName,
    ...values
  }

  await axios
    .post(
      'https://vue-resume-190da-default-rtdb.europe-west1.firebasedatabase.app/comments.json',
      body,
    )
    .then(() => {})
    .finally(() => {
      handleReset()
      emit('getComments')
      isClickForm.value = false
    })
})

</script>

<template>
  <div class="container">
    <div v-if="isLogin" class="card">
      <TitleMin content="Оставить комментарий" />
      <form @submit="onSubmit">
        <div class="form-control">
          <label for="value">Комментарий</label>
          <textarea rows="5" v-model="body"></textarea>
          <span v-if="errorBody && isClickForm" style="color: red">{{ errorBody }}</span>
        </div>
        <button @click="() => (isClickForm = true)" class="btn primary">Отправить</button>
      </form>
    </div>
    <div v-else class="card flex-column-center">
      <h3>Чтобы оставить комментарий, вы должны войти</h3>
      <button @click="login" class="btn primary">Войти</button>
    </div>
  </div>
</template>
