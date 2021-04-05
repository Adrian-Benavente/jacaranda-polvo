<template>
  <div :class="[$style.container, open && $style.open]">
    <nav>
      <ul @mouseout="symbol = null">
        <li :class="$style.item" @mouseover="symbol = 'cine'">
          <router-link to="/#section-cine" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('cine', 'menu')"
              >Cine
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'tv'">
          <router-link to="/#section-tv" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('tv', 'menu')"
              >Tv
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'albums'">
          <router-link to="/#section-albums" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('albums', 'menu')"
              >Albums
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'sesiones'">
          <router-link to="/#section-sesiones" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('sesiones', 'menu')"
              >Sesiones
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'teatro'">
          <router-link to="/#section-teatro" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('teatro', 'menu')"
              >Teatro
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'contenido'">
          <router-link to="/#section-contenido" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('contenido', 'menu')"
            >
              Contenido
            </a>
          </router-link>
        </li>
        <li :class="$style.item" @mouseover="symbol = 'contacto'">
          <router-link to="/#section-contacto" v-slot="{ href, navigate }">
            <a
              :href="href"
              @click="
                navigate;
                $emit('close');
              "
              @mouseover="open && playSound('contacto', 'menu')"
              >Contacto
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
    <div :class="[$style.cell, $style[symbol], symbol && $style.fadeIn]"></div>
    <a
      href="https://www.youtube.com/channel/UCNx1Vq9fdjNUaccmjXYdg5w"
      target="_blank"
      :class="$style.youtube"
    >
      Youtube
    </a>
  </div>
</template>

<script>
import Sound from "@/mixins/sound";

export default {
  name: "TheMenu",
  mixins: [Sound],
  props: {
    open: Boolean,
  },
  data: () => ({
    symbol: null,
  }),
};
</script>

<style lang="scss" module>
@use "../../../assets/scss/functions" as fn;

.container {
  align-items: center;
  animation: fadeOut 0.5s ease-in 0.4s backwards;
  background: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: fixed;
  top: -100%;
  transition: top 0.5s ease-in-out;
  width: 100%;
  z-index: 10000;
  .cell {
    display: none;
  }
  .youtube {
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.4s;
  }
  &.open {
    animation: unRoundEdges 0.5s ease-in backwards;
    opacity: 1;
    top: 0;
    .cell {
      display: block;
    }
    .youtube {
      opacity: 1;
    }
  }
}
.item {
  list-style: none;
  text-transform: uppercase;
  a {
    color: white;
    display: block;
    font: normal 400 fn.to-rem(30) / fn.to-rem(70) var(--montserrat);
    height: 100%;
    transition: color 0.5s;
    width: 100%;
    &:hover {
      color: var(--color-hero);
      font-family: var(--montserrat-bold);
    }
  }
}
.cell {
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: background-image 0.2s ease-in-out, opacity 0.4s ease-in-out;
  &.fadeIn {
    opacity: 1;
  }
  &.cine {
    background-image: url("../../../assets/img/menu/cine.svg");
    height: fn.to-proportion-width(231, 1440);
    right: -2%;
    width: fn.to-proportion-width(231, 1440);
  }
  &.tv {
    background-image: url("../../../assets/img/menu/tv.svg");
    height: fn.to-proportion-width(252.5, 1440);
    right: -3%;
    width: fn.to-proportion-width(256, 1440);
  }
  &.sesiones {
    background-image: url("../../../assets/img/menu/sesiones.svg");
    height: fn.to-proportion-width(294.46, 1440);
    right: -2.5%;
    width: fn.to-proportion-width(238, 1440);
  }
  &.albums {
    background-image: url("../../../assets/img/menu/albums.svg");
    height: fn.to-proportion-width(264, 1440);
    right: -2%;
    width: fn.to-proportion-width(225, 1440);
  }
  &.teatro {
    background-image: url("../../../assets/img/menu/teatro.svg");
    height: fn.to-proportion-width(208, 1440);
    right: -1.75%;
    width: fn.to-proportion-width(301, 1440);
  }
  &.contenido {
    background-image: url("../../../assets/img/menu/contenido.svg");
    height: fn.to-proportion-width(196.26, 1440);
    right: -1.5%;
    width: fn.to-proportion-width(301.25, 1440);
  }
  &.contacto {
    background-image: url("../../../assets/img/menu/contacto.svg");
    height: fn.to-proportion-width(188, 1440);
    right: -1.5%;
    width: fn.to-proportion-width(313.22, 1440);
  }
}
.youtube {
  align-items: center;
  bottom: fn.to-proportion-width(33, 1440);
  color: white;
  display: flex;
  font: normal 400 fn.to-proportion-width(10, 1440) var(--bebas);
  flex-direction: column;
  position: absolute;
  right: fn.to-proportion-width(88, 1440);
  text-transform: uppercase;
  &::before {
    background: url("../../../assets/img/lib/youtube.svg") no-repeat
      center/contain;
    content: "";
    display: block;
    height: fn.to-proportion-width(17.33, 1440);
    margin-bottom: 0.35rem;
    width: fn.to-proportion-width(26, 1440);
  }
}
@keyframes unRoundEdges {
  0% {
    border-radius: 0 0 100% 100%;
  }
  100% {
    border-radius: 0 0 0 0;
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
