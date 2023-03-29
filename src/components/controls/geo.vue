<template lang="">
  <div v-on:click="toggleVideoFrame" style="font-size:200px; line-height:200px; color:white;">
  <font-awesome-icon :icon="['fas', 'video']"/>
  <!-- <font-awesome-icon :icon="['fas', 'times']" class="mr-2" /> -->
  <!-- <img
    src="Geo_Impact.svg"
    class="geo-img"
    v-on:click="toggleVideoFrame"
    alt="Click to watch the intro video"
  /> -->
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
