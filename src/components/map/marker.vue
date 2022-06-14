<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :riseOnHover="true"
    ref="marker"
    v-on:click="toggleActiveStory(story)"
  >
    <Transition-group name="markerImg" appear>
      <l-icon :icon-anchor="iconAnchor" key='img' v-if="getBreakpoints[0] === 'xxl' && mapGetZoom > 6.5">
        <div class="marker-img d-flex flex-column" :class='`border-${this.story.fields["Story Theme"]} bg-${this.story.fields["Story Theme"]}`'>
          <img
            v-if="
              story.fields['Story Card Image'] &&
              story.fields['Story Card Image'][0] &&
              story.fields['Story Card Image'][0].thumbnails
            "
            :src="story.fields['Story Card Image'][0].thumbnails.large.url"
            class="w-100"
            alt="Card image cap"
          />
        </div>
      </l-icon>
      <l-icon :icon-anchor="iconAnchor" key='pin' v-else>
        <span class="marker-pin btn-fade" :class="smallMarkerClass"></span>
      </l-icon>
    </Transition-group>
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
      mapGetZoom: "mapGetZoom",
    }),
    latLngObj: function () {
      return latLng(this.story.fields["LAT"], this.story.fields["LONG"]);
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


.markerImg-enter-active {
  transition: all 0.6s ease-out;
}

.markerImg-leave-active {
  transition: all 1.8s ease-in;
}

.markerImg-enter-from,
.markerImg-leave-to {
  opacity: 0;
}
</style>
