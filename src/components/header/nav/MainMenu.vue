<template>
  <div>
    <button @click="menuOpen" :class="$style.button">
      <span :class="$style.icon">
        <span :class="$style.bar"></span>
        <span :class="$style.bar"></span>
        <span :class="$style.bar"></span>
      </span>
      <span :class="$style.text">Menu</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data: () => ({
    open: false,
  }),
  methods: {
    menuOpen() {
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
  display: flex;

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
    margin-left: fn.to-rem(24);
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
  width: fn.to-rem(14.44);

  &:first-child,
  &:nth-child(2) {
    width: fn.to-rem(21);
  }
}
</style>
