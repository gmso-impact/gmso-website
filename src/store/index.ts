import Vue from "vue";
import Vuex from "vuex";
import map from "./map";
import storys from "./storys";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    map: map,
    storys: storys,
  },
});
