<script setup>
const props = defineProps({
  content: String,
})
</script>

<template>
  <div class="avatar">
    <img :src="props.content" />
  </div>
</template>
