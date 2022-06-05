<template>
  <div
    class="gx-section gx-section--three"
    v-observe-visibility="visibilityChanged"
  >
    <div class="right-to-center">
      <div class="videoContainer">
        <div class="content">
          <div class="container">
            <h3 class="hidden-xs hidden-md">Early Warning Signals and Trend Detections</h3>
            <h5>
              Analytics delivering signal not noise with sources that work in
              the future not just the past.
            </h5>
            <h5>
              Constantly fine-tuned to find signals relevant in the current
              moment.
            </h5>
            <a class="btn btn--primary btn--primary--darkB" href="#"
              >Find out how</a
            >
          </div>
        </div>
        <div class="videoAnimation">
          <img src="../../assets/imgs/gx-tablet.svg" alt="" />
          <video autoplay playsinline muted="muted" ref="video">
            <source src="../../assets/videos/section2.mp4" />
          </video>
        </div>
        <div class="title show-xs">
          <h3>Early Warning Signals and Trend Detections</h3>
        </div>
      </div>
    </div>
    <div class="left-to-center">
      <div class="videoContainer">
        <div class="content">
          <div class="container">
            <h3 class="hidden-xs hidden-md">Automated Credit Modelling</h3>
            <h5>
              Tailored digitalization model to forecast client’s financials.
            </h5>
            <h5>Peer benchmarking.</h5>
            <h5>Making excel redundant.</h5>
            <a class="btn btn--primary btn--primary--darkB" href="#"
              >Find out how</a
            >
          </div>
        </div>
        <div class="videoAnimation">
          <img src="../../assets/imgs/gx-tablet.svg" alt="" />
          <video autoplay playsinline muted="muted" ref="video">
            <source src="../../assets/videos/section4.mp4" />
          </video>
        </div>
        <div class="title show-xs">
          <h3>Automated Credit Modelling</h3>
        </div>
      </div>
    </div>
    <div class="right-to-center">
      <div class="videoContainer">
        <div class="content">
          <div class="container">
            <h3 class="hidden-xs hidden-md">Predictive Analytics with Real Time Simulation</h3>
            <h5>
              It is constantly fine tuning to find what is relevant in the
              moment, built for you.
            </h5>
            <h5>
              Constantly fine-tuned to find signals relevant in the current
              moment.
            </h5>
            <a class="btn btn--primary btn--primary--darkB" href="#"
              >Find out how</a
            >
          </div>
        </div>
        <div class="videoAnimation">
          <img src="../../assets/imgs/gx-tablet.svg" alt="" />
          <video autoplay playsinline muted="muted" ref="video">
            <source src="../../assets/videos/section1.mp4" />
          </video>
        </div>
        <div class="title show-xs">
          <h3>Predictive Analytics with Real Time Simulation</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    animations() {
      gsap.registerPlugin(ScrollTrigger);

      const container = document.getElementsByClassName("gx-section--three")[0];
      const firstSection =
        container.getElementsByClassName("right-to-center")[0];
      const secondSection =
        container.getElementsByClassName("left-to-center")[0];
      const thirdSection =
        container.getElementsByClassName("right-to-center")[1];

      if (window.innerWidth > 1024) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            start: "top top",
            end: "+=2500",
            scrub: true,
            pinSpacing: true,
          },
        });

        tl.to(firstSection, {
          transform: "translateX(500px)",
          opacity: 1,
          duration: 200,
        })
          .to(firstSection, {
            transform: "translateX(100vw)",
            duration: 200,
            delay: 500,
          })

          .to(secondSection, {
            transform: "translateX(-500px)",
            opacity: 1,
            duration: 200,
            delay: 50,
          })
          .to(secondSection, {
            transform: "translateX(-100vw)",
            duration: 200,
            delay: 500,
          })

          .to(thirdSection, {
            transform: "translateX(500px)",
            opacity: 1,
            duration: 200,
            delay: 50,
          })
          .to(thirdSection, {
            transform: "translateX(100vw)",
            duration: 200,
            delay: 500,
          });
      } else {

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            start: "top top",
            end: "+=2500",
            scrub: true,
            pinSpacing: true,
          },
        });

        tl.to(firstSection, {
          transform: "translateX(0)",
          opacity: 1,
          duration: 200,
        })
          .to(firstSection, {
            transform: "translateX(100vw)",
            duration: 200,
            delay: 500,
          })

          .to(secondSection, {
            transform: "translateX(0)",
            opacity: 1,
            duration: 200,
            delay: 50,
          })
          .to(secondSection, {
            transform: "translateX(-100vw)",
            duration: 200,
            delay: 500,
          })

          .to(thirdSection, {
            transform: "translateX(0)",
            opacity: 1,
            duration: 200,
            delay: 50,
          })
          .to(thirdSection, {
            transform: "translateX(100vw)",
            duration: 200,
            delay: 500,
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
  .right-to-center {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transform: translatex(-100vw);
    opacity: 0;
    .videoContainer {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      position: relative;
      flex-direction: column-reverse;
      padding: 0 20px;
      height: calc(100vh - 10px);
      margin-top: 10px;
      justify-content: center;
      @include breakpoint($medium) {
        flex-direction: row;
        height: 100vh;
        margin-top: 0;
      }
      .videoAnimation {
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
        padding: 0;
        width: 100%;
        height: 30vh;
        @include breakpoint($medium) {
          height: 100vh;
          width: 100vw;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 100%;
          box-shadow: 0px 0px 79px 29px rgba(0, 109, 216, 0.5);
          border-radius: 37px;
          @include breakpoint($medium) {
            width: 55%
          }
        }
        video {
          width: 90%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          @include breakpoint($medium) {
            width: 50%;
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 100%;
        @include breakpoint($medium) {
          width: 350px;
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
  }
  .left-to-center {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transform: translate(100vw);
    opacity: 0;
    .videoContainer {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      position: relative;
      flex-direction: column-reverse;
      padding: 0 20px;
      height: calc(100vh - 10px);
      margin-top: 10px;
      justify-content: center;
      @include breakpoint($medium) {
        flex-direction: row-reverse;
        height: 100vh;
        margin-top: 0;
      }
      .videoAnimation {
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
        padding: 0;
        width: 100%;
        height: 30vh;
        @include breakpoint($medium) {
          height: 100vh;
          width: 100vw;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 100%;
          box-shadow: 0px 0px 79px 29px rgba(0, 109, 216, 0.5);
          border-radius: 37px;
          @include breakpoint($medium) {
            width: 55%;
          }
        }
        video {
          width: 90%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          @include breakpoint($medium) {
            width: 50%;
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 100%;
        transition: all 1s ease;
        @include breakpoint($medium) {
          width: 350px;
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
  }
}
</style>
 