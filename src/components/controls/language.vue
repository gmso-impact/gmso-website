<template lang="">
  <div>
    <div class="h2 text-white text-center mb-xxl-3 d-none d-xxl-block">
      Language
    </div>
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
        :aria-label="language.language"
        :class="{
          'btn-white': $root.$i18n.locale === language.locale,
          'btn-secondary': $root.$i18n.locale !== language.locale,
        }"
        v-on:click="setLanguage(language.locale)"
      >
        {{ language.language }}
      </button>
    </div>
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
  computed: {},
  methods: {
    setLanguage: function (locale) {
      this.$root.$i18n.locale = locale;
      event(`language`, {
        event_category: "control",
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
