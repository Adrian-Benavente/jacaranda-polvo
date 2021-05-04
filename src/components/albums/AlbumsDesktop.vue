<template>
  <div :class="$style.grid">
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
      <div :class="$style.carouselContent">
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
        <CarouselControls
          @move-prev="movePrev"
          @move-next="moveNext"
          :current="active"
          :length="albums.length"
          :show-numbers="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CarouselControls from "@/components/lib/CarouselControls";

export default {
  name: "AlbumsDesktop",
  components: { CarouselControls },
  props: {
    active: Boolean,
    albums: Array,
    currentAlbum: Object,
    moveNext: Function,
    movePrev: Function,
  },
};
</script>
<style lang="scss" module>
@use "../../assets/scss/functions.scss" as fn;

.grid {
  align-content: end;
  color: white;
  display: grid;
  font-family: var(--bebas);
  grid-template-columns: 1fr 2fr;
  height: 100%;
  text-align: start;
  width: fn.to-proportion-width(1102, 1440);
}

.left {
  align-self: end;
  padding: 7rem 0;
}

.right {
  justify-self: end;
  align-self: center;
}

.carouselLink {
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  }
  display: block;
  height: fn.to-proportion-width(700, 1440);
  transition: background-image 0.5s;
  width: fn.to-proportion-width(700, 1440);
}

.infoArtist,
.infoTitle,
.infoYear {
  margin-bottom: fn.to-rem(5);
}

.infoArtist {
  color: white;
  font-size: fn.to-proportion-width(35, 1440);
  letter-spacing: fn.to-rem(1);
  margin-bottom: 1rem;
}

.infoTitle {
  font-size: fn.to-proportion-width(20, 1440);
}

.infoYear {
  font-size: fn.to-proportion-width(16, 1440);
}

.infoLink {
  align-items: center;
  color: var(--color-hero);
  display: flex;
  font-family: var(--montserrat);
  font-size: fn.to-proportion-width(18, 1440);
  margin-top: 1rem;
}

.arrowRight {
  background: url("../../assets/img/lib/arrow-right.svg") center / contain
    no-repeat;
  display: inline-block;
  height: fn.to-rem(17);
  margin-left: fn.to-rem(13);
  transition: margin-left 0.3s ease-in-out;
  width: fn.to-rem(17);
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
