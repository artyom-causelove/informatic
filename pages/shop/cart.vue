<script setup lang="js">
const { data: user } = await useFetch('/api/user');
</script>

<template>
  <NuxtLayout name="empty">
    <div class="page-cart">
      <back-link class="page-cart-back"/>
      <pages-shop-cart-content class="page-cart-content"/>
      <pages-shop-cart-order class="page-cart-order" :user="user"/>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.page-cart {
  position: relative;
  display: flex;

  min-height: 100vh;

  &-back {
    z-index: 10;
    cursor: pointer;

    position: absolute;
    left: 0;
    top: 0;

    width: 195px;
  }

  & > &-content {
    flex-basis: 40%;
    min-width: 720px;
    position: relative;

    &:deep(.order-link) {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;

      height: 85%;
      width: 2px;

      background-color: var(--color-black);
      transform: translateY(-50%);
    }
  }

  & > &-order {
    flex-basis: 60%;
  }
}

@media screen and (max-width: 1300px) {
  .page-cart {    
    &-back {
      width: 100px;
    }

    & > &-content {
      min-width: 500px;
    }
  }
}

@media screen and (max-width: 950px) {
  .page-cart {
    flex-direction: column;

    & > &-content {
      padding: 40px 45px 0 45px;

      &::after {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .page-cart {
    & > &-content {
      min-width: 350px;
      padding: 40px 20px 0 20px;
    }

    &-back {
      width: 90px;
    }
  }
}
</style>
