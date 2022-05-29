<template>
  <div class="gx-section gx-section--five">
    <div class="videoContainer">
      <div class="content">
        <div class="container">
          <h3>Predictive Analytics with Real Time Simulation</h3>
          <h5>It is constantly fine tuning to find what is relevant in the moment, built for you.</h5>
          <h5>Constantly fine-tuned to find signals relevant in the current moment.</h5>
          <a class="btn btn--primary btn--primary--darkB" href="#">Find out how</a>
        </div>
      </div>
      <div class="videoAnimation">
      <video autoplay playsinline loop muted="muted" ref="video">
        <source src="../../assets/videos/section1.mp4" />
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
.gx-section--five {
  height: 100vh;
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  .videoContainer {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: relative;
    transform: translateX(500px);
    flex-direction: row;
    .videoAnimation {
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
      background: url("../../assets/imgs/gx-tablet.svg") no-repeat transparent
        center center;
      padding: 120px 270px;
      video {
        max-width: 1070px;
      }
    }
    .content {
      height: 100vh;
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
 