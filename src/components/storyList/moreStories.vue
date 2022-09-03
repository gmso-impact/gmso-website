<template lang="">
  <div class="col p-1 p-xxl-2" v-if="false">
    <div
      class="btn btn-secondary story-card w-100 h-100 p-2 d-flex flex-column rounded-0 justify-content-between"
    >
      <div class="h-100 d-flex flex-column justify-content-center">
        <font-awesome-icon :icon="['fas', 'globe']" class="mr-2 fa-4x" />
      </div>
      <div>Zoom out to see more stories</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({}),
  },
};
</script>

<style scoped lang="scss"></style>
