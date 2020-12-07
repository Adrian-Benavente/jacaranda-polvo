<template>
  <div>
    <div :class="$style.backgroundStars">
      <AldeaMain />
      <Welcome />
    </div>
    <Cine />
    <Teatro />
  </div>
</template>

<script>
import AldeaMain from '@/components/aldea/AldeaMain';
import Welcome from '@/components/welcome/Welcome';
import Cine from '@/components/cine/Cine';
import Teatro from '@/components/teatro/Teatro';

export default {
  name: "Home",
  components: {Teatro, Cine, Welcome, AldeaMain },
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
