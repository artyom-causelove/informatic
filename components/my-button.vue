<script setup lang="js">
const { disabled, background = 'paper' } = defineProps(['disabled', 'background']);
</script>

<template>
<button class="button" :class="{ disabled, [background]: true }">
  <slot></slot>
</button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 30px;
  gap: 10px;

  border: 0;
  outline: 0;
  border-radius: 60px;
  background-size: cover;
  transition: transform 0.2s ease;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;
  
  :slotted(> div) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  :slotted(> span:first-child) {
    padding: 10px 30px 10px 30px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &.paper {
    background-image: url('/paper-background.png');
  }

  &.solid {
    background-color: var(--color-black);
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
}
</style>
