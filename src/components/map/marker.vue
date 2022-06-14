<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :riseOnHover="true"
    ref="marker"
    v-on:click="toggleActiveStory(story)"
  >
    <l-icon :icon-anchor="iconAnchor" v-if="false && getBreakpoints[0] !== 'xxl'">

        <div class='bg-white iconSize'>
          <div>Hello</div>
        </div>
    </l-icon>
    <l-icon :icon-anchor="iconAnchor" v-else>
      <span class="marker-pin btn-fade" :class="smallMarkerClass"></span>
    </l-icon>
  </l-marker>
</template>
<script>
import { LMarker, LIcon } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    LMarker,
    LIcon,
  },
  data() {
    return {
      test: null,
      iconAnchor: [0, 24],
      labelAnchor: [-6, 0],
      popupAnchor: [0, -36],
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
      isStoryActive: "isStoryActive",
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
        } ${this.isStoryActive(this.story.id) ? "active" : ""}"/>`,
      });
      return icon;
    },
    smallMarkerClass: function () {
      return this.story.fields["Story Theme"]
        ? `bg-${this.story.fields["Story Theme"]}`
        : "bg-white";
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

.iconSize {
    width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
