<template>
  <section
    id="section-contenido"
    :class="$style.container"
    aria-labelledby="contenido"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'contenido'"
        :title-appears="titleAppears"
      />
      <div :class="$style.content">
        <div :class="$style.carousel">
          <div :class="$style.item">
            <iframe :src="current.video" allowfullscreen></iframe>
          </div>
          <div :class="$style.details">
            <div :class="$style.info">
              <dl>
                <dt>{{ current.title }}</dt>
                <div v-html="current.details"></div>
              </dl>
            </div>
            <div>
              <CarouselControls
                @move-prev="movePrev"
                @move-next="moveNext"
                background-color="#070707"
                :current="active + 1"
                :length="contenido.length"
                :show-numbers="true"
                :class="$style.controls"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import CarouselControls from "@/components/lib/CarouselControls";
import { contenido } from "@/components/contenido/data-contenido";

export default {
  name: "Contenido",
  components: { CarouselControls, SectionTitle },
  data: () => ({
    active: 0,
    contenido,
    titleAppears: false,
  }),
  computed: {
    current() {
      return this.contenido.find(({ id }) => id === this.active);
    },
  },
  methods: {
    movePrev() {
      this.active > 0
        ? this.active--
        : (this.active = this.contenido.length - 1);
    },
    moveNext() {
      this.active < this.contenido.length - 1
        ? this.active++
        : (this.active = 0);
    },
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
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

<style module lang="scss">
@use "../../assets/scss/functions" as fn;
.container {
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: grid;
  align-items: end;
}
.scrollOutContainer {
  height: 100%;
}
.title {
  left: -5.5%;
}
.content {
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: flex-end;
}
.carousel {
  height: fn.to-proportion-width(653, 1440);
  margin-bottom: fn.to-proportion-width(30, 1440);
  width: fn.to-proportion-width(864, 1440);
}
.item {
  display: block;
  height: fn.to-proportion-width(486, 1440);
  max-width: 100%;
  iframe {
    border: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
.details {
  align-items: center;
  background-color: #070707;
  display: flex;
  height: fn.to-proportion-width(170, 1440);
  justify-content: space-between;
}
.controls {
  align-items: center;
  display: flex;
  position: relative;
}
.info {
  color: white;
  padding: fn.to-proportion-width(28, 1440) 0 fn.to-proportion-width(20, 1440)
    fn.to-proportion-width(60, 1440);
  text-align: start;
  width: fn.to-proportion-width(500, 1440);
  dt {
    font: normal 400 fn.to-rem(36) / 150% var(--bebas);
    letter-spacing: fn.to-rem(0.48);
    margin-bottom: fn.to-rem(18);
    @media (min-width: 1990px) {
      font-size: fn.to-proportion-width(36, 1440);
    }
  }
  dd {
    font: normal fn.to-rem(14) / 150% var(--montserrat);
    letter-spacing: fn.to-rem(0.48);
    @media (min-width: 1990px) {
      font-size: fn.to-proportion-width(14, 1440);
    }
  }
}
</style>
