<template lang="">
  <div class="d-flex flex-column justify-content-md-center h-100">
    <div class="row mb-2 mb-xxl-5">
      <div class="col-12 col-xxl-12">
        <button
          class="btn btn-block font-weight-bold mb-2 mb-xxl-5"
          v-bind:class="{
            'btn-white': storyThemesActive.length === storyThemes.length,
            'btn-outline-white':
              storyThemesActive.length !== storyThemes.length,
          }"
          v-on:click="resetTagsClicked"
        >
          {{ $t(`All`) }}
        </button>
      </div>
      <ThemeButton
        v-for="storyTheme in storyThemes"
        :key="storyTheme.name"
        v-bind:control="storyTheme"
      >
      </ThemeButton>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ThemeButton from "./themeButton.vue";

export default {
  components: {
    ThemeButton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
      storyThemesActive: "storyThemesActive",
    }),
  },
  methods: {
    ...mapMutations({
      resetTags: "resetTags",
    }),
    resetTagsClicked: function (event) {
      this.resetTags("storyThemes");
    },
  },
};
</script>

<style></style>
