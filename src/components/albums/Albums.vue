<template>
  <section
    id="section-albums"
    :class="[$style.container, $style[`${$i18n.locale}`]]"
    :aria-labelledby="$t('sections.albums')"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="$t('sections.albums')"
        :title-appears="titleAppears"
      />
      <div :class="$style.grid">
        <div :class="$style.left">
          <div :class="$style.info">
            <h3 :class="$style.infoArtist">{{ currentAlbum.artist }}</h3>
            <p :class="$style.infoTitle">{{ currentAlbum.title }}</p>
            <p :class="$style.infoYear">{{ currentAlbum.year }}</p>
            <router-link
              :to="`/albums/${currentAlbum.id}/${currentAlbum.slug.artist}/${currentAlbum.slug.title}`"
              v-slot="{ href, navigate }"
              custom
            >
              <a :class="$style.infoLink" :href="href" @click="navigate">
                {{ $t("albums.see_album") }}
                <span :class="$style.arrowRight"></span>
              </a>
            </router-link>
          </div>
        </div>
        <div :class="$style.right">
          <div :class="$style.carouselContent">
            <router-link
              :to="`/albums/${currentAlbum.id}/${currentAlbum.slug.artist}/${currentAlbum.slug.title}`"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="$style.carouselLink"
                :style="{ backgroundImage: `url('${currentAlbum.cover}')` }"
                @click="navigate"
              >
                <span class="sr-only">{{ currentAlbum.title }}</span>
              </a>
            </router-link>
            <CarouselControls
              @move-prev="movePrev"
              @move-next="moveNext"
              :current="active"
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
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import CarouselControls from "@/components/lib/CarouselControls";
import { albums } from "@/components/albums/data-albums";

export default {
  name: "Albums",
  mixins: [albums],
  components: { CarouselControls, SectionTitle },
  data() {
    return {
      active: 1,
      store: this.$store,
      titleAppears: false,
    };
  },
  computed: {
    currentAlbum() {
      return this.albumList.find(({ id }) => id === this.active);
    },
  },
  methods: {
    movePrev() {
      this.active > 1 ? this.active-- : (this.active = this.albumList.length);
    },
    moveNext() {
      this.active < this.albumList.length ? this.active++ : (this.active = 1);
    },
    preloadImages() {
      this.albumList.forEach(({ cover }) => {
        const image = new Image();
        image.src = cover;
      });
    },
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
      onShown: () => {
        this.preloadImages();
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
  justify-items: end;
  &.en {
    .title {
      left: -2.5%;
    }
  }
  &.es {
    .title {
      left: -3.7%;
    }
  }
}
.scrollOutContainer {
  height: 100%;
}
.grid {
  align-content: end;
  color: white;
  display: grid;
  font-family: var(--bebas);
  grid-template-columns: 1fr 2fr;
  height: 100%;
  margin: auto;
  text-align: start;
  width: fn.to-proportion-width(1102, 1440);
}
.left {
  align-self: end;
  padding: 7rem 0;
}
.right {
  justify-self: end;
  align-self: center;
}
.carouselLink {
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  }
  display: block;
  height: fn.to-proportion-width(118, 360);
  transition: background-image 0.5s;
  width: fn.to-proportion-width(134, 360);
  @media (min-width: 768px) {
    height: fn.to-proportion-width(700, 1440);
    width: fn.to-proportion-width(700, 1440);
  }
}
.infoArtist,
.infoTitle,
.infoYear {
  margin-bottom: fn.to-rem(5);
}
.infoArtist {
  color: white;
  font-size: fn.to-rem(35);
  letter-spacing: fn.to-rem(1);
  margin-bottom: 1rem;
  @media (min-width: 1920px) {
    font-size: fn.to-proportion-width(35, 1440);
  }
}
.infoTitle {
  font-size: fn.to-rem(20);
  @media (min-width: 1920px) {
    font-size: fn.to-proportion-width(20, 1440);
  }
}
.infoYear {
  @media (min-width: 1920px) {
    font-size: fn.to-proportion-width(16, 1440);
  }
}
.infoLink {
  align-items: center;
  color: var(--color-hero);
  display: flex;
  font: fn.to-rem(18) var(--montserrat);
  margin-top: 1rem;
  &:hover .arrowRight {
    margin-left: 1.2rem;
  }
  @media (min-width: 1920px) {
    font-size: fn.to-proportion-width(18, 1440);
  }
}
.arrowRight {
  background: url("../../assets/img/lib/arrow-right.svg") center / contain
    no-repeat;
  display: inline-block;
  height: 0.875rem;
  margin-left: 0.5rem;
  transition: margin-left 0.3s ease-in-out;
  width: 0.875rem;
  @media (min-width: 768px) {
    height: fn.to-rem(17);
    margin-left: fn.to-rem(13);
    width: fn.to-rem(17);
  }
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
