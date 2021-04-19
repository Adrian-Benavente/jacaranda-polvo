<template>
  <button :class="$style.button" @click="toggleSound">
    <span :class="[$style.loader, !store.state.sound && $style.muted]">
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
      <span :class="$style.stroke"></span>
    </span>
    <span :class="$style.statusText">
      {{ $t("global.sound") }} {{ store.state.sound ? "on" : "off" }}
    </span>
  </button>
</template>

<script>
export default {
  name: "SoundWave",
  data() {
    return {
      store: this.$store,
    };
  },
  methods: {
    toggleSound() {
      this.store.state.sound = !this.store.state.sound;
    },
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;

.button {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:focus {
    outline: none;
  }
}

.loader {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  height: fn.to-rem(20);
  margin-top: fn.to-rem(15);
  position: relative;
  text-align: center;
}

.stroke {
  animation: animate 1.2s linear infinite;
  background: #f1f1f1;
  border-radius: 50px;
  display: block;
  height: 100%;
  margin: 0 1.2px;
  position: relative;
  transition: height 0.2s ease;
  width: 2px;
}

.muted {
  .stroke {
    animation: none;
    background-color: var(--color-hero);
    height: 0.8px;
    margin: 0;
    width: 5px;

    &:not(:first-child),
    &:not(:last-child) {
      border-radius: 0;
    }
  }
}

.statusText {
  color: white;
  font-family: var(--roboto-medium);
  font-size: 0.75rem;
  letter-spacing: fn.to-rem(0.75);
  text-align: center;
  text-transform: capitalize;
  width: 5.5em;
}

@keyframes animate {
  50% {
    height: 20%;
  }
  100% {
    height: 100%;
  }
}

.stroke:nth-child(1) {
  animation-delay: 0s;
}

.stroke:nth-child(2) {
  animation-delay: 0.3s;
}

.stroke:nth-child(3) {
  animation-delay: 0.6s;
}

.stroke:nth-child(4) {
  animation-delay: 0.9s;
}

.stroke:nth-child(5) {
  animation-delay: 0.6s;
}

.stroke:nth-child(6) {
  animation-delay: 0.3s;
}

.stroke:nth-child(7) {
  animation-delay: 0s;
}
</style>
