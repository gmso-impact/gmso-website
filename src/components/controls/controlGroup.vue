<template lang="">
  <div class="d-flex h-100 p-xxl-5 flex-column">
    <KioskSwitch class="mb-3 mb-xxl-5" v-if="false"> </KioskSwitch>
    <ThemeColumn class="mb-3 mb-xxl-5"></ThemeColumn>
    <Language class="d-block mb-3 mb-xxl-5"></Language>
    <div class="d-flex row justify-content-between">
      <QRSite
        v-if="this.$route.name === 'Kiosk'"
        class="col-6 col-xxl-3 order-2 order-xxl-1 mt-3"
      ></QRSite>
      <Geo
        class="col-xxl-4 order-1 order-xxl-2"
        :class="{
          'col-lg-6': $route.name === 'Web',
          'col-lg-4': $route.name === 'Kiosk',
        }"
      ></Geo>
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
