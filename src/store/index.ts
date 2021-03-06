import Vue from "vue";
import Vuex from "vuex";
import map from "./map";
import storys from "./storys";
import breakpoint from "./breakpoint";

Vue.use(Vuex);
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
export default new Vuex.Store({
  state: {
    timer: null,
    lastInteraction: new Date(),
    resetTagsTime: 60 * seconds,
    resetStoryTime: 15 * minutes,
    resetVideoTime: 20 * minutes,
    refreshPageTime: 2 * hours,
    timerLoopLength: 10 * seconds,
  },
  mutations: {
    setLastInteraction: (state) => {
      const now = new Date();
      console.log(`${now.toString()} interaction occured`);
      state.lastInteraction = now;
    },
  },
  actions: {
    checkTime({ state, commit }) {
      const now = new Date();
      /// order this from farthest to soonest
      if (
        state.timerLoopLength +
          state.resetVideoTime +
          state.lastInteraction.getTime() <
        now.getTime()
      ) {
        console.log("reset passed");
        return;
      } else if (
        state.refreshPageTime + state.lastInteraction.getTime() <
        now.getTime()
      ) {
        console.log("reload page");
        location.reload();
      } else if (
        state.resetVideoTime + state.lastInteraction.getTime() <
        now.getTime()
      ) {
        console.log("resetVideoTime");
        commit("openVideoFrame", { root: true });
      } else if (
        state.resetStoryTime + state.lastInteraction.getTime() <
        now.getTime()
      ) {
        console.log("resetStoryTime");
        commit("resetMap");
        commit("removeActiveStories");
      } else if (
        state.resetTagsTime + state.lastInteraction.getTime() <
        now.getTime()
      ) {
        console.log("resetTagsTime");
        commit("resetTags", "storyThemes");
      } else {
        console.log("Time run");
      }
    },
    startTimer({ commit, dispatch, state }) {
      const now = new Date();
      console.log(`${now.toString()} timer started`);
      state.lastInteraction = new Date();
      state.timer = setInterval(() => {
        dispatch("checkTime");
      }, state.timerLoopLength);
    },
    stopTimer({ commit, dispatch, state }) {
      const now = new Date();
      console.log(`${now.toString()} timer stoped`);
      clearInterval(state.timer);
    },
  },
  modules: {
    map: map,
    storys: storys,
    breakpoint: breakpoint,
  },
});
