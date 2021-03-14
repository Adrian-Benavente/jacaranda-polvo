<template>
  <section
    id="section-teatro"
    :class="$style.container"
    aria-labelledby="teatro"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'teatro'"
        :title-appears="titleAppears"
      />
      <div :class="$style.workList">
        <dl :class="$style.list">
          <div v-for="work in works" :key="work.id" :class="$style.listGroup">
            <dt :class="$style.workTitle">
              <span :class="$style.slash" aria-hidden="true">/</span>
              <a
                :href="`/tv/${work.slug}`"
                v-html="work.title"
                :class="$style.workLink"
              ></a>
            </dt>
            <dd :class="$style.workSynopsis">
              <a
                :href="`/tv/${work.slug}`"
                v-html="work.synopsis"
                :class="$style.workLink"
              ></a>
              <img :class="$style.imgPreview" :src="work.file" alt="" />
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
  name: "Teatro",
  components: { SectionTitle },
  data: () => ({
    titleAppears: false,
    works: [
      {
        id: 0,
        title: "Encajado",
        slug: "encajado",
        synopsis: `<p>Música Original de Sala y Jingle <br>para la Obra Encajado (2020) de Damián Travaglia.</p>`,
        file: require("../../assets/img/teatro/01-encajado.jpg"),
      },
      {
        id: 1,
        title: "Schatzi",
        slug: "schatzi",
        synopsis: `<p>Armado de Música de Sala para la Obra <br>Schatzi (2013) de Matías Nan.</p>`,
        file: require("../../assets/img/teatro/02-schatzi.jpg"),
      },
      {
        id: 2,
        title: "Cosmorodante",
        slug: "cosmorodante",
        synopsis: `<p>Producción de álbum musical para niñes, <br>Mezcla y Mastering (2017) para Cosmorodante.</p>`,
        file: require("../../assets/img/teatro/03-cosmorodante.jpg"),
      },
    ],
  }),
  methods: {
    hoverImgPreview() {
      const arrItems = [
        ...document.querySelectorAll(`.${this.$style.listGroup}`),
      ];
      arrItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          const image = item.querySelector(`.${this.$style.imgPreview}`);
          gsap.to(image, {
            visibility: "visible",
            x: e.clientX - image.offsetWidth * 0.5,
            y: e.clientY - image.offsetHeight * 0.5,
          });
          document.addEventListener(
            "scroll",
            () => {
              gsap.to(image, {
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
    this.hoverImgPreview();
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
  left: -2%;
}
.workList {
  align-items: center;
  color: white;
  display: grid;
  height: 100%;
  justify-items: end;
  .list {
    margin-top: 3rem;
    max-width: fn.to-proportion-width(1102, 1440);
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
        .imgPreview {
          display: none;
          height: 200px;
          left: 0;
          position: fixed;
          top: 0;
          width: 314px;
          z-index: -1;
        }
        &:hover {
          .imgPreview {
            display: block;
          }
        }
      }
      .workTitle {
        color: white;
        font: fn.to-rem(30) var(--bebas);
        position: relative;
        text-transform: uppercase;
        z-index: 3;
        @media (min-width: 1920px) {
          font-size: fn.to-proportion-width(30, 1440);
        }
        .slash {
          margin-right: 2rem;
        }
      }
      .workSynopsis {
        color: white;
        font: fn.to-rem(14) / 130% var(--montserrat);
        padding-right: 3rem;
        position: relative;
        transition: color 0.3s;
        z-index: 2;
        .workLink:hover {
          color: var(--color-hero);
        }
        @media (min-width: 1920px) {
          font-size: fn.to-proportion-width(14, 1440);
        }
      }
      .workLink {
        color: white;
      }
    }
  }
}
</style>
