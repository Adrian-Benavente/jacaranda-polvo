<template>
  <section
    id="section-sesiones"
    :class="$style.container"
    :aria-labelledby="$t('sections.sessions')"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="$t('sections.sessions')"
        :title-appears="titleAppears"
      />
      <div :class="$style.carouselContainer">
        <SesionesCarousel />
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import SesionesCarousel from "@/components/sesiones/carousel/SesionesCarousel";

export default {
  name: "Sesiones",
  components: { SesionesCarousel, SectionTitle },
  data() {
    return {
      titleAppears: false,
    };
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
      onShown: () => {
        setTimeout(() => (this.titleAppears = true), 500);
      },
      onHidden: () => {
        this.titleAppears = false;
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  align-items: center;
  display: grid;
  background-color: black;
  margin-top: fn.to-proportion-width(30, 360);
  overflow: hidden;
  position: relative;

  &:target {
    padding-top: 2.5rem;
  }

  .title {
    left: 1rem;
    position: relative !important;
    width: max-content;
  }

  @media (min-width: 768px) {
    margin-top: initial;
    padding-top: initial;
    min-height: 100vh;

    &:target {
      padding-top: initial;
    }

    .title {
      position: absolute !important;
      width: initial;
    }
  }
}
.scrollOutContainer {
  align-items: center;
  display: grid;
  height: 100%;
}
@media (min-width: 768px) {
  .title {
    left: -3.9% !important;
    position: absolute !important;
    width: initial;
    z-index: 2;
  }
}
</style>
