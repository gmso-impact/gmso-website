<template lang="">
  <div class="d-flex flex-column justify-content-end h-100 px-3 py-5">
    <KioskSwitch class="pb-xxl-4" v-if="false"> </KioskSwitch>
    <ThemeColumn class="pb-xxl-4"></ThemeColumn>
    <IdTags class="pb-xxl-4"></IdTags>
    <CampusGroup class="pb-xxl-4"></CampusGroup>
    <Language class="pb-xxl-4"></Language>
    <TitleNameSwitch class="pb-xxl-4"></TitleNameSwitch>
    <div class="row pb-xxl-4">
      <QRSite
        v-if="this.$route.name === 'Kiosk'"
        class="col-4 text-center"
      ></QRSite>
      <IntroVideo class="col-4 text-center"></IntroVideo>
      <Geo class="col-4 text-center"></Geo>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import KioskSwitch from "./kioskSwitch.vue";
import CampusGroup from "./campusGroup.vue";
import Language from "./language.vue";
import TitleNameSwitch from "./titleNameSwitch.vue";
import ThemeColumn from "./themeColumn.vue";
import IdTags from "./idTags.vue";
import Geo from "./geo.vue";
import QRSite from "@/components/qr/qrSite.vue";
import IntroVideo from "./introVideo.vue";

export default {
  components: {
    KioskSwitch,
    CampusGroup,
    Language,
    TitleNameSwitch,
    ThemeColumn,
    IdTags,
    QRSite,
    Geo,
    IntroVideo,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
