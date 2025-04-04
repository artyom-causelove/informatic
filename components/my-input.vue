<script setup lang="js">
const { modelValue } = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const text = useTemplateRef('text');
</script>

<template>
<div class="input" @click="text.focus()">
  <div class="text"
    @input="emit('update:modelValue', $event.target.innerText)"
    contenteditable="plaintext-only"
    ref="text"
  >{{ modelValue }}</div>
</div>
</template>

<style scoped lang="scss">
.input {
  cursor: text;
  display: flex;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: none;
  border: 3px solid rgba(0, 0, 0, 0.5);
}

.text {
  width: 100%;
  min-height: 1em;
  padding: 0 10px 0 10px;

  outline: none;
  font-size: inherit;
}
</style>
