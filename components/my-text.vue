<script setup lang="js">
const { fontFamily } = defineProps(['font-family']);
</script>

<template>
<span class="text">
  <slot></slot>
</span>
</template>

<style scoped lang="scss">
.text {
  font-family: v-bind(fontFamily), sans-serif;
}
</style>
