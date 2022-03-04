<template>
  <div
    id="app"
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
      <div class="left d-none d-lg-block col-lg-4 col-xxl-3">
        <StoryList></StoryList>
      </div>
      <div class="right col-12 col-lg-8 col-xxl-9"><Map></Map></div>
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
import { Component, Vue } from "vue-property-decorator";
import StoryList from "./components/storyList/storyList.vue";
import Map from "./components/map/map.vue";
import ThemeBottom from "./components/controls/themeBottom.vue";
import { mapActions, mapMutations } from "vuex";

@Component({
  components: {
    StoryList,
    Map,
    ThemeBottom,
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    ...mapActions({ startTimer: "startTimer" }),
    ...mapMutations({ setLastInteraction: "setLastInteraction" }),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@use "sass:map";
</style>
