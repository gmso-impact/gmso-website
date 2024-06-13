<template lang="">
  <div>
    <div
      class="themeButton btn p-0 btn-charcoal btn-fade text-white d-flex rounded align-items-stretch"
      :class="themeButtonClasses"
      :key="theme"
      v-on:click="setTheme"
    >
      <div
        class="themeIconContainer p-1 m-1 rounded d-flex align-items-center"
        :class="[`bg-${theme}`]"
      >
        <img :src="themeIconSRC" class="themeIcon" :alt="`Logo for ${theme}`" />
      </div>
      <div
        class="themeText flex-fill d-flex align-items-center text-center p-1 p-xl-2 pl-xxl-4 small"
      >
        <transition name="slide-right" mode="out-in">
          <div :key="$t(`storyThemes.${theme}`)">
            {{ $t(`storyThemes.${theme}`) }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
    selectedTheme: {
      type: String,
      required: false,
    },
  },
  computed: {
    themeButtonClasses: function () {
      // `this` points to the vm instance
      const buttonStyle =
        this.$route.query.theme === undefined ||
        this.$route.query.theme.toLowerCase() === this.theme.toLowerCase()
          ? `bg-${this.theme}`
          : "";

      // add theme icons
      const icon = `theme-${this.theme}`;

      return [buttonStyle, icon];
    },
    themeIconSRC: function () {
      return `icons/${this.theme}.svg`;
    },
  },
  methods: {
    ...mapMutations({
      setTag: "setTag",
    }),
    setTheme: function () {
      if (
        this.$route.query.theme &&
        this.$route.query.theme.toLowerCase() === this.theme.toLowerCase()
      ) {
        return;
      } // prevent redudant nav
      this.$router.push({ query: { ...this.$route.query, theme: this.theme } }); // leave other query paramaters alone
    },
    // setTagClicked: function (event) {
    //   this.setTag({
    //     ...this.control,
    //     isActive: !this.control.isActive,
    //     tagName: "storyThemes",
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
// check btn.scss

.slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-right-enter {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
