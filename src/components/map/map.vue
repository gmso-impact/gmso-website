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

      <l-control position="topright">
        <MapLayers></MapLayers>
      </l-control>
      <l-control-zoom position="topright"></l-control-zoom>

      <l-control-scale
        position="bottomleft"
        :imperial="true"
        :metric="true"
        :maxWidth="getBreakpoints.includes('xxl') ? 1000 : 200"
        v-if="true"
      ></l-control-scale>

      <l-control position="bottomleft" v-if="getBreakpoints.includes('xxl')">
        <MapLayers></MapLayers>
      </l-control>

      <l-control-zoom
        position="bottomleft"
        v-if="getBreakpoints.includes('xxl')"
      ></l-control-zoom>
    </LMap>
    <div v-if="$route.name === 'Web'" class="boxy boxy-top childPoint">
      <img
        src="impact_white.svg"
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
        <div class="text-center d-none d-xxl-block d-xxxl-none">xxl</div>
        <div class="text-center d-none d-xxxl-block">xxxl</div>
      </div>
    </div>
    <div class="boxy boxy-left childPoint"></div>
    <div class="boxy boxy-bottom childPoint">
      <div class="btn-group d-block d-lg-none">
        <button
          class="btn btn-light border-right"
          v-on:click="openStoriesFrame()"
          :aria-label="$t(`Stories`)"
        >
          <font-awesome-icon :icon="['fas', 'globe']" />
          {{ $t(`Stories`) }}
        </button>
        <button
          class="btn btn-light"
          v-on:click="openFilterFrame()"
          :aria-label="$t(`Filter`)"
        >
          <font-awesome-icon :icon="['fas', 'filter']" />
          {{ $t(`Filter`) }}
        </button>
      </div>
    </div>
    <HelpMap v-if="isInactive"></HelpMap>
    <OverlayHelp></OverlayHelp>
    <OverlayVideo
      v-if="
        isVideoFrameOpen &&
        (this.$route.name !== 'Kiosk' || getBreakpoints.includes('xxl'))
      "
    ></OverlayVideo>
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
  LControl,
  LControlZoom,
  LControlScale,
} from "vue2-leaflet";
import { latLng, circleMarker } from "leaflet";
import { featureLayer } from "esri-leaflet";

import { vectorBasemapLayer } from "esri-leaflet-vector";

// import * as basemapStyle from "./basemapStyle/DarkGrayBaseTinted.json";

// const getBasemapStyle = function (defaultStyle) {
//   console.log("getBasemapStyle");
//   return basemapStyle;
// };

import { mapGetters, mapMutations } from "vuex";
import OverlayStory from "../overlay/story.vue";
import OverlayVideo from "../overlay/video.vue";
import OverlayHelp from "../overlay/help.vue";
import OverlayFilter from "../overlay/filter.vue";
import OverlayStories from "../overlay/stories.vue";
import HelpMap from "./help/index.vue";

import MapLayers from "./mapLayers.vue";
import MapMarker from "./marker.vue";
import StoryPopup from "./popup.vue";

import { viewPorts } from "@/store/map";
import cssColors from "@/helper/colors.ts";

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
    HelpMap,
    LControl,
    LControlZoom,
    LControlScale,
    MapLayers,
  },

  data() {
    return {
      apikey: apikey,
      storyLayerEsriObject: null,
      storyLayerId: null,
      baseMapLayer: null,
      mapOptions: {
        preferCanvas: true,
        zoomSnap: 0.1,
        worldCopyJump: true,
        zoomDelta: 0.5,
        maxZoom: 10, // town
        zoomControl: false,
        closePopupOnClick: false,
      },
      center: viewPorts.colorado.center, // initial map center before load
      zoom: viewPorts.colorado.zoom,
    };
  },
  computed: {
    ...mapGetters({
      baseMap: "mapGetBaseMap",
      stories: "storyFiltered",
      storysActive: "storysActive",
      mapNewView: "mapNewView",
      storyLayer: "storyLayer",
      getBreakpoints: "getBreakpoints",
      isVideoFrameOpen: "isVideoFrameOpen",
      isInactive: "isInactive",
    }),
    minZoom: function () {
      // 0 = globe
      // 12 = townwn
      // 18 = building
      const minZoomList = {
        xs: 2.1,
        sm: 2.4,
        md: 2.4,
        lg: 2.2,
        xl: 2.8,
        xxl: 3.7,
        xxxl: 3.7, // 4.3 for no world copy
      };
      return minZoomList[this.getBreakpoints[0]];
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
        latLng: latLng(-0.8135, -42),
        zoom: 4.2,
      },
      xxxl: {
        latLng: latLng(-0.8135, 5.175),
        zoom: 4.2,
      },
    };
    console.log();
    this.baseMapLayer = vectorBasemapLayer(this.baseMap.layer, {
      apikey: this.apikey,
    });
    this.$refs.map.mapObject.addLayer(this.baseMapLayer);
    // there is an issue with the map if it has not ever zoomed
    this.$refs.map.mapObject.setView(
      initialView[this.getBreakpoints[0]].latLng,
      initialView[this.getBreakpoints[0]].zoom,
      {
        duration: 0,
        animate: false,
      },
    );
  },
  watch: {
    isInactive: function (isInactiveValue) {
      if (isInactiveValue == false) {
        console.log("stop");
        this.$refs.map.mapObject.stop();
      }
    },
    mapNewView: function (newObject) {
      this.$nextTick(() => {
        //console.log("mapNewView watcher");
        this.$refs.map.mapObject.flyTo(newObject.center, newObject.zoom, {
          duration: newObject.duration,
        });
      });
    },
    baseMap: function (newBaseMap) {
      const newBaseMapLayer = vectorBasemapLayer(newBaseMap.layer, {
        apikey: this.apikey,
      });
      this.$refs.map.mapObject.addLayer(newBaseMapLayer);
      //this.$refs.map.mapObject.removeLayer(this.baseMapLayer);
      this.baseMapLayer.remove();
      this.baseMapLayer = newBaseMapLayer;
    },
    storyLayer: function (newStory) {
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
        // eslint-disable-next-line
        let layer = featureLayer({
          url: newStory.fields["Impact Map Layer URL"],
          apikey: this.apikey,
          simplifyFactor: 0.1,
          fetchAllFeatures: false,
          cacheLayers: true,
          minZoom: 0, // zoom level to show layer at, 0 = world
          style: (feature) => {
            // console.log(feature);
            let color = "#ffffff";
            if (cssColors[newStory.fields["Story Theme"]]) {
              color = cssColors[newStory.fields["Story Theme"]];
            }
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
          if (!style) {
            return;
          }
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
