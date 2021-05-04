<template>
  <div :class="$style.container">
    <div
      v-for="(currentAlbum, idx) in albums"
      :key="`album-${idx}`"
      :class="$style.grid"
    >
      <div :class="$style.left">
        <div :class="$style.info">
          <h3 :class="$style.infoArtist">{{ currentAlbum.artist }}</h3>
          <p :class="$style.infoTitle">{{ currentAlbum.title }}</p>
          <p :class="$style.infoYear">{{ currentAlbum.year }}</p>
          <router-link
            :to="`/albums/${currentAlbum.id}/${currentAlbum.slug.artist}/${currentAlbum.slug.title}`"
            v-slot="{ href, navigate }"
            custom
          >
            <a :class="$style.infoLink" :href="href" @click="navigate">
              {{ $t("albums.see_album") }}
              <span :class="$style.arrowRight"></span>
            </a>
          </router-link>
        </div>
      </div>
      <div :class="$style.right">
        <div>
          <router-link
            :to="`/albums/${currentAlbum.id}/${currentAlbum.slug.artist}/${currentAlbum.slug.title}`"
            v-slot="{ href, navigate }"
            custom
          >
            <a
              :href="href"
              :class="$style.carouselLink"
              :style="{ backgroundImage: `url('${currentAlbum.cover}')` }"
              @click="navigate"
            >
              <span class="sr-only">{{ currentAlbum.title }}</span>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AlbumsMobile",
  props: {
    active: Boolean,
    albums: Array,
  },
};
</script>
<style lang="scss" module>
@use "../../assets/scss/functions.scss" as fn;

.container {
  align-content: center;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100vw;
}

.grid {
  align-content: center;
  color: white;
  display: grid;
  gap: 0.75rem;
  font-family: var(--bebas);
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: hidden;
  scroll-snap-align: center;
  text-align: start;
  width: 100vw;
}

.left {
  align-self: end;
  padding: 7rem 0;
}

.right {
  align-self: center;
  margin-right: -12.8em;
}

.carouselLink {
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  }
  display: block;
  height: fn.to-proportion-width(354, 360);
  transition: background-image 0.5s;
  width: fn.to-proportion-width(364, 360);
}

.info {
  padding-left: 1.5rem;
}

.infoArtist,
.infoTitle,
.infoYear {
  margin-bottom: fn.to-rem(5);
}

.infoArtist {
  color: white;
  font-size: fn.to-rem(25);
  letter-spacing: fn.to-rem(1);
  margin-bottom: 1rem;
}

.infoTitle {
  font-size: fn.to-rem(18);
}

.infoYear {
  font-size: fn.to-rem(18);
}

.infoLink {
  align-items: center;
  color: var(--color-hero);
  display: flex;
  font: 0.875rem var(--montserrat);
  margin-top: 1rem;
}

.arrowRight {
  background: url("../../assets/img/lib/arrow-right.svg") center / contain
    no-repeat;
  display: inline-block;
  height: 0.875rem;
  margin-left: 0.5rem;
  transition: margin-left 0.3s ease-in-out;
  width: 0.875rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
