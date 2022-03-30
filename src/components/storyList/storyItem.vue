<template lang="">
  <div
    class="col-md-6 col-lg-6 col-xxl-4 pt-4 my-1"
    v-if="story.fields['en-StoryTitle']"
  >
    <div
      class="story-card w-100 h-100 p-0 p-xxl-3 btn d-flex flex-column"
      :class="[
        `btn-${story.fields['Story Theme']}`,
        storyCurrent && story.id === storyCurrent.id ? 'active' : '',
      ]"
      v-on:click="setStoryCurrent(story)"
    >
      <img
        v-if="
          story.fields['Pop-Up Card Image'] &&
          story.fields['Pop-Up Card Image'][0] &&
          story.fields['Pop-Up Card Image'][0].thumbnails
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
          <div v-if='story.fields["sp-StoryTitle"]' class="small d-none d-lg-block">
            {{ story.fields["sp-StoryTitle"] }}
          </div>
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
    ...mapMutations({ setStoryCurrent: "setStoryCurrent" }),
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
