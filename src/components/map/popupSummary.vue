<template lang="">
      <div>
        <img
          :src="story.fields['Pop-Up Card Image'][0].thumbnails.large.url"
          v-if="
            story.fields['Pop-Up Card Image'] &&
            story.fields['Pop-Up Card Image'][0] &&
            story.fields['Pop-Up Card Image'][0].thumbnails
          "
          class="card-img-top"
          :alt="story.fields['en-StoryTitle']"
        />
        <div class="card-header font-weight-bold">
          <h3 class="mb-0">{{ story.fields["en-StoryTitle"] }}</h3>
          <div>
            {{ this.story.fields["en-Tagline"] }}
          </div>
        </div>
        <div
          class="card-body summary-blurb"
          v-if="this.story.fields['Pop-Up Card Content']"
        >
          {{ this.story.fields["Pop-Up Card Content"] }}
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-dark" v-on:click="clickClose">
            <font-awesome-icon :icon="['fas', 'times']" />
            Close
          </button>
          <button
            class="btn flex-fill ml-3"
            :class="`btn-${story.fields['Story Theme']}`"
            v-on:click="clickReadMore"
            v-if="story.fields['en-StoryMapLink']"
          >
            <font-awesome-icon :icon="['fas', 'book']" />
            Read More
          </button>
        </div>
      </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      storyCurrent: "storyCurrent",
    }),
 
    test: function () {
        return null
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
  watch: {
    storyCurrent: function (newStory, oldStory) {
        return null;
    },
  },
};
</script>
<style lang="scss">
.summary-blurb {
  max-height: 400px;
  overflow-y: auto;
}
</style>
