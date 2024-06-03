<template lang="">
  <div class="d-flex align-items-center">
    <div class="w-100">
      <button class="btn btn-dark">
        <div class="">{{ $t(`IntroVideo`) }}</div>
        <div v-on:click="toggleVideoFrame" class="intro-icon">
          <font-awesome-icon class="id-icon fa-1.5" :icon="['fas', 'video']" />
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["toggleVideoFrame"]),
  },
  data() {
    return {};
  },
};
</script>

<style></style>
