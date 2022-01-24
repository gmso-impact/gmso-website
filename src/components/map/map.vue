<template lang="">
  <div class="h-100 w-100 position-relative">
    <LMap
      class="h-100 w-100"
      v-if="showMap"
      :options="mapOptions"
      :bounds="bounds"
      @update:zoomZ="mapSetZoom"
      @update:centerZ="mapSetCenter"
      @update:bounds="mapSetBounds"
      
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <MapMarker :story="story" :key="story.id" v-for="story in stories"></MapMarker>
      <l-control-scale position="topright" :imperial="true" :metric="true"></l-control-scale>
      <l-control-zoom position="topright"  ></l-control-zoom>

      <l-control-scale position="bottomleft" :imperial="true" :metric="true"></l-control-scale>
      <l-control-zoom position="bottomleft"  ></l-control-zoom>

    </LMap>
    <div class="boxy">
      <ThemeColumn></ThemeColumn>
    </div>
  </div>
</template>
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LIcon, LControlZoom, LControlScale } from "vue2-leaflet";
import { latLng, latLngBounds, divIcon } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import ThemeColumn from "../controls/themeColumn.vue";
import MapMarker from "./marker.vue";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    ThemeColumn,
    MapMarker,
    LControlZoom,
    LControlScale,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 10,
        minZoom: 3,
        maxBounds: latLngBounds(latLng(90, -180), latLng(-75, 180)),
        zoomControl: false,

      },
      showMap: true,
    };
  },
  computed: {
    ...mapGetters({
      stories: "storyFiltered",
      zoom: "mapGetZoom",
      center: "mapGetCenter",
      bounds: "mapGetBounds",
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
