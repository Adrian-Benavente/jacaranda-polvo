export const sessions = {
  computed: {
    sessions() {
      return [
        {
          id: 0,
          title: "Facu Dial - Sesión Delta",
          details: `
            <li><b>${this.$t(
              "sessions.delta.details.item_1"
            )}:</b> Facu Dial</li>
            <li><b>${this.$t(
              "sessions.delta.details.item_2"
            )}:</b> Arnaldo Diaz</li>
            <li><b>${this.$t(
              "sessions.delta.details.item_3"
            )}:</b> Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.delta.details.item_4"
            )}:</b> Liz Guevara, Buquino Cabrera</li>
            <li><b>${this.$t(
              "sessions.delta.details.item_5"
            )}:</b> Delta del Tigre, Argentina. 2018</li>
            `,
          thumbnail: require("@/assets/img/sesiones/11-facu-dial.jpg"),
          youtube: "https://youtube.com/embed/-wt1GeXfov4",
        },
        {
          id: 1,
          title: "Sofía Viola - Pueblo Chico",
          details: `
            <li><b>${this.$t(
              "sessions.pueblo_chico.sofia.details.item_1"
            )}:</b> Facundo Rissotti</li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.sofia.details.item_2"
            )}:</b> Gerardo Rissotti</li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.sofia.details.item_3"
            )}:</b> Romina D'Andrea</li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.sofia.details.item_4"
            )}:</b> Cholo Rissotti</li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.sofia.details.item_5"
            )}:</b> Buenos Aires / Salta, Argentina. 2015</li>
          `,
          thumbnail: require("@/assets/img/sesiones/01-sofia-viola.jpg"),
          youtube: "https://youtube.com/embed/Q99_jobgGzA",
        },
        {
          id: 2,
          title: "Matraka - Pueblo Chico",
          details: `
            <li><b>${this.$t(
              "sessions.pueblo_chico.matraka.details.item_1"
            )}</b>: Matraka</li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.matraka.details.item_2"
            )}</b>: Irais Reyes Toledo</li>
            <li>
              <span aria-label="${this.$t("global.musicians")}"><b>${this.$t(
            "sessions.pueblo_chico.matraka.details.item_3"
          )}</b></span
              >: Viola, Rissotti, Villaveirán, Colonna, Jhones
            </li>
            <li><b>${this.$t(
              "sessions.pueblo_chico.matraka.details.item_4"
            )}</b>: Guadalajara, México. 2020.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/02-matraka.jpg"),
          youtube: "https://youtube.com/embed/6TGmYpS5uck",
        },
        {
          id: 3,
          title: "Mar Joppich - Remolinos",
          details: `
            <li><b>${this.$t(
              "sessions.remolinos.details.item_1"
            )}</b>: Mar Joppich</li>
            <li><b>${this.$t(
              "sessions.remolinos.details.item_2"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.remolinos.details.item_3"
            )}</b>: Joa.wav</li>
            <li><b>${this.$t(
              "sessions.remolinos.details.item_4"
            )}</b>: Saavedra, Argentina. 2020.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/03-mar-joppich.jpg"),
          youtube: "https://www.youtube.com/embed/qp6oKNFMmwY",
        },
        {
          id: 4,
          title: "Sergio Aguiar - Herencia",
          details: `
            <li><b>${this.$t(
              "sessions.herencia.details.item_1"
            )}</b>: Sergio Aguiar</li>
            <li><b>${this.$t(
              "sessions.herencia.details.item_2"
            )}</b>: Facundo Rissotti</li>
            <li><b>${this.$t(
              "sessions.herencia.details.item_3"
            )}</b>: Candelaria Solmesky</li>
            <li><b>${this.$t(
              "sessions.herencia.details.item_4"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.herencia.details.item_5"
            )}</b>: Salta, Argentina. 2016.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/04-sergio-aguiar.jpg"),
          youtube: "https://youtube.com/embed/O2KLR65HRhA",
        },
        {
          id: 5,
          title: "Matías Suárez - El espíritu del valle",
          details: `
            <li><b>${this.$t(
              "sessions.el_espiritu_del_valle.details.item_1"
            )}</b>: Matías Suarez</li>
            <li><b>${this.$t(
              "sessions.el_espiritu_del_valle.details.item_2"
            )}</b>: Julia Rissotti + Cande Solmesky + Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.el_espiritu_del_valle.details.item_3"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.el_espiritu_del_valle.details.item_4"
            )}</b>: Buenos Aires, Argentina. 2018.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/05-matias-suarez.jpg"),
          youtube: "https://youtube.com/embed/cVqvL_g2oc8",
        },
        {
          id: 6,
          title: "Gordo - Vuelta al sol",
          details: `
            <li><b>${this.$t(
              "sessions.vuelta_al_sol.details.item_1"
            )}</b>: Juan Manuel Colonna</li>
            <li><b>${this.$t(
              "sessions.vuelta_al_sol.details.item_2"
            )}</b>: Julia Rissotti + Cande Solmesky + Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.vuelta_al_sol.details.item_3"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.vuelta_al_sol.details.item_4"
            )}</b>: Buenos Aires, Argentina. 2018.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/06-gordo.jpg"),
          youtube: "https://youtube.com/embed/vhJ0l6mIC28",
        },
        {
          id: 7,
          title: "Cerebro de Uva - Estudio MCL",
          details: `
            <li><b>${this.$t(
              "sessions.estudio_mcl.details.item_1"
            )}</b>: Pablo Pérez Fiedler</li>
            <li><b>${this.$t(
              "sessions.estudio_mcl.details.item_2"
            )}</b>: Jhones, Ríos, Rissotti, Gonzalez</li>
            <li><b>${this.$t(
              "sessions.estudio_mcl.details.item_3"
            )}</b>: Guille Salort</li>
            <li><b>${this.$t(
              "sessions.estudio_mcl.details.item_4"
            )}</b>: Luciano Lucerna</li>
            <li><b>${this.$t(
              "sessions.estudio_mcl.details.item_5"
            )}</b>: Buenos Aires, Argentina. 2014.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/07-cdu.jpg"),
          youtube: "https://youtube.com/embed/Or9meZVO7Rk",
        },
        {
          id: 8,
          title: "Facu Dial - Sesión Delta Trailer",
          details: `
            <li><b>${this.$t(
              "sessions.delta_trailer.details.item_1"
            )}</b>: Facu Dial</li>
            <li><b>${this.$t(
              "sessions.delta_trailer.details.item_2"
            )}</b>: Arnaldo Díaz</li>
            <li><b>${this.$t(
              "sessions.delta_trailer.details.item_3"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.delta_trailer.details.item_4"
            )}</b>: Liz Guevara, Buquino Cabrera</li>
            <li><b>${this.$t(
              "sessions.delta_trailer.details.item_5"
            )}</b>: Delta del Tigre, Argentina. 2018.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/08-facu-dial.jpg"),
          youtube: "https://www.youtube.com/embed/xPY6KanCiAU",
        },
        {
          id: 9,
          title: "Ofelia - Despierta",
          details: `
            <li><b>${this.$t(
              "sessions.despierta.details.item_1"
            )}</b>: Andrés Riffo</li>
            <li><b>${this.$t(
              "sessions.despierta.details.item_2"
            )}</b>: Celeste Martino</li>
            <li><b>${this.$t(
              "sessions.despierta.details.item_3"
            )}</b>: Matías Suárez, Diego Mauas, Nicolás Politzer</li>
            <li><b>${this.$t(
              "sessions.despierta.details.item_4"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.despierta.details.item_5"
            )}</b>: Buenos Aires, Argentina. 2018.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/09-ofelia.jpg"),
          youtube: "https://youtube.com/embed/seqlWR0moi4",
        },
        {
          id: 10,
          title: "Ofelia - Vidala para mi sombra",
          details: `
            <li><b>${this.$t(
              "sessions.vidala_para_mi_sombra.details.item_1"
            )}</b>: Andrés Riffo</li>
            <li><b>${this.$t(
              "sessions.vidala_para_mi_sombra.details.item_2"
            )}</b>: Martino, Suárez, Mauas, Politzer</li>
            <li><b>${this.$t(
              "sessions.vidala_para_mi_sombra.details.item_3"
            )}</b>: Facu Rissotti</li>
            <li><b>${this.$t(
              "sessions.vidala_para_mi_sombra.details.item_4"
            )}</b>: Buenos Aires, Argentina. 2018.</li>
          `,
          thumbnail: require("@/assets/img/sesiones/10-ofelia.jpg"),
          youtube: "https://youtube.com/embed/KkfA5AShMQo",
        },
      ];
    },
  },
};
