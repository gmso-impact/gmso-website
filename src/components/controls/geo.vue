<template lang="">
  <div class="d-flex justify-content-end">
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
