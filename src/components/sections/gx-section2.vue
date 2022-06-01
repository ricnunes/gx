<template>
  <div class="gx-section gx-section--two">
    <h3>Internal and external data sources connected.</h3>
    <h3>Internal and external data sources connected.</h3>
    <div class="videoAnimation">
      <img src="../../assets/imgs/gx-tablet.svg" alt="">
      <video autoplay playsinline muted="muted" ref="video">
        <source src="../../assets/videos/section1.mp4" />
      </video>
      <video autoplay playsinline muted="muted" ref="video">
        <source src="../../assets/videos/section1.mp4" />
      </video>
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
  mounted() {
    

  }
};
</script>


<style lang="scss">
.gx-section--two {
  text-align: center;
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
    width: 80vw;
    height: 59vh;
    overflow: visible;
    background-size: 100%;
    margin: auto;
    max-width: 80vw;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 55%;
      box-shadow: 0px 0px 79px 29px rgba(0, 109, 216, 0.5);
      border-radius: 37px;
    }
    video {
      position: absolute;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: 0;
      margin: auto;
      width: 50%;
    }
  }
}
</style>
 