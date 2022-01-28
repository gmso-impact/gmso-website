<template lang="">
  <div
    class="storyFrame outerFrame childPoint"
    v-if="
      story !== null &&
      story.fields !== undefined &&
      story.fields['StoryMap VIEW Link']
    "
  >
    <div
      class="controlFrame p-1 p-xxl-3 rounded"
      :class="`bg-${story.fields['Story Theme']}`"
    >
        <iframe
          class="storyFrame innerFrame"
          :src="story.fields['StoryMap VIEW Link']"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
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

export default {
  components: {},
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
<style lang="scss" scoped>

</style>
