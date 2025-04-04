<script setup lang="js">
const currentCourse = useCookie('shop.current.course.id');
const currentTariff = useCookie('shop.current.tariff.id');
const currentPeriod = useCookie('shop.current.period.id');

const { data: user } = await useFetch('/api/user');
const { data: course } = await useFetch(`/api/courses/${currentCourse.value}`);
const tariff = ref(course.value.tariffs.find(it => it.id === currentTariff.value));
const period = ref(tariff.value.periods.find(it => it.id === currentPeriod.value));
</script>

<template>
  <NuxtLayout name="space">
    <template #header>
      <pages-shop-header :user="user"/>
    </template>
    <template #main>
      <pages-shop-tariff-detail :course="course" :tariff="tariff" :period="period"/>
    </template>
  </NuxtLayout>
</template>
