<template>
  <section
    id="section-albums"
    :class="$style.container"
    aria-labelledby="albums"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'albums'"
        :title-appears="titleAppears"
      />
      <div :class="$style.grid">
        <div :class="$style.left">
          <div :class="$style.info">
            <h3 :class="$style.infoTitle">{{ currentAlbum.artist }}</h3>
            <p :class="$style.infoType">{{ currentAlbum.title }}</p>
            <p :class="$style.infoYear">{{ currentAlbum.year }}</p>
            <a :class="$style.infoLink" href="#">
              Ver album <span :class="$style.arrowRight"></span>
            </a>
          </div>
        </div>
        <div :class="$style.right">
          <div :class="$style.carouselContent">
            <img
              :class="$style.carouselImage"
              :src="
                require(`@/assets/img/albums/${currentAlbum.path}/cover.jpg`)
              "
              :alt="currentAlbum.title"
            />
            <CarouselControls
              @move-prev="movePrev"
              @move-next="moveNext"
              :current="active + 1"
              :length="albumList.length"
              :show-numbers="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import SectionTitle from '@/components/lib/SectionTitle';
import CarouselControls from '@/components/lib/CarouselControls';
import { albumList } from '@/components/albums/data-albums';

export default {
  name: "Albums",
  components: { CarouselControls, SectionTitle },
  data: () => ({
    albumList,
    titleAppears: false,
    active: 0,
  }),
  computed: {
    currentAlbum() {
      return this.albumList.find((el) => el.id === this.active);
    },
  },
  methods: {
    fadeTransition() {
      document.querySelector(`.${this.$style.carouselImage}`).style.opacity = 0;
      setTimeout(() => {
        document.querySelector(
          `.${this.$style.carouselImage}`
        ).style.opacity = 1;
      }, 300);
    },
    movePrev() {
      this.fadeTransition();
      setTimeout(() => {
        this.active > 0
          ? this.active--
          : (this.active = this.albumList.length - 1);
      }, 200);
    },
    moveNext() {
      this.fadeTransition();
      setTimeout(() => {
        this.active < this.albumList.length - 1
          ? this.active++
          : (this.active = 0);
      }, 200);
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

<style lang="scss" module>
@use "../../assets/scss/functions.scss" as fn;
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
  left: -2.5%;
}
.grid {
  color: white;
  display: grid;
  font-family: var(--bebas);
  grid-template-columns: 1fr 2fr;
  height: 100%;
  text-align: start;
}
.left {
  align-self: end;
  padding: 7rem;
}
.right {
  justify-self: end;
  align-self: center;
}
.carouselImage {
  display: block;
  max-width: 100%;
  height: fn.to-proportion-width(653, 1440);
  object: {
    fit: cover;
    position: center;
  }
  transition: opacity 0.3s;
  width: fn.to-proportion-width(741, 1440);
}
.carouselImage[class^="fade-animation"] {
  opacity: 0;
}
.info {
  margin-left: 7vw;
}
.infoTitle,
.infoType,
.infoYear {
  margin-bottom: fn.to-rem(5);
}
.infoTitle {
  font-size: fn.to-rem(35);
  letter-spacing: fn.to-rem(1);
  color: var(--color-hero);
}
.infoType {
  font-size: fn.to-rem(20);
}
.infoLink {
  align-items: center;
  color: white;
  display: flex;
  font: fn.to-rem(12) var(--montserrat);
}
.arrowRight {
  background: {
    image: url("../../assets/img/lib/arrow-right.svg");
    repeat: no-repeat;
    size: contain;
  }
  display: inline-block;
  height: fn.to-rem(17);
  margin-left: fn.to-rem(13);
  width: fn.to-rem(17);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
