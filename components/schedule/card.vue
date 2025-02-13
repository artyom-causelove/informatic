<template>
  <div class="card" :class="{ disabled }">
    <span class="title">{{ title }}</span>
    <span class="subtitle">{{ subtitle }}</span>
    <div class="difficult-outer" v-for="(_, index) in imageCount" :key="index">
      <img class="difficult" :src="image"/>
      <img class="difficult-hard" v-if="index === 2" :src="imageHard">
    </div>
    <div class="text-wrapper">
      <span class="text" v-for="(it, index) in text" :key="index">{{ it }}</span>
    </div>
    <div class="footer-wrapper">
      <span class="subfooter-disabled" v-if="disabled">{{ disabledText }}</span>
      <template v-else>
        <span class="subfooter" v-for="(text, index) in subfooter" :key="index">{{ text }}</span>
        <span class="footer">{{ footer }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
export type DataProperty = {
  subfooter?: string[]
  text: string[]
  title: string
  subtitle: string
  imageCount?: number
  footer?: string
};

type OptionProperty = {
  color: string
  colorDisabled?: string
  textColor?: string
  swapText?: boolean
};

const { data, image, imageHard, disabled, options, disabledText } = defineProps<{
  data: DataProperty,
  options: OptionProperty
  image: string
  imageHard?: string
  disabled?: boolean
  disabledText?: string
}>();
const { color, colorDisabled = '#5B5B5B', textColor = '#FFFFFF', swapText = false } = options;
const { subfooter, text, title, subtitle, footer, imageCount = 3 } = data;
const textOrderFirst = swapText ? 2 : 1;
const textOrderSecond = swapText ? 1 : 2;
const textMarginFirst = swapText ? '0 0 0 0' : '0 4px 0 auto'; 
const textMarginSecond = swapText ? '0 4px 0 auto' : '0 0 0 0'; 
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: max-content;

  background-image: url("/background-white.jpg");
  padding: 6px 0 0 0;
}

.title {
  font-family: 'Rabbits Elf', sans-serif;
  text-align: center;
  font-size: 32px;
  width: 100%;
}

.subtitle {
  line-height: 20px;
  font-family: 'Cinematografica', sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: 40px;
  width: 100%;

  padding: 4px 0 22px 0;
}

.difficult-outer {
  position: relative;
  margin: 0 2px;
}

.difficult-hard {
  z-index: -1;
  position: absolute;
  left: 95%;
  bottom: 20%;
  transform: translate(-50%, -50%);
}

.text-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin-top: -5px;
}

.text {
  &:nth-of-type(1) {
    align-self: flex-end;
    font-size: 28px;
    font-family: 'Cinematografica', sans-serif;
    font-weight: 700;
    margin: v-bind(textMarginFirst);

    order: v-bind(textOrderFirst);
  }

  &:nth-of-type(2) {
    align-self: flex-end;
    font-size: 34px;
    font-family: 'Cinematografica', sans-serif;
    font-weight: 300;
    margin: v-bind(textMarginSecond);

    order: v-bind(textOrderSecond);
  }

  &:nth-of-type(3) {
    font-family: 'Rabbits Elf', sans-serif;
    line-height: 65px;
    font-size: 64px;
    color: var(--color-red);
    width: 110px;
    text-align: center;

    order: 1000;
  }
}

.footer-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  clip-path: polygon(0% 6%, 100% 0%, 100% 100%, 0% 100%);
  background-color: v-bind(color);
  mix-blend-mode: multiply;
  opacity: 90%;
}

.subfooter {
  color: v-bind(textColor);
  font-family: 'Rabbits Elf', sans-serif;
  line-height: 40px;
  font-size: 40px;
  height: 30%;

  &:nth-of-type(2) {
    font-size: 32px;
    margin: 0 0 0 5px;
  }
}

.footer {
  text-align: center;
  color: v-bind(textColor);
  font-family: 'Rabbits Elf', sans-serif;
  line-height: 40px;
  font-size: 40px;
  width: 100%;
}

.card.disabled {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    opacity: 10%;
    background-color: v-bind(colorDisabled);
  }

  .title,
  .subtitle,
  .text {
    color: v-bind(colorDisabled);
  }

  .text:last-of-type {
    color: v-bind(color);
  }

  .footer-wrapper {
    background-color: v-bind(colorDisabled);
  }

  .subfooter-disabled {
    color: v-bind(textColor);
    font-family: 'Cinematografica', sans-serif;
    font-weight: 100;
    letter-spacing: 5px;
    font-size: 72px;
    padding: 15px 0 0 0;

    @supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
      padding: 0 0 20px 0;
    }
  }
}
</style>