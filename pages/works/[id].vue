<script setup lang="js">
const route = useRoute();
const { data: lesson } = await useFetch(`/api/lessons/${route.params.id}`);
</script>

<template>
<NuxtLayout name="default">
  <template #header>
    <pages-works-header :lesson="lesson"/>
  </template>
  <template #main>
    <pages-works-main :lesson="lesson"/>
  </template>
</NuxtLayout>
</template>

<style scoped lang="scss">
</style>
