<template lang="">
  <div class="col p-1 p-xxl-2">
    <div
      class="btn btn-secondary story-card w-100 h-100 p-2 d-flex flex-column rounded-0 justify-content-between"
      v-if="storyThemesActive.length !== storyThemes.length"
      v-on:click="resetTagsClicked"

    >
      <div class="h-100 d-flex flex-column justify-content-center">
        <font-awesome-icon :icon="['fas', 'globe']" class="mr-2 fa-4x" />
      </div>
      <div>Reset filter see more stories</div>
    </div>
    <div
      class="btn btn-secondary story-card w-100 h-100 p-2 d-flex flex-column rounded-0 justify-content-between"
      v-else-if="zoom > 4 || storyInMap.length <= 12"
      v-on:click="resetMap"

    >
      <div class="h-100 d-flex flex-column justify-content-center">
        <font-awesome-icon :icon="['fas', 'globe']" class="mr-2 fa-4x" />
      </div>
      <div>Reset map to see more stories</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      resetTags: "resetTags",
      resetMap: "resetMap",
    }),
    resetTagsClicked: function (event) {
      this.resetTags("storyThemes");
    },
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
      storyThemesActive: "storyThemesActive",
      zoom: "mapGetZoom",
      storyInMap: "storyInMap",

    }),
  },
};
</script>

<style scoped lang="scss"></style>
