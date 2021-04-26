<template>
  <div :class="$style.container">
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
              :src="`https://www.youtube.com/embed/${
                sound
                  ? fichaData.videos[selected].id
                  : `${fichaData.videos[selected].id}?mute=1`
              }`"
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
            >{{ $t("cine.watch_all_videos") }}</a
          >
        </div>
      </section>
      <section :class="$style.info">
        <div :class="$style.about">
          <div>
            <h3 :class="$style.title">{{ $t("cine.about_project") }}</h3>
            <p :class="[$style.text, $style.short]">
              <strong v-html="fichaData.about.short"></strong>
            </p>
            <p :class="$style.text" v-html="fichaData.about.description"></p>
            <a
              v-if="fichaData.fullMovie"
              :class="$style.fullMovie"
              :href="fichaData.fullMovie"
              target="_blank"
            >
              {{ $t("cine.full_movie") }}
            </a>
          </div>
          <div v-if="fichaData.poster" :class="$style.poster">
            <figure>
              <img
                :class="$style.image"
                :src="fichaData.poster"
                :alt="`Póster de ${fichaData.title}`"
              />
            </figure>
          </div>
        </div>
        <div :class="$style.ficha">
          <h4 :class="$style.title">{{ $t("cine.staff") }}</h4>
          <ul :class="$style.list">
            <li
              :class="$style.item"
              v-for="({ item }, idx) in fichaData.participantes"
              :key="`participants-${idx}`"
              v-html="item"
            ></li>
          </ul>
        </div>
      </section>
    </main>
    <aside :class="$style.navigateToProject">
      <ul :class="$style.list">
        <li>
          <template>
            <router-link
              :to="getPreviousOne(fichaData.id)"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :class="[$style.item, $style.prev]"
                :href="href"
                @click="navigate"
              >
                {{ $t("cine.navigation.prev") }}
              </a>
            </router-link>
          </template>
        </li>
        <li>
          <template>
            <router-link
              :to="getNextOne(fichaData.id)"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :class="[$style.item, $style.next]"
                :href="href"
                @click="navigate"
              >
                {{ $t("cine.navigation.next") }}
              </a>
            </router-link>
          </template>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import CarouselControls from "@/components/lib/CarouselControls";
import { dataCine } from "@/components/cine/fichas/data-cine";
export default {
  name: "FichaCine",
  components: { CarouselControls },
  mixins: [dataCine],
  data() {
    return {
      slug: this.$route.params.slug,
      selected: 0,
    };
  },
  computed: {
    sound() {
      return this.$store.state.sound;
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
    getNextOne(currId) {
      let slug;
      if (currId < this.fichasCine.length) {
        slug = this.fichasCine.find(({ id }) => id === currId + 1).slug;
      } else {
        slug = this.fichasCine[0].slug;
      }
      return `/cine/${slug}`;
    },
    getPreviousOne(currId) {
      let slug;
      if (currId > 1) {
        slug = this.fichasCine.find(({ id }) => id === currId - 1).slug;
      } else {
        slug = this.fichasCine.find(({ id }) => id === this.fichasCine.length)
          .slug;
      }
      return `/cine/${slug}`;
    },
  },
};
</script>

<style lang="scss" module>
@use "../assets/scss/functions" as fn;
@use "../assets/scss/mixins" as mx;

.container {
  background-color: black;
}
.header {
  align-items: center;
  background: fixed top/100% no-repeat;
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
.chacabuco {
  background-image: url("../assets/img/cine/chacabuco/header.jpg");
}
.el-atentado {
  background-image: url("../assets/img/cine/el-atentado/header.jpg");
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
    display: grid;
    gap: fn.to-proportion-width(100, 1440);
    justify-items: self-end;
    margin: auto;
    max-width: fn.to-proportion-width(1192, 1440);
    grid-template-columns: 1fr 1fr;
    .title {
      color: var(--color-hero);
      font: normal 400 fn.to-rem(35) / fn.to-rem(35) var(--bebas);
      margin-bottom: 1em;
      text-align: start;
    }
    .text {
      color: white;
      font: normal 400 1rem / 200% var(--montserrat);
      text-align: start;
      &.short {
        margin-bottom: 1em;
      }
    }
    .fullMovie {
      color: white;
      display: block;
      font: normal 400 fn.to-rem(15) / fn.to-rem(35) var(--bebas);
      margin-top: 1em;
      text-align: start;
      &::after {
        background: url("../assets/img/lib/arrow-right.svg") center / contain
          no-repeat;
        content: "";
        display: inline-block;
        filter: grayscale(100%);
        height: fn.to-rem(17);
        margin-left: 0.5rem;
        transition: margin-left 0.3s ease-in-out;
        vertical-align: middle;
        width: fn.to-rem(17);
      }
      &:hover {
        &::after {
          margin-left: 0.75rem;
        }
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
.ficha {
  margin: auto;
  max-width: fn.to-proportion-width(1192, 1440);
  padding: fn.to-proportion-width(111, 1440) 0;
  text-align: start;
  .title {
    color: var(--color-hero);
    font: normal 400 fn.to-rem(20) / fn.to-rem(35) var(--bebas);
    margin-bottom: 1em;
  }
  .list {
    column-count: 2;
    list-style: none;
    .item {
      color: white;
      margin-bottom: 1em;
    }
    .item,
    .item a {
      font: normal 400 1rem / fn.to-rem(23) var(--montserrat);
    }
  }
}
@include mx.navigate-project-arrows;
</style>
