<template lang="">
  <div class="d-flex flex-column justify-content-center h-100">
    <div class="row mb-2">
      <div class="col-12">
        <button
          class="btn btn-block font-weight-bold mb-2 mb-xxl-4"
          v-bind:class="{
            'btn-white': storyThemesActive.length === storyThemes.length,
            'btn-outline-white':
              storyThemesActive.length !== storyThemes.length,
          }"
          v-on:click="resetTagsClicked"
        >
          <transition name="fade" mode="out-in">
            <div :key="$t(`AllStories`)">
              {{ $t(`AllStories`) }}
            </div>
          </transition>
        </button>
      </div>
      <ThemeButton
        v-for="storyTheme in storyThemes"
        :key="storyTheme.name"
        v-bind:control="storyTheme"
      >
      </ThemeButton>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ThemeButton from "./themeButton.vue";

export default {
  components: {
    ThemeButton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
      storyThemesActive: "storyThemesActive",
    }),
  },
  methods: {
    ...mapMutations({
      resetTags: "resetTags",
    }),
    resetTagsClicked: function (event) {
      this.resetTags("storyThemes");
    },
  },
};
</script>

<style>
.fade-enter-active {
  transition: all 0.1s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
