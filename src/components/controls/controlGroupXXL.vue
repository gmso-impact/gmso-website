<template lang="">
  <div class="d-flex h-100 px-3 flex-column">
    <div class="h-25">
      <!--<ThemeColumn></ThemeColumn>-->
    </div>
    <div
      class="h-75 d-flex flex-column justify-content-center py-5 mx-auto w-50"
    >
      <KioskSwitch class="" v-if="false"> </KioskSwitch>
      <ThemeColumn></ThemeColumn>
      <IdTags class="d-block"></IdTags>
      <Language class="d-block mt-4"></Language>
      <TitleNameSwitch class="d-block mt-4"></TitleNameSwitch>
    </div>
    <div class="h-25 d-flex flex-column justify-content-end">
      <div class="row mb-5">
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
