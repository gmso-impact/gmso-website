<template lang="">
  <div>
    <button
      class="btn btn-dark btn-block h-100 d-flex flex-column justify-content-between align-items-center"
    >
      <div class="small">{{ $t(`IntroVideo`) }}</div>
      <div v-on:click="toggleVideoFrame" class="intro-icon">
        <font-awesome-icon class="id-icon" :icon="['fas', 'video']" />
      </div>
    </button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

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
