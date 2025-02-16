<script setup>

const props = defineProps({
  pages: Number,
  currentPage: Number
})

</script>

<template>
  <ul class="pagination">
    <li
      @click="$emit('setCurrentPage', page)"
      v-for="page in props.pages"
      :key="page"
      :class="{
        _active: currentPage === page,
        _show:
          (page <= currentPage + 2 && page > currentPage - 1) ||
          (page >= currentPage - 2 && page < currentPage),
      }"
    >
      {{ page }}
    </li>
  </ul>
</template>
