<script setup lang="js">
defineEmits(['my-click'])
</script>

<template>
  <button class="button">
    <div class="trigger" @click="$emit('my-click')">
      <img class="image" src="/arrow.png"/>
    </div>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px;

  border: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url('/paper-circle.png');
}

.trigger {
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 25px 20px;

  border-radius: 50%;
}

.image {
  width: 100%;
  height: 100%;
}
</style>