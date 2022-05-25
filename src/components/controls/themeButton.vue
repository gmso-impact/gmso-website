<template lang="">
  <div class="col-xxl-12">
    <div
      class="themeButton btn-dark text-white d-flex mb-2 mb-xxl-4 rounded"
      :class="themeButtonClasses"
      :key="control.name"
      v-on:click="setTagClicked"
    >
      <div class="themeIconContainer p-1 rounded" :class="[`bg-${control.name}`]">
        <img :src="themeIconSRC" class="themeIcon" />
      </div>
      <div class="themeText flex-fill text-center p-2">
        {{ $t(`storyThemes.${control.name}`) }}
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
</style>
