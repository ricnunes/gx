<template>
  <div class="sections">
    <gxHome />
    <gxSectionTwo />
    <gxIpadsTwo />
    <gxSectionSix />
    <gxSectionSeven />
    <gxSectionHeight />
    <gxFooter />
  </div>
</template>

<script>
import gxHome from './gx-home.vue';
import gxSectionTwo from './gx-section2.vue';
import gxIpadsTwo from './gx-ipads-2.vue';
import gxSectionSix from './gx-section6.vue'
import gxSectionSeven from './gx-section7.vue';
import gxSectionHeight from './gx-section8.vue';
import gxFooter from '../common/footer.vue'

export default({
  components: {
    gxHome,
    gxSectionTwo,
    gxIpadsTwo,
    gxSectionSix,
    gxSectionSeven,
    gxSectionHeight,
    gxFooter
  },
  mounted() {
  }
})
</script>

<style lang="scss">

</style>