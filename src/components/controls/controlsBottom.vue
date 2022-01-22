<template lang="">
  <div class="row">
    <div
      v-for="storyTheme in storyThemes"
      class="col-md-2"
      :class="`c-spur-${storyTheme.name}`"
      :key="storyTheme.name"
    >
      {{ storyTheme.name }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
    }),
  },
  methods: {},
};
</script>
