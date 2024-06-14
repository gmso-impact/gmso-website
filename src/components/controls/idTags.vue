<template lang="">
  <div>
    <div class="h2 text-white text-center mb-xxl-3 d-none d-xxl-block">
      {{ $t(`Featured`) }}
    </div>
    <button
      class="btn btn-block font-weight-bold"
      :class="{
        'btn-white': isActiveTag,
        'btn-secondary': !isActiveTag,
      }"
      v-on:click="setTagClicked"
    >
      {{ $t(`Women`) }}
    </button>
  </div>
</template>
<script>
//import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      tag: "Women Leader",
    };
  },
  computed: {
    isActiveTag: function () {
      if (this.$route.query.tag === undefined) {
        // if query is not active, show it inactive
        return false;
      } else if (
        this.tag.toLowerCase() === this.$route.query.tag.toLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    setTagClicked: function () {
      if (this.$route.query.tag === undefined) {
        this.$router.push({
          query: { ...this.$route.query, tag: this.tag },
        }); // leave other query paramaters alone
      } else {
        this.$router.push({
          query: { ...this.$route.query, tag: undefined },
        });
      }
    },
  },
};
</script>
<style lang=""></style>
