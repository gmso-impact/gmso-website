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
      <l-marker
        :lat-lng="latLng(story)"
        v-for="story in stories"
        :key="story.id"
        :icon="icon(story)"
      >
        <l-popup>
          <div @click="innerClick">
            {{ story.fields["Story Title"] }}
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </LMap>
    <div class="boxy">
      <Controls></Controls>
    </div>
  </div>
</template>
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
import { latLng, divIcon } from "leaflet";
import { mapGetters, mapMutations } from "vuex";
import Controls from "../controls/controlsLeft.vue";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Controls,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(7, 0),
      withTooltip: latLng(47.41422, -1.250482),
      center: latLng(7, 0),
      bounds: null,

      showParagraph: false,
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
      zoom: "mapGetZoom"
    }),
  },
  methods: {
    ...mapMutations(["mapSetZoom", "mapSetCenter", "mapSetBounds"]),
    latLng(story) {
      const LAT = story.fields["LAT"] ? story.fields["LAT"] : 0;
      const LONG = story.fields["LONG"] ? story.fields["LONG"] : 0;
      return latLng(LAT, LONG);
    },
    icon(story) {
      const icon = divIcon({
        className: "",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span class="marker-pin bg-${
          story.fields["Story Theme"] ?? "white"
        }"/>`,
      });
      return icon;
    },

    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
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
.marker-pin {
  background: white;
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1rem;
  top: -1rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1.5px solid #ffffff;
}

// to align icon
.custom-div-icon i {
}
</style>
