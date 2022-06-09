<template>
  <div class="sections">
    <gxHome />
    <gxSectionTwo />
    <!-- <gxIpads /> -->
    <gxIpadsTwo />
    <!-- <gxSectionThree />
    <gxSectionFour />
    <gxSectionFive /> -->
    <gxSectionSix />
    <gxSectionSeven />
    <gxSectionHeight />
    <gxFooter />
  </div>
</template>

<script>
import gxHome from './gx-home.vue';
import gxSectionTwo from './gx-section2.vue';
// import gxIpads from './gx-ipads.vue';
import gxIpadsTwo from './gx-ipads-2.vue';
// import gxSectionThree from './gx-section3.vue';
// import gxSectionFour from './gx-section4.vue';
// import gxSectionFive from './gx-section5.vue';
import gxSectionSix from './gx-section6.vue'
import gxSectionSeven from './gx-section7.vue';
import gxSectionHeight from './gx-section8.vue';
import gxFooter from '../common/footer.vue'

export default({
  components: {
    gxHome,
    gxSectionTwo,
    // gxSectionThree,
    // gxSectionFour,
    // gxSectionFive,
    // gxIpads,
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