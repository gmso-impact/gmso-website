<template lang="">
  <div class="videoFrame childPoint">
    <div class="controlFrame pt-2 px-2 pb-1 bg-black rounded">
      <video
        class="innerFrame rounded"
        title="Stories at CSU"
        :controls="hasControls"
        :muted="isMuted"
        :loop="willLoop"
        ref="video"
      >
        <source src="intro2.mp4" type="video/mp4" />
      </video>
      <!-- <vimeo-player
        class="innerFrame rounded"
        ref="player"
        :options="vimeoOptions"
        :videoId="videoID"
        @ready="onReady"
      />-->
      <div class="topClose">
        <div class="btn-group" role="group" aria-label="Video Controls">
          <button
            class="btn btn-lg btn-black"
            v-if="this.$route.name === 'Kiosk'"
            v-on:click="toggleMute()"
          >
            <span v-if="isMuted">
              <font-awesome-icon :icon="['fas', 'fa-volume-xmark']" />
            </span>
            <span v-else>
              <font-awesome-icon :icon="['fas', 'fa-volume-high']" />
            </span>
          </button>
          <button
            class="btn btn-lg btn-black"
            v-on:click="closeVideoFrame()"
            :aria-label="$t(`Close`)"
          >
            {{ $t(`Close`) }}
            <font-awesome-icon :icon="['fas', 'times']" class="ml-2" />
          </button>
        </div>
      </div>
      <div class="bottomClose" v-if="this.getBreakpoints.includes('xxl')">
        <div class="btn-group" role="group" aria-label="Video Controls">
          <button
            class="btn btn-lg btn-black"
            v-on:click="closeVideoFrame()"
            :aria-label="$t(`Close`)"
          >
            {{ $t(`Close`) }}
            <font-awesome-icon :icon="['fas', 'times']" class="ml-2" />
          </button>
          <button class="btn btn-lg btn-black" v-on:click="toggleMute()">
            <span v-if="isMuted">
              <font-awesome-icon :icon="['fas', 'fa-volume-xmark']" />
            </span>
            <span v-else>
              <font-awesome-icon :icon="['fas', 'fa-volume-high']" />
            </span>
          </button>
        </div>
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
      isMuted: false,
      muter: null,
      willLoop: true,
    };
  },
  computed: {
    ...mapGetters({
      isVideoFrameOpen: "isVideoFrameOpen",
      getBreakpoints: "getBreakpoints",
    }),
    hasControls: function () {
      return this.$route.name !== "Kiosk";
    },
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
    toggleMute() {
      clearTimeout(this.muter);
      this.isMuted = !this.isMuted;
      if (!this.isMuted) {
        this.muter = setTimeout(() => {
          console.log("mute video");
          this.isMuted = true;
        }, 3 * 60 * 1000);
      }
    },
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
  mounted() {
    this.muter = setTimeout(() => {
      console.log("mute video");
      this.isMuted = true;
    }, 3 * 60 * 1000);

    this.$nextTick(() => {
      this.$refs.video.play();
    });
  },
};
</script>

<style lang="scss" scoped></style>
