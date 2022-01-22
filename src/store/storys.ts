import * as storiesFile from '../assets/allStories.json';
const stories = storiesFile.response;

function toFilterTags(tagName) {
  console.log(`Tag: ${tagName}`)
  const tagListDuplicated = stories.reduce(function (tags, story) {
    if (story.fields && story.fields[tagName] && Array.isArray(story.fields[tagName]) && story.fields[tagName].length >= 1) {
      return [...tags, ...story.fields[tagName]]
    } else if (story.fields && story.fields[tagName] ) { 
      return [...tags, story.fields[tagName]]
    } else { return tags }
  }, [])
  const tagList = [...new Set(tagListDuplicated)]
  console.log({tagList : tagList})
  return tagList.map((tag) => {
    return {
      name: tag,
      isActive: true,
      tagName: tagName,
    }
  })
}


const storys =
{
  state: {
    all: stories,
    storyThemes: toFilterTags('Story Theme'),
    storyTags: toFilterTags('Story Tags'),
    idTags: toFilterTags('ID Tags'),
    collegeTags: toFilterTags('College/Division'),

  },
  getters: {
    storyAll: (state) => { return state.all },
    storyCurrent: (state, getters) => {
      return getters.storyAll.filter((story)=>{

        console.log('imhere')
        const hasActiveTheme = !!state.storyThemes.filter((storyTheme)=>{
          return story.fields['Story Theme'] === storyTheme.name ? storyTheme.isActive : false
        }).length;


        return hasActiveTheme;
      });
    },

    storyThemes: (state) => { return state.storyThemes },
    idTags: (state) => { return state.idTags },
    collegeTags: (state) => { return state.collegeTags },

  },
  mutations: {
    setTag: (state, payload) => {
      // payload.tagName
      // payload.name
      state[payload.tagName] = state[payload.tagName].map((tag) => {
        return {
          ...tag,
          isActive: (tag.name === payload.name)
        }
      })
    },
    resetTags: (state, tagName) => {
      console.log()
      state[tagName] = state[tagName].map((tag) => {
        return {
          ...tag,
          isActive: true,
        }
      })
    },
  },
  actions: {},
};

export default storys;
