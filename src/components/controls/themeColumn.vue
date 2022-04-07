<template lang="">
  <div class="d-flex flex-column justify-content-xxl-center h-100">
    <button class="btn btn-white font-weight-bold" v-on:click="resetTagsClicked">
      {{ $t(`All`) }}
    </button>
    <ThemeButton
      v-for="storyTheme in storyThemes"
      :key="storyTheme.name"
      v-bind:control="storyTheme"
    >
    </ThemeButton>
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

<style></style>
