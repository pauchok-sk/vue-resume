<script setup>
import { shallowRef } from 'vue'
import Form from './components/Form.vue'
import Resume from './components/Resume.vue'

const contentArray = shallowRef([])

const addContentArray = (element) => {
  contentArray.value = [...contentArray.value, element]
}
</script>

<template>
  <div class="container column">
    <Form @addContentArray="addContentArray" />
    <Resume :contentArray="contentArray" />
  </div>
</template>
