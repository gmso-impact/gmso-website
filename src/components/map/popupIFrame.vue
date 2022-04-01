<template lang="">
  <div class="popup-iframe">
    <StoryIFrame :story="story"></StoryIFrame>
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
  methods: {},
};
</script>
<style lang="scss" scoped></style>
