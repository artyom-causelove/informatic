<script setup lang="js">
import { useMediaQuery } from '@vueuse/core'

const cart = useCookie('shop.cart', { default: () => []});
const cartVisible = useCookie('shop.cart.visible', { default: () => false });
const isSmallScreen = useMediaQuery('(max-width: 750px)');

const items = computed(() => {
  const count = cart.value.length;
  return count < 10 ? `'${count}'` : `'∞'`;
});
</script>

<template>
  <div>
    <nuxt-link v-if="isSmallScreen" to="/shop/cart" class="button flex-column">
      <div class="image-wrapper flex" :class="{ empty: !cart.length }">
        <img class="image" src="/cart.png">
      </div>
      <span class="ua-brand px16 white capitalize">корзина</span>
    </nuxt-link>
    <div v-else class="button flex-column" @click="cartVisible = true">
      <div class="image-wrapper flex" :class="{ empty: !cart.length }">
        <img class="image" src="/cart.png">
      </div>
      <span class="ua-brand px16 white capitalize">корзина</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  margin: 0 0 10px 0;
  border-radius: 50%;
  background-color: var(--color-white);

  &::after {
    content: v-bind(items);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 100%;
    width: 30px;
    height: 30px;

    text-align: center;
    line-height: 32px;
    color: var(--color-white);
    font-family: 'UA Brand', sans-serif;
    font-weight: 900;
    font-size: 16px;

    border-radius: 50%;
    background-color: #FD3654;
    transform: translate(calc(-50% - 7px), calc(-50% + 7px));
  }

  &.empty::after {
    display: none;
  }
}

.image {
  z-index: 1;
  width: 60px;
  height: 40px;
  transform: translateY(3px);
}
</style>
