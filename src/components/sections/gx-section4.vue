<template>
  <div class="gx-section gx-section--four">
    <div class="videoContainer">
      <div class="content">
        <div class="contai">
          <h3>Automated Credit Modelling</h3>
          <h5>Tailored digitalization model to forecast client’s financials.</h5>
          <h5>Peer benchmarking.</h5>
          <h5>Making excel redundant.</h5>
          <a class="btn btn--primary btn--primary--darkB" href="#">Find out how</a>
        </div>
      </div>
      <div class="videoAnimation">
        <video autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section4.mp4" />
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
.gx-section--four {
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
    justify-content: flex-start;
    align-content: center;
    position: relative;
    transform: translateX(-500px);
    flex-direction: row-reverse;
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
 