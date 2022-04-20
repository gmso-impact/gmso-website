<template lang="">
  <div
    class="d-flex flex-wrap pb-1 px-1 ml-xxl-5 mr-xxl-5 justify-content-xxl-between"
  >
    <QRStory class="mr-3" :story="story"></QRStory>
    <IDIcon class='mr-3' v-for="id in story.fields['ID Tags']" v-bind:key="id" :id="id">
    </IDIcon>
    <button
      class="btn btn-dark mr-0 ml-auto"
      v-on:click="removeActiveStory(story)"
    >
      <font-awesome-icon :icon="['fas', 'times']" />
      {{ $t(``) }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import QRStory from "@/components/qr/qrStory.vue";
import IDIcon from "@/components/idicons/IDIcon.vue";

export default {
  components: {
    QRStory,
    IDIcon,
  },
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
      removeActiveStory: "removeActiveStory",
    }),
  },
};
</script>
<style lang="scss" scoped>
.story-icon {
  font-size: 80px;
}
</style>
