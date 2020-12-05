<template>
  <section :class="$style.container" aria-labelledby="cine">
    <parallax fixed direction="down" :sectionHeight="100">
      <div
        :class="[
          $style.background,
          $style[currentMovie.slug],
          currentMovie.overlay && $style.overlay,
        ]"
      ></div>
    </parallax>
    <a
      href="https://www.youtube.com/playlist?list=PLundnWmdl9_9y27zBPe6n6ymI4Jm9GRtm"
      target="_blank"
      :class="$style.link"
      data-scroll
    >
      <span class="sr-only">Reproudcir</span>
      <span :class="$style.linkTitle">{{ currentMovie.title }}</span>
      <span :class="$style.viewMore">Ver más</span>
    </a>
    <SectionTitle :title-text="'cine'" />
    <div :class="$style.controls">
      <button
        :class="[$style.arrow, $style.prev]"
        @click="active > 1 && active--"
      >
        <span class="sr-only">Anterior</span>
      </button>
      <button
        :class="[$style.arrow, $style.next]"
        @click="active < movies.length && active++"
      >
        <span class="sr-only">Siguiente</span>
      </button>
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import Parallax from 'vue-parallaxy';
import SectionTitle from '@/components/lib/SectionTitle';

export default {
  name: "Cine",
  components: { SectionTitle, Parallax },
  data: () => ({
    movies: [
      {
        id: 1,
        title: "La tierra que arde",
        slug: "la-tierra-que-arde",
        overlay: true,
      },
      {
        id: 2,
        title: "Chacabuco",
        slug: "chacabuco",
        overlay: false,
      },
      {
        id: 3,
        title: "El atentado",
        slug: "el-atentado",
        overlay: false,
      },
    ],
    active: 1,
  }),
  computed: {
    currentMovie() {
      return this.movies.find((el) => el.id === this.active);
    },
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      onShown(el) {
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
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
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.background {
  background-color: black;
  background-size: cover;
  height: 100%;
  transition: background-image 0.5s;
  width: 100%;
}
.la-tierra-que-arde {
  background-image: url("../../assets/img/cine/la-tierra-que-arde/background.jpg");
}
.overlay {
  position: absolute;
  &::before {
    background-color: rgba(black, 0.2);
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
  display: block;
  height: 2em;
  text-decoration: none;
  width: max-content;

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
.controls {
  align-items: center;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 7rem;
  height: 3rem;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(91, 1440);
    width: fn.to-proportion-width(198, 1440);
  }
}
.arrow {
  backdrop-filter: blur(5px);
  background: {
    color: rgba(black, 0.8);
    image: url("../../assets/img/lib/chevron.svg");
    position: center;
    repeat: no-repeat;
  }
  border: none;
  cursor: pointer;
  height: 100%;
  width: 100%;
  @media (min-width: 1440px) {
    background-size: fn.to-proportion-width(9.7, 1440)
      fn.to-proportion-width(20.37, 1440);
  }
  &:focus {
    outline: 0;
  }
}
.next {
  transform: rotate(180deg);
}
</style>
