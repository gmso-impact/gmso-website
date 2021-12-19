<template lang="">
  <div class="col-md-6">
    <div class="card mb-3">
      <img class="card-img-top" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
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
