<template lang="">
  <div class="d-flex flex-column  rounded p-2 p-xxl-3">
    <h3 class="text-center text-white">Theme</h3>
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
