<template>
  <div class="gx-section gx-section--six VideoBg hidden-xs hidden-md">
    <video playsinline :muted="muted" ref="video" class="animatedVideo">
      <source src="../../assets/videos/section6.mp4" />
    </video>
    <div class="VideoBg__content">
      <h3>Ontology connecting data into a single data ecosystem</h3>
      <p>Making your data more aware and turning it into truth.</p>
      <div class="button-container">
        <a href="#" class="btn btn--primary btn--primary--darkB">Find out How</a>
      </div>      
    </div>

  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      videoDuration: null,
      isVisible: false,
    };
  },
  mounted() {
    const section6 = document.querySelectorAll(".gx-section--six h3")[0];
    const that = this;
    
    this.setContainerHeight();
    if (this.videoCanPlay()) {
      this.$refs.video.oncanplay = () => {
        this.videoDuration = this.$refs.video.duration;
        if (!this.$refs.video) return;
        this.$refs.video.videoWidth / this.$refs.video.videoHeight;
        this.setVideoSize();
        this.$refs.video.style.visibility = "visible";
      };
    }
    window.addEventListener("resize", this.resize);

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    var once = true


    window.addEventListener("scroll", function () {
      if (isInViewport(section6) && once) {
        once = !once
        videoAnimation();
      }
    });
    function videoAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      const title = document.querySelectorAll(".gx-section--six h3");
      const content = document.querySelectorAll(".gx-section--six p");
      const button = document.querySelectorAll(".gx-section--six .button-container");

      let tl = gsap.timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: ".gx-section--six",
          pin: true,
          start: "top top",
          end: "+=2500",
          scrub: true,
        },
      });

      tl.fromTo(title, {
        duration: 1,
        opacity: 0
      },
      {
        duration: 1,
        opacity: 1
      })
      .to(
        that.$refs.video,
        {
          duration: 10.5 * 3,
          currentTime: 10.5,
          pause: true
        }
      )
      .to(title, {
        duration: 1,
        opacity: 0,
        width: "50%"
      })
      .to(title, {
        duration: 1,
        width: "80%",
        scrambleText: {
          text: "",
          chars: "lowerCase"
        }
      })
      .to(title, {
        duration: 2,
        opacity: 1,
        delay: 1,
      })
      .to(title, {
        duration: 2,
        scrambleText: {
            text: "Pipeline-driven Architecture enabled by human supervised algorithms",
            chars: "lowerCase",
            revealDelay: 0,
            tweenLength: false,
          },
      })
      .to(content, {
        duration: 2,
        opacity: 1
      })
      .to(button, {
        delay: 2,
        duration: 2,
        opacity: 1
      })
      .to({}, {duration: 5})
    }
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
      this.$refs.video.style.height = height ? `${height}px` : "100vh";
      console.log('this.$refs.video.style.height ', this.$refs.video.style.height)
    },

    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      this.videoAnimation();
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
  &.VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  &.VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .VideoBg__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 14.5rem;
    h3 {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 37vh;
      opacity: 0;
      @include breakpoint($medium) {
        width: 50%;
        margin-bottom: 50px;
      }
    }
    .button-container {
      position: absolute;
      bottom: 12.5rem;
      left: 0;
      right: 0;
      margin: auto;
    }
    p, .button-container {
      opacity: 0;
    }
  }
}
</style>
 