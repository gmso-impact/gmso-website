<template lang="">
  <div class="popup-iframe" v-if="true">
    <StoryIFrame :story="story" :key="story.id"></StoryIFrame>
  </div>
</template>
<script>
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
  methods: {},
};
</script>
<style lang="scss" scoped></style>
