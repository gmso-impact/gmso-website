<template lang="">
  <button
    :class="buttonClasses"
    class="btn mt-2 mt-xxl-4 shadow"
    :key="control.name"
    v-on:click="setTagClicked"
  >
    {{ $t(`storyThemes.${control.name}`) }}
  </button>
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
      return this.control.isActive ? `btn-${this.control.name}` : "btn-dark";
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
