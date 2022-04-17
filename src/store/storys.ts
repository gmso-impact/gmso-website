import * as storiesFile from "../assets/allStories.json";
import { latLng, bounds } from "leaflet";

const stories = storiesFile.response;

function toFilterTags(tagName) {
  //console.log(`Tag: ${tagName}`)
  const tagListDuplicated = stories.reduce(function (tags, story) {
    if (
      story.fields &&
      story.fields[tagName] &&
      Array.isArray(story.fields[tagName]) &&
      story.fields[tagName].length >= 1
    ) {
      return [...tags, ...story.fields[tagName]];
    } else if (story.fields && story.fields[tagName]) {
      return [...tags, story.fields[tagName]];
    } else {
      return tags;
    }
  }, []);
  const tagList = [...new Set(tagListDuplicated)];
  //console.log({ tagList: tagList })
  return tagList.map((tag) => {
    return {
      name: tag,
      isActive: true,
      tagName: tagName,
    };
  });
}

const storys = {
  state: {
    all: stories,
    storyCurrent: null,
    storyFrame: null,
    storyThemes: toFilterTags("Story Theme"),
    storyTags: toFilterTags("Story Tags"),
    idTags: toFilterTags("ID Tags"),
    collegeTags: toFilterTags("College/Division"),
    isVideoFrameOpen: false,
  },
  getters: {
    isVideoFrameOpen: (state) => {
      return state.isVideoFrameOpen;
    },
    storyAll: (state) => {
      return state.all.map((story) => {
        if (story.fields["LAT"] && story.fields["LONG"]) {
          return story;
        }
        // If location does not have lat long
        // randomly locate around Fort Collins
        return {
          ...story,
          fields: {
            ...story.fields,
            LAT: (Math.random() - 0.5) * 5 + 40.5730232,
            LONG: (Math.random() - 0.5) * 5 - 105.086407087,
          },
        };
      });
    },
    storyFiltered: (state, getters) => {
      return getters.storyAll.filter((story) => {
        const hasActiveTheme = !!state.storyThemes.filter((storyTheme) => {
          return story.fields["Story Theme"] === storyTheme.name
            ? storyTheme.isActive
            : false;
        }).length;
        return hasActiveTheme;
      });
    },
    storyInMap: (state, getters) => {
      if (getters.mapGetBounds === null || getters.mapGetBounds === undefined) {
        return getters.storyFiltered;
      }
      return getters.storyFiltered.filter((story) => {
        const LAT = story.fields["LAT"] ? story.fields["LAT"] : 0;
        const LONG = story.fields["LONG"] ? story.fields["LONG"] : 0;
        const storyLatLng = latLng(LAT, LONG);
        const isInBounds = getters.mapGetBounds.contains(storyLatLng);
        return isInBounds;
      });
    },
    storyCurrent: (state) => {
      return state.storyCurrent;
    },
    storyFrame: (state) => {
      return state.storyFrame;
    },
    storyLayer: (state) => {
      if (
        state.storyCurrent &&
        state.storyCurrent.fields &&
        state.storyCurrent.fields["Impact Map Layer URL"]
      ) {
        return state.storyCurrent.fields["Impact Map Layer URL"];
      } else if (
        state.storyFrame &&
        state.storyFrame.fields &&
        state.storyFrame.fields["Impact Map Layer URL"]
      ) {
        return state.storyFrame.fields["Impact Map Layer URL"];
      } else {
        return;
      }
    },
    storyThemes: (state) => {
      return state.storyThemes;
    },
    storyThemesActive: (state) => {
      const activeThemes = state.storyThemes.filter((storyTheme) => {
        return storyTheme.isActive
      });
      return activeThemes

    },
    idTags: (state) => {
      return state.idTags;
    },
    collegeTags: (state) => {
      return state.collegeTags;
    },
  },
  mutations: {
    closeVideoFrame: (state) => {
      state.isVideoFrameOpen = false;
    },
    openVideoFrame: (state) => {
      state.isVideoFrameOpen = true;
      state.storyFrame = null;
    },
    toggleVideoFrame: (state) => {
      if (!state.isVideoFrameOpen) {
        state.storyFrame = null;
      }
      state.isVideoFrameOpen = !state.isVideoFrameOpen;
    },
    setStoryCurrent: (state, story) => {
      if (story) {
        state.storyFrame = null;
        state.isVideoFrameOpen = false;
      }
      state.storyCurrent = story;
    },
    setStoryFrame: (state, story) => {
      if (story) {
        state.storyCurrent = null;
        state.isVideoFrameOpen = false;
      }
      state.storyFrame = story;
    },
    setTag: (state, payload) => {
      // payload.tagName
      // payload.name
      state[payload.tagName] = state[payload.tagName].map((tag) => {
        return {
          ...tag,
          isActive: tag.name === payload.name,
        };
      });
    },
    resetTags: (state, tagName) => {
      state[tagName] = state[tagName].map((tag) => {
        return {
          ...tag,
          isActive: true,
        };
      });
    },
  },
  actions: {},
};

export default storys;
