<template lang="">
  <div class="">
    <KioskSwitch class="d-block mb-3 mb-xxl-5"> </KioskSwitch>
    <Language class="d-block mb-3 mb-xxl-5"></Language>
    <ThemeColumn class="mb-3 mb-xxl5"></ThemeColumn>
    <QrStory></QrStory>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import KioskSwitch from "./kioskSwitch.vue";
import Language from "./language.vue";
import ThemeColumn from "./themeColumn.vue";
import QrStory from "@/components/qr/qrStory.vue";

export default {
  components: {
    KioskSwitch,
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
