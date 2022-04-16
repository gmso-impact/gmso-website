<template lang="">
  <div class="d-flex h-100 p-xxl-3 flex-column">
    <KioskSwitch class="d-block mb-3 mb-xxl-5"> </KioskSwitch>
    <Language class="d-block mb-3 mb-xxl-5"></Language>
    <ThemeColumn class="mb-3 mb-xxl-5"></ThemeColumn>
    <div class="d-flex row justify-content-between">
      <QRSite class="col-6 col-xxl-4"></QRSite>
      <Geo class="col-6 col-xxl-4"></Geo>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import KioskSwitch from "./kioskSwitch.vue";
import Language from "./language.vue";
import ThemeColumn from "./themeColumn.vue";
import Geo from "./geo.vue";
import QRSite from "@/components/qr/qrSite.vue";

export default {
  components: {
    KioskSwitch,
    Language,
    ThemeColumn,
    QRSite,
    Geo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
