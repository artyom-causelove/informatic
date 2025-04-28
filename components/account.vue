<template>
  <div class="account">
    <img class="photo" :src="avatar" :alt="name" />
    <div class="separator"></div>
    <span class="fullname">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  avatar?: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.account {
  display: flex;
  align-items: center;

  .photo {
    width: 46px;
    height: 46px;

    background-size: cover;
    border-radius: 50%;
  }

  .separator {
    width: 15px;
  }

  .fullname {
    text-decoration: underline;
    font-family: 'UA Brand', sans-serif;
    font-size: 24px;
    color: var(--color-white);
  }
}
</style>