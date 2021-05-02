export const contenido = {
  computed: {
    contenido() {
      return [
        {
          id: 0,
          title: this.$t("content.vx_drones.title"),
          details: `
    <dd>${this.$t("content.vx_drones.line_1")}</dd>
    <dd>${this.$t("content.vx_drones.line_2")}</dd>
  `,
          image: require("../../assets/img/contenido/01-vx-reel.jpg"),
          video: "https://player.vimeo.com/video/336387398",
        },
        {
          id: 1,
          title: this.$t("content.cuarenta_mil.title"),
          details: `
    <dd>${this.$t("content.cuarenta_mil.line_1")}</dd>
    <dd>${this.$t(
      "content.cuarenta_mil.line_2"
    )} (<a href="http://videomixargentina.com" target="_blank">http://videomixargentina.com</a>)</dd>
  `,
          image: require("../../assets/img/contenido/02-rcp-40mil.jpg"),
          video: "https://player.vimeo.com/video/371453162",
        },
        {
          id: 2,
          title: this.$t("content.videomix_covid.title"),
          details: `
    <dd>${this.$t("content.videomix_covid.line_1")}</dd> 
    <dd>${this.$t("content.videomix_covid.line_2")}</dd>
    <dd>${this.$t(
      "content.videomix_covid.line_3"
    )} (<a href="http://videomixargentina.com" target="_blank">http://videomixargentina.com</a>)</dd>
  `,
          image: require("../../assets/img/contenido/03-covid-19.jpg"),
          video: "https://player.vimeo.com/video/453766618",
        },
        {
          id: 3,
          title: this.$t("content.superdomo_rioja.title"),
          details: `
    <dd>${this.$t(
      "content.superdomo_rioja.line_1"
    )} (<a href="http://www.clubled.com.ar/#main" target="_blank">http://www.clubled.com.ar/#main</a>)</dd>
    <dd>${this.$t("content.superdomo_rioja.line_2")}</dd>
  `,
          image: require("../../assets/img/contenido/04-superdomo.jpg"),
          video: "https://player.vimeo.com/video/336377644",
        },
        {
          id: 4,
          title: this.$t("content.gnocchi.title"),
          details: `
    <dd>${this.$t(
      "content.gnocchi.line_1"
    )} (<a href="https://vimeo.com/elviramegusta" target="_blank">https://vimeo.com/elviramegusta</a>)</dd>
    <dd>${this.$t("content.gnocchi.line_2")}</dd>
  `,
          image: require("../../assets/img/contenido/05-gnochi.jpg"),
          video: "https://player.vimeo.com/video/61352034",
        },
        {
          id: 5,
          title: this.$t("content.rcp_cancion.title"),
          details: `
    <dd>${this.$t("content.rcp_cancion.line_1")}</dd>
    <dd>${this.$t("content.rcp_cancion.line_2")}</dd>
    <dd>${this.$t("content.rcp_cancion.line_3")}</dd>
  `,
          image: require("../../assets/img/contenido/06-cancion-de-la-reanimacion.jpg"),
          video: "https://www.youtube.com/embed/d9CEC6Qoj_o",
        },
        {
          id: 6,
          title: this.$t("content.rcp_oficina.title"),
          details: `
    <dd>${this.$t("content.rcp_oficina.line_1")}</dd>
    <dd>${this.$t(
      "content.rcp_oficina.line_2"
    )} (<a href="http://videomixargentina.com" target="_blank">http://videomixargentina.com</a>)</dd>
  `,
          image: require("../../assets/img/contenido/07-rcp-oficina.jpg"),
          video: "https://player.vimeo.com/video/295429904",
        },
        {
          id: 7,
          title: this.$t("content.obras_ba.title"),
          details: `
    <dd>${this.$t("content.obras_ba.line_1")}</dd>
    <dd>${this.$t("content.obras_ba.line_2")}</dd>
  `,
          image: require("../../assets/img/contenido/08-obras.jpg"),
          video: "https://player.vimeo.com/video/336376901",
        },
        {
          id: 8,
          title: this.$t("content.rcp_futbol.title"),
          details: `
    <dd>${this.$t("content.rcp_futbol.line_1")}</dd>
    <dd>${this.$t(
      "content.rcp_futbol.line_2"
    )} (<a href="http://videomixargentina.com" target="_blank">http://videomixargentina.com</a>)</dd>
  `,
          image: require("../../assets/img/contenido/10-futbol.jpg"),
          video: "https://player.vimeo.com/video/285806014",
        },
      ];
    },
  },
};
