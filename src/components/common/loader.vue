<template>
  <div class="gx-loader">
    <img src="../../assets/imgs/gx-loader.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'gxLoader',
  data () {
    return {
    }
    
  }
}
</script>

<style scoped lang="scss">
.gx-loader {
  position: fixed;
  top: 113px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
}
img {
  width: 110px;
  height: auto;
  margin: auto;
}
</style>