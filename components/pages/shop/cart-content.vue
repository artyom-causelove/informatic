<script setup lang="js">
const { data: allCourses } = await useFetch('/api/courses');

const cart = useCookie('shop.cart', { default: () => []});

function getItem({ id, courseId, tariffId, periodId }) {
  const course = allCourses.value.find(it => it.id === courseId);
  const tariff = course.tariffs.find(it => it.id === tariffId);
  const period = tariff.periods.find(it => it.id === periodId);
  let timeline;
  let price;

  if (!period.price) price = 'Бесплатно';
  else if (period.type === 'month') price = `${period.price} руб. /мес`;
  else if (period.type === 'full') price = `${period.price} руб.`;

  const date = new Date();
  const months = [date.toLocaleString('default', { month: 'long' })];

  if (period.type === 'full') {
    date.setMonth(date.getMonth() + 2);
    months.push(date.toLocaleString('default', { month: 'long' }));
  }

  timeline = months.join(' - ');

  return { id, course, tariff, period, price, timeline };
};

function onClick(id) {
  cart.value = cart.value.filter(it => it.id !== id);
}

function beforeLeave(el) {
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el);

  el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
  el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
  el.style.width = width;
  el.style.height = height;
}
</script>

<template>
  <div class="wrapper flex-column">
    <img class="image" src="/cart-big.png">
    <span class="text rabbits-elf capitalize">корзина</span>
    <transition-group name="list" tag="div" class="content flex-column" :class="{ empty: !cart.length }" @before-leave="beforeLeave">
      <div v-for="cartItem in cart" :key="cartItem.id"
        class="content-item item flex"
      >
        <template v-for="item in [getItem(cartItem)]">
          <pages-shop-tariff-card class="item-card" :tariff="item.tariff" :period="item.period.type"/>
          <div class="item-text flex-column">
            <span class="item-text-title ua-brand px24 bold">
              {{ item.course.title }} / {{ item.tariff.title }} / {{ useCapitalize(item.timeline) }}
            </span>
            <span class="item-text-price ua-brand px24">{{ item.price }}</span>
          </div>
          <img class="item-remove" src="/cross.png" @click="onClick(cartItem.id)">
        </template>
      </div>
    </transition-group>
    <span class="price ua-brand px24">Сумма: {{ cart.reduce((acc, item) => acc += getItem(item).period.price, 0) }} руб</span>
    <nuxt-link class="order-link" to="/shop/cart">
      <my-button class="order" background="solid">
        <span class="ua-brand bold px24 white">Оформить заказ</span>
      </my-button>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  z-index: 1;
  overflow-y: scroll;

  align-items: center;
  padding: 110px 65px 50px 65px;

  background-color: var(--color-white);
  
  &::-webkit-scrollbar {
    display: none;
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(110%);
  }

  .list-leave-active {
    position: absolute;
  }
}

.image {
  width: 145px;
  height: 105px;
}

.text {
  font-size: 96px;
  transform: translateY(-50px);
}

.content {
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 650px;
  width: 100%;
  padding: 65px 0 80px 0;
  margin: 0 0 45px 0;
  gap: 25px;

  border-top: 3px solid var(--color-black);
  border-bottom: 3px solid var(--color-black);
 
  &::-webkit-scrollbar {
    display: none;
  }

  &.empty::after {
    content: 'В корзине пусто...';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;

    text-align: center;
    font-family: 'Rabbits Elf', sans-serif;
    font-size: 75px;

    transform: translate(-50%, -50%);
  }
}

.item {
  align-items: center;
  gap: 25px;

  &-card {
    flex-grow: 0;
    flex-shrink: 0;
    width: 65px;
  }

  &-text {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: center;
    gap: 10px;
  }

  &-remove {
    cursor: pointer;
    width: 37px;
    height: 33px;
  }
}

.price {
  width: 100%;
  margin: 0 0 100px 0;

  text-align: right;
}

@media screen and (max-width: 1300px) {
  .wrapper {
    padding: 40px 45px 50px 45px;
  }

  .image {
    width: 80px;
    height: 58px;
  }

  .text {
    padding: 20px 0 0 0;
    font-size: 64px;
  }

  .content {
    height: 380px;
    padding: 20px 0 25px 0;
  }

  .item {
    &-card {
      width: 40px;
    }

    &-text-title, &-text-price {
      font-size: 16px;
    }
  }

  .price {
    font-size: 16px;
  }
}

@media screen and (max-width: 500px) {
  .image {
    width: 80px;
    height: 58px;
  }

  .text {
    padding: 20px 0 0 0;
    font-size: 64px;
  }

  .content {
    height: 380px;
    padding: 20px 0 25px 0;
  }

  .item {
    &-card {
      width: 40px;
    }

    &-text-title, &-text-price {
      font-size: 16px;
    }
  }

  .price {
    font-size: 16px;
  }
}
</style>
