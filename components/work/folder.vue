<script lang="ts" setup>
type Name = 'pdf' | 'txt' | 'py';

const props = defineProps<{
  name: Name;
  description?: string;
  size?: number;
}>();

const { name, size = 190, description } = props;
</script>

<template>
  <div class="folder-wrapper">
    <img src="/folder.png" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="folder-name">
      {{ name }}
    </div>
    <div v-if="description" class="folder-description" :style="{ width: size + 'px' }">
      {{ description }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.folder-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.folder-name {
  position: absolute;
  font-family: 'Cinematografica Heavy';
  font-size: 64px;
  text-align: center;
  color: var(--color-text-dark-red);
  top: 0;
  margin-top: 100px;
  margin-left: 7px;
  font-weight: 900;
}

.folder-description {
  font-family: 'UA Brand';
  font-size: 16px;
  color: white;
  text-align: center;
}
</style>