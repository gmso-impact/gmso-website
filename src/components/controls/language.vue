<template lang="">
  <div
    class="btn-group d-flex flex-column flex-xxl-row"
    role="group"
    aria-label="Language Toggle Buttons"
  >
    <button
      v-for="lang in langs"
      :key="lang.locale"
      type="button"
      class="btn"
      :class="{
        'btn-white': $root.$i18n.locale === lang.locale,
        'btn-secondary': $root.$i18n.locale !== lang.locale,
      }"
      v-on:click="setLanguage(lang.locale)"
    >
      {{ lang.language }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { languages } from "../../translations.ts";
export default {
  data() {
    return { langs: languages };
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
    }),
  },
  methods: {
    ...mapMutations({
      resetTags: "resetTags",
    }),
    setLanguage: function (locale) {
      this.$root.$i18n.locale = locale;
      event(`language`, {
        'event_category': 'control',
        'event_label': 'enable',
        'value': locale,
        method: 'Google'
      })
    },
  },
};
</script>

<style></style>
