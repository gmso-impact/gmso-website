<template>
  <div
    class="d-flex h-100 position-absolute kioskOverlay flex-wrap"
    v-if="true && (this.$route.name === 'Kiosk' && getBreakpoints.includes('xxl'))"
  >
    <div
      class="border w-25 h-50 panel d-flex justify-content-center align-items-center"
      v-for="panel in panels"
      :key="panel"
    >
      <div class="panelNum">{{ panel }}</div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "kioskOverlay",
  data() {
    return {
      panels: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      getBreakpoints: "getBreakpoints",
    }),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.kioskOverlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  pointer-events: none;
}
.panelNum {
  font-size: 5em;
  color: red;
  font-weight: 700;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>
