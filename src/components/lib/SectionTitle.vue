<template>
  <header :class="[$style.container, titleAppears && $style.appear]">
    <h2
      :id="titleText.toString().trim().toLowerCase()"
      :aria-label="titleText.toString()"
      :class="$style.title"
    >
      <span
        v-for="(letter, idx) in titleText"
        :key="idx"
        :class="$style.letter"
        >{{ letter }}</span
      >
    </h2>
    <div :class="$style.line"></div>
  </header>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    titleText: String,
    titleAppears: Boolean,
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  bottom: 5vh;
  color: white;
  display: flex;
  flex-direction: column;
  font: 3rem var(--bebas-bold);
  left: 0;
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-90deg);
  .title {
    line-height: 100%;
    text-align: left;
    text-shadow: 0 0 5px rgba(black, 0.3);
    .letter {
      opacity: 0;
    }
  }
  .line {
    display: none;
    @media (min-width: 768px) {
      background-color: white;
      display: block;
      height: 3px;
      opacity: 0;
      transition: width 1.2s, opacity 1s;
      width: 1%;
    }
  }
  @media (min-width: 768px) {
    bottom: 20vh;
    font-size: fn.to-proportion-width(60, 1440);
    left: 1vw;
  }
}

.container.appear {
  .title {
    .letter {
      opacity: 1;
      transition-duration: 1.2s;
      transition-property: opacity;
    }
    .letter:first-child {
      transition-delay: 0.1s;
    }
    @for $i from 2 to 10 {
      .letter:nth-child(#{$i}) {
        transition-delay: #{"0." + $i}s;
      }
    }
  }
  .line {
    @media (min-width: 768px) {
      opacity: 1;
      width: 1000%;
    }
  }
}
</style>
