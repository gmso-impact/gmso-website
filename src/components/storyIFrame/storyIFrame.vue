<template lang="">
  <div class="h-100 w-100">
    <ScrollDown></ScrollDown
    ><!--style="z-index:99997 !important;"-->
    <iframe
      @load="setIframeLoaded()"
      class="iframe-scale iframe-border-none btn-fade justify-content-end"
      frameborder="0"
      :allow="allow"
      :class="{
        'd-none': !loaded,
      }"
      :src="storyLink"
      title="Story Map"
      scrolling="yes"
    ></iframe>
    <div
      class="flex-column h-100 text-center text-white justify-content-center"
      :class="{ 'd-none': loaded, 'd-flex': !loaded }"
    >
      <div class="h1">{{ storyTitle }}</div>
      <div class="mt-4">
        <font-awesome-icon class="fa-2x" :icon="['fas', 'spinner']" spin />
      </div>
      <div class="mt-4">
        {{ $t(`Explore`) }}
      </div>
    </div>
  </div>
</template>
<script>
import ScrollDown from "./scrollDown.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    ScrollDown,
  },
  data() {
    return {
      loaded: true,
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
    ...mapGetters({
      getBreakpoints: "getBreakpoints",
    }),
    storyLink: function () {
      // Return story in other language
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`];
      }
      // default to english
      return this.story.fields["bi-StoryMapLink"];
    },
    storyTitle: function () {
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      } else {
        // default to english
        return this.story.fields["en-StoryTitle"];
      }
    },
    allow: function () {
      const fullscreen =
        this.$route.name === "Kiosk" && this.getBreakpoints.includes("xxl")
          ? "'none'"
          : "";
      return `fullscreen ${fullscreen}; geolocation;"`;
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
