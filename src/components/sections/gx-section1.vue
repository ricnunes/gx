<template>
  <div class="gx-section gx-section--one">
    <div class="content">
    <h1>Your ultimate data platform.</h1>
    <h4>AI-driven Smart Data Platform turning data into truth.</h4>
    <h5>The ontology integrates data from multiple sources into a single ecosystem and provides analytics teams with high quality fuel. The Analytics engine offers insight advantage through early trend detection. The Visualisation layer offers beautifully engineered dashboards with real-time simulation.</h5>
    <h5>Let’s see what this thing can do.</h5>
    <button class="btn btn--primary btn--primary--darkB" @click="playVideo()">Watch the video</button>
    </div>
  </div>
</template>

<script>
export default({
  methods: {
    playVideo () {
      // play video
    }
  }
})
</script>


<style lang="scss">

.gx-section--one {
  text-align: center;
  background: radial-gradient(at -8% 100%, rgba(3, 77, 185, 0.4) 5px, transparent 70%);
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  .content {
    width: 100%;
    margin: 0 auto;
    @include breakpoint($medium) {
      width: 70%;
    }
    h1 {
      margin-bottom: 7.3rem;
    }
    h4 {
      margin-bottom: 5rem;
    }
    h5 {
      margin-bottom: 2.5rem;
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
      &:last-child {
        margin-bottom: 0;
      }
    }
    button {
      margin-top: 7.5rem
    }
  }

}
</style>
 