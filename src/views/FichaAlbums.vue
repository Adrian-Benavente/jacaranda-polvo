<template>
  <div :class="$style.container">
    <h2 :class="$style.title">
      {{ album.artist }} /
      <span :class="$style.albumTitle">{{ album.title }}</span>
    </h2>
    <main :class="$style.main">
      <section :class="$style.albumWrapper">
        <div :class="$style.albumArtwork">
          <figure>
            <img
              :class="$style.albumArtworkImg"
              :src="
                require(`@/assets/img/albums/${artist}/${title}/${album.artwork[selectedArtwork]}`)
              "
              :alt="`${album.title} por ${album.artist}`"
            />
          </figure>
          <div :class="$style.controls">
            <CarouselControls
              :current="selectedArtwork + 1"
              :length="album.artwork.length"
              @move-prev="move('prev')"
              @move-next="move('next')"
            />
          </div>
        </div>
        <div :class="$style.albumPlayer">
          <div v-if="album.spotifyId" :class="$style.spotify">
            <iframe
              :class="$style.playlist"
              :src="`https://open.spotify.com/embed/album/${album.spotifyId}`"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div v-if="album.youTubeId" :class="$style.youtube">
            <iframe
              :class="$style.playlist"
              :src="`https://www.youtube.com/embed/${album.youTubeId}`"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section :aria-labelledby="$style.aboutTitle" :class="$style.about">
        <h3 :class="$style.title" :id="$style.aboutTitle">Sobre el proyecto</h3>
        <ul :class="$style.list">
          <li
            :class="$style.item"
            v-for="(detail, idx) in album.details"
            :key="`albumDetails-${idx}`"
          >
            {{ detail }}
          </li>
          <li
            v-if="album.links && album.links.spotify"
            :class="[$style.item, $style.social, $style.spotify]"
          >
            <a :class="$style.link" :href="album.links.spotify" target="_blank"
              >Escuchar en Spotify</a
            >
          </li>
          <li
            v-if="album.links && album.links.youTube"
            :class="[$style.item, $style.social, $style.youTube]"
          >
            <a :class="$style.link" :href="album.links.youTube" target="_blank"
              >Escuchar en Youtube</a
            >
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { albumList } from "@/components/albums/data-albums";
import CarouselControls from "@/components/lib/CarouselControls";

export default {
  name: "FichaAlbums",
  components: { CarouselControls },
  data() {
    return {
      albumList,
      artist: this.$route.params.artist,
      id: this.$route.params.id,
      selectedArtwork: 0,
      title: this.$route.params.title,
    };
  },
  computed: {
    album() {
      return this.albumList.find(
        ({ id, slug: { artist, title } }) =>
          id === this.id && artist === this.artist && title === this.title
      );
    },
  },
  methods: {
    move(dir) {
      if (dir === "prev" && this.selectedArtwork > 0) {
        this.selectedArtwork--;
      } else if (dir === "prev" && this.selectedArtwork === 0) {
        this.selectedArtwork = this.album.artwork.length - 1;
      } else if (
        dir === "next" &&
        this.selectedArtwork < this.album.artwork.length - 1
      ) {
        this.selectedArtwork++;
      } else {
        this.selectedArtwork = 0;
      }
    },
  },
};
</script>

<style lang="scss" module>
@use "../assets/scss/functions" as fn;

$gap: fn.to-proportion-width(110, 1440);
$max-width: fn.to-proportion-width(1186, 1440);

.container {
  margin-top: fn.to-proportion-width(100, 1440);
}
.title {
  color: white;
  font: normal 400 fn.to-rem(30) / fn.to-rem(63) var(--bebas);
  margin-bottom: fn.to-rem(50);
}
.album {
  &Title {
    color: var(--color-hero);
  }
  &Wrapper {
    border: 1px solid #ffffff;
    display: grid;
    grid-auto-flow: column;
    gap: 0 $gap;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    max-width: $max-width;
    padding: fn.to-proportion-width(41, 1440) fn.to-proportion-width(82, 1440)
      fn.to-proportion-width(169, 1440);
    width: 100%;
  }
  &Artwork {
    &Img {
      display: block;
      height: fn.to-proportion-width(489, 1440);
      object-fit: cover;
      width: 100%;
    }
  }
  &Player {
    --extra-space: #{fn.to-proportion-width(45.5, 1440)};
    height: calc(100% + var(--extra-space));
    .spotify,
    .youtube {
      height: inherit;
      width: 100%;
    }
    .playlist {
      border: 0;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
.controls {
  position: relative;
  top: fn.to-proportion-width(91, 1440);
  width: 100%;
  * {
    background-color: #161616;
    width: 100%;
  }
}
.about {
  margin: auto;
  max-width: $max-width;
  padding: fn.to-proportion-width(200, 1440) 0;
  text-align: start;
  .title {
    color: var(--color-hero);
    font: normal 400 fn.to-rem(24) / fn.to-rem(35) var(--bebas);
    margin-bottom: fn.to-rem(27);
  }
  .list {
    column-count: 2;
    column-gap: $gap;
    list-style: none;
  }
  .item {
    color: white;
    font: normal 400 1rem / fn.to-rem(30) var(--montserrat);
    margin-bottom: fn.to-rem(27);
    &.social {
      .link {
        align-items: center;
        color: white;
        display: flex;
        &::before {
          background: {
            repeat: no-repeat;
            size: contain;
          }
          content: "";
          display: block;
          height: fn.to-rem(26);
          margin-right: 0.5rem;
          width: fn.to-rem(26);
        }
      }
      &.spotify .link {
        &::before {
          background-image: url("../assets/img/lib/spotify.svg");
        }
      }
      &.youTube .link {
        &::before {
          background-image: url("../assets/img/lib/youtube-circle.svg");
        }
      }
    }
  }
}
</style>
