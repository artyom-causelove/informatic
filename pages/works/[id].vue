<script lang="ts" setup>
const { id } = useRoute().params;
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <div>header {{ id }}</div>
    </template>
    <template #main>
      <div>main</div>
    </template>
  </NuxtLayout>
</template>

<style></style>