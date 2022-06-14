<template lang="">
  <l-layer-group :ref="`pop-layer-${story.id}`">
    <l-popup :options="options" class="popup" :ref="`pop-${story.id}`">
      <div
        class="card shadow p-1 p-xxl-4"
        :class="`bg-${story.fields['Story Theme']}`"
      >
        <PopupIFrame
          :story="story"
          v-if="story.fields['en-StoryMapLink']"
        ></PopupIFrame>
        <PopupInfo :story="story"></PopupInfo>
      </div>
    </l-popup>
  </l-layer-group>
</template>
<script>
import { LPopup, LLayerGroup } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import PopupIFrame from "./popupIFrame.vue";
import PopupInfo from "./popupInfo.vue";

export default {
  components: {
    LPopup,
    LLayerGroup,
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
        autoClose: false,
        closeButton: false,
        className: "map-popup-container",
        autoPanPaddingTopLeft: [20, 20],
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
    latLngObj: function () {
      return latLng(this.story.fields["LAT"], this.story.fields["LONG"]);
    },
  },
  methods: {
    ...mapMutations({
      removeActiveStory: "removeActiveStory",
    }),
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$refs[`pop-layer-${this.story.id}`].mapObject.openPopup(
        this.latLngObj
      );
    });
  },
};
</script>
<style lang="scss"></style>
