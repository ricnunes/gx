<template>
  <div class="gx-section gx-section--three">
    <div class="videoContainer">
      <div class="content">
        <div class="container">
          <h3>Early Warning Signals and Trend Detections</h3>
          <h5>
            Analytics delivering signal not noise with sources that work in the
            future not just the past.
          </h5>
          <h5>
            Constantly fine-tuned to find signals relevant in the current
            moment.
          </h5>
          <a class="btn btn--primary btn--primary--darkB" href="#"
            >Find out how</a
          >
        </div>
      </div>
      <div class="videoAnimation">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <video autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section2.mp4" />
        </video>
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
.gx-section--three {
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: visible;
  .videoContainer {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: relative;
    transform: translateX(500px);
    .videoAnimation {
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
      padding: 0;
      width: 100vw;
      height: 100vh;
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
        width: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      width: 350px;
      h3 {
        margin-bottom: 5rem;
      }
      h5 {
        margin-bottom: 3rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .btn {
        margin-top: 5rem;
      }
    }
  }
}
</style>
 