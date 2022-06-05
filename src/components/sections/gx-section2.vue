<template>
  <div class="gx-section gx-section--two">
    <h3 v-observe-visibility="visibilityChanged"></h3>
    <div class="videoAnimation">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <video class="videoOne" autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section1.mp4" />
        </video>
        <video class="videoTwo" autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section1-2.mp4" />
        </video>
      </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    textAnimation() {
      gsap.registerPlugin(ScrambleTextPlugin);
      gsap.registerPlugin(ScrollTrigger);

      const gxSectionTwo = document.getElementsByClassName('gx-section--two')[0]
      const title = gxSectionTwo.querySelectorAll('h3')[0]
      const video1 = gxSectionTwo.querySelectorAll('.videoOne')[0]
      const video2 = gxSectionTwo.querySelectorAll('.videoTwo')[0]

      const video1Total = video1.duration
      const video2Total = video2.duration

      let tl = gsap.timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: gxSectionTwo,
          pin: true,
          start: "top top",
          stop: "bottom bottom",
          scrub: true,
          pinSpacing: true
        },
      })

      tl.to(title, {
        duration: 5,
        scrambleText: {
          text: "Confidence and sophistication in decision making",
          chars: "lowerCase",
          revealDelay: 0,
          tweenLength: false,
        },
        opacity: 1,
        })
        .to(video1, {
          duration: 1,
          opacity: 1
        })
        .to(video1, {
          duration: video1Total * 3,
          currentTime: video1Total,
          overwite: true,
          pause: true
        })
        .to(title, {
          duration: 5,
          scrambleText: {
            text: "Internal and external data sources connected.",
            chars: "lowerCase",
            revealDelay: 0,
            tweenLength: false,
          },
        })
        .to(video2, {
          duration: 1,
          opacity: 1
        })
        .to(video2, {
          duration: video2Total * 3,
          currentTime: video2Total,
          overwite: true,
          pause: true
        })
        .to(title, {
          opacity: 0,
          duration: 1
        })
    },
    visibilityChanged (isVisible) {
      this.isVisible = isVisible
      if (this.isVisible) {
        this.textAnimation()
      }
      }
  },
  mounted() {

    
  },
};
</script>


<style lang="scss">
.gx-section--two {
  text-align: center;
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  h3 {
    margin-top: 12rem;
    opacity: 0;
  }
  .videoAnimation {
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    width: 80vw;
    height: 88vh;
    overflow: visible;
    background-size: 100%;
    margin: auto;
    max-width: 80vw;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 55%;
      box-shadow: 0px 0px 79px 29px rgba(0, 109, 216, 0.5);
      border-radius: 37px;
    }
    video {
      position: absolute;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: 0;
      margin: auto;
      width: 50%;
      opacity: 0;
    }
  }
}
</style>
 