<template lang="">
  <div class="d-flex align-items-center">
    <div class="w-100 ml-auto">
      <img
        src="Geo_Impact.svg"
        class="geo-img ml-auto"
        v-on:click="toggleVideoFrame"
        alt="Click to watch the intro video"
      />
    </div>
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
