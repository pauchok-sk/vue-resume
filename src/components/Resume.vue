<script setup>
import Preview from './ui/Preview.vue'
import Content from './ui/Content.vue'
import Title from './ui/Title.vue'
import TitleBig from './ui/TitleBig.vue'
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
      <!-- <TitleBig content="Заголовок" />
      <Preview
        content="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png"
      />
      <Title content="Опыт работы" />
      <Content :content="content" /> -->
    </div>
    <TitleMin v-else content="Добавьте первый блок, чтобы увидеть результат" />
  </div>
</template>
