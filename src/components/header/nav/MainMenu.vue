<template>
  <div>
    <button @click="toggleOpen" :class="$style.button">
      <span :class="[$style.icon, open && $style.open]">
        <span :class="$style.bar"></span>
        <span :class="$style.bar"></span>
        <span :class="$style.bar"></span>
      </span>
      <span :class="$style.text">Menu</span>
    </button>
    <TheMenu :open="open" @close="toggleOpen" />
  </div>
</template>

<script>
import TheMenu from "@/components/header/nav/TheMenu";
export default {
  name: "MainMenu",
  components: { TheMenu },
  data: () => ({
    open: false,
  }),
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" module>
@use "../../../assets/scss/functions" as fn;

.button {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  position: relative;
  z-index: 10001;

  &:focus {
    outline: none;
  }
}

.text {
  display: none;
  @media (min-width: 500px) {
    font-family: var(--roboto-bold);
    font-size: 0.875rem;
    color: white;
    display: block;
    margin-left: fn.to-rem(8);
    text-decoration: none;
    text-transform: uppercase;
  }
}

.icon {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fn.to-rem(7);
}

.bar {
  background-color: var(--color-hero);
  border-radius: 50px;
  display: block;
  height: fn.to-rem(0.89);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  width: fn.to-rem(21);

  &:nth-child(3) {
    width: fn.to-rem(14.44);
  }
}

.icon.open {
  height: 1rem;
  .bar {
    &:first-child {
      position: relative;
      top: fn.to-rem(7);
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      position: relative;
      top: -#{fn.to-rem(8)};
      transform: rotate(-45deg);
      width: fn.to-rem(21);
    }
  }
}
</style>
