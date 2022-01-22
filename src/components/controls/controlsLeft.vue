<template lang="">
  <div class="d-flex flex-column">
    <h3 class="text-center">Theme</h3>
    <ControlsButton
      v-for="storyTheme in storyThemes"
      :key="storyTheme.name"
      v-bind:control="storyTheme"
    >
    </ControlsButton>
    <button class="btn btn-light mt-2" v-on:click="resetTagsClicked">
      All
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ControlsButton from "./controlsButton.vue";

export default {
  components: {
    ControlsButton,
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
