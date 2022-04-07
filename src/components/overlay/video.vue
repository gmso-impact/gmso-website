<template lang="">
  <div class="videoFrame overlay childPoint" v-if="isVideoFrameOpen">
    <div class="controlFrame px-1 py-1 rounded carbon border border-light">
      <video
        class="innerFrame"
        title="Stories at CSU"
        controls
        loop
        ref="video"
      >
        <source
          src="https://ibis-test1.nrel.colostate.edu/GMSO/videos/CSUS.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="topClose">
        <button class="btn btn-black" v-on:click="closeVideoFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button class="btn btn-black" v-on:click="closeVideoFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isVideoFrameOpen: "isVideoFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ closeVideoFrame: "closeVideoFrame" }),
  },
  watch: {
    isVideoFrameOpen: function (isOpen) {
      if (isOpen) {
        this.$nextTick(() => {
          this.$refs.video.play();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
