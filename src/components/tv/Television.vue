<template>
  <section
    id="section-tv"
    :class="$style.container"
    :aria-labelledby="$t('sections.tv')"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="$t('sections.tv')"
        :title-appears="titleAppears"
      />
      <div :class="$style.workList">
        <dl :class="$style.list">
          <div
            v-for="{ file, id, link, synopsis, title } in television"
            :key="id"
            :class="$style.listGroup"
          >
            <dt>
              <a :href="`${link}`" target="_blank" :class="$style.title">
                <span :class="$style.slash" aria-hidden="true">/</span>
                {{ title }}
              </a>
            </dt>
            <dd>
              <a :href="`${link}`" target="_blank">
                <span v-html="synopsis"></span>
              </a>
              <a :class="$style.mobileLink" :href="`${link}`" target="_blank">
                Ver video <span :class="$style.arrowRight"></span>
              </a>
              <video
                :class="$style.video"
                muted
                autoplay
                loop
                :src="file"
              ></video>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
import gsap from "gsap";

export default {
  name: "Television",
  components: { SectionTitle },
  data() {
    return {
      titleAppears: false,
    };
  },
  computed: {
    television() {
      const $t = this.$t.bind(this);
      return [
        {
          id: 0,
          title: $t("tv.post_production.title"),
          slug: "post-produccion-sonido",
          link: "https://youtu.be/uFmepxvEXRA",
          synopsis: `<p>${$t("tv.post_production.synopsis.chunk_1")}</p><p>${$t(
            "tv.post_production.synopsis.chunk_2"
          )}</p>`,
          file: require("../../assets/video/tv/01-post-produccion-sonido.mp4"),
        },
        {
          id: 1,
          title: $t("tv.original_music.title"),
          slug: "musica-original-tv",
          link: "https://vimeo.com/468681530",
          synopsis: `<p>${$t("tv.original_music.synopsis.chunk_1")}</p><p>${$t(
            "tv.original_music.synopsis.chunk_2"
          )}</p>`,
          file: require("../../assets/video/tv/02-musica-original-tv.mp4"),
        },
        {
          id: 2,
          title: $t("tv.direct_sound.title"),
          slug: "sonido-directo",
          link: "https://vimeo.com/349908259",
          synopsis: `<p>${$t("tv.direct_sound.synopsis.chunk_1")}</p><p>${$t(
            "tv.direct_sound.synopsis.chunk_2"
          )}</p><p>${$t("tv.direct_sound.synopsis.chunk_3")}</p>`,
          file: require("../../assets/video/tv/03-sonido-directo.mp4"),
        },
      ];
    },
  },
  methods: {
    hoverVideo() {
      const arrItems = [
        ...document.querySelectorAll(`.${this.$style.listGroup}`),
      ];
      arrItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          const video = item.querySelector("video");
          gsap.to(video, {
            visibility: "visible",
            x: e.clientX - video.offsetWidth * 0.5,
            y: e.clientY - video.offsetHeight * 0.5,
          });
          document.addEventListener(
            "scroll",
            () => {
              gsap.to(video, {
                visibility: "hidden",
              });
            },
            { passive: true }
          );
        });
      });
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
  mounted() {
    this.hoverVideo();
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
      onShown: () => {
        setTimeout(() => (this.titleAppears = true), 500);
      },
      onHidden: () => {
        this.titleAppears = false;
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  align-items: end;
  background-color: black;
  display: grid;
  overflow: hidden;
  margin-top: 2em;
  min-height: 90vh;
  position: relative;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
}
.scrollOutContainer {
  height: 100%;
}
.workList {
  align-items: center;
  color: white;
  display: grid;
  height: 100%;
  justify-items: end;
  .list {
    margin-top: 3rem;
    text-align: start;
    width: 90%;
    .listGroup {
      align-items: center;
      display: grid;
      gap: 1rem;
      justify-items: end;
      padding: 1.375rem 0;
      .video {
        display: none;
      }
      a {
        color: white;
        &:not(.title):hover {
          color: var(--color-hero);
        }
        &.mobileLink {
          align-items: center;
          display: flex;
          color: var(--color-hero);
          line-height: normal;
          margin-top: 0.75rem;
          .arrowRight {
            background: url("../../assets/img/lib/arrow-right.svg") center /
              contain no-repeat;
            display: inline-block;
            height: 0.875rem;
            margin-left: 0.5rem;
            transition: margin-left 0.3s ease-in-out;
            width: 0.875rem;
            @media (min-width: 768px) {
              height: fn.to-rem(17);
              margin-left: fn.to-rem(13);
              width: fn.to-rem(17);
            }
          }
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid white;
      }
      dt {
        color: white;
        font: fn.to-rem(30) var(--bebas);
        max-width: 85%;
        position: relative;
        text-transform: uppercase;
        z-index: 3;
        width: 100%;
        .slash {
          display: inline-block;
        }
        @media (min-width: 768px) {
          font-size: fn.to-proportion-width(30, 1440);
          max-width: none;
          width: initial;
          .slash {
            margin-right: 2rem;
          }
        }
      }
      dd {
        font: fn.to-rem(14) / 150% var(--montserrat);
        max-width: 85%;
        padding-right: 1rem;
        position: relative;
        transition: color 0.3s;
        z-index: 2;
        &:not(:hover) {
          color: white;
        }
        @media (min-width: 768px) {
          font-size: fn.to-proportion-width(14, 1440);
          line-height: 130%;
          padding-right: 3rem;
          max-width: none;
        }
      }
      @media (min-width: 768px) {
        gap: 2rem;
        grid-template-columns: 2fr 3fr;
        justify-items: initial;
        padding: fn.to-rem(60) 0;
        a.mobileLink {
          display: none;
        }
        .video {
          display: none;
          height: 200px;
          left: 0;
          position: fixed;
          top: 0;
          width: 314px;
          z-index: -1;
        }
        &:hover {
          .video {
            display: block;
          }
        }
      }
    }
    @media (min-width: 768px) {
      max-width: fn.to-proportion-width(1102, 1440);
      width: 80%;
    }
  }
}
@media (min-width: 768px) {
  .title {
    left: 3%;
  }
}
</style>
