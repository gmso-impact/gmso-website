import Vue from "vue";
import Vuex from "vuex";
import map from './map';
import storyList from './storyList';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    map: map,
    storyList: storyList,
  },
});
