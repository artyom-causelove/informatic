<template>
  <div class="card" :class="{ disabled }">
    <span class="title">{{ parsedData.title }}</span>
    <span class="subtitle">{{ parsedData.subtitle }}</span>
    <div class="difficult-outer" v-for="(_, index) in parsedData.imageCount">
      <img class="difficult" :src="image" />
      <img class="difficult-hard" v-if="index === 2" :src="imageHard">
    </div>
    <div class="text-wrapper">
      <span class="text" v-for="text in parsedData.text">{{ text }}</span>
    </div>
    <div class="footer-wrapper">
      <span class="subfooter-disabled" v-if="disabled">{{ disabledText }}</span>
      <template v-else>
        <span class="subfooter" v-for="text in parsedData.subfooter">{{ text }}</span>
        <span class="footer">{{ parsedData.footer }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="js">
const { data, fields, image, imageHard, disabled, options, disabledText } = defineProps(['data', 'fields', 'image', 'imageHard', 'disabled', 'options', 'disabledText']);
const { color, colorDisabled = '#5B5B5B', textColor = '#FFFFFF' } = options;

const parsedData = Object.entries(fields).reduce((result, [target, source]) => {
  if (Array.isArray(source)) {
    result[target] = source.map(it => data[it])
    return result;
  }

  result[target] = data[source];
  return result;
}, {});
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
  font-family: 'Cinematografica Heavy', sans-serif;
  text-align: center;
  font-size: 40px;
  width: 100%;

  margin: 8px 0 8px 0;
}

.difficult-outer {
  position: relative;
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
    font-family: 'Cinematografica Bold', sans-serif;
    margin-left: auto;
    margin-right: 4px;
  }

  &:nth-of-type(2) {
    align-self: flex-end;
    font-size: 34px;
    font-family: 'Cinematografica Light', sans-serif;
    margin-right: 10px;
  }

  &:nth-of-type(3) {
    font-family: 'Rabbits Elf', sans-serif;
    line-height: 65px;
    font-size: 64px;
    color: var(--color-red);
    width: 110px;
    text-align: center;
  }
}

.footer-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding-top: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  clip-path: polygon(0% 6%, 100% 0%, 100% 100%, 0% 100%);
  background-color: v-bind(color);
  mix-blend-mode: multiply;
  opacity: 90%;
}

.subfooter {
  color: v-bind(textColor);
  font-family: 'Rabbits Elf', sans-serif;
  line-height: 55px;
  font-size: 40px;
  height: 30%;
}

.footer {
  text-align: center;
  color: v-bind(textColor);
  font-family: 'Rabbits Elf', sans-serif;
  line-height: 10px;
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
    font-family: 'Cinematografica Thin', sans-serif;
    letter-spacing: 5px;
    font-size: 72px;
    padding-top: 15px;
  }
}
</style>