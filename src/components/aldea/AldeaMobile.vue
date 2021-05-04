<template>
  <div :class="['aldea__menu', explode && 'explode']">
    <div @click="toggleSound">
      <div
        :class="[
          'aldea__pyramid',
          sound && pyramidSound && 'aldea__pyramid--sound-on',
          visible && 'visible',
        ]"
        aria-hidden="true"
      ></div>
    </div>
    <nav>
      <ul>
        <li class="aldea__item tv">
          <a href="#section-tv">{{ $t("sections.tv") }}</a>
        </li>
        <li class="aldea__item teatro">
          <a href="#section-teatro">{{ $t("sections.theater") }}</a>
        </li>
        <li class="aldea__item contenido">
          <a href="#section-contenido">{{ $t("sections.content") }}</a>
        </li>
        <li class="aldea__item albums">
          <a href="#section-albums">{{ $t("sections.albums") }}</a>
        </li>
        <li class="aldea__item contacto">
          <a href="#section-contacto">{{ $t("sections.contact") }}</a>
        </li>
        <li class="aldea__item sesiones">
          <a href="#section-sesiones">{{ $t("sections.sessions") }}</a>
        </li>
        <li class="aldea__item cine">
          <a href="#section-cine">{{ $t("sections.cine") }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Sound from "@/mixins/sound";

export default {
  name: "AldeaMobile",
  mixins: [Sound],
  props: {
    explode: Boolean,
    pyramidSound: Boolean,
    sound: Boolean,
    toggleSound: Function,
    visible: Boolean,
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
    }
    &-text {
      @extend %middle;
      color: white;
      font-family: "bebas_neuebold", arial, sans-serif;
      font-size: 1rem;
      text-align: center;
      text-transform: uppercase;
      top: 110%;
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
    }
    &.explode .tv {
      top: -69%;
      left: -30%;
    }
    &.explode .teatro {
      top: -70%;
      left: 30%;
    }
    &.explode .contenido {
      top: -30%;
      left: 60%;
    }
    &.explode .albums {
      top: 40%;
      left: 60%;
    }
    &.explode .contacto {
      top: 65%;
    }
    &.explode .sesiones {
      top: 40%;
      left: -60%;
    }
    &.explode .cine {
      top: -30%;
      left: -60%;
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
