<template>
  <div :class="$style.container">
    <h2 :class="$style.title">
      {{ album.artist }} /
      <span :class="$style.albumTitle">{{ album.title }}</span>
    </h2>
    <main :class="$style.main">
      <section
        :class="[
          $style.albumWrapper,
          hasMoreThanOneArtwork && $style.extraPadding,
        ]"
      >
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
          <div :class="$style.controls" v-if="hasMoreThanOneArtwork">
            <CarouselControls
              :current="selectedArtwork + 1"
              :length="album.artwork.length"
              @move-prev="move('prev')"
              @move-next="move('next')"
            />
          </div>
        </div>
        <div
          :class="[
            $style.albumPlayer,
            hasMoreThanOneArtwork && $style.extraSpace,
          ]"
        >
          <div v-if="album.spotifyId" :class="$style.spotify">
            <iframe
              :class="$style.playlist"
              :src="`https://open.spotify.com/embed/album/${album.spotifyId}`"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div v-if="album.youtubePlaylistId" :class="$style.youtube">
            <iframe
              :class="$style.playlist"
              :src="`https://www.youtube.com/embed/?listType=playlist&list=${album.youtubePlaylistId}`"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div v-if="album.youtubeSingleId" :class="$style.youtube">
            <iframe
              :class="$style.playlist"
              :src="`https://www.youtube.com/embed/${album.youtubeSingleId}`"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section :aria-labelledby="$style.aboutTitle" :class="$style.about">
        <div :class="$style.top">
          <div>
            <h3 :class="$style.title" :id="$style.aboutTitle">
              Sobre el proyecto
            </h3>
            <p :class="$style.text">{{ album.about }}</p>
            <ul :class="[$style.list, $style.listSocial]">
              <li
                v-if="album.links && album.links.spotify"
                :class="[$style.item, $style.social, $style.spotify]"
              >
                <a
                  :class="$style.link"
                  :href="album.links.spotify"
                  target="_blank"
                  >Escuchar en Spotify</a
                >
              </li>
              <li
                v-if="album.links && album.links.youTube"
                :class="[$style.item, $style.social, $style.youTube]"
              >
                <a
                  :class="$style.link"
                  :href="album.links.youTube"
                  target="_blank"
                  >Escuchar en Youtube</a
                >
              </li>
            </ul>
          </div>
          <div v-if="album.extra">
            <h3 :class="$style.title" :id="$style.aboutTitle">
              {{ album.extra.title }}
            </h3>
            <p
              :class="$style.text"
              v-for="(extra, idx) in album.extra.details"
              :key="`extra-${idx}`"
            >
              {{ extra }}
            </p>
          </div>
        </div>
        <h3 :class="$style.title" :id="$style.aboutTitle">Ficha tecnica</h3>
        <ul :class="$style.list">
          <li
            :class="$style.item"
            v-for="(detail, idx) in album.details"
            :key="`albumDetails-${idx}`"
          >
            {{ detail }}
          </li>
        </ul>
      </section>
    </main>
    <aside :class="$style.navigateToProject">
      <ul :class="$style.list">
        <li>
          <template v-if="getPreviousOne(album.id)">
            <router-link
              :to="getPreviousOne(album.id)"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :class="[$style.item, $style.prev]"
                :href="href"
                @click="navigate"
              >
                Anterior proyecto
              </a>
            </router-link>
          </template>
        </li>
        <li>
          <template v-if="getNextOne(album.id)">
            <router-link
              :to="getNextOne(album.id)"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :class="[$style.item, $style.next]"
                :href="href"
                @click="navigate"
              >
                Siguiente proyecto
              </a>
            </router-link>
          </template>
        </li>
      </ul>
    </aside>
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
      id: parseInt(this.$route.params.id),
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
    hasMoreThanOneArtwork() {
      return this.album.artwork.length > 1;
    },
    sound() {
      return this.$store.state.sound;
    },
  },
  methods: {
    getNextOne(currId) {
      if (currId < this.albumList.length) {
        const { artist, title } = this.albumList.find(
          ({ id }) => id === currId + 1
        ).slug;
        return `/albums/${currId + 1}/${artist}/${title}`;
      } else {
        return false;
      }
    },
    getPreviousOne(currId) {
      if (currId > 1) {
        const { artist, title } = this.albumList.find(
          ({ id }) => id === currId - 1
        ).slug;
        return `/albums/${currId - 1}/${artist}/${title}`;
      } else {
        return false;
      }
    },
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
@use "../assets/scss/mixins" as mx;

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
    --extra-padding: #{fn.to-proportion-width(77, 1440)};
    border: 1px solid #ffffff;
    display: grid;
    grid-auto-flow: column;
    gap: 0 $gap;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    max-width: $max-width;
    padding: fn.to-proportion-width(41, 1440) fn.to-proportion-width(82, 1440)
      var(--extra-padding);
    width: 100%;
    &.extraPadding {
      --extra-padding: #{fn.to-proportion-width(169, 1440)};
    }
  }
  &Artwork {
    &Img {
      display: block;
      height: fn.to-proportion-width(489, 1440);
      object-fit: cover;
      width: fn.to-proportion-width(489, 1440);
    }
  }
  &Player {
    --extra-space: 0px;
    height: calc(100% + var(--extra-space));
    &.extraSpace {
      --extra-space: #{fn.to-proportion-width(45.5, 1440)};
    }
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
  text-align: start;
  .top {
    display: grid;
    gap: $gap;
    grid-template-columns: 1fr 1fr;
  }
  .title {
    color: var(--color-hero);
    font: normal 400 fn.to-rem(24) / fn.to-rem(35) var(--bebas);
    margin-bottom: fn.to-rem(27);
    margin-top: fn.to-proportion-width(100, 1440);
  }
  .text {
    color: white;
    font: normal 400 1rem / fn.to-rem(30) var(--montserrat);
    margin-bottom: fn.to-rem(27);
  }
  .list {
    list-style: none;
  }
  .list:not(.listSocial) {
    column-count: 2;
    column-gap: $gap;
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
.highlight {
}
@include mx.navigate-project-arrows;
</style>