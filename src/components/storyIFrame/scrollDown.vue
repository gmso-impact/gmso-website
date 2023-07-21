<template lang="">
    <div class="scrollDown" v-show="isVisible">
      <div class="d-flex flex-column justify-content-end fadeIn">
        <div class="callToAction row justify-content-center py-3">
          <div class="col-4 blackGlow py-2">Swipe up to view more stories</div>
        </div>
        <div class="swipeFinger blackGlow col-4 mx-auto">
          <font-awesome-icon class="fa-4x" icon="fa-solid fa-hand-pointer" />
        </div>
      </div>
    </div>
  </template>
  <script>
  import { mapGetters, mapMutations } from "vuex";
  
  const seconds = 1000;
  const minutes = 60 * seconds;
  const hours = 60 * minutes;
  export default {
    name: "scrollDown",
    data() {
      return {
          isVisible: true
      }
    },
    computed: {
      ...mapGetters({
        //timeSinceInteraction: "timeSinceInteraction",
        //storyInMap: "storyInMap",
      }),
  
  
    },
    /*watch: {
          timeSinceInteraction: {
              immediate: true,
              handler: function (timeSinceInteraction, oldVal) {
                  if(timeSinceInteraction > 0.1 * seconds && this.storyInMap.length > 24){
                      this.isVisible = true 
                  } else {
                      this.isVisible = false
                  }
              }
          },
          storyInMap: {
              immediate: true,
              handler: function (storyInMap, oldVal) {
                  if(storyInMap.length > 24){
                      this.isVisible = true
                  } else {
                      this.isVisible = false
                  }
              }
          },
      },*/
  };
  </script>
  <style lang="scss">
  .scrollDown {
    //pointer-events: none;
    margin-bottom: 10vh;
    position: absolute;
    bottom: 0;
    color: white;
    text-align: center;
    width: 50%;
    animation: fadeIn 1s;
    //z-index:99998;
    //border: solid 10px red;
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
    background-color: #000000aa;
    box-shadow: 0px 0px 2vh 2vh #000000aa;
  }
  .callToAction {
    font-weight: 600;
    animation: fadeInOut ease 15s;
    animation-iteration-count: infinite;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    10%{
      opacity: 1;
    }
    40%{
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
      transform: translate(0, 16px);
      opacity: 0;
    }
    10%{
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    49% {
      transform: translate(0, 10vh);
      opacity: 0;
    }
  
  
    51% {
      transform: translate(0, -16px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate(0, -20vh);
      opacity: 0;
    }
  
  }
  
  //     transform: translate(0, 10vh);
  //       opacity: 0;
  </style>