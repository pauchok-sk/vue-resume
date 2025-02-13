<script setup>
const props = defineProps({
  content: String,
})
</script>

<template>
  <h3>{{ props.content }}</h3>
</template>