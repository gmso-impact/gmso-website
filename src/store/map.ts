import { latLng, latLngBounds } from "leaflet";

const map =
{
  state: {
    zoom: 5,
    center: latLng(0, 0),
    bounds: latLngBounds(latLng(60, -120), latLng(-45, 140)),
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
