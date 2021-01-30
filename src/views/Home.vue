<template>
  <div>
    <div :class="$style.backgroundStars">
      <AldeaMain />
      <Welcome />
    </div>
    <Cine />
    <Television />
    <Albums />
    <Sesiones />
    <Teatro />
    <Contenido />
  </div>
</template>

<script>
import AldeaMain from "@/components/aldea/AldeaMain";
import Welcome from "@/components/welcome/Welcome";
import Cine from "@/components/cine/Cine";
import Television from "@/components/tv/Television";
import Albums from "@/components/albums/Albums";
import Sesiones from "@/components/sesiones/Sesiones";
import Teatro from "@/components/teatro/Teatro";
import Contenido from "@/components/contenido/Contenido";

export default {
  name: "Home",
  components: {
    Contenido,
    Teatro,
    Sesiones,
    Albums,
    Television,
    Cine,
    Welcome,
    AldeaMain,
  },
};
</script>

<style lang="scss" module>
.backgroundStars {
  background: {
    attachment: fixed;
    image: url("../assets/img/aldea/sky-bg.jpg");
    position: 0 65%;
    repeat: no-repeat;
    size: cover;
  }
}
</style>
