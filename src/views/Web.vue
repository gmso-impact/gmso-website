<template>
  <Main></Main>
</template>

<script lang="ts">
// @ is an alias to /src
import Main from "@/components/main/Main.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Web",
  components: {
    Main,
  },
  mounted() {
    this.openHelpFrame();
    return;
  },
  beforeDestroy() {
    return;
  },
  computed: {
    ...mapGetters({ getBreakpoints: "getBreakpoints" }),
  },
  methods: {
    ...mapActions({ startTimer: "startTimer", stopTimer: "stopTimer" }),
    ...mapMutations({ openHelpFrame: "openHelpFrame" }),
  },
};
</script>
