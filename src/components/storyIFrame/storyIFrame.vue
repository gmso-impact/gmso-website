<template lang="">
      <iframe
        class="iframe-scale iframe-border-none"
        :src="story.fields['en-StoryMapLink']"
        title="Story Map"
      ></iframe>
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
  },
};
</script>
<style lang="scss" scoped>

</style>
