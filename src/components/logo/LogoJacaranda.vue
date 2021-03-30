<template>
  <h1 id="logo">
    <router-link to="/#aldea" v-slot="{ href, navigate }">
      <a
        :class="[$style.logo, webp && $style.webp]"
        :href="href"
        @click="navigate"
      >
        <span :class="[$style.text, wrap && $style.wrapped]">
          Jacarandá Polvo
        </span>
      </a>
    </router-link>
  </h1>
</template>

<script>
export default {
  name: "LogoJacaranda",
  data: () => ({
    wrap: false,
    webp: false,
  }),
  mounted() {
    this.webp = document.documentElement.classList.contains("webp");
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
  font-size: 0.75rem;
  margin-left: fn.to-proportion-width(36, 1440);
  margin-top: fn.to-proportion-height(18, 900);
  overflow: hidden;
  position: relative;
  text-align: start;
  z-index: 10001;
  @media (min-width: 768px) {
    font-size: fn.to-proportion-width(14, 1440);
  }
  &::before {
    background-image: url("../../assets/img/logo/arbol.png");
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: fn.to-proportion-width(62, 1440);
    min-height: 62px;
    min-width: 62px;
    width: fn.to-proportion-width(62, 1440);
  }
}
.text {
  color: white;
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
.logo.webp {
  &::before {
    background-image: url("../../assets/img/logo/arbol.webp");
  }
}
</style>
