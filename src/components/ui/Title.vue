<script setup>
  const props = defineProps({
    content: String
  })
</script>

<template>
  <h2>
    {{ props.content }}
  </h2>
</template>