<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :icon="icon"
    ref="marker"
    v-on:click="clickMarker"
  >
    <l-popup :options="options" ref="popup">
      <div class="card shadow">
        <div class="card-header font-weight-bold">
          {{ story.fields["Story Title"] }}
        </div>
        <div class="card-body">
          {{ this.story.fields["Research Blurb"] }}
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-dark" v-on:click="clickClose">
            <font-awesome-icon :icon="['fas', 'times']" />
            Close
          </button>
          <button
            class="btn"
            :class="`btn-${story.fields['Story Theme']}`"
            v-on:click="clickReadMore"
            v-if="story.fields['StoryMap VIEW Link']"
          >
            <font-awesome-icon :icon="['fas', 'book']" />
            Read More
          </button>
        </div>
      </div>
    </l-popup>
  </l-marker>
</template>
<script>
import { LMarker, LPopup, LIcon } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    LMarker,
    LPopup,
  },
  data() {
    return {
      options: {
        maxWidth: 300,
        keepInView: false,
        autoClose: true,
        closeOnClick: false,
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
      } else {
        this.setStoryCurrent(this.story);
      }
    },
    clickClose: function () {
      this.setStoryCurrent(null);
      this.$nextTick(() => {
        this.$refs.marker.mapObject.closePopup();
      });
    },
    clickReadMore: function () {
      this.$nextTick(() => {
        this.$refs.marker.mapObject.closePopup();
      });
      this.setStoryFrame(this.story);
    },
  },
  watch: {
    storyCurrent: function (newStory, oldStory) {
      if (newStory?.id === this.story.id) {
        this.$nextTick(() => {
          this.$refs.marker.mapObject.openPopup();
        });
      } /* else if (oldStory.id === this.story.id) {
        this.$nextTick(() => {
          this.$refs.marker.mapObject.openPopup();
        });
      } */
    },
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    if (this.storyCurrent && this.storyCurrent.id === this.story.id) {
      this.setStoryCurrent(null);
    }
  },
};
</script>
<style lang="scss">
.map-popup-container .leaflet-popup-content {
  margin: 0 !important;
}
.map-popup-container .leaflet-popup-content-wrapper {
  background: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
  background-color: none !important;
}
</style>
