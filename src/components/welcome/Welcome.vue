<template>
  <section :class="$style.container">
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
        Bienvenid<span>{{ letter }}</span>
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
    letter: "x",
    arrLetters: ["x", "a", "o", "e"],
  }),
  methods: {
    iterateLetters() {
      let index = 0;
      setInterval(() => {
        if (index >= this.arrLetters.length) index = 0;
        this.letter = this.arrLetters[index];
        index++;
      }, 1000);
    },
  },
  mounted() {
    this.$nextTick(this.iterateLetters);
    window.addEventListener("scroll", () => {
      this.fixed = window.pageYOffset >= window.innerHeight;
    });
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
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
  background: linear-gradient(
    0deg,
    rgba(black, 1) 0%,
    rgba(black, 1) 50%,
    rgba(black, 0.8) 70%,
    rgba(black, 0) 93%,
    rgba(black, 0) 97%,
    rgba(black, 0) 100%
  );
  display: flex;
  justify-content: center;
  min-height: 70vh;
  padding: 15% 0 3%;
  position: relative;
  width: 100%;
}
.text {
  color: white;
  font: fn.to-rem(20) var(--montserrat);
  line-height: 150%;
  margin: auto;
  position: relative;
  padding-top: 1rem;
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
