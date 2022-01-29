import { latLng, latLngBounds } from "leaflet";
const initialState = {
  zoom: 5,
  center: latLng(0, 0),
  bounds: latLngBounds(latLng(60, -120), latLng(-45, 140)),
  date: new Date()
}


const map = {
  state: {
    current: {...initialState},
    new: {...initialState,
      duration: 5
    }
  },
  getters: {
    mapGetZoom: (state) => {
      return state.current.zoom;
    },
    mapGetCenter: (state) => {
      return state.current.center;
    },
    mapGetBounds: (state) => {
      return state.current.bounds;
    },
    mapGetBoundsNew: (state) => {
      return state.new;
    },
  },
  mutations: {
    resetMap: (state) => {
      state.new = {
        ...initialState,
        duration: 5,
        date: new Date()
      };
    },
    mapSetZoom: (state, zoom) => {
      state.new.zoom = zoom;
    },
    mapSetCenter: (state, center) => {
      state.new.center = center;
    },
    mapSetBounds: (state, bounds) => {
      state.new = {
        ...state.current,
        bounds: bounds,
        duration: 1,
        date: new Date()
      };
    },
    /// the curent functions are for internal to the map
    // this allows the map to be responsive
    mapSetZoomCurrent: (state, zoom) => {
      state.current.zoom = zoom;
    },
    mapSetCenterCurrent: (state, center) => {
      state.current.center = center;
    },
    mapSetBoundsCurrent: (state, bounds) => {
      state.current.bounds = bounds;
    },

  },
  actions: {},
};

export default map;
