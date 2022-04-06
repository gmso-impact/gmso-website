// If you change this
// be sure to also change src/store/variables.scss
// Size order is important!
// This is the MIN WIDTH value
const bpl = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 4000,
};
const breakpoint = {
  state: {
    breakpoints: [],
    width: null,
  },
  getters: {
    getBreakpoints: (state) => {
      // array of breakpoints like ['xl', 'xxl']
      //
      // media-breakpoint-up
      // greater than or equal
      // breakpoint.includes('xl')
      //
      // media-breakpoint-only
      // equal to
      // breakpoint[0] === 'xl'
      //
      //
      // less than
      // !breakpoint.includes('xl')
      //
      return state.breakpoints;
    },
    getWidth: (state) => {
      return state.width;
    },
  },
  actions: {
    setBreakpoint: ({ state, commit }, newWidth) => {
      console.log("resized action!");
      if (!newWidth) {
        return;
      }
      const bpsLess = Object.entries(bpl).filter(([name, minWidth]) => {
        return newWidth >= minWidth;
      });
      // array of breakpoints like ['xl', 'xxl']
      const breakpointArray = Object.keys(
        Object.fromEntries(bpsLess)
      ).reverse();
      // only update if breakpoint changed
      if (
        JSON.stringify(state.breakpoints) !== JSON.stringify(breakpointArray)
      ) {
        commit("setBreakpoint", {
          nbps: breakpointArray,
          newWidth: newWidth,
        });
      }
    },
  },
  mutations: {
    setBreakpoint: (state, newState) => {
      state.breakpoints = newState.nbps;
      state.width = newState.newWidth;
    },
  },
};

export default breakpoint;
