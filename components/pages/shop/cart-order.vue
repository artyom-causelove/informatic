<script setup lang="js">
const { user } = defineProps(['user']);

const isLogin = useCookie('login', { default: () => false });
</script>

<template>
  <div class="cart-order flex-column">
    <span class="title rabbits-elf capitalize">оформление</span>
    <span class="account-title ua-brand px24 bold capitalize">аккаунт</span>
    <my-button v-if="!isLogin" @click="isLogin = true" class="account-button">
      <span class="account-button-text ua-brand px24 bold">Войти в платформу</span>
    </my-button>
    <template v-else>
      <account class="account-component" :name="user.name" :surname="user.surname"/>
      <my-button @click="isLogin = false" class="account-button-logout">
        <span class="account-button-logout-text ua-brand px16 bold">Вы не Никита? Выйти</span>
      </my-button>
    </template>
    <span class="account-info ua-brand px20">Чтобы курсы добавились на твою платформу</span>
    <span class="email-title ua-brand px24 bold">eMail</span>
    <input class="email-input" type="text">
    <span class="email-info ua-brand px20">Чтобы мы отправили чек</span>
    <my-button class="order-button" background="solid">
      <span class="order-button-text ua-brand px24 bold white">Оформить заказ</span>
    </my-button>
    <span v-if="!isLogin" class="order-info ua-brand px20">
      <b>Предупреждение:</b> вы не вошли в аккаунт.
      Автоматическая выдача курса после оплаты
      не сработает. Для начисления курса вам
      придется отправить чек в <u>техническую
      поддержку</u>.
      <br/>
      <br/>
      Намного проще будет <u>авторизоваться
      на платформе</u> сейчас.
    </span>
  </div>
</template>

<style scoped lang="scss">
.cart-order {
  padding: 170px 300px 100px 155px;

  .title {
    align-self: center;
    margin: 0 0 15px 0;
    font-size: 96px;
  }

  .account {
    &-title {
      margin: 0 0 15px 0;
      padding: 0 0 0 20px;
    }

    &-button {
      height: 80px;
      margin: 0 0 20px 0;
    }

    &-button-logout {
      height: 45px;
      max-width: 320px;
      margin: 0 0 20px 0;
    }

    &-info {
      margin: 0 0 50px 0;
      padding: 0 0 0 20px;
    }

    &-component {
      margin: 0 0 15px 0;

      &:deep(.photo) {
        width: 76px;
        height: 76px;
      }

      &:deep(.fullname) {
        color: var(--color-black);
      }
    }
  }

  .email {
    &-title {
      margin: 0 0 15px 0;
      padding: 0 0 0 20px;
    }

    &-input {
      height: 100px;
      margin: 0 0 20px 0;
      padding: 0 20px 0 20px;

      font-family: 'UA Brand', sans-serif;
      font-size: 26px;
      outline: none;
      border: 3px solid rgba(0, 0, 0, 0.5);
    }

    &-info {
      margin: 0 0 80px 0;
      padding: 0 0 0 20px;
    }
  }

  .order {
    &-button {
      align-self: center;

      max-width: 340px;
      height: 65px;
      margin: 0 0 60px 0;
      padding: 0 20px 0 20px;
    }
  }
}

@media screen and (max-width: 1630px) {
  .cart-order {
    padding: 170px 150px 100px 100px;
  }
}

@media screen and (max-width: 1300px) {
  .cart-order {
    padding: 75px 50px 100px 50px;

    .title {
      font-size: 64px;
    }

    .account {
      &-title {
        font-size: 16px;
      }

      &-info {
        font-size: 12px;
      }

      &-button {
        height: 50px;

        &-text {
          font-size: 18px;
        }
      }

      &-button-logout {
        height: 50px;
      }

      &-component {
        &:deep(.photo) {
          width: 34px;
          height: 34px;
        }

        &:deep(.fullname) {
          color: var(--color-black);
          font-size: 18px;
        }
      }
    }

    .account-button-logout > .account-button-logout-text {
      padding: 10px 15px 10px 15px;
    }

    .email {
      &-title {
        font-size: 16px;
      }

      &-info {
        font-size: 12px;
      }

      &-input {
        height: 60px;
        font-size: 24px;
      }
    }

    .order {
      &-button {
        height: 50px;
        margin: 0 0 30px 0;

        &-text {
          font-size: 18px;
        }
      }

      &-info {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .cart-order {
    padding: 0 50px 100px 50px;
  }
}
</style>
