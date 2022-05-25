<template lang="">
  <div
    class="d-flex text-white flex-wrap pt-1 pt-xxl-3 justify-content-xxl-between"
  >
    <QRStory class="mr-3 mr-xxl-5" v-if="true" :story="story"></QRStory>
    <IDIcon class='mr-3 mr-xxl-5' v-for="id in story.fields['ID Tags']" v-bind:key="id" :id="id">
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

</style>
