<template lang="">
  <div class="videoFrame childPoint" v-if="isVideoFrameOpen">
    <div class="controlFrame pt-3 px-3 pb-2 bg-black rounded">
      <!-- <video
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
      </video> -->
      <vimeo-player
        class="innerFrame rounded"
        ref="player"
        :options="vimeoOptions"
        :videoId="videoID"
        @ready="onReady"
      />
      <div class="topClose">
        <button
          class="btn btn-lg btn-black"
          v-on:click="closeVideoFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />
          {{ $t(`Close`) }}
        </button>
      </div>
      <div class="bottomClose">
        <button
          class="btn btn-lg btn-black"
          v-on:click="closeVideoFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(`Close`) }}
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
    return {
      videoID: "784611246",
      // https://vimeo.com/784611246
      // small no letter box with audio 784611246
      // large audio letter box 782582931
      // small no audio 783038959

      playerReady: false,
    };
  },
  computed: {
    ...mapGetters({
      isVideoFrameOpen: "isVideoFrameOpen",
      getBreakpoints: "getBreakpoints",
    }),
    vimeoOptions: function () {
      // https://github.com/vimeo/player.js/#embed-options
      // https://github.com/dobromir-hristov/vue-vimeo-player

      const baseOptions = {
        color: "ff00ff",
        responsive: false,
        autoplay: true,
        width: 960,
        height: null,
        loop: false,
        muted: false,
        controls: true,

        title: false,
        byline: false,
        texttrack: this.$root.$i18n.locale,
      };
      if (this.$route.name === "Kiosk" && this.getBreakpoints.includes("xxl")) {
        // the wall
        // audio on, high quality, fixed size
        return {
          ...baseOptions,
          responsive: false,
          width: 2800,
          height: null,
          quality: "4k",
          loop: true,
          muted: false,
          controls: false, // changeme!
        };
      } else if (this.$route.name === "Kiosk") {
        // the podiums
        // audio off, high quality, fixed size
        return {
          ...baseOptions,
          responsive: false,
          width: 1500,
          height: null,
          quality: "1080p",
          loop: true,
          muted: true,
          controls: false, // changeme!
        };
      }

      // Other devices
      // audio on, options on, fixed size

      return baseOptions;
    },
  },
  methods: {
    ...mapMutations({
      closeVideoFrame: "closeVideoFrame",
    }),
    onReady() {
      this.playerReady = true;
      this.$refs.player.play();
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },
  },
  watch: {
    isVideoFrameOpen: function (isOpen) {
      if (!isOpen) {
        return;
      }

      let muteAudio = setTimeout(() => {
        console.log("mute video")
        this.$refs.player.mute();
      }, 3 * 60 * 1000);

      this.$nextTick(() => {
        //this.$refs.video.play();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
