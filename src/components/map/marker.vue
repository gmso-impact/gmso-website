<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :icon="icon"
    ref="marker"
    v-on:click="clickMarker"
  >
    <Popup :story="story" :key="story.id"> </Popup>
  </l-marker>
</template>
<script>
import { LMarker, LIcon } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import Popup from "./popup.vue";

export default {
  components: {
    LMarker,
    Popup,
  },
  data() {
    return {
      test: null,
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
      getBreakpoints: "getBreakpoints",
    }),
    latLngObj: function () {
      return latLng(this.story.fields["LAT"], this.story.fields["LONG"]);
    },
    icon: function () {
      const icon = divIcon({
        className: "",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span class="marker-pin bg-${
          this.story.fields["Story Theme"] ?? "white"
        } ${
          this.storyCurrent && this.story.id === this.storyCurrent.id
            ? "active"
            : ""
        }"/>`,
      });
      return icon;
    },
  },
  methods: {
    ...mapMutations({
      setStoryCurrent: "setStoryCurrent",
      setStoryFrame: "setStoryFrame",
    }),
    clickMarker: function () {
      if (this.storyCurrent && this.storyCurrent.id === this.story.id) {
        this.setStoryCurrent(null);
        this.setStoryFrame(null);
      } else {
        if (this.getBreakpoints.includes("xl")) {
          this.setStoryCurrent(this.story);
        } else {
          this.setStoryFrame(this.story);
        }
      }
    },
  },
  watch: {
    storyCurrent: function (newStory, oldStory) {
      console.log("iom here");
      if (newStory?.id === this.story.id) {
        this.$nextTick(() => {
          this.$refs.marker.mapObject.openPopup();
        });
      } else {
        //if (this.$refs.marker.mapObject.isOpen())
        this.$nextTick(() => {
          this.$refs.marker.mapObject.closePopup();
        });
      }
    },
  },
  beforeDestroy() {
    if (this.storyCurrent && this.storyCurrent.id === this.story.id) {
      this.setStoryCurrent(null);
    }
  },
};
</script>
<style lang="scss"></style>
