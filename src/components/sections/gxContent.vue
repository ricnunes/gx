<template>
  <div class="sections">
    <gxHome />
    <gxSectionOne />
  </div>
</template>

<script>
import gxHome from './gx-home.vue';
import gxSectionOne from './gx-section1.vue';

export default({
  components: {
    gxHome,
    gxSectionOne,
  },
})
</script>

<style lang="scss">

</style>