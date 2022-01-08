<template>
  <div id="app" class="d-flex flex-column h-100">
    <div id="header" class="bg-light">Header</div>
    <div class="h-100 d-flex flex-row">
      <div class="left col-md-6 col-lg-4 bg-secondary">
        <StoryList></StoryList>
      </div>
      <div class="right col-md-6 col-lg-8"><Map></Map></div>
    </div>
    <div id="footer" class="footer bg-dark">Footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoryList from "./components/storyList/storyList.vue";
import Map from "./components/map/map.vue";

@Component({
  components: {
    StoryList,
    Map,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
