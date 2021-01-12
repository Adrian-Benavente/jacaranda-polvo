<template>
  <div :class="$style.main">
    <div
      :class="$style.container"
      @mousedown="mouseDownHandler($event)"
      @mouseleave="mouseLeaveHandler"
      @mousemove="mouseMoveHandler($event)"
      @mouseup="mouseUpHandler"
    >
      <img :class="$style.image" src="@/assets/img/sesiones/01-facu-dial.jpg" />
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/02-sofia-viola.jpg"
      />
      <img :class="$style.image" src="@/assets/img/sesiones/03-matraka.jpg" />
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/04-mar-joppich.jpg"
      />
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/05-sergio-aguiar.jpg"
      />
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/06-matias-suarez.jpg"
      />
      <img :class="$style.image" src="@/assets/img/sesiones/07-gordo.jpg" />
      <img :class="$style.image" src="@/assets/img/sesiones/08-cdu.jpg" />
      <img :class="$style.image" src="@/assets/img/sesiones/09-facu-dial.jpg" />
      <img :class="$style.image" src="@/assets/img/sesiones/10-ofelia.jpg" />
      <img :class="$style.image" src="@/assets/img/sesiones/11-ofelia.jpg" />
    </div>
    <CarouselControls
      @move-prev="moveRight"
      @move-next="moveLeft"
      :length="11"
    />
  </div>
</template>

<script>
import CarouselControls from "@/components/lib/CarouselControls";
export default {
  name: "SesionesDragCarousel",
  components: { CarouselControls },
  data: () => ({
    container: null,
    containerWidth: null,
    isDown: false,
    itemWidth: null,
    scrollSide: 0,
    startX: null,
  }),
  methods: {
    mouseDownHandler(e) {
      this.isDown = true;
      this.container.classList.add(this.$style.active);
      this.startX = e.pageX - this.container.offsetLeft;
      this.scrollSide = this.container.scrollLeft;
    },
    mouseLeaveHandler() {
      this.isDown = false;
      this.container.classList.remove(this.$style.active);
    },
    mouseMoveHandler(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.container.offsetLeft;
      const walk = (x - this.startX) * 3;
      this.container.scrollLeft = this.scrollSide - walk;
    },
    mouseUpHandler() {
      this.isDown = false;
      this.container.classList.remove(this.$style.active);
    },
    moveLeft() {
      if (this.scrollSide < this.containerWidth) {
        this.scrollSide += this.itemWidth;
        this.container.scrollLeft = this.scrollSide;
      }
      console.log(this.container.scrollLeft);
    },
    moveRight() {
      if (this.scrollSide > 0) {
        this.scrollSide -= this.itemWidth;
        this.container.scrollLeft = this.scrollSide;
      }
      console.log(this.container.scrollLeft);
    },
  },
  mounted() {
    this.container = document.querySelector(`.${this.$style.container}`);
    this.containerWidth = this.container.offsetWidth;
    this.itemWidth = document.querySelector(
      `.${this.$style.image}`
    ).offsetWidth;
  },
};
</script>

<style lang="scss" module>
@use "../../../assets/scss/functions" as fn;
.container {
  cursor: grab;
  display: flex;
  gap: 1rem;
  overflow: hidden;
  &.active {
    cursor: grabbing;
  }
}
.image {
  display: block;
  @media (min-width: 768px) {
    width: fn.to-proportion-width(385, 1440);
  }
}
</style>
