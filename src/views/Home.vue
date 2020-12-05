<template>
  <div>
    <div :class="$style.backgroundStars">
      <AldeaMain />
      <Welcome />
    </div>
    <Cine />
  </div>
</template>

<script>
import AldeaMain from '@/components/aldea/AldeaMain';
import Welcome from '@/components/welcome/Welcome';
import Cine from '@/components/cine/Cine';

export default {
  name: "Home",
  components: { Cine, Welcome, AldeaMain },
};
</script>

<style lang="scss" module>
.backgroundStars {
  background: {
    attachment: fixed;
    image: url("../assets/img/aldea/sky-bg.jpg");
    repeat: no-repeat;
    size: cover;
  }
}
</style>
