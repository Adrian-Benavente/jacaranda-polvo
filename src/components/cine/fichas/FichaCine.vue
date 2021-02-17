<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <h2 :class="$style.title">Lorem title</h2>
      <p :class="$style.year">2017</p>
    </header>
    <main>
      <section :class="$style.video"></section>
      <section :class="$style.info">
        <div :class="$style.about"></div>
        <div :class="$style.poster"></div>
        <div :class="$style.ficha"></div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: "FichaCine",
};
</script>

<style lang="scss" module></style>
