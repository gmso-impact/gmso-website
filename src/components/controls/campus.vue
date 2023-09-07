<template lang="">
  <div class='text-center'>
    <h2 class="text-white mb-xxl-4">Campus</h2>
    <div class="btn-group-vertical pb-5">
      <button
        class="btn btn-fade btn-block"
        :class="{
          'btn-white': selectedCampus === undefined,
          'btn-dark': selectedCampus !== undefined,
        }"
        v-on:click="setCampus(undefined)"
      >
        <div class="mt-xxl-3 font-weight-bold">All Campuses</div>
      </button>
      <button
        class="btn btn-fade btn-block"
        :class="{
          'btn-light': ['Fort Collins'].includes(selectedCampus),
          'btn-dark': !['Fort Collins'].includes(selectedCampus),
        }"
        v-on:click="setCampus('Fort Collins')"
      >
        <div class="mt-xxl-3">Fort Collins</div>
        <img
          :class="{ invertColor: ['Fort Collins'].includes(selectedCampus) }"
          src="icons/Fort Collins.svg"
        />
      </button>
      <button
        class="btn btn-fade btn-block"
        :class="{
          'btn-light': ['Pueblo'].includes(selectedCampus),
          'btn-dark': !['Pueblo'].includes(selectedCampus),
        }"
        v-on:click="setCampus('Pueblo')"
      >
        <div class="mt-xxl-3">Pueblo</div>
        <img
          :class="{ invertColor: ['Pueblo'].includes(selectedCampus) }"
          src="icons/Pueblo.svg"
        />
      </button>
      <button
        class="btn btn-fade btn-block"
        :class="{
          'btn-light': ['Global'].includes(selectedCampus),
          'btn-dark': !['Global'].includes(selectedCampus),
        }"
        v-on:click="setCampus('Global')"
      >
        <div class="mt-xxl-3">Global</div>
        <img
          :class="{ invertColor: ['Global'].includes(selectedCampus) }"
          src="icons/Global.svg"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCampus: undefined,
    };
  },
  mounted() {
    console.log(this.$route.query.campus);
    this.selectedCampus = this.$route.query.campus;
  },
  methods: {
    setCampus: function (campus) {
      if (this.selectedCampus === campus) {
        return;
      } // prevent redudant nav

      this.selectedCampus = campus;
      console.log(campus);
      this.$router.push({ query: { ...this.$route.query, campus: campus } }); // leave other query paramaters alone
    },
  },
};
</script>
<style lang="scss" scoped>
.invertColor {
  filter: invert(80%);
}
</style>
