<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :icon="icon"
    ref="marker"
    v-on:click="clickMarker"
  >
    <l-popup :options="options" class="popup" ref="popup">
      <div class="card shadow">
        <img
          :src="story.fields['Pop-Up Card Image'][0].thumbnails.large.url"
          v-if="story.fields['Pop-Up Card Image']"
          class="card-img-top"
          :alt="story.fields['Story Title']"
        />
        <div class="card-header font-weight-bold">
          <h3 class="mb-0">{{ story.fields["Story Title"] }}</h3>
          <div>
            {{ this.story.fields["Tagline"] }}
          </div>
        </div>
        <div
          class="card-body story-blurb"
          v-if="this.story.fields['Pop-Up Card Content']"
        >
          {{ this.story.fields["Pop-Up Card Content"] }}
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-dark" v-on:click="clickClose">
            <font-awesome-icon :icon="['fas', 'times']" />
            Close
          </button>
          <button
            class="btn flex-fill ml-3"
            :class="`btn-${story.fields['Story Theme']}`"
            v-on:click="clickReadMore"
            v-if="story.fields['StoryMap VIEW Link']"
          >
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
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    LMarker,
    LPopup,
  },
  data() {
    return {
      options: {
        maxWidth: 1920,
        keepInView: false,
        autoClose: true,
        closeOnClick: false,
        className: "map-popup-container",
        autoPanPaddingTopLeft: [160, 20],
        autoPanPaddingBottomRight: [20, 20],
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
    ...mapGetters({
      storyCurrent: "storyCurrent",
    }),
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
        } ${
          this.storyCurrent && this.story.id === this.storyCurrent.id
            ? "active"
            : ""
        }"/>`,
      });
      return icon;
    },
  },
  methods: {
    ...mapMutations({
      setStoryCurrent: "setStoryCurrent",
      setStoryFrame: "setStoryFrame",
    }),
    clickMarker: function () {
      if (this.storyCurrent && this.storyCurrent.id === this.story.id) {
        this.setStoryCurrent(null);
      } else {
        this.setStoryCurrent(this.story);
      }
    },
    clickClose: function () {
      this.setStoryCurrent(null);
      this.$nextTick(() => {
        this.$refs.marker.mapObject.closePopup();
      });
    },
    clickReadMore: function () {
      this.$nextTick(() => {
        this.$refs.marker.mapObject.closePopup();
      });
      this.setStoryFrame(this.story);
    },
  },
  watch: {
    storyCurrent: function (newStory, oldStory) {
      if (newStory?.id === this.story.id) {
        this.$nextTick(() => {
          this.$refs.marker.mapObject.openPopup();
        });
      } else if (oldStory?.id === this.story.id) {
        this.$nextTick(() => {
          this.$refs.marker.mapObject.closePopup();
        });
      } 
    },
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    if (this.storyCurrent && this.storyCurrent.id === this.story.id) {
      this.setStoryCurrent(null);
    }
  },
};
</script>
<style lang="scss"></style>
