<template lang="">
  <div class="qr-site d-flex align-items-end">
    <div class="w-100">
      <!--<div
        class="text-center font-qr-site text-white pb-1 pb-xxl-3 w-100 text-break"
      >
        impact.csusystem.edu
      </div>-->
      <button
        class="btn btn-block btn-secondary d-none"
        v-on:click="printURL()"
      >
        {{ url }}
      </button>
      <vue-qr
        v-bind="qrConfig"
        class="w-100"
        text="https://impact.csusystem.edu"
        qid="testid"
      ></vue-qr>
    </div>
  </div>
</template>
<script>
import VueQr from "vue-qr";

const qrConfig = {
  data: {
    scale: 1,
  },
  colorDark: "#212529",
  colorLight: "#ffffff",
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
      url: window.location.origin,
      host: window.location.host,
      qrConfig: qrConfig,
    };
  },
  methods: {
    printURL: function () {
      console.log("router troubleshoot button");
      this.$route.name === "Home";
    },
  },
};
</script>
<style lang="scss"></style>
