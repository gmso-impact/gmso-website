import * as storiesFile from '../assets/allStories.json';
const stories = storiesFile.response;
const storyTags = stories.reduce(function (tags, story) {
  if (story.fields && story.fields['Story Tags'] && story.fields['Story Tags'].length >= 1) {
    return [...tags, ...story.fields['Story Tags']]
  } else { return tags }
}, [])
const idTags = stories.reduce(function (tags, story) {
  if (story.fields && story.fields['ID Tags'] && story.fields['ID Tags'].length >= 1) {
    return [...tags, ...story.fields['ID Tags']]
  } else { return tags }
}, [])
const collegeTags = stories.reduce(function (tags, story) {
  if (story.fields && story.fields['College/Division'] && story.fields['College/Division'].length >= 1) {
    return [...tags, ...story.fields['College/Division']]
  } else { return tags }
}, [])
const storyList =
{
  state: {
    all: stories,
    storyTags: [...new Set(storyTags)],
    idTags: [...new Set(idTags)],
    collegeTags: [...new Set(collegeTags)],

  },
  getters: {
    storyAll: (state) => { return state.all },
    storyCurrent: (state, getters) => {
      return getters.storyAll;
    }

  },
  mutations: {},
  actions: {},
};

export default storyList;
