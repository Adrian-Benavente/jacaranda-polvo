<template>
  <section :class="$style.container" aria-labelledby="teatro">
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'teatro'"
        :title-appears="titleAppears"
      />
      <div :class="$style.workList">
        <dl :class="$style.list">
          <div :class="$style.listGroup">
            <dt>Post producción de sonido</dt>
            <dd>
              <a href="">
                Musicalización, Edición y Post producción de sonido en Pro
                Tools. El Festival del Bien Público, Televisión Pública
                Argentina.
              </a>
            </dd>
          </div>
          <div :class="$style.listGroup">
            <dt>Música Original para TV</dt>
            <dd>
              <a href="">
                Composición y Grabación de canciones originales con Registro en
                SADAIC / DNDA / AADI. El Festival del Bien Público, Televisión
                Pública Argentina.
              </a>
            </dd>
          </div>
          <div :class="$style.listGroup">
            <dt>Sonido directo</dt>
            <dd>
              <a href="">
                Grabación de sonido de campo para Publicidades y Proyectos
                Audiovisuales. Edición y Post Producción. Remax Encuesta,
                Argentina.
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from 'scroll-out';
import SectionTitle from '@/components/lib/SectionTitle';

export default {
  name: "Teatro",
  components: { SectionTitle },
  data: () => ({
    titleAppears: false,
    videos: [
      {
        id: 0,
        slug: "encajado",
        file: "encajado"
      },
      {
        id: 1,
        slug: "schatzi",
        file: "schatzi"
      },
      {
        id: 2,
        slug: "cosmorodante",
        file: "cosmorodante"
      },
    ]
  }),
  mounted() {
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
        font: fn.to-rem(45) var(--bebas);
        text-transform: uppercase;
      }
      dd {
        font: fn.to-rem(25) / 200% var(--montserrat);
        padding-right: 3rem;
        a:not(:hover) {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
