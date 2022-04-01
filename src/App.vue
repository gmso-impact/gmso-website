<template>
  <div
    id="app"
    class="d-flex flex-column h-100"
    v-on:click="setLastInteraction"
  >
    <router-view />
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
