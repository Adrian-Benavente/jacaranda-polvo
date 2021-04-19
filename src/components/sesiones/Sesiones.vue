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
.container {
  align-items: center;
  display: grid;
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
}
.scrollOutContainer {
  align-items: center;
  display: grid;
  height: 100%;
}
.title {
  left: -3.9%;
  z-index: 2;
}
</style>
