<template>
  <header :class="$style.heading">
    <h2 id="cine" :aria-label="titleText.toString()" data-scroll>
      <span v-for="(letter, idx) in titleText" :key="idx">{{ letter }}</span>
    </h2>
    <div :class="$style.line" data-scroll></div>
  </header>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  name: "SectionTitle",
  props: {
    titleText: String,
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.heading {
  color: white;
  display: flex;
  flex-direction: column;
  font: 3rem var(--bebas-bold);
  text-transform: uppercase;
  position: absolute;
  bottom: 5vh;
  left: 0;
  transform: rotate(-90deg);
  h2 {
    line-height: 100%;
    text-align: left;
    text-shadow: 0 0 5px rgba(black, 0.3);
    &[data-scroll] span {
      transition-duration: 1.2s;
      transition-property: opacity;
    }
    &[data-scroll="in"] span {
      opacity: 1;
    }
    &[data-scroll="out"] span {
      opacity: 0;
    }
    &[data-scroll="in"] span:first-child {
      transition-delay: 0.1s;
    }
    @for $i from 2 to 10 {
      &[data-scroll="in"] span:nth-child(#{$i}) {
        transition-delay: #{"0." + $i}s;
      }
    }
  }
  @media (min-width: 768px) {
    bottom: 20vh;
    font-size: fn.to-proportion-width(60, 1440);
    left: 1vw;
  }
}
.line {
  background-color: white;
  height: 3px;
  &[data-scroll] {
    transition: width 1.2s, opacity 1s;
  }
  &[data-scroll="in"] {
    opacity: 1;
    width: 1000%;
    @media (min-width: 768px) {
      width: 700%;
    }
  }
  &[data-scroll="out"] {
    opacity: 0;
    width: 1%;
  }
}
</style>
