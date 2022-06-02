<template>
  <div class="sections">
    <gxHome />
    <gxSectionTwo />
    <gxSectionThree />
    <gxSectionFour />
    <gxSectionFive />
    <gxSectionSix />
    <gxSectionSeven />
    <gxSectionHeight />
  </div>
</template>

<script>
import isElementVisible from "../utilities/u-isElementVisible.vue";
import gxHome from './gx-home.vue';
import gxSectionTwo from './gx-section2.vue';
import gxSectionThree from './gx-section3.vue';
import gxSectionFour from './gx-section4.vue';
import gxSectionFive from './gx-section5.vue';
import gxSectionSix from './gx-section6.vue';
import gxSectionSeven from './gx-section7.vue';
import gxSectionHeight from './gx-section8.vue';

export default({
  components: {
    gxHome,
    gxSectionTwo,
    gxSectionThree,
    gxSectionFour,
    gxSectionFive,
    gxSectionSix,
    gxSectionSeven,
    gxSectionHeight
  },
  mounted() {
    const content = document.getElementsByClassName('gx-section');

    content.forEach((item) => {
      item.addEventListener('scroll', function () {
        if (isElementVisible(item)) {
          console.log(item);
        }
      })
    })
  }
})
</script>

<style lang="scss">

</style>