<template>
  <header class="header">
    <BackLink class="back-link"/>
    <div id="header"></div>
  </header>
  <main id="main">
  </main>
  <slot></slot>
</template>

<style scoped lang="scss">
  .header {
    overflow: hidden;
    position: relative;

    width: 100%;

    background-size: cover;
    background-image: url("/background-black.png");
  }

  #header {
    width: 100%;
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
</style>
