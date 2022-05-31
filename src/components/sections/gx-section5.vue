<template>
  <div class="gx-section gx-section--five">
    <div class="videoContainer">
      <div class="content">
        <div class="container">
          <h3>Predictive Analytics with Real Time Simulation</h3>
          <h5>
            It is constantly fine tuning to find what is relevant in the moment,
            built for you.
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
 