<template>
  <section :class="$style.container" aria-labelledby="TV">
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'TV'"
        :title-appears="titleAppears"
      />
      <div :class="$style.workList">
        <dl :class="$style.list">
          <a
            v-for="video in videos"
            :key="video.id"
            :class="$style.listGroup"
            :href="`/tv/${video.slug}`"
          >
            <dt>{{ video.title }}</dt>
            <dd>
              {{ video.synopsis }}
              <video muted autoplay loop :src="video.file"></video>
            </dd>
          </a>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import SectionTitle from '@/components/lib/SectionTitle';
import gsap from 'gsap';

export default {
  name: "Television",
  components: { SectionTitle },
  data: () => ({
    titleAppears: false,
    videos: [
      {
        id: 0,
        title: "Post producción de sonido",
        slug: "post-produccion-sonido",
        synopsis:
          "Musicalización, Edición y Post producción de sonido en Pro\n" +
          "Tools. El Festival del Bien Público, Televisión Pública\n" +
          "Argentina.",
        file: require("../../assets/video/tv/01-post-produccion-sonido.mp4"),
      },
      {
        id: 1,
        title: "Música Original para TV",
        slug: "musica-original-tv",
        synopsis:
          "Composición y Grabación de canciones originales con Registro en\n" +
          "SADAIC / DNDA / AADI. El Festival del Bien Público, Televisión\n" +
          "Pública Argentina.",
        file: require("../../assets/video/tv/02-musica-original-tv.mp4"),
      },
      {
        id: 2,
        title: "Sonido directo",
        slug: "sonido-directo",
        synopsis:
          "Grabación de sonido de campo para Publicidades y Proyectos\n" +
          "Audiovisuales. Edición y Post Producción. Remax Encuesta,\n" +
          "Argentina.",
        file: require("../../assets/video/tv/03-sonido-directo.mp4"),
      },
    ],
  }),
  computed: {
    currentITem() {
      return this.videos.find((el) => el.id === this.active);
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
            x: e.clientX - video.offsetWidth * 0.5,
            y: e.clientY - video.offsetHeight * 0.5,
          });
        });
      });
    },
  },
  mounted() {
    this.hoverVideo();
    this.so = ScrollOut({
      scope: this.$el,
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
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: grid;
  align-items: end;
}
.scrollOutContainer {
  height: 100%;
}
.title {
  left: 3%;
}
.workList {
  align-items: center;
  color: white;
  display: grid;
  height: 100%;
  justify-items: end;
  .list {
    margin-top: 3rem;
    max-width: 1800px;
    text-align: start;
    width: 80%;
    .listGroup {
      align-items: center;
      display: grid;
      gap: 2rem;
      padding: fn.to-rem(60) 0;
      &:not(:last-child) {
        border-bottom: 1px solid white;
      }
      @media (min-width: 768px) {
        grid-template-columns: 2fr 3fr;
      }
      dt {
        color: white;
        font: fn.to-rem(45) var(--bebas);
        text-transform: uppercase;
      }
      dd {
        font: fn.to-rem(25) / 200% var(--montserrat);
        padding-right: 3rem;
        transition: color 0.3s;
        &:not(:hover) {
          color: white;
        }
      }
      video {
        display: none;
        height: 200px;
        left: 0;
        position: fixed;
        top: 0;
        width: 314px;
      }
      &:hover {
        video {
          display: block;
        }
      }
    }
  }
}
</style>
