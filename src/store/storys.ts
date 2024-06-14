import * as storiesFile from "../assets/allStories.json";
import { latLng } from "leaflet";
import { event } from "vue-gtag";
import router from "../router";

const stories = storiesFile.response
  .filter((story) => {
    // Filter out stories that might cause UI bugs
    if (story.fields["en-StoryTitle"] && story.fields["en-StoryMapLink"]) {
      return true;
    }
  })
  .map((story) => {
    // Replace missing data with default data
    return {
      ...story,
      fields: {
        ...story.fields,
        "Story Theme": story.fields["Story Theme"] || "Unknown",
        LAT: story.fields["LAT"] || (Math.random() - 0.5) * +40.5730232,
        LONG: story.fields["LONG"] || (Math.random() - 0.5) * -105.086407087,
      },
    };
  })
  .sort((a, b) => {
    // initial sort by en-StoryTitle
    return a.fields["en-StoryTitle"].localeCompare(b.fields["en-StoryTitle"]);
  });

function getNames(fieldName) {
  const tagListDuplicated = stories.reduce(function (tags, story) {
    if (
      story.fields &&
      story.fields[fieldName] &&
      Array.isArray(story.fields[fieldName]) &&
      story.fields[fieldName].length >= 1
    ) {
      // if the field is an array
      return [...tags, ...story.fields[fieldName]];
    } else if (story.fields && story.fields[fieldName]) {
      // if the field is a string
      return [...tags, story.fields[fieldName]];
    } else {
      // if field does not exist on story
      return tags;
    }
  }, []);
  const tagList = [...new Set(tagListDuplicated)];
  return tagList;
}

const storys = {
  state: {
    all: stories,
    storysActive: [],
    storysActiveMax: 1,
    themeNames: getNames("Story Theme"),
    isVideoFrameOpen: false,
    isHelpFrameOpen: false,
    isStoriesFrameOpen: false,
    isFilterFrameOpen: false,
    sortStoriesBy: "en-StoryTitle",
  },
  getters: {
    isVideoFrameOpen: (state) => {
      return state.isVideoFrameOpen;
    },
    isHelpFrameOpen: (state) => {
      return state.isHelpFrameOpen;
    },
    isStoriesFrameOpen: (state) => {
      return state.isStoriesFrameOpen;
    },
    isFilterFrameOpen: (state) => {
      return state.isFilterFrameOpen;
    },
    sortStoriesBy: (state) => {
      return state.sortStoriesBy;
    },
    storyAll: (state) => {
      return state.all;
    },
    storyFiltered: (state, getters, rootState) => {
      const filteredStories = state.all.filter((story) => {
        const filterByField = function (queryName, fieldName) {
          // handle arbitrary field query filters
          // console.log({
          //   queryName: queryName,
          //   queryValue: rootState.route.query[queryName],
          //   fieldName: fieldName,
          //   story: story
          // })
          if (rootState.route.query[queryName] === undefined) {
            // if the query is undefined, this filter must not be active
            return true;
          } else if (story.fields[fieldName] === undefined) {
            // if the story does not have this field it must not be active
            return false;
          } else if (Array.isArray(story.fields[fieldName])) {
            // if the field is a array, check it
            return story.fields[fieldName]
              .map((n) => n.toLowerCase())
              .includes(rootState.route.query[queryName].toLowerCase());
          } else {
            // the field must be a string, check it
            return (
              story.fields[fieldName].toLowerCase() ===
              rootState.route.query[queryName].toLowerCase()
            );
          }
        };
        const hasActiveTheme = filterByField("theme", "Story Theme");
        const hasActiveTag = filterByField("tag", "ID Tags");
        const hasActiveCampus = filterByField("campus", "Campus");
        // console.log({
        //   hasActiveTheme: hasActiveTheme,
        //   hasActiveTag: hasActiveTag,
        //   hasActiveCampus: hasActiveCampus,
        // })

        return hasActiveTheme && hasActiveTag && hasActiveCampus;
      });
      const sortedStories = filteredStories.sort((a, b) => {
        return a.fields[state.sortStoriesBy].localeCompare(
          b.fields[state.sortStoriesBy],
        );
      });
      return sortedStories;
    },
    storyInMap: (state, getters) => {
      if (!getters.mapGetBounds) {
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
    storysActive: (state) => {
      return state.storysActive;
    },
    isStoryActive: (state) => (id) => {
      const isStoryActive = state.storysActive.some((story) => {
        return story.id === id;
      });
      return isStoryActive;
    },
    storyLayer: (state) => {
      if (
        state.storysActive[0] &&
        state.storysActive[0].fields &&
        state.storysActive[0].fields["Impact Map Layer URL"]
      ) {
        return state.storysActive[0];
      } else {
        return null;
      }
    },
    themeNames: (state) => {
      return state.themeNames;
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
      state.isStoriesFrameOpen = false;
      state.isFilterFrameOpen = false;

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
        state.isStoriesFrameOpen = false;
        state.isFilterFrameOpen = false;
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
      state.isStoriesFrameOpen = false;
      state.isFilterFrameOpen = false;
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
        state.isStoriesFrameOpen = false;
        state.isFilterFrameOpen = false;
      } else {
        state.isHelpFrameOpen = false;
      }
    },

    closeStoriesFrame: (state) => {
      state.isStoriesFrameOpen = false;
    },
    openStoriesFrame: (state) => {
      state.isVideoFrameOpen = false;
      state.storysActive = [];
      state.isHelpFrameOpen = false;
      state.isStoriesFrameOpen = true;
      state.isFilterFrameOpen = false;
      event(`open-video`, {
        event_category: "content",
        event_label: "open-video",
        value: 1,
        method: "Google",
      });
    },
    toggleStoriesFrame: (state) => {
      if (!state.isStoriesFrameOpen) {
        state.isVideoFrameOpen = false;
        state.storysActive = [];
        state.isHelpFrameOpen = false;
        state.isStoriesFrameOpen = true;
        state.isFilterFrameOpen = false;
      } else {
        state.isStoriesFrameOpen = false;
      }
    },

    closeFilterFrame: (state) => {
      state.isFilterFrameOpen = false;
    },
    openFilterFrame: (state) => {
      state.isVideoFrameOpen = false;
      state.storysActive = [];
      state.isHelpFrameOpen = false;
      state.isStoriesFrameOpen = false;
      state.isFilterFrameOpen = true;
      event(`open-video`, {
        event_category: "content",
        event_label: "open-video",
        value: 1,
        method: "Google",
      });
    },
    toggleFilterFrame: (state) => {
      if (!state.isFilterFrameOpen) {
        state.isVideoFrameOpen = false;
        state.storysActive = [];
        state.isHelpFrameOpen = false;
        state.isStoriesFrameOpen = false;
        state.isFilterFrameOpen = true;
      } else {
        state.isFilterFrameOpen = false;
      }
    },

    setSortStoriesBy: (state, sortBy) => {
      if (sortBy === "Last Name") {
        state.sortStoriesBy = "Last Name";
      } else if (sortBy === "en-StoryTitle") {
        state.sortStoriesBy = "en-StoryTitle";
      } else {
        // default
        state.sortStoriesBy = "en-StoryTitle";
      }
    },
    resetSortStoriesBy: (state) => {
      state.sortStoriesBy = "en-StoryTitle";
    },

    addActiveStory: (state, story) => {
      // add story to active list
      if (!story) {
        console.log(
          "addActiveStory requires a story object. To remove all storys use removeActiveStories",
        );
        return;
      }
      console.log(`Activated: ${story.fields["en-StoryTitle"]}`);
      event(`view-story`, {
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
      //state.isStoriesFrameOpen = false;
      state.isFilterFrameOpen = false;
    },
    toggleActiveStory: (state, story) => {
      if (!story) {
        console.log(
          "toggleActiveStory requires a story object. To remove all storys use removeActiveStories",
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
          state.storysActiveMax,
        );
        state.isVideoFrameOpen = false;
        state.isHelpFrameOpen = false;
        //state.isStoriesFrameOpen = false;
        state.isFilterFrameOpen = false;
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
          "removeActiveStory requires a story object. To remove all storys use removeActiveStories",
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
  },
  actions: {
    setTheme: ({ state, rootState }, theme) => {
      state.isFilterFrameOpen = false;
      if (
        rootState.route.query.theme &&
        rootState.route.query.theme.toLowerCase() === theme.toLowerCase()
      ) {
        return;
      } // prevent redudant nav
      router.push({ query: { ...rootState.route.query, theme: theme } }); // leave other query paramaters alone
    },
    resetThemes: ({ state, rootState }) => {
      state.isFilterFrameOpen = false;
      if (rootState.route.query.theme === undefined) {
        return;
      } // prevent redudant nav
      router.push({ query: { ...rootState.route.query, theme: undefined } }); // leave other query paramaters alone
    },
    setCampus: ({ state, rootState }, campus) => {
      state.isFilterFrameOpen = false;
      if (
        rootState.route.query.campus &&
        rootState.route.query.campus.toLowerCase() === campus.toLowerCase()
      ) {
        return;
      } // prevent redudant nav
      router.push({ query: { ...rootState.route.query, campus: campus } }); // leave other query paramaters alone
    },
    resetCampus: ({ state, rootState }) => {
      state.isFilterFrameOpen = false;
      if (rootState.route.query.campus === undefined) {
        return;
      } // prevent redudant nav
      router.push({ query: { ...rootState.route.query, campus: undefined } }); // leave other query paramaters alone
    },
    setTag: ({ state, rootState }, tag) => {
      state.isFilterFrameOpen = false;
      // tags toggle, because there is no all tag button
      if (rootState.route.query.tag === undefined) {
        router.push({
          query: { ...rootState.route.query, tag: tag },
        }); // leave other query paramaters alone
      } else {
        router.push({
          query: { ...rootState.route.query, tag: undefined },
        });
      }
    },
    resetTags: ({ state, rootState }) => {
      state.isFilterFrameOpen = false;
      if (rootState.route.query.tag === undefined) {
        return;
      } // prevent redudant nav
      router.push({ query: { ...rootState.route.query, tag: undefined } }); // leave other query paramaters alone
    },
    resetFilters: ({ state, rootState }) => {
      state.isFilterFrameOpen = false;
      if (
        rootState.route.query.theme === undefined &&
        rootState.route.query.campus === undefined &&
        rootState.route.query.tag === undefined
      ) {
        return;
      }
      router.push({
        query: {
          ...rootState.route.query,
          theme: undefined,
          campus: undefined,
          tag: undefined,
        },
      }); // leave other query paramaters alone
    },
  },
};

export default storys;
