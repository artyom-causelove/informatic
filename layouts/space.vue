<template>
  <main class="main">
    <slot name="main"></slot>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;

  background-image: url('/space-ambient.png');
}
</style>