<script setup>
import { getAuth } from 'firebase/auth';
import { inject } from 'vue';

const logout = inject("logout");
const login = inject("login");
const isLogin = inject("isLogin");

const auth = getAuth();
const currentUser = auth.currentUser;

</script>

<template>
  <div class="card right">
    <div v-if="isLogin" class="flex">
      <h3>{{ currentUser.displayName }}</h3>
      <button @click="logout" class="btn primary">Выйти</button>
    </div>
    <button v-else @click="login" class="btn primary">Войти</button>
  </div>
</template>