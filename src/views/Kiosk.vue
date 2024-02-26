<template>
  <Main v-on:click.native="resetTimeouts"></Main>
</template>

<script lang="ts">
// @ is an alias to /src
import Main from "@/components/main/Main.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Kiosk",
  components: {
    Main,
  },
  mounted() {
    this.startTimeouts();
  },
  beforeDestroy() {
    this.stopTimeouts();
  },
  computed: {
    ...mapGetters({ getBreakpoints: "getBreakpoints" }),
  },
  methods: {
    ...mapActions({
      stopTimeouts: "stopTimeouts",
      startTimeouts: "startTimeouts",
      resetTimeouts: "resetTimeouts",
    }),
  },
};
</script>
