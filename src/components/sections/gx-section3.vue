<template>
  <div class="gx-section gx-section--three">
    <div class="videoAnimation">
      <div class="content">
        <h2>Early Warning Signals and Trend Detections</h2>
        <p>
          Analytics delivering signal not noise with sources that work in the
          future not just the past.
        </p>
        <p>
          Constantly fine-tuned to find signals relevant in the current moment.
        </p>
        <a class="btn btn--primary" href="#">Find out how</a>
      </div>
      <img src="../../assets/imgs/gx-tablet.svg" alt="" />
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
  .videoAnimation {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: relative;
    transform: translateX(500px);
    .content {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }
  }
}
</style>
 