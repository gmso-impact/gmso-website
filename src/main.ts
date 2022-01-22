import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// missing leaflet icons
import { Icon } from 'leaflet';
type D = Icon.Default & {
  _getIconUrl?: string;
};
delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});



// Import Bootstrap an BootstrapVue CSS files (order is important)
import './app.scss'
import 'leaflet/dist/leaflet.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
