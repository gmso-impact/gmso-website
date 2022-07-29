<template lang="">
  <div class="videoFrame overlay childPoint" v-if="isStoriesFrameOpen">
    <div class="controlFrame px-1 py-1 rounded carbon border border-light">
      <StoryListAll></StoryListAll>
      <div class="topClose">
        <button class="btn btn-black" v-on:click="clickCloseStoriesFrame()">
          <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />
          {{ $t(`Close`) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button class="btn btn-black" v-on:click="clickCloseStoriesFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import StoryListAll from "@/components/storyList/storyListAll.vue";
export default {
  components: {
    StoryListAll,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isStoriesFrameOpen: "isStoriesFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ clickCloseStoriesFrame: "closeStoriesFrame" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped></style>
