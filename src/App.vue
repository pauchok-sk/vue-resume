<script setup>
import { onMounted, provide, ref, shallowRef } from 'vue'
import Form from './components/Form.vue'
import Resume from './components/Resume.vue'
import Comments from './components/Comments.vue'
import { auth, provider } from './help/firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import Header from './components/Header.vue'

const contentArray = shallowRef([])
const isLogin = ref(false)
const isLoadingUser = ref(true)

const addContentArray = (element) => {
  contentArray.value = [...contentArray.value, element]
}

const login = () => {
  signInWithPopup(auth, provider)
}

const logout = () => {
  signOut(auth)
}

provide('login', login)
provide('logout', logout)
provide('isLogin', isLogin)

onMounted(async () => {
  await onAuthStateChanged(auth, (dataUser) => {
    isLoadingUser.value = false
    if (dataUser) {
      isLogin.value = true
    } else {
      isLogin.value = false
    }
  })
})
</script>

<template>
  <Header v-if="!isLoadingUser" />

  <div class="container column">
    <Form @addContentArray="addContentArray" />
    <Resume :contentArray="contentArray" />
  </div>
  <Comments />
</template>
