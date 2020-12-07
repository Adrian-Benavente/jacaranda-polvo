<template>
  <section :class="$style.container" aria-labelledby="teatro">
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'teatro'"
        :title-appears="titleAppears"
      />
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import SectionTitle from '@/components/lib/SectionTitle';

export default {
  name: "Teatro",
  components: { SectionTitle },
  data: () => ({ titleAppears: false }),
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      onShown: () => {
        setTimeout(() => (this.titleAppears = true), 500);
      },
      onHidden: () => {
        this.titleAppears = false;
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
.container {
  background-color: black;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.scrollOutContainer {
  height: 100%;
}
.title {
  left: -2%;
}
</style>
