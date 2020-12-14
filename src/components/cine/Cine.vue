<template>
  <section :class="$style.container" aria-labelledby="cine">
    <div
      :class="[
        $style.background,
        $style[currentMovie.slug],
        currentMovie.overlay && $style.overlay,
      ]"
    ></div>
    <a
      :href="`/cine/${currentMovie.slug}`"
      target="_blank"
      :class="$style.link"
      data-scroll
    >
      <div>
        <span :class="$style.linkTitle">{{ currentMovie.title }}</span>
        <span :class="$style.viewMore">Ver más</span>
      </div>
    </a>
    <SectionTitle :title-text="'cine'" :title-appears="titleAppears" />
    <div :class="$style.controls">
      <button :class="[$style.arrow, $style.prev]" @click="movePrev">
        <span class="sr-only">Anterior</span>
      </button>
      <button :class="[$style.arrow, $style.next]" @click="moveNext">
        <span class="sr-only">Siguiente</span>
      </button>
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import SectionTitle from '@/components/lib/SectionTitle';

export default {
  name: "Cine",
  components: { SectionTitle },
  data: () => ({
    titleAppears: false,
    movies: [
      {
        id: 0,
        title: "La tierra que arde",
        slug: "la-tierra-que-arde",
        overlay: true,
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
    active: 0,
    interval: null,
  }),
  computed: {
    currentMovie() {
      return this.movies.find((el) => el.id === this.active);
    },
  },
  methods: {
    movePrev() {
      return this.active > 0
        ? this.active--
        : (this.active = this.movies.length - 1);
    },
    moveNext() {
      return this.active < this.movies.length - 1
        ? this.active++
        : (this.active = 0);
    },
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      onShown: () => {
        setTimeout(() => (this.titleAppears = true), 500);

        let index = 0;
        this.interval = setInterval(() => {
          if (index >= this.movies.length) index = 0;
          this.active = this.movies[index].id;
          index++;
        }, 5000);
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
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.background {
  background: {
    attachment: fixed;
    color: black;
    position: center;
    size: cover;
  }
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
  border: 0;
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
