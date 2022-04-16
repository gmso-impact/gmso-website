<template>
  <div class="d-flex flex-column h-100">
    <div
      id="header"
      v-if="$route.name === 'Web'"
      class="d-none d-md-block carbon text-center border-bottom"
    >
      <!--<h2 class="mb-0">Header</h2>-->
      <img src="GMSOtitle1.png" alt="CSU Impact" class="title-img" />
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters h-100">
      <div class="left d-none d-lg-block col-lg-3 col-xxl-3">
        <StoryList></StoryList>
      </div>
      <div
        class="right d-none d-lg-block col-lg-2 col-xxl-2 carbon h-100 p-2 p-xxl-4 border-left border-right border-map-light"
      >
        <ControlGroup></ControlGroup>
      </div>
      <div class="right col-12 col-lg-7 col-xxl-7"><Map></Map></div>
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
import StoryList from "@/components/storyList/storyList.vue";
import Map from "@/components/map/map.vue";
import ControlGroup from "@/components/controls/controlGroup.vue";

export default {
  name: "Main",
  components: {
    StoryList,
    Map,
    ControlGroup,
  },
};
</script>
