<script setup lang="js">
const { data: user } = await useFetch('/api/user');
const { data: courses } = await useFetch('/api/courses');
const step = ref('course');
const current = ref(null);
const result = ref([]);

const setStep = ({ value, data }) => {
  current.value = data;
  step.value = value;
  result.value = [...result.value, data];
};
</script>

<template>
  <NuxtLayout name="space">
    <template #main>
      <div class="header">
        <img class="header-text" src="/shop.png"/>
        <div class="header-account">
          <account class="header-account-item" :name="user.name" :surname="user.surname"/>
        </div>
      </div>
      <div class="main">
        <pages-shop-courses v-if="step === 'course'" :courses="courses" @set-step="setStep"/>
        <pages-shop-tariffs v-if="step === 'tariff'" :course="current" @set-step="setStep"/>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  padding: 0 0 50px 0;

  &-text {
    max-width: 500px;
    margin: 0 100px 0 auto;
  }

  &-account {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    max-width: calc(50% - 350px);
    padding: 60px 0 0 0;
  }
}

.main {
  padding: 0 0 120px 0;
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
      width: 100%;
      align-self: center;
    }

    &-account {
      padding: 40px 0 0 0;
    }
  }
}

@media screen and (max-width: 490px) {
  .header {
    padding: 0 0 120px 0;

    &-account {
      padding: 40px 0 0 25px;
    }
  }
}
</style>