<template lang="">
  <div class="col-md-6 col-lg-6 col-xxl-4"  v-if="story.fields['Story Title']">
    <div class="card p-0 btn mt-3" :class="`bg-${story.fields['Story Theme']}`">
      <img
        v-if="story.fields['Story Card Image']"
        :src="story.fields['Story Card Image'][0].thumbnails.large.url"
        class="card-img-top"
        alt="Card image cap"
      />
      <div class="card-body d-flex justify-content-center align-items-center p-1 text-center font-weight-bold">
      <div>
      {{ story.fields["Story Title"] }}
      </div>
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
