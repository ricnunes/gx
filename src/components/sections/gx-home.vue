<template>
  <div>
    <VideoGb>
      <div class="skip">Skip Intro</div>
    </VideoGb>
  </div>
</template>

<script>
import VideoGb from "../utilities/videoBg.vue";

export default {
  components: {
    VideoGb,
  },
  setup() {},
};
</script>

<style lang="scss">
.skip {
  position: absolute;
  right: 100px;
  bottom: 20vh;
  color: $white;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  
}
</style>