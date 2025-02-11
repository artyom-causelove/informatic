<template>
  <NuxtLayout name="default">
    <template #header>
      <pages-homepage-header :user="user" :works="works"/>
    </template>
    <template #main>
      <pages-homepage-main :tests="tests" :month-works="worksMonths"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="js">
const { data: works } = await useFetch('/api/works');
const { data: worksMonths } = await useFetch('/api/works/months');
const { data: user } = await useFetch('/api/user');
const { data: tests } = await useFetch('/api/tests');
</script>
