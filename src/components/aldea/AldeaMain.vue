<template>
  <section class="aldea" aria-labelledby="aldea">
    <h2 id="aldea" class="sr-only">Bienvenido/a a Jacarandá Polvo</h2>
    <p class="sr-only">Elegí tu destino...</p>
    <kinesis-container class="aldea__menu">
      <div
        @click="toggleSound"
        @mouseover="sound && pyramidSound && playSound('piramide', 'aldea')"
      >
        <kinesis-element
          :class="[
            'aldea__pyramid',
            sound && pyramidSound && 'aldea__pyramid--sound-on',
            visible && 'visible',
          ]"
          aria-hidden="true"
        ></kinesis-element>
      </div>
      <nav>
        <ul>
          <li
            class="aldea__item tv"
            @mouseover="sound && pyramidSound && playSound('tv', 'aldea')"
          >
            <kinesis-element :strength="30" tag="a" href="#section-tv">
              <span class="aldea__item-text">{{ $t("sections.tv") }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item teatro"
            @mouseover="sound && pyramidSound && playSound('teatro', 'aldea')"
          >
            <kinesis-element :strength="15" tag="a" href="#section-teatro">
              <span class="aldea__item-text">{{ $t("sections.theater") }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item contenido"
            @mouseover="
              sound && pyramidSound && playSound('contenido', 'aldea')
            "
          >
            <kinesis-element :strength="40" tag="a" href="#section-contenido">
              <span class="aldea__item-text">{{ $t("sections.content") }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item albums"
            @mouseover="sound && pyramidSound && playSound('albums', 'aldea')"
          >
            <kinesis-element :strength="80" tag="a" href="#section-albums">
              <span class="aldea__item-text">{{ $t("sections.albums") }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item contacto"
            @mouseover="sound && pyramidSound && playSound('contacto', 'aldea')"
          >
            <kinesis-element :strength="15" tag="a" href="#section-contacto">
              <span class="aldea__item-text">{{ $t("sections.contact") }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item sesiones"
            @mouseover="sound && pyramidSound && playSound('sesiones', 'aldea')"
          >
            <kinesis-element :strength="30" tag="a" href="#section-sesiones">
              <span class="aldea__item-text">{{
                $t("sections.sessions")
              }}</span>
            </kinesis-element>
          </li>
          <li
            class="aldea__item cine"
            @mouseover="sound && pyramidSound && playSound('cine', 'aldea')"
          >
            <kinesis-element :strength="70" tag="a" href="#section-cine">
              <span class="aldea__item-text">{{ $t("sections.cine") }}</span>
            </kinesis-element>
          </li>
        </ul>
      </nav>
    </kinesis-container>
  </section>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import Sound from "@/mixins/sound";

export default {
  name: "AldeaMain",
  components: { KinesisContainer, KinesisElement },
  mixins: [Sound],
  data() {
    return {
      sound: this.$store.state.sound,
      pyramidSound: false,
      visible: false,
    };
  },
  methods: {
    toggleSound() {
      this.pyramidSound = !this.pyramidSound;
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.visible = true;
      }, 1000);
      setTimeout(() => {
        document.querySelector(".aldea__menu").classList.add("explode");
      }, 2000);
    });
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/functions" as fn;
@use "../../assets/scss/placeholders";

@mixin glow-animation($color, $speed: 1s) {
  animation: glow #{$speed} alternate infinite;
  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 13px #{$color});
    }
    100% {
      filter: drop-shadow(0 0 3px #{$color});
    }
  }
}

@media (max-width: 400px) {
  * {
    transform: none !important;
  }
}

.aldea {
  height: 100vh;
  width: 100%;
  color: aliceblue;
  overflow: hidden;
  transition: all 0.5s linear;
  &__item {
    @extend %middle;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    text-decoration: none;
    a {
      @extend %middle;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      display: block;
      height: 100%;
      text-decoration: none;
      width: 100%;
      &:hover {
        filter: drop-shadow(0 0 3px gold);
      }
    }
    &-text {
      @extend %middle;
      color: white;
      font-family: "bebas_neuebold", arial, sans-serif;
      font-size: 1rem;
      text-align: center;
      text-transform: uppercase;
      top: 110%;
      @media (min-width: 1440px) {
        font-size: fn.to-proportion-width(15, 1440);
      }
    }
    @media (min-width: 800px) {
      &-text {
        opacity: 0;
      }
      &:hover &-text {
        font-size: 1.25rem;
        opacity: 1;
      }
    }
    &.tv {
      min-height: 64.776px;
      min-width: 38.004px;
      height: fn.to-proportion-width(117.96, 1440);
      width: fn.to-proportion-width(73.34, 1440);
      a {
        background-image: url("../../assets/img/aldea/tv.svg");
      }
    }
    &.teatro {
      min-height: 70.566px;
      min-width: 101.928px;
      height: fn.to-proportion-width(87.61, 1440);
      width: fn.to-proportion-width(139.88, 1440);
      a {
        background-image: url("../../assets/img/aldea/teatro.svg");
      }
    }
    &.contenido {
      min-height: 53.556px;
      min-width: 82.2px;
      height: fn.to-proportion-width(89.26, 1440);
      width: fn.to-proportion-width(137, 1440);
      a {
        background-image: url("../../assets/img/aldea/contenido.svg");
      }
    }
    &.albums {
      min-height: 69.804px;
      min-width: 59.4px;
      height: fn.to-proportion-width(166.34, 1440);
      width: fn.to-proportion-width(149, 1440);
      a {
        background-image: url("../../assets/img/aldea/albums.svg");
      }
    }
    &.contacto {
      min-height: 54px;
      min-width: 90px;
      height: fn.to-proportion-width(60, 1440);
      width: fn.to-proportion-width(130, 1440);
      a {
        background-image: url("../../assets/img/aldea/contacto.svg");
      }
    }
    &.sesiones {
      min-height: 70.434px;
      min-width: 56.934px;
      height: fn.to-proportion-width(107.39, 1440);
      width: fn.to-proportion-width(84.89, 1440);
      a {
        background-image: url("../../assets/img/aldea/sesiones.svg");
      }
    }
    &.cine {
      min-height: 65.4px;
      min-width: 65.394px;
      height: fn.to-proportion-width(119, 1440);
      width: fn.to-proportion-width(118.99, 1440);
      a {
        background-image: url("../../assets/img/aldea/cine.svg");
      }
    }
  }
  &__menu,
  nav,
  ul {
    height: 100%;
    width: 100%;
  }
  &__menu {
    ul {
      display: flex;
      list-style: none;
      position: relative;
    }
    &.explode .aldea__item {
      opacity: 1;
      transform: scale(1);
      &:hover {
        transition-duration: 0.3s;
        transform: scale(1.1);
      }
    }
    &.explode .tv {
      top: -69%;
      left: -30%;
      @media (min-width: 800px) {
        top: -65%;
        left: 0;
      }
    }
    &.explode .teatro {
      top: -70%;
      left: 30%;
      @media (min-width: 800px) {
        top: -45%;
        left: 30%;
      }
    }
    &.explode .contenido {
      top: -30%;
      left: 60%;
      @media (min-width: 800px) {
        top: 10%;
        left: 55%;
      }
    }
    &.explode .albums {
      top: 40%;
      left: 60%;
      @media (min-width: 800px) {
        top: 65%;
        left: 30%;
      }
    }
    &.explode .contacto {
      top: 65%;
      @media (min-width: 800px) {
        top: 65%;
        left: -25%;
      }
    }
    &.explode .sesiones {
      top: 40%;
      left: -60%;
      @media (min-width: 800px) {
        top: 10%;
        left: -55%;
      }
    }
    &.explode .cine {
      top: -30%;
      left: -60%;
      @media (min-width: 800px) {
        top: -45%;
        left: -30%;
      }
    }
  }
  &__pyramid {
    --glow-color: white;
    @extend %middle;
    @include glow-animation(var(--glow-color));
    background-image: url("../../assets/img/aldea/piramide.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: url("../../assets/img/lib/soundwaves-enabled.svg"), auto;
    height: 0;
    opacity: 0;
    transition: opacity 1.5s linear, transform 1s cubic-bezier(0.23, 1, 0.32, 1) !important;
    width: 0;
    &.visible {
      height: fn.to-proportion-width(147.54, 1440);
      min-height: 108px;
      min-width: 300px;
      opacity: 1;
      width: fn.to-proportion-width(440.72, 1440);
      z-index: 1;
    }
    &--sound-on {
      --glow-color: gold;
      @include glow-animation(var(--glow-color), 0.5s);
      cursor: url("../../assets/img/lib/soundwaves-disabled.svg"), auto;
    }
  }
}
</style>
