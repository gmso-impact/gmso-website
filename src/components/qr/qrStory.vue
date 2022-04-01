<template lang="">
    <div class='qrStory'>
      <button class="btn btn-block btn-secondary" v-on:click="printURL()">
        printURL
      </button>

      <vue-qr
        class="w-100"
        text="https://google.com"
        :size="1200"
        qid="testid"
      ></vue-qr>
    </div>
</template>
<script>
import VueQr from "vue-qr";

export default {
  components: {
    VueQr,
  },
  data() {
    return {};
  },
  methods: {
    printURL: function () {
      console.log("im here");
      this.$route.query.page;
    },
  },
};
</script>
<style lang="scss">
.qrStory{
  width: 200px;
}
</style>
