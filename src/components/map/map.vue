<template lang="">
  <div class="h-100 w-100 position-relative bg-map-dark">
    <LMap
      id="main-map"
      class="h-100 w-100"
      :options="mapOptions"
      :minZoom="minZoom"
      :center="center"
      :zoom="zoom"
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
      <template v-if="getBreakpoints.includes('xxl')">
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
        v-if="true"
      ></l-control-scale>

      <l-control-zoom
        position="bottomleft"
        v-if="getBreakpoints.includes('xxl')"
      ></l-control-zoom>
    </LMap>
    <div v-if="$route.name === 'Web'" class="boxy boxy-top childPoint">
      <img
        src="GMSOtitle1.png"
        alt="CSU Impact"
        class="title-img d-lg-none"
        v-on:click="toggleHelpFrame"
      />
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
    <div class="boxy boxy-bottom childPoint">
      <div class="btn-group d-block d-lg-none">
        <button
          class="btn btn-light border-right"
          v-on:click="openStoriesFrame()"
        >
          <font-awesome-icon :icon="['fas', 'globe']" />
          {{ $t(`Stories`) }}
        </button>
        <button class="btn btn-light" v-on:click="openFilterFrame()">
          <font-awesome-icon :icon="['fas', 'filter']" />
          {{ $t(`Filter`) }}
        </button>
      </div>
    </div>
    <OverlayHelp></OverlayHelp>

    <OverlayVideo></OverlayVideo>
    <OverlayFilter></OverlayFilter>
    <OverlayStories></OverlayStories>
    <OverlayStory
      :story="storysActive[0]"
      v-if="storysActive.length > 0 && !getBreakpoints.includes('xxl')"
    ></OverlayStory>
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
import {
  latLng,
  latLngBounds,
  divIcon,
  circleMarker,
  icon,
  marker,
} from "leaflet";
import { basemapLayer, featureLayer } from "esri-leaflet";

import { vectorBasemapLayer } from "esri-leaflet-vector";

import * as basemapStyle from "./basemapStyle/DarkGrayBaseTinted.json";

const getBasemapStyle = function (defaultStyle) {
  console.log("getBasemapStyle");
  return basemapStyle;
};

import mapboxgl from "mapbox-gl";
window.mapboxgl = mapboxgl; // mapbox-gl-leaflet expects this to be global, used for esri-leaflet-vector

import { mapGetters, mapMutations } from "vuex";
import OverlayStory from "../overlay/story.vue";
import OverlayVideo from "../overlay/video.vue";
import OverlayHelp from "../overlay/help.vue";
import OverlayFilter from "../overlay/filter.vue";
import OverlayStories from "../overlay/stories.vue";

import MapMarker from "./marker.vue";
import StoryPopup from "./popup.vue";

import { maps } from "@/store/map";
import cssColors from "@/scss/variables.scss";

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
    OverlayHelp,
    OverlayStories,
    OverlayFilter,
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
      // custom basemap can be modified here: https://developers.arcgis.com/vector-tile-style-editor/fe3c8d5151de424bb25ad0655ca6c080/json
      //customBasemap: vectorBasemapLayer("fe3c8d5151de424bb25ad0655ca6c080", { apikey: apikey }),
      basemap: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey }),
      //basemapDefault: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey, }),
      //basemapOld: basemapLayer("DarkGray", { apikey }),
      apikey: apikey,
      storyLayerEsriObject: null,
      storyLayerId: null,

      mapOptions: {
        preferCanvas: true,
        zoomSnap: 0.1,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 10, // town
        zoomControl: false,
        closePopupOnClick: false,
        attributionControl: false,
      },
      center: maps.colorado.center, // initial map center before load
      zoom: maps.colorado.zoom,
    };
  },
  computed: {
    ...mapGetters({
      stories: "storyFiltered",
      storysActive: "storysActive",
      mapGetBoundsNew: "mapGetBoundsNew",
      mapGetBoundsCurrent: "mapGetBoundsCurrent",
      storyLayer: "storyLayer",
      getBreakpoints: "getBreakpoints",
    }),
    minZoom: function () {
      return 0;
      /*const minZoomList = {
        xs: 2.1,
        sm: 2.4,
        md: 2.4,
        lg: 2.2,
        xl: 2.8,
        xxl: 3.7, // 4.3 for no world copy
      };
      return minZoomList[this.getBreakpoints[0]];*/
    },
  },
  methods: {
    ...mapMutations([
      "mapSetZoomCurrent",
      "mapSetCenterCurrent",
      "mapSetBoundsCurrent",
      "toggleHelpFrame",
      "openStoriesFrame",
      "openFilterFrame",
    ]),
  },
  mounted() {
    const initialView = {
      xs: {
        latLng: latLng(-5, -89.5),
        zoom: 2.1,
      },
      sm: {
        latLng: latLng(7, -27),
        zoom: 2,
      },
      md: {
        latLng: latLng(15, -42.2),
        zoom: 2.4,
      },
      lg: {
        latLng: latLng(7.4, -29.9),
        zoom: 2.2,
      },
      xl: {
        latLng: latLng(8.6, 13),
        zoom: 2.8,
      },
      xxl: {
        latLng: latLng(-1.6, 21.5),
        zoom: 4.3,
      },
    };
    this.$refs.map.mapObject.addLayer(this.basemap);
    // there is an issue with the map if it has not ever zoomed
    this.$refs.map.mapObject.setView(
      initialView[this.getBreakpoints[0]].latLng,
      initialView[this.getBreakpoints[0]].zoom,
      {
        duration: 0,
        animate: false,
      }
    );
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
    storyLayer: function (newStory, oldStory) {
      // remove old layer whenever a new story is selected
      console.log("setting new story layer");
      if (newStory && newStory.id === this.storyLayerId) {
        return;
      }

      if (this.storyLayerEsriObject) {
        this.$refs.map.mapObject.removeLayer(this.storyLayerEsriObject);
        this.storyLayerId = null;
      }
      if (newStory) {
        let layer = featureLayer({
          url: newStory.fields["Impact Map Layer URL"],
          apikey: this.apikey,
          simplifyFactor: 0.1,
          fetchAllFeatures: false,
          cacheLayers: true,
          minZoom: 0, // zoom level to show layer at, 0 = world
          style: (feature) => {
            console.log(feature);
            let color = cssColors[newStory.fields["Story Theme"]];
            return {
              color: color, //"#BA55D3",
              weight: 8,
            };
          },
        });

        // use metadata to set values
        layer.metadata((error, metadata) => {
          if (error) {
            return;
          }
          const style = metadata.drawingInfo.renderer.symbol;

          if (style.type === "esriPMS") {
            // they are points
            console.log({ stylePoints: { style } });

            layer.options.pointToLayer = (geojson, latlng) => {
              return circleMarker(latlng);
              // the following will show the icons from the origional feature layer
              // this function cannot be used above because if the feature layer is a polygon it throws an error.

              // return marker(latlng, {
              //   icon: icon({
              //     iconUrl: `data:${style.contentType};base64, ${style.imageData}`,
              //     iconSize:[style.height * 3, style.width * 3],
              //   })
              // })
              //);
            };
          } else if (style.type === "esriSFS") {
            // they are polygons
            console.log({ stylePolygon: { style } });

            // unfortunately, setting the style after the fact does not work
            // layer.options.style = (feature) => {
            //   let color = cssColors[newStory.fields["Story Theme"]];
            //   return {
            //     color: color, //"#BA55D3",
            //     weight: 100,
            //   };
            // };
          } else {
            console.log({ styleUnknown: { style } });
          }
          this.$nextTick(() => {
            this.storyLayerEsriObject = layer.addTo(this.$refs.map.mapObject);
            this.storyLayerId = newStory.id;
          });
        });
      }
    },
  },
};
</script>
<style lang="scss"></style>
