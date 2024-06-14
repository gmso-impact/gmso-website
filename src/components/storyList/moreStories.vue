<template lang="">
  <div class="col p-1 p-xxl-2">
    <div
      class="btn btn-secondary story-card w-100 h-100 p-2 d-flex flex-column rounded-0 justify-content-between"
      v-if="shouldResetFilters"
      v-on:click="resetFilters"
    >
      <div class="h-100 d-flex flex-column justify-content-center">
        <font-awesome-icon :icon="['fas', 'globe']" class="mr-2 fa-4x" />
      </div>
      <div class='font-weight-bold'>{{ $t(`ResetFilter`) }}</div>
    </div>
    <div
      class="btn btn-secondary story-card w-100 h-100 p-2 d-flex flex-column rounded-0 justify-content-between"
      v-else-if="storyInMap.length <= 30"
      v-on:click="resetMap"
    >
      <div class="h-100 d-flex flex-column justify-content-center">
        <font-awesome-icon :icon="['fas', 'globe']" class="mr-2 fa-4x" />
      </div>
      <div class='font-weight-bold'>{{ $t(`ResetMap`) }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      resetMap: "resetMap",
      resetFilters: "resetFilters",
    }),
  },
  computed: {
    ...mapGetters({
      storyInMap: "storyInMap",
    }),
    shouldResetFilters: function () {
      // filters active
      if (
        this.$route.query.theme !== undefined ||
        this.$route.query.campus !== undefined ||
        this.$route.query.tag !== undefined
      ) {
        return true;
      }
      return false;
      //
    },
  },
};
</script>

<style scoped lang="scss"></style>
