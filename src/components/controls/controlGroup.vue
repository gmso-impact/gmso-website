<template lang="">
  <div class="d-flex h-100 p-xxl-3 flex-column">
    <KioskSwitch class="d-block mb-3 mb-xxl-5"> </KioskSwitch>
    <Language class="d-block mb-3 mb-xxl-5"></Language>
    <ThemeColumn class="mb-3 mb-xxl-5"></ThemeColumn>
    <div class="d-flex justify-content-between">
      <QrStory class="mr-2"></QrStory>
      <Geo class="ml-2"></Geo>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import KioskSwitch from "./kioskSwitch.vue";
import Language from "./language.vue";
import ThemeColumn from "./themeColumn.vue";
import Geo from "./geo.vue";
import QrStory from "@/components/qr/qrStory.vue";

export default {
  components: {
    KioskSwitch,
    Language,
    ThemeColumn,
    QrStory,
    Geo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
