<script setup>
import {
  getDatabase,
  ref as firebaseRef,
  onValue,
  query,
  limitToFirst,
  orderByChild,
  orderByKey,
} from 'firebase/database'
import { onMounted, ref, watch } from 'vue'
import Comment from './Comment.vue'
import Pagination from './Pagination.vue'
import LoaderText from './LoaderText.vue'
import FormComment from './FormComment.vue'

const comments = ref([])
const pages = ref(0)

const isError = ref(false)
const limit = 5
const currentPage = ref(1)
const isLoading = ref(false)

const getComments = async () => {
  const db = getDatabase()

  const dbRef = query(firebaseRef(db, 'comments/'), orderByKey())
  onValue(dbRef, (snapshot) => {
    try {
      if (!snapshot.val()) throw new Error('Произошла непредвиденная ошибка')

      const data = snapshot.val()
      comments.value = Object.keys(data)
        .reverse()
        .map((key) => {
          return {
            id: key,
            name: data[key].name,
            body: data[key].body,
          }
        })
    } catch (e) {
      isError.value = true
    }
  })

  isError.value = false
}

const setCurrentPage = (page) => {
  currentPage.value = page
}

onMounted(getComments)

watch(currentPage, getComments)
</script>

<template>
  <FormComment @getComments="getComments" />
  <div class="container">
    <div class="card">
      <h2 v-if="isError">Комментариев пока нет.</h2>
      <div v-else>
        <h2>Комментарии</h2>
        <ul class="list">
          <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </ul>
      </div>
      <LoaderText v-if="isLoading" content="Загрузка комментариев..." />
      <Pagination @setCurrentPage="setCurrentPage" :pages="pages" :current-page="currentPage" />
    </div>
  </div>
</template>
