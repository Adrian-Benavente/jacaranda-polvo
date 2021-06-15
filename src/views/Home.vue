<template>
  <div>
    <ArrowUp link="#" />
    <div :class="$style.backgroundStars">
      <Aldea />
      <Welcome />
    </div>
    <Cine />
    <Television />
    <Albums />
    <Sesiones />
    <Teatro />
    <Contenido />
    <Contacto />
    <VideoArena />
  </div>
</template>

<script>
import Aldea from "@/components/aldea/Aldea";
import Welcome from "@/components/welcome/Welcome";
import Cine from "@/components/cine/Cine";
import Television from "@/components/tv/Television";
import Albums from "@/components/albums/Albums";
import Sesiones from "@/components/sesiones/Sesiones";
import Teatro from "@/components/teatro/Teatro";
import Contenido from "@/components/contenido/Contenido";
import Contacto from "@/components/contacto/Contacto";
import VideoArena from "@/components/video-arena/VideoArena";
import ArrowUp from "@/components/lib/ArrowUp";

export default {
  name: "Home",
  components: {
    ArrowUp,
    Aldea,
    Welcome,
    Cine,
    Television,
    Albums,
    Sesiones,
    Teatro,
    Contenido,
    Contacto,
    VideoArena,
  },
};
</script>

<style lang="scss" module>
.backgroundStars {
  background: {
    attachment: scroll;
    image: url("../assets/img/aldea/sky-bg.jpg");
    position: 0 65%;
    repeat: no-repeat;
    size: cover;
  }
  @media (min-width: 768px) {
    background-attachment: fixed;
  }
}
</style>
