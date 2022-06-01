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

import { TweenMax } from 'gsap'

export default {
  name: 'App',
  components: {
    gxHeader,
    gxLoader,
    gxContent
  },
  data () {
    return {
      isLoaded : false      
    }
  },
  mounted () {
    this.axios.get('/static/assets/videos/home.mp4').then(() => {
      this.isLoaded = true
    })
    Axios({
      method: 'get',
      url: '/static/assets/videos/home.mp4',
      onDownloadProgress: function(progressEvent) {
        let progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        if (progress == 100) {
          console.log('loaded')
          this.isLoaded = true
        }
      }
    })
    this.$scrollmagic.handleScrollTo = function (target) {
      TweenMax.to(window, 1.5, {
        scrollTo: {
        y: target,
        autoKill: false
      }
      })      
    }
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
