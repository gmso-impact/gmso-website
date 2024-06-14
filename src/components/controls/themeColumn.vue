<template lang="">
  <div class="d-flex flex-column">
    <h2 class="text-white text-center mb-xxl-3">{{ $t(`Theme`) }}</h2>
    <div class="row">
      <div class="col-12 mb-2 mb-xxl-4">
        <button
          class="btn btn-block btn-sm font-weight-bold"
          v-bind:class="{
            'btn-white': $route.query.theme === undefined,
            'btn-charcoal': $route.query.theme !== undefined,
          }"
          v-on:click="resetThemes"
          :aria-label="$t(`AllThemes`)"
        >
          <transition name="fade" mode="out-in">
            <div :key="$t(`AllThemes`)">
              {{ $t(`AllThemes`) }}
            </div>
          </transition>
        </button>
      </div>
      <div
        class="col-12 col-xxl-6 mb-2 mb-xxl-4"
        v-for="theme in themeNames"
        :key="theme"
      >
        <ThemeButton
          v-bind:theme="theme"
          v-bind:selectedTheme="$route.query.theme"
        >
        </ThemeButton>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import ThemeButton from "./themeButton.vue";

export default {
  components: {
    ThemeButton,
  },
  data() {
    return {};
  },
  mounted() {
    // route guard to ensure the theme exists
    // if someone provides a bad theme, it will re-route to no filter
    if (
      this.$route.query.theme &&
      !this.themeNames
        .map((n) => n.toLowerCase())
        .includes(this.$route.query.theme.toLowerCase())
    ) {
      this.resetTheme();
    }
  },
  computed: {
    ...mapGetters({
      themeNames: "themeNames",
    }),
  },
  methods: {
    ...mapActions({
      resetThemes: "resetThemes",
    }),
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
