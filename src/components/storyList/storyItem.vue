<template lang="">
  <div class="col-md-6 col-lg-6 col-xl-4"  v-if="story.fields['Story Title']">
    <div class="card mt-3" :class="`bg-spur-${story.fields['Story Theme']}`">
      <img
        v-if="story.fields['Story Card Image']"
        :src="story.fields['Story Card Image'][0].thumbnails.large.url"
        class="card-img-top"
        alt="Card image cap"
      />
      <div class="card-body d-flex align-items-center ">
        <div class="card-title w-100 text-center text-white">{{ story.fields["Story Title"] }}</div>
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



.card {
  min-height: 200px;
}
.card-title {
  font-size: 1rem;
  font-weight: bold;
}
</style>
