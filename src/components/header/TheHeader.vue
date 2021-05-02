<template>
  <header :class="$style.header">
    <LogoJacaranda />
    <div :class="[$style.widgets, opacity && $style.opacity]">
      <div :class="[$style.spacing, $style.centered]">
        <SoundWave />
      </div>
      <div :class="$style.spacing">
        <LanguageSwitch />
      </div>
      <div :class="$style.spacing">
        <MainMenu />
      </div>
    </div>
  </header>
</template>

<script>
import LogoJacaranda from "@/components/logo/LogoJacaranda";
import SoundWave from "@/components/header/SoundWave";
import LanguageSwitch from "@/components/header/LanguageSwitch";
import MainMenu from "@/components/header/nav/MainMenu";

export default {
  name: "TheHeader",
  components: { MainMenu, LanguageSwitch, SoundWave, LogoJacaranda },
  data: () => ({
    visible: false,
    opacity: false,
  }),
  mounted() {
    setTimeout(() => (this.opacity = true), 300);
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;

.header {
  display: flex;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.widgets {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: fn.to-proportion-width(30, 1440);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.opacity {
    opacity: 1;
  }
}

.spacing {
  margin: 0 fn.to-rem(18);
}

.centered {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
