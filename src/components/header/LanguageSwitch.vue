<template>
  <a href="#" :class="$style.language">{{ selectedLanguage }}</a>
</template>

<script>
export default {
  name: "LanguageSwitch",
  data: () => ({
    language: "es",
  }),
  computed: {
    selectedLanguage: {
      get() {
        return this.language;
      },
      set(newVal) {
        this.language = newVal;
      },
    },
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;

.language {
  font-family: var(--roboto-bold);
  font-size: 0.875rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
