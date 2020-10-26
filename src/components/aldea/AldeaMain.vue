<template>
  <section class="aldea" aria-labelledby="aldea">
    <h2 id="aldea" class="sr-only">Bienvenido/a a Jacarandá Polvo</h2>
    <p class="sr-only">Elegí tu destino...</p>
    <kinesis-container class="aldea__menu">
      <kinesis-element
        :strength="10"
        aria-hidden="true"
        class="aldea__background"
      >
        <video
          src="../../assets/video/aldea-background.mp4"
          autoplay
          loop
          muted
        ></video>
      </kinesis-element>
      <kinesis-element
        type="depth"
        :strength="5"
        class="aldea__pyramid"
        aria-hidden="true"
      ></kinesis-element>
      <kinesis-element type="depth_inv" tag="nav">
        <ul>
          <li>
            <a class="aldea__item tv" href="#tv">
              <span class="aldea__item-text">Tv</span>
            </a>
          </li>
          <li>
            <a class="aldea__item teatro" href="#teatro"
              ><span class="aldea__item-text">Teatro</span></a
            >
          </li>
          <li>
            <a class="aldea__item contenido" href="#contenido"
              ><span class="aldea__item-text">Contenido</span></a
            >
          </li>
          <li>
            <a class="aldea__item albums" href="#albums"
              ><span class="aldea__item-text">Albums</span></a
            >
          </li>
          <li>
            <a class="aldea__item contacto" href="#contacto"
              ><span class="aldea__item-text">Contacto</span></a
            >
          </li>
          <li>
            <a class="aldea__item sesiones" href="#sesiones"
              ><span class="aldea__item-text">Sesiones</span></a
            >
          </li>
          <li>
            <a class="aldea__item cine" href="#cine"
              ><span class="aldea__item-text">Cine</span></a
            >
          </li>
        </ul>
      </kinesis-element>
    </kinesis-container>
  </section>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "AldeaMain",
  components: { KinesisContainer, KinesisElement },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        document.querySelector(".aldea__pyramid").classList.add("visible");
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
%middle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.aldea {
  background-color: black;
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
    height: 100%;
    text-decoration: none;
    width: 100%;
    &-text {
      opacity: 0;
    }
    &:hover &-text {
      font-family: "bebas_neuebold", arial, sans-serif;
      font-size: 1.25rem;
      color: white;
      opacity: 1;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      top: 105%;
    }
    &.tv {
      background-image: url("../../assets/img/aldea/tv.svg");
      height: fn.to-proportion-width(107.96, 1440);
      width: fn.to-proportion-width(63.34, 1440);
    }
    &.teatro {
      background-image: url("../../assets/img/aldea/teatro.svg");
      height: fn.to-proportion-width(117.61, 1440);
      width: fn.to-proportion-width(169.88, 1440);
    }
    &.contenido {
      background-image: url("../../assets/img/aldea/contenido.svg");
      height: fn.to-proportion-width(89.26, 1440);
      width: fn.to-proportion-width(137, 1440);
    }
    &.albums {
      background-image: url("../../assets/img/aldea/albums.svg");
      height: fn.to-proportion-width(116.34, 1440);
      width: fn.to-proportion-width(99, 1440);
    }
    &.contacto {
      background-image: url("../../assets/img/aldea/contacto.svg");
      height: fn.to-proportion-width(90, 1440);
      width: fn.to-proportion-width(150, 1440);
    }
    &.sesiones {
      background-image: url("../../assets/img/aldea/sesiones.svg");
      height: fn.to-proportion-width(117.39, 1440);
      width: fn.to-proportion-width(94.89, 1440);
    }
    &.cine {
      background-image: url("../../assets/img/aldea/cine.svg");
      height: fn.to-proportion-width(109, 1440);
      width: fn.to-proportion-width(108.99, 1440);
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

      li {
        background-color: peru;
      }
    }
    &.explode .aldea__item {
      opacity: 1;
      transform: scale(1);
    }
    &.explode .tv {
      top: -65%;
    }
    &.explode .teatro {
      top: -45%;
      left: 30%;
    }
    &.explode .contenido {
      top: 10%;
      left: 55%;
    }
    &.explode .albums {
      top: 65%;
      left: 30%;
    }
    &.explode .contacto {
      top: 65%;
      left: -25%;
    }
    &.explode .sesiones {
      top: 10%;
      left: -55%;
    }
    &.explode .cine {
      top: -45%;
      left: -30%;
    }
  }
  &__background {
    filter: brightness(70%);
    position: absolute;
    height: 150%;
    width: 150%;
    video {
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
  &__pyramid {
    @extend %middle;
    background-image: url("../../assets/img/aldea/piramide.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: fn.to-proportion-width(147.54, 1440);
    opacity: 0;
    transition: opacity 1s linear, transform 1s cubic-bezier(0.23, 1, 0.32, 1) !important;
    width: fn.to-proportion-width(440.72, 1440);
    &.visible {
      opacity: 1;
    }
  }
}
</style>
