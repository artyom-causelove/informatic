<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.initializeFromStorage()
})
</script>
