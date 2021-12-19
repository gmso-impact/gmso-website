<template lang="">
  <div class="mx-3 h-100 overflow-y-hidden">
    <h2 class="text-center my-3">Find your story @ CSU</h2>
    <button class="btn btn-primary" @click="getAirTable">Get Air Table</button>
    <div class="row overflow-y-auto">
      <StoryItem
        v-for="story in stories"
        :key="story.name"
        v-bind:story="story"
      >
      </StoryItem>
    </div>
  </div>
</template>
<script>
import StoryItem from "./storyItem.vue";
import allStories from "./allStories.js";

export default {
  components: {
    StoryItem,
  },
  data() {
    return {
      stories: allStories,
    };
  },
  methods: {
  
  }
};
</script>
<style lang="scss">
.overflow-y-hidden{
    overflow-y: hidden;
}
.overflow-y-auto{
    overflow-y: auto;
}
</style>
