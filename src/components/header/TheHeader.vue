<template>
  <header>
    <LogoJacaranda />
  </header>
</template>

<script>
import LogoJacaranda from "@/components/logo/LogoJacaranda";
export default {
  name: "TheHeader",
  components: { LogoJacaranda },
};
</script>

<style lang="scss" scoped>
  header {
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
</style>
