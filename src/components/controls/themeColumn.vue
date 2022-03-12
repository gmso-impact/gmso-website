<template lang="">
  <div class="d-flex flex-column rounded p-2 p-xxl-3">
    <div class="btn-group mb-4" role="group" aria-label="Language Toggle Buttons">
      <label class="btn btn-secondary" for="btnradio1">English</label>
      <label class="btn btn-white" for="btnradio2">Spanish</label>
    </div>
    <!--<div class="mt-1">&nbsp;</div>-->

    <ThemeButton
      v-for="storyTheme in storyThemes"
      :key="storyTheme.name"
      v-bind:control="storyTheme"
    >
    </ThemeButton>

    <button class="btn btn-white mt-2 mt-xxl-4" v-on:click="resetTagsClicked">
      All
    </button>
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
