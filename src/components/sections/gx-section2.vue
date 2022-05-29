<template>
  <div class="gx-section gx-section--two">
    <h3>Internal and external data sources connected.</h3>
    <div class="videoAnimation">
      <video autoplay playsinline loop muted="muted" ref="video">
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
    background: url('../../assets/imgs/gx-tablet.svg') no-repeat transparent center center;
    padding: 120px 0;
    video {
      max-width: 1085px;
    }
  }
}
</style>
 