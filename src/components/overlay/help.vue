<template lang="">
  <div class="videoFrame overlay childPoint" v-if="isHelpFrameOpen">
    <div class="controlFrame px-1 py-1 rounded carbon border border-light">
      <div class="d-lg-none text-center py-3">
        <img
          src="GMSOtitle1.png"
          alt="CSU Impact text logo"
          class="title-img"
        />
      </div>
      <div
        class="h-100 d-flex flex-column text-white text-center justify-content-start p-3"
      >
        <div>{{ $t("greeting") }}</div>
        <div class="pt-4">
          {{ $t("help1") }}
        </div>
        <div class="pt-4">{{ $t("tagline") }}</div>
        <div class="pt-4">
          <button
            class="btn btn-lg btn-white mx-3 my-3"
            alt="Continue to map showing stories"
            v-on:click="clickCloseHelpFrame()"
            :aria-label="$t(`ContinueEN`)"
          >
            {{ $t("ContinueEN") }}
          </button>

          <button
            class="btn btn-lg btn-white mx-3 my-3"
            alt="Continue to map showing stories"
            :aria-label="$t(`ContinueES`)"
            v-on:click="
              clickCloseHelpFrame();
              $root.$i18n.locale = 'es';
            "
          >
            {{ $t("ContinueES") }}
          </button>
        </div>
      </div>
      <div class="topClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseHelpFrame()"
          :aria-label="$t(`Close`)"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
          {{ $t(``) }}
        </button>
      </div>
      <div class="d-none d-xxl-block bottomClose">
        <button
          class="btn btn-black"
          v-on:click="clickCloseHelpFrame()"
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

export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters({
      isHelpFrameOpen: "isHelpFrameOpen",
    }),
  },
  methods: {
    ...mapMutations({ clickCloseHelpFrame: "closeHelpFrame" }),
  },
  watch: {},
};
</script>
<style lang="scss" scoped></style>
