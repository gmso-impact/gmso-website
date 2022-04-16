<template lang="">
  <div class="d-flex flex-column h-100 carbon">
    <h3 class="text-center my-1 my-xxl-5 bg-white d-xl-none">
      {{ $t(`tagline`) }}
    </h3>
    <div class="flex-grow-1 overflow-y-auto overflow-x-hidden">
      <div class="p-2 carbon min-100 d-flex flex-column justify-content-center">
        <transition-group name="list-complete"  tag="div" class="row no-gutters">
          <StoryItem
            v-for="story in stories"
            :key="story.id"
            class="list-complete-item"
            v-bind:story="story"
          >
          </StoryItem>
        </transition-group>
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
};
</script>
<style lang="scss">
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-10px);
}
.list-complete-leave-active {

}
</style>
