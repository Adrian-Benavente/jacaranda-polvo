<template>
  <section
    id="section-cine"
    :class="[$style.container, $style[`${$i18n.locale}`]]"
    :aria-labelledby="$t('sections.cine')"
  >
    <SectionTitle
      :class="$style.title"
      :title-text="$t('sections.cine')"
      :title-appears="titleAppears"
    />
    <div
      :class="[
        $style.background,
        $style[currentMovie.slug],
        currentMovie.overlay && $style.overlay,
      ]"
    ></div>
    <router-link
      :to="`/cine/${currentMovie.slug}`"
      :class="$style.link"
      data-scroll
    >
      <div>
        <span :class="$style.linkTitle">{{ currentMovie.title }}</span>
        <span :class="$style.viewMore">{{ $t("global.see_more") }}</span>
      </div>
    </router-link>
    <CarouselControls @move-prev="movePrev" @move-next="moveNext" />
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import CarouselControls from "@/components/lib/CarouselControls";

export default {
  name: "Cine",
  components: { CarouselControls, SectionTitle },
  data() {
    return {
      active: 0,
      interval: null,
      movies: [
        {
          id: 0,
          title: "La tierra que arde",
          slug: "la-tierra-que-arde",
          overlay: false,
        },
        {
          id: 1,
          title: "Chacabuco",
          slug: "chacabuco",
          overlay: false,
        },
        {
          id: 2,
          title: "El atentado",
          slug: "el-atentado",
          overlay: false,
        },
      ],
      titleAppears: false,
    };
  },
  computed: {
    currentMovie() {
      return this.movies.find((el) => el.id === this.active);
    },
  },
  methods: {
    autoSlides(index) {
      this.interval = setInterval(() => {
        if (index >= this.movies.length) index = 0;
        this.active = this.movies[index].id;
        index++;
      }, 5000);
    },
    movePrev() {
      clearInterval(this.interval);
      console.log(this.active);
      this.autoSlides(this.active);
      return this.active > 0
        ? this.active--
        : (this.active = this.movies.length - 1);
    },
    moveNext() {
      clearInterval(this.interval);
      this.autoSlides(this.active + 1);
      return this.active < this.movies.length - 1
        ? this.active++
        : (this.active = 0);
    },
    preloadImages() {
      this.movies.forEach(() => {
        const imageTierra = new Image();
        const imageChacabuco = new Image();
        const imageAtentado = new Image();
        imageTierra.src = require("@/assets/img/cine/la-tierra-que-arde/background.jpg");
        imageChacabuco.src = require("@/assets/img/cine/chacabuco/background.jpg");
        imageAtentado.src = require("@/assets/img/cine/el-atentado/background.jpg");
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
        this.autoSlides(this.active);
      },
      onHidden: () => {
        this.titleAppears = false;
        clearInterval(this.interval);
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
@use "../../assets/scss/placeholders";

.container {
  height: fn.to-proportion-width(395, 360);
  position: relative;
  overflow: hidden;
  &:target {
    margin-top: 5rem;
  }
  @media (min-width: 768px) {
    height: 100vh;
    .title {
      left: 1.1%;
      position: absolute;
      top: initial;
      width: initial;
    }
    &.en .title {
      left: -0.2%;
    }
    &:target {
      margin-top: initial;
    }
  }
}
.title {
  left: 1rem;
  position: relative;
  top: 5rem;
  width: max-content;
}
.background {
  background: {
    attachment: scroll;
    color: black;
    position: center;
    size: cover;
  }
  height: 100%;
  transition: background-image 0.5s ease-in-out;
  width: 100%;

  @media (min-width: 768px) {
    background-attachment: fixed;
    height: 100vh;
  }
}
.la-tierra-que-arde {
  background-image: url("../../assets/img/cine/la-tierra-que-arde/background.jpg");
}
.overlay {
  position: absolute;
  &::before {
    background-color: rgba(black, 0.3);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
}
.chacabuco {
  background-image: url("../../assets/img/cine/chacabuco/background.jpg");
}
.el-atentado {
  background-image: url("../../assets/img/cine/el-atentado/background.jpg");
}
.link {
  @extend %middle;
  align-items: center;
  display: grid;
  height: 100%;
  justify-items: center;
  text-decoration: none;
  width: 100%;

  &[data-scroll] {
    transition: opacity 1s;
  }

  &[data-scroll="in"] {
    opacity: 1;
  }

  &[data-scroll="out"] {
    opacity: 0;
  }
}
.linkTitle {
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  font: #{fn.to-rem(32)} var(--bebas);
  letter-spacing: fn.to-rem(1.5);
  margin-bottom: 0.25em;
  text-align: center;
  @media (min-width: 1440px) {
    font-size: fn.to-proportion-width(40, 1440);
  }
}
.viewMore {
  color: white;
  font-family: var(--montserrat-bold);
}
.linkTitle,
.viewMore {
  text-shadow: 0 0 3px rgba(black, 0.6);
}
</style>
