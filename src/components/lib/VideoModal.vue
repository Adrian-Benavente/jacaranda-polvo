<template>
  <div :class="$style.container" v-if="modalOpen">
    <div :class="$style.main">
      <iframe
        :class="$style.iframe"
        :src="url"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button :class="$style.close" @click="$emit('close')">Cerrar</button>
    </div>
    <div :class="$style.overlay"></div>
  </div>
</template>

<script>
export default {
  name: "VideoModal",
  props: {
    modalOpen: Boolean,
    url: String,
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;
}
.main {
  bottom: 0;
  height: 45vw;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 80vw;
  z-index: 9999;
}
.overlay {
  background: rgba(black, 0.9);
  height: 100%;
  left: 0;
  margin: auto;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9998;
}
.iframe {
  border: 0;
  display: block;
  height: 100%;
  width: 100%;
}
.close {
  appearance: none;
  background: none;
  border: none;
  bottom: -2rem;
  color: white;
  cursor: pointer;
  display: block;
  font: 400 1.25rem / 130% var(--bebas);
  position: absolute;
  right: 0;
  z-index: 10000;
}
</style>
