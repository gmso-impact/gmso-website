<template>
  <div class="d-flex flex-column h-100 bg-carbon">
    <KioskOverlay v-if="true"></KioskOverlay>
    <div
      id="header"
      v-if="$route.name === 'Web'"
      class="d-none d-lg-block text-center border-bottom border-slate py-3"
    >
      <!--<h2 class="mb-0">Header</h2>-->
      <img
        src="impact_white.svg"
        alt="CSU Impact"
        class="title-img d-none d-md-inline-block"
        v-on:click="toggleHelpFrame"
      />
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-2 col-xl-3 col-xxl-3">
        <StoryListMap></StoryListMap>
      </div>
      <div
        class="d-none d-lg-block d-xxl-none h-100 col-2 col-xl-1 col-xl-1 border-right border-slate"
      >
        <ControlGroup></ControlGroup>
      </div>
      <div class="d-none d-xxl-block h-100 col-2 border-right border-slate">
        <ControlGroupXXL></ControlGroupXXL>
      </div>
      <div class="right col-12 col-lg-8 col-xl-8 col-xxl-7">
        <Map></Map>
      </div>
    </div>
    <div
      id="footer"
      v-if="false"
      class="footer bg-charcoal text-center text-secondary px-3"
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
import ControlGroupXXL from "@/components/controls/controlGroupXXL.vue";

import KioskOverlay from "@/components/kioskOverlay/index.vue";
import { mapMutations } from "vuex";

export default {
  name: "Main",
  components: {
    StoryListMap,
    Map,
    ControlGroup,
    ControlGroupXXL,
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
