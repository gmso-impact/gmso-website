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
    <l-marker :lat-lng="latLng(story)" v-for="story in stories" :key="story.id">
      <l-popup>
        <div @click="innerClick">
          {{story.fields['Story Title']}}
          <p v-show="showParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec
            finibus semper metus id malesuada.
          </p>
        </div>
      </l-popup>
    </l-marker>
  </LMap>
</template>
<script>
//import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { latLng, Icon } from "leaflet";
import { mapGetters } from "vuex";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
  computed: {
    ...mapGetters({
      stories: "storyCurrent",
    }),
  },
  methods: {
    latLng(story) {
      const LAT = story.fields["LAT"] ? story.fields["LAT"] : 0;
      const LONG = story.fields["LONG"] ? story.fields["LONG"] : 0;
      return latLng(LAT, LONG);
    },
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
