<template>
  <div id="app">
    <gxHeader />
    <gxLoader v-show="!isLoaded" />
    <gxContent v-if="isLoaded" />
    
  </div>
</template>

<script>
import Axios from 'axios'
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
    Axios({
      method: 'get',
      url: '/static/assets/videos/home.mp4',
      onDownloadProgress: function(progressEvent) {
        let progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        if (progress == 100) {
          this.isLoaded = true
        }
      }
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
