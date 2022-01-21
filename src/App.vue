<template>
  <div id="app" class="d-flex flex-column h-100">
    <div id="header" class="bg-light text-center"><h1 class='mb-0'>Header</h1></div>
    <div class="flex-grow-1 d-flex flex-row overflow-y-hidden">
      <div class="left col-md-6 col-lg-4 bg-secondary">
        <StoryList></StoryList>
      </div>
      <div class="right col-md-6 col-lg-8"><Map></Map></div>
    </div>
    <div id="footer" class="footer bg-dark text-center text-secondary">Footer</div>
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
@use "sass:map";
$colorsspur: (
  "orange": #ff5a01,
  "Health": #ff5a01,
  "Vida": #ff5a01,
  "lime": #b0f954,
  "Food": #b0f954,
  "Ag": #b0f954,
  "Terra": #b0f954,
  "skyBlue": #00e9ff,
  "Water": #00e9ff,
  "Hydro": #00e9ff,
  "charcoal": #323e48,
  "Institutional": #323e48,
  "Stories": #323e48,
  "yellow": #ffd62d,
  "Community": #ffd62d,
  "green": #00d48a,
  "Environment": #00d48a,
  "blue": #0596f5,
  "Energy": #0596f5,
  "white": #ffffff
);

@each $name, $colorsspur in $colorsspur {
  .bg-spur-#{$name} {
    background: $colorsspur !important;
  }
  .c-spur-#{$name} {
    color: $colorsspur !important;
  }
  
}
.carbon{
  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
  background-attachment: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
