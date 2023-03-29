<template lang="">
  <div class="d-flex h-100 flex-column pt-1 pt-xl-3">
    <KioskSwitch class="mb-3 mx-1 mx-xl-2" v-if="false"> </KioskSwitch>
    <ThemeColumn class="mx-1 mx-xl-2"></ThemeColumn>
    <Language class="mb-3 mx-1 mx-xl-2"></Language>
    <Geo v-if="false" class="align-self-center mb-3"></Geo>
    <QRSite v-if="this.$route.name === 'Kiosk'" class="px-2 pb-2"></QRSite>
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
