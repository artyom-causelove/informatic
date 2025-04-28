<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const lesson = ref<any | null>(null)

const fetchLesson = async () => {
  try {
    const response = await fetch(`http://localhost:3005/lessons/${route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    
    if (response.ok) {
      lesson.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch lesson:', error)
  }
}

onMounted(() => {
  fetchLesson()
})

</script>

<template>
<NuxtLayout name="default">
  <template #header>
    <pages-works-header :lesson="lesson"/>
  </template>
  <!-- <template #main>
    <pages-works-main :lesson="lesson"/>
  </template> -->
</NuxtLayout>
</template>

<style scoped lang="scss">
</style>
