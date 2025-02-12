<script setup lang="js">
import { useBreakpoints } from '@vueuse/core'

const { tests, monthWorks } = defineProps(['tests', 'month-works']);
const breakpoints = useBreakpoints(
  {
    desktop: 1920,
    laptop: 1250,
  },
  { ssrWidth: 1920 }
);
const page = ref(1);
const pageItem = ref(breakpoints.smallerOrEqual('laptop'));
</script>

<template>
  <div class="main">
    <div class="test-wrapper">
      <span class="test-text">Пробники:</span>
      <schedule-card v-for="(test, index) in tests" :key="index" class="test-card" :data="test" 
        image="/skull.png" :options="{ color: '#33ECDC', textColor: '#000000' }"/>
    </div>
    <div class="buttons-wrapper">
      <slider-button class="button" @my-click="page > 1 ? page-- : page"/>
      <span class="button-text">Все уроки:</span>
      <slider-button class="button" @my-click="page++"/>
    </div>
    <slider class="slider" :page="page" :page-item="pageItem ? 1 : 2">
      <slider-page class="slider-page" :page-item="pageItem ? 1 : 2" v-for="(it, index) in monthWorks" :key="index">
        <div class="page-wrapper">
          <span class="page-title">{{ it.month }}</span>
          <div class="item-wrapper" v-for="(work, index) in it.works" :key="index">
            <span class="item-date">{{ work.date }}</span>
            <div class="item-title-wrapper">
              <div class="item-title-text-wrapper">
                <span class="item-title">{{ work.title }}</span>
              </div>
              <span class="item-number">{{ work.number }}</span>
            </div>
            <span class="item-estimate">{{ work.estimate }}</span>
          </div>
        </div>
      </slider-page>
    </slider>
    <div class="buttons-wrapper">
      <slider-button class="button" @my-click="page > 1 ? page-- : page"/>
      <slider-button class="button" @my-click="page++"/>
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

  @media screen and (max-width: 560px) {
    padding: 25px 30px 0 30px;
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
  margin: 0 0 30px 0;

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
  margin: 0 0 30px 0;

  flex-shrink: 0;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: rotateZ(2deg) scale(1.1);
  }
  
  @media screen and (max-width: 1050px) {
    align-self: center;
  }

  &:nth-of-type(2) {
    margin: 0 30px 30px 30px;
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

.buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;

  &:nth-of-type(4) { 
    margin-top: 20px;
    padding-top: 0;

    .button:nth-of-type(2) {
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 660px) {
    flex-wrap: wrap;
  }
}

.button-text {
  font-family: 'Rabbits Elf', sans-serif;
  text-align: center;
  font-size: 96px;
  margin: 0 30px;

  @media screen and (max-width: 660px) {
    width: 100%; 
    order: -1;
  }
}

.button {
  width: 122px;
  height: 122px;

  &:nth-of-type(2) {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 660px) {
    margin-left: 30px;
  }
}

.slider {
  max-width: 1240px;
  min-width: 460px;
  margin: 0 auto;

  @media screen and (max-width: 1250px) {
    max-width: 620px;
  }
}

.slider-page {
  transform: rotate(0.3deg);

  @media screen and (max-width: 1250px) {
    transform: none;
  }

  &:nth-of-type(2n) {
    transform: rotate(-0.3deg);
    
    @media screen and (max-width: 1250px) {
      transform: none;
    }
  }
}

.page-title {
  line-height: 90px;
  font-family: 'Rabbits Elf', sans-serif;
  text-align: center;
  font-size: 96px;

  display: block;
  padding-top: 30px;
  padding-bottom: 20px;
}

.item-wrapper {
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
    padding: 0 40px 100px 40px;
  }

  @media screen and (max-width: 660px) {
    padding: 0 10px;
    margin-bottom: 10px;

    &:last-child {
      padding: 0 10px 60px 10px;
    }
  }
}

.item-date {
  text-align: left;
  line-height: 60px;
  font-family: 'Rabbits Elf', sans-serif;
  font-size: 48px;
  color: var(--color-red);

  width: 100px;
  flex-shrink: 0;
  margin-right: 30px;
}

.item-title-wrapper {
  text-wrap: balance;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
}

.item-title-text-wrapper {
  max-width: 220px;
  
  @media screen and (max-width: 660px) {
    max-width: 180px;
  }
}

.item-title {
  font-family: 'UA Brand', sans-serif;
  font-size: 24px;

  @media screen and (max-width: 660px) {
    font-size: 20px;
  }
}

.item-number {
  font-family: 'UA Brand', sans-serif;
  font-size: 16px;
}

.item-estimate {
  min-width: 92px;

  text-align: center;
  line-height: 60px;
  font-family: 'Rabbits Elf', sans-serif;
  font-size: 64px;
  color: var(--color-red);
}
</style>