<script setup lang="js">
const { course } = defineProps(['course']);
const active = ref('month');
</script>

<template>
  <div class="tariffs">
    <span class="tariffs-course-title">{{ course.title }}</span>
    <div class="tariffs-plan">
      <span class="tariffs-plan-item" :class="{ active: active === 'month' }" @click="active = 'month'">Помесячная оплата</span>
      <span class="tariffs-plan-separator">/</span>
      <span class="tariffs-plan-item" :class="{ active: active === 'year' }" @click="active = 'year'">Полный курс</span>
    </div>
    <div class="tariffs-wrapper">
      <div class="tariffs-item" v-for="(tariff, index) in course.tariffs" :key="index">
        <img class="tariffs-item-image" :src="tariff.image"/>
        <span class="tariffs-item-title">-{{ tariff.title }}-</span>
        <template v-for="(it, index) in tariff.summary.items" :key="index">
          <span class="tariffs-item-count">{{ it.count }}</span>
          <span class="tariffs-item-text">{{ it.text }}</span>
        </template>
        <span class="tariffs-item-price">{{ tariff.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* tariffs */
.tariffs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* tariffs-course-title tariffs-plan tariffs-plan-item tariffs-plan-separator */
.tariffs {
  &-course-title {
    color: var(--color-white);
    font-family: 'Rabbits Elf', sans-serif;
    font-size: 96px;
  }

  &-plan {
    display: flex;
    justify-content: center;
    padding: 0 0 50px 0;

    &-item, &-separator {
      color: var(--color-light-gray);
      font-family: 'UA Brand', sans-serif;
      font-size: 36px;

      padding: 0 20px;
    }

    &-item {
      z-index: 1;
      cursor: pointer;
      position: relative;

      &::after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        opacity: 0%;
        transform: rotateZ(0.84deg);
        background-color: var(--color-red);
        transition: clip-path 0.1s ease-in-out;
        clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
      }

      &.active {
        color: var(--color-white);

        &::after {
          opacity: 100%;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      }
    }
  }
}

/* tariffs-wrapper tariffs-item tariffs-item-image tariffs-item-title tariffs-item-count tariffs-item-text tariffs-item-price */
.tariffs {
  &-wrapper {
    display: flex;
  }
  
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 316px;
    height: 480px;
    padding: 50px 0 50px 0;

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-title {
      position: relative;
      font-family: 'Cinematografica', sans-serif;
      font-size: 96px;

      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        width: 150px;
        height: 17px;

        mix-blend-mode: darken;
        background-image: url('/separator.png');
        transform: translateX(-50%);
      }
    }
  }
}
</style>