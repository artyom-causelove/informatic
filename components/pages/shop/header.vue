<script setup lang="js">
const { user } = defineProps(['user']);
</script>

<template>
  <div class="header">
    <back-link class="header-back"/>
    <img class="header-text" src="/shop.png"/>
    <div class="header-account">
      <account class="header-account-item" :name="user.name" :surname="user.surname"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;

  padding: 0 0 50px 0;

  &-text {
    max-width: 500px;
    margin: 0 100px 0 auto;
  }

  &-account {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;

    max-width: calc(50% - 350px);
    padding: 60px 0 0 0;
  }

  &-back {
    cursor: pointer;

    position: absolute;
    left: 0;
    top: 0;

    width: 195px;
  }
}

@media screen and (max-width: 1280px) {
  .header {
    justify-content: space-between;
    padding: 0 125px 40px 40px;

    &-text {
      margin: 0 0 0 0;
    }

    &-account {
      flex-grow: 0;
      flex-shrink: 0;

      max-width: unset;
    }
  }
}

@media screen and (max-width: 1050px) {
  .header {
    flex-direction: column;
    padding: 0 50px 120px 50px;

    &-text {
      align-self: center;
      width: 100%;
    }

    &-account {
      padding: 40px 0 0 0;
    }

    &-back {
      width: 100px;
    }
  }
}

@media screen and (max-width: 490px) {
  .header {
    padding: 0 0 40px 0;

    &-account {
      padding: 40px 0 0 25px;
    }

    &-back {
      width: 90px;
    }
  }
}
</style>
