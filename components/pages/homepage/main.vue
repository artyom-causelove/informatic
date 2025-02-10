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

<template>
  <div class="main">
    <div class="test-wrapper">
      <span class="test-text">Пробники:</span>
      <schedule-card v-for="test in parsedTests" class="test-card" :data="test" 
        image="/skull.png" :options="{ color: '#33ECDC', textColor: '#000000' }" :fields="testFieldLinks" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.test-wrapper {
  display: flex;

  padding: 25px 250px 0 130px;

  @media screen and (max-width: 1500px) {
    padding: 25px 250px 0 50px;
  }

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    padding: 25px 60px 0 60px;
  }
}

.test-text {
  font-family: 'Cinematografica Thin';
  line-height: 200px;
  font-size: 300px;

  flex-grow: 1;
  flex-shrink: 1;
  max-width: 40%;
  min-width: 480px;

  padding: 0 80px 0 0;

  @media screen and (max-width: 1400px) {
    font-size: 250px;
    padding: 0 40px 0 0;
    min-width: 400px;
  }

  @media screen and (max-width: 800px) {
    font-size: 200px;
    padding: 30px 60px 0 0;
  }
}

.test-card {
  cursor: pointer;
  width: 262px;
  height: 304px;
  flex-shrink: 0;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: rotateZ(2deg) scale(1.1);
  }
  
  @media screen and (max-width: 1050px) {
    align-self: center;
  }

  &:nth-of-type(2) {
    margin: 0 30px;
  }
  
  &:nth-of-type(3) {
    @media screen and (max-width: 1400px) {
      display: none;
    }

    @media screen and (max-width: 1050px) {
      display: flex;
    }
  }
}
</style>