<template lang="">
  <l-popup :options="options" class="popup" ref="popup">
    <div class="card shadow"       :class="`bg-${story.fields['Story Theme']}`">
      <div class="p-1">
      <PopupIFrame :story="story" v-if="story.fields['en-StoryMapLink']"></PopupIFrame>
      <PopupSummary :story="story" v-else></PopupSummary>
      </div>
      <PopupInfo :story="story"></PopupInfo>
    </div>
  </l-popup>
</template>
<script>
import { LPopup } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import PopupSummary from "./popupSummary.vue";
import PopupIFrame from "./popupIFrame.vue";
import PopupInfo from "./popupInfo.vue";


export default {
  components: {
    LPopup,
    PopupSummary,
    PopupIFrame,
    PopupInfo,
  },
  data() {
    return {
      options: {
        maxWidth: "auto",
                minWidth: "auto",

        keepInView: false,
        autoPan: true,
        autoClose: true,
        closeOnClick: false,
        closeButton: false,
        className: "map-popup-container",
        autoPanPaddingTopLeft: [160, 20],
        autoPanPaddingBottomRight: [20, 20],
      },
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

    isCurrentStory: function () {
      return (this.storyCurrent && this.story.id === this.storyCurrent.id)
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
  },
  watch: {
    storyCurrent: function (newStory, oldStory) {
      return null;
    },
  },
};
</script>
<style lang="scss">

</style>
