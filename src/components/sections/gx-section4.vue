<template>
  <div class="gx-section gx-section--four">
    <div class="videoContainer" :class="{ isVisible: isVisible}">
      <div class="content" :class="{ isVisible: isVisible}">
        <div class="container"  v-observe-visibility="visibilityChanged">
          <h3>Automated Credit Modelling</h3>
          <h5>Tailored digitalization model to forecast client’s financials.</h5>
          <h5>Peer benchmarking.</h5>
          <h5>Making excel redundant.</h5>
          <a class="btn btn--primary btn--primary--darkB" href="#">Find out how</a>
        </div>
      </div>
      <div class="videoAnimation">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <video autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section4.mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
   visibilityChanged (isVisible) {
      this.isVisible = isVisible
   }
  },
};
</script>


<style lang="scss">
.gx-section--four {
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
    justify-content: flex-start;
    align-content: center;
    position: relative;
    transform: translateX(-1500px);
    flex-direction: row-reverse;
    transition: transform 0.5s;
    &.isVisible {
      transition: transform 0.5s;
      transform: translateX(-500px);
    }
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
      opacity: 0;
      transition: all 1s ease;
      &.isVisible {
        transition: all 1s ease;
        opacity: 1;
      }
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
 