<template>
  <div id="app" class="d-flex flex-column h-100">
    <div id="header" v-if="false"  class="bg-light text-center"><h1 class='mb-0'>Header</h1></div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden no-gutters">
      <div class="left col-md-6 col-lg-4 bg-secondary">
        <StoryList></StoryList>
      </div>
      <div class="right col-md-6 col-lg-8"><Map></Map></div>
    </div>
    <div id="footer" v-if="false" class="footer bg-dark text-center text-secondary px-3"><ThemeBottom></ThemeBottom></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoryList from "./components/storyList/storyList.vue";
import Map from "./components/map/map.vue";
import ThemeBottom from "./components/controls/themeBottom.vue";


@Component({
  components: {
    StoryList,
    Map,
    ThemeBottom,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@use "sass:map";
</style>
