<template>
  <div id="app">
    <TheHeader />
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home";
import TheHeader from "@/components/header/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
    Home,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "bebas_neueregular";
  src: url("./assets/fonts/bebasneue_regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/bebasneue_regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "bebas_neuebold";
  src: url("./assets/fonts/bebasneue_bold-webfont.woff2") format("woff2"),
    url("./assets/fonts/bebasneue_bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "montserrat";
  src: url("./assets/fonts/montserrat-regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/montserrat-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "montserratbold";
  src: url("./assets/fonts/montserrat-bold-webfont.woff2") format("woff2"),
    url("./assets/fonts/montserrat-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "roboto";
  src: url("./assets/fonts/roboto-regular-webfont.woff2"),
    url("./assets/fonts/roboto-regular-webfont.woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "robotomedium";
  src: url("./assets/fonts/roboto-medium-webfont.woff2"),
    url("./assets/fonts/roboto-medium-webfont.woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "robotobold";
  src: url("./assets/fonts/roboto-bold-webfont.woff2"),
    url("./assets/fonts/roboto-bold-webfont.woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --bebas: "bebas_neueregular", arial, sans-serif;
  --bebas-bold: "bebas_neuebold", arial, sans-serif;
  --montserrat: "montserrat", arial, sans-serif;
  --montserrat-bold: "montserratbold", arial, sans-serif;
  --roboto: "roboto", arial, sans-serif;
  --roboto-medium: "robotomedium", arial, sans-serif;
  --roboto-bold: "robotobold", arial, sans-serif;

  --color-hero: #efbb53;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: black;
}

a {
  color: var(--color-hero);
  text-decoration: none;
}

/// a11y
.sr-only {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
