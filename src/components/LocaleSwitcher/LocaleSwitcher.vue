<template>
  <div class="locale-switcher">
    <button
      :class="{ 'locale-button': true, active: currentLocale === locales.en }"
      @click="switchLocale(locales.en)"
    >
      {{ locales.en.toUpperCase() }}
    </button>
    <button
      :class="{ 'locale-button': true, active: currentLocale === locales.ru }"
      @click="switchLocale(locales.ru)"
    >
      {{ locales.ru.toUpperCase() }}
    </button>
  </div>
</template>

<script lang="ts">
import { LOCALES } from "@/shared/constants";

export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: LOCALES,
      currentLocale: this.$store.state.locale,
    };
  },
  methods: {
    switchLocale(locale: string) {
      this.currentLocale = locale;
      this.$store.commit("setLocale", locale);
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style scoped src="./LocaleSwitcher.scss"></style>
