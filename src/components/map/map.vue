<template lang="">
  <div class="h-100 w-100 position-relative bg-map-dark">
    <LMap
      id="main-map"
      class="h-100 w-100"
      v-if="showMap"
      :options="mapOptions"
      :bounds="bounds"
      @update:zoom="mapSetZoomCurrent"
      @update:center="mapSetCenterCurrent"
      @update:bounds="mapSetBoundsCurrent"
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
        class="d-none d-xxl-block"
      ></l-control-scale>
      <l-control-zoom
        position="bottomleft"
        class="d-none d-xxl-block"
      ></l-control-zoom>
    </LMap>
    <div class="boxy boxy-top childPoint">
      <img
        src="GMSOtitle1.png"
        alt="CSU Impact"
        class="title-img"
        v-on:click="toggleVideoFrame"
      />
    </div>
    <div class="boxy boxy-left childPoint">
      <ThemeColumn></ThemeColumn>
    </div>
    <div class="boxy boxy-right d-none d-xxl-block childPoint">
      <ThemeColumn></ThemeColumn>
    </div>
    <div class="boxy boxy-bottom-right childPoint">
      <img
        src="Geo.png"
        class="geo-img"
        v-on:click="toggleVideoFrame"
        alt="Click to watch the intro video"
      />
    </div>
    <StoryIFrame></StoryIFrame>
    <VideoFrame></VideoFrame>
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
import { latLng, latLngBounds, divIcon, circleMarker } from "leaflet";
import { basemapLayer, featureLayer } from "esri-leaflet";

import { mapGetters, mapMutations } from "vuex";
import StoryIFrame from "../storyIFrame/storyIFrame.vue";
import VideoFrame from "../videoFrame/videoFrame.vue";

import ThemeColumn from "../controls/themeColumn.vue";
import MapMarker from "./marker.vue";
const apikey =
  "AAPKe8703a4175054ac3889b842bf857718c409C8-fzy-AeUOEUBrtaVp58HPUQNYkY-7wdxs2A12BPW5ibofrUSrddntQsjnyp";

export default {
  name: "Map",
  components: {
    LMap,
    //  LTileLayer,
    ThemeColumn,
    MapMarker,
    StoryIFrame,
    VideoFrame,
    LControlZoom,
    LControlScale,
  },
  data() {
    return {
      //url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      basemap: basemapLayer("DarkGray", { apikey }),
      apikey: apikey,
      storyLayerEsriObject: null,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        preferCanvas: true,
        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 12,
        minZoom: 2,
        maxBounds: latLngBounds(latLng(110, -200), latLng(-75, 200)),
        zoomControl: false,
      },
      showMap: true,
      bounds: null,
    };
  },
  computed: {
    ...mapGetters({
      stories: "storyFiltered",
      zoom: "mapGetZoomNew",
      center: "mapGetCenterNew",
      mapGetBoundsNew: "mapGetBoundsNew",
      storyLayer: "storyLayer",
    }),
  },
  methods: {
    ...mapMutations([
      "mapSetZoomCurrent",
      "mapSetCenterCurrent",
      "mapSetBoundsCurrent",
      "toggleVideoFrame",
    ]),
  },
  mounted() {
    this.$refs.map.mapObject.addLayer(this.basemap);
    this.$refs.map.mapObject.flyToBounds(this.mapGetBoundsNew.bounds, {
      duration: 6,
    });
  },
  watch: {
    mapGetBoundsNew: function (newObject) {
      this.$nextTick(() => {
        console.log("mapGetBoundsNew watcher");
        this.$refs.map.mapObject.flyToBounds(newObject.bounds, {
          duration: newObject.duration,
        });
      });
    },
    basemap: function (newBaseMap, oldBaseMap) {
      this.$refs.map.mapObject.removeLayer(oldBaseMap);
      this.$refs.map.mapObject.addLayer(newBaseMap);
    },
    storyLayer: function (newLayer, oldLayer) {
      // remove old layer whenever a new story is selected
      if (this.storyLayerEsriObject && newLayer) {
        this.$nextTick(() => {
          this.$refs.map.mapObject.removeLayer(this.storyLayerEsriObject);
        });
      }
      console.log("im here");
      if (newLayer) {
        this.storyLayerEsriObject = featureLayer({
          url: newLayer,
          apikey: this.apikey,
          simplifyFactor: 0.1,
          fetchAllFeatures: false,
          cacheLayers: false,
          minZoom: 6,
          pointToLayer: function (geojson, latlng) {
            console.log("im here");

            return circleMarker(latlng);
          },
        });
        this.$nextTick(() => {
          this.$refs.map.mapObject.addLayer(this.storyLayerEsriObject);
        });
      }
    },
  },
};
</script>
<style lang="scss"></style>
