<template lang="">
  <div class="d-flex h-100 px-3 flex-column control-group">
    <div class="h-25">
      <!--<ThemeColumn></ThemeColumn>-->
    </div>
    <div class="h-75 d-flex flex-column justify-content-between py-5">
      <KioskSwitch class="" v-if="false"> </KioskSwitch>
      <ThemeColumn></ThemeColumn>
      <Language class="d-block"></Language>
    </div>
    <div class="h-25 d-flex flex-column justify-content-end">
      <div class="row justify-content-around mb-5">
        <QRSite v-if="this.$route.name === 'Kiosk'" class="col-4"></QRSite>
        <Geo class="col-5"></Geo>
      </div>
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
.control-group {
  font-size: 1.1rem
}
<style></style>
