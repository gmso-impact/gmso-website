<template lang="">
  <div class="qrStory bg-white" v-if="this.$route.name === 'Kiosk'">
    <button class="btn btn-block btn-secondary d-none" v-on:click="printURL()">
      printURL
    </button>
    <vue-qr class="w-100" :text="url" :size="1200" qid="testid"></vue-qr>
    <div class="text-center small pb-1">open on your phone</div>
  </div>
</template>
<script>
import VueQr from "vue-qr";

export default {
  components: {
    VueQr,
  },
  data() {
    return {
      url: window.location.origin,
    };
  },
  methods: {
    printURL: function () {
      console.log("router troubleshoot button");
      this.$route.name === 'Home'
    },
  },
};
</script>
<style lang="scss">
.qrStory {
  width: 600px;
}
</style>
