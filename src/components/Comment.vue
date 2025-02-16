<script setup>
  const props = defineProps({
    comment: Object
  })
</script>

<template>
  <li class="list-item">
    <div>
      <p><strong>{{ comment.name }}</strong></p>
      <small>{{ comment.body }}</small>
    </div>
  </li>
</template>
