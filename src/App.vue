<template>
  <div id="app" class="d-flex flex-column h-100">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import breakpoint from "@/mixins/breakpoint.ts";

@Component({
  mixins: [breakpoint],
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@use "sass:map";
</style>
