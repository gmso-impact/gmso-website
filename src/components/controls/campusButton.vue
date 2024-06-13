<template lang="">
  <div class="col-6 col-xxl-3">
    <div class="pt-2 mx-1 h-100">
      <button
        class="btn btn-fade btn-block h-100 p-0"
        :class="{
          'btn-light': isActiveCampus,
          'btn-dark': !isActiveCampus,
        }"
        v-on:click="setCampus"
      >
        <div class="">{{ campus }}</div>
        <img
          :class="{ invertColor: isActiveCampus }"
          class="campus-icon"
          :src="campusIconSRC"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    campus: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActiveCampus: function () {
      if (this.$route.query.campus === undefined) {
        // if query is not active, show it inactive
        return false;
      } else if (
        this.campus.toLowerCase() === this.$route.query.campus.toLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    },
    campusIconSRC: function () {
      return `icons/${this.campus}.svg`;
    },
  },
  methods: {
    setCampus: function () {
      if (
        this.$route.query.campus &&
        this.$route.query.campus.toLowerCase() === this.campus.toLowerCase()
      ) {
        return;
      } // prevent redudant nav
      this.$router.push({
        query: { ...this.$route.query, campus: this.campus },
      }); // leave other query paramaters alone
    },
  },
};
</script>
<style lang="scss" scoped>
.invertColor {
  filter: invert(80%);
}
</style>
