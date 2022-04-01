<template>
  <div
    class="d-flex flex-column h-100"
    v-on:click="setLastInteraction"
  >
    <div
      id="header"
      v-if="false"
      class="d-none d-md-block bg-light text-center"
    >
      <h1 class="mb-0">Header</h1>
    </div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters">
      <div class="left d-none d-lg-block col-lg-4 col-xxl-4">
        <StoryList></StoryList>
      </div>
      <div class="right col-12 col-lg-8 col-xxl-8"><Map></Map></div>
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
import ThemeBottom from "@/components/controls/themeBottom.vue";

export default {
  name: "Main",
  components: {
    StoryList,
    Map,
    ThemeBottom,
  },
};
</script>
