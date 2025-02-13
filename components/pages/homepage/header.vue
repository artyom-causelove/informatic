<template>
  <div class="header">
    <img class="circle-decoration" src="/decoration-circles.png"/>
    <img class="circle-decoration" src="/decoration-circles.png"/>
    <div class="wrapper-top">
      <div class="wrapper-company-title">
        <img class="circle-decoration" src="/decoration-circles.png" />
        <img class="company-title" src="/company-title.png" />
      </div>
      <account class="account" :name="user.name" :surname="user.surname" />
    </div>
    <div class="wrapper-text">
      <img class="circle-decoration" src="/decoration-circles.png" />
      <span class="schedule-text">Расписание:</span>
    </div>
    <div class="wrapper-schedule">
      <template v-for="(work, index) in works" :key="index">
        <schedule-card v-if="work" :data="work" textColor="#FFFFFF" image="/pepper.png" imageHard="/fire.png"
          :disabled="work.tariff !== user.tariff" :options="{ color: '#EF3A5F' }"
          disabled-text="SENIOR ONLY!" class="card card-work" :class="{ 'card-today': index === 3 }" />
        <span v-else class="card card-empty" :class="{ 'card-today': index === 3 }"></span>
      </template>
    </div>
    <div class="wrapper-tariff">
      <span class="tariff tariff-pay" :class="{ active: activeTariff === 1 }" @click="activeTariff = 1">Платный курс</span>
      <span class="tariff tariff-slash">/</span>
      <span class="tariff tariff-free" :class="{ active: activeTariff === 2 }" @click="activeTariff = 2">Бесплатный курс</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { works, user } = defineProps<{
  works: Array<{
    subfooter?: string[]
    text: string[]
    title: string
    subtitle: string
    imageCount?: number
    footer?: string
    tariff: number
  } | null>
  user: {
    name: string
    surname: string
    tariff: number
  }
}>();

const activeTariff = ref(1);
</script>

<style scoped lang="scss">
// <header>
.header {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding-top: 32px;

  // <wrapper-top>
  .wrapper-top {
    position: relative;

    display: flex;
    justify-content: center;
    order: 1;

    width: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 1455px) {
      flex-direction: column;
      align-items: flex-end;

      margin-bottom: 0;
    }

    @media screen and (max-width: 1050px) {
      align-items: center;

      margin-bottom: 70px;
      padding-right: 0;
    }

    .wrapper-company-title {
      position: relative;
      margin: 0 auto;

      @media screen and (max-width: 1455px) {
        margin: 0 35px 0 0;
      }

      @media screen and (max-width: 1050px) {
        margin: 0;
      }

      .company-title {
        z-index: 1;
        position: relative;
        width: 514px;
        height: 154px;

        @media screen and (max-width: 530px) {
          width: 428px;
          height: 128px;
        }
      }

      & > .circle-decoration {
        z-index: 0;
        position: absolute;
        display: none;

        top: 90%;
        left: 50%;

        transform: translate(-50%, -50%);

        @media screen and (max-width: 1455px) {
          display: block;
        }

        @media screen and (max-width: 1050px) {
          top: 70%;
          left: 90%;
        }

        @media screen and (max-width: 460px) {
          top: 70%;
          left: 120%;
        }
      }
    }

    .account {
      cursor: pointer;
      z-index: 1;
      position: absolute;
      right: 95px;
      top: 50%;

      transform: translateY(-50%);

      @media screen and (max-width: 1455px) {
        position: initial;
        flex-direction: row-reverse;

        padding: 0 45px 0 0;

        transform: none;
      }

      @media screen and (max-width: 1050px) {
        padding: 0;
      }
    }
  }

  // </wrapper-top>
  // <wrapper-text>
  .wrapper-text {
    position: relative;
    align-self: flex-end;
    flex-shrink: 1;
    order: 2;

    margin: 0 0 -15px 0;

    @media screen and (max-width: 1455px) {
      align-self: flex-start;
      margin: -40px auto 100px 0;
      padding-left: 85px;
    }

    @media screen and (max-width: 1050px) {
      margin: 0 auto 75px 0;
      padding-left: 65px;
    }

    @media screen and (max-width: 460px) {
      margin: 0 0 45px 0;
      padding-left: 30px;
    }

    .circle-decoration {
      position: absolute;
      display: block;

      top: 20%;
      left: 50%;

      transform: translate(-50%, -50%);

      @media screen and (max-width: 1455px) {
        display: none;
      }
    }

    .schedule-text {
      position: relative;
      font-family: 'Cinematografica', sans-serif;
      font-weight: 100;
      font-size: 300px;
      color: var(--color-white);

      @media screen and (max-width: 1455px) {
        font-size: 250px;
      }

      @media screen and (max-width: 1050px) {
        font-size: 200px;
      }
    }
  }

  // </wrapper-text>
  // <wrapper-schedule>
  .wrapper-schedule {
    position: relative;
    display: flex;
    justify-content: center;
    height: 333px;
    order: 3;

    &::before {
      content: '';
      position: absolute;
      background-image: url('/dots.png');
      width: calc(100% - 135px);
      height: 27px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      mix-blend-mode: lighten;

      @media screen and (max-width: 1050px) {
        width: 18px;
        height: calc(100% - 135px);
      }
    }

    @media screen and (max-width: 1050px) {
      flex-direction: column;
      height: unset;
      order: 4;
    }

    & > div:nth-of-type(2n) {
      transform: rotateZ(2.72deg);
    }

    .card {
      position: relative;
      margin: 0 20px 0 0;

      @media screen and (max-width: 1050px) {
        margin: 0 0 20px 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &-today {
        &::before {
          content: '';

          position: absolute;
          top: -91px;
          left: 50%;
          width: 59px;
          height: 76px;

          transform: translate(-50%, 0);
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url('/you-are-here.png');

          @media screen and (max-width: 1050px) {
            top: 50%;
            left: initial;
            right: calc(100% + 5px);
            width: 128px;
            height: 97px;

            transform: translate(0, -50%);

            background-image: url('/you-are-here-horizontal.png');
          }

          @media screen and (max-width: 585px) {
            width: 79px;
            height: 60px;
          }
        }
      }

      &-work {
        backface-visibility: hidden;

        cursor: pointer;
        transform: rotateZ(-1.36deg);
        width: 262px;
        height: 304px;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: rotateZ(2deg) scale(1.1);
        }
      }

      &-empty {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--color-white);
        transform: translateY(70%);
      }
    }
  }

  // </wrapper-schedule>
  // <wrapper-tariff>
  .wrapper-tariff {
    display: flex;
    justify-content: center;
    order: 4;

    width: 100%;
    margin: 60px 0 0 0;

    @media screen and (max-width: 1455px) {
      margin: 65px 0 0 0;
    }

    @media screen and (max-width: 1050px) {
      margin: 0 0 90px 0;
      order: 3;
    }

    @media screen and (max-width: 770px) {
      margin: 0 0 60px 0;
      flex-direction: column;
    }

    .tariff {
      cursor: pointer;
      z-index: 1;
      position: relative;
      font-family: 'UA Brand', sans-serif;
      font-weight: 400;
      font-size: 36px;
      color: var(--color-light-gray);

      @media screen and (max-width: 770px) {
        margin: 0 auto;
      }
    }

    .tariff-slash {
      margin: 0 35px 0 50px;

      @media screen and (max-width: 770px) {
        display: none;
      }
    }

    .tariff.active {
      color: var(--color-white);
    }

    .tariff::after {
      z-index: -1;
      content: '';
      position: absolute;
      left: -15px;
      top: 0;

      width: calc(100% + 30px);
      height: 100%;

      background-color: var(--color-red);
      transform: rotateZ(0.84deg);
      opacity: 0%;
      transition: clip-path 0.1s ease-in-out;
      clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
    }

    .tariff.active::after {
      opacity: 100%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }

  // </wrapper-tariff>

  & > .circle-decoration {
    position: absolute;
    display: none;

    transform: translate(-50%, -50%);

    @media screen and (max-width: 1050px) {
      display: block;
    }

    &:nth-of-type(1) {
      left: -85px;
      top: 60%;
    }

    &:nth-of-type(2) {
      mix-blend-mode: overlay;
      right: -785px;
      top: 84%;
    }
  }
}

// </header>

// <global>
.circle-decoration {
  width: 750px;
  height: 600px;
}
// </global>
</style>