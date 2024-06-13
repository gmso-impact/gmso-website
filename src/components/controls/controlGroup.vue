<template lang="">
  <div
    class="d-flex h-100 flex-column overflow-y-auto overflow-x-hidden justify-content-between pt-1 pt-xl-2"
  >
    <h1 class="text-white text-center mx-1 mx-xl-2 pb-xxl-4">
      {{ $t(`FindStories`) }}
    </h1>
    <CampusGroup class="mb-3 mx-1 mx-xl-2"></CampusGroup>
    <KioskSwitch class="mb-3 mx-1 mx-xl-2" v-if="false"> </KioskSwitch>
    <ThemeColumn class="mb-3 mx-1 mx-xl-2"></ThemeColumn>
    <IdTags class="mb-3 mx-1 mx-xl-2"></IdTags>
    <Language class="mb-3 mx-1 mx-xl-2"></Language>
    <TitleNameSwitch class="mb-3 mx-1 mx-xl-2"></TitleNameSwitch>
    <QRSite
      v-if="this.$route.name === 'Kiosk'"
      class="mb-3 mx-1 mx-xl-2"
    ></QRSite>
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
// import Geo from "./geo.vue";
//import IntroVideo from "./introVideo.vue";
import QRSite from "@/components/qr/qrSite.vue";

export default {
  components: {
    KioskSwitch,
    CampusGroup,
    Language,
    TitleNameSwitch,
    ThemeColumn,
    IdTags,
    //IntroVideo,
    QRSite,
    // Geo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
