<template>
  <div class="gx-section gx-section--six VideoBg">
    <video autoplay playsinline :muted="muted" ref="video">
      <source src="../../assets/videos/section6.mp4" />
    </video>
    <div class="VideoBg__content">
      <h3>Ontology connecting data into a single data ecosystem</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    muted: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      videoRatio: null,
    };
  },
  mounted() {
    this.setImageUrl();
    this.setContainerHeight();
    if (this.videoCanPlay()) {
      this.$refs.video.oncanplay = () => {
        if (!this.$refs.video) return;
        this.videoRatio =
          this.$refs.video.videoWidth / this.$refs.video.videoHeight;
        this.setVideoSize();
        this.$refs.video.style.visibility = "visible";
      };
    }
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.setContainerHeight();
      if (this.videoCanPlay()) {
        this.setVideoSize();
      }
    },
    videoCanPlay() {
      return !!this.$refs.video.canPlayType;
    },
    setImageUrl() {
      if (this.img) {
        this.$el.style.backgroundImage = `url(${this.img})`;
      }
    },
    setContainerHeight() {
      this.$el.style.height = `${window.innerHeight}px`;
    },
    setVideoSize() {
      var width,
        height,
        containerRatio = this.$el.offsetWidth / this.$el.offsetHeight;
      if (containerRatio > this.videoRatio) {
        width = this.$el.offsetWidth;
      } else {
        height = this.$el.offsetHeight;
      }
      this.$refs.video.style.width = width ? `${width}px` : "auto";
      this.$refs.video.style.height = height ? `${height}px` : "auto";
    },
  },
};
</script>


<style lang="scss">
.gx-section--six {
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  .VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  .VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
  }
  .VideoBg__content {
    position: absolute;
    top: 6.5rem;
    left: 0;
    right: 0;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    h3 {
      width: 50%;
      margin: 0 auto;
    }
    
  }
}
</style>
 