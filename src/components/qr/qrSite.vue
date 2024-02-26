<template lang="">
  <div class="qr-site d-flex align-items-center">
    <div class="w-100">
      <div class="text-white">{{ $t(`QRscan`) }}</div>
      <vue-qr
        id="popover-target-1"
        v-bind="qrConfig"
        class="w-50 pt-2"
        text="https://impact.csusystem.edu"
        qid="testid"
      ></vue-qr>
      <b-popover
        target="popover-target-1"
        triggers="hover focus"
        placement="top"
      >
        <div class="font-weight-bold">
          {{ $t(`QRpopover`) }}
        </div>
      </b-popover>
    </div>
  </div>
</template>
<script lang="ts">
import VueQr from "vue-qr";
import { BPopover } from "bootstrap-vue";

const qrConfig = {
  components: {
    BPopover,
  },
  data: {
    scale: 1,
  },
  colorDark: "#212529",
  colorLight: "#ffffff",
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
