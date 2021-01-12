<template>
  <carousel
    :class="$style.container"
    :navigation-enabled="true"
    :navigation-next-label="'next'"
    :navigation-prev-label="'prev'"
    :pagination-enabled="false"
    :per-page-custom="[
      [320, 1],
      [400, 1.5],
      [600, 2.5],
      [768, 3.5],
      [1920, 4.5],
    ]"
  >
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/01-facu-dial.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Facu Dial - Sesión Delta</li>
          <li><b>Producción General:</b> Facu Dial</li>
          <li><b>Dirección:</b> Arnaldo Díaz</li>
          <li><b>Sonido Directo y Mezcla:</b> Facu Rissotti</li>
          <li><b>Producción:</b> Liz Guevara, Buquino Cabrera</li>
          <li><b>Ubicación:</b> Delta del Tigre, Argentina. 2018</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/02-sofia-viola.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Sofía Viola - Pueblo Chico</li>
          <li><b>Producción General:</b> Facundo Rissotti</li>
          <li><b>Dirección y Realización:</b> Gerardo Rissotti</li>
          <li><b>Locación y Maquillaje:</b> Romina D'Andrea</li>
          <li><b>Cámara Salta:</b> Cholo Rissotti</li>
          <li><b>Ubicación:</b> Buenos Aires / Salta, Argentina. 2015</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/03-matraka.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Matraka - Pueblo Chico</li>
          <li><b>Drag Queen y Producción</b>: Matraka</li>
          <li><b>Cámara</b>: Irais Reyes Toledo</li>
          <li>
            <span aria-label="músicos"><b>Músicxs</b></span
            >: Viola, Rissotti, Villaveirán, Colonna, Jhones
          </li>
          <li><b>Ubicación</b>: Guadalajara, México. 2020.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/04-mar-joppich.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Mar Joppich - Remolinos</li>
          <li><b>Composición, guitarras, arte y video</b>: Mar Joppich</li>
          <li><b>Grabación, producción y Mezcla</b>: Facu Rissotti</li>
          <li><b>Co-producción + mastering</b>: Joa.wav</li>
          <li><b>Ubicación</b>: Saavedra, Argentina. 2020.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/05-sergio-aguiar.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Sergio Aguiar - Herencia</li>
          <li><b>Poema:</b> Sergio Aguiar</li>
          <li><b>Música:</b> Facundo Rissotti</li>
          <li><b>Cámara:</b> Candelaria Solmesky</li>
          <li><b>Grabación, producción y mezcla:</b> Facu Rissotti</li>
          <li><b>Ubicación:</b> Salta, Argentina. 2016.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/06-matias-suarez.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Matías Suárez - El espíritu del valle</li>
          <li><b>Guitarra y voz:</b> Matías Suarez</li>
          <li>
            <b>Cámaras:</b> Julia Rissotti + Cande Solmesky + Facu Rissotti
          </li>
          <li><b>Producción general + Mixtering:</b> Facu Rissotti</li>
          <li><b>Ubicación:</b> Buenos Aires, Argentina. 2018.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/07-gordo.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Gordo - Vuelta al sol</li>
          <li><b>Guitarra y voz</b>: Juan Manuel Colonna</li>
          <li>
            <b>Cámaras</b>: Julia Rissotti + Cande Solmesky + Facu Rissotti
          </li>
          <li><b>Producción general + Mixtering</b>: Facu Rissotti</li>
          <li><b>Ubicación</b>: Buenos Aires, Argentina. 2018.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/08-cdu.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Cerebro de Uva - Estudio MCL</li>
          <li><b>Dirección, cámara y edición:</b> Pablo Pérez Fiedler</li>
          <li><b>CDU:</b> Jhones, Ríos, Rissotti, Gonzalez</li>
          <li><b>Guitar tech: Hernan Rupolo / Drum Dr.:</b> Guille Salort</li>
          <li><b>Mezcla y mastering:</b> Luciano Lucerna</li>
          <li><b>Ubicación:</b> Buenos Aires, Argentina. 2014.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/09-facu-dial.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Facu Dial - Sesión Delta Trailer</li>
          <li><b>Producción general</b>: Facu Dial</li>
          <li><b>Dirección</b>: Arnaldo Díaz</li>
          <li><b>Sonido directo y mezcla</b>: Facu Rissotti</li>
          <li><b>Producción</b>: Liz Guevara, Buquino Cabrera</li>
          <li><b>Ubicación</b>: Delta del Tigre, Argentina. 2018.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/10-ofelia.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Ofelia - Despierta</li>
          <li><b>Cámara y edición de video</b>: Andrés Riffo</li>
          <li><b>Voz y composición</b>: Celeste Martino</li>
          <li><b>Músicos</b>: Matías Suárez, Diego Mauas, Nicolás Politzer</li>
          <li><b>Grabación y Mixtering</b>: Facu Rissotti</li>
          <li><b>Ubicación</b>: Buenos Aires, Argentina. 2018.</li>
        </ul>
      </div>
    </slide>
    <slide :class="$style.slide">
      <img
        :class="$style.image"
        src="@/assets/img/sesiones/11-ofelia.jpg"
        alt=""
      />
      <div :class="$style.details">
        <ul>
          <li :class="$style.title">Ofelia - Vidala para mi sombra</li>
          <li><b>Cámara y edición de video</b>: Andrés Riffo</li>
          <li><b>Músicxs</b>: Martino, Suárez, Mauas, Politzer</li>
          <li><b>Grabación y Mixtering</b>: Facu Rissotti</li>
          <li><b>Ubicación</b>: Buenos Aires, Argentina. 2018.</li>
        </ul>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "SesionesCarousel",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" module>
@use "../../../assets/scss/functions" as fn;

.container {
  cursor: grab;
}

.slide {
  //flex-basis: auto;
  @media (min-width: 400px) {
    padding-right: 1.5rem;
    padding-top: fn.to-rem(260);
    transition: padding-top 0.3s ease-in-out;
    &:hover {
      padding-top: fn.to-rem(200);
      .details {
        opacity: 1;
      }
    }
  }
}

.image {
  display: block;
  margin: auto;
  width: 100%;
}

.details {
  background: rgba(18, 18, 18, 0.56);
  opacity: 0;
  height: fn.to-rem(260);
  margin: auto;
  padding: fn.to-rem(34) fn.to-rem(29);
  transition: opacity 0.3s;
  ul {
    color: white;
    letter-spacing: fn.to-rem(0.48);
    list-style: none;
    text-align: start;
    .title {
      font: fn.to-rem(30) / 130% var(--bebas);
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    li {
      font: fn.to-rem(14) / 160% var(--montserrat);
    }
  }
}
</style>
