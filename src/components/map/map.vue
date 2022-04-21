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
      <template v-if="!getBreakpoints.includes('all')">
        <StoryPopup
          :story="story"
          :key="`active-${story.id}`"
          v-for="story in storysActive"
        >
        </StoryPopup
        >>
      </template>

      <l-control-zoom position="topright"></l-control-zoom>

      <l-control-scale
        position="bottomleft"
        :imperial="true"
        :metric="true"
        class="d-xxl-none"
      ></l-control-scale>

      <l-control-zoom
        position="bottomleft"
        class="d-none d-xxl-block"
      ></l-control-zoom>
    </LMap>
    <div v-if="$route.name === 'Web'" class="boxy boxy-top childPoint">
      <!--<img src="GMSOtitle1.png" alt="CSU Impact" class="title-img" />-->
      <div class="breakpoint_testing text-white d-none">
        <h2 class="text-center">{{ getBreakpoints[0] }}</h2>
        <div class="text-center d-block d-sm-none">xs</div>
        <div class="text-center d-none d-sm-block d-md-none">sm</div>
        <div class="text-center d-none d-md-block d-lg-none">md</div>
        <div class="text-center d-none d-lg-block d-xl-none">lg</div>
        <div class="text-center d-none d-xl-block d-xxl-none">xl</div>
        <div class="text-center d-none d-xxl-block">xxl</div>
      </div>
    </div>
    <div class="boxy boxy-left childPoint"></div>
    <div v-if="false" class="boxy boxy-bottom-right childPoint"></div>
    <OverlayStory></OverlayStory>
    <OverlayVideo></OverlayVideo>
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

import { vectorBasemapLayer } from "esri-leaflet-vector";
import mapboxgl from "mapbox-gl";
window.mapboxgl = mapboxgl; // mapbox-gl-leaflet expects this to be global, used for esri-leaflet-vector

import { mapGetters, mapMutations } from "vuex";
import OverlayStory from "../overlay/story.vue";
import OverlayVideo from "../overlay/video.vue";

import MapMarker from "./marker.vue";
import StoryPopup from "./popup.vue";

const apikey =
  "AAPKe8703a4175054ac3889b842bf857718c409C8-fzy-AeUOEUBrtaVp58HPUQNYkY-7wdxs2A12BPW5ibofrUSrddntQsjnyp";

export default {
  name: "Map",
  components: {
    LMap,
    //  LTileLayer,
    MapMarker,
    StoryPopup,
    OverlayStory,
    OverlayVideo,
    LControlZoom,
    LControlScale,
  },
  // list of basemaps
  // https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/#default-basemap-styles
  // custom styles
  // https://developers.arcgis.com/documentation/mapping-apis-and-services/visualization/basemap-styles/
  data() {
    return {
      //url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      basemap: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey }),
      //basemapOld: basemapLayer("DarkGray", { apikey }),
      //basemapNew: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey, }),
      apikey: apikey,
      storyLayerEsriObject: null,
      mapOptions: {
        preferCanvas: true,
        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 12,
        minZoom: 2,
        zoomControl: false,
      },
      showMap: true,
      bounds: null,
    };
  },
  computed: {
    ...mapGetters({
      stories: "storyFiltered",
      storysActive: "storysActive",
      zoom: "mapGetZoomNew",
      center: "mapGetCenterNew",
      mapGetBoundsNew: "mapGetBoundsNew",
      storyLayer: "storyLayer",
      getBreakpoints: "getBreakpoints",
    }),
  },
  methods: {
    ...mapMutations([
      "mapSetZoomCurrent",
      "mapSetCenterCurrent",
      "mapSetBoundsCurrent",
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
      if (newLayer) {
        this.storyLayerEsriObject = featureLayer({
          url: newLayer,
          apikey: this.apikey,
          simplifyFactor: 0.1,
          fetchAllFeatures: false,
          cacheLayers: false,
          minZoom: 6,
          pointToLayer: function (geojson, latlng) {
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
