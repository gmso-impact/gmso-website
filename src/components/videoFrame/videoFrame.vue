<template lang="">
  <div class="outerFrame childPoint" v-if="isVideoFrameOpen">
    <div class="middleFrame d-flex flex-column px-1 py-1 rounded bg-white">
      <video class="innerFrame flex-grow-1" title="Stories at CSU" controls ref='video'>
        <source
          src="https://ibis-test1.nrel.colostate.edu/GMSO/videos/CSUS.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="topClose">
        <button class="btn btn-white" v-on:click="closeVideoFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          Close
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button class="btn btn-white" v-on:click="closeVideoFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          Close
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
          this.$refs.video.play()
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.outerFrame {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0px, -50%);
  width: 100%;
  height: 100%;
  padding: 3rem;
  max-width: 3600px;
  max-height: 1500px;
  z-index: 999;
}
.middleFrame {
  position: relative;
  // height: 100%;
  // width: 100%;
  width: 50%;
  height: 50%;

  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.innerFrame {
  width: 100%;
  height: 100%;
  border: none;
}
.topClose {
  position: absolute;
  right: 0px;
  top: 0px;
}
.bottomClose {
  position: absolute;
  left: 0px;
  bottom: 0px;
}
</style>
