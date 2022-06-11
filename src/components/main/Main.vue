<template>
  <div class="d-flex flex-column h-100">
      <KioskOverlay></KioskOverlay>
    <div
      id="header"
      v-if="$route.name === 'Web'"
      class="d-none d-lg-block carbon text-center border-bottom"
    >
      <!--<h2 class="mb-0">Header</h2>-->
      <img
        src="GMSOtitle1.png"
        alt="CSU Impact"
        class="title-img d-none d-md-inline-block"
        v-on:click="toggleHelpFrame"
      />
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-3 col-xxl-3">
        <StoryListMap></StoryListMap>
      </div>
      <div
        class="middle d-none d-lg-block carbon h-100 p-2 p-xxl-1 border-left border-right border-map-light"
        :class="{
          'col-lg-1': $route.name === 'Web',
          'col-lg-2': $route.name === 'Kiosk',
          'col-xxl-1': true,
        }"
      >
        <ControlGroup></ControlGroup>
      </div>
      <div
        class="right col-12 col-xxl-8"
        :class="{
          'col-lg-8': $route.name === 'Web',
          'col-lg-7': $route.name === 'Kiosk',
        }"
      >
        <Map></Map>
      </div>
    </div>
    <div
      id="footer"
      v-if="false"
      class="footer bg-dark text-center text-secondary px-3"
    >
      <ThemeBottom></ThemeBottom>
    </div>

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import StoryListMap from "@/components/storyList/storyListMap.vue";
import Map from "@/components/map/map.vue";
import ControlGroup from "@/components/controls/controlGroup.vue";
import KioskOverlay from "@/components/kioskOverlay/index.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    StoryListMap,
    Map,
    ControlGroup,
    KioskOverlay,
  },
  methods: {
    ...mapMutations({
      clickCloseHelpFrame: "closeHelpFrame",
      toggleHelpFrame: "toggleHelpFrame",
    }),
  },
};
</script>
