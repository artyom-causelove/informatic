<script setup lang="js">
  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>

<template>
  <div v-if="loading" class="spinner-background">
    <spinner class="spinner"/>
  </div>
  <header class="header">
    <back-link class="back-link"/>
    <slot name="header"></slot>
    <img class="paper-up" src="/paper-up.png"/>
  </header>
  <main class="main">
    <slot name="main"></slot>
  </main>
  <footer class="footer">
    <img class="paper-down" src="/paper-down.png"/>
    <slot name="footer"></slot>
  </footer>
</template>

<style scoped lang="scss">
.spinner-background {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.99);
}

.spinner {
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  width: 100%;

  background-size: cover;
  background-image: url("/background-black.png");
}

.main {
  overflow: hidden;
}

.footer {
  overflow: hidden;
  width: 100%;
  min-height: 550px;

  background-size: cover;
  background-image: url("/space.png");
}

.back-link {
  cursor: pointer;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 195px;
}

@media screen and (max-width: 850px) {
  .back-link {
    width: 100px;
  }
}

@media screen and (max-width: 500px) {
  .back-link {
    width: 90px;
  }
}

.paper-up, .paper-down {
  z-index: 1;
  width: 100%;
}

.paper-down {
  min-width: 1600px;
}
</style>
