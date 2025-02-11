<script setup lang="js">
const { pageItem } = defineProps(['page-item'])
const width = computed(() => pageItem == 1 ? '100%' : '50%');
</script>

<template>
  <div class="page-wrapper">
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  flex-shrink: 0;
  flex-grow: 0;

  height: 100%;
  width: v-bind(width);
  margin: 4px;

  padding: 10px;
}

.page {
  height: 100%;
  width: 100%;

  background-color: var(--color-very-light-gray);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>