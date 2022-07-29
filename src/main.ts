import Vue from "vue";
import App from "./App.vue";
import store from "./store";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// missing leaflet icons
import { Icon } from "leaflet";

// disable console.clear used by ESRI libraries
// Doesn't always work, you can also set the developer console setting "Preserve log upon navigation" to FALSE
window.console.clear = () => {
  return;
};

type D = Icon.Default & {
  _getIconUrl?: string;
};
delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "./scss/app.scss";
import "leaflet/dist/leaflet.css";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

import { BPopover } from "bootstrap-vue";
Vue.component("b-popover", BPopover);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import { I18nSetup } from "./translations";
const i18n = new VueI18n(I18nSetup);

Vue.config.productionTip = false;

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { library as Iconlibrary } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faBook,
  faGraduationCap,
  faAward,
  faGlobe,
  faUserGraduate,
  faFilter,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
Iconlibrary.add(
  faTimes,
  faBook,
  faGraduationCap,
  faAward,
  faGlobe,
  faUserGraduate,
  faFilter,
  faSpinner
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

import VueRouter from "vue-router";
import router from "./router";
Vue.use(VueRouter);

new Vue({
  store,
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");

import VueGtag from "vue-gtag";
// https://matteo-gabriele.gitbook.io/vue-gtag/v/master/methods/events
// https://support.google.com/analytics/answer/1033068#Anatomy&zippy=%2Cin-this-article

Vue.use(
  VueGtag,
  {
    config: { id: "G-9Y7C77KWYD" },
  },
  router
);
