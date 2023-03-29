<template lang="">
  <div
    class="d-flex"
    :class="{
      'btn-group': true,
      'btn-group-vertical': false,
    }"
    role="group"
    aria-label="Stories By Title and Name Toggle Buttons"
  >
    <button
      type="button"
      class="btn btn-fade px-0"
      :aria-label="$t(`SortByStories`)"
      :class="{
        'btn-white': true,
        'btn-secondary': false,
      }"
      v-on:click="setStoriesBy('Title')"
    >
      {{ $t(`SortByStories`) }}
    </button>
    <button
      type="button"
      class="btn btn-fade px-0"
      :aria-label="$t(`SortByStories`)"
      :class="{
        'btn-white': false,
        'btn-secondary': true,
      }"
      v-on:click="setStoriesBy('People')"
    >
      {{ $t(`SortByPeople`) }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { languages } from "../../translations.ts";
import { event } from "vue-gtag";

export default {
  data() {
    return { languages: languages };
  },
  computed: {
    ...mapGetters({
      sortStoriesBy: "sortStoriesBy",
    }),
  },
  methods: {
    ...mapMutations({
      setSortStoriesBy: "setSortStoriesBy",
    })
  },
};
</script>

<style>
.btn-fade {
  transition: all 0.6s ease;
}
</style>
