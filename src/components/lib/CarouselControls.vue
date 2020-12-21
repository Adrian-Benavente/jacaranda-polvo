<template>
  <div :class="$style.controls">
    <button :class="[$style.arrow, $style.prev]" @click="$emit('move-prev')">
      <span class="sr-only">Anterior</span>
    </button>
    <div v-if="showNumbers" :class="$style.numbers">
      {{ current }}/{{ length }}
    </div>
    <button :class="[$style.arrow, $style.next]" @click="$emit('move-next')">
      <span class="sr-only">Siguiente</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CarouselControls",
  props: {
    current: Number,
    length: Number,
    showNumbers: Boolean,
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.controls {
  align-items: center;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 7rem;
  height: 3rem;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(91, 1440);
    width: fn.to-proportion-width(198, 1440);
  }
}
.arrow,
.numbers {
  backdrop-filter: blur(5px);
  background: {
    color: rgba(black, 0.8);
    position: center;
    repeat: no-repeat;
  }
  border: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  @media (min-width: 1440px) {
    background-size: fn.to-proportion-width(9.7, 1440)
      fn.to-proportion-width(20.37, 1440);
  }
}
.arrow {
  background-image: url("../../assets/img/lib/chevron.svg");
  &:focus {
    outline: 0;
  }
}
.numbers {
  align-items: center;
  display: flex;
  font: fn.to-rem(18) var(--montserrat);
  justify-content: center;
}
.next {
  transform: rotate(180deg);
}
</style>
