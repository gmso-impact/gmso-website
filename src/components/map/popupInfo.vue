<template lang="">
  <div class="d-flex flex-wrap pb-1 px-1 ml-xxl-5 mr-xxl-5 justify-content-xxl-between">
    <font-awesome-icon
      v-if="
        story.fields['ID Tags'] && story.fields['ID Tags'].includes('Alumnus')
      "
      :icon="['fas', 'graduation-cap']"
    />
    <font-awesome-icon
      v-if="
        story.fields['ID Tags'] && story.fields['ID Tags'].includes('First Generation')
      "
      :icon="['fas', 'award']"
    />
    <button class="btn btn-dark mr-0 ml-auto" v-on:click="clickClose">
      <font-awesome-icon :icon="['fas', 'times']" />
      {{ $t(``) }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setStoryCurrent: "setStoryCurrent",
      setStoryFrame: "setStoryFrame",
    }),
    clickClose: function () {
      this.setStoryCurrent(null);
    },
    clickReadMore: function () {
      this.setStoryCurrent(null);
      this.setStoryFrame(this.story);
    },
  },
};
</script>
<style lang="scss" scoped></style>
