<script setup lang="js">
const { data: user } = await useFetch('/api/user');
const { data: courses } = await useFetch('/api/courses');
</script>

<template>
  <NuxtLayout name="space">
    <template #header>
      <pages-shop-header :user="user"/>
    </template>
    <template #main>
      <pages-shop-course :courses="courses"/>
    </template>
  </NuxtLayout>
</template>
