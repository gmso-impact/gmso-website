<template lang="">
  <div class="videoFrame overlay childPoint" v-if="isHelpFrameOpen">
    <div class="controlFrame px-1 py-1 rounded carbon border border-light">
      <div class="d-lg-none text-center py-3">
        <img src="GMSOtitle1.png" alt="CSU Impact" class="title-img" />
      </div>
      <div
        class="h-100 d-flex flex-column text-white text-center justify-content-start p-3"
      >
        <div>Welcome to the CSU Impact Map</div>
        <div class="pt-4">Explore stories of CSU impact throughout the world by tapping or
        clicking on a map marker on the map (mobile) or either a story card at
        right or a map marker (web).</div>
        <div class="pt-4">Find your story at CSU!</div>
      </div>
      <div class="topClose">
        <button class="btn btn-black" v-on:click="clickCloseHelpFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button class="btn btn-black" v-on:click="clickCloseHelpFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isHelpFrameOpen: "isHelpFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ clickCloseHelpFrame: "closeHelpFrame" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped></style>
