<template lang="">
  <div
    class="qr-story d-flex align-items-end"
    v-if="this.$route.name === 'Kiosk'"
    v-on:click="printURL"
  >
    <vue-qr v-bind="qrConfig" class="w-100"></vue-qr>
  </div>
</template>
<script>
import VueQr from "vue-qr";
import cssColors from "@/helper/colors.ts";
console.log(cssColors);
const qrConfig = {
  data: {
    scale: 1,
  },
  margin: 50,
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
    return {};
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    storyLink: function () {
      // Return story in other language
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryMapLink`];
      }
      // default to english
      return this.story.fields["bi-StoryMapLink"];
    },
    qrConfig: function () {
      let dark = "#000000";
      if (cssColors && cssColors[this.story.fields["Story Theme"]]) {
        dark = cssColors[this.story.fields["Story Theme"]];
      }
      return {
        colorDark: dark,
        // autoColor: false,*/
        // unusued when autoColor true
        colorLight: "#ffffff",
        text: this.storyLink,
        ...qrConfig,
      };
    },
  },
  methods: {
    printURL: function () {
      console.log("QR URL is");
      console.log(this.storyLink);
    },
  },
};
</script>
<style lang="scss">
.qr-story {
  width: 124px;
}
</style>
