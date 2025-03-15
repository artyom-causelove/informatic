<script setup lang="js">
const { lesson } = defineProps(['lesson']);

const total = ref(lesson.tasks.length);
const totalRight = ref(
  lesson.tasks.reduce((acc, it) => {
    if (it.answer?.right) {
      return acc + 1;
    }
    return acc;
  }, 0)
);
</script>

<template>
<div class="main">
  <div class="info main-info">
    <span class="info-text">Домашка:</span>
    <div class="info-title-wrapper">
      <span class="info-title">
        {{ lesson.date }} “{{ lesson.title }}”
      </span>
    </div>
    <div class="info-stats">
      <div class="info-tasks">
        <span class="info-tasks-number">{{ total }}</span>
        <span class="info-tasks-text">заданий</span>
      </div>
      <div class="info-tasks">
        <span class="info-tasks-right-number">{{ totalRight }}</span>
        <span class="info-tasks-text">верно</span>
      </div>
      <my-button class="info-stats-button">
        <img src="/box-drop.png"/>
        <div>
          <span class="ua-brand bold px16">Скачать все</span>
          <span class="ua-brand bold px16">файлы дз</span>
        </div>
      </my-button>
    </div>
  </div>
  <div class="tasks main-tasks">
    <div
      v-for="(it, index) in lesson.tasks" :key="index" 
      class="tasks-item"
    >
      <span class="tasks-number">{{ index + 1 }}</span>
      <div class="tasks-content">
        <span class="tasks-text">{{ it.text }}</span>
        <div class="tasks-actions">
          <file v-if="it.file" class="tasks-actions-file" :file="it.file"/>
          <my-input class="tasks-actions-input"></my-input>
          <my-button class="info-stats-button">
            <span class="ua-brand bold px24">Ответить</span>
          </my-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.main {
  padding: 50px 130px 0 130px;
}

/** info info-text info-title-wrapper info-title info-stats info-stats-button 
 *  info-tasks info-tasks-number info-tasks-right-number info-tasks-text
 */
.info {
  display: flex;
  align-items: center;

  &-text {
    font-family: 'Cinematografica', sans-serif;
    font-weight: 100;
    font-size: 300px;
    line-height: 105px;
    letter-spacing: 0;
    transform: translateY(-50px);
  }

  &-title-wrapper {
    display: flex;
    margin: 0 auto 0 auto;
    padding: 40px 0 0 0;
  }

  &-title {
    font-family: 'Cinematografica', sans-serif;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 10px;
    line-height: 65px;
    text-align: center;
    width: 355px;
  }

  &-stats {
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 0;

    &-button {
      margin: 20px 0 0 0;
    }
  }

  &-tasks {
    display: flex;

    &-number, &-right-number {
      font-family: 'UA Brand', sans-serif;
      font-weight: 700;
      font-size: 40px;
      margin: 0 10px 0 auto;
    }

    &-right-number {
      color: var(--color-text-light-green);
    }

    &-text {
      margin: 0 0 25px 0;
      font-family: 'UA Brand', sans-serif;
      font-size: 40px;
    }
  }
}

/** tasks tasks-item tasks-number tasks-content tasks-text 
 *  tasks-actions tasks-actions-file tasks-actions-input
 */
.tasks {
  display: flex;
  flex-direction: column;
  margin: 140px 0 0 0;

  &-item {
    display: flex;
    align-items: start;
    margin: 0 0 200px 0;

    &:last-of-type {
      margin: 0 0 0 0;
    }
  }

  &-number {
    font-family: 'Cinematografica', sans-serif;
    font-weight: 400;
    font-size: 128px;
    line-height: 50px;
  }

  &-content {
    display: flex;
    margin: 0 0 0 55px;
  }

  &-text {
    font-family: 'UA Brand', sans-serif;
    font-size: 24px;
    font-weight: 400;
    white-space: pre-wrap;
    margin: 0 75px 0 0;
  }

  &-actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-file {
      width: 175px;

      &:deep(.folder-title) {
        color: var(--color-black);
      }
    }

    &-input {
      margin: 30px 0 30px 0;
      width: 350px;
      height: 100px;

      font-size: 24px;

      &:nth-child(1) {
        margin: 0 0 30px 0;
      }
    }
  }
}

/** 1550-info 1550-info-text 1550-info-title-wrapper 1550-info-stats
 *  1550-tasks 1550-tasks-content 1550-tasks-text 
 *  1550-tasks-actions 1550-tasks-actions-file 1550-tasks-actions-input
 */
@media screen and (max-width: 1550px) {
  .info {
    flex-wrap: wrap;

    &-text {
      margin: 0 auto 0 0;
      order: 1;
    }

    &-title-wrapper {
      justify-content: center;
      padding: 60px 0 0 0;
      width: 100%;
      order: 3;
    }

    &-stats {
      order: 2;
    }
  }

  .tasks {
    margin: 100px 0 0 0;

    &-content {
      position: relative;
      flex-wrap: wrap;
      margin: 0 0 0 75px;
      width: 100%;
    }

    &-text {
      margin: 0 0 0 0;
    }

    &-actions {
      &-file {
        position: absolute;
        right: 0;
        bottom: 0;
      }

      &-input {
        margin: 30px 0 30px 0;

        &:nth-child(1) {
          margin: 30px 0 30px 0;
        }
      }
    }
  }
}

/** 1000-main
 *  1000-info 1000-info-text 1000-info-title-wrapper 1000-info-title 1000-info-stats
 *  1000-tasks-item 1000-tasks-content
 *  1000-tasks-actions 1000-tasks-actions-file
 */
@media screen and (max-width: 1000px) {
  .main {
    overflow-x: hidden;
    padding: 120px 60px 0 60px;
  }

  .info {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;

    &-text {
      font-size: 250px;
    }

    &-title-wrapper {
      order: 2;
      margin: 60px 0 70px 0;
      width: auto;
    }

    &-title {
      text-align: start;
    }

    &-stats {
      align-items: flex-start;
      order: 3;
    }
  }

  .tasks {
    &-item {
      align-items: center;
      flex-direction: column;
    }

    &-content {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      margin: 100px 0 0 0;
    }

    &-actions {
      margin: 30px 0 0 0;

      &-file {
        position: relative;
      }
    }
  }
}

/** 550-main */
@media screen and (max-width: 550px) {
  .main {
    padding: 80px 25px 0 25px;
  }

  .info {
    &-text {
      font-size: 150px;
      line-height: 50px;
    }

    &-title-wrapper {
      padding: 0 0 0 0;
      margin: 50px 0 50px 0;
    }

    &-title {
      font-size: 42px;
      letter-spacing: 5px;
      line-height: 40px;
      width: 210px;
    }

    &-stats {
      padding: 0 0 0 0;
    }

    &-tasks {
      &-number, &-right-number {
        font-size: 30px;
        margin: 0 5px 0 auto;
      }

      &-text {
        font-size: 30px;
        margin: 0 0 10px 0;
      }
    }
  }

  .tasks {
    margin: 45px 0 0 0;

    &-item {
      margin: 0 0 80px 0;
    }

    &-number {
      font-size: 84px;
      line-height: 88px;
    }

    &-content {
      margin: 30px 0 0 0;
    }

    &-text {
      font-size: 16px;
    }

    &-actions {
      &-file {
        width: 135px;
      }
    }
  }
}
</style>
