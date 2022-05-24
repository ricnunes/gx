<template>
  <div class="sections">
    <gxHome />
    <gxSectionOne />
    <gxSectionTwo />
    <gxSectionThree />
    <gxSectionFour />
    <gxSectionFive />
    <gxSectionSix />
  </div>
</template>

<script>
import gxHome from './gx-home.vue';
import gxSectionOne from './gx-section1.vue';
import gxSectionTwo from './gx-section2.vue';
import gxSectionThree from './gx-section3.vue';
import gxSectionFour from './gx-section4.vue';
import gxSectionFive from './gx-section5.vue';
import gxSectionSix from './gx-section6.vue';

export default({
  components: {
    gxHome,
    gxSectionOne,
    gxSectionTwo,
    gxSectionThree,
    gxSectionFour,
    gxSectionFive,
    gxSectionSix,
  },
})
</script>

<style lang="scss">

</style>