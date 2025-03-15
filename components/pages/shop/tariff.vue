<script setup lang="js">
const { course } = defineProps(['course']);

const cart = useCookie('shop.cart', { maxAge: 604800, default: () => ([]) });
const currentPeriodType = useCookie('shop.current.period.type', { maxAge: 604800, default: () => 'month' });
const currentPeriod = useCookie('shop.current.period.id', { maxAge: 604800 });
const currentTariff = useCookie('shop.current.tariff.id', { maxAge: 604800 });

function onClick(tariff) {
  const period = tariff.periods.find(it => it.type === currentPeriodType.value);
  cart.value.push({
    id: useRandom(Number.MAX_SAFE_INTEGER),
    courseId: course.id,
    tariffId: tariff.id,
    periodId: period.id
  });
};

function onClickDetail(tariff) {
  const period = tariff.periods.find(it => it.type === currentPeriodType.value);
  currentTariff.value = tariff.id;
  currentPeriod.value = period.id;
}
</script>

<template>
  <div class="tariffs">
    <pages-shop-cart-button class="cart-button"/>
    <span class="course-title">{{ course.title }}</span>
    <div class="plan">
      <span class="plan-item" :class="{ active: currentPeriodType === 'month' }"
        @click="currentPeriodType = 'month'"
      >
        Помесячная оплата
      </span>
      <span class="plan-separator">/</span>
      <span class="plan-item" :class="{ active: currentPeriodType === 'full' }"
        @click="currentPeriodType = 'full'"
      >
        Полный курс
      </span>
    </div>
    <div class="tariffs-wrapper"
      v-gsap.stagger.from="{ opacity: 0 }"
      v-gsap.stagger.fromInvisible.once.to="{ opacity: 1 }"
    >
      <div v-for="(tariff, index) in course.tariffs" :key="index" class="item-wrapper">
        <nuxt-link class="item-link"
          @click="onClick(tariff)"
          to="/shop/course"
        >
          <pages-shop-tariff-card class="item-card" :tariff="tariff" :period="currentPeriodType"/>
          <my-button class="item-button">
            <span class="ua-brand bold px24">Выбрать</span>
          </my-button>
        </nuxt-link>
        <nuxt-link class="item-detail"
          @click="onClickDetail(tariff)"
          to="/shop/tariff/detail"
        >
          Подробнее
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* tariffs tariffs-wrapper */
.tariffs {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrapper {
    display: flex;
  }
}

/* course-title plan plan-item plan-separator */
.course-title {
  color: var(--color-white);
  font-family: 'Rabbits Elf', sans-serif;
  font-size: 96px;
}

.cart-button {
  position: absolute;
  right: calc((100vw - 1028px) / 2 - 100px);
  top: 20px;
}

.plan {
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

.item {
  transition: transform 0.2s ease-in-out;
}

.item-card {
  width: 316px;
  transition: transform 0.2s ease-in-out;
}

.item-wrapper {
  cursor: pointer;
  position: relative;
  text-align: center;
  margin-right: 40px;
  
  &:last-of-type {
    margin-right: 0;
  }

  &::before {
    content: '';
    z-index: -9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 480px;
    border-radius: 50%;

    box-shadow: 0 0 0 0 rgba(0, 0, 102, 0);
    transition: box-shadow 0.2s ease-in-out;
  }

  &:hover {
    &::before {
      box-shadow: 0 0 130px 90px rgba(0, 0, 82, 0.45);
    }

    .item-card {
      transform: scale(1.02);
    }
  }
}

.item-button {
  margin: 25px auto;
}

.item-detail {
  font-family: 'UA Brand', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
  text-decoration: underline;
}

@media screen and (max-width: 1250px) {
  .cart-button {
    right: 100px;
    top: -80px;
  }
}

@media screen and (max-width: 1100px) {
  .plan {
    flex-direction: column;
    align-items: center;
    padding: 0 0 0 0;

    &-item {
      margin: 10px 0 0 0;
    }

    &-separator {
      display: none;
    }
  }

  .tariffs {
    padding: 0 20px 200px 20px;
  }

  .tariffs-wrapper {
    overflow-x: scroll;
    overflow-y: visible;
    padding: 100px 0 0 0;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .course-title {
    font-size: 72px;
  }

  .cart-button {
    position: initial;
  }

  .plan-item {
    font-size: 26px;
  }

  .item-wrapper {
    margin: 0 10px 0 0;
  }
}
</style>