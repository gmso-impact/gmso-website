<template lang="">
  <div>
    <Open v-if="helpID === 'Open'"></Open>
    <Pan v-if="helpID === 'Pan'"></Pan>
    <Zoom v-if="helpID === 'Zoom'"></Zoom>
  </div>
</template>
<script>
import Open from "./open.vue";
import Pan from "./pan.vue";
import Zoom from "./zoom.vue";
const seconds = 1000;
export default {
  name: "MapHelp",
  components: {
    Open,
    Pan,
    Zoom,
  },
  data() {
    return {
      helpID: "Pan",
      interval: null,
    };
  },
  mounted: function () {
    this.interval = setInterval(() => {
      if (this.helpID === "Pan") {
        this.helpID = "Zoom";
      } else if (this.helpID === "Zoom") {
        this.helpID = "Open";
      } else if (this.helpID === "Open") {
        this.helpID = "Pan";
      }
      //console.log(this.helpID);
    }, 15 * seconds);
  },
  beforeDestroy: function () {
    //console.log('unmounted')
    clearInterval(this.interval);
  },
};
</script>
<style lang=""></style>
