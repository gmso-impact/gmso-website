<template lang="">
  <div>
    <div class="h2 text-white text-center mb-xxl-3 d-lg-none d-xxl-block">
      {{ $t(`Featured`) }}
    </div>
    <button
      class="btn btn-block font-weight-bold"
      :class="{
        'btn-white': isActiveTag,
        'btn-secondary': !isActiveTag,
      }"
      v-on:click="setTag(tag)"
    >
      {{ $t(`Women`) }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      tag: "Women Leader",
    };
  },
  mounted() {
    // route guard to ensure the theme exists
    // if someone provides a bad theme, it will re-route to no filter
    if (
      this.$route.query.tag &&
      !this.tagNames
        .map((n) => n.toLowerCase())
        .includes(this.$route.query.tag.toLowerCase())
    ) {
      this.resetTags();
    }
  },
  computed: {
    ...mapGetters({
      tagNames: "tagNames",
    }),
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
    ...mapActions({
      setTag: "setTag",
      resetTags: "resetTags",
    }),
  },
};
</script>
<style lang=""></style>
