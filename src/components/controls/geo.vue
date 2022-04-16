<template lang="">
<div class='h-100 d-flex align-items-end'>
  <img
    src="Geo.png"
    class="geo-img w-100"
    v-on:click="toggleVideoFrame"
    alt="Click to watch the intro video"
  />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import KioskSwitch from "./kioskSwitch.vue";
import Language from "./language.vue";
import ThemeColumn from "./themeColumn.vue";

export default {
  methods: {
    ...mapMutations(["toggleVideoFrame"]),
  },
  data() {
    return {};
  },
};
</script>

<style></style>
