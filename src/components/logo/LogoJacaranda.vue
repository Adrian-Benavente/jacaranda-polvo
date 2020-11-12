<template>
  <h1 :class="$style.logo" id="logo">
    <span :class="[$style.text, wrap && $style.wrapped]">Jacarandá Polvo</span>
  </h1>
</template>

<script>
export default {
  name: "LogoJacaranda",
  data: () => ({
    wrap: false,
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      this.wrap = window.pageYOffset >= window.innerHeight;
    });
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;

.logo {
  align-items: center;
  color: white;
  display: flex;
  font-family: var(--bebas), arial, sans-serif;
  font-size: 1.25rem;
  margin-left: fn.to-proportion-width(36, 1440);
  margin-top: fn.to-proportion-height(18, 900);
  overflow: hidden;
  text-align: start;
  &::before {
    background-image: url("../../assets/img/logo/arbol.png");
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: fn.to-proportion-width(62, 1440);
    min-height: 42px;
    min-width: 42px;
    max-height: 62px;
    max-width: 62px;
    width: fn.to-proportion-width(62, 1440);
  }
}
.text {
  padding-left: 1rem;
  opacity: 1;
  overflow: hidden;
  text-indent: 0;
  transition: text-indent 0.7s, opacity 0.5s ease-in-out;
  &.wrapped {
    opacity: 0;
    text-indent: -200px;
  }
}
</style>
