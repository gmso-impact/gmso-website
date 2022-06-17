<template lang="">
  <img
    src="Geo_Impact.svg"
    class="geo-img"
    v-on:click="toggleVideoFrame"
    alt="Click to watch the intro video"
  />
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

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
