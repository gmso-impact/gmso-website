<template lang="">
  <div
    class="storyFrame overlay childPoint"
    v-if="
      story !== null &&
      story.fields !== undefined &&
      story.fields['en-StoryMapLink']
    "
  >
    <div
      class="controlFrame p-1 p-xxl-3 rounded"
      :class="`bg-${story.fields['Story Theme']}`"
    >
      <StoryIFrame :story="story"></StoryIFrame>
      <div class="topClose">
        <button
          class="btn"
          :class="`btn-${story.fields['Story Theme']}`"
          v-on:click="setStoryFrame(null)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          Close
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button
          class="btn"
          :class="`btn-${story.fields['Story Theme']}`"
          v-on:click="setStoryFrame(null)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import StoryIFrame from "../storyIFrame/storyIFrame.vue"
export default {
  components: {
    StoryIFrame
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      story: "storyFrame",
    }),
  },
  methods: {
    ...mapMutations({ setStoryFrame: "setStoryFrame" }),
  },
};
</script>
<style lang="scss" scoped></style>
