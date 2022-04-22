<template lang="">
<div class="col-xxl-6">
  <button
    :class="buttonClasses"
    class="btn btn-block mt-2 themeIcon font-weight-bold"
    :key="control.name"
    v-on:click="setTagClicked"
  >
    {{ $t(`storyThemes.${control.name}`) }}
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
