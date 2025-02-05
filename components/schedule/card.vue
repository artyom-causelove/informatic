<template>
  <div class="card" :class="{ disabled }">
    <span class="card-task" :class="{ disabled }">{{ data[fields['subtitle']] }}</span>
    <span class="card-title" :class="{ disabled }">{{ data[fields['title']] }}</span>
    <div class="card-difficult-wrapper" :class="{ 'card-difficult-wrapper-fire': data[fields['imageCount']] >= 3 }">
      <nuxt-img v-for="(number, index) in data[fields['imageCount']]" class="card-difficult" :src="image"/>
    </div>
    <div class="card-estimate-wrapper">
      <span class="card-score-text" :class="{ disabled }">{{ Array.isArray(fields['text']) ? data[fields['text'][0]] : data[fields['text']] }}</span>
      <span class="card-score-value" :class="{ disabled }" v-if="Array.isArray(fields['text'])">{{ data[fields['text'][1]] }}</span>
      <span class="card-estimate">/{{ data[fields['estimate']] }}</span>
    </div>
    <span v-if="disabled" class="card-blocked">
      {{ disabledText }}
    </span>
    <template v-else>
      <div class="card-datetime-wrapper" :class="{ alone: !Array.isArray(fields['footer']) }">
        <span class="card-date">{{ Array.isArray(fields['footer']) ? data[fields['footer'][0]] : data[fields['footer']] }}</span>
        <span class="card-time" v-if="Array.isArray(fields['footer'])">{{ data[fields['footer'][1]] }}</span>
      </div>
      <span class="card-weekday">{{ data[fields['subfooter']] }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
  const { data, disabled, disabledText, fields, color, textColor, image } = defineProps(['data', 'disabled', 'disabledText', 'fields', 'color', 'textColor', 'image']);
</script>

<style scoped lang="scss">
  .card {
    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 262px;
    height: 304px;

    padding-top: 20px;

    background-image: url("/background-white.jpg");

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: -10px;

      height: 110px;
      width: calc(100% + 20px);

      mix-blend-mode: multiply;
      background-color: v-bind(color);
      opacity: 90%;

      transform: rotateZ(-1.5deg);
    }

    &.disabled {
      &::after {
        background-color: #5B5B5B;
      }
    }

    &-task {
      font-family: 'Rabbits Elf', sans-serif;
      line-height: 25px;
      font-size: 32px;

      margin-bottom: 20px;
    }

    &-title {
      font-family: 'Cinematografica Heavy', sans-serif;
      line-height: 25px;
      font-size: 40px;

      margin-bottom: 12px;
    }

    &-difficult-wrapper {
      position: relative;

      &-fire {
        &::after {
          z-index: -1;

          content: '';
          position: absolute;
          right: -10px;
          top: -10px;

          width: 34px;
          height: 34px;

          background-image: url('/fire.png');
        }
      }
    }

    &-difficult {
      position: relative;

      margin-left: 3px;

      &:first-child {
        margin-left: 0;
      }
    }

    &-score-text {
      position: absolute;

      top: 64%;
      left: 40%;

      font-size: 28px;
      font-family: 'Cinematografica Bold', sans-serif;

      align-self: flex-end;
    }

    &-score-value {
      position: absolute;

      top: 50%;
      left: 50%;

      font-size: 34px;
      font-family: 'Cinematografica Light', sans-serif;
    }

    &-estimate-wrapper {
      position: relative;
      
      width: 100%;
      height: 30px;
    }

    &-estimate {
      position: absolute;

      top: 15px;
      left: 163px;

      font-family: 'Rabbits Elf', sans-serif;
      font-size: 64px;
      line-height: 25px;
      color: #EF3A5F;
    }

    &-date {
      font-family: 'Rabbits Elf', sans-serif;
      font-size: 40px;
      color: v-bind(textColor);
      line-height: 29px;

      margin-right: 8px;
    }

    &-datetime-wrapper {
      z-index: 1;
      display: flex;

      margin-top: 50px;

      &.alone {
        margin-top: 60px;
      }
    }

    &-time {
      font-family: 'Rabbits Elf', sans-serif;
      font-size: 32px;
      color: v-bind(textColor);
      line-height: 29px;
    }

    &-weekday {    
      z-index: 1;
      font-family: 'Rabbits Elf', sans-serif;
      font-size: 40px;
      color: v-bind(textColor);
      line-height: 30px;
    }

    &-blocked {
      z-index: 1;
      font-family: 'Cinematografica Thin', sans-serif;
      letter-spacing: 5px;
      font-size: 72px;
      color: v-bind(textColor);

      margin-top: 55px;
    }
  }

  span.disabled {
    color: #5B5B5B;
  }
</style>
