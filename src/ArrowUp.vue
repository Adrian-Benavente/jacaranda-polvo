<template>
  <a :href="link" :class="['go-up-link', visible && 'visible']">
    <span class="sr-only">Go up</span>
  </a>
</template>
<script>
export default {
  name: "ArrowUp",
  props: {
    link: String,
  },
  data: () => ({
    visible: false,
  }),
  mounted() {
    this.visible = window.scrollY > window.innerWidth / 2;
    window.addEventListener("scroll", () => {
      this.visible = window.scrollY > window.innerWidth / 2;
    });
  },
};
</script>
<style lang="scss">
@use "assets/scss/animations" as an;

@include an.fadeIn;

.go-up-link {
  align-items: center;
  background-color: #383838;
  border-radius: 50%;
  bottom: 16px;
  display: none;
  height: 60px;
  justify-content: center;
  opacity: 0;
  position: fixed;
  right: 16px;
  width: 60px;
  z-index: 9;
  &::before {
    content: url("assets/img/lib/chevron-up.svg");
    color: white;
    font-family: var(--montserrat);
  }
  &.visible {
    animation: fadeIn 0.5s;
    display: flex;
    opacity: 1;
  }
}
</style>
