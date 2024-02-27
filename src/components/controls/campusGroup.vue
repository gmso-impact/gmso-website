<template lang="">
  <div class="text-center">
    <h2 class="text-white mb-xxl-4">Campus</h2>
    <div class="row pb-3 p-2">
      <div class="col-6 col-xxl-3 p-1">
        <button
          class="btn btn-fade btn-block h-100 p-0"
          :class="{
            'btn-white': $route.query.campus === undefined,
            'btn-dark': $route.query.campus !== undefined,
          }"
          v-on:click="resetCampus()"
        >
          <div class="font-weight-bold">All Campuses</div>
        </button>
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
      this.resetCampus();
    }
  },
  methods: {
    resetCampus: function () {
      if (this.$route.query.campus === undefined) {
        return;
      } // prevent redudant nav
      this.$router.push({ query: { ...this.$route.query, campus: undefined } }); // leave other query paramaters alone
    },
  },
};
</script>
