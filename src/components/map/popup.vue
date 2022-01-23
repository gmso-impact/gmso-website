<template lang="">
    <div class="card">
      <div class="card-header">
        {{ story.fields["Story Title"] }}
      </div>
      <div class="card-body">
      </div>
    </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {

    };
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon: function () {
      return 22;
    },
  },
};
</script>
<style lang="scss">
.leaflet-popup-content {margin: 0}
</style>
