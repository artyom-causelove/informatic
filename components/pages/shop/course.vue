<script setup lang="js">
const { courses } = defineProps(['courses']);

const currentCourse = useCookie('shop.current.course.id', { maxAge: 604800 });

function onClick(course) {
  currentCourse.value = course.id;
};
</script>

<template>
  <div class="courses" v-gsap.stagger.from="{ opacity: 0 }" v-gsap.stagger.fromInvisible.once.to="{ opacity: 1 }">
    <pages-shop-cart-button class="cart-button"/>
    <nuxt-link v-for="(course, index) in courses" :key="index"
      class="courses-link" :class="{ disabled: course.status === 'inactive' }"
      @click="course.status === 'active' && onClick(course)"
      to="/shop/tariff"
    >
      <div class="courses-item">
        <div class="courses-item-image-wrapper">
          <img class="courses-item-image" :src="course.image"/>
        </div>
        <span class="courses-item-title">{{ course.title }}</span>
        <span class="courses-item-timeline">{{ course.timeline.toLocaleUpperCase() }}</span>
        <my-button :disabled="course.status === 'inactive'">
          <span class="ua-brand bold px24">Выбрать</span>
        </my-button>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.courses {
  position: relative;
  display: flex;
  justify-content: center;
  width: min-content;
  margin: 0 auto;

  .cart-button {
    position: absolute;
    bottom: 100%;
    left: calc(100% + 15px);
    transform: translateY(70%);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(70%) scale(1.02);
    }
  }

  &-link {
    margin: 0 130px 0 0;
    
    &:last-child {
      margin: 0 0 0 0;
    }

    &.disabled {
      pointer-events: none;

      .courses-item {
        cursor: not-allowed;
      }

      .courses-item .courses-item-image-wrapper::before {
        display: none;
      }

      .courses-item:hover .courses-item-image {
        transform: none;
      }
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover &-image-wrapper::before {
      box-shadow: 0 0 130px 90px rgba(0, 0, 82, 0.45);
    }

    &:hover &-image {
      transform: scale(1.025);
    }

    &-image-wrapper {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 5px);
        border-radius: 50%;

        box-shadow: 0 0 0 0 rgba(0, 0, 102, 0);
        transition: box-shadow 0.2s ease-in-out;
      }
    }

    &-image {
      z-index: 1;
      position: relative;
      width: 443px;

      transition: transform 0.2s ease-in-out;
    }

    &-title {
      z-index: 1;
      font-family: 'Rabbits Elf';
      font-size: 96px;
      line-height: 130px;
      color: var(--color-white);
    }
    
    &-timeline {
      z-index: 1;
      font-family: 'Cinematografica';
      font-size: 36px;
      letter-spacing: 4px;
      font-weight: 300;
      color: var(--color-white);

      margin: -40px 0 40px 0;
    }
  }
}

@media screen and (max-width: 1280px) {
  .courses {
    &-link {
      margin: 0 60px 0 0;
    }

    .cart-button {
      bottom: calc(100% + 30px);
      right: 0;
      left: unset;
      transform: translateY(0);

      &:hover {
        transform: translateY(0) scale(1.02);
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .courses {
    flex-direction: column;
    
    &-link {
      margin: 0 0 85px 0;
    }

    .cart-button {
      bottom: calc(100% + 90px);
      right: 0;
    }
  }
}

@media screen and (max-width: 490px) {
  .courses {
    padding: 0 15px 0 15px;
    width: 100%;

    .cart-button {
      position: initial;
      align-self: center;
      margin: 0 0 60px 0;
    }

    &-link {
      width: 100%;
    }

    &-item {
      &-image {
        width: 100%;
      }

      &-title {
        font-size: 80px;
      }

      &-timeline {
        font-size: 26px;
      }
    }
  }
}
</style>