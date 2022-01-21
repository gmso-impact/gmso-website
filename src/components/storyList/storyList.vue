<template lang="">
  <div class="d-flex flex-column h-100">
    <h2 class="text-center my-0 bg-white">Find your story @ CSU</h2>
    <div class="flex-grow-1 border-top overflow-y-auto overflow-x-hidden ">
      <div class="px-3 carbon">
        <div class="row mb-3">
          <StoryItem
            v-for="story in stories"
            :key="story.name"
            v-bind:story="story"
          >
          </StoryItem>
        </div>
      </div>
    </div>
        <div class="text-center small my-0 bg-white">Tap a story or pin on the map to learn more</div>

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
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cccccc;
  -webkit-box-shadow: inset 0 0 5px rgba(108, 117, 125, 1);
  border: 2px solid rgba(108, 117, 125, 1);
  margin-right: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
