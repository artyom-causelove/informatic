<template>
  <NuxtLayout name="default">
    <template #header>
      <pages-homepage-header :user="user" :works="works"/>
    </template>
    <template #main>
      <pages-homepage-main :tests="tests"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="js">
const user = {
  tariff: 1,
  name: 'Никита',
  surname: 'Петров'
};
const works = [
  null,
  null,
  {
    task: '2 задача',
    title: 'Алгебра логики',
    maxScore: 10,
    difficult: 1,
    tariff: 1,
    date: '26.03',
    time: '18:00',
    weekday: 'ср',
    answer: {
      score: 7,
      estimate: '4-'
    },
  },
  null,
  {
    task: '2 задача',
    title: 'Еще логика',
    maxScore: 10,
    difficult: 2,
    tariff: 2,
    date: '26.03',
    time: '18:00',
    weekday: 'ср',
    answer: null
  },
  null,
  {
    task: '27 задача',
    title: 'Кластеры ч,1',
    maxScore: 4,
    difficult: 3,
    tariff: 1,
    date: '30.03',
    time: '18:00',
    weekday: 'вс',
    answer: {
      score: 4,
      estimate: '5+'
    }
  }
];
const tests = [{
  task: 'Сентябрьский',
  title: 'Пробник 2',
  maxScore: 20,
  difficult: 3,
  date: '30.09',
  answer: {
    score: 17,
    estimate: 70
  }
}, {
  task: 'Июньский',
  title: 'Пробник 1',
  maxScore: 29,
  difficult: 3,
  date: '26.06',
  answer: {
    score: 12,
    estimate: 80
  },
}, {
  task: 'Майский',
  title: 'Пробник 3',
  maxScore: 31,
  difficult: 2,
  date: '01.05',
  answer: {
    score: 1,
    estimate: 8
  },
}];
</script>