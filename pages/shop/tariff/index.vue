<script setup lang="js">
const currentCourse = useCookie('shop.current.course.id');

const { data: user } = await useFetch('/api/user');
const { data: course } = await useFetch(`/api/courses/${currentCourse.value}`);
</script>

<template>
  <NuxtLayout name="space">
    <template #header>
      <pages-shop-header :user="user"/>
    </template>
    <template #main>
      <pages-shop-tariff :course="course"/>
    </template>
  </NuxtLayout>
</template>
