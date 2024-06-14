<template lang="">
  <div class="d-flex flex-column justify-content-end h-100">
    <div class="h-50 d-flex flex-column justify-content-between py-4 px-4">
      <h1 class="text-white text-center pb-xxl-4">{{ $t(`FindStories`) }}</h1>
      <CampusGroup class="pb-xxl-4"></CampusGroup>
      <KioskSwitch class="pb-xxl-4" v-if="false"> </KioskSwitch>
      <ThemeColumn class=""></ThemeColumn>
    </div>
    <div class="h-50 d-flex flex-column justify-content-between py-4 px-4">
      <div>
        <IdTags class="pb-xxl-5 flex-grow-1"></IdTags>
        <Language class="pb-xxl-5"></Language>
        <TitleNameSwitch class="pb-xxl-5"></TitleNameSwitch>
      </div>
      <div class="row d-flex justify-content-around align-items-stretch">
        <QRSite
          v-if="this.$route.name === 'Kiosk'"
          class="col-4 col-xxxl-3 px-3 text-center"
        ></QRSite>
        <IntroVideo class="col-5 col-xxxl-3 px-3 text-center"></IntroVideo>
        <Geo class="col-3 px-3"></Geo>
      </div>
    </div>
  </div>
</template>
<script>
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
