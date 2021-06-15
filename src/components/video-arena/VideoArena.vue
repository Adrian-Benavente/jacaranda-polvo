<template>
  <div :class="$style.container">
    <video :class="$style.video" muted autoplay data-scroll playsinline>
      <source src="../../assets/video/video-arena.webm" type="video/webm" />
      <source src="../../assets/video/video-arena.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "VideoArena",
  mounted() {
    const video = document.querySelector(`.${this.$style.video}`);
    this.so = ScrollOut({
      scope: this.$el,
      onShown: () => {
        video.play();
      },
      onHidden: () => {
        video.pause();
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style module lang="scss">
.video {
  display: block;
  height: calc(100vw / 16 * 9px);
  width: 100%;
}
</style>
