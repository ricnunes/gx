<template>
  <div
    class="gx-section gx-section--three"
    v-observe-visibility="visibilityChanged"
  >
    <div class="container">
      <div class="left-text">
        <h3 id="leftTitle"></h3>
        <div id="leftCopy" class="copy">
          <h5></h5>
          <h5></h5>
          <a href="#"
            class="btn btn--primary btn--primary--darkB"
          >
            Find out how
          </a>
        </div>
      </div>
      <div class="right-text">
        <h3 id="rightTitle"></h3>
        <div class="copy" id="rightCopy">
          <h5></h5>
          <h5></h5>
          <h5></h5>
          <a class="btn btn--primary btn--primary--darkB" href="#"
            >Find out how</a
          >
        </div>
      </div>
    </div>
    <div class="ipad">
      <img src="../../assets/imgs/gx-tablet.svg" alt="" />
      <video id="videoOne" autoplay playsinline muted="muted" ref="video">
        <source src="../../assets/videos/section2.mp4" />
      </video>
      <video id="videoTwo" autoplay playsinline muted="muted" ref="video">
        <source src="../../assets/videos/section3.mp4" />
      </video>
      <video id="videoThree" autoplay playsinline muted="muted" ref="video">
        <source src="../../assets/videos/section4.mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (this.isVisible) {
        this.animations();
      }
    },
    toggleVideo(id, play) {
      let el = document.getElementById(id);
      return function () {
        let st = ScrollTrigger.getById("ipadsAnimation");
        if (st) {
          if ((play && st.direction > 0) || (!play && st.direction < 0)) {
            el.play();
          } else {
            el.pause();
          }
        }
      };
    },
    animations() {
      gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin);

      const container = document.getElementsByClassName("gx-section--three")[0];
      const leftTitle = container.querySelectorAll("#leftTitle");
      const leftCopy = container.querySelectorAll("#leftCopy");
      const rightTitle = container.querySelectorAll("#rightTitle");
      const rightCopy = container.querySelectorAll("#rightCopy");

      const leftTitle1stParagrapgh = container.querySelectorAll("h5")[0];
      const leftTitle2ndParagrapgh = container.querySelectorAll("h5")[1];

      const leftBtn = container.querySelectorAll(".btn")[0];
      const rightBtn = container.querySelectorAll(".btn")[1];

      const rightSide1stParagrapgh = container.querySelectorAll("h5")[2];
      const rightSide2ndParagrapgh = container.querySelectorAll("h5")[3];
      const rightSide3rdParagrapgh = container.querySelectorAll("h5")[4];

      const ipads = container.querySelectorAll(".ipad")[0];
      const firstVideo = ipads.querySelectorAll("#videoOne");
      const secondVideo = ipads.querySelectorAll("#videoTwo");
      const thirdVideo = ipads.querySelectorAll("#videoThree");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pinSpacing: true,
          id: "ipadsAnimation",
        },
      });

      if (window.innerWidth > 768) {
        tl.to(ipads, {
          transform: "translateX(30vw)",
          opacity: 1,
          duration: 1,
        })
          .to(firstVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoOne", true))
          .to(leftTitle, {
            opacity: 1,
            duration: 0.5,
            scrambleText: {
              text: "Early Warning Signals and Trend Detections",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(leftCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0.5,
            text: "Analytics delivering signal not noise with sources that work in the future not just the past.",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0.5,
            text: "Constantly fine-tuned to find signals relevant in the current moment.",
          })
          .to(leftBtn, {
            opacity: 1,
            duration: 0.5,
          })
          .to(leftCopy, {
            opacity: 0,
            duration: 1,
            delay: 3,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(leftTitle, {
            opacity: 0,
            duration: 1,
          })

          .to(ipads, {
            transform: "translateX(-30vw)",
            duration: 1,
          })
          .to(firstVideo, {
            opacity: 0,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoOne", false))
          .to(secondVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoTwo", true))
          .to(rightTitle, {
            duration: 1,
            scrambleText: {
              text: "Automated Credit Modelling",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(rightCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(rightSide1stParagrapgh, {
            duration: 0.5,
            text: "Tailored digitalization model to forecast client’s financials.",
          })
          .to(rightSide2ndParagrapgh, {
            duration: 0.5,
            text: "Peer benchmarking.",
          })
          .to(rightSide3rdParagrapgh, {
            duration: 0.5,
            text: "Making excel redundant.",
          })
          .to(rightBtn, {
            opacity: 1,
            duration: 0.5,
          })
          .to(rightCopy, {
            opacity: 0,
            duration: 1,
            delay: 3,
          })
          .to(rightSide1stParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightSide2ndParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightSide3rdParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightTitle, {
            opacity: 0,
            duration: 1,
          })
          .to(ipads, {
            transform: "translateX(-30vw)",
            duration: 1,
          })

          .to(ipads, {
            transform: "translateX(30vw)",
            duration: 1,
          })
          .to(secondVideo, {
            opacity: 0,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoTwo", false))
          .to(thirdVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoThree", true))
          .to(leftTitle, {
            opacity: 1,
            duration: 0.5,
            scrambleText: {
              text: "Predictive Analytics with Real Time Simulation",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(leftCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0.5,
            text: " It is constantly fine tuning to find what is relevant in the moment, built for you.",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0.5,
            text: "Constantly fine-tuned to find signals relevant in the current moment.",
          })
          .to(leftBtn, {
            opacity: 1,
            duration: 0.5,
          });
      } else {
        tl.to(ipads, {
          transform: "translateX(0)",
          opacity: 1,
          duration: 1,
        })
          .to(firstVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoOne", true))
          .to(leftTitle, {
            opacity: 1,
            duration: 0.5,
            scrambleText: {
              text: "Early Warning Signals and Trend Detections",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(leftCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0.5,
            text: "Analytics delivering signal not noise with sources that work in the future not just the past.",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0.5,
            text: "Constantly fine-tuned to find signals relevant in the current moment.",
          })
          .to(leftBtn, {
            opacity: 1,
            duration: 0.5,
          })
          .to(leftCopy, {
            opacity: 0,
            duration: 1,
            delay: 3,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(leftTitle, {
            opacity: 0,
            duration: 1,
          })

          .to(ipads, {
            transform: "translateX(0)",
            duration: 1,
          })
          .to(firstVideo, {
            opacity: 0,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoOne", false))
          .to(secondVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoTwo", true))
          .to(rightTitle, {
            duration: 1,
            scrambleText: {
              text: "Automated Credit Modelling",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(rightCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(rightSide1stParagrapgh, {
            duration: 0.5,
            text: "Tailored digitalization model to forecast client’s financials.",
          })
          .to(rightSide2ndParagrapgh, {
            duration: 0.5,
            text: "Peer benchmarking.",
          })
          .to(rightSide3rdParagrapgh, {
            duration: 0.5,
            text: "Making excel redundant.",
          })
          .to(rightBtn, {
            opacity: 1,
            duration: 0.5,
          })
          .to(rightCopy, {
            opacity: 0,
            duration: 1,
            delay: 3,
          })
          .to(rightSide1stParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightSide2ndParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightSide3rdParagrapgh, {
            duration: 0,
            text: "",
          })
          .to(rightTitle, {
            opacity: 0,
            duration: 1,
          })
          .to(ipads, {
            transform: "translateX(0)",
            duration: 1,
          })

          .to(ipads, {
            transform: "translateX(0)",
            duration: 1,
          })
          .to(secondVideo, {
            opacity: 0,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoTwo", false))
          .to(thirdVideo, {
            opacity: 1,
            duration: 0.5,
          })
          .call(this.toggleVideo("videoThree", true))
          .to(leftTitle, {
            opacity: 1,
            duration: 0.5,
            scrambleText: {
              text: "Predictive Analytics with Real Time Simulation",
              chars: "lowerCase",
              revealDelay: 0,
              tweenLength: false,
            },
          })
          .to(leftCopy, {
            opacity: 1,
            duration: 1,
          })
          .to(leftTitle1stParagrapgh, {
            duration: 0.5,
            text: " It is constantly fine tuning to find what is relevant in the moment, built for you.",
          })
          .to(leftTitle2ndParagrapgh, {
            duration: 0.5,
            text: "Constantly fine-tuned to find signals relevant in the current moment.",
          })
          .to(leftBtn, {
            opacity: 1,
            duration: 0.5,
          });
      }
    },
  },
};
</script>


<style lang="scss">
.gx-section--three {
  min-height: 100vh;
  height: 100vh;
  background: $black;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    display: flex;
    @media screen and (max-width: 768px) {
      height: 100vh;
    }
    .left-text,
    .right-text {
      height: 100vh;
      width: 100%;
      color: white;
      display: flex;
      justify-content: center;
      flex-direction: column;
      @media screen and (max-width: 768px) {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 50px 0;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      }
      a {
        opacity: 0;
      }
      h3 {
        margin-bottom: 5rem;
      }
      h5 {
        margin-bottom: 3rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .btn {
        margin-top: 5rem;
      }
    }
  }
  .ipad {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translate(100vw);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      top: -290px;
    }
    img,
    video {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    img {
      box-shadow: 0px 0px 79px 29px rgba(0, 109, 216, 0.5);
      border-radius: 37px;
      width: 55%;
      @media screen and (max-width: 768px) {
        width: 80%;
        border-radius: 10px;
      }
    }
    video {
      width: 50%;
      opacity: 0;
      @media screen and (max-width: 768px) {
        width: 75%;
      }
    }
  }
}
</style>
 