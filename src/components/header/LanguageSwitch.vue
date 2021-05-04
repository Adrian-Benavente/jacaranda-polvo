<template>
  <div :class="$style.language">
    <label
      :class="[$style.option, selectedLanguage === 'es' && $style.highlight]"
    >
      <input
        :class="[$style.input, 'sr-only']"
        name="lang"
        type="radio"
        aria-label="Español"
        value="es"
        v-model="selectedLanguage"
      />ES</label
    ><span :class="$style.separator">/</span
    ><label
      :class="[$style.option, selectedLanguage === 'en' && $style.highlight]"
      ><input
        :class="[$style.input, 'sr-only']"
        name="lang"
        type="radio"
        aria-label="English"
        value="en"
        v-model="selectedLanguage"
      />EN</label
    >
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
        localStorage.setItem("lang", this.selectedLanguage);
        document.documentElement.lang = localStorage.getItem("lang") || "es";
      },
    },
  },
};
</script>

<style lang="scss" module>
.language {
  color: white;
}
.option {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-family: var(--roboto-bold);
  font-size: 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  &.highlight {
    color: var(--color-hero);
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
}
.input {
  appearance: none;
}
.separator {
  font-size: 0.75rem;
  margin: 0 0.25rem;
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
}
</style>
