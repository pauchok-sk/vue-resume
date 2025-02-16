<script setup>

const props = defineProps({
  content: String
})

</script>

<template>
  <div class="loader-text">{{ props.content }}</div>
</template>