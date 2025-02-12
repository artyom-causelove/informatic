<script lang="ts" setup>
import type { ColorNames } from '~/types/colors'
import type { FontFamilies, FontWeights } from '~/types/fonts'

interface Props {
  size?: number;
  color?: ColorNames;
  fontFamily?: FontFamilies;
  fontWeight?: FontWeights[NonNullable<Props['fontFamily']>];
}

const props = defineProps<Props>()

const calculateColor = computed(() => props.color ? `var(--color-${props.color})` : 'black')
const calculateFont = computed(() => props.fontFamily || 'Rabbits Elf')
const calculateSize = computed(() => (props.size || 24) + 'px')
const calculateLineHeight = computed(() => (props.size ? props.size * 1.4 : 24 * 1.4) + 'px')
</script>

<template>
  <p>
    <slot />
  </p>
</template>


<style scoped lang="scss">
p {
  font-size: v-bind(calculateSize);
  line-height: v-bind(calculateLineHeight);
  font-family: v-bind(calculateFont);
  font-weight: v-bind(fontWeight);
  color: v-bind(calculateColor);
}
</style>