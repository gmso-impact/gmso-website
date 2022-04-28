<template lang="">
<div class="col-xxl-12">
  <button
    class="btn-xxl-lg btn-block mt-2 themeIcon font-weight-bold px-0 py-0 carbon text-white"
    :key="control.name"
    v-on:click="setTagClicked"
  >
    <!--<img v-if='control.name === "Food"' class='float-left theme-icon' src='Food.png' />-->
    <div :class="buttonClasses" class="float-left h-100 xxl-buttonWallSize">&nbsp;</div>
    <span class="float-left ml-xxl-3">{{ $t(`storyThemes.${control.name}`) }}</span>
  </button>
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
    buttonClasses: function () {
      // `this` points to the vm instance
      const buttonStyle = this.control.isActive
        ? `btn-${this.control.name}`
        : "btn-dark";

      // add theme icons
      const icon = `theme-${this.control.name}`;

      return [buttonStyle, icon];
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

.theme-icon-xxl {
  height: 24px;
}

.buttonWallSize {
  min-height: 160px !important;
  min-width: 110px !important;
}

</style>
