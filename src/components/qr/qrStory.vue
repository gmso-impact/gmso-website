<template lang="">
  <div class="qr-story d-flex align-items-end" v-if="story.fields['en-StoryMapLink']">
    <vue-qr
      v-bind="qrConfig"
      class="w-100"
      :text="story.fields['en-StoryMapLink']"
      qid="testid"
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
        autoColor: true,
        // unusued when autoColor true
        //colorDark: "#212529",
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
  computed:{},
  methods: {
    printURL: function () {
      console.log("router troubleshoot button");
      this.$route.name === "Home";
    },
  },
};
</script>
<style lang="scss">
.qr-story {
  width: 80px;
}
</style>
