<script setup lang="js">
import { onClickOutside } from '@vueuse/core';

const cartVisible = useCookie('shop.cart.visible', { default: () => false })

const aside = useTemplateRef('aside');
onClickOutside(aside, () => cartVisible.value = false);
</script>

<template>
  <div class="layout-space-wrapper">
    <img class="background" src="/space-ambient.png">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <transition>
      <pages-shop-cart-content v-show="cartVisible" ref="aside" class="aside"/>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.layout-space-wrapper {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  padding: 0 0 100px 0;

  .aside {
    position: fixed;

    top: 0;
    right: 0;
    width: 680px;
    height: 100vh;
  }

  .v-enter-active,
  .v-leave-active {
    transition: transform 0.1s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(100%);
  }
}

.background {
  z-index: -1000;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
}

@media screen and (max-width: 1300px) {
  .layout-space-wrapper .aside {
    width: 480px;
  }
}
</style>