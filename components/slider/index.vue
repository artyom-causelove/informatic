<script setup lang="js">
const { breakpoints, page, pageItem } = defineProps(['breakpoints', 'page', 'page-item']);
const offset = computed(() => {
  if (pageItem == 1) return `calc(${-100 * (page - 1)}% - ${8 * page}px)`;
  else return `calc(${-100 * (page - 1)}% - ${16 * page}px + 8px)`;
});
</script>

<template>
  <div class="slider">
    <div class="slider-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  overflow-x: hidden;
}

.slider-wrapper {
  display: flex;

  height: 100%;
  padding: 8px 0;

  transition: transform 0.2s ease-in-out;
  transform: translate(v-bind(offset));
}
</style>