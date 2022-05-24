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
      isLoaded : true      
    }
  },
  mounted () {
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

</style>
