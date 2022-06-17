<template lang="">
  <div class="d-flex h-100 px-5 flex-column">
    <div class="h-50 d-flex flex-column justify-content-between py-5">
      <KioskSwitch class="" v-if="false"> </KioskSwitch>
      <Geo class="align-self-center"></Geo>
      <QRSite
        v-if="this.$route.name === 'Kiosk'"
        class="align-self-center"
      ></QRSite>
      <Language class="d-block"></Language>
    </div>
    <div class="h-50">
      <ThemeColumn></ThemeColumn>
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
