<script setup lang="js">
const { courses } = defineProps(['courses']);
</script>

<template>
  <div class="courses">
    <div v-for="(course, index) in courses" class="courses-item" :class="{ disabled: course.status === 'inactive' }" :key="index">
      <div class="courses-item-image-wrapper">
        <img class="courses-item-image" :src="course.image"/>
      </div>
      <span class="courses-item-title">{{ course.title }}</span>
      <span class="courses-item-timeline">{{ course.timeline.toLocaleUpperCase() }}</span>
      <ud-button class="courses-item-button"
        variant="paper"
        :disabled="course.status === 'inactive'"
        @click="$emit('set-step', { value: 'tariff', data: course })"
      >
        <ud-text font-family="UA Brand" :font-weight="700" :size="24" style="width: min-content;">
          Выбрать
        </ud-text>
      </ud-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.courses {
  display: flex;
  justify-content: center;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 130px 0 0;

    &:last-child {
      margin: 0 0 0 0;
    }

    &:hover &-image-wrapper::before {
      box-shadow: 0 0 130px 90px rgba(0, 0, 82, 0.9);
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
      cursor: pointer;
      position: relative;
      width: 443px;

      transition: box-shadow 0.2s ease-in-out;
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

    &.disabled {
      .courses-item-image-wrapper::before {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .courses {
    &-item {
      margin: 0 60px 0 0;
    }
  }
}

@media screen and (max-width: 1050px) {
  .courses {
    flex-direction: column;
    
    &-item {
      margin: 0 0 85px 0;
    }
  }
}

@media screen and (max-width: 490px) {
  .courses {
    padding: 0 15px 0 15px;
    width: 100%;

    &-item {
      width: 100%;

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