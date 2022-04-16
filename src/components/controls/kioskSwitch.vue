<template lang="">
  <div
    class="btn-group d-flex flex-column flex-xxl-row"
    role="group"
    aria-label="Kiosk Toggle Buttons"
  >
    <router-link
      :to="{ name: 'Web' }"
      class="btn btn-secondary"
      exact-active-class="bg-white text-dark"
      >Web</router-link
    >
    <router-link
      :to="{ name: 'Kiosk' }"
      class="btn btn-secondary"
      exact-active-class="bg-white text-dark"
      >Kiosk</router-link
    >
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
