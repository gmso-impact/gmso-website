<template lang="">
  <div class="d-flex flex-column h-100 carbon">
    <h2 class="text-center my-1 my-xxl-5 bg-white d-xl-none">
      {{ $t(`tagline`) }}
    </h2>
    <div class="flex-grow-1 overflow-y-auto overflow-x-hidden">
      <div
        class="px-4 carbon min-100 d-flex flex-column justify-content-center"
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
            class="col-xxl-4 pb-5 mb-5 pt-3 text-white"
          >
            <!--<h3>
              No more stories appear in the map. Please zoom out
              or <button class="btn btn-primary btn-lg">Reset</button>
            </h3>-->
          </div>
        </div>
      </div>
    </div>
    <QrStory v-if="false"></QrStory>
  </div>
</template>
<script>
import StoryItem from "./storyItem.vue";
import QrStory from "@/components/qr/qrStory.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    StoryItem,
    QrStory,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      stories: "storyInMap",
    }),
  },
};
</script>
<style lang="scss"></style>
