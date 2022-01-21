<template lang="">
  <div class="col-md-6 col-lg-6 col-xl-4"  v-if="story.fields['Story Title']">
    <div class="card mt-3" :class="`bg-spur-${story.fields['Story Theme']}`">
      <img
        v-if="story.fields['Story Card Image']"
        :src="story.fields['Story Card Image'][0].thumbnails.large.url"
        class="card-img-top"
        alt="Card image cap"
      />
      <div class="card-body text-center text-white">
        <h3 class="card-title">{{ story.fields["Story Title"] }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">




.card-title {
  font-size: 1rem;
  font-weight: bold;
}
</style>
