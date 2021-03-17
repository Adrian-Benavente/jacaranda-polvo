<template>
  <div
    :class="[
      $style.container,
      completed && $style.completed,
      remove && $style.remove,
    ]"
  >
    <div :class="$style.loader">
      <div :class="$style.spinner"></div>
      <div :class="[$style.arbol, webp && $style.webp]"></div>
    </div>
    <div :class="$style.logo">Jacarandá Polvo</div>
    <div :class="$style.percent">{{ loaded }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import PageLoadProgress from "@/mixins/load";

export default Vue.extend({
  mixins: [PageLoadProgress],
  name: "LoadingScreen",
  data() {
    return {
      store: this.$store,
      webp: false,
    };
  },
  mounted() {
    this.webp = document.documentElement.classList.contains("webp");
  },
});
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  align-items: center;
  background: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.7s;
  width: 100%;
  z-index: 9999;
  &.completed {
    opacity: 0;
  }
  &.remove {
    display: none;
  }
}
.loader {
  position: relative;
}
.spinner {
  animation: rotation 2.5s infinite linear;
  background: url("../../assets/img/logo/arrows.svg") no-repeat center/contain;
  height: fn.to-proportion-width(248, 1440);
  width: fn.to-proportion-width(248, 1440);
}
.arbol {
  background: url("../../assets/img/logo/arbol-solo.png") no-repeat
    center/contain;
  bottom: 0;
  content: "";
  height: fn.to-proportion-width(230, 1440);
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: fn.to-proportion-width(230, 1440);
  &.webp {
    background-image: url("../../assets/img/logo/arbol-solo.webp");
  }
}
.logo {
  color: white;
  font: 400 fn.to-rem(40) / fn.to-rem(73) var(--bebas);
  margin-top: 1rem;
}
.percent {
  color: white;
  font: 400 1rem / fn.to-rem(73) var(--montserrat);
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
