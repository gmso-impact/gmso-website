<template lang="">
  <div class="h-100 w-100">
    <iframe
      @load="setIframeLoaded()"
      class="iframe-scale iframe-border-none btn-fade"
      frameborder="0"
      :allow="allow"
      :class="{
        'd-none': !loaded,
      }"
      :src="story.fields['en-StoryMapLink']"
      title="Story Map"
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
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
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
