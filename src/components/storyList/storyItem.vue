<template lang="">
  <div
    class="col-lg-12 col-xl-6 col-xxl-4 py-2 py-xxl-4 px-2 px-xxl-4"
    v-if="story.fields['en-StoryTitle']"
  >
    <div
      class="story-card w-100 h-100 p-0 p-xxl-3 btn d-flex flex-column"
      :class="[
        `btn-${story.fields['Story Theme']}`,
        storyCurrent && story.id === storyCurrent.id ? 'active' : '',
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
        alt="Card image cap"
      />
      <div
        class="card-body d-flex justify-content-center align-items-center p-1 text-center font-weight-bold"
      >
        <div>
          <div>
            {{ story.fields["en-StoryTitle"] }}
          </div>
          <!--<div
            v-if="story.fields['sp-StoryTitle']"
            class="small d-none d-lg-block"
          >
            {{ story.fields["sp-StoryTitle"] }}
          </div>-->
        </div>
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
      storyCurrent: "storyCurrent",
    }),
  },
};
</script>

<style scoped lang="scss">
.story-card {
  min-height: 10vh;
  border-radius: 0px;
}
</style>
