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
import cssColors from "@/scss/variables.scss";

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
    return {

    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    storyLink: function(){
      // Return story in other language
      if(this.story.fields[`${this.$root.$i18n.locale}2-StoryMapLink`]){
        return this.story.fields[`${this.$root.$i18n.locale}2-StoryMapLink`]
      }
      // default to english
      return this.story.fields['en-StoryMapLink']
    },
    qrConfig: function(){
      return({
        colorDark: cssColors[this.story.fields["Story Theme"]],
        // autoColor: false,*/
        // unusued when autoColor true
        colorLight: "#ffffff",
        text: this.storyLink,
        ...qrConfig,
      });
    }
  },
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
  width: 124px;
}
</style>
