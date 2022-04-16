<template lang="">
  <div class="d-flex flex-column h-100 carbon">
    <h3 class="text-center my-1 my-xxl-5 bg-white d-xl-none">
      {{ $t(`tagline`) }}
    </h3>
    <div class="flex-grow-1 overflow-y-auto overflow-x-hidden carbon p-2">
      <transition-group
        name="story-list"
        tag="div"
        class="story-list d-flex h-100 align-content-center row no-gutters mt-xxl-5"
        @before-leave="beforeLeave"
      >
        <StoryItem
          v-for="story in stories"
          :key="story.id"
          class="story"
          v-bind:story="story"
        >
        </StoryItem>
      </transition-group>
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
  methods: {
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } =
        window.getComputedStyle(el);
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    },
  },
};
</script>
<style lang="scss">
// enter = new element apears
// leave = existing element disapears
// move = element moves to a new position

// null = begining state of animation
// to = end state of animation
// active = duration of animation = null + to
.story-list {
  position: relative;
}
.story {
  backface-visibility: hidden;
  z-index: 1;
  display: inline-block;
}

/* moving */
.story-list-move {
  transition: all 1000ms ease;
}
.story-list-move-active {
}

/* appearing */
.story-list-enter {
  opacity: 0;
  transform: scale(0.8, 0.8);
}
.story-list-enter-active {
  transition: all 600ms ease-out;
}

/* disappearing */
.story-list-leave-active {
  transition: all 600ms ease-in;
  z-index: 0;
  position: absolute;
}
.story-list-leave-to {
  opacity: 0;
  transform: scale(0.8, 0.8);
}
</style>
