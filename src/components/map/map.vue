<template lang="">
  <LMap
    class="h-100 w-100"
    v-if="showMap"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: 80%"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-marker :lat-lng="withPopup">
      <l-popup>
        <div @click="innerClick">
          I am a popup
          <p v-show="showParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec
            finibus semper metus id malesuada.
          </p>
        </div>
      </l-popup>
    </l-marker>
    <l-marker :lat-lng="withTooltip">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div @click="innerClick">
          I am a tooltip
          <p v-show="showParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec
            finibus semper metus id malesuada.
          </p>
        </div>
      </l-tooltip>
    </l-marker>
  </LMap>
</template>
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  name: "MyAwesomeMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      zoom: 3,
      center: latLng(7, 0),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(7, 0),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 3,
      currentCenter: latLng(7, 0),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
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
<style lang=""></style>
