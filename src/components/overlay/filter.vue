<template lang="">
  <div class="videoFrame overlay childPoint" v-if="isFilterFrameOpen">
    <div class="controlFrame px-1 py-1 rounded carbon border border-light">
      <ThemeColumn></ThemeColumn>
      <div class="topClose">
        <button class="btn btn-black" v-on:click="clickCloseFilterFrame()">
          <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />
          {{ $t(`Close`) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button class="btn btn-black" v-on:click="clickCloseFilterFrame()">
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ThemeColumn from "@/components/controls/themeColumn.vue";
export default {
  components: {
    ThemeColumn,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isFilterFrameOpen: "isFilterFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ clickCloseFilterFrame: "closeFilterFrame" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped></style>
