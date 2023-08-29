
export const mapBases = {
  default: {
    layer: "ArcGIS:DarkGray:Base",
    name_en: "",
    name_es: "",
    photo: ""
  },
  darkGray: {
    layer: "ArcGIS:DarkGray:Base",
    name_en: "",
    name_es: "",
    photo: ""
  },
  topographic: {
    layer: "ArcGIS:DarkGray:Base",
    name_en: "",
    name_es: "",
    photo: ""
  },
  human: {
    layer: "ArcGIS:DarkGray:Base",
    name_en: "",
    name_es: "",
    photo: ""
  }
}

import { latLng, latLngBounds } from "leaflet";

export const mapBounds = {
  globe: {
    bounds: latLngBounds(latLng(80, 70), latLng(-60, -130)),

    center: latLng(82, 180),
    zoom: 5,
  },
  northAmerica: {
    bounds: latLngBounds(latLng(50, -74), latLng(20, -120)),
    center: latLng(82, 180),
    zoom: 5,
  },
  sourthAmerica: {
    bounds: latLngBounds(latLng(27, -8), latLng(-56, -110)),
    center: latLng(82, 180),
    zoom: 5,
  },
  europe: {
    bounds: latLngBounds(latLng(74, 66), latLng(16, -34)),
    center: latLng(82, 180),
    zoom: 5,
  },
  africe: {
    bounds: latLngBounds(latLng(45, 72), latLng(-40, -26)),
    center: latLng(82, 180),
    zoom: 5,
  },
  asia: {
    bounds: latLngBounds(latLng(82, 180), latLng(-32, 5)),
    center: latLng(82, 180),
    zoom: 5,
  },
  australia: {
    bounds: latLngBounds(latLng(30, 180), latLng(-53, 84)),
    center: latLng(82, 180),
    zoom: 5,
  },
  colorado: {
    bounds: latLngBounds(latLng(50, -74), latLng(20, -120)),
    center: latLng(41, -100),
    zoom: 5,
  },
};

const stateTemplate = {
  bounds: null,
  zoom: null,
  center: null,
  duration: 2,
  date: new Date(),
};

const map = {
  state: {
    current: { ...stateTemplate },
    new: { ...stateTemplate, bounds: mapBounds.globe },
    initial: {
      ...stateTemplate,
    },
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
    mapGetBoundsCurrent: (state) => {
      return state.current;
    },
  },
  mutations: {
    resetMap: (state) => {
      state.new = {
        ...stateTemplate,
        bounds: state.initial.bounds,
        date: new Date(),
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
        date: new Date(),
      };
    },
    /// the curent functions are for internal to the map
    // this allows the map to be responsive
    mapSetZoomCurrent: (state, zoom) => {
      if (!state.current.zoom) {
        state.initial.zoom = zoom;
      }
      state.current.zoom = zoom;
    },
    mapSetCenterCurrent: (state, center) => {
      if (!state.current.center) {
        state.initial.center = center;
      }

      state.current.center = center;
    },
    mapSetBoundsCurrent: (state, bounds) => {
      if (!state.current.bounds) {
        state.initial.bounds = bounds;
      }
      state.current.bounds = bounds;
    },
  },
  actions: {},
};

export default map;
