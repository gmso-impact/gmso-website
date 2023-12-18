import { latLng, latLngBounds } from "leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";

export const maps = {
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
  africa: {
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

const apikey =
  "AAPKe8703a4175054ac3889b842bf857718c409C8-fzy-AeUOEUBrtaVp58HPUQNYkY-7wdxs2A12BPW5ibofrUSrddntQsjnyp";

// list of basemaps
// https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/#default-basemap-styles
// custom styles
// https://developers.arcgis.com/documentation/mapping-apis-and-services/visualization/basemap-styles/
// custom basemap can be modified here: https://developers.arcgis.com/vector-tile-style-editor/fe3c8d5151de424bb25ad0655ca6c080/json
//customBasemap: vectorBasemapLayer("fe3c8d5151de424bb25ad0655ca6c080", { apikey: apikey }),
//basemap: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey }),
//basemapDefault: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey, }),
//basemapOld: basemapLayer("DarkGray", { apikey }),

const baseMapDefault = "political";
export const baseMaps = {
  // For now ID must be the key name, later on we will use translation
  // to customize the text
  // background: light or dark, determines the color of text overlaid
  political: {
    id: "political",
    layer: vectorBasemapLayer("ArcGIS:DarkGray:Base", { apikey: apikey }),
    background: "dark",
  },
  terrain: {
    id: "terrain",
    layer: vectorBasemapLayer("ArcGIS:Terrain", { apikey: apikey }),
    background: "light",
  },
  satellite: {
    id: "satellite",
    layer: vectorBasemapLayer("ArcGIS:Imagery", { apikey: apikey }),
    background: "dark",
  },
  street: {
    id: "street",
    layer: vectorBasemapLayer("ArcGIS:StreetsNight", {
      apikey: apikey,
      version: 1,
    }),
    background: "dark",
  },
};

const stateTemplate = {
  baseMap: baseMaps.political,
  bounds: null,
  zoom: null,
  center: null,
  duration: 2,
  date: new Date(),
};

const map = {
  state: {
    current: { ...stateTemplate },
    new: { ...stateTemplate, bounds: maps.globe },
    initial: {
      ...stateTemplate,
    },
    baseMaps: baseMaps,
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
    mapGetBaseMap: (state) => {
      return state.current.baseMap;
    },
    mapGetBaseMaps: (state) => {
      return state.baseMaps;
    },
  },
  mutations: {
    resetMap: (state) => {
      state.new = {
        ...stateTemplate,
        bounds: state.initial.bounds,
        date: new Date(),
      };
      state.current.baseMap = baseMaps.political;
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
    mapSetBaseMap: (state, id) => {
      state.current.baseMap = state.baseMaps[id];
    },
  },
  actions: {},
};

export default map;
