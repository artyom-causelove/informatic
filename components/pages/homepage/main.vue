<template>
  <div class="main">
    <div class="test-wrapper">
      <span class="test-text">Пробники:</span>
      <schedule-carda v-for="test in parsedTests" class="test-card" :data="test" color="#33ECDC" textColor="#000000"
        image="/skull.png" :options="{ color: '#EF3A5F' }" :fields="testFieldLinks" />
    </div>
  </div>
</template>

<script setup lang="js">
const { tests } = defineProps(['tests']);

const parsedTests = tests.map(it => {
  if (!it) return null;

  return {
    ...it,
    estimate: `/${it.answer?.estimate || '?'}`,
    dateString: `от ${it.date}`,
    textTitle: 'первичных',
    textScore: `${Number.isInteger(it.answer?.score) ? it.answer?.score : '-'}/${it.maxScore}`
  };
})

const testFieldLinks = {
  title: 'task',
  subtitle: 'title',
  imageCount: 'difficult',
  estimate: 'estimate',
  text: ['textTitle', 'textScore', 'estimate'],
  footer: 'dateString',
};
</script>

<style scoped lang="scss">
.test-card {
  width: 262px;
  height: 304px;
}
</style>