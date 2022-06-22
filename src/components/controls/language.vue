<template lang="">
  <div
    class="d-flex"
    :class="{
      'btn-group': true,
      'btn-group-vertical': false,
    }"
    role="group"
    aria-label="Language Toggle Buttons"
  >
    <button
      v-for="language in languages"
      :key="language.locale"
      type="button"
      class="btn btn-fade px-0"
      :class="{
        'btn-white': $root.$i18n.locale === language.locale,
        'btn-secondary': $root.$i18n.locale !== language.locale,
      }"
      v-on:click="setLanguage(language.locale)"
    >
      {{ language.language }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { languages } from "../../translations.ts";
import { event } from "vue-gtag";

export default {
  data() {
    return { languages: languages };
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
        event_category: "controld",
        event_label: locale,
        value: 1,
        method: "Google",
      });
    },
  },
};
</script>

<style>
.btn-fade {
  transition: all 0.6s ease;
}
</style>
