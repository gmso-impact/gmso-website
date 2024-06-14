<template lang="">
  <div
    class="btn-group d-flex flex-column"
    role="group"
    aria-label="Kiosk Toggle Buttons"
  >
    <router-link
      :to="{ name: 'Web' }"
      class="btn-sm btn-secondary"
      exact-active-class="bg-white text-charcoal"
      >Web</router-link
    >
    <router-link
      :to="{ name: 'Kiosk' }"
      class="btn-sm btn-secondary"
      exact-active-class="bg-white text-charcoal"
      >Kiosk</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
