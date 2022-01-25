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
      ref="map"
    >
      <MapMarker
        :story="story"
        :key="story.id"
        v-for="story in stories"
      ></MapMarker>
      <l-control-scale
        position="topright"
        :imperial="true"
        :metric="true"
      ></l-control-scale>
      <l-control-zoom position="topright"></l-control-zoom>

      <l-control-scale
        position="bottomleft"
        :imperial="true"
        :metric="true"
      ></l-control-scale>
      <l-control-zoom position="bottomleft" class="d-none d-xxl-block"></l-control-zoom>
    </LMap>
    <div class="boxy-left">
      <ThemeColumn></ThemeColumn>
    </div>
    <div class="boxy-right d-none d-xxl-block">
      <ThemeColumn></ThemeColumn>
    </div>
    <StoryFrame></StoryFrame>
  </div>
</template>
<script>
//import L from 'leaflet';
import {
  LMap,
 // LTileLayer,
  LIcon,
  LControlZoom,
  LControlScale,
} from "vue2-leaflet";
import { latLng, latLngBounds, divIcon } from "leaflet";
import { basemapLayer } from 'esri-leaflet'

import { mapGetters, mapMutations } from "vuex";
import StoryFrame from "/src/components/storyFrame/storyFrame.vue";
import ThemeColumn from "/src/components/controls/themeColumn.vue";
import MapMarker from "./marker.vue";

export default {
  name: "Map",
  components: {
    LMap,
  //  LTileLayer,
    ThemeColumn,
    MapMarker,
    StoryFrame,
    LControlZoom,
    LControlScale,
  },
  data() {
    return {
      //url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      basemap: basemapLayer('DarkGray'),
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 10,
        minZoom: 2,
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
      storyCurrent: "storyCurrent",
    }),
  },
  methods: {
    ...mapMutations(["mapSetZoom", "mapSetCenter", "mapSetBounds"]),
  },
  mounted(){
    this.$refs.map.mapObject.addLayer(this.basemap);

  },
  watch: {
    basemap: function(newBaseMap, oldBaseMap){
    this.$refs.map.mapObject.removeLayer(oldBaseMap);
    this.$refs.map.mapObject.addLayer(newBaseMap);
    },
    storyCurrent: function (newStory, oldStory) {
      if (newStory !== null) {
        this.$nextTick(() => {
          // this.$refs.map.mapObject.setZoom(5);
        });
      } else {
        this.$nextTick(() => {
          // this.$refs.map.mapObject.setZoom(3);
        });
      }
    },
  },
};
</script>
<style lang="scss">
.boxy-left {
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  left: 1rem;
  z-index: 999;
}
.boxy-right {
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  right: 1rem;
  z-index: 999;
}
</style>
