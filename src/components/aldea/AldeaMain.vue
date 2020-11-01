<template>
  <section class="aldea" aria-labelledby="aldea">
    <h2 id="aldea" class="sr-only">Bienvenido/a a Jacarandá Polvo</h2>
    <p class="sr-only">Elegí tu destino...</p>
    <kinesis-container class="aldea__menu">
      <kinesis-element
        :strength="5"
        aria-hidden="true"
        class="aldea__background"
      >
      </kinesis-element>
      <kinesis-element
        type="depth_inv"
        :strength="5"
        class="aldea__pyramid"
        aria-hidden="true"
      ></kinesis-element>
      <nav>
        <ul>
          <li class="aldea__item tv">
            <kinesis-element :strength="30" tag="a" href="#tv">
              <span class="aldea__item-text">Tv</span>
            </kinesis-element>
          </li>
          <li class="aldea__item teatro">
            <kinesis-element tag="a" href="#teatro"
              ><span class="aldea__item-text">Teatro</span></kinesis-element
            >
          </li>
          <li class="aldea__item contenido">
            <kinesis-element :strength="40" tag="a" href="#contenido"
              ><span class="aldea__item-text">Contenido</span></kinesis-element
            >
          </li>
          <li class="aldea__item albums">
            <kinesis-element :strength="80" tag="a" href="#albums"
              ><span class="aldea__item-text">Albums</span></kinesis-element
            >
          </li>
          <li class="aldea__item contacto">
            <kinesis-element tag="a" href="#contacto"
              ><span class="aldea__item-text">Contacto</span></kinesis-element
            >
          </li>
          <li class="aldea__item sesiones">
            <kinesis-element :strength="30" tag="a" href="#sesiones"
              ><span class="aldea__item-text">Sesiones</span></kinesis-element
            >
          </li>
          <li class="aldea__item cine">
            <kinesis-element :strength="70" tag="a" href="#cine"
              ><span class="aldea__item-text">Cine</span></kinesis-element
            >
          </li>
        </ul>
      </nav>
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

@media (max-width: 400px) {
  * {
    transform: none!important;
  }
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
      top: 100%
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
      //&:hover {
      //  transform: scale(1.1);
      //}
      &:hover a {
        transform: none!important;
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
  &__background {
    background-image: url("../../assets/img/aldea/sky-bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(50%) grayscale(100%);
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &__pyramid {
    @extend %middle;
    background-image: url("../../assets/img/aldea/piramide.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: fn.to-proportion-width(147.54, 1440);
    min-height: 108px;
    min-width: 300px;
    opacity: 0;
    transition: opacity 1s linear, transform 1s cubic-bezier(0.23, 1, 0.32, 1) !important;
    width: fn.to-proportion-width(440.72, 1440);
    &.visible {
      opacity: 1;
    }
  }
}
</style>
