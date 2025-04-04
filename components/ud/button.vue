<script lang="ts" setup>
interface Props {
  // Основные свойства
  variant?: 'paper' | 'default'; // тип кнопки
  size?: 'sm' | 'md' | 'lg';    // размер кнопки
  icon?: string;                // путь к иконке
  iconPosition?: 'left' | 'right'; // позиция иконки
  disabled?: boolean;

  // Дополнительные стили
  customClass?: string;
  customStyle?: object;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  iconPosition: 'left',
  disabled: false,
  icon: '',
  customClass: '',
  customStyle: () => ({})
})

// Вычисляем классы кнопки
const buttonClasses = computed<Record<string, boolean>>(() => ({
  'ud-button': true,
  [`ud-button--${props.variant}`]: true,
  [`ud-button--${props.size}`]: true,
  'ud-button--disabled': props.disabled,
  [props.customClass || '']: !!props.customClass
}))

// Вычисляем размеры на основе size
const sizeMap = {
  sm: { button: { width: '180px', height: '50px' }, icon: { width: '25px', height: '36px' } },
  md: { button: { width: '235px', height: '65px' }, icon: { width: '33px', height: '48px' } },
  lg: { button: { width: '280px', height: '80px' }, icon: { width: '40px', height: '58px' } }
}

const buttonStyles = computed(() => ({
  ...sizeMap[props.size].button,
  ...(props.customStyle || {})
}))
</script>

<template>
  <button
    :class="buttonClasses"
    :style="buttonStyles"
    :disabled="disabled"
  >
    <img
      v-if="icon && iconPosition === 'left'"
      :src="icon"
      :style="sizeMap[size].icon"
      class="ud-button__icon"
    >
    <slot />
    <img
      v-if="icon && iconPosition === 'right'"
      :src="icon"
      :style="sizeMap[size].icon"
      class="ud-button__icon"
    >
  </button>
</template>

<style scoped lang="scss">
.ud-button {
  border-radius: 60px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  // для анимации, чтобы не было размытия текста
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  &--paper {
    background-image: url('/paper-background.png');
    background-size: cover;

    &:hover {
      transform: scale(1.02);
    }
  }

  &--default {
    background-color: #ffffff;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
}

.ud-button__icon {
  object-fit: contain;
}
</style>