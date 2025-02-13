<script setup>
  const props = defineProps({
    content: String
  })
</script>

<template>
  <h1>
    {{ props.content }}
  </h1>
</template>
