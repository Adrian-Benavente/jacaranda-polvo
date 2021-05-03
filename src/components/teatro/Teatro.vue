<template>
  <section
    id="section-teatro"
    :class="[$style.container, $style[`${$i18n.locale}`]]"
    :aria-labelledby="$t('sections.theater')"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="$t('sections.theater')"
        :title-appears="titleAppears"
      />
      <div :class="$style.workList">
        <dl :class="$style.list">
          <div
            v-for="{ file, id, link, synopsis, title } in works"
            :key="id"
            :class="$style.listGroup"
          >
            <dt :class="$style.workTitle">
              <span :class="$style.slash" aria-hidden="true">/</span>
              <a
                :href="`${link}`"
                v-html="title"
                :class="$style.workLink"
                target="_blank"
              ></a>
            </dt>
            <dd :class="$style.workSynopsis">
              <a
                :href="`${link}`"
                v-html="synopsis"
                :class="$style.workLink"
                target="_blank"
              ></a>
              <a :class="$style.mobileLink" :href="`${link}`" target="_blank">
                Ver video <span :class="$style.arrowRight"></span>
              </a>
              <img :class="$style.imgPreview" :src="file" alt="" />
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
  data() {
    return {
      titleAppears: false,
    };
  },
  computed: {
    works() {
      return [
        {
          id: 0,
          title: "Encajado",
          slug: "encajado",
          link: "https://youtu.be/5EYlAr9DXYU",
          synopsis: `<p>${this.$t("theater.encajado.line_1")}<br>${this.$t(
            "theater.encajado.line_2"
          )}</p>`,
          file: require("../../assets/img/teatro/01-encajado.jpg"),
        },
        {
          id: 1,
          title: "Schatzi",
          slug: "schatzi",
          link: "https://youtu.be/usmjXq-ZEKQ",
          synopsis: `<p>${this.$t("theater.schatzi.line_1")}<br>${this.$t(
            "theater.schatzi.line_2"
          )}</p>`,
          file: require("../../assets/img/teatro/02-schatzi.jpg"),
        },
        {
          id: 2,
          title: "Cosmorodante",
          slug: "cosmorodante",
          link: "https://www.youtube.com/watch?v=MxtHyYIgUsA",
          synopsis: `<p>${this.$t("theater.cosmorodante.line_1")}<br>${this.$t(
            "theater.cosmorodante.line_2"
          )}</p>`,
          file: require("../../assets/img/teatro/03-cosmorodante.jpg"),
        },
      ];
    },
  },
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
  align-items: end;
  background-color: black;
  display: grid;
  overflow: hidden;
  margin-top: 2em;
  min-height: 100vh;
  position: relative;
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
      &:not(:last-child) {
        border-bottom: 1px solid white;
      }
      .imgPreview {
        display: none;
      }
      .workTitle {
        color: white;
        font: fn.to-rem(30) var(--bebas);
        max-width: 85%;
        position: relative;
        text-transform: uppercase;
        z-index: 3;
        width: 100%;
        .slash {
          display: inline-block;
          margin-right: 0.25rem;
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
      .workSynopsis {
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
      .workLink {
        color: white;
      }
      .mobileLink {
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

      @media (min-width: 768px) {
        gap: 2rem;
        grid-template-columns: 2fr 3fr;
        justify-items: initial;
        padding: fn.to-rem(60) 0;
        .mobileLink {
          display: none;
        }
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
    }
    @media (min-width: 768px) {
      max-width: fn.to-proportion-width(1102, 1440);
      width: 80%;
    }
  }
}
@media (min-width: 768px) {
  .title {
    left: -2.1%;
  }
  .en .title {
    left: -3.35%;
  }
}
</style>
