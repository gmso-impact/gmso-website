<template lang="">
  <div class="h-100 w-100 position-relative">
    <LMap
      class="h-100 w-100"
      v-if="showMap"
      :options="mapOptions"
      :zoom="zoom"
      :center="center"
      :bounds="bounds"
      @update:bounds="mapSetBounds"
      
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <MapMarker :story="story" :key="story.id" v-for="story in stories"></MapMarker>
    </LMap>
    <div class="boxy">
      <Controls></Controls>
    </div>
  </div>
</template>
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LIcon } from "vue2-leaflet";
import { latLng, divIcon } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import Controls from "../controls/controlsLeft.vue";
import MapMarker from "./marker.vue";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    Controls,
    MapMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: latLng(7, 0),
      bounds: null,
      mapOptions: {
        zoomSnap: 0.5,
        worldCopyJump: true,
      },
      showMap: true,
    };
  },
  computed: {
    ...mapGetters({
      stories: "storyCurrent",
      zoom: "mapGetZoom",
    }),
  },
  methods: {
    ...mapMutations(["mapSetZoom", "mapSetCenter", "mapSetBounds"]),
  },
};
</script>
<style lang="scss">
.boxy {
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  left: 1rem;
  z-index: 999;
}
</style>
