<template lang="">
  <div class="d-flex flex-column justify-content-end h-100">
    <div class="h-50 d-flex flex-column justify-content-end py-5 px-5">
      <h1 class="text-white text-center pb-xxl-4">Find Stories by</h1>
      <CampusGroup class="pb-xxl-4"></CampusGroup>
      <KioskSwitch class="pb-xxl-4" v-if="false"> </KioskSwitch>
      <ThemeColumn class=""></ThemeColumn>
    </div>
    <div class="h-50 d-flex flex-column justify-content-between py-5 px-5">
      <IdTags class="pb-xxl-5"></IdTags>
      <Language class="pb-xxl-5"></Language>
      <TitleNameSwitch class="pb-xxl-5"></TitleNameSwitch>
      <div class="row">
        <QRSite
          v-if="this.$route.name === 'Kiosk'"
          class="col-4 text-center"
        ></QRSite>
        <IntroVideo class="col-4 text-center"></IntroVideo>
        <Geo class="col-4 text-center"></Geo>
      </div>
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
