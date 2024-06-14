<template lang="">
  <div class="text-center">
    <h2 class="text-white mb-xxl-3">{{ $t(`Campus`) }}</h2>
    <div class="row mx-n1 mx-xxl-n3">
      <div class="col-6 col-xxxl-3 mb-xxl-3 px-1 px-xxl-3">
        <div class="pt-2 h-100">
          <button
            class="btn btn-fade btn-block h-100 p-0 p-xxxl-1 p-xxxl-2"
            :class="{
              'btn-white': $route.query.campus === undefined,
              'btn-dark': $route.query.campus !== undefined,
            }"
            v-on:click="resetCampus()"
          >
            <div class="font-weight-bold small">
              {{ $t(`AllCampuses`) }}
            </div>
          </button>
        </div>
      </div>
      <CampusButton
        v-for="campus in campusNames"
        :key="campus"
        v-bind:campus="campus"
      >
      </CampusButton>
    </div>
  </div>
</template>
<script>
import CampusButton from "./campusButton.vue";
import { mapActions } from "vuex";

export default {
  components: {
    CampusButton,
  },
  data() {
    return {
      campusNames: ["Fort Collins", "Pueblo", "Global"],
    };
  },
  mounted() {
    if (
      this.$route.query.campus &&
      !this.campusNames
        .map((n) => n.toLowerCase())
        .includes(this.$route.query.campus.toLowerCase())
    ) {
      // campus does not exist
      this.resetCampus();
    }
  },
  methods: {
    ...mapActions({
      resetCampus: "resetCampus",
    }),
  },
};
</script>
