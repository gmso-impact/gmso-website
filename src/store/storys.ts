import * as storiesFile from "../assets/allStories.json";
import { latLng, bounds } from "leaflet";
import { event } from "vue-gtag";
import { breakpointCalculate } from "./breakpoint";

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
    storysActive: [],
    storysActiveMax: 1,
    storyFrame: null,
    storyThemes: toFilterTags("Story Theme"),
    storyTags: toFilterTags("Story Tags"),
    idTags: toFilterTags("ID Tags"),
    collegeTags: toFilterTags("College/Division"),
    isVideoFrameOpen: false,
    isHelpFrameOpen: false,
  },
  getters: {
    isVideoFrameOpen: (state) => {
      return state.isVideoFrameOpen;
    },
    isHelpFrameOpen: (state) => {
      return state.isHelpFrameOpen;
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
    storysActive: (state) => {
      return state.storysActive;
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
        return storyTheme.isActive;
      });
      return activeThemes;
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
      state.storysActive = [];
      state.isHelpFrameOpen = false;
      event(`open-video`, {
        event_category: "content",
        event_label: "open-video",
        value: 1,
        method: "Google",
      });
    },
    toggleVideoFrame: (state) => {
      if (!state.isVideoFrameOpen) {
        state.isVideoFrameOpen = true;
        state.storysActive = [];
        state.isHelpFrameOpen = false;
      } else {
        state.isVideoFrameOpen = false;
      }
    },
    closeHelpFrame: (state) => {
      state.isHelpFrameOpen = false;
    },
    openHelpFrame: (state) => {
      state.isVideoFrameOpen = false;
      state.storysActive = [];
      state.isHelpFrameOpen = true;
      event(`open-Help`, {
        event_category: "content",
        event_label: "open-Help",
        value: 1,
        method: "Google",
      });
    },
    toggleHelpFrame: (state) => {
      if (!state.isHelpFrameOpen) {
        state.isVideoFrameOpen = false;
        state.storysActive = [];
        state.isHelpFrameOpen = true;
      } else {
        state.isHelpFrameOpen = false;
      }
    },
    addActiveStory: (state, story) => {
      // add story to active list
      if (!story) {
        console.log(
          "addActiveStory requires a story object. To remove all storys use removeActiveStories"
        );
        return;
      }
      console.log(`Activated: ${story.fields["en-StoryTitle"]}`);
      event(`set-story`, {
        event_category: "content",
        event_label: story.fields["en-StoryTitle"],
        value: 1,
        method: "Google",
      });
      // check to see if story is already in the list
      const filtered = state.storysActive.filter((activeStory) => {
        return activeStory.id !== story.id;
      });

      state.storysActive = [story, ...filtered].slice(0, state.storysActiveMax);

      state.isVideoFrameOpen = false;
      state.isHelpFrameOpen = false;
    },
    toggleActiveStory: (state, story) => {
      if (!story) {
        console.log(
          "toggleActiveStory requires a story object. To remove all storys use removeActiveStories"
        );
        return;
      }

      // remove story from array if it is there
      const filtered = state.storysActive.filter((activeStory) => {
        return activeStory.id !== story.id;
      });
      // add story to the array if is is not
      if (filtered.length === state.storysActive.length) {
        state.storysActive = [story, ...state.storysActive].slice(
          0,
          state.storysActiveMax
        );
        state.isVideoFrameOpen = false;
        state.isHelpFrameOpen = false;
        console.log(`Activated: ${story.fields["en-StoryTitle"]}`);
        event(`set-story`, {
          event_category: "content",
          event_label: story.fields["en-StoryTitle"],
          value: 1,
          method: "Google",
        });
      } else {
        state.storysActive = filtered;
        console.log(`Removed: ${story.fields["en-StoryTitle"]}`);
      }
    },
    removeActiveStory: (state, story) => {
      if (!story) {
        console.log(
          "removeActiveStory requires a story object. To remove all storys use removeActiveStories"
        );
        return;
      }
      // remove story from array if it is there
      const filtered = state.storysActive.filter((activeStory) => {
        return activeStory.id !== story.id;
      });
      state.storysActive = filtered;
    },
    removeActiveStories: (state) => {
      state.storysActive = [];
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
      event(`set-tag`, {
        event_category: "controls",
        event_label: payload.tagName,
        value: 1,
        method: "Google",
      });
      state[payload.tagName] = state[payload.tagName].map((tag) => {
        return {
          ...tag,
          isActive: tag.name === payload.name,
        };
      });
    },
    resetTags: (state, tagName) => {
      event(`set-tag`, {
        event_category: "controls",
        event_label: "all",
        value: 1,
        method: "Google",
      });

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
