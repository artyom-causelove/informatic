<template>
  <header class="header">
    <BackLink class="back-link"/>
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
}

@media screen and (max-width: 1455px) {
  .back-link {
    display: none;
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
