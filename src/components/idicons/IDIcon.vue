<template lang="">
  <div v-if="icon">
    <div class="text-center d-flex flex-column h-100 justify-content-between">
      <font-awesome-icon class="id-icon" :icon="['fas', icon]" />
      <div class="id-text">{{ $t(`idTags.${id}`) }}</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {},
  computed: {
    icon() {
      const iconSymbols = {
        Alumnus: "graduation-cap",
        International: "globe",
        "First Generation": "user-graduate",
      };
      if (iconSymbols[this.id]) {
        return iconSymbols[this.id];
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.id-icon {
  font-size: 80px;
}
.id-text {
  font-size: 0.75em;
}
</style>
