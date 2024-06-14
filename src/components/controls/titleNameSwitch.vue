<template lang="">
  <div>
    <div class="h2 text-white text-center mb-xxl-3 d-none d-xxl-block">
      {{ $t(`SortBy`) }}
    </div>
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
        :aria-label="$t(`SortByTitle`)"
        :class="{
          'btn-white': sortStoriesBy === 'en-StoryTitle',
          'btn-secondary': sortStoriesBy !== 'en-StoryTitle',
        }"
        v-on:click="setSortStoriesBy('en-StoryTitle')"
      >
        {{ $t(`SortByTitle`) }}
      </button>
      <button
        type="button"
        class="btn btn-fade px-0"
        :aria-label="$t(`SortByPerson`)"
        :class="{
          'btn-white': sortStoriesBy === 'Last Name',
          'btn-secondary': sortStoriesBy !== 'Last Name',
        }"
        v-on:click="setSortStoriesBy('Last Name')"
      >
        {{ $t(`SortByPerson`) }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      sortStoriesBy: "sortStoriesBy",
    }),
  },
  methods: {
    ...mapMutations({
      setSortStoriesBy: "setSortStoriesBy",
    }),
  },
};
</script>

<style>
.btn-fade {
  transition: all 0.6s ease;
}
</style>
