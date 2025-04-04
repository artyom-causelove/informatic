<script setup lang="js">
const { course, tariff, period } = defineProps(['course', 'tariff', 'period']);

const cart = useCookie('shop.cart', { maxAge: 604800, default: () => ([]) });

const month = computed(() => {
  const date = new Date();
  const result = [date.toLocaleString('default', { month: 'long' })];

  if (period.type === 'full') {
    date.setMonth(date.getMonth() + 2);
    result.push(date.toLocaleString('default', { month: 'long' }));
  }

  return result.join(' - ');
});

function getPrice() {
  if (!period.price) return 'Бесплатно';

  switch (period.type) {
    case 'month': return `${period.price} руб. /мес`;
    case 'full': return `${period.price} руб.`;
  }
};

function onClick() {
  cart.value.push({
    id: useRandom(Number.MAX_SAFE_INTEGER),
    courseId: course.id,
    tariffId: tariff.id,
    periodId: period.id
  });
}
</script>

<template>
<div class="tariff">
  <pages-shop-cart-button class="cart-button"/>
  <pages-shop-tariff-card class="card"
    :tariff="tariff"
    :period="period.type"
  />
  <div class="text">
    <span class="text-title cinematografica light">
      {{ course.title }} / {{ tariff.title }} / {{ useCapitalize(month) }}
    </span>
    <span class="text-price ua-brand">{{ getPrice() }}</span>
    <nuxt-link class="text-button" to="/shop/course" @click="onClick()">
      <my-button>
        <span class="ua-brand bold px24">В корзину</span>
      </my-button>
    </nuxt-link>
    <div class="text-summary">
      <span v-for="(it, index) in tariff.summary" :key="index"
        class="text-summary-item ua-brand"
      >
        {{ it.count ?? '' }} {{ it.text }}
      </span>
    </div>
    <span class="text-schedule ua-brand">Расписание июня:</span>
    <span class="text-schedule ua-brand">04.06 12:00 ср | Задание 4 Фано</span>
    <span class="text-schedule ua-brand">08.06 12:00 вс | Задание 7 Изображения</span>
    <span class="text-schedule ua-brand">11.06 12:00 ср | Задание 7 Звук</span>
    <span class="text-schedule ua-brand">15.06 12:00 вс | Задание 8 Комбинаторика</span>
    <span class="text-schedule ua-brand">18.06 12:00 ср | Задание 11 Вес информации</span>
    <span class="text-schedule ua-brand">22.06 12:00 вс | Задание 2: Босс качалки</span>
    <span class="text-schedule ua-brand">25.06 12:00 ср | Задание 2 Питоном</span>
    <span class="text-schedule ua-brand">29.06 12:00 вс | Повторение пройденных тем</span>
  </div>
</div>
</template>

<style scoped lang="scss">
.tariff {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 80px;

  padding: 0 50px 0 50px;
}

.cart-button {
  position: absolute;
  top: -130px;
  right: 40px;
}

.card {
  width: 316px;
  flex-grow: 0;
  flex-shrink: 0;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;

  &-button {
    margin: 30px 0 50px 0;
  }

  &-title, &-price, &-summary-item, &-schedule {
    color: var(--color-white);
  }

  &-title {
    font-size: 96px;
    letter-spacing: 5px;
    margin: 0 0 10px 0;
    transform: translateY(-40px);
  }

  &-price {
    font-size: 24px;
  }

  &-summary {
    display: flex;
    flex-direction: column;
    margin: 0 0 40px 0;

    &-item {
      font-size: 24px;
      margin: 0 0 10px 0;
    }
  }

  &-schedule {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
}

@media screen and (max-width: 1200px) {
  .tariff {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 900px) {
  .text {
    &-title {
      font-size: 64px;
    }

    &-price, &-summary-item {
      font-size: 20px;
    }

    &-schedule {
      font-size: 12px;
    }
  }
}

@media screen and (max-width: 700px) {
  .text {
    &-title {
      font-size: 50px;
    }

    &-price, &-summary-item {
      font-size: 18px;
    }

    &-schedule {
      font-size: 10px;
    }
  }

  .cart-button {
    position: initial;
    margin: -10px 0 0 0;
  }
}
</style>
