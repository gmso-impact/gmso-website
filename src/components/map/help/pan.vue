<template lang="">
  <div class="scrollDown" v-if="this.$route.name === 'Kiosk'">
    <div class="fadeIn" v-show="isVisible">
      <div class="callToAction blackGlow" v-html="$t('helpMapSwipe')"></div>
      <div class="swipeFinger blackGlow">
        <font-awesome-icon class="fa-4x" icon="fa-solid fa-hand-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "helpMap",
  data() {
    return {
      isVisible: true,
    };
  },
  computed: {
    ...mapGetters({}),
  },
};
</script>

<style lang="scss" scoped>
.scrollDown {
  pointer-events: none;
  position: absolute;
  top: 60%;
  right: 25%;
  color: white;
  text-align: center;
  animation: fadeIn 1s;
  z-index: 999999;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blackGlow {
  filter: drop-shadow(4px 4px 4px #000) drop-shadow(-4px 4px 4px #000)
    drop-shadow(4px -4px 4px #000) drop-shadow(-4px -4px 4px #000)
    drop-shadow(0px 0px 8px #000) drop-shadow(0px 0px 30px #000);
}

.callToAction {
  font-weight: 600;
  animation: fadeInOut ease 15s; //
  animation-iteration-count: infinite;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.swipeFinger {
  animation: swipe ease 15s;
  animation-iteration-count: infinite;
}

@keyframes swipe {
  0% {
    transform: translate(0, 10vh);
    opacity: 0;
  }

  50% {
    transform: translate(0, 0);
    opacity: 0;
  }

  60% {
    transform: translate(0, -5vh);
    opacity: 1;
  }
  70% {
    transform: translate(-5vh, 0);
    opacity: 1;
  }
  80% {
    transform: translate(5vh, 0);
    opacity: 1;
  }

  90% {
    transform: translate(0, 5vh);
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

//     transform: translate(0, 10vh);
//       opacity: 0;
</style>
