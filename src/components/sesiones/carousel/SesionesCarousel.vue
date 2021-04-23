<template>
  <div :class="$style.container">
    <div
      :class="$style.wrapper"
      :style="{
        paddingLeft: `${slideOffset}px`,
        transform: `translateX(${translateValue}px)`,
      }"
    >
      <div
        :class="[$style.slide, active === session.id && $style.active]"
        v-for="session in sessions"
        :key="session.id"
      >
        <button
          :class="$style.modalButton"
          @click="openModal(session.youtube)"
          aria-label="Abrir video"
        >
          <img :class="$style.image" :src="session.thumbnail" alt="" />
        </button>
        <article :class="$style.details">
          <h2 :class="$style.title">
            <button :class="$style.modalButton" @click="modalOpen = true">
              {{ session.title }}
            </button>
          </h2>
          <ul v-html="session.details"></ul>
        </article>
      </div>
    </div>
    <CarouselControls
      @move-next="moveRight"
      @move-prev="moveLeft"
      :style="{
        left: `${slideOffset + controlsOffset}px`,
      }"
      :class="$style.controls"
    />
    <VideoModal
      v-if="modalOpen"
      @close="modalOpen = false"
      :modal-open="modalOpen"
      :url="sound ? youtubeUrl : `${youtubeUrl}?rel=0&amp;mute=1`"
    />
  </div>
</template>

<script>
import CarouselControls from "@/components/lib/CarouselControls";
import VideoModal from "@/components/lib/VideoModal";
import { sessions } from "@/components/sesiones/data-sesiones";

export default {
  name: "SesionesCarousel",
  mixins: [sessions],
  components: { VideoModal, CarouselControls },
  data: () => ({
    active: null,
    container: null,
    controlsOffset: null,
    modalOpen: false,
    rem: null,
    slideOffset: null,
    slideWidth: null,
    translateValue: null,
    youtubeUrl: null,
  }),
  computed: {
    sound() {
      return this.$store.state.sound;
    },
  },
  methods: {
    moveLeft() {
      if (this.active > 0) {
        this.translateValue += this.slideWidth;
        this.active--;
      }
    },
    moveRight() {
      if (this.active < this.sessions.length - 1) {
        this.translateValue -= this.slideWidth;
        this.active++;
      } else {
        this.translateValue = 0;
        setTimeout(() => (this.active = 0), 500);
      }
    },
    openModal(youtubeUrl) {
      this.modalOpen = true;
      this.youtubeUrl = youtubeUrl;
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
        document.querySelector(`.${this.$style.slide}`).offsetWidth +
        this.rem +
        this.rem / 2;
      this.slideOffset = this.slideWidth / 2;

      this.controlsOffset =
        document.querySelector(`.${this.$style.controls}`).offsetWidth / 4.5;
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

.container {
  padding-bottom: fn.to-proportion-width(50, 1440);
  position: relative;
}

.wrapper {
  display: flex;
  gap: 1.5rem;
  padding-top: fn.to-rem(260);
  position: relative;
  transition: transform 0.5s 0.5s;
  z-index: 1;
}

.slide {
  @media (min-width: 400px) {
    transition: transform 0.3s 0.7s ease-in-out;
    &.active {
      transform: translateY(-50px);
      .details {
        opacity: 1;
      }
    }
  }
}

.image {
  display: block;
  margin: auto;
  user-select: none;
  width: 100%;
  @media (min-width: 768px) {
    width: fn.to-proportion-width(280, 1440);
  }
}

.details {
  background: rgba(18, 18, 18, 0.56);
  opacity: 0;
  margin: auto;
  padding: fn.to-rem(24) fn.to-rem(28);
  transition: opacity 0.3s 0.7s;
  .title {
    text-align: start;
    .modalButton {
      color: var(--color-hero);
      font: fn.to-rem(30) / 130% var(--bebas);
      margin-bottom: 1rem;
      text-align: inherit;
      text-transform: uppercase;
    }
  }
  ul {
    color: white;
    letter-spacing: fn.to-rem(0.48);
    list-style: none;
    text-align: start;
    li {
      font: fn.to-rem(12) / 160% var(--montserrat);
      @media (min-width: 1920px) {
        font-size: fn.to-rem(14);
      }
    }
  }
}
.controls {
  display: flex;
  z-index: 0;
}
.modalButton,
.modalButton:active {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  outline: none;
}
</style>
