<template lang="">
  <div class="col-md-6" v-if="story.fields['Story Title']">
    <div class="card mt-3">
      <img v-if="story.fields['Story Card Image']"
       :src="story.fields['Story Card Image'][0].thumbnails.large.url"
       class="card-img-top" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{story.fields['Story Title']}}</h5>
        <p class="card-text">
          Some quick example text 
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
<style lang=""></style>
