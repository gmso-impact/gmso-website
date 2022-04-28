<template lang="">
  <div class="col-xxl-12">
    <div
      class="themeButton btn-dark d-flex flex-row mb-2 mb-xxl-4"
      :class="themeButtonClasses"
      :key="control.name"
      v-on:click="setTagClicked"
    >
      <div class="themeIconContainer py-2 py-xxl-4 px--xxl-3" :class="[`bg-${control.name}`]">
        <img :src="themeIconSRC" class="themeIcon" />
      </div>
      <div class="themeText flex-fill text-center p-2">
        {{ $t(`storyThemes.${control.name}`) }}
      </div>
    </div>

    <!--<button
      class="btn-xxl-lg btn-block mt-2 themeIcon font-weight-bold px-0 py-0 carbon text-white"
      :key="control.name"
      v-on:click="setTagClicked"
    >
      <div :class="buttonClasses" class="float-left h-100 xxl-buttonWallSize">
        &nbsp;
      </div>
      <span class="float-left ml-xxl-3">{{
        $t(`storyThemes.${control.name}`)
      }}</span>
    </button>-->
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

    buttonClasses: function () {
      // `this` points to the vm instance
      const buttonStyle = this.control.isActive
        ? `btn-${this.control.name}`
        : "btn-dark";

      // add theme icons
      const icon = `theme-${this.control.name}`;

      return [buttonStyle, icon];
    },
    themeIconSRC: function () {
      return `theme/${this.control.name}_Impact_white.svg`;
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

.themeIconContainer {
  width: 10%;
}


.buttonWallSize {
  min-height: 160px !important;
  min-width: 110px !important;
}
</style>
