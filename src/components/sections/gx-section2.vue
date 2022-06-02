<template>
  <div class="gx-section gx-section--two">
    <h3  v-observe-visibility="visibilityChanged"></h3>
    <transition name="slide-out" >
      <div class="videoAnimation" v-show="isFirstVideoplaying()">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <video autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section1.mp4" />
        </video>
      </div>
    </transition>
    <transition name="slide-in">
      <div class="videoAnimation" v-show="!isFirstVideoplaying()">
        <img src="../../assets/imgs/gx-tablet.svg" alt="" />
        <video autoplay playsinline muted="muted" ref="video">
          <source src="../../assets/videos/section1-2.mp4" />
        </video>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export default {
  data() {
    return {
      hasFirstVideoStopped: false,
      isVisible: false
    };
  },
  methods: {
    isFirstVideoplaying() {
      if (this.hasFirstVideoStopped) {
        this.textAnimation("Internal and external data sources connected.", ".gx-section--two h3")
        return false;
      } else {
        this.textAnimation("Confidence and sophistication in decision making.", ".gx-section--two h3")
        return true;
      }
    },
    textAnimation(text, section) {
      gsap.registerPlugin(ScrambleTextPlugin);
      let tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
      tl.to(section, {
          duration: 1,
          scrambleText: {
            text: text,
            chars: "lowerCase",
            revealDelay: 0,
            tweenLength: false,
          },
        });
    },
    visibilityChanged (isVisible) {
      this.isVisible = isVisible
      if (this.isVisible) {
        this.textAnimation("Confidence and sophistication in decision making.", ".gx-section--two h3")
      } else {
        this.textAnimation("", ".gx-section--two h3")
        if (this.hasFirstVideoStopped) {
          this.hasFirstVideoStopped = false
        }
      }
    },
  },
  mounted() {
    const video = document.querySelectorAll(".gx-section--two video");
    video[0].addEventListener("ended", () => {
      this.hasFirstVideoStopped = true;
    });
    
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
    }
  }
}
</style>
 