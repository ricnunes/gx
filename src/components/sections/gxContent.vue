<template>
  <div class="sections">
    <gxHome />
    <gxSectionTwo />
    <gxIpads />
    <gxSectionSix />
    <gxSectionSixTwo />
    <gxSectionSeven />
    <gxSectionHeight />
    <gxFooter />
  </div>
</template>

<script>
import gxHome from './gx-home.vue';
import gxSectionTwo from './gx-section2.vue';
import gxIpads from './gx-ipads.vue';
import gxSectionSix from './gx-section6.vue'
import gxSectionSixTwo from './gx-section6-2.vue'
import gxSectionSeven from './gx-section7.vue';
import gxSectionHeight from './gx-section8.vue';
import gxFooter from '../common/footer.vue'

export default({
  components: {
    gxHome,
    gxSectionTwo,
    gxIpads,
    gxSectionSix,
    gxSectionSixTwo,
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