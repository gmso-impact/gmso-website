<template lang="">
  <div>
    <button
      class="btn btn-block"
      :class="{
        'btn-white': activeIdTag === 'Women Leader',
        'btn-secondary': activeIdTag !== 'Women Leader',
      }"
      v-on:click="setTagClicked"
    >
      Women Lead Story
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      activeIdTag: "activeIdTag",
    }),
  },
  methods: {
    ...mapMutations({
      setIdTag: "setIdTag",
    }),
    setTagClicked: function (event) {
      if (this.activeIdTag) {
        this.setIdTag(null);
      } else {
        this.setIdTag("Women Leader");
      }
    },
  },
};
</script>
<style lang=""></style>
