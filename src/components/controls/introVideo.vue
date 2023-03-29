<template lang="">
  <div class="d-flex justify-content-end">
    <div class="w-100 ml-auto">
      <p class="text-white text-left">Watch Intro Vvideo</p>
      <div v-on:click="toggleVideoFrame" style="line-height:200px; color: white; font-size: 200px;"> 
        <font-awesome-icon class="id-icon fa-1.5" :icon="['fas', 'video']" />
      </div>
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
