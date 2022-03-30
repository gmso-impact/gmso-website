import Vue from "vue";
import App from "./App.vue";
import store from "./store";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// missing leaflet icons
import { Icon } from "leaflet";
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


import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import {I18nSetup} from "./translations"
const i18n = new VueI18n(I18nSetup)

Vue.config.productionTip = false;

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { library as Iconlibrary } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faBook } from "@fortawesome/free-solid-svg-icons";
Iconlibrary.add(faTimes, faBook);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
