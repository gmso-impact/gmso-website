<template lang="">
  <div class="">
    <Language class="mb-3"></Language>
    <ThemeColumn class="mb-3"></ThemeColumn>
    <QrStory></QrStory>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Language from "./language.vue";
import ThemeColumn from "./themeColumn.vue";
import QrStory from "@/components/qr/qrStory.vue";

export default {
  components: {
    Language,
    ThemeColumn,
    QrStory,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
