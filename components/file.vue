<script setup lang="js">
const { file } = defineProps(['file']);
const extension = ref(file.title.split('.').at(-1));
</script>

<template>
<div class="folder">
  <div class="folder-wrapper">
    <img class="folder-image" src="/folder.png"/>
    <div class="folder-extension-wrapper">
      <span class="folder-extension">{{ extension }}</span>
    </div>
  </div>
  <span class="folder-title">{{ file.title }}</span>
</div>
</template>

<style scoped lang="scss">
.folder {
  display: flex;
  flex-direction: column;
  container-type: inline-size;

  &-wrapper {
    position: relative;
  }

  &-image {
    width: 100%;
  }

  &-extension-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 4%;
    top: 54%;
  }

  &-extension {
    display: inline-block;
    width: 100%;

    font-family: 'Cinematografica', sans-serif;
    font-weight: 900;
    font-size: 38cqw;
    line-height: 0;
    text-align: center;
    color: var(--color-text-dark-red);
  }

  &-title {
    padding-top: 10px;
    font-family: 'UA Brand', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: var(--color-white);
  }
}
</style>
