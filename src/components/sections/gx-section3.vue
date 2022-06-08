<template>
  <div
    class="gx-section gx-section--three"
    v-observe-visibility="visibilityChanged"
  >
    <div class="right-to-center">
      <div class="videoContainer">
        <div class="content">
          <div class="container">
            <h3 class="hidden-xs hidden-md">
              Early Warning Signals and Trend Detections
            </h3>
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

      const containerOne =
        document.getElementsByClassName("gx-section--three")[0];
      const firstSection =
        containerOne.getElementsByClassName("right-to-center")[0];

      const firstTitle = firstSection.querySelectorAll(".content")[0];

      console.log("container: ", containerOne, " section: ", firstSection);

      if (window.innerWidth > 1024) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerOne,
            pin: true,
            start: "top top",
            end: "center center",
            scrub: false,
            pinSpacing: true,
            markers: true,
            id: "start-of-trigger"
          },
        });

        tl.to(firstSection, {
          transform: "translateX(500px)",
          opacity: 1,
          duration: 1,
        })
        .to(firstTitle, {
          opacity: 1,
          duration: 0.5,
        })

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: containerOne,
            pin: true,
            start: "center 40%",
            end: "bottom top",
            scrub: false,
            pinSpacing: true,
            markers: true,
            id: "end-of-trigger"
          },
        })
        tl2.to(firstTitle, {
          opacity: 0,
          duration: 0.5,
        })
        .fromTo(firstSection, {
          transform: "translateX(500px)",
          duration: 1,
        },
        {
          transform: "translateX(100vw)",
          duration: 1,
        });
      } else {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerOne,
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
        }).to(firstSection, {
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
        opacity: 0;
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
 