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
    <!-- <div class="test-wrapper">
      <span class="test-text">Пробники:</span>
      <schedule-card v-for="(test, index) in tests" :key="index" class="test-card" :data="test" 
        image="/skull.png" :options="{ color: '#33ECDC', textColor: '#000000', swapText: true }"/>
    </div> -->
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
    <img class="decoration" src="/decoration-1.png"/>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  padding-bottom: 378px;

  &::after, &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
  }

  &::after {
    left: 0;
    width: 107px;
    height: 652px;
    background-image: url('/decoration-circles-half.png');
  }

  &::before {
    right: 40px;
    width: 119px;
    height: 119px;
    background-image: url('/heart-black.png');
  }

  @media screen and (max-width: 700px) {
    &::after, &::before {
      display: none;
    }
  }
}

.test-wrapper {
  position: relative;
  display: flex;

  padding: 25px 250px 0 130px;

  &::after {
    content: '';
    position: absolute;

    top: calc(100% + 50px);
    left: 90px;
    width: 107px;
    height: 141px;
    background-image: url('/heart.png');
  }

  @media screen and (max-width: 1500px) {
    padding: 25px 250px 0 50px;
  }

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    padding: 25px 60px 0 60px;
    
    &::after {
      top: 100px;
      right: 100px;
      left: unset;
    }
  }

  @media screen and (max-width: 560px) {
    padding: 25px 30px 0 30px;
    
    &::after {
      display: none;
    }
  }
}

.test-text {
  font-family: 'Cinematografica', sans-serif;
  font-weight: 100;
  line-height: 200px;
  font-size: 300px;

  flex-grow: 1;
  flex-shrink: 1;
  max-width: 40%;
  min-width: 480px;

  transform: translateY(-75px);

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

  @media screen and (max-width: 400px) {
    font-size: 80px;
  }
}

.button {
  width: 122px;
  height: 122px;

  &:nth-of-type(2) {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 660px) {
    &:nth-of-type(2) {
      margin-left: 30px;
    }
  }
}

.slider {
  max-width: 1240px;
  min-width: 390px;
  margin: 0 auto;

  @media screen and (max-width: 1250px) {
    max-width: 620px;
  }

  @media screen and (max-width: 630px) {
    margin: 0 0 0 8px;
  }

  @media screen and (max-width: 405px) {
    margin: 0;
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

  @media screen and (max-width: 490px) {
    font-size: 44px;
    margin-right: 15px;
  }
}

.item-title-wrapper {
  text-wrap: balance;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
}

.item-title-text-wrapper {
  max-width: 222px;
  
  @media screen and (max-width: 660px) {
    max-width: 185px;
  }
}

.item-title {
  font-family: 'UA Brand', sans-serif;
  font-weight: 700;
  font-size: 24px;

  @media screen and (max-width: 660px) {
    font-size: 20px;
  }

  @media screen and (max-width: 490px) {
    font-size: 16px;
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

  @media screen and (max-width: 440px) {
    font-size: 54px;
    min-width: 82px;
  }
}

.decoration {
  position: absolute;

  @media screen and (max-width: 1200px) {
    transform: translate(-280px, 0);
  }

  @media screen and (max-width: 835px) {
    left: 50%;
    transform: translate(calc(-50% - 550px), 0);
  }

  @media screen and (max-width: 600px) {
    left: 50%;
    transform: translate(calc(-50% - 635px), 0);
  }
}
</style>