<script setup>
import TitleMin from './ui/TitleMin.vue'

const props = defineProps({
  contentArray: Array,
})
</script>

<template>
  <div class="card card-w70">
    <div v-if="props.contentArray.length">
      <component
        v-for="(item, index) in props.contentArray"
        :key="index"
        :is="item.component"
        :content="item.content"
      ></component>
    </div>
    <TitleMin v-else content="Добавьте первый блок, чтобы увидеть результат" />
  </div>
</template>
