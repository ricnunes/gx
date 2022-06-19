<template>
  <div
    class="gx-section gx-section--six VideoBg hidden-xs hidden-md"
    v-observe-visibility="visibilityChanged"
  >
    <video class="brainDesktop" muted="muted" playsinline="true" id="brainDesktop" src="@/assets/videos/section6.mp4"></video>
    <video class="brainMobile" muted="muted" playsinline="true" id="brainMobile" src="@/assets/videos/section6-mobile.mp4"></video>
    <div class="VideoBg__content">
      <h3>Ontology connecting data into a single data ecosystem</h3>
      <p>Making your data more aware and turning it into truth.</p>
      <div class="button-container">
        <a href="#" class="btn btn--primary btn--primary--darkB"
          >Find out How</a
        >
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
      videoDuration: null,
      isVisible: false,
    };
  },
  mounted() {

  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (this.isVisible) {
        this.videoAnimation();
      }
    },
    videoAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      
      const title = document.querySelectorAll(".gx-section--six h3");
      const content = document.querySelectorAll(".gx-section--six p");
      const button = document.querySelectorAll(
        ".gx-section--six .button-container"
      );
      const brainVideoDesktop = document.getElementById('brainDesktop');

      let tl = gsap.timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: ".gx-section--six",
          pin: true,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pinSpacing: true
        },
      });

      tl.fromTo(
        title,
        {
          duration: 1,
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      )
        .to(brainVideoDesktop, {
          duration: 10.5 * 3,
          currentTime: 10.5,
          pause: true,
        })
        .to(title, {
          duration: 1,
          opacity: 0,
          width: "50%",
        })
        .to(title, {
          duration: 1,
          width: "80%",
          scrambleText: {
            text: "",
            chars: "lowerCase",
          },
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
          opacity: 1,
        })
        .to(button, {
          delay: 2,
          duration: 2,
          opacity: 1,
        })
        .to({}, { duration: 5 });
    }
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
  position: relative;
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
    p,
    .button-container {
      opacity: 0;
    }
  }
  .brainDesktop,
  .brainMobile {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    margin: auto;
    object-fit: cover;
  }
  .brainDesktop {
    display: none;
    @include breakpoint($large) {
      display: block;
    }
  }
  .brainMobile {
    display: block;
    @include breakpoint($large) {
      display: none;
    }
  }
}
</style>
 