<template lang="">
  <div class="qr-site">
    <div class='w-100' v-if="this.$route.name === 'Kiosk'">
      <div class="text-center text-white small pb-1 w-100">{{host}}</div>
      <button
        class="btn btn-block btn-secondary d-none"
        v-on:click="printURL()"
      >
        {{ url }}
      </button>
      <vue-qr class="w-100" :text="url" :size="1200" qid="testid"></vue-qr>
    </div>
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
      host: window.location.host,
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
