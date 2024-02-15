<template lang="">
  <div
    class="col-6 col-lg-12 col-xl-4 col-xxl-4 p-1 p-xxl-2"
    v-if="story.fields['en-StoryTitle']"
  >
    <div
      class="story-card w-100 h-100 p-1 btn d-flex flex-column rounded-0 position-relative"
      :class="[
        `btn-${story.fields['Story Theme']}`,
        isStoryActive(story.id) ? 'active' : '',
      ]"
      v-on:click="addActiveStory(story)"
    >
      <img
        v-if="storyImagePath"
        :src="storyImagePath"
        class="w-100 img-fluid"
        alt="Card image cap"
        :width="width"
        :height="height"
      />
      <!-- <img
        v-if="
          story.fields['Story Card Image'] &&
          story.fields['Story Card Image'][0] &&
          story.fields['Story Card Image'][0].thumbnails
        "
        :src="story.fields['Story Card Image'][0].thumbnails.large.url"
        class="w-100"
        alt="Card image cap"
      /> -->
      <div class="featuredStory pr-2 pt-1" v-if="story.fields['featured']">
        <font-awesome-icon class="id-icon fa-1.5" :icon="['fas', 'star']" />
      </div>
      <div
        class="card-body d-flex justify-content-center align-items-center p-1 text-center text-white"
      >
        <transition name="fade" mode="out-in">
          <div :key="storyTitle" v-if="sortStoriesBy === 'en-StoryTitle'">
            {{ storyTitle }}
          </div>
          <div :key="storyPerson" v-if="sortStoriesBy === 'Last Name'">
            <span>{{ this.story.fields["First Name"] }} </span>
            <span class="font-weight-bold">{{
              this.story.fields["Last Name"]
            }}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import imageSizes from "@/helper/imagesSizes.js";

export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { imageSizes: imageSizes };
  },
  methods: {
    ...mapMutations({ addActiveStory: "addActiveStory" }),
  },
  computed: {
    ...mapGetters({
      isStoryActive: "isStoryActive",
      getBreakpoints: "getBreakpoints",
      sortStoriesBy: "sortStoriesBy",
    }),
    storyTitle: function () {
      if (this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`]) {
        return this.story.fields[`${this.$root.$i18n.locale}-StoryTitle`];
      } else {
        // default to english
        return this.story.fields["en-StoryTitle"];
      }
    },
    storyPerson: function () {
      // This is only used as a KEY for fading in and out. To modify the text displayed see the <span> tags above.
      return `${this.story.fields["First Name"]} ${this.story.fields["Last Name"]}`;
    },
    height: function () {
      return this.imageSizes[this.getBreakpoints[0]].height;
    },
    width: function () {
      return this.imageSizes[this.getBreakpoints[0]].width;
    },
    storyImagePath: function () {
      if (
        !this.story.fields["Story Card Image"] ||
        !this.story.fields["Story Card Image"][0]
      ) {
        return null;
      }
      const rootpath = "stories";

      return `${rootpath}/${this.story.fields["Story Card Image"][0].id}-${
        this.getBreakpoints[0]
      }.${getExt(this.story.fields["Story Card Image"][0].type)}`;
    },
  },
};

function getExt(type) {
  if (type === "image/jpeg") {
    return "jpg";
  }
  if (type === "image/png") {
    return "png";
  } else {
    console.log(`Bad file extension ${type}`);
  }
}
</script>

<style scoped lang="scss">
.story-card {
  min-height: 10vh;
}

.featuredStory {
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.979));
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));

  animation-name: flash;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
@keyframes flash {
  0% {
    opacity: 0.5;
  }
  10% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  90% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
