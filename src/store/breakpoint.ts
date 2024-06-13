// If you change this
// be sure to also change src/store/variables.scss
// Size order is important!
// This is the MIN WIDTH value
const bpl = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1700,
  xxl: 3800,
  xxxl: 7000,
};

// can be used in inital state like the getter getBreakpoints()
// see getBreakpoints for documentation

export const breakpointCalculate = function () {
  const newWidth = window.innerWidth;
  const bpsLess = Object.entries(bpl).filter(([name, minWidth]) => {
    return newWidth >= minWidth;
  });
  // array of breakpoints like ['xl', 'xxl']
  const breakpointArray = Object.keys(Object.fromEntries(bpsLess)).reverse();
  return breakpointArray;
};

const breakpoint = {
  state: {
    breakpoints: breakpointCalculate(),
    width: window.innerWidth,
    hasBeenResized: false,
  },
  getters: {
    getBreakpoints: (state) => {
      // array of breakpoints like ['xl', 'xxl']
      //
      // media-breakpoint-up
      // greater than or equal
      // getBreakpoints.includes('xl')
      //
      // media-breakpoint-only
      // equal to
      // getBreakpoints[0] === 'xl'
      //
      // less than
      // !getBreakpoints.includes('xl')
      //
      return state.breakpoints;
    },
    getWidth: (state) => {
      return state.width;
    },
  },
  actions: {
    setBreakpoint: ({ state, commit }) => {
      if (!state.hasBeenResized) {
        // action to take if the page has never been resize (initial page load)
      }
      console.log("resized action!");
      const breakpointArray = breakpointCalculate();
      // only update if breakpoint changed
      if (
        JSON.stringify(state.breakpoints) !== JSON.stringify(breakpointArray)
      ) {
        commit("setBreakpoint", {
          nbps: breakpointArray,
          newWidth: window.innerWidth,
        });
      }
    },
  },
  mutations: {
    setBreakpoint: (state, newState) => {
      state.breakpoints = newState.nbps;
      state.width = newState.newWidth;
      state.hasBeenResized = true;
    },
  },
};

export default breakpoint;
