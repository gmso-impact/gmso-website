<template>
  <Main
      v-on:click="setLastInteraction"
  ></Main>
</template>

<script lang="ts">
// @ is an alias to /src
import Main from "@/components/main/Main.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    Main,
  },
    mounted() {
    this.startTimer();
  },
  methods: {
    ...mapActions({ startTimer: "startTimer" }),
    ...mapMutations({ setLastInteraction: "setLastInteraction" }),
  },
};
</script>
