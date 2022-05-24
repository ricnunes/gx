<template>
  <div class="gx-section gx-section--five">
    <div class="videoAnimation">
      <div class="content">
        <h2>Predictive Analytics with Real Time Simulation</h2>
        <p>It is constantly fine tuning to find what is relevant in the moment, built for you.</p>
        <p>Constantly fine-tuned to find signals relevant in the current moment.</p>
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
  .videoAnimation {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    position: relative;
    transform: translateX(500px);
    flex-direction: row;
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
 