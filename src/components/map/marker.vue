<template lang="">
  <l-marker :lat-lng="latLngObj" :key="story.id" :icon="icon" ref="marker">
    <l-popup :options="options" ref="popup">
      <div class="card shadow-lg" >
        <div class="card-header font-weight-bold">
          {{ story.fields["Story Title"] }}
        </div>
        <div class="card-body">
          {{this.story.fields["Research Blurb"]}}
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-dark" v-on:click="clickClose">
            <font-awesome-icon :icon="['fas', 'times']" />
Close
          </button>
          <button class="btn" :class="`btn-${story.fields['Story Theme']}`" v-on:click="clickReadMore">
                        <font-awesome-icon :icon="['fas', 'book']" />
 Read More
          </button>
        </div>
      </div>
    </l-popup>
  </l-marker>
</template>
<script>
import { LMarker, LPopup, LIcon } from "vue2-leaflet";
import { latLng, divIcon } from "leaflet";

export default {
  components: {
    LMarker,
    LPopup,
  },
  data() {
    return {
      options: {
        keepInView: true,
        autoClose: true,
        closeOnClick: true,
        className: "map-popup-container",
      },
    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    latLngObj: function () {
      return latLng(this.story.fields["LAT"], this.story.fields["LONG"]);
    },
    icon: function () {
      const icon = divIcon({
        className: "",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span class="marker-pin bg-${
          this.story.fields["Story Theme"] ?? "white"
        }"/>`,
      });
      return icon;
    },
  },
  methods: {
    clickClose: function () {
      this.$nextTick(() => {
        console.log("im here");
        this.$refs.marker.mapObject.closePopup();
      });
    },
    clickReadMore: function () {
      this.$nextTick(() => {
        console.log("im here");
        this.$refs.marker.mapObject.closePopup();
      });
    },
  },
};
</script>
<style lang="scss">
.map-popup-container .leaflet-popup-content {
  margin: 0 !important;
}
.map-popup-container .leaflet-popup-content-wrapper {
  background: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
  background-color: none !important;
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
</style>
