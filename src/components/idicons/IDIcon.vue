<template lang="">
  <div class="h-100 text-center">
    <font-awesome-icon class="id-icon" :icon="['fas', icon]" />
    <div class="id-text">{{  $t(`idTags.${id}`) }}</div>
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
        "Alumnus" : "graduation-cap",
        "International" : "globe",
        "First Generation" : "user-graduate",
      };

      return iconSymbols[this.id]
    },
  },
};
</script>
<style lang="scss" scoped>
.id-icon {
  font-size: 60px;
}
.id-text {
  font-size: .75em;
}
</style>
