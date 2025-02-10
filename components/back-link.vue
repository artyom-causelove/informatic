<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <NuxtLink class="link" @click="router.back()">

    <img class="image" src="/paper-back.png" width="195" height="110">
  </NuxtLink>
</template>