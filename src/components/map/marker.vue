<template lang="">
  <l-marker
    :lat-lng="latLngObj"
    :key="story.id"
    :riseOnHover="true"
    ref="marker"
    v-on:click="toggleActiveStory(story)"
  >
    <Transition-group name="markerImg" appear>
      <l-icon
        :icon-anchor="iconAnchor"
        key="img"
        v-if="false"
        :aria-label="storyTitle"
      >
        <div class="marker-img">
          <div class="marker-img-body">
            <img
              v-if="
                story.fields['Story Card Image'] &&
                story.fields['Story Card Image'][0] &&
                story.fields['Story Card Image'][0].thumbnails
              "
              :src="story.fields['Story Card Image'][0].thumbnails.large.url"
              class="w-100 content"
              :alt="storyTitle"
            />
          </div>
        </div>
      </l-icon>
      <l-icon
        :icon-anchor="iconAnchor"
        key="pin"
        v-else
        :aria-label="storyTitle"
      >
        <div
          class="marker-pin btn-fade d-flex justify-content-center align-items-center"
          :class="smallMarkerClass"
        >
          <font-awesome-icon
            class="featuredStoryMarker"
            :icon="['fas', 'star']"
            v-if="story.fields['featured']"
          />
        </div>
      </l-icon>
    </Transition-group>
  </l-marker>
</template>
<script>
import { LMarker, LIcon } from "vue2-leaflet";
import { latLng, divIcon, point } from "leaflet";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    LMarker,
    LIcon,
  },
  data() {
    return {
      test: null,
      iconAnchor: [0, 24],
      labelAnchor: [-6, 0],
      popupAnchor: [0, -36],
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
      isStoryActive: "isStoryActive",
      getBreakpoints: "getBreakpoints",
      mapGetZoom: "mapGetZoom",
      storyInMap: "storyInMap",
    }),
    latLngObj: function () {
      return latLng(this.story.fields["LAT"], this.story.fields["LONG"]);
    },
    smallMarkerClass: function () {
      return this.story.fields["Story Theme"]
        ? `bg-${this.story.fields["Story Theme"]}`
        : "bg-white";
    },
    storyTitle: function () {
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      } else {
        // default to english
        return this.story.fields["en-StoryTitle"];
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleActiveStory: "toggleActiveStory",
      removeActiveStory: "removeActiveStory",
    }),
  },

  beforeDestroy() {
    this.removeActiveStory(this.story);
  },
};
</script>
<style lang="scss">
.featuredStoryMarker {
  margin-top: -1px;
  transform: rotate(-45deg);
  color: #ffffff;
  animation-name: featuredStoryMarker;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
@keyframes featuredStoryMarker {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-animation: fadein 0.8s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.8s; /* Firefox < 16 */
  -ms-animation: fadein 0.8s; /* Internet Explorer */
  -o-animation: fadein 0.8s; /* Opera < 12.1 */
  animation: fadein 0.8s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.markerImg-enter-active {
  transition: all 0.6s ease-out;
}

.markerImg-leave-active {
  transition: all 1.8s ease-in;
}

.markerImg-enter-from,
.markerImg-leave-to {
  opacity: 0;
}

.marker-img-body {
  transform: rotateX(330deg) rotateY(0deg) rotateZ(0deg);
  //border: 1px solid white;

  box-shadow: rgba(255, 255, 255, 0.15) -3px 3px 200px 40px,
    rgba(0, 0, 0, 0.3) 0px 54px 55px, rgba(0, 0, 0, 0.2) 0px -12px 30px,
    rgba(0, 0, 0, 0.2) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 12px 13px,
    rgba(0, 0, 0, 0.2) 0px -3px 5px;
}
.marker-img-body:after {
  width: 100%;
  height: 5px;
  left: -2.5px;
  bottom: 0;
  transform: translatey(100%) skewx(-45deg);
  background: #ffffff;
}
.marker-img-body:before {
  width: 5px;
  height: 100%;
  left: 0;
  transform: translatex(-100%) skewy(-45deg);
  top: 2.5px;
  background: #aaaaaa;
}
.marker-img-body:after,
.marker-img-body:before {
  content: "";

  position: absolute;
}
</style>
