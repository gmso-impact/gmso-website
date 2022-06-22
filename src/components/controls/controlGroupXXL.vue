<template lang="">
  <div class="d-flex h-100 px-5 flex-column">
    <div class="h-25">
      <!--<ThemeColumn></ThemeColumn>-->
    </div>
    <div class="h-75 d-flex flex-column justify-content-between py-5">
      <KioskSwitch class="" v-if="false"> </KioskSwitch>
      <ThemeColumn></ThemeColumn>
      <Language class="d-block"></Language>
    </div>
    <div class="h-25 d-flex flex-column justify-content-end">
      <div class="d-flex justify-content-around mb-4">
        <QRSite
          v-if="this.$route.name === 'Kiosk'"
          class="w-25"
        ></QRSite>
        <Geo class="w-25"></Geo>
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

<style></style>
