<template lang="">
  <div class="d-flex flex-column h-100">
    <h2 class="text-center my-1 my-xxl-5 bg-white">Find your story @ CSU</h2>
    <div class="flex-grow-1 border-top overflow-y-auto overflow-x-hidden">
      <div
        class="px-3 carbon min-100 d-flex flex-column justify-content-center"
      >
        <div class="row pb-3">
          <StoryItem
            v-for="story in stories"
            :key="story.name"
            v-bind:story="story"
          >
          </StoryItem>
        </div>
        <div class="row justify-content-md-center">
          <div
            v-if="stories.length < 3"
            class="col-xxl-6 pb-5 mb-5 pt-3 text-white"
          >
            <h3>
              No more stories apear within this area of the map. Please zoom out
              or <button class="btn btn-primary btn-lg">Reset</button>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center small my-0 bg-white">
      Tap a story or pin on the map to learn more
    </div>
  </div>
</template>
<script>
import StoryItem from "./storyItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    StoryItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      stories: "storyInMap",
    }),
  },
  methods: {},
};
</script>
<style lang="scss"></style>
