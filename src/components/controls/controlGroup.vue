<template lang="">
  <div class="d-flex h-100 flex-column pt-1 pt-xl-3">
    <KioskSwitch class="mb-3 mx-1 mx-xl-2" v-if="false"> </KioskSwitch>
    <ThemeColumn class="mx-1 mx-xl-2"></ThemeColumn>
    <IdTags class="mx-1 mx-xl-2 mb-3"></IdTags>
    <Language class="mb-3 mx-1 mx-xl-2"></Language>
    <TitleNameSwitch class="mb-3 mx-1 mx-xl-2"></TitleNameSwitch>
    <Geo class="align-self-center mb-3"></Geo>
    <IntroVideo
      class="text-center mb-3"
      v-if="this.$route.name !== 'Kiosk'"
    ></IntroVideo>
    <QRSite
      v-if="this.$route.name === 'Kiosk'"
      class="px-2 pb-2 text-center"
    ></QRSite>
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
import IntroVideo from "./introVideo.vue";
import QRSite from "@/components/qr/qrSite.vue";

export default {
  components: {
    KioskSwitch,
    Language,
    TitleNameSwitch,
    ThemeColumn,
    IdTags,
    IntroVideo,
    QRSite,
    Geo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
