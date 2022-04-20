<template lang="">
  <div class="h-100">
    <font-awesome-icon class="story-icon" :icon="['fas', icon]" />
    <div class="text-center small">{{ id }}</div>
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
.story-icon {
  font-size: 70px;
}
</style>
