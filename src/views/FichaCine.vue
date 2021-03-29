<template>
  <section :class="$style.container">
    <header :class="[$style.header, $style[`${slug}`]]">
      <div :class="$style.inner">
        <h2 :class="$style.title">{{ fichaData.title }}</h2>
        <p :class="$style.year">{{ fichaData.year }}</p>
      </div>
    </header>
    <main>
      <section :class="$style.video">
        <div :class="$style.inner">
          <div :class="$style.player">
            <iframe
              :src="fichaData.videos[selected].url"
              :title="fichaData.videos[selected].title"
              :class="$style.iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div :class="$style.controls" v-if="fichaData.videos.length > 1">
              <CarouselControls
                :current="selected + 1"
                :length="fichaData.videos.length"
                show-numbers
                @move-prev="move('prev')"
                @move-next="move('next')"
              />
            </div>
          </div>
          <a
            v-if="fichaData.playlist"
            :href="fichaData.playlist"
            target="_blank"
            :class="$style.playlist"
            >Ver todos los videos <span :class="$style.arrowRight"></span
          ></a>
        </div>
      </section>
      <section :class="$style.info">
        <div :class="$style.about">
          <div>
            <h3 :class="$style.title">Sobre el proyecto</h3>
            <p :class="[$style.text, $style.short]">
              <strong>{{ fichaData.about.short }}</strong>
            </p>
            <p :class="$style.text">{{ fichaData.about.description }}</p>
          </div>
          <div :class="$style.poster">
            <figure>
              <img
                :class="$style.image"
                :src="fichaData.poster"
                :alt="`Póster de ${fichaData.title}`"
              />
            </figure>
          </div>
        </div>
        <div :class="$style.ficha"></div>
      </section>
    </main>
  </section>
</template>

<script>
import { fichasCine } from "@/components/cine/fichas/data-cine";
import CarouselControls from "@/components/lib/CarouselControls";
export default {
  name: "FichaCine",
  components: { CarouselControls },
  data() {
    return {
      slug: this.$route.params.slug,
      fichasCine,
      selected: 0,
    };
  },
  computed: {
    fichaData() {
      return this.fichasCine.find(({ slug }) => slug === this.slug);
    },
  },
  methods: {
    move(dir) {
      if (dir === "prev" && this.selected > 0) {
        this.selected--;
      }
      if (dir === "next" && this.selected < this.fichaData.videos.length - 1) {
        this.selected++;
      }
    },
  },
};
</script>

<style lang="scss" module>
@use "../assets/scss/functions" as fn;
.container {
  background-color: black;
}
.header {
  align-items: center;
  background: fixed bottom/cover;
  display: flex;
  flex-direction: column;
  height: fn.to-proportion-width(453, 1440);
  justify-content: center;
  position: relative;
  .inner {
    text-align: start;
    width: max-content;
    z-index: 1;
  }
  .title {
    color: white;
    font: normal 400 fn.to-rem(68) / fn.to-rem(63) var(--bebas);
    text-transform: uppercase;
  }
  .year {
    color: var(--color-hero);
    font: normal 700 fn.to-rem(25) / fn.to-rem(36) var(--montserrat);
  }
  &::before {
    background: rgba(black, 0.7);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
.la-tierra-que-arde {
  background-image: url("../assets/img/cine/la-tierra-que-arde/header.jpg");
}
.video {
  padding: fn.to-proportion-width(143, 1440) 0;
  .inner {
    margin: auto;
    text-align: start;
    width: max-content;
  }
  .player {
    position: relative;
  }
  .iframe {
    --height: calc(var(--width) / 16 * 9);
    --width: #{fn.to-proportion-width(1075, 1440)};
    aspect-ratio: 16 / 9;
    border: 0;
    display: block;
    height: var(--height);
    margin: auto;
    width: var(--width);
  }
  .controls {
    bottom: 0;
    position: absolute;
    right: 0;
  }
  .playlist {
    align-items: center;
    display: flex;
    font: normal 400 fn.to-rem(20) / fn.to-rem(35) var(--bebas);
    margin-top: fn.to-rem(23);
    text-align: start;
  }
}
.info {
  background-color: var(--grey);
  padding: fn.to-proportion-width(72, 1440) 0;
  .about {
    align-items: center;
    display: flex;
    gap: fn.to-proportion-width(258, 1440);
    justify-content: space-between;
    margin: auto;
    max-width: fn.to-proportion-width(1192, 1440);
    .title {
      color: var(--color-hero);
      font: normal 400 fn.to-rem(35) / fn.to-rem(35) var(--bebas);
      margin-bottom: 1em;
      text-align: start;
    }
    .text {
      color: white;
      font: normal 400 fn.to-rem(20) / fn.to-rem(30) var(--montserrat);
      text-align: start;
      &.short {
        margin-bottom: 1em;
      }
    }
    .poster {
      position: relative;
      &::before {
        border: 1px solid white;
        content: "";
        height: fn.to-proportion-width(599, 1440);
        left: fn.to-proportion-width(35, 1440);
        top: -#{fn.to-proportion-width(23, 1440)};
        width: fn.to-proportion-width(367, 1440);
        position: absolute;
      }
    }
    .image {
      display: block;
      height: fn.to-proportion-width(553, 1440);
      width: fn.to-proportion-width(367, 1440);
      position: relative;
      z-index: 1;
    }
  }
}
.arrowRight {
  background: url("../assets/img/lib/arrow-right.svg") center / contain
    no-repeat;
  display: inline-block;
  height: fn.to-rem(17);
  margin-left: fn.to-rem(13);
  width: fn.to-rem(17);
}
</style>
