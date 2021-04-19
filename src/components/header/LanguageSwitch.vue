<template>
  <div :class="$style.language">
    <button
      aria-label="Select Spanish language"
      :class="[$style.button, selectedLanguage === 'es' && $style.highlight]"
      @click="selectedLanguage = 'es'"
    >
      ES
    </button>
    /
    <button
      aria-label="Seleccionar idioma español"
      :class="[$style.button, selectedLanguage === 'en' && $style.highlight]"
      @click="selectedLanguage = 'en'"
    >
      EN
    </button>
    <pre>{{ selectedLanguage }}</pre>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitch",
  computed: {
    selectedLanguage: {
      get() {
        return this.$i18n.locale;
      },
      set(newVal) {
        this.$i18n.locale = newVal;
      },
    },
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.language {
  color: white;
}
.button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-family: var(--roboto-bold);
  font-size: 0.875rem;
  text-decoration: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
}
.highlight {
  color: var(--color-hero);
}
</style>
