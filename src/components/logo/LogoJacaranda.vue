<template>
  <h1 id="logo">
    Jacarandá Polvo
  </h1>
</template>

<script>
export default {
  name: "LogoJacaranda"
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/functions" as fn;

#logo {
  align-items: center;
  color: white;
  display: flex;
  font-family: "bebas_neueregular", arial, sans-serif;
  font-size: 1.25rem;
  margin-left: fn.to-proportion-width(36, 1440);
  margin-top: fn.to-proportion-height(18, 900);
  text-align: start;
  &::before {
    background-image: url("../../assets/img/logo/arbol.png");
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: fn.to-proportion-width(62, 1440);
    margin-right: 1rem;
    min-height: 42px;
    min-width: 42px;
    width: fn.to-proportion-width(62, 1440);
  }
}
</style>
