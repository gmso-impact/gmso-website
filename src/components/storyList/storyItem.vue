<template lang="">
  <div
    class="col-6 col-lg-12 col-xl-4 col-xxl-4 py-2 py-xxl-3 px-2 px-xxl-5"
    v-if="story.fields['en-StoryTitle']"
  >
    <div
      class="story-card w-100 h-100 p-0 btn d-flex flex-column"
      :class="[
        `btn-${story.fields['Story Theme']}`,
        isStoryActive(story.id) ? 'active' : '',
      ]"
      v-on:click="addActiveStory(story)"
    >
      <img
        v-if="
          story.fields['Story Card Image'] &&
          story.fields['Story Card Image'][0] &&
          story.fields['Story Card Image'][0].thumbnails
        "
        :src="story.fields['Story Card Image'][0].thumbnails.large.url"
        class="w-100 rounded-top"
        :alt="story.fields['Research Blurb']"
      />
      <div
        class="card-body d-flex justify-content-center align-items-center p-1 text-center text-white font-weight-bolds"
      >
        <transition name="fade" mode="out-in">
          <div :key="storyTitle">
            {{ storyTitle }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({ addActiveStory: "addActiveStory" }),
  },
  computed: {
    ...mapGetters({
      isStoryActive: "isStoryActive",
    }),
    storyTitle: function () {
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      } else {
        // default to english
        return this.story.fields["en-StoryTitle"];
      }
    },
  },
};
</script>

<style scoped lang="scss">
.story-card {
  min-height: 10vh;
  border-radius: 0px;
}
</style>
