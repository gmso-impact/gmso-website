<template lang="">
  <div class="d-flex flex-column rounded p-2 p-xxl-3">
    <div class="btn-group mb-4" role="group" aria-label="Language Toggle Buttons">
      <label class="btn btn-secondary" for="btnradio1">English</label>
      <label class="btn btn-white" for="btnradio2">Español</label>
    </div>

    <button class="btn btn-white mt-2 mt-xxl-4 Greg" v-on:click="resetTagsClicked">
      All
    </button>

    <ThemeButton class="Greg"
      v-for="storyTheme in storyThemes"
      :key="storyTheme.name"
      v-bind:control="storyTheme"
    >
    </ThemeButton>

  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ThemeButton from "./themeButton.vue";

export default {
  components: {
    ThemeButton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      storyThemes: "storyThemes",
    }),
  },
  methods: {
    ...mapMutations({
      resetTags: "resetTags",
    }),
    resetTagsClicked: function (event) {
      this.resetTags("storyThemes");
    },
  },
};
</script>

<style>

.Greg{
  background-image:url('https://ibis-test1.nrel.colostate.edu/GMSO/images/icons/Food.png');
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left center;
  height: 100%;
  border-radius: 0px !important;
}

</style>
