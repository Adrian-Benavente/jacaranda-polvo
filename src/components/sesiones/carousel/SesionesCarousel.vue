<template>
  <div :class="$style.container">
    <div
      :class="$style.wrapper"
      :style="{
        marginLeft: `${slideOffset}px`,
        transform: `translateX(${translateValue}px)`,
      }"
    >
      <div
        :class="[$style.slide, active === session.id && $style.active]"
        v-for="session in sesiones"
        :key="session.id"
      >
        <img
          :class="$style.image"
          :src="session.thumbnail"
          :alt="session.title"
        />
        <article :class="$style.details">
          <h2 :class="$style.title">{{ session.title }}</h2>
          <ul v-html="session.details"></ul>
        </article>
      </div>
    </div>
    <CarouselControls @move-next="moveRight" @move-prev="moveLeft" />
  </div>
</template>

<script>
import { sesiones } from "@/components/sesiones/data-sesiones";
import CarouselControls from "@/components/lib/CarouselControls";

export default {
  name: "SesionesCarousel",
  components: { CarouselControls },
  data: () => ({
    active: null,
    container: null,
    rem: null,
    sesiones,
    slideOffset: null,
    slideWidth: null,
    translateValue: null,
    window,
  }),
  methods: {
    moveLeft() {
      if (this.active > 0) {
        this.translateValue += this.slideWidth;
        this.active--;
      }
    },
    moveRight() {
      if (this.active < this.sesiones.length - 1) {
        this.translateValue -= this.slideWidth;
        this.active++;
      } else {
        this.translateValue = 0;
        setTimeout(() => (this.active = 0), 500);
      }
    },
    setInitial() {
      this.active = 0;
      this.translateValue = 0;
      const compStyles = window.getComputedStyle(document.documentElement);
      this.rem = parseInt(
        compStyles.getPropertyValue("font-size").split("px")[0]
      );

      this.container = document.querySelector(`.${this.$style.container}`);
      this.slideWidth =
        document.querySelector(`.${this.$style.slide}`).offsetWidth + this.rem;
      this.slideOffset = this.slideWidth / 2;
    },
  },
  mounted() {
    this.$nextTick(this.setInitial);
    window.addEventListener("resize", this.setInitial);
  },
};
</script>

<style lang="scss" module>
@use "../../../assets/scss/functions" as fn;

.wrapper {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.5s 0.5s;
}

.slide {
  @media (min-width: 400px) {
    padding-top: fn.to-rem(260);
    transition: padding-top 0.3s 0.7s ease-in-out;
    &.active {
      padding-top: fn.to-rem(200);
      .details {
        opacity: 1;
      }
    }
  }
}

.image {
  display: block;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: fn.to-proportion-width(385, 1440);
  }
}

.details {
  background: rgba(18, 18, 18, 0.56);
  opacity: 0;
  height: fn.to-rem(260);
  margin: auto;
  padding: fn.to-rem(34) fn.to-rem(29);
  transition: opacity 0.3s 0.7s;
  .title {
    color: var(--color-hero);
    font: fn.to-rem(30) / 130% var(--bebas);
    margin-bottom: 1rem;
    text-align: start;
    text-transform: uppercase;
  }
  ul {
    color: white;
    letter-spacing: fn.to-rem(0.48);
    list-style: none;
    text-align: start;
    li {
      font: fn.to-rem(14) / 160% var(--montserrat);
    }
  }
}
</style>
