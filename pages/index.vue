<template>
  <NuxtLayout name="default">
    <template #header>
      <pages-homepage-header :user="userStore.getUserProfile" :works="works"/>
    </template>
    <template #main>
      <pages-homepage-main :tests="tests" :month-works="worksMonths"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="js">
  const userStore = useUserStore();

  const { data: works } = await useFetch('/api/works');
  const { data: worksMonths } = await useFetch('/api/works/months');
  const { data: tests } = await useFetch('/api/tests');
</script>
