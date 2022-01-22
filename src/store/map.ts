import { latLng, bounds } from "leaflet";

const map =
{
  state: {
    zoom: 3,
    center: 0,
    bounds: null,
  },
  getters: {
    mapGetZoom: (state) => { return state.zoom },
    mapGetCenter: (state) => { return state.center },
    mapGetBounds: (state) => { return state.bounds},
  },
  mutations: {
    mapSetZoom: (state, zoom) => {
      state.zoom = zoom;
    },
    mapSetCenter: (state, center) => {
      state.center = center;
    },
    mapSetBounds: (state, bounds) => {
      state.bounds = bounds;
    },
  },
  actions: {

  },
};

export default map;
