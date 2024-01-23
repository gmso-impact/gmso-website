import { latLng, latLngBounds } from "leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";

export const viewPorts = {
  globe: {
    xl: {
      center: latLng(8.6, 13),
      zoom: 2.8,
    },
    xxl: {
      center: latLng(-0.8135, 5.175),
      zoom: 4.2,
    },
  },
  northAmerica: {
    xl: {
      center: latLng(50.0418, -96.2063),
      zoom: 4.4,
    },
    xxl: {
      center: latLng(48.6328, -84.9564),
      zoom: 5.1,
    },
  },
  colorado: {
    xl: {
      center: latLng(40.2376, -103.4656),
      zoom: 7,
    },
    xxl: {
      center: latLng(39.7231, -104.4584),
      zoom: 8.7,
    },
  },
  sourthAmerica: {
    xl: {
      center: latLng(-22.4917, -58.6719),
      zoom: 3.9,
    },
    xxl: {
      center: latLng(-22.1141, -61.7305),
      zoom: 5.4,
    },
  },
  europeAfrica: {
    xl: {
      center: latLng(19.8749, 17.6292),
      zoom: 3.9,
    },
    xxl: {
      center: latLng(15.0011, 26.932),
      zoom: 4.9,
    },
  },
  asiaAustralia: {
    xl: {
      center: latLng(14.8296, 98.0096),
      zoom: 3.8,
    },
    xxl: {
      center: latLng(8.8601, 86.199),
      zoom: 4.9,
    },
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
  // Cities: https://csurams.maps.arcgis.com/apps/mapviewer/index.html?webmap=4f2e99ba65e34bb8af49733d9778fb8e
  satellite: {
    id: "satellite",
    layer: "ArcGIS:Imagery",
    background: "dark",
  },
  political: {
    id: "political",
    layer: "ArcGIS:DarkGray",
    background: "dark",
  },
  terrain: {
    id: "terrain",
    layer: "ArcGIS:Terrain",
    background: "light",
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
    new: { ...stateTemplate },
    // initial: {
    //   ...stateTemplate,
    // },
    baseMap: baseMaps.satellite,
    baseMaps: baseMaps,
    mapFrameId: -1,
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
    mapNewView: (state) => {
      return state.new;
    },
    mapGetBaseMap: (state) => {
      return state.baseMap;
    },
    mapGetBaseMaps: (state) => {
      return state.baseMaps;
    },
  },
  mutations: {
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
      state.current.zoom = zoom;
    },
    mapSetCenterCurrent: (state, center) => {
      state.current.center = center;
    },
    mapSetBoundsCurrent: (state, bounds) => {
      state.current.bounds = bounds;
    },
    mapSetBaseMap: (state, id) => {
      state.baseMap = state.baseMaps[id];
    },
  },
  actions: {
    resetMap: ({ state, commit, rootState, rootGetters }) => {
      console.log("reset map");
      let newViewport = viewPorts.globe.xl;
      if (rootGetters.getBreakpoints.includes("xxl")) {
        newViewport = viewPorts.globe.xxl;
      }
      state.new = {
        ...stateTemplate,
        ...newViewport,
        date: new Date(),
      };
      state.baseMap = baseMaps.satellite;
    },
    panMap: ({ state, commit, rootState, rootGetters }) => {
      //console.log("panMap");
      if (state.mapFrameId + 1 >= Object.keys(viewPorts).length) {
        state.mapFrameId = 0;
      } else state.mapFrameId += 1;
      const newViewportName = Object.keys(viewPorts)[state.mapFrameId];

      const newViewportBreakpoints = viewPorts[newViewportName];
      let newViewport = newViewportBreakpoints.xl;
      if (rootGetters.getBreakpoints.includes("xxl")) {
        newViewport = newViewportBreakpoints.xxl;
      }
      state.new = {
        ...stateTemplate,
        ...newViewport,
        duration: 5,
        date: new Date(),
      };
    },
  },
};

export default map;
