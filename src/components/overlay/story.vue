<template lang="">
  <div class="storyFrame overlay childPoint">
    <div
      class="controlFrame p-1 p-xxl-3 rounded"
      :class="`bg-${story.fields['Story Theme']}`"
    >
      <div class="topClose">
        <button
          class="btn"
          :class="`btn-${story.fields['Story Theme']}`"
          v-on:click="removeActiveStory(story)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          Close
        </button>
      </div>
      <StoryIFrame :story="story" :key="story.id"></StoryIFrame>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import StoryIFrame from "../storyIFrame/storyIFrame.vue";
export default {
  components: {
    StoryIFrame,
  },
  data() {
    return {};
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      removeActiveStory: "removeActiveStory",
    }),
  },
};
</script>
<style lang="scss" scoped></style>
