export const albums = {
  computed: {
    albumList() {
      return [
        {
          id: 1,
          artist: "Cerebro de Uva",
          title: "Los Infelices",
          slug: {
            artist: "cerebro-de-uva",
            title: "los-infelices",
          },
          year: 2013,
          cover: require("@/assets/img/albums/cerebro-de-uva/los-infelices/cover.jpg"),
          artwork: ["cover.jpg", "back.jpg", "book.jpg", "inner.jpg"],
          spotifyId: "4VAqUyGkY7chvvX0FERxAH",
          about: this.$t("albums.projects.los_infelices.about"),
          details: [
            this.$t("albums.projects.los_infelices.personnel.item_1"),
            this.$t("albums.projects.los_infelices.personnel.item_2"),
            this.$t("albums.projects.los_infelices.personnel.item_3"),
            this.$t("albums.projects.los_infelices.personnel.item_4"),
            this.$t("albums.projects.los_infelices.personnel.item_5"),
            this.$t("albums.projects.los_infelices.personnel.item_6"),
            this.$t("albums.projects.los_infelices.personnel.item_7"),
            this.$t("albums.projects.los_infelices.personnel.item_8"),
            this.$t("albums.projects.los_infelices.personnel.item_9"),
            this.$t("albums.projects.los_infelices.personnel.item_10"),
            this.$t("albums.projects.los_infelices.personnel.item_11"),
            this.$t("albums.projects.los_infelices.personnel.item_12"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/3klJZmx8AWjHfxSA8qmMsk?si=3zqcTuzmRNmL2XUecRjpmA",
            youTube: "https://www.youtube.com/channel/UCM3moNVQ5j8En9FpIQsw--g",
          },
        },
        {
          id: 2,
          artist: "Polvo",
          title: "Pueblo Chico Infierno Grande",
          slug: {
            artist: "polvo",
            title: "pueblo-chico-infierno-grande",
          },
          year: 2013,
          cover: require("@/assets/img/albums/polvo/pueblo-chico-infierno-grande/cover.jpg"),
          artwork: [
            "cover.jpg",
            "back.jpg",
            "book.jpg",
            "inner.jpg",
            "charango.jpg",
            "puente.jpg",
            "sofi-y-facu.jpg",
          ],
          spotifyId: "0OjZ66pSQWiE8eRoeBxZo8",
          about: this.$t("albums.projects.pueblo_chico.about"),
          details: [
            this.$t("albums.projects.pueblo_chico.personnel.item_1"),
            this.$t("albums.projects.pueblo_chico.personnel.item_2"),
            this.$t("albums.projects.pueblo_chico.personnel.item_3"),
            this.$t("albums.projects.pueblo_chico.personnel.item_4"),
            this.$t("albums.projects.pueblo_chico.personnel.item_5"),
            this.$t("albums.projects.pueblo_chico.personnel.item_6"),
            this.$t("albums.projects.pueblo_chico.personnel.item_7"),
            this.$t("albums.projects.pueblo_chico.personnel.item_8"),
            this.$t("albums.projects.pueblo_chico.personnel.item_9"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/5iqTzdzjImq9DJCgWqOIDY?si=3fvAfGOwS_yLtmsko-sXig",
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9_-0-yS6T313VQrC8jDa8MAT",
          },
          extra: {
            title: this.$t("albums.projects.pueblo_chico.extra.title"),
            details: [this.$t("albums.projects.pueblo_chico.extra.text")],
          },
        },
        {
          id: 3,
          artist: "Gordo",
          title: "Gordo",
          slug: {
            artist: "gordo",
            title: "gordo",
          },
          year: 2019,
          cover: require("@/assets/img/albums/gordo/gordo/cover.jpg"),
          artwork: ["front.jpg", "single.jpg", "formacion.jpg", "vivo.jpg"],
          spotifyId: "1Cw2RUYcycUVQf2Q2utGR4",
          about: this.$t("albums.projects.gordo.about"),
          details: [
            this.$t("albums.projects.gordo.personnel.item_1"),
            this.$t("albums.projects.gordo.personnel.item_2"),
            this.$t("albums.projects.gordo.personnel.item_3"),
            this.$t("albums.projects.gordo.personnel.item_4"),
            this.$t("albums.projects.gordo.personnel.item_5"),
            this.$t("albums.projects.gordo.personnel.item_6"),
            this.$t("albums.projects.gordo.personnel.item_7"),
            this.$t("albums.projects.gordo.personnel.item_8"),
            this.$t("albums.projects.gordo.personnel.item_9"),
            this.$t("albums.projects.gordo.personnel.item_10"),
            this.$t("albums.projects.gordo.personnel.item_11"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/6QmhJX1aQBxRCafJkMUeh1?si=3wslZX-HTvasVf3yecyygA",
            youTube: "https://www.youtube.com/channel/UCpNOlhYN_5VMyO912EFxFPw",
          },
        },
        {
          id: 4,
          artist: "Mar Joppich",
          title: "Remolinos",
          slug: {
            artist: "mar-joppich",
            title: "remolinos",
          },
          year: 2020,
          cover: require("@/assets/img/albums/mar-joppich/remolinos/cover.jpg"),
          artwork: [
            "cover.jpg",
            "cover-0.jpg",
            "cover-1.jpg",
            "cover-2.jpg",
            "cover-3.jpg",
          ],
          spotifyId: "7umvHyhiuitbaMmgkzLQrl",
          about: this.$t("albums.projects.remolinos.about"),
          details: [
            this.$t("albums.projects.remolinos.personnel.item_1"),
            this.$t("albums.projects.remolinos.personnel.item_2"),
            this.$t("albums.projects.remolinos.personnel.item_3"),
            this.$t("albums.projects.remolinos.personnel.item_4"),
            this.$t("albums.projects.remolinos.personnel.item_5"),
            this.$t("albums.projects.remolinos.personnel.item_6"),
            this.$t("albums.projects.remolinos.personnel.item_7"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/0ZsG3IjE5ccbstc2PbOqhB?si=BwTrOpBOSFiy3Ws1eud7fg",
            youTube: "https://www.youtube.com/channel/UCGvC3souR33QD1mZW-758xw",
          },
        },
        {
          id: 5,
          artist: "Facundo Rissotti",
          title: "Paisajes",
          slug: {
            artist: "facundo-rissotti",
            title: "paisajes",
          },
          year: 2010,
          cover: require("@/assets/img/albums/facundo-rissotti/paisajes/cover.jpg"),
          artwork: [
            "cover.jpg",
            "back.jpg",
            "cd.jpg",
            "inner.jpg",
            "yavi-indio.jpg",
          ],
          spotifyId: "1hukLPIwKAAnyImBsbkQoj",
          about: this.$t("albums.projects.paisajes.about"),
          details: [
            this.$t("albums.projects.paisajes.personnel.item_1"),
            this.$t("albums.projects.paisajes.personnel.item_2"),
            this.$t("albums.projects.paisajes.personnel.item_3"),
            this.$t("albums.projects.paisajes.personnel.item_4"),
            this.$t("albums.projects.paisajes.personnel.item_5"),
            this.$t("albums.projects.paisajes.personnel.item_6"),
            this.$t("albums.projects.paisajes.personnel.item_7"),
            this.$t("albums.projects.paisajes.personnel.item_8"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/5iqTzdzjImq9DJCgWqOIDY?si=3fvAfGOwS_yLtmsko-sXig",
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9_-YFMtjMzD1jVjaTG3Vv79l",
          },
          extra: {
            title: this.$t("albums.projects.paisajes.extra.title"),
            details: [this.$t("albums.projects.paisajes.extra.text")],
          },
        },
        {
          id: 6,
          artist: "Buquino Cabrera",
          title: "Espacial",
          slug: {
            artist: "buquino-cabrera",
            title: "espacial",
          },
          year: 2015,
          cover: require("@/assets/img/albums/buquino-cabrera/espacial/cover.jpg"),
          artwork: [
            "front.jpg",
            "01-once-dias.jpg",
            "02-mundo-infinito.jpg",
            "03-el-vapor-del-tiempo.jpg",
            "04-aunque-estemos-solos.jpg",
            "05-otra.jpg",
          ],
          youtubePlaylistId: "PLundnWmdl9_9Idtxh3TGy4xzZAkTFDTLb",
          about: this.$t("albums.projects.espacial.about"),
          details: [
            this.$t("albums.projects.espacial.personnel.item_1"),
            this.$t("albums.projects.espacial.personnel.item_2"),
            this.$t("albums.projects.espacial.personnel.item_3"),
            this.$t("albums.projects.espacial.personnel.item_4"),
            this.$t("albums.projects.espacial.personnel.item_5"),
            this.$t("albums.projects.espacial.personnel.item_6"),
          ],
          links: {
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9_-YFMtjMzD1jVjaTG3Vv79l",
          },
        },
        {
          id: 7,
          artist: "Facu Dial",
          title: "EP",
          slug: {
            artist: "facu-dial",
            title: "ep",
          },
          year: 2015,
          cover: require("@/assets/img/albums/facu-dial/ep/cover.jpg"),
          artwork: [
            "front.jpg",
            "01-relatos-beodos.jpg",
            "02-vos-al-sol.jpg",
            "03-canto.jpg",
            "04-pibe-de-barrio.jpg",
            "05-va-con-la-tierra.jpg",
            "back.jpg",
          ],
          youtubePlaylistId: "PLundnWmdl9_9PsFDazb4IHAlwFgQgtBcJ",
          about: this.$t("albums.projects.facu_dial_ep.about"),
          details: [
            this.$t("albums.projects.facu_dial_ep.personnel.item_1"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_2"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_3"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_4"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_5"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_6"),
            this.$t("albums.projects.facu_dial_ep.personnel.item_7"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/user/11129327504?si=q-QaYMqpTFeXIXUzTvDgIg",
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9_-YFMtjMzD1jVjaTG3Vv79l",
          },
        },
        {
          id: 8,
          artist: "Cerebro de Uva",
          title: "EP",
          slug: {
            artist: "cerebro-de-uva",
            title: "ep",
          },
          year: 2014,
          cover: require("@/assets/img/albums/cerebro-de-uva/ep/cover.jpg"),
          artwork: ["front.jpg", "book.jpg", "end.jpg", "back.jpg"],
          spotifyId: "0ZdSXkLrRdx29PrvSnGJbE",
          about: this.$t("albums.projects.cerebro_ep.about"),
          details: [
            this.$t("albums.projects.cerebro_ep.personnel.item_1"),
            this.$t("albums.projects.cerebro_ep.personnel.item_2"),
            this.$t("albums.projects.cerebro_ep.personnel.item_3"),
            this.$t("albums.projects.cerebro_ep.personnel.item_4"),
            this.$t("albums.projects.cerebro_ep.personnel.item_5"),
            this.$t("albums.projects.cerebro_ep.personnel.item_6"),
            this.$t("albums.projects.cerebro_ep.personnel.item_7"),
            this.$t("albums.projects.cerebro_ep.personnel.item_8"),
            this.$t("albums.projects.cerebro_ep.personnel.item_9"),
            this.$t("albums.projects.cerebro_ep.personnel.item_10"),
            this.$t("albums.projects.cerebro_ep.personnel.item_11"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/3klJZmx8AWjHfxSA8qmMsk?si=cMvW8V_DQE2kFBlilsL-7g",
            youTube: "https://www.youtube.com/channel/UCM3moNVQ5j8En9FpIQsw--g",
          },
        },
        {
          id: 9,
          artist: "Elbio Montoya",
          title: "Somos Kollas",
          slug: {
            artist: "elbio-montoya",
            title: "somos-kollas",
          },
          year: 2015,
          cover: require("@/assets/img/albums/elbio-montoya/somos-kollas/cover.jpg"),
          artwork: ["cover.jpg", "foto-1.jpg", "foto-2.jpg", "back.jpg"],
          youtubePlaylistId: "PLundnWmdl9_9SO8apEBgesQvZYnnvSPJ1",
          about: this.$t("albums.projects.somos_kollas.about"),
          details: [
            this.$t("albums.projects.somos_kollas.personnel.item_1"),
            this.$t("albums.projects.somos_kollas.personnel.item_2"),
            this.$t("albums.projects.somos_kollas.personnel.item_3"),
            this.$t("albums.projects.somos_kollas.personnel.item_4"),
            this.$t("albums.projects.somos_kollas.personnel.item_5"),
          ],
          links: {
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9_9SO8apEBgesQvZYnnvSPJ1",
          },
        },
        {
          id: 10,
          artist: "Rootstica",
          title: "Rootstica",
          slug: {
            artist: "rootstica",
            title: "rootstica",
          },
          year: 2010,
          cover: require("@/assets/img/albums/rootstica/rootstica/cover.jpg"),
          artwork: [
            "front.jpg",
            "back.jpg",
            "formacion.jpg",
            "formacion-2.jpg",
          ],
          spotifyId: "1y8TDiCE1ZILFkOQQKbOEy",
          details: [
            this.$t("albums.projects.rootstica.personnel.item_1"),
            this.$t("albums.projects.rootstica.personnel.item_2"),
            this.$t("albums.projects.rootstica.personnel.item_3"),
            this.$t("albums.projects.rootstica.personnel.item_4"),
            this.$t("albums.projects.rootstica.personnel.item_5"),
            this.$t("albums.projects.rootstica.personnel.item_6"),
            this.$t("albums.projects.rootstica.personnel.item_7"),
            this.$t("albums.projects.rootstica.personnel.item_8"),
            this.$t("albums.projects.rootstica.personnel.item_9"),
            this.$t("albums.projects.rootstica.personnel.item_10"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/1m1eYHsb2ZSQZTJfO6qC3q?si=sNz2LNNiTqK594Xdp4NNRg",
            youTube: "https://www.youtube.com/channel/UCpoheF6Nh8o0geTxP7fROxg",
          },
        },
        {
          id: 11,
          artist: "Fran Villaveirán",
          title: "La Naturaleza y el Hombre",
          slug: {
            artist: "fran-villaveiran",
            title: "la-naturaleza-y-el-hombre",
          },
          year: 2015,
          cover: require("@/assets/img/albums/fran-villaveiran/la-naturaleza-y-el-hombre/cover.jpg"),
          artwork: ["front.jpg", "back.jpg", "cd.jpg", "inner.jpg"],
          youtubePlaylistId: "PLundnWmdl9_8dtLxs_Q0LKppPnL3Z4THG",
          details: [
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_1"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_2"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_3"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_4"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_5"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_6"
            ),
            this.$t(
              "albums.projects.la_naturaleza_y_el_hombre.personnel.item_7"
            ),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/3P7KJg24ocr6OKD4t6a2Ih?si=_JXREY2YRcejySARqH0a8w",
            youTube: "https://www.youtube.com/channel/UCcGGskiXR1ymhQGnQcV8SZg",
          },
        },
        {
          id: 12,
          artist: "John Angelo Cardona",
          title: "Alas de Guitarra",
          slug: {
            artist: "john-angelo-cardona",
            title: "alas-de-guitarra",
          },
          year: 2011,
          cover: require("@/assets/img/albums/john-angelo-cardona/alas-de-guitarra/cover.jpg"),
          artwork: ["cover.jpg", "back.jpg", "john.jpg", "inner.jpg"],
          youtubeSingleId: "sYDp7JsplDc?start=680",
          about: this.$t("albums.projects.alas_de_guitarra.about"),
          details: [
            this.$t("albums.projects.alas_de_guitarra.personnel.item_1"),
          ],
          links: {
            youTube: "https://www.youtube.com/channel/UC_aSiZWb7-AFPC4_YJTIDdg",
          },
        },
        {
          id: 13,
          artist: "Facundo Rissotti",
          title: "Isla Negra",
          slug: {
            artist: "facundo-rissotti",
            title: "isla-negra",
          },
          year: 2007,
          cover: require("@/assets/img/albums/facundo-rissotti/isla-negra/cover.jpg"),
          artwork: ["cover.jpg", "back.jpg", "inner.jpg"],
          youtubePlaylistId: "PLundnWmdl9__WOMCe7S_bT_nlChSpaSx-",
          about: this.$t("albums.projects.isla_negra.about"),
          details: [
            this.$t("albums.projects.isla_negra.personnel.item_1"),
            this.$t("albums.projects.isla_negra.personnel.item_2"),
            this.$t("albums.projects.isla_negra.personnel.item_3"),
            this.$t("albums.projects.isla_negra.personnel.item_4"),
            this.$t("albums.projects.isla_negra.personnel.item_5"),
            this.$t("albums.projects.isla_negra.personnel.item_6"),
            this.$t("albums.projects.isla_negra.personnel.item_7"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/5iqTzdzjImq9DJCgWqOIDY?si=RavCiYF8RYqepLfOLE40tg",
            youTube:
              "https://www.youtube.com/playlist?list=PLundnWmdl9__WOMCe7S_bT_nlChSpaSx-",
          },
        },
        {
          id: 14,
          artist: "Fran Villaveirán",
          title: "A Raúl Leiva",
          slug: {
            artist: "fran-villaveiran",
            title: "a-raul-leiva",
          },
          year: 2013,
          cover: require("@/assets/img/albums/fran-villaveiran/a-raul-leiva/cover.jpg"),
          artwork: ["front.jpg", "cd.jpg", "back.jpg"],
          youtubePlaylistId: "PLundnWmdl9_-48u7TB9JZ_vVS53SkRtGb",
          about: this.$t("albums.projects.raul_leiva.about"),
          details: [
            this.$t("albums.projects.raul_leiva.personnel.item_1"),
            this.$t("albums.projects.raul_leiva.personnel.item_2"),
            this.$t("albums.projects.raul_leiva.personnel.item_3"),
          ],
          links: {
            spotify:
              "https://open.spotify.com/artist/3P7KJg24ocr6OKD4t6a2Ih?si=_JXREY2YRcejySARqH0a8w",
            youTube: "https://www.youtube.com/channel/UCcGGskiXR1ymhQGnQcV8SZg",
          },
        },
      ];
    },
  },
};
