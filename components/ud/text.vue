<script lang="ts" setup>
import type { ColorNames } from '~/types/colors'
import type { FontFamilies, FontWeights } from '~/types/fonts'

interface Props {
  size?: number;
  color?: ColorNames;
  fontFamily?: FontFamilies;
  fontWeight?: FontWeights[NonNullable<Props['fontFamily']>];
  component?: 'p' | 'span';
}

const props = defineProps<Props>()

const calculateColor = computed(() => props.color ? `var(--color-${props.color})` : 'black')
const calculateFont = computed(() => props.fontFamily || 'Rabbits Elf')
const calculateSize = computed(() => (props.size || 24) + 'px')
const calculateLineHeight = computed(() => (props.size ? props.size * 1.4 : 24 * 1.4) + 'px')
const calculateComponent = computed(() => props.component || 'p')
</script>

<template>
  <component :is="calculateComponent" class="ud-text">
    <slot />
  </component>
</template>


<style scoped lang="scss">
.ud-text {
  font-size: v-bind(calculateSize);
  line-height: v-bind(calculateLineHeight);
  font-family: v-bind(calculateFont);
  font-weight: v-bind(fontWeight);
  color: v-bind(calculateColor);
}
</style>