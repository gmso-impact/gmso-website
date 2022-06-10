<template lang="">
  <div class="h-100 w-100">
    <iframe
      @load="setIframeLoaded()"
      class="iframe-scale iframe-border-none btn-fade"
      :class="{
        'd-none': !loaded,
      }"
      :src="story.fields['en-StoryMapLink']"
      title="Story Map"
    ></iframe>
    <div
      class="iframe-scale iframe-border-none flex-column text-center text-white justify-content-center"
      :class="{ 'd-none': loaded, 'd-flex': !loaded }"
    >
      <div>{{ storyTitle }}</div>
      <div class="mt-4">
        <font-awesome-icon :icon="['fas', 'spinner']" spin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {
      loaded: false,
    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  watch: {},
  computed: {
    storyTitle: function () {
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      } else {
        // default to english
        return this.story.fields["en-StoryTitle"];
      }
    },
  },
  methods: {
    setIframeLoaded() {
      console.log("iframe loaded");
      setInterval(() => {
        this.loaded = true;
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped></style>
