<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :icon="icon"
    :riseOnHover="true"
    ref="marker"
    v-on:click="toggleActiveStory(story)"
  >
  </l-marker>
</template>
<script>
import { LMarker, LIcon } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    LMarker,
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
        html: `<span class="marker-pin btn-fade bg-${
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
      toggleActiveStory: "toggleActiveStory",
      removeActiveStory: "removeActiveStory",
    }),
  },

  beforeDestroy() {
    this.removeActiveStory(this.story);
  },
};
</script>
<style lang="scss">
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-animation: fadein 0.8s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.8s; /* Firefox < 16 */
  -ms-animation: fadein 0.8s; /* Internet Explorer */
  -o-animation: fadein 0.8s; /* Opera < 12.1 */
  animation: fadein 0.8s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
