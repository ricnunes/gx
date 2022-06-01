<template>
  <div class="gx-loader">
    <lottie-vue-player 
    :src="`${publicPath}/static/assets/imgs/lf30_dlviouvg.json`" 
    :backgroundColor="options.backgroundColor" 
    loop autoplay
    style="width: 110px; height: 100vh;"></lottie-vue-player>
  </div>
</template>

<script>

export default {
  name: 'gxLoader',
  data () {
    return {
      options: {
        backgroundColor: '#000',
      },
      publicPath: process.env.NODE_ENV
    }
    
  }
}
</script>

<style lang="scss">
.gx-loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  background: black;
}
lottie-player {
  width: 110px;
  height: auto;
  margin: auto;
  // background: black !important;
  #animation-container {
    background: red;
  }
}
</style>