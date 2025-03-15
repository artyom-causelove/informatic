<script setup lang="ts">
const { prevent } = defineProps(['prevent']);

const router = useRouter();
</script>

<template>
  <nuxt-link class="link" @click="prevent || router.back()">
    <img class="image" src="/paper-back.png">
  </nuxt-link>
</template>

<style scoped lang="scss">
.image {
  width: 100%;
  height: auto;
}
</style>
