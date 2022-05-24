<template>
  <div class="gx-section gx-section--four">
    <div class="videoAnimation">
      <div class="content">
        <h2>Automated Credit Modelling</h2>
        <p>Tailored digitalization model to forecast client’s financials.</p>
        <p>Peer benchmarking.</p>
        <p>Making excel redundant.</p>
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
  .videoAnimation {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    position: relative;
    transform: translateX(-500px);
    flex-direction: row-reverse;
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
 