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
      <template v-if="isMobile">
        <AlbumsMobile :albums="albumList" />
      </template>
      <template v-else>
        <AlbumsDesktop
          :active="active"
          :albums="albumList"
          :current-album="currentAlbum"
          :move-next="moveNext"
          :move-prev="movePrev"
        />
      </template>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import { albums } from "@/components/albums/data-albums";
import AlbumsDesktop from "@/components/albums/AlbumsDesktop";
import AlbumsMobile from "@/components/albums/AlbumsMobile";

export default {
  name: "Albums",
  mixins: [albums],
  components: { AlbumsMobile, AlbumsDesktop, SectionTitle },
  data() {
    return {
      active: 1,
      isMobile: null,
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
    checkMobile() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
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
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
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
  display: grid;
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
    align-items: end;
    justify-items: end;
    margin-top: initial;
    min-height: 100vh;
    padding-top: initial;

    &:target {
      padding-top: initial;
    }

    .title {
      left: initial;
      position: absolute !important;
      width: initial;
    }
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
}
.scrollOutContainer {
  height: 100%;
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
