<template lang="">
  <div
    class="outerFrame childPoint"
    v-if="
      story !== null &&
      story.fields !== undefined &&
      story.fields['StoryMap VIEW Link']
    "
  >
    <div
      class="middleFrame d-flex flex-column px-1 py-1 rounded"
      :class="`bg-${story.fields['Story Theme']}`"
    >
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
      <iframe
        class="innerFrame flex-grow-1"
        :src="story.fields['StoryMap VIEW Link']"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
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
.outerFrame {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0px, -50%);
  width: 100%;
  height: 100%;
  padding: 3rem;
  max-width: 3840px;
  max-height: 2160px;
  z-index: 999;
}
.middleFrame {
  position: relative;
  // height: 100%;
  // width: 100%;
  width: 50%;
  height: 50%;

  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(2);
}
.innerFrame {
  width: 100%;
  height: 100%;
  border: none;
}
.topClose {
  position: absolute;
  right: 0px;
  top: 0px;
}
.bottomClose {
  position: absolute;
  left: 0px;
  bottom: 0px;
}
</style>
