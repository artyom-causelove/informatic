<script setup lang="js">
const { tariff, period } = defineProps(['tariff', 'period']);

const month = computed(() => {
  const date = new Date();
  const result = [date.toLocaleString('default', { month: 'long' })];

  if (period === 'full') {
    date.setMonth(date.getMonth() + 2);
    result.push(date.toLocaleString('default', { month: 'long' }));
  }

  return result.join(' - ');
});

const price = computed(() => {
  const currentPeriod = tariff.periods.find(it => it.type === period);

  if (!currentPeriod.price) return 'Бесплатно';
  else if (period === 'month') return `${currentPeriod.price} Руб. /мес`;
  else if (period === 'full') return `${currentPeriod.price} руб.`;
});
</script>

<template>
  <div class="pages-shop-tariff-card-test flex-column">
    <img class="background" :src="tariff.image">
    <transition>
      <span class="timeline rabbits-elf" :key="month">{{ month }}</span>
    </transition>
    <span class="title cinematografica">-{{ tariff.title }}-</span>
    <img class="separator" src="/separator.png">
    <div class="summary">
      <img class="summary-background" src="/paper-list.png">
      <div class="summary-content flex-column">
        <template v-for="(it, index) in tariff.summary" :key="index">
          <div v-if="it.visible" class="summary-content-item flex">
            <span class="summary-content-item-count black ua-brand" :style="{ color: it.color }">{{ it.count }}</span>
            <span class="summary-content-item-text ua-brand">{{ it.text }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="price">
      <transition>
        <span class="price-text rabbits-elf" :key="price">{{ price }}</span>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pages-shop-tariff-card-test {
  @function ratio($base316px) {
    @return calc(316 / $base316px);
  }

  container-type: inline-size;
  position: relative;
  overflow: hidden;
  align-items: center;

  .background {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .timeline {
    position: absolute;
    right: 10%;
    top: 0;

    font-size: calc(100cqw / ratio(32));
  }

  .title {
    padding: calc(100cqw / ratio(10)) 0 0 0;
    font-size: calc(100cqw / ratio(96));
  }

  .separator {
    width: calc(100cqw / ratio(150));
    margin: 0 0 calc(100cqw / ratio(10)) 0;
    mix-blend-mode: darken;
  }

  .summary {
    position: relative;
    margin: 0 0 calc(100cqw / ratio(20)) 0;

    &-background {
      width: calc(100cqw / ratio(250));
      height: auto;
    }

    &-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 
        calc(100cqw / ratio(35))
        calc(100cqw / ratio(30))
        0
        calc(100cqw / ratio(30));

      &-item {
        align-items: flex-end;

        &-count {
          min-width: calc(100cqw / ratio(40));
          font-size: calc(100cqw / ratio(32));
        }

        &-text {
          padding: 0 0 calc(100cqw / ratio(5)) 0;
          font-size: calc(100cqw / ratio(16));
        }
      }
    }
  }

  .price {
    min-height: calc(100cqw / ratio(110));
    width: calc(100cqw / ratio(194));

    &-text {
      display: block;
      width: inherit;
      height: inherit;
      font-size: calc(100cqw / ratio(48));
      line-height: calc(100cqw / ratio(48));
      text-align: center;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease-in-out;
    position: absolute;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
