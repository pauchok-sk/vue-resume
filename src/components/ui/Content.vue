<script setup>
const props = defineProps({
  content: String,
})
</script>

<template>
  <p>
    {{ props.content }}
  </p>
</template>
