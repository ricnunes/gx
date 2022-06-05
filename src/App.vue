<template>
  <div id="app">
    <gxHeader />
    <gxLoader v-show="!isLoaded" />
    <gxContent v-if="isLoaded" />
    
  </div>
</template>

<script>
import gxHeader from './components/common/header.vue'
import gxLoader from './components/common/loader.vue'
import gxContent from './components/sections/gxContent.vue'

export default {
  name: 'App',
  components: {
    gxHeader,
    gxLoader,
    gxContent
  },
  data () {
    return {
      isLoaded : false,
      publicPath: process.env.NODE_ENV === "production" ? "/gx/" : ""
    }
  },
  mounted () {
    this.axios.get(this.publicPath + '/static/assets/videos/home.mp4').then(() => {
      document.getElementsByClassName('gx-loader')[0].classList.add('complete')
      setTimeout(() => {
        this.isLoaded = true
      }, 100);
    })
  }
}
</script>

<style lang="scss">
@import './scss/settings.scss';
@import './scss/base.scss';

body {
  background: black;
  scroll-behavior: smooth;
}

.scrollLocked {
  overflow: hidden;
}

</style>
