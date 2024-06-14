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
    timerMain: null,
    lastInteraction: new Date(),
    isInactive: false,
    timeouts: [],
    intervals: [],
  },
  getters: {
    isInactive: (state) => {
      return state.isInactive;
    },
  },
  mutations: {
    setLastInteraction: (state) => {
      const now = new Date();
      console.log(`${now.toString()} interaction occured`);
      state.lastInteraction = now;
    },
  },
  actions: {
    startTimeouts({ commit, dispatch, state }) {
      // starts all the timeouts
      console.log("startTimeouts");
      const timeoutFunctions = {
        reloadPage: {
          time: 2 * hours,
          action: () => {
            location.reload();
          },
        },
        // openVideo: {
        //   time: 40 * seconds,
        //   action: ()=>{
        //     commit("openVideoFrame", { root: true });
        //   }
        // },
        panMap: {
          time: 18 * minutes,
          action: () => {
            state.isInactive = true;
            dispatch("panMap");
            state.intervals.push(
              setInterval(() => {
                console.log("Panning Map");
                dispatch("panMap");
              }, 60 * seconds),
            );
          },
        },
        resetMap: {
          time: 16 * minutes,
          action: () => {
            dispatch("resetMap");
          },
        },
        closeStorys: {
          time: 15 * minutes,
          action: () => {
            commit("removeActiveStories");
          },
        },
        resetFilterSort: {
          time: 120 * seconds,
          action: () => {
            commit("resetSortStoriesBy");
            dispatch("resetFilters");
          },
        },
      };
      const timeouts = []; // execute the above functions
      for (const [name, timeoutFunction] of Object.entries(timeoutFunctions)) {
        const timeout = setTimeout(() => {
          console.log(`timeout for ${name}`);
          timeoutFunction.action();
        }, timeoutFunction.time);
        timeouts.push(timeout);
      }
      state.timeouts = timeouts;
    },
    stopTimeouts({ commit, dispatch, state }) {
      // cancels all timeouts, like when leaving kiosk mode
      console.log("stopTimeouts");
      state.timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      state.intervals.forEach((interval) => {
        clearInterval(interval);
      });
      state.intervals = [];
      state.map.mapFrameId = -1;
      state.isInactive = false;
    },
    resetTimeouts({ commit, dispatch, state }) {
      // stop all the timers, then start them again
      console.log("resetTimeouts");

      state.timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      state.timeouts = [];
      state.intervals.forEach((interval) => {
        clearInterval(interval);
      });
      state.intervals = [];
      state.map.mapFrameId = -1;
      state.isInactive = false;
      dispatch("startTimeouts");
    },
  },
  modules: {
    map: map,
    storys: storys,
    breakpoint: breakpoint,
  },
});
