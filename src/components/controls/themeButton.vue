<template lang="">
  <div class="col-xxl-12">
    <div
      class="themeButton btn-dark btn-fade text-white d-flex mb-2 mb-xxl-4 rounded"
      :class="themeButtonClasses"
      :key="control.name"
      v-on:click="setTagClicked"
    >
      <div
        class="themeIconContainer p-1 rounded"
        :class="[`bg-${control.name}`]"
      >
        <img :src="themeIconSRC" class="themeIcon" />
      </div>
      <div class="themeText flex-fill text-center p-2">
        <transition name="slide-right" mode="out-in">
          <div :key="$t(`storyThemes.${control.name}`)">
            {{ $t(`storyThemes.${control.name}`) }}
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
    control: {
      type: Object,
      required: true,
    },
  },
  computed: {
    themeButtonClasses: function () {
      // `this` points to the vm instance
      const buttonStyle = this.control.isActive
        ? `bg-${this.control.name}`
        : "";

      // add theme icons
      const icon = `theme-${this.control.name}`;

      return [buttonStyle, icon];
    },
    themeIconSRC: function () {
      return `icons/${this.control.name}.svg`;
    },
  },
  methods: {
    ...mapMutations({
      setTag: "setTag",
    }),
    setTagClicked: function (event) {
      this.setTag({
        ...this.control,
        isActive: !this.control.isActive,
        tagName: "storyThemes",
      });
    },
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
