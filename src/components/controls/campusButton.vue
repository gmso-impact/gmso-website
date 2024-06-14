<template lang="">
  <div class="col-6 col-xxxl-3 mb-xxl-3 px-1 px-xxl-3">
    <div class="pt-2 h-100">
      <button
        class="btn btn-fade btn-block h-100 p-0 p-xxl-1 p-xxxl-2"
        :class="{
          'btn-light': isActiveCampus,
          'btn-dark': !isActiveCampus,
        }"
        v-on:click="setCampus(campus)"
      >
        <div class="small">{{ campus }}</div>
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
import { mapGetters, mapMutations, mapActions } from "vuex";

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
    ...mapActions({
      setCampus: "setCampus",
    }),
  },
};
</script>
<style lang="scss" scoped>
.invertColor {
  filter: invert(80%);
}
</style>
