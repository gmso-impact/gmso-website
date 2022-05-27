<template lang="">
  <div
    class="qr-story d-flex align-items-end"
    v-if="story.fields['en-StoryMapLink']"
    v-on:click="printURL"
  >
    <vue-qr
      v-bind="qrConfig"
      class="w-100"
    ></vue-qr>
  </div>
</template>
<script>
import VueQr from "vue-qr";

const qrConfig = {
  data: {
    scale: 1,
  },
  margin: 0,
  size: 1200,
  timing: {
    scale: 1,
    protectors: false,
  },
  alignment: {
    scale: 1,
    protectors: false,
  },
  cornerAlignment: {
    scale: 1,
    protectors: true,
  },
};

export default {
  components: {
    VueQr,
  },
  data() {
    return {
      qrConfig: {
        colorLight: getComputedStyle(document.documentElement).getPropertyValue(
          `--${this.story.fields["Story Theme"]}`
        ),
        autoColor: false,
        // unusued when autoColor true
        colorDark: "#ffffff",
        text: this.story.fields['en-StoryMapLink'],
        ...qrConfig,
      },
    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    printURL: function () {
      console.log("QR URL is");
      console.log(this.story.fields["en-StoryMapLink"]);
    },
  },
};
</script>
<style lang="scss">
.qr-story {
  width: 80px;
}
</style>
