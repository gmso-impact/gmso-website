<template>
  <Main v-on:click.native="setLastInteraction"></Main>
</template>

<script lang="ts">
// @ is an alias to /src
import Main from "@/components/main/Main.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Kiosk",
  components: {
    Main,
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    ...mapActions({ startTimer: "startTimer", stopTimer: "stopTimer" }),
    ...mapMutations({ setLastInteraction: "setLastInteraction" }),
  },
};
</script>
