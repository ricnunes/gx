<template>
  <div class="gx-section gx-section--six">
 
      <img src="../../assets/imgs/temp_image.jpg" alt="" />
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
.gx-section--six {
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
 