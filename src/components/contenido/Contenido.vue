<template>
  <section
    id="section-contenido"
    :class="[$style.container, $style[`${$i18n.locale}`]]"
    :aria-labelledby="$t('sections.content')"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="$t('sections.content')"
        :title-appears="titleAppears"
      />
      <div :class="$style.content">
        <div :class="$style.carousel">
          <div :class="$style.item">
            <iframe
              :class="$style.video"
              :src="
                sound
                  ? current.video
                  : `${current.video}?${
                      current.isYouTubeVideo ? 'mute' : 'muted'
                    }=1`
              "
              allowfullscreen
            ></iframe>
          </div>
          <div :class="$style.details">
            <div :class="$style.info">
              <dl>
                <dt>{{ current.title }}</dt>
                <div v-html="current.details"></div>
              </dl>
            </div>
            <div :class="$style.controlsOuter">
              <CarouselControls
                @move-prev="movePrev"
                @move-next="moveNext"
                background-color="#070707"
                :current="active + 1"
                :length="contenido.length"
                :show-numbers="true"
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
  mixins: [contenido],
  data() {
    return {
      active: 0,
      titleAppears: false,
    };
  },
  computed: {
    current() {
      return this.contenido.find(({ id }) => id === this.active);
    },
    sound() {
      return this.$store.state.sound;
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

<style module lang="scss">
@use "../../assets/scss/functions" as fn;
.container {
  background-color: black;
  margin-top: fn.to-proportion-width(30, 360);
  overflow: hidden;
  position: relative;
  &:target {
    padding-top: 2.5rem;
  }
  @media (min-width: 768px) {
    align-items: end;
    display: grid;
    margin-top: initial;
    min-height: 100vh;
    &:target {
      padding-top: initial;
    }
  }
}
.title {
  left: 1rem;
  position: relative !important;
  width: max-content;
}
.scrollOutContainer {
  height: 100%;
}
.content {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: fn.to-proportion-width(120, 360);
  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-top: initial;
  }
}
.carousel {
  width: 100%;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(653, 1440);
    margin-bottom: fn.to-proportion-width(30, 1440);
    max-width: fn.to-proportion-width(1102, 1440);
  }
}
.item {
  aspect-ratio: 16/9;
  display: block;
  height: calc(100vw / 16 * 9);
  overflow: hidden;
  width: 100%;
  @media (min-width: 768px) {
    aspect-ratio: initial;
    height: fn.to-proportion-width(486, 1440);
    max-width: 100%;
    width: initial;
  }
}
.video {
  border: 0;
  display: block;
  height: 100%;
  width: 100%;
  @media (min-width: 768px) {
    aspect-ratio: initial;
    height: fn.to-proportion-width(616, 1440);
    width: fn.to-proportion-width(1102, 1440);
  }
}
.details {
  align-items: center;
  background-color: #070707;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.controlsOuter {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  height: 3rem;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(91, 1440);
  }
}
.info {
  color: white;
  padding: fn.to-proportion-width(20, 1440) 0 fn.to-proportion-width(20, 1440)
    fn.to-proportion-width(60, 1440);
  text-align: start;
  width: max-content;
  dt {
    font: normal 400 1.5rem / 150% var(--bebas);
    letter-spacing: fn.to-rem(0.48);
    @media (min-width: 768px) {
      font-size: fn.to-proportion-width(36, 1440);
      margin-bottom: fn.to-rem(18);
    }
  }
  dd {
    font: normal fn.to-rem(14) / 150% var(--montserrat);
    letter-spacing: fn.to-rem(0.48);
    max-width: 70%;
    @media (min-width: 768px) {
      font-size: fn.to-proportion-width(14, 1440);
      max-width: none;
    }
  }
}
@media (min-width: 768px) {
  .title {
    left: -5.5%;
    position: absolute !important;
    width: initial;
  }
  .en .title {
    left: -3.5%;
  }
}
</style>
