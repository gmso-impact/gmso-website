<template lang="">
  <div class="h-100 w-100 position-relative">
    <LMap
      id="main-map"
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
      <l-control-zoom
        position="bottomleft"
        class="d-none d-xxl-block"
      ></l-control-zoom>
    </LMap>
    <div class="boxy-top childPoint">
      <img
        src="GMSOtitle1.png"
        alt="CSU Impact"
        class="title-img"
        v-on:click="toggleVideoFrame"
      />
    </div>
    <div class="boxy-left childPoint">
      <ThemeColumn></ThemeColumn>
    </div>
    <div class="boxy-right d-none d-xxl-block childPoint">
      <ThemeColumn></ThemeColumn>
    </div>
    <div class="boxy-bottom-right childPoint">
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
      basemap: basemapLayer("DarkGray"),
      storyLayerEsriObject: null,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        //preferCanvas: true,

        zoomSnap: 0.5,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 12,
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
      storyLayer: "storyLayer",
    }),
  },
  methods: {
    ...mapMutations([
      "mapSetZoom",
      "mapSetCenter",
      "mapSetBounds",
      "toggleVideoFrame",
    ]),
  },
  mounted() {
    this.$refs.map.mapObject.addLayer(this.basemap);
  },
  watch: {
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
<style lang="scss">
#main-map {
  z-index: 0;
}
.boxy-left {
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  left: 3rem;
  z-index: 999;
}
.boxy-right {
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  right: 3rem;
  z-index: 999;
}
.boxy-bottom-right {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  z-index: 999;
}
.boxy-top {
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
}
.geo-img {
  width: 200px;
  cursor: help;
}
.geo-img:hover {
  filter: drop-shadow(0px 0px 2px #ffffff);
}
.title-img {
  max-width: 200px;
  cursor: help;
}
.title-img:hover {
  filter: drop-shadow(0px 0px 2px #ffffff);
}
</style>
