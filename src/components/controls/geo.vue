<template lang="">
  <div class="d-flex align-items-end justify-content-center">
    <img
      src="Geo_Impact.svg"
      class="geo-img"
      v-on:click="toggleVideoFrame"
      alt="Click to watch the intro video"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";

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
