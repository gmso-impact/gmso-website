<template lang="">
  <div class="d-flex flex-grow align-items-end">
    <img
      src="Geo_Impact.svg"
      class="geo-img"
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
