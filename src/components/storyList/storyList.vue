<template lang="">
  <div class="d-flex flex-column h-100">
    <h2 class="text-center my-0 bg-white">Find your story @ CSU</h2>
    <div class="flex-grow-1 border-top overflow-y-auto overflow-x-hidden">
      <div class="px-3 carbon min-100">
        <div class="row pb-3">
          <StoryItem
            v-for="story in stories"
            :key="story.name"
            v-bind:story="story"
          >
          </StoryItem>
          </div>
          <div class='row justify-content-md-center'>
          <div v-if='stories.length < 3' class="col-xxl-6 pb-5 mb-5 pt-3 text-white">
            <h3>No more stories apear within this area of the map. Please zoom out or <button class="btn btn-primary btn-lg">Reset</button></h3>
          </div>
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
.min-100 {
    min-height: 100%;
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
