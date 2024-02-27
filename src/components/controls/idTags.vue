<template lang="">
  <div>
    <button
      class="btn btn-block py-3 font-weight-bold"
      :class="{
        'btn-white': isActiveTag,
        'btn-secondary': !isActiveTag,
      }"
      v-on:click="setTagClicked"
    >
      Women in Leadership
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
    // ...mapGetters({
    //   activeIdTag: "activeIdTag",
    // }),
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
    // ...mapMutations({
    //   setIdTag: "setIdTag",
    // }),
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
