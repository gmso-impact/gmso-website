<template lang="">
  <div class="overlay childPoint" v-if="isFilterFrameOpen">
    <div class="controlFrame px-1 py-1 rounded bg-carbon border border-slate">
      <div class="overflow-y-auto overflow-x-hidden pb-5 h-100 w-100">
        <h1 class="text-white text-center mx-1 pt-5">
          {{ $t(`FindStories`) }}
        </h1>
        <CampusGroup class="mb-3 mx-1"></CampusGroup>
        <ThemeColumn class="mb-3 mx-1"></ThemeColumn>
        <IdTags class="mb-3 mx-1"></IdTags>
      </div>
      <div class="topClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseFilterFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />
          {{ $t(`Close`) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseFilterFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CampusGroup from "@/components/controls/campusGroup.vue";
import ThemeColumn from "@/components/controls/themeColumn.vue";
import IdTags from "@/components/controls/idTags.vue";

export default {
  components: {
    CampusGroup,
    ThemeColumn,
    IdTags,
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
