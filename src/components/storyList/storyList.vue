<template lang="">
  <div class="h-100 overflow-y-hidden">
    <h2 class="text-center my-3">Find your story @ CSU</h2>
    <div class="overflow-y-auto h-100">
      <div class="row">
        <StoryItem
          v-for="story in stories"
          :key="story.name"
          v-bind:story="story"
        >
        </StoryItem>
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
      stories: "storyCurrent",
    }),
  },
  methods: {},
};
</script>
<style lang="scss">
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
</style>
