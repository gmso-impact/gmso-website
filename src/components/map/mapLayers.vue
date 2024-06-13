<template lang="">
  <div class="px-xxl-3">
    <h2
      class="text-center pb-1 pb-xxl-3"
      :class="{
        'text-dark': 'light' === currentMap.background,
        'text-light': 'dark' === currentMap.background,
      }"
    >
      {{ $t(`baseMaps.mapType`) }}
    </h2>
    <div class="btn-group">
      <button
        class="btn btn-fade"
        v-for="map in baseMaps"
        :key="map.id"
        v-on:click="setMap(map.id)"
        :class="{
          'btn-white': map.id === currentMap.id,
          'btn-secondary': map.id !== currentMap.id,
        }"
      >
        {{ $t(`baseMaps.${map.id}`) }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      baseMaps: "mapGetBaseMaps",
      currentMap: "mapGetBaseMap",
    }),
  },
  methods: {
    ...mapMutations({
      setMap: "mapSetBaseMap",
    }),
  },
};
</script>

<style>
.btn-fade {
  transition: all 0.6s ease;
}
</style>
