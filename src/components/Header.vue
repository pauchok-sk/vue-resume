<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { inject, onMounted, ref } from 'vue';

const logout = inject("logout");
const login = inject("login");

const currentUser = ref(null);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (dataUser) => {
    currentUser.value = dataUser
  })
})

</script>

<template>
  <div class="card right">
    <div v-if="currentUser" class="flex">
      <h3>{{ currentUser.displayName }}</h3>
      <button @click="logout" class="btn primary">Выйти</button>
    </div>
    <button v-else @click="login" class="btn primary">Войти</button>
  </div>
</template>