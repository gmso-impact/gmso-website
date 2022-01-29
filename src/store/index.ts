import Vue from "vue";
import Vuex from "vuex";
import map from "./map";
import storys from "./storys";
Vue.use(Vuex);
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
export default new Vuex.Store({
  state: {
    lastInteraction: new Date(),
    resetTagsTime: 60 * seconds,
    resetStoryTime: 2 * minutes,
    resetVideoTime: 15 * minutes,
    timerLoopLength: 60 * seconds
  },
  mutations: {
    setLastInteraction: (state) => {
      const now = new Date();
      console.log(`${now.toString()} interaction occured`);
      state.lastInteraction = new Date()
    }
  },
  actions: {
    checkTime({ state, commit }) {
      const now = new Date();
      /// order this from farthest to soonest
      if (state.timerLoopLength + state.resetVideoTime + state.lastInteraction.getTime() < now.getTime()) {
        console.log('reset passed')
        return;
      } else if (state.resetVideoTime + state.lastInteraction.getTime() < now.getTime()) {
        console.log('resetVideoTime')
        commit('openVideoFrame', { root: true })
      } else if (state.resetStoryTime + state.lastInteraction.getTime() < now.getTime()) {
        console.log('resetStoryTime')
        commit('resetMap', null)
        commit('setStoryCurrent', null)
        //commit('setStoryFrame', null)
      } else if (state.resetTagsTime + state.lastInteraction.getTime() < now.getTime()) {
        console.log('resetTagsTime')
        commit('resetTags', "storyThemes")
      } else {
        console.log('time checked');
      }


    },
    startTimer({ commit, dispatch, state }) {
      setInterval(() => {
        dispatch('checkTime')
      }, state.timerLoopLength)
    }

  },
  modules: {
    map: map,
    storys: storys,
  },
});
