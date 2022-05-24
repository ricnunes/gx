<template>
  <div class="gx-section gx-section--one">
    <h1>Your ultimate data platform.</h1>
    <h3>AI-driven Smart Data Platform turning data into truth.</h3>
    <p>The ontology integrates data from multiple sources into a single ecosystem and provides analytics teams with high quality fuel. The Analytics engine offers insight advantage through early trend detection. The Visualisation layer offers beautifully engineered dashboards with real-time simulation.</p>
    <h3>Let’s see what this thing can do.</h3>
    <button class="btn btn--primary" @click="playVideo()">Watch the video</button>
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
  height: 100vh;
  background: radial-gradient(at -8% 100%, rgba(3, 77, 185, 0.4) 5px, transparent 70%);
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

}
</style>
 