<template lang="">
  <div class="d-flex flex-wrap pb-1 px-1 justify-content-between">
    <div>Header info</div>
    <button
      class="btn btn-outline-dark"
      v-on:click="clickReadMore"
      v-if="story.fields['en-StoryMapLink']"
    >
      <font-awesome-icon :icon="['fas', 'book']" />
      Read More
    </button>
    <button class="btn btn-outline-dark" v-on:click="clickClose">
      <font-awesome-icon :icon="['fas', 'times']" />
      Close
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
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
      setStoryCurrent: "setStoryCurrent",
      setStoryFrame: "setStoryFrame",
    }),
        clickClose: function () {
      this.setStoryCurrent(null);
    },
    clickReadMore: function () {
      this.setStoryCurrent(null);
      this.setStoryFrame(this.story);
    },
  },
};
</script>
<style lang="scss" scoped></style>
