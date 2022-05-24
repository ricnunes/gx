<template>
  <div class="gx-section gx-section--two">
    <h1>Internal and external data sources connected.</h1>
    <div class="videoAnimation">
      <div class="animationContainer">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <div class="videoContainer">
          <!-- <video autoplay playsinline loop muted="muted" ref="video">
            <source src="../../assets/videos/section1.mp4" />
          </video> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playVideo() {
      // play video
    },
  },
};
</script>


<style lang="scss">
.gx-section--two {
  text-align: center;
  height: 100vh;
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  .videoAnimation {
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    .videoContainer {
      position: absolute;
      top: 0;
      left: 0;
      width: 50vw;
      video {
        width: 100%;
      }
    }
  }
}
</style>
 