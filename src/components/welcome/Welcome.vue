<template>
  <section :class="$style.container">
    <div :class="$style.background"></div>
    <div data-scroll>
      <p :class="$style.text">
        Desde 2010 en Jacarandá Polvo nos dedicamos a la producción musical para
        artistas y proyectos en diversas plataformas.
      </p>
      <p :class="$style.text">
        Componemos, grabamos y editamos música para Cine, Tv y Teatro.
        Realizamos contenido audiovisual original.
      </p>
      <p :class="$style.text">
        Si tenés una idea o un proyecto no dudes en consultarnos.
      </p>
      <p
        :class="[$style.text, $style.bold, $style.welcome]"
        aria-label="Bienvenide"
      >
        Bienvenidx
      </p>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  name: "Welcome",
  data: () => ({
    fixed: false,
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      this.fixed = window.pageYOffset >= window.innerHeight;
    });
    this.so = ScrollOut({
      scope: this.$el,
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
@use "../../assets/scss/placeholders";

.container {
  align-items: center;
  background: black;
  box-shadow: 0 -2rem 3rem black;
  display: flex;
  justify-content: center;
  min-height: 70vh;
  padding: 0 0 2rem;
  position: relative;
  width: 100%;
}
.background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0.6712885837928921) 96%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  top: -5vh;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.text {
  color: white;
  font: fn.to-rem(20) var(--montserrat);
  line-height: 150%;
  margin: auto;
  position: relative;
  text-align: center;
  width: 90%;
  z-index: 2;
  @media (min-width: 1440px) {
    max-width: fn.to-proportion-width(800, 1440);
    font-size: fn.to-proportion-width(20, 1440);
  }
}
.bold {
  font-family: var(--montserrat-bold);
}
.welcome {
  margin-top: 1rem;
}
[data-scroll] .text {
  transition: opacity 1s;
}
[data-scroll="in"] .text {
  opacity: 1;
}
[data-scroll="out"] .text {
  opacity: 0;
}
</style>
