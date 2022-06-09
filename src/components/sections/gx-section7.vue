<template>
  <div class="gx-section gx-section--seven">
    <div class="bg-mobile"></div>
    <div class="title" v-observe-visibility="visibilityChanged">
      <h3></h3>
    </div>
    <TransitionGroup class="grid-container" tag="div">
      <gxCell
        transition="fade"
        v-for="(cell, index) in cells"
        :key="index"
        :symbolBefore="cell.symbolBefore"
        :title="cell.title"
        :symbolAfter="cell.symbolAfter"
        :description="cell.description"
        :postTitle="cell.postTitle"
        :subTitle="cell.subTitle"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import gxCell from "../utilities/gx-cell.vue";
export default {
  components: {
    gxCell,
  },
  data() {
    return {
      cells: [
        {
          title: "10",
          symbolBefore: "x",
          symbolAfter: null,
          description:
            "Predictive power in generating risk insights and signals",
          subTitle: null,
          postTitle: null,
        },
        {
          title: "100",
          symbolBefore: null,
          symbolAfter: "%",
          description:
            "Data accuracy guaranteed across structured and unstructured sources",
          subTitle: "Up to",
          postTitle: null,
        },
        {
          title: "90",
          symbolBefore: null,
          symbolAfter: "%",
          description: "Automation in engineering of unstructured data",
          subTitle: null,
          postTitle: null,
        },
        {
          title: "100",
          symbolBefore: null,
          symbolAfter: "%",
          description:
            "GX DataFactory with human-in-the-loop engineering data employing reusable tools & repeatable processes",
          subTitle: null,
          postTitle: "algorithmic",
        },
        {
          title: "100",
          symbolBefore: null,
          symbolAfter: "%",
          description:
            "Enterprise data model ontology for internal & external data. All Data in One Model. One Model for All Data.",
          subTitle: null,
          postTitle: "connected",
        },
        {
          title: "95",
          symbolBefore: null,
          symbolAfter: "%",
          description:
            "Accuracy of financial spreading analysis from classifiers",
          subTitle: null,
          postTitle: null,
        },
        {
          title: "50",
          symbolBefore: "~ ",
          symbolAfter: "%",
          description: "Reduction in data transformation timeline",
          subTitle: null,
          postTitle: null,
        },
        {
          title: "60",
          symbolBefore: null,
          symbolAfter: "%",
          description:
            "Data available at sector and sub-segment level for analysis",
          subTitle: null,
          postTitle: "more",
        },
      ],
      isVisible: false,
    };
  },
  mounted() {},
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      const cells = document.getElementsByClassName("cell");
      if (this.isVisible) {
        this.onEnter(cells);
      }
    },
    onEnter(items) {
      gsap.registerPlugin(ScrollTrigger);
      const container = document.getElementsByClassName('gx-section--seven')[0]
      const title = container.querySelectorAll('h3')[0];
      gsap.to(title, {
        scrambleText: {
          text: "Disrupting the Financial Services Industry",
          duration: 1,
          chars: "lowerCase",
          revealDelay: 0,
          tweenLength: false,
        }
      })
      items.forEach((item, index) => {
        let target = { val: 0 };
        let number = item.querySelectorAll("h1 .number");
        let content = item.querySelectorAll("p");
        gsap.to(item, {
          duration: 0.2,
          opacity: 1,
          scale: 1,
          delay: index * 0.15,
        })
        .to(content, {
          duration: 0.3,
          opacity: 1,
          scale: 1,
          delay: index * 0.25,
        })
        .to(target, {
          val: this.cells[index].title,
          duration: 2,
          onUpdate: function () {
            number[0].innerHTML = target.val.toFixed(0);
          },
          delay: index * 0.15,
        });
      });
    },
  },
};
</script>


<style lang="scss">
.gx-section--seven {
  background-repeat: no-repeat;
  background-position: bottom left;
  color: $white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  @include breakpoint($medium) {
    background: radial-gradient(circle at 50% 50%, #006dd8 0.87%, rgba(0, 0, 0, 0) 42%);
  }
  @include iPad() {
    background: none;
  }
  .bg-mobile {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: radial-gradient(
      circle at 50% 50%,
      #006dd8 0.87%,
      rgba(0, 0, 0, 0) 60%
    );
    @include iPad() {
      display: block !important;
    }
    @include breakpoint($medium) {
      display: none;
    }
  }
  .title {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  h3 {
    width: 40rem;
  }
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: 0 auto;
    gap: 5px;
    margin-top: 14.5rem;
    .cell {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        width: 100%;
        @include breakpoint($medium) {
          width: 33%;
        }
        @include iPad() {
          width: 100%;
        }
      }
      &:nth-child(4),
      &:nth-child(5) {
        width: 100%;
        @include breakpoint($medium) {
          width: calc(50% - 5px);
        }
        @include iPad() {
          width: 100%;
        }
      }
    }
  }
}
</style>
 