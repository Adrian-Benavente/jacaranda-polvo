<template>
  <h1 id="logo">
    <keep-alive>
      <router-link to="/#aldea" v-slot="{ href }">
        <a
          :class="[$style.logo, webp && $style.webp, hide && $style.hide]"
          :href="href"
          @click="$router.push(href)"
        >
          <span :class="[$style.text, wrap && $style.wrapped]">
            Jacarandá Polvo
          </span>
        </a>
      </router-link>
    </keep-alive>
  </h1>
</template>

<script>
export default {
  name: "LogoJacaranda",
  data() {
    return {
      hide: false,
      wrap: false,
      webp: false,
    };
  },
  mounted() {
    this.webp = document.documentElement.classList.contains("webp");
    window.addEventListener("scroll", () => {
      const isHome = this.$route.name === "home";
      this.wrap = isHome && window.scrollY >= window.innerHeight;
      this.hide =
        isHome &&
        window.pageYOffset >= window.innerHeight + window.innerHeight / 2;
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
  font-size: 1rem;
  margin-left: fn.to-proportion-width(36, 1440);
  margin-top: fn.to-proportion-height(18, 900);
  opacity: 1;
  overflow: hidden;
  position: relative;
  text-align: start;
  transition: opacity 0.5s ease-in-out, margin-left 0.7s ease-in-out;
  z-index: 10001;
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
  &.hide {
    margin-left: -200px;
    opacity: 0;
  }
  @media (min-width: 768px) {
    font-size: fn.to-proportion-width(14, 1440);
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
